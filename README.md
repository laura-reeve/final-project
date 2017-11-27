## final-project

``` bash

# how to set up the development environment
# install the Vue Command Line Interface globally
npm install -g vue-cli

# initialize webpack and name your project (ex: project-name) 
vue init webpack project-name

# answer all of the following questions 
Project name: project-name
Project description: A Vue.js project
Author: Your Name
Vue build: standalone
Install vue-router? Yes
Use ESLint to lint your code? No
Setup unit test with Karma + Mocha? No
Setup e2e tests with Nightwatch? No

# changes directories to the new folder and install dependencies
cd project-name
npm install

# how to run the local development server
npm run dev

# open a browser and navigate to localhost:8080 - served with a hot reload (no need to refresh to see changes)
# dependencies can be located in the newly created node_modules folder

# make any customizations to the projects that you desire
npm install --save axios

# be sure to use debugging tools (like the Sources tab in the Chrome development tools) to test and debug your code in the local environment

# how to build the code for deployment on Github
# configure webpack to build code into /docs folder instead of default /dist folder
open config/index.js in your code editor
change all instances of dist to docs
change the path from root ('/') to none ('')

build: {
    ...
    index: path.resolve(__dirname, '../docs/index.html'),
    assetsRoot: path.resolve(__dirname, '../docs'),
    ...
    assetsPublicPath: '',
    ...
}

save changes

# run the build command to create the docs folder
npm run build

# how to deploy the site
-create a new repo in Github 
-do NOT create a new README or LICENSE files
-follow their directions to create the new repository from files on the command line (instead of 'git add README.md', use 'git add -A' to add all of the files in your folder)
-check your Github to make sure all folders have published
-click "Settings" and find section on GitHub Pages
-change Source to master branch /docs folder
-click Save
-click on the website link provided to view your Vue app webpage!

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
# final-project
