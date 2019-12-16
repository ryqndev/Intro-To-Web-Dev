# What is this?

HackUCI-Web is the source code for the intro to web development 
workshop for HackUCI 2019. The workshop will involve a live code demo to create a basic todo app that cover the following basics:

 * What is HTML? and how do we write it?
 * What is CSS? and how do we write it?
 * What is JS? and how do we write it?
 
 * What is React? and how do we write it?

There's a lot of background information here so if you want to skip to the code, 
go straight [here](#where-to-start)

# Intro

![Yahoo in 2001](./yahoo-old.png)

The technological limitations of computers, browsers 
and internet speed a decade ago resulted in a system where a vast 
majority of websites were made up of links, text, and the occasional 
image.

Ten years ago, we could never create apps and "experiences" on 
the web since slow internet speeds meant that you could never 
transfer media assets such as videos, images, and 3d models. 
Weak computing power (compared to today) meant that you could 
not run computationally expensive programs and newly developed 
browsers running on these computers meant that the languages/frameworks 
these browsers depended on did not support a wide range of actions.

Today, websites are no longer limited to being just static sites. 

# What can I do using web technologies?

[Interactive 3d falling pasta](https://alteredqualia.com/three/examples/webgl_pasta.html) -  If this doesn't convince you, I don't know what will

[Basic 2d Games (Agar.io)](https://agar.io/) - Pretty popular in 2016

[Car Demo](https://vr.ff.com/us/) - Really high quality car simulator

[Infinitown](https://demos.littleworkshop.fr/infinitown) - Procedurally generated infinite city

[Desmos Graphing Calculator](https://www.desmos.com/calculator) - Every high school/college student knows this.

.. and very obviously, every single website you've ever seen.

The short answer to what can you do with web technologies is really just 
everything that you would normally see as an app or downloadable software.

## Then, why the web if we can do it natively as an app/software

If someone asked you to check out an app, would you be more inclined to download 
it from the app store or just open up the website? And thus, our first point of contention -

### 1. ease of access

Why look for an app and download it just to try it when you can just click a 
link your friend sends you?

### 2. cross-platform

iOS, OSX, Android, Window, and pretty much every other user-friendly system that 
exists has a browser that executes the exact same html/css/js code and produces *nearly* the same results.

However, if you were to develop natively, here's the general list:

* iOS - Swift, (maybe Obj-C)
* OSX - Swift, Obj-C, C++, Java, etc.
* Windows - C++, Java, etc.
* Android - Java, Kotlin

And don't forget, just because you can write a desktop application in C++, you 
still need to compile them into separate executables - one for OSX and one for 
Windows. In the case of mobile development, you HAVE to learn 2 separate 
languages + programming paradigms

(You might say well there's no way you can play Witcher 3 on high settings in
the browser - but then you see people [running Unreal Engine 4 in the browser](https://epiclearningresources.000webhostapp.com/ActionRPG/ActionRPG-HTML5-Shipping.html))

*Note*: obviously the above link requires a decently good computer to run so don't try that on your 2012 mobile phone running safari.

We won't get to writing some intense 3d gameplay in the browser but hopefully, 
you'll have enough here to get started on your journey into web-dev.

# Where to start?

This repo contains the source code for the todo app example that I will live code 
to teach fundamental web-development.
