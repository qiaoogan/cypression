#!/bin/bash
set -e

image="testexecypress:0.0.1"

docker container run --rm \
  --add-host hw.dogger.instance:123.60.93.173 \
  --user 0  \
  --mount type=bind,source="$(pwd)",target=/home/cypression \
  --entrypoint /home/cypression/containerun-entry.sh \
  $image
  