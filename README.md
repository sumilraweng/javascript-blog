# Introduction Blog rendring

> **Employee-rendring** is the small web application which fetch the json data and render it on html page with the help of **vanilla javascript**

## Technologies

The languages we used.

- HTML5
- CSS3
- VANILLA JAVASCRIPT

HTML5 is used to create the markup of the websites. CSS3 is use to style the website and also make it responsive. Vanilla javascript is used to fetch the json data from online repository

## folder structure

```
├── index.html
├── logo-images
│   └── logo.png
├── README.md
├── src
│   ├── blog.js
│   ├── component
│   │   ├── contentBlog.js
│   │   ├── imageBlog.js
│   │   └── linkBlog.js
│   ├── data.js
│   ├── helper
│   │   ├── displayBlog.js
│   │   └── findById.js
│   └── main.js
└── style
    └── index.css

```

HTML5 is used to create the markup of the websites. CSS3 is use to style the website and also make it responsive. Vanilla javascript is used to fetch the json data from online reposito

#### component

    In folder structure component conatian all three section of blog
    1. contentBlog.js - this file render the description of the blog
    2. imageBlog.js - this file render the image section
    3. linkBlog.js - this file render the related links to the blog

#### data.js

    This js File fetch the data using api

#### hepler

    This folder contain two js file .
    1. display.js - It will help to render the blog on index.html
    2. findById.js - It will help to find  the blog with help of id and return object

#### main.js

    This is main file which is called in index.html

[Blog-rendring Live Demo](https://sumilraweng.github.io/javascript-blog/)
