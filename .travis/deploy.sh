#! /bin/bash
set -e

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
    echo "Skipping deploy, just doing a build."
    npm test
    npm run build
    exit 0
fi

npm test
npm run build
#
# # Sync master to coding.net
# git remote add coding git@git.coding.net:$TRAVIS_REPO_SLUG.git
# git checkout master
# git push coding master
#
# # Get latest commit hash of master
# LATEST_HASH=$(git log -n 1 --pretty=format:"%H")
#
# # Clone a new repo to .deploy
# rm -rf .deploy
# git clone git@github.com:$TRAVIS_REPO_SLUG.git .deploy
# cd .deploy
# git remote add coding git@git.coding.net:$TRAVIS_REPO_SLUG.git
#
# # Copy all build results to .deploy
# git checkout gh-pages
# git pull origin gh-pages
# find -maxdepth 1 ! -name '.' ! -name '.git' ! -name '.gitignore' | xargs rm -r
# rsync -a ../public/ ./
#
# # Push if has change
# if [ -n "$(git status --porcelain)" ]; then
#   git add --all
#   git commit -m "Update to $LATEST_HASH"
#   git push origin gh-pages
#   git push coding gh-pages:coding-pages
# else
#   echo "No updates"
# fi
#
# cd ..
# rm -rf .deploy
