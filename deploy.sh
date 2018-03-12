echo "Deploying . . ."
npm run build
aws s3 sync build/ s3://$DEPLOY_BUCKET/ --acl public-read --delete --cache-control max-age=60
