---
layout: post
title: Crime Sweeper
---
Last weekend I participated in the first GTUG Stockholm Android Hackathon in Sweden hosted by Bwin Games. A part from all the hacking there was also two great presentations by Dirk Groten, CTO from Layar and Johan Burell all organized by Peter Svensson, Peter also did a great write up of the event at his blog.

Before the hackathon me and my other team mates Albert Ramstedt, Joakim Kolsjö and Joakim Bodin had an idea to build something on top of the data from brottsplatsstockholm.se, the site it self scrapes the Swedish police departments website for crimes committed in Stockholm. I contacted Pär Thernström to ask if it was possible for him to provide us with a simple API. Pär was really nice and created the API just a couple of days after I first contacted him.

Once we had the API, we had a short meeting to discuss what to build during the hackathon. First we thought of building a application that just listed recently committed crimes and show them on a map. But we thought that was kinda boring instead we come up with the idea to create a game.

The game we decided to build is sort of a geocaching game. We plotted all the crime sites on a map and showed the players position on it. The player can then start the game at any time by pressing a start button. To get points the player need to visit as many crime sites as possible during a fixed time. For each visited site the player earned 10 points and the possibility to see which type of crime that was committed at that place. Players that dare to visit areas with a high crime rate will probably get more points.

Here is a short screen cast demonstrating CrimeSweeper. Crime sites are listed as stars on the map.

<object width="640" height="390"><param name="movie" value="http://www.youtube.com/v/EMvLnbIK-zo&hl=en_US&feature=player_embedded&version=3"></param><param name="allowFullScreen" value="true"></param><param name="allowScriptAccess" value="always"></param><embed src="http://www.youtube.com/v/EMvLnbIK-zo&hl=en_US&feature=player_embedded&version=3" type="application/x-shockwave-flash" allowfullscreen="true" allowScriptAccess="always" width="640" height="390"></embed></object>

So will CrimeSweeper be released on Android Market? Not sure, first of we probably need to rewrite it to use a service for the game logic. This to be able to track movements and hits even if the player is doing something else with the phone. It would also be fun to extend it to not only use crime sites, perhaps a map with tourist points would be nice as well? And of course a high score list. Anyway the source is at GitHub if anyone feel to hack around with it.

I really love hackathons it is truly amazing to see what people manage to build during just a couple of hours. This was the second hackathon I participated in. Last time was in Amsterdam at Hyves HQ. Me, Joakim Bodin and Johan Mjönes then built a Android app called Mystery Hangout. If you are interested you can find the source and a video demonstrating it at GitHub.
