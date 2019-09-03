 #!/bin/bash
 
(
  echo 'import { svg } from "lit-html";' 
  echo 
  for svg in *.svg 
  do 
    bare=`echo $svg|gsed "s/\.svg//"`
    echo "const $bare = svg\`"
    cat $svg|sed "s/'mask/'$bare-mask/g"|sed "s/#mask/#$bare-mask/"|sed "s/'path/'$bare-path/g"|sed "s/#path/#$bare-path/g"|grep -v "^<svg"|grep -v "^</svg>" 
    echo "\`;"  
  done
)
 