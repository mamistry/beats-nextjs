variable "env" {
    default = "dev"
}

variable "service" {
}

variable "region" {
    default = "us-east-1"
}

variable "acm_cert_arn" {
  default = "arn:aws:acm:us-east-1:494055087689:certificate/6be47825-7970-4739-b460-d47ac0214e72"
}

variable "r53_host_zone_domain" {
  default = "beatsnext.com"
}

variable "r53_host_zone_id" {
  default = "Z06628972TBI5UV1L9HS7"
}

variable "r53_fqdn2" {
  default = ""
}

variable "assume_role_arn" {
  default = null
}

variable "aws_account_type" {
  default = "nonprod"
}

variable "build_dir" {
  default = null
}

variable "cname" {
  default = null
}