How to update server:
make your changes in /server
git add .
git commit -am "message"
git push heroku master
this will push, build, and deploy to heroku
https://tourney-feed.herokuapp.com/posts
any errors: heroku logs --tail

how to deploy client:
npm run build
put /build into netlify
scratchthat.netlify.app