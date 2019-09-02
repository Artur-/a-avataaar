#!/bin/bash

for orig in `find src/assets-original -name "*.svg"`
do 
  asset=`echo $orig|gsed "s/-original//"`
  assetdata=`echo $orig|gsed "s/-original/-dataurl/"`
  node_modules/svgo/bin/svgo -i $orig -o $asset
  node svg-to-dataurl.js $asset > $assetdata
done
