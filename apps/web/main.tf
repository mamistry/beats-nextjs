terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 4.0"
    }
  }

  required_version = ">= 0.14"
}

# Main region where the resources should be created in
# Should be close to the location of your viewers
provider "aws" {
  region = "us-east-1"
}

# Provider used for creating the Lambda@Edge function which must be deployed
# to us-east-1 region (Should not be changed)
provider "aws" {
  alias  = "us_east_1"
  region = "us-east-1"
}



###########
# Variables
###########

variable "custom_domain" {
  description = "Your custom domain"
  type        = string
  default     = "beatsnext.com"
}

# Assuming that the ZONE of your domain is already available in your AWS account (Route 53)
# https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/AboutHZWorkingWith.html
variable "custom_domain_zone_name" {
  description = "The Route53 zone name of the custom domain"
  type        = string
  default     = "beatsnext.com"
}

variable "lambda_array" {
  description = "Lambdas to create"
  type = map(object({
    name = string
    source_dir = string
  }))
  default = {    
    "default" = {
      name = "default",
      source_dir = "deploy/.serverless_nextjs/default-lambda"
    }
    "image" = {
      name = "image",
      source_dir = "deploy/.serverless_nextjs/image-lambda"
    }
    "api" = {
      name = "api",
      source_dir = "deploy/.serverless_nextjs/api-lambda"
    }
    "regeneration" = {
      name = "regeneration",
      source_dir = "deploy/.serverless_nextjs/regeneration-lambda"
    }
  }
}

variable "cloudfront_cert" {
  type = string
  default = "arn:aws:acm:us-east-1:494055087689:certificate/5f7d43f5-71bb-45af-86c9-296ad3dab240"
}

########
# S3 bucket
########
# Note: The bucket name needs to carry the same name as the domain!
# http://stackoverflow.com/a/5048129/2966951
resource "aws_s3_bucket" "beats-nextjs-bucket" {
  bucket = "${terraform.workspace}-beats-nextjs"
}

resource "aws_cloudfront_origin_access_identity" "my-oai" {
  comment = "my-oai"
}

resource "aws_s3_bucket_policy" "cdn-cf-policy" {
  bucket = aws_s3_bucket.beats-nextjs-bucket.id
  policy = data.aws_iam_policy_document.my-cdn-cf-policy.json
}

data "aws_iam_policy_document" "my-cdn-cf-policy" {
  statement {
    sid = "1"
    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.my-oai.iam_arn]
    }

    actions = [
      "s3:GetObject"
    ]

    resources = [
      "${aws_s3_bucket.beats-nextjs-bucket.arn}/*"
    ]
  }
}

module "template_files" {
  source = "hashicorp/dir/template"

  base_dir = "./deploy/.serverless_nextjs/assets"
  template_vars = {
    # Pass in any values that you wish to use in your templates.
    vpc_id = "vpc-abc123"
  }
}

module "cloudfront_s3" {
  source                           = "git@github.com:warnermediacode/sports-terraform-aws-nextjs-module.git/"
  providers = {
    aws = aws.us_east_1
  }
  environment                      = terraform.workspace
  s3_bucket_regional_domain_name   = aws_s3_bucket.beats-nextjs-bucket.bucket_regional_domain_name
  s3_bucket_arn                    = aws_s3_bucket.beats-nextjs-bucket.arn
  custom_domain                    = var.custom_domain
  custom_domain_zone_name          = var.custom_domain_zone_name
  lambda_array                     = var.lambda_array
  certificate_arn                  = var.cloudfront_cert
  cloudfront_access_identity_path  = aws_cloudfront_origin_access_identity.my-oai.cloudfront_access_identity_path
  service_name                     = "beatsnext" 
}

resource "aws_s3_bucket_object" "dist" {
  for_each     = module.template_files.files

  bucket       = aws_s3_bucket.beats-nextjs-bucket.id
  key          = each.key
  content_type = each.value.content_type
  source  = each.value.source_path
  content = each.value.content
  cache_control = "public, max-age=0, s-maxage=2678400, must-revalidate"
  # etag makes the file update when it changes; see https://stackoverflow.com/questions/56107258/terraform-upload-file-to-s3-on-every-apply
  etag = each.value.digests.md5
}
