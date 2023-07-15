# blinewebapp
Baseline Web-app. This is a very simple example of a containerized web application with microservices also running in containers.
It is loosely based on the Udemy course _Microservices with node JS and React_.

The reason I created this repository is to try and have a template from which I can later build a containerized web-app of my own 
that I can refer to when I come back to this several months later after I forgot everything.
I use the aforementioned course as a guide but decided to stick to Javascript instead of Typescript. 

This small web-app incorporates test driven design using Jest, and it containerizes everything using Docker, and orchestrates
with Kubernetes. I use Skaffold to run the development instance locally within minikube.

I am going to update this with everything you (and by you I mean me in a year's time) need to rebuild this from scratch.

At the moment, this application consists of two parts - a client webapp using nextJS and React, and ping, a small REST service
that just responds with a 200 status code when called.

I may (or may not) integrate a simple service bus into this webapp, or even a Redis or MongoDB, or may put those in a second project
once I've built this out as far as I think it needs to go for a simple baseline app.
