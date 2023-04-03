# data "aws_ssm_parameter" "cert_arn" {
#   provider = aws.virginia
#   name = var.acm_cert_ssm_key
# }

# data "aws_ssm_parameter" "host_zone_domain" {
#   name = var.r53_host_zone_domain_ssm_key
# }

# data "aws_ssm_parameter" "host_zone_id" {
#   name = var.r53_host_zone_id_ssm_key
# }

# data "aws_ssm_parameter" "fqdn2" {
#   name = var.r53_fqdn2
# }