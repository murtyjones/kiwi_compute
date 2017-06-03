[![N|Solid](https://static.wixstatic.com/media/952bc1_266cdba81e4b42cda66e9d274445bd00~mv2_d_3600_1584_s_2.png/v1/fill/w_626,h_284,al_c,usm_0.66_1.00_0.01/952bc1_266cdba81e4b42cda66e9d274445bd00~mv2_d_3600_1584_s_2.png)](https://nodesource.com/products/nsolid)

# Middle School Online
   [Kiwi Compute](https://www.kiwicompute.com/about-1)

> We love Middle School! Kiwi works directly with 5th to 8th grade students and
> builds an interest in coding before High School. Kids are most likely to lose
> interest in computer science between ages 13 to 17, specifically girls. Once in
> High School, students pursue other interests, become involved in sports or
> extracurricular activities, and work part-time jobs. Kiwi changes that path and
> encourages students to be fearless in their learning.

> Focusing on Middle School, Kiwi builds self-confidence and creates curriculum
> specific to that age group. Middle School students want to understand real-world > application and Kiwi incorporates relevant examples in each class. formatting    > syntax is to make it as readable as possible. The idea is that Markdown-formatted document should be
> publishable as-is, as plain text, without
> looking like it's been marked up with tags
> or formatting instructions.

## Folder Structure

After creation, your project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Tech
* [Node.JS](http://nodejs.org) - evented I/O for the backend
* [Skulpt](http://www.skulpt.org/) - Javascript implementation of the Python programming language
* [React](https://facebook.github.io/react/) - A javascript library for building user interfaces
* [Webpack](http://webpack.github.io/docs/) - A javascript library for building user interfaces
* [MaterialUI](http://www.material-ui.com/) - A Set of React Components that Implement Google's Material Design

### Installation

Node v6.10
React v15.5.4

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


Install the dependencies and devDependencies and start the webpack server.

```sh
$ cd kiwi-compute
$ npm install
$ npm start
```

### User Stories

 - Need
    -  Build UI Team 
 - Want
    -
 - Wish
    -


### Todos

 - Write MOAR Tests
 - Add Night Mode

License
----
MIT
