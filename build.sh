#!/bin/bash
set -e

echo "Starting Astro build..."

# Make astro executable
chmod +x ./node_modules/.bin/astro

# Run the build
./node_modules/.bin/astro build

echo "Build completed successfully!"
