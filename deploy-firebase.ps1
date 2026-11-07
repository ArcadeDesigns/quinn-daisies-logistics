# Deploy Quinn Daisies Logistics & Technology Websites to Firebase Hosting (quinn-daisies-group)
param(
  [ValidateSet("all", "logistics", "technology")]
  [string]$Site = "all"
)

$ErrorActionPreference = "Stop"

$ServiceAccountFile = Get-ChildItem -Path $PSScriptRoot -Filter "*firebase-adminsdk*.json" -ErrorAction SilentlyContinue |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1

if ($ServiceAccountFile) {
  $env:GOOGLE_APPLICATION_CREDENTIALS = $ServiceAccountFile.FullName
  Write-Host "Using Firebase Service Account: $($ServiceAccountFile.Name)" -ForegroundColor Cyan
}

Push-Location $PSScriptRoot
try {
  if ($Site -eq "all" -or $Site -eq "logistics") {
    Write-Host "Building Quinn Daisies Logistics..." -ForegroundColor Yellow
    npm --prefix Logistics run build
  }

  if ($Site -eq "all" -or $Site -eq "technology") {
    Write-Host "Building Quinn Daisies Technology..." -ForegroundColor Yellow
    npm --prefix Technology run build
  }

  if ($Site -eq "logistics") {
    Write-Host "Deploying Logistics to https://quinn-daisies-logistics.web.app..." -ForegroundColor Green
    npx firebase-tools deploy --only hosting:logistics --project quinn-daisies-group
  } elseif ($Site -eq "technology") {
    Write-Host "Deploying Technology to https://quinn-daisies-group.web.app..." -ForegroundColor Green
    npx firebase-tools deploy --only hosting:technology --project quinn-daisies-group
  } else {
    Write-Host "Deploying BOTH Logistics & Technology to Firebase Hosting (quinn-daisies-group)..." -ForegroundColor Green
    npx firebase-tools deploy --only hosting --project quinn-daisies-group
  }
} finally {
  Pop-Location
}

