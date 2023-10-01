<h1 align="center">Ecommerce API</h1> 
<p align="center">
 🖊️ This is an API for an eCommerce platform to manage comment inventory. <br>
     This App built using <a href="https://ejs.co/">EJS</a>, <a href="https://www.mongodb.com/">MongoDB</a>, <a href="https://expressjs.com/">ExpressJs</a> and <a href="https://nodejs.org/en/">NodeJs</a>
</p>

## Table of contents

-   [Features](#Features)
-   [Folder Structure](#Folder-Structure)
-   [Screenshot](#Screenshots)
-   [Built with](#built-with)
-   [Author](#author)
-   [Setup](#Setup)
-   [Run](#Run)
-   [Deploy Link](#deployed-link)

## Features

<ul>
  <li>You can perform CRUD operations on this API</li>
  <li>C- Create or add Comment</li>
  <ul>
      <li>API to add comments to the database</li>
      <li>URL [POST]: /comments/create</li>
   </ul>
  <li>R- Read Comments</li>
   <ul>
      <li>API to list comments</li>
      <li>URL [GET] : /comments</li>
  </ul>
   <li>U- Update quantity of any specific comment</li>
  <ul>
      <li>API to delete comments</li>
      <li>URL [DELETE] : /comments/:id</li>
   </ul>
            <li>D- Delete any specific comment</li>
   <ul>
       <li>API to update the quantity of a comment (can be incremented or decremented)</li>
       <li>URL [POST] : /comments/:id/update_quantity?number=10</li>
   </ul>
</ul>

## Folder Structure

-   Ecommerce API
    -   config
        -   mongoose.js
    -   controller
        -   home_controller.js
        -   comment_controller.js
    -   models
        -   comment.js
    -   routes
        -   index.js
        -   comment.js
    -   views
        -   home.ejs
    -   index.js
    -   package-lock.json
    -   package.json

## Screenshots

-   Home Page
    ![Home Page](./page-screenshots/home.png)<br /><br />

-   Comments
    ![Comments](./page-screenshots/comments.png)<br /><br />

## Built with

-   NodeJs
-   ExpressJs
-   MongoDB
-   EJS

## Author

-   Github - [Subha Biswal](https://github.com/20SB)

## Setup

Run `npm install` to install required dependencies

## Run

Run `npm start`, open localhost:5000 in browser to run the program

## Deployed Link

-[Ecommerce API](https://ecommerce-api-lxkr.onrender.com)

## Test Usage

You can use an API testing tool like Postman to interact with the eCommerce API.

-   Create a comment:

    -   Endpoint: POST /comments/create

-   Get comments:

    -   Endpoint: GET /comments

-   Delete a comment:

    -   Endpoint: DELETE /comments/:id

-   Update a comment:
    -   Endpoint: POST /comments/:id/update_quantity/?number=10
