# Nubank Vanilla Clone App

This is a Nubank clone built in Vanilla JavaScript, aiming to fake a library to develop SPA with pure 
JavaScript. This is a simple project to show students that they can create a SPA regarding the use 
of VueJS or ReactJS, without running the risk of falling into the trap of programming only with 
frameworks.

## Creating a SPA from scratch

The main structure is shown bellow:

    nubanck/
        |
        index.html
        app.css
        src/
            |
            index.js

For this project I've installed **webpack** to just create a minified *js* file

    $ npm i -D webpack webpack-cli

so, we can run webpack in the root of the project to create a **dist** folder with a **main.js** file with 
our minified application

    $ npx webpack --mode=production

In addition, our project structure should be

     nubanck/
        |
        node_modules/
        index.html
        app.css
        src/
            |
            index.js
        dist/
            |
            main.js
        package.json
        package-lock.json