echo "Deploying . . ."
npm run build
aws s3 sync build/ s3://notebook-nwjzlm/ --acl public-read --delete --cache-control max-age=60
