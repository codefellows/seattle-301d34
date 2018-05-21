![CF](https://camo.githubusercontent.com/70edab54bba80edb7493cad3135e9606781cbb6b/687474703a2f2f692e696d6775722e636f6d2f377635415363382e706e67) 11: Production Deployment w/ Heroku
===
## Code Wars Challenge

Complete [today's Kata](https://www.codewars.com/kata/sum-of-odd-cubed-numbers) and follow the submission instructions from Lab 01.

## Lab 11 Submission Instructions

- Complete your **Feature Tasks for the day**
- Create a Pull Request (PR) back to the `master` branch of your frontend repo
- On Canvas, submit a link to your PR and a link to your deployed application on Heroku. **Make sure to include the following:**
  - A question within the context of today's lab assignment
  - An observation about the lab assignment, or related 'Ah-hah!' moment
  - How long you spent working on this assignment

## Resources

- [Heroku Node Deployment Tutorial](https://devcenter.heroku.com/categories/nodejs)
- [GH-Pages Deployment](https://pages.github.com/)
- [Express API Docs](http://expressjs.com/en/4x/api.html)
- [Book List Wireframes](./wireframes)

## Configuration

- `ENV VARS` - Paste the following commands into your terminal window for testing locally.
  * _Note: these will be temporary while the current shell session (window) is open._

```
export PORT=3000
Mac:     export DATABASE_URL=postgres://localhost:5432/books_app
Windows: export DATABASE_URL=postgres://USER:PASSWORD@localhost:5432/books_app
```

_Your repositories must each include the following config files:_

- `README.md` - with documentation regarding your lab and it's current state of development. Check the "documentation" section below for more details on how that should look **AT MINIMUM**
- `.gitignore` - with standard NodeJS configurations
- `.eslintrc.json` - with Code 301 course standards for the linter

_Your `book-list-server` repository must also include:_
- `package.json` - with all dependencies and any associated details related to configuration


```sh
book_app_week_3
├── book-list-client
│   ├── data
│   │   └── books.json
|   ├── .eslintrc.json
|   ├── .gitignore
│   ├── index.html
|   ├── README.md
│   ├── scripts
│   │   ├── models
│   │   │   └── book.js
│   │   └── views
│   │   │   ├── book-view.js
│   │   │   └── error-view.js
│   │   └── index.js
│   └── styles
│       ├── base.css
│       ├── fonts
│       │   ├── icomoon.eot
│       │   ├── icomoon.svg
│       │   ├── icomoon.ttf
│       │   └── icomoon.woff
│       ├── icons.css
│       ├── layout.css
│       ├── modules.css
│       └── reset.css
└── book-list-server
    ├── .eslintrc.json
    ├── .gitignore
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── server.js
```

## User Stories & Feature Tasks

#### Overview

This week, you and your partner(s) will implement a basic full stack application for a book list which will render books from a PostgreSQL database. Today's portion of the application involves storing book objects in a database. The client can make a request to the server for retrieval of all books, which will then be rendered as a list in the browser.

*1. As a developer, I want to separate the Client UI from the backend API so that my project is thoughtfully organized.*

- Create an organization on GitHub to hold your client-side and server-side repositories. Add your partner(s) as collaborator(s).
- Create a new folder within your `codefellows/301` directory and give it the same name as your organization. `cd` into this folder. You will be cloning both repositories into this folder. For example, in the file tree above, the organization and corresponding folder are named `book_app_week_3`.
- Within your organization, create a new repository called `book-list-client`, and give it a description so you and anyone looking at it will know that it's the week 3 project for Code 301. This will contain your frontend code.
- Within your organization, create a new repository called `book-list-server`, and give it a description so you and anyone looking at it will know that it's the week 3 project for Code 301. This will contain your backend code.
- Clone both repositories into the project folder your created in the first item, above. _Hint: If you type the command to open the code in your code editor, such as `code .`, you can view both repositories together in your code editor._

*2. As a user, I want to host my app on a reliable, scalable application hosting service so that I can access my mobile app when I'm on the go and share it with others.*

- Create a basic HTML scaffold based on the above `Client/` directory structure.
  - For example, write a basic index.html file with several elements that you can view in the browser using live-server.
  - You do not need to fill in the content of any other files yet.
- Add, commit, and push your code to GitHub. This should provide you with a basic deployment for your client application that you will build upon throughout the rest of the week.
- In GitHub, go to the `book-list-client` repo and go to Settings. Scroll down and set your master branch as the source for your deployed frontend. It may take a few minutes for the URL to be generated. If you are able to navigate to this URL and view the code from your index.html file, you have correctly deployed your frontend.
- From this point on, work on semantically-named non-master branches. Once your app is functioning correctly on your branch, PR to master and confirm functionality on your deployed site. Your deployed site **should not** contain any broken functionality.

*3. As a developer, I want to deploy the backend API to a hosting service so that other developers may build their own frontend interfaces for this application.*

- Create a basic server scaffold based on the above `Server/` directory structure.
  - For testing purposes, include a temporary route such as `app.get('/test', (req, res) => res.send('hello world'))` to validate that your API has been successfully deployed.
  - Make sure your server is listening for connections on a `PORT`.
- Install any necessary NPM packages and ensure that they are documented as dependencies in your `package.json`.
- From the command line, navigate into your server repository and enter the command `heroku create <partner 1 initials>-<partner 2 initials>-booklist`. For example, Allie and Sam would create their instance with the following command: `heroku create ag-sh-booklist`.
  - You will see your URL in the terminal, such as `https://ag-sh-booklist.herokuapp.com`.
- In your model file (in the to-do demo, it is `task.js`), create an object named `ENV` and define four properties.
  - One property should check the location protocol of the current URL.
  - One property should be given the value of the cloud API server URL.
  - One property should be given the value of the local API server URL.
  - One property should set the API URL based on the location protocol. The API URL will be used in the AJAX requests within this file.
  - If your API URL ends in a `/`, either remove the last `/` in the URL or remove the `/` in your AJAX requests. Keeping the `/` in both the URL and the AJAX request will result in `//` as part of your endpoint and will cause an error.
- Return to your terminal and make sure to add and commit your changes. Then enter the command `git push heroku master` to push your instance to Heroku.
  - Look for a completion message and the bottom that says "Verifying deploy... done."
  - Navigate to your Heroku Dashboard and confirm that your Application instance appears.
- Validate that your API has been successfully deployed by navigating your browser to your `/test` endpoint. You may then remove this route from your server file.

*4. As a developer, I want to seed my local development database with books so I have data to test my development application with.*

- From the command line, create a new database with the command `createdb books_app`. If you are already in your PostgreSQL shell, use the command `CREATE DATABASE books_app`.
- Create a new table in your database called `books`.
  - Your `books` table should include a `book_id` as the primary key plus the following properties: `author`, `title`, `isbn`, `image_url`, and `description`
- Using the provided JSON data, manually enter each record into your PostgreSQL `books` table from the PostgreSQL shell on your machine.

*5. As a developer, I want the client application to have access to a deployed PostgreSQL database so the user data persists across application sessions.*

- In Heroku, click on your booklist app and go to the Resources tab. Search for "Postgres" and provision the free version to your app. This will automatically populate the `DATABASE_URL` config var in the Settings tab. Navigate to the Settings tab to verify.
- Migrate your local database to Heroku, using the following format for your command: `heroku pg:push books_app DATABASE_URL --app <partner 1 initials>-<partner 2 initials>-booklist`
  - **If you are testing locally,** connect your client using your local database.
  - **If you are testing the deployed backend,** connect your client to the DB using the defined `DATABSE_URL` environment variable.
  - _Note: Unless the local database is pushed to Heroku again, these databases will not be in sync from this point on._
- Ensure that you have an event listener set up to handle any error events on the client instance.


*6. As a user, I want to display all of my books at once so that I can see everything in a single view.*

- Create a View container in your index.html file (for example, a `<section>`) for the following content:
  - List of all available books by author and title.
  - Include on the page the count of books that are in the DB.
- Create an About View for displaying content about you and your application.
- Redeploy your application


*7. As a user, I want my books to be rendered dynamically so that I can view all of the books in my list.*

- In `index.js`, create a property called `isProduction` which will evaluate your environment based on the URL in the browser. Use this property to set your `app.ENVIRONMENT.apiUrl`.
  - Create a `.showOnly` method to reveal the containers of your single-page app.
  - Create a `.render` method to compile your Handlebars template.
  - Envlose your code in an IIFE.
- Define a constructor function called `Book` which takes an object literal as an argument.
  - Iterate over the argument's object keys to assign key/value pairs for creating a Book instance.
  - Enclose your code in an IFFE.
- Define a `Book` instance method called `toHtml` which, when invoked, compiles the Handlebars template with an id of `book-list-template`, and return the template with that instance's content.
- Define a static property on `Book` called `all`, and assign an empty array as it's value.
- Define a static method on `Book` called `loadAll` which takes `rows` as an argument, and sorts `rows` by `title`, maps over `rows` to create an array of `Book` instances, and then assigns the new array of `Book`s to `Book.all`.
- Define a static method on `Book` called `fetchAll` which takes `callback` as an argument, and makes a request to the API at `GET: /api/v1/books`.
  - On success, pass the results to `Book.loadAll`, and then invoke the `callback`.
  - On failure, invoke the `errorCallback` (see details below)
- Create a Book View:
  - Enclose your code in an IFFE.
  - Define a global variable called `bookView` and assign an empty object literal as its value.
  - Define a method on `bookView` called `initIndexPage` which hides any element with a class of `container`, shows any element with a class of `book-view`, and maps over the Book instances stored in `Book.all` to render each and append them to an element with the id of `book-list`.
  - Using jQuery's `Document.ready` functionality, invoke `Book.fetchAll` when the DOM has loaded, and pass `bookView.initIndexPage` as it's argument.


*8. As a user, I want a view which displays any error messages that occur during the usage of my book list application.*

- Create an Error View:
  - Enclose your code in an IFFE.
  - Define a global variable called `error-view` and assign an empty object literal as it's value.
  - Define a method on `errorView` called `initErrorPage` which takes an argument of `err` and does the following:
    - Hides any element with a class of `container` (or the class you chose to use).
    - Shows any element with a class of `error-view` (or the class you chose to use).
    - Empties any content within the element with an id of `error-message` (or the id you chose to use).
    - Compiles the Handlebars template with an id of `error-template`.
    - Renders the `err` argument into the template, and appends it to an element with an id of `error-message`.
- Define a function called `errorCallback` which takes an error object as an argument when invoked.
  - Log the error and pass the error to the `errorView.initErrorPage` view method.

*9. As a developer, I want the client to have the ability to request all resources from the database through a RESTful endpoint.*

- Create a new endpoint at `GET /api/v1/books` which will retrieve an array of book objects from the database, limited to only the `book_id`, `title`, `author`, and `image_url`.

*10. As a user, I want a simple, clean looking UI so that my application is easy to navigate.*

- Style your site using a **mobile-only** approach. Use the provided wireframes as a general guideline for the _minimum styling requirements_, while adding your own personal taste and color palette.
- Ensure the proper use of SMACCS principles.
- You will need to include icon fonts from a source such as Icomoon or FontAwesome for the social media icons you choose to include in the application.

## Documentation

_Your README.md must include:_

```md
# Project Name

**Author**: Your Name Goes Here
**Version**: 1.0.0 (increment the patch/fix version number up if you make more commits past your first submission)

## Overview
<!-- Provide a high level overview of what this application is and why you are building it, beyond the fact that it's an assignment for a Code Fellows 301 class. (i.e. What's your problem domain?) -->

## Getting Started
<!-- What are the steps that a user must take in order to build this app on their own machine and get it running? -->

## Architecture
<!-- Provide a detailed description of the application design. What technologies (languages, libraries, etc) you're using, and any other relevant design information. -->

## Change Log
<!-- Use this are to document the iterative changes made to your application as each feature is successfully implemented. Use time stamps. Here's an examples:

01-01-2001 4:59pm - Application now has a fully-functional express server, with GET and POST routes for the book resource.

## Credits and Collaborations
<!-- Give credit (and a link) to other people or resources that helped you build this application. -->
-->
```
