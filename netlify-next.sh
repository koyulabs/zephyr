#!/bin/bash

echo "Copying Next.js files to root..."
mkdir out
mkdir .next
cp -a packages/react-zephyr/out out
cp -a packages/react-zephyr/.next .next
echo "...success!"