#!/bin/bash

# env file path
env_file_path=".env"

# create env file if not exists
# create_env_file() {
#     if [ ! -f $env_file_path ]; then
#         echo "Creating .env file"
#         touch $env_file_path
#     fi
# }

# update env variables
update_env_file() {
    echo "Updating .env file"
    sed -i '' "s/$1/$2/" $env_file_path
}

# start

# check if env variable exists
# create_env_file

# github secrets are stored in the .env file
# update_env_file "@SECRET_FUNDEBUG_SHOP_APIKEY" "$FUNDEBUG_SHOP_APIKEY"
sed -i "s/@FUNDEBUG_SHOP_APIKEY/$FUNDEBUG_SHOP_APIKEY/" .env
cat .env
