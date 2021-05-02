# FYI
-want to add in last edited-
- have post go to the top of the page when edited
-newest on top-
-want form on a different page-
- want admin log in
- in addition to message (maybe should be called announcement title instead?) want to have details for people to read more
- notifications for users being called
- users ack/ check in
- users ping tournament desk for help
    - configurable by admin
- after deleted posts should say scratch that and be stamped with overlay and have own filter yah
- form validation
    - remove extra #
- change card color according to category
- filter
- clear checkbox after submit
- clear event field after submit
- API to return by event

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
scratch-that.netlify.app