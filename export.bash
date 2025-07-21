# Affixes "/demo" to all relative links in the project and copies the directory
# to the actual github repo that needs to be exported. Who needs Jekyll anyways?

<<comment
On a more serious note, you should only really use this script
on a directory you do not care too much about.
Make sure to change the below paths to something that works
for you!
comment
cp -rfT ~/Documents/prod/demo/ ~/Documents/GitHub/demo/
cd ~/Documents/GitHub/demo/
# rg "[\/].+[\.].+" --files-with-matches | xargs sed -i "s|\/[^\/\*][^\*<>]\+[\.].\+|/demo&|g"
rg "[\/].+[\.].+" --files-with-matches | xargs sed -i "s|\(\"\)\(\/[^\/\*][^\*<>]\+[\.].\+\)\(\"\)|\1/demo\2\3|g"
cd ~/Documents/prod/demo/
