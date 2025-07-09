@echo off
echo 🔧 Installing required dependencies...
call npm install --no-audit --silent

echo 📦 Packaging VS Code extension using @vscode/vsce...
call npx @vscode/vsce package

if %ERRORLEVEL% NEQ 0 (
    echo ❌ Packaging failed. Check errors above.
    pause
    exit /b %ERRORLEVEL%
)

echo ✅ Done! Check for your .vsix file in this folder:
explorer .

echo.
echo Press any key to close this window...
pause > nul
