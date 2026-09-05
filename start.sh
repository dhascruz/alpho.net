#!/bin/bash

export PORT=3300
export NODE_ENV=production

cd /var/www/html/alpho.net || exit 1

# Install dependencies (optional)
# npm install

# Build the application (uncomment for Next.js after updates)
# npm run build

# Start or restart the PM2 process
if pm2 describe alpho > /dev/null; then
    pm2 restart alpho
else
    pm2 start npm --name "alpho" -- start
fi

# Save the PM2 process list
pm2 save
