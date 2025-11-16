# Test the paywall endpoint
$url = "http://localhost:3000/stories/when-the-flames-fall"
$headers = @{
    "Accept" = "text/html"
}

Write-Host "Testing paywall at: $url" -ForegroundColor Cyan
Write-Host ""

try {
    $response = Invoke-WebRequest -Uri $url -Method GET -Headers $headers -ErrorAction SilentlyContinue
    
    Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Green
    Write-Host ""
    Write-Host "Response Headers:" -ForegroundColor Yellow
    $response.Headers.GetEnumerator() | ForEach-Object {
        Write-Host "$($_.Key): $($_.Value)"
    }
    
    Write-Host ""
    Write-Host "Response Body (first 2000 chars):" -ForegroundColor Yellow
    $content = $response.Content
    if ($content.Length -gt 2000) {
        Write-Host $content.Substring(0, 2000)
        Write-Host "... [truncated]"
    } else {
        Write-Host $content
    }
    
} catch {
    $response = $_.Exception.Response
    if ($response) {
        Write-Host "Status Code: $($response.StatusCode)" -ForegroundColor Red
        Write-Host ""
        Write-Host "Response Headers:" -ForegroundColor Yellow
        $response.Headers | ForEach-Object {
            Write-Host "$($_): $($response.Headers[$_])"
        }
        
        Write-Host ""
        Write-Host "Response Body:" -ForegroundColor Yellow
        $reader = [System.IO.StreamReader]::new($response.GetResponseStream())
        $content = $reader.ReadToEnd()
        $reader.Close()
        
        if ($content.Length -gt 2000) {
            Write-Host $content.Substring(0, 2000)
            Write-Host "... [truncated]"
        } else {
            Write-Host $content
        }
    } else {
        Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    }
}
