terraform {
  required_providers {
    aws = {
      source = "hashicorp/aws"
      version = "~>3"
    }
  }

  required_version = ">= 0.14"
  backend "s3" {
    region = "us-east-2"
  }
}

provider "aws" {
  region = var.region
}

provider "aws" {
  alias = "virginia"
  region = "us-east-1"
}