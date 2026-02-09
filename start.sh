#!/usr/bin/env bash
set -e

PORT=${PORT:-8080}
npx serve revo-site -l "$PORT"
