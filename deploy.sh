#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run docs:build

# git commit
cd docs/.vuepress/dist
git init
git add -A
git commit -m 'deploy'

# git push
git push -f git@github.com:DaikiNakamura/mucholog.git master
cd -