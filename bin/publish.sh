#!/bin/sh
set -e
VERSION_LATEST=`cat package.json | jq '.version'`
VERSION_REGISTRY=`npm view generator-lcc-sharepoint`
if ["$VERSION_LATEST" != "$VERSION_REGISTRY"]; then
  echo "Publishing package $VERSION_LATEST";
  npm whoami
  npm publish
else
  echo 'Version is the same as the version available on the registry'
  echo 'Not publishing anything'
fi 