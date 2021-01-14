# API Calls (~2 min read)

First, we should first learn about what an API is. API is a general term but at hackathons, we will mostly be dealing with Web API's.

### API - Application Programming Interface

The definition for API in general is simply a way for two pieces of software to communicate with one another. Web API's are a subset of API's that in which the two pieces of software use HTTP requests to communicate. 

For most hackathon projects, hackers will utilize one or more API's in their app and build around them. I think the textbook definition of an API is hard to explain and take in so let's just go ahead and explore a sample scenario.

### Scenario 1: Music App

Let's say we wanted to make a music-finding app. To make things spicy, our designer decided gamify the music finding process by using Tinder card swipes as a way to decide whether or not we liked a song and then add it to a playlist. Where do we begin?

Well, first thing we need is a list of songs to recommend to our users. There's no way we're going to manually input all the songs in the world into a database and then retrieve songs because not only is that not realistically feasible in our hackathon timeframe, but we also wouldn't want to do that anyways. Luckily for us, Spotify (the digital music service) offers developers an API - a way to connect to the Spotify service (which includes their massive song database).


### Why do companies offer API's?

First off, not all API's are free. Most API services charge developers based on the number of calls made but have a free tier (you can usually stay in free tier for the duration of a hackathon). For example, the Google Maps API offers an endpoint that will return the speed limit given a road segment that is priced at $20 USD per 1000 calls ($0.02 per call). Sometimes, it's not based off of profit. Riot Games (creators of a popular game called League of Legends) offer an API that allow you to search player ranks, match histories, etc. free of charge (with a limit) so people can develop third party software for them. Notice that player lookups are all 3rd party (op.gg, blitz, mobalytics, etc.)

API's that require payment will usually have a free tier that allow you to use the API for free as long as you stay under a certain number of calls because they want you to try out their service first so if you decide to continue working on an app and gets popular, they will eventually make a profit. 
