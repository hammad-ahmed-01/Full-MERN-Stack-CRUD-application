<h1 align="center">CRUD Posts Application</h1>

  <p align="center">
    An awesome README template to jumpstart your projects!
    <br />
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"><strong>Explore the MDN docs »</strong></a>
    <br />
    
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ul>
    <li><a href="#about-the-Project">About The Project</a></li>
    <li><a href="#project-description">Project Description</a></li>
  </ul>
</details>

## About The Project

This project is a CRUD posts application with frontend in react.js and backend in node.js with mongodb atlas cluster database. A user can write a post, update it, and delete it. Make sure to download the node_modules specified in the client and server folders in order to further explore my work.


## Project Description

React is used on the frontend alongwith axios and redux meanwhile express framework of node.js is used on the backend. <br>
Following is a simple dry run of this application: <br>
The Project has a client side and a server side connected through a file 'index.js' in client > src > api. When a user makes a request, lets say creates a post in form, the onhandle submit function is called which inturn calls createPost function in actions > posts.js which is connected to a function on the server side server > controller > posts.js that in case of createPost adds the data from the form to the mongodb database. On the client side, data is passed to reducers which returns the data on the src > index.js on client side through combineReducers and createStore of redux.

