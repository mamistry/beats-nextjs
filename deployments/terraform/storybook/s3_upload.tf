locals {
  build_dir =  var.build_dir == null ?  "${path.cwd}/../../../dist/storybook/${var.service}/" : "${path.cwd}/${var.build_dir}"
}


variable "mime_types" {
  default = {
    htm  = "text/html"
    html = "text/html"
    css  = "text/css"
    ttf  = "font/ttf"
    js   = "application/javascript"
    map  = "application/javascript"
    json = "application/json"
    svg  = "image/svg+xml"
    ico  = "image/vnd.microsoft.icon"
    md   = "text/markdown"
    png  = "image/png"
    jpeg = "image/jpeg"
    jpg  = "image/jpg"
    woff = "font/woff"
    gitkeep = "text/plain"
    tsx = "application/javascript"
    gz = "application/gzip"
    txt = "text/plain"
    ts = "text/javascript"
  }
}

resource "aws_s3_bucket_object" "website_files" {
  for_each     = fileset(local.build_dir, "**/*.*")
  bucket       = aws_s3_bucket.this.bucket
  key          = replace(each.value, local.build_dir, "")
  source       = "${local.build_dir}${each.value}"
  etag         = filemd5("${local.build_dir}${each.value}")
  content_type = lookup(var.mime_types, split(".", each.value)[length(split(".", each.value)) - 1],"application/octet-stream")
}

output "test" {
  value = local.build_dir
}