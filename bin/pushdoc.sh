cd ./docs/.vuepress/dist

git init

git config user.name "四铢半两"
git config user.email "389701057@qq.com"

git add .

git commit -m "+"

git remote add origin https://gitee.com/jw-chat/gitpull.git

git push -f origin master
