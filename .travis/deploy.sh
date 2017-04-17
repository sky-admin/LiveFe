#!/usr/bin/env bash

ssh -t blog@lihuanyu.com "rm -rf /var/www/live.lihuanyu.com/*"
scp -r dist/* blog@lihuanyu.com:/var/www/live.lihuanyu.com
