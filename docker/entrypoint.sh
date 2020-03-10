#!/bin/bash -eux

if [ "$INIT" -eq "1" ]
then
    yarn global add @vue/cli  
    vue --version
    yarn global add @vue/cli-service-global
    yarn install
fi
    
yarn serve
