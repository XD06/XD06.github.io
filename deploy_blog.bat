@echo off
chcp 65001 >nul
@echo 正在清理·······
call hexo clean || echo errors
if errorlevel 1 pause
@echo 生成静态文件.....
call hexo g
@echo 部署netlify·····
xcopy "D:\Blog\new_blog\public" "D:\public"  /E /H /Y
cd D:\public
git add .
git commit -m "test1"
git push -f origin main
pause