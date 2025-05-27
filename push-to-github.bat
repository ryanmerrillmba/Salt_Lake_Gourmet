@echo off
echo Salt Lake Gourmet - GitHub Push Script
echo ====================================

echo Step 1: Initializing Git repository...
git init

echo Step 2: Adding GitHub repository as remote...
git remote add origin https://github.com/ryanmerrillmba/Salt_Lake_Gourmet.git

echo Step 3: Adding all files to git...
git add .

echo Step 4: Creating initial commit...
git commit -m "Initial commit: Salt Lake Gourmet Recipe Website with 12 featured recipes, logo integration, and modern styling"

echo Step 5: Setting main branch...
git branch -M main

echo Step 6: Pushing to GitHub...
git push -u origin main

echo ====================================
echo Push to GitHub completed!
echo Repository URL: https://github.com/ryanmerrillmba/Salt_Lake_Gourmet
pause
