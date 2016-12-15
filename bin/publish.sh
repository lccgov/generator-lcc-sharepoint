#!/bin/sh
set -e
VERSION_LATEST=`cat package.json | jq '.version'`
VERSION_REGISTRY=`npm view generator-lcc-sharepoint version`
echo "VERSION_LATEST $VERSION_LATEST";
echo "VERSION_REGISTRY $VERSION_REGISTRY";
V_LATEST="$VERSION_LATEST" | tr -d '"'
echo "V_LATEST $V_LATEST";


if [ "$V_LATEST" != "$VERSION_REGISTRY" ]; then
  echo "Publishing package $V_LATEST";
  npm whoami
  npm publish
else
  echo "Version is the same as the version available on the registry"
  echo "Not publishing anything"
fi