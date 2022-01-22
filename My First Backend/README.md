Description


Create a backend app with light web framework (javascript you will use express, ruby you will use sinatra, python you will use flask)

You don't need to create a database, just store the information hard coded inside your file.

In order to find all the information needed, you will have to search online. Wikipedia, Google and Fan's website will have all the information you need for this project! :)

Part I
It will have a route GET on /. This action will give randomly (in a pool of at least 20) a name of a song from Frank Sinatra.

Part II
Continue to build your backend app.js.
This time we will add multiple pages or routes:

GET on /. This action will give randomly (in a pool of at least 20) a name of a song from Frank Sinatra.
Wikipedia Page

GET on /birth_date. This action will give Frank Sinatra birth date.

GET on /birth_city. This action will give Frank Sinatra birth city.

GET on /wives. This action will give all the name of Frank Sinatra wife.

Format:
wife1, wife2, wife3, wife4

GET on /picture. This action will give Frank Sinatra's picture.
(https://upload.wikimedia.org/wikipedia/commons/a/af/Frank_Sinatra_%2757.jpg)

Part III
Continue to build your backend app.js, in this last part we will add two more routes:

GET on /public. This action will print "Everybody can see this page"

GET on /protected. This action will be protected by a HTTP Basic access authentication and print "Welcome, authenticated client" if you are authorized with the login admin and password admin otherwise it will provide a 401 Not authorized.
