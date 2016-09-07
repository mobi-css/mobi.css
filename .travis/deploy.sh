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

echo "Syncing master to coding.net"
git remote add coding git@git.coding.net:$TRAVIS_REPO_SLUG.git
git checkout master
git push coding master

echo "Deploying site"
cd site
npm install
npm run deploy
