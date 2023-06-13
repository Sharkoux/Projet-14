# Project 14: Pass a jQuery library to React

For this project, we need to move an internal web application, Hrnet, from a jquery infra to React. 

The main stages of the project are:
  - Convert the whole project to React.
  - Update style (I used styled-component).
  - Convert one of the jQuery plugins to React package and publish it to NPM (I converted the jQuery plugin managing the tables)
  - Make a LightHouse performance report of the project before and after the migration to React


To be closer to reality, I set up a simple json server allowing to make real API calls from my application

# Setup 

Clone git: https://github.com/Sharkoux/Projet-14.git

# How to launch application locally?

Back-end: 
cd hrnet
cd server 
npm install
json-server --watch db.json --port=3004


Front-end:
cd hrnet
npm install
npm start 

# NPM package: 

https://www.npmjs.com/package/sharkoux-packages-tables?activeTab=readme
