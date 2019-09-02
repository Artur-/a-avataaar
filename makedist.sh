#!/bin/bash

cp src/a-avataaar.js dist/
for svg in `find src/assets -type f -name "*.svg"`
do
	find="$svg"
	replace=`node svg-to-dataurl.js $svg`
	gsed -i "s@$find@$replace@g" dist/a-avataaar.js
done
