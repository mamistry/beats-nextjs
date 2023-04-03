//Create an S3 bucket to store the config
resource "aws_s3_bucket" "this" {
  bucket        = "${var.service}-${var.env}"
  force_destroy = true
  server_side_encryption_configuration {
    rule {
      apply_server_side_encryption_by_default {
        sse_algorithm = "AES256"
      }
    }
  }

  tags = {
    Name          = "BReport Storybook ${var.service}"
    application   = "application"
    contact-email = "wmsports-cloud-engrg@warnermedia.com"
    customer      = "breport"
    environment   = var.env
    team          = "wmto-wmss-wmsports"
  }
}


locals {
  subdomain = var.cname != null ? var.cname : var.service
  cname =  var.env != "prod" ? "${local.subdomain}-${var.env}": local.subdomain
  fqdn2 = ((var.env == "prod") || (var.env == "stage")) ? var.r53_fqdn2 : ""
}

//Cloudfront distribution for S3
module "cf_s3_origin" {
  source                = "git@github.com:warnermediacode/sports-terraform-aws-cloudfront.git//s3origin"
  s3_bucket_domain_name = aws_s3_bucket.this.bucket_regional_domain_name
  s3_bucket_id          = aws_s3_bucket.this.id
  s3_bucket_arn         = aws_s3_bucket.this.arn
  certificate_arn       = var.acm_cert_arn
  fqdn                  = "${local.cname}.${var.r53_host_zone_domain}"
  fqdn2                 = local.fqdn2
  hosted_zone           = var.r53_host_zone_domain
}

output "fqdn" {
  value = "https://${local.cname}.${var.r53_host_zone_domain}"
}

output "cf_arn" {
  value = module.cf_s3_origin.arn
}