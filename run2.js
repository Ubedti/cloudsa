#!/bin/sh
UUID=${UUID:-'9bb8bd65-8ad8-4f21-a657-d7a65ae7dfa9'}
sed -i "s#UUID#$UUID#g" ./config-vmess.json
