Write-Host "🔧 Installing dependencies..."
npm install --no-audit --silent

Write-Host "📦 Packaging extension..."
npx @vscode/vsce package

if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Packaging failed. Check errors above."
    exit $LASTEXITCODE
}

Write-Host "✅ Done! Your VSIX is ready."
Start-Process .
