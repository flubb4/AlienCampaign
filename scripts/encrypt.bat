@echo off
REM ============================================================
REM  Encrypt a single mission HTML with staticrypt (AES-256)
REM ============================================================
REM  Usage:   scripts\encrypt.bat <path-to-html>
REM  Example: scripts\encrypt.bat missions\07-tiamat-iv.html
REM
REM  Output goes next to the input file. .staticrypt.json keeps
REM  the salt stable across re-encryptions.
REM ============================================================

cd /d "%~dp0\.."

if "%~1"=="" (
  echo.
  echo [ERROR] No file given.
  echo Usage: scripts\encrypt.bat ^<path-to-html^>
  echo.
  pause
  exit /b 1
)

if not exist "%~1" (
  echo.
  echo [ERROR] File not found: %~1
  echo.
  pause
  exit /b 1
)

echo.
set /p PWD=Enter password:

if "%PWD%"=="" (
  echo [ERROR] No password entered.
  pause
  exit /b 1
)

echo.
echo Encrypting %~1 ...
echo.

call npx -y staticrypt "%~1" -p "%PWD%" --short ^
  --template-title "RECALL AUTHORITY - MU/TH/UR 9000" ^
  --template-instructions "Weyland-Yutani // Classified // 2183" ^
  --template-placeholder "Access Code" ^
  --template-button "AUTHORIZE" ^
  --template-error "ZUGRIFF VERWEIGERT" ^
  --template-remember "Session merken" ^
  --template-color-primary "#4dff91" ^
  --template-color-secondary "#080c09" ^
  -d "%~dp1"

set PWD=

if errorlevel 1 (
  echo.
  echo [ERROR] Encryption failed.
  pause
  exit /b 1
)

echo.
echo [OK] Encrypted.
echo.
pause
