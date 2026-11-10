@echo off
chcp 65001 >nul
title MIDTERM PLANNER - all subjects (server)
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0server.ps1"
pause
