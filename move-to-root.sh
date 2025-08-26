#!/bin/bash

# Script to move Next.js app to repository root for Vercel deployment
# Run this from the polar-demo-app directory

echo "Moving Fakepixels app to repository root..."

# Copy all app files to root
cp -r .conductor/fakepixels-san-marino/app ./
cp -r .conductor/fakepixels-san-marino/components ./
cp -r .conductor/fakepixels-san-marino/lib ./
cp -r .conductor/fakepixels-san-marino/public ./
cp .conductor/fakepixels-san-marino/package.json ./
cp .conductor/fakepixels-san-marino/package-lock.json ./
cp .conductor/fakepixels-san-marino/next.config.ts ./
cp .conductor/fakepixels-san-marino/tailwind.config.ts ./
cp .conductor/fakepixels-san-marino/tsconfig.json ./
cp .conductor/fakepixels-san-marino/postcss.config.mjs ./
cp .conductor/fakepixels-san-marino/next-env.d.ts ./
cp .conductor/fakepixels-san-marino/vercel.json ./
cp .conductor/fakepixels-san-marino/.gitignore ./

# Remove pages directory that was added for debugging
rm -rf .conductor/fakepixels-san-marino/pages

echo "Files moved! Now commit and push:"
echo "git add -A"
echo "git commit -m 'Move Next.js app to repository root for Vercel'"
echo "git push origin main"
echo ""
echo "Then redeploy on Vercel - it should work now!"