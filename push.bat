@echo off
setlocal

echo ========================================================
echo  Pritish Mund Portfolio - GitHub Push Helper
echo ========================================================
echo.

set /p REPO_URL="Enter your GitHub repository URL (e.g. https://github.com/pritishmund01/portfolio.git): "

if "%REPO_URL%"=="" (
    echo [ERROR] No URL provided. Please enter a valid GitHub repository URL.
    pause
    exit /b 1
)

echo.
echo [1/3] Setting remote origin to %REPO_URL%...
git remote remove origin 2>nul
git remote add origin %REPO_URL%

echo [2/3] Verifying branch main...
git branch -M main

echo [3/3] Pushing to GitHub...
git push -u origin main

if %ERRORLEVEL% equ 0 (
    echo.
    echo ========================================================
    echo  SUCCESS! Your portfolio is now pushed to GitHub!
    echo ========================================================
) else (
    echo.
    echo [NOTE] If prompted, sign in using your GitHub credentials.
)

pause
