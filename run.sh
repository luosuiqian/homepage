#! /bin/sh

case "$1" in
  new)
        wget 127.0.0.1/index.html
        wget 127.0.0.1/people.html
        wget 127.0.0.1/publications.html
        wget 127.0.0.1/software.html
        wget 127.0.0.1/openings.html
        mv index.html ./public
        mv people.html ./public
        mv publications.html ./public
        mv software.html ./public
        mv openings.html ./public
        ;;
  delete)
        rm ./public/index.html
        rm ./public/people.html
        rm ./public/publications.html
        rm ./public/software.html
        rm ./public/openings.html
        ;;
    esac
    
    exit 0
