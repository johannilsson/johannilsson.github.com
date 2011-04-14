---
layout: post
title: Authenticated API requests on Google App Engine
---

Ever wanted to do authenticated API requests on [Google App Engine](http://code.google.com/appengine/) using the provided [User Service](http://code.google.com/intl/sv/appengine/docs/python/gettingstarted/usingusers.html)?

When we first released [droidgiro](http://droidgiro.se/) we needed to do this, we later on migrated to another solution but that's another story. It's was really easy to add login functionality on a regular web using the User Service, but it turned out to be a bit harder to do it through the API. Last year I held an [presentation](http://www.slideshare.net/johannilsson/foss-sthlm-android-cloud-to-device-messaging) about [Android C2DM](http://code.google.com/intl/sv/android/c2dm/index.html) and using examples from that presentation I got it to work in a similar fashion with App Engine.

Here's an example handler that demonstrates how to identify a logged in user.

    class ExampleHandler(webapp.RequestHandler):
        def post(self):
            user = users.get_current_user()
            if user:
                self.response.out.write("Welcome, %s." % user.nickname())
            else:
                self.error(401)
                self.response.out.write(":(")

In the examples below I'm using [cURL](http://curl.haxx.se/) since I believe that's the easiest way to see what's actually is going on.

## Development Environment

To obtain the necessary cookie for a user we first need to authenticate against the dev server. This script demonstrates how to authenticate the user `test@example.com`.

    curl http://localhost:8080/_ah/login \
      -d "email=test@example.com&action=Log+In" \
      -c -

This will return something like.

    localhost	FALSE	/	FALSE	0	dev_appserver_login	"test@example.com:False:18580..."

Take the last value `test@example.com:False:18580...` and construct a new request to our API.

    curl -X POST http://localhost:8080/example \
      -b "dev_appserver_login="test@example.com:False:18580..."; Path=/;"

This will print the welcome message for the authenticated user.

    Welcome, test@example.com.

## Production Environment

To do the same on a deployed app we first we need to authenticate against the Google [ClientLogin](http://code.google.com/intl/en/apis/accounts/docs/AuthForInstalledApps.html) service. This is similar for what we do when using C2DM (and other Google services). The important part here is that we specify the `service` name `ah` for App Engine. I believe `source` is optional but it's recommended to specify your app name together with the current version there. Apart from that we need to specify the `Email` and `Password` we want to login with. Google has also put together an [article](http://code.google.com/intl/sv/apis/gdata/articles/using_cURL.html) of how to use cURL to interact with Google data services that brings some more light to this topic.

The following script obtains the auth token from the Google ClientLogin service.

    curl https://www.google.com/accounts/ClientLogin \
      -d "Email=YOUR EMAIL HERE" \
      -d "Passwd=YOUR PASSWORD HERE" \
      -d "accountType=HOSTED_OR_GOOGLE" \
      -d "source=YOUR APP NAME HERE" \
      -d "service=ah"

This will return something like.

    SID=DQAAA...
    LSID=DQAAA...
    Auth=DQAAA...

Take the value of `Auth`, `DQAAA...` and use in the next request.

    curl http://example.appspot.com/_ah/login?auth=DQAAA...&continue=http%3A%2F%2Fexample.appspot.com \
      -c -

This will return the `ACSID` cookie.

    #HttpOnly_example.appspot.com	FALSE	/	FALSE	129...	ACSID	AJKiY...

Now we can post to our API similar to what we did on the dev server.

    curl http://example.appspot.com/example \
      -b "ACSID=AJKiY..."

This will print the welcome message for the authenticated user.

    Welcome, test.

There's no need to authenticate the user for each request we do. When we've obtained the `ACSID` we can reuse that until the token expires. When sending messages using C2DM the header `Update-Client-Auth` is included when the token has expired. The new token should be used the next time a request is done to the API. I'm not sure if that header is returned here though.

That's it, happy hacking!
