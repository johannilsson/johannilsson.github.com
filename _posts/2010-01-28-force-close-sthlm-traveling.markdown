---
layout: post
title: Force Close and STHLM Traveling
---
I'm really sorry that the latest release of STHLM Traveling has caused a force close when starting the application on some devices.

This is actually a bug in Android that I and many others got to learn about the hard way. This is the short background of why some user is getting a force close. When uploading a application to Android Market you have the choice to enable copy protection for the application. I once activated this and recently removed it. What I did not know was that when the application has a database or writes files to disk something goes wrong and causes a force close on start up when switching the copy protection setting. The only solution to this problem is to first uninstall and then install the application again. Another downside off this is that you loose all saved data. From what I have understand the force close issue only affects devices that runs Android 1.5.

While fiddling around with this copy protection setting I also noticed that some phone models and carriers did not list copy protected application in Android Market, this is also discussed in the Android developer group.

Once again I'm really sorry about all this. I hope it will not happen again.

But now to something slightly more fun, the latest release of STHLM Traveling. I added a Swedish translation with great help from a contributor that did all the hard work with the translation. The application will automatically choose Swedish if you have selected this in the Android settings. Unfortunately Android does not have a official Swedish translation but some roms support this for example HTC Sense. For the rest of us we need to go to the settings menu in the STHLM Traveling and set the preferred language there. I also added history and shortcuts for departures.

I would also like to thank all of you that has sent me crash reports, it has helped me a lot when trying to make this application as stable as possible.

Get the latest version of STHLM Traveling from Android Market.
