# API Calls (~2 min read)

First, we should first learn about what an API is. API is a general term but at hackathons, we will mostly be dealing with Web API's.

### API - Application Programming Interface

The definition for API in general is simply a way for two pieces of software to communicate with one another (keyword: interface). Web API's are a subset of API's that in which the two pieces of software use HTTP requests to communicate. This definition is still pretty confusing so let's take a look at an example.

Spotify is a digital streaming service that streams music. Because of this business model, they need to have a database of pretty much every single song in the world. Spotify also offers a Web API that allows developers to *communicate* with their service through http requests. For example, if you want to have a feature in which a user can search for songs, you can use the spotify Web API Browse endpoint.

So how does Spotify's Web API fit the definition of an API? Well, imagine we're writing a music based app - let's say an app in which users swipe left and right (like Tinder) on random songs and all the songs that they swipe right on will get saved into their own playlist. To implement this, we need to access Spotify's database of songs to pull random songs and after the user is done swiping, we need to then access the Spotify database again and create a playlist, add all the swiped songs, and finally return the playlist link. In this example, our webapp needs to communicate with the Spotify servers and this is done through HTTP requests. The Spotify Web API is a piece of software that exists on top of the main Spotify servers that allows external developers to communicate with them. The Web API will also have documentation that says exactly how to do this.

## Some API's to look at

[Spotify](https://developer.spotify.com/documentation/)
* Get song, artist, album information
* Manage user playlists (create, add, delete)
* Find full list of features [here](https://developer.spotify.com/documentation/web-api/reference-beta/)
* _note_: need to register and have to authorize users first (implement Login with Spotify button in app)

[Yelp](https://www.yelp.com/developers/documentation/v3)
* Get restaurant and business information
    * Get information, reviews, ratings
* _note_: need to register and get api key

[disease.sh](https://disease.sh/docs/)
* disease statistics (mainly covid related)

[Stock Data](https://www.alphavantage.co/documentation/)
* gets latest stock data
* gets prices, lows, highs and all time data for most stock exchanges
* _note_: needs api key but extremely simple process




### Why do companies offer API's?

First off, not all API's are free. Most API services charge developers based on the number of calls made but have a free tier (you can usually stay in free tier for the duration of a hackathon). For example, the Google Maps API offers an endpoint that will return the speed limit given a road segment that is priced at $20 USD per 1000 calls ($0.02 per call). Sometimes, it's not based off of profit. Riot Games (creators of a popular game called League of Legends) offer an API that allow you to search player ranks, match histories, etc. free of charge (with a limit) so people can develop third party software for them. Notice that player lookups are all 3rd party (op.gg, blitz, mobalytics, etc.)

API's that require payment will usually have a free tier that allow you to use the API for free as long as you stay under a certain number of calls because they want you to try out their service first so if you decide to continue working on an app and gets popular, they will eventually make a profit. 


### NOTE: BE CAREFUL

Try not to make api calls in loops and you need to put it in a loop, make sure you don't have an infinite loop.
