#!/bin/bash

if [ "$1" == "chrome" ]; then
    cp manifest_chrome.json manifest.json
    echo "using chrome manifest!"
elif [ "$1" == "firefox" ]; then
    cp manifest_firefox.json manifest.json
    echo "using firefox manifest!"
elif [ "$1" == "edge" ]; then
    cp manifest_edge.json manifest.json
    echo "using edge manifest!"
else
    echo "please specify which browser you are using"
fi
