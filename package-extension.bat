@echo off
echo ===============================
echo 📦 Packaging VS Code Extension
echo ===============================

vsce package

echo.
echo ✅ Packaging complete.
echo Press any key to continue...
pause >nul
