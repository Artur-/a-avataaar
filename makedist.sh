#!/bin/bash

cp src/a-avataaar.js dist/
for svg in `find src/assets -type f -name "*.svg"`
do
	find="$svg"
	dataSvg=`echo $svg|sed "s/assets/assets-dataurl/g"`
#	replace=`node svg-to-dataurl.js $svg`
	replace=`cat $dataSvg`
	gsed -i "s@$find@$replace@g" dist/a-avataaar.js
done
