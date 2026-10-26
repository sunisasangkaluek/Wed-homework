@echo off
chcp 65001 >nul
echo กำลังเปิดร้านปังปุริเย่ เบเกอรี่...
start "" "http://localhost:5500"
if errorlevel 1 (
    start "" "%~dp0index.html"
)
exit
