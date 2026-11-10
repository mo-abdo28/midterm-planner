# ============================================================
#  MIDTERM PLANNER - local server (Windows / PowerShell)
#  Serves the whole "Sophomore semester1" folder so the planner
#  and every subject folder (Lectures / Labs / Tutorials PDFs)
#  are reachable through relative links.
#  YouTube refuses embed players when the page is opened via file://
#  so always start the site from here.
#  Keep this window open while you study. Close with Ctrl+C.
# ============================================================
$ErrorActionPreference = 'SilentlyContinue'
$root = Split-Path -Parent $PSScriptRoot
$listener = $null
$prefix = ''

foreach ($p in 8935..8955) {
  try {
    $l = New-Object System.Net.HttpListener
    $l.Prefixes.Add("http://localhost:$p/")
    $l.Start()
    $listener = $l; $prefix = "http://localhost:$p/"; break
  } catch { }
}
if (-not $listener) {
  Write-Host 'Could not start the local server on any port.'
  Read-Host 'Press Enter to exit'; exit 1
}

$url = $prefix + 'Midterm%20Planner/index.html'
Write-Host ''
Write-Host '  MIDTERM PLANNER - all subjects' -ForegroundColor Cyan
Write-Host "  Running on: $url" -ForegroundColor Green
Write-Host '  Keep this window open while you study. Close with Ctrl+C.' -ForegroundColor DarkGray
Write-Host ''

Start-Process $url

$types = @{ '.html'='text/html; charset=utf-8'; '.css'='text/css; charset=utf-8'; '.js'='application/javascript; charset=utf-8'; '.pdf'='application/pdf'; '.json'='application/json'; '.png'='image/png'; '.jpg'='image/jpeg'; '.jpeg'='image/jpeg'; '.svg'='image/svg+xml'; '.zip'='application/zip' }

while ($listener.IsListening) {
  $ctx = $listener.GetContext()
  try {
    $path = $ctx.Request.Url.AbsolutePath
    $rel = [System.Uri]::UnescapeDataString($path.TrimStart('/')) -replace '/', '\'
    if ($rel -eq '' -or $rel -eq '\') { $rel = 'Midterm Planner\index.html' }
    $file = Join-Path $root $rel
    if (Test-Path -LiteralPath $file -PathType Leaf) {
      $bytes = [System.IO.File]::ReadAllBytes($file)
      $ext = [System.IO.Path]::GetExtension($file).ToLower()
      $ct = if ($types.ContainsKey($ext)) { $types[$ext] } else { 'application/octet-stream' }
      $ctx.Response.ContentType = $ct
      $ctx.Response.ContentLength64 = $bytes.Length
      $ctx.Response.AddHeader('Cache-Control', 'no-store')
      $ctx.Response.OutputStream.Write($bytes, 0, $bytes.Length)
    } else {
      $ctx.Response.StatusCode = 404
      $b = [System.Text.Encoding]::UTF8.GetBytes('not found')
      $ctx.Response.ContentType = 'text/plain; charset=utf-8'
      $ctx.Response.ContentLength64 = $b.Length
      $ctx.Response.OutputStream.Write($b, 0, $b.Length)
    }
    $ctx.Response.Close()
  } catch { }
}
