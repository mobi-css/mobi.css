#! /bin/bash
set -e

# Pull requests and commits to other branches shouldn't try to deploy, just build to verify
if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "master" ]; then
    echo "Skipping deploy, just doing a build."
    npm test
    npm run build
    exit 0
fi

openssl aes-256-cbc -K $encrypted_bba0dbd5ff95_key -iv $encrypted_bba0dbd5ff95_iv -in .travis/id_rsa.enc -out ~/.ssh/id_rsa -d
chmod 600 ~/.ssh/id_rsa
eval $(ssh-agent)
ssh-add ~/.ssh/id_rsa
cp .travis/ssh_config ~/.ssh/config

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
