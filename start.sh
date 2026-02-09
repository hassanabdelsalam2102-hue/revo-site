#!/usr/bin/env bash
set -e

PORT=${PORT:-8080}

echo "Serving ./revo-site on port ${PORT}"
python3 -m http.server "${PORT}" --directory "revo-site"
