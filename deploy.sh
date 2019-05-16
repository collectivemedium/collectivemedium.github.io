#!/bin/sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git lfs track "*.mp4"
git add -A
git commit -m 'deploy'

git push -f git@github.com:collectivemedium/collectivemedium.github.io.git master

cd -