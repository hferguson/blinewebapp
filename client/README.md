# Client package for baseline web app (blinewebapp) 
We are using NextJS and React.  Partly for all the advantages of server
side rendering, but also because it's easier to get this to run in a container.

The whole point of this sample app is to build a skeleton webapp that works
with microservices that is fully containerized from the start.
 
I think that if you clone or fork this repo, running npm install is
sufficient, but to build this we did the following in an empty folder:

npm init -y
npm install react react-dom next 

the client project is structured with the following subfolders
* components - individual ReactHS components 
* hooks - react hooks used by the various pages
* pages - each page that will be rendered by nextJS server side.

Currently the pages has one file - index.js which defines one master component called
Landing and it calls individual components as it needs them. See readme in pages directory




