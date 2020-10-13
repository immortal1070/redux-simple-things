#!/usr/bin/env bash
find . -type d -name node_modules -prune -exec rm -rf {} \;
find . -type f -name package-lock.json -prune -exec rm -rf {} \;
