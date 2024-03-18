#!/bin/bash
set -e

image="qiaoogan/testexecypress:0.0.1"

docker container run --rm \
  --add-host hw.piggy.instance:119.3.156.32 \
  --user 0  \
  --mount type=bind,source="$(pwd)",target=/home/cypression \
  -e VTEST_BUILD_VERSION="$BUILD_NUMBER" \
  --entrypoint node /home/cypression/vtest.js \
  $image \