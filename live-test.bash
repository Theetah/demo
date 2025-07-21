#!/bin/bash
# This script is a quick & lazy way to execute the "live-server" plugin *AND* launch
# a browser I specifically use in the background.

(trap 'kill 0' SIGINT; flatpak run one.ablaze.floorp http://127.0.0.1:8080 & live-server . --port=8080)
