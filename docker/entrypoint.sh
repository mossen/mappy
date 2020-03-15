#!/bin/bash -eux

if [ "$INIT" -eq "1" ]
then
    yarn global add @vue/cli  
    echo "vue/cli has been installed!"
    vue --version
    yarn global add @vue/cli-service-global
    echo "vue/cli-service-global has been installed!"
    echo "installing packages, be patient!"
    yarn install
    echo "yarn has installed packages!"
fi


tail -f /dev/null  
echo "serving..."
# yarn serve
