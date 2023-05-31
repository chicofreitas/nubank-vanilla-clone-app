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

## Running our application

Inside the index.html we just call the /dist/main.js, so you can run this project without the complexity 
of project folder

    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>NuBank Clone Project</title>
        <link rel="icon" type="image/ico" sizes="16x16" href="./assets/favicon.ico">

        <link rel="stylesheet" href="app.css">

    </head>
    <body>
        <div id="root"></div>
    </body>

    <script type='module' src="./dist/main.js"></script>

    </html>

In addition, the app.css should me added in the reader to ensure a minimum UI for the application. 