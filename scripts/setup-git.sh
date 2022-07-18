#! /bin/bash

cat <<EOF
    initialize the git extension file, you can configure the .gitconfig
EOF

git config --local include.path ../scripts/.gitconfig
