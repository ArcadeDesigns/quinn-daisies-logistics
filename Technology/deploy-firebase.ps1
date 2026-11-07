# Deploy Quinn Daisies Technology & IT Solutions to Firebase Hosting (quinn-daisies-group)
$ErrorActionPreference = "Stop"

$ServiceAccountPath = Resolve-Path "$PSScriptRoot\..\quinn-daisies-group-firebase-adminsdk-fbsvc-3adf78eaff.json" -ErrorAction SilentlyContinue
if ($ServiceAccountPath) {
  $env:GOOGLE_APPLICATION_CREDENTIALS = $ServiceAccountPath.Path
  Write-Host "Using Firebase Service Account: $($env:GOOGLE_APPLICATION_CREDENTIALS)" -ForegroundColor Cyan
}

Push-Location $PSScriptRoot
try {
  Write-Host "1. Building Quinn Daisies Technology React application..." -ForegroundColor Yellow
  npm run build

  Write-Host "2. Deploying dist/ to Firebase Hosting project 'quinn-daisies-group'..." -ForegroundColor Yellow
  npx firebase-tools deploy --only hosting --project quinn-daisies-group
} finally {
  Pop-Location
}

