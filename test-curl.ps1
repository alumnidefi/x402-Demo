$ProgressPreference = 'SilentlyContinue'

Write-Host "Testing paywall at localhost:3000..." -ForegroundColor Cyan

try {
    $response = Invoke-WebRequest -Uri "http://localhost:3000/stories/when-the-flames-fall" `
        -Method GET `
        -SkipHttpErrorCheck `
        -MaximumRedirection 0

    Write-Host "Status: $($response.StatusCode)" -ForegroundColor Yellow
    Write-Host "Content-Type: $($response.Headers['Content-Type'])" -ForegroundColor Yellow
    Write-Host "X-PAYMENT header: $($response.Headers['X-PAYMENT'] -or 'none')" -ForegroundColor Yellow
    
    # Check if response contains paywall HTML
    if ($response.Content -match "x402|paywall|wallet|payment" -and $response.StatusCode -eq 402) {
        Write-Host "`n✓ Paywall HTML found in 402 response" -ForegroundColor Green
        Write-Host "First 500 chars:" -ForegroundColor Gray
        Write-Host $response.Content.Substring(0, [Math]::Min(500, $response.Content.Length))
    }
    elseif ($response.StatusCode -eq 402) {
        Write-Host "`n✓ Got 402 Payment Required" -ForegroundColor Green
        Write-Host "Response length: $($response.Content.Length) bytes" -ForegroundColor Gray
    }
    else {
        Write-Host "`n✗ Unexpected status code (expected 402)" -ForegroundColor Red
        Write-Host "First 1000 chars of response:" -ForegroundColor Gray
        Write-Host $response.Content.Substring(0, [Math]::Min(1000, $response.Content.Length))
    }
} catch {
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
}
