# HackED: Adventure Cat Damion
For HackED2019 we decided to create an interactive browser-based story game!  
Welcome to **Adventure Cat Damion**, where the choices you make in the game will affect the story!  


# Write the Scripts for this game
Before going into the code, our group wanted to ensure that we had a solid design that would be easy to follow in the implementation steps. 

The objective of the hackathon was to create a kid-friendly game, and learn as much React.js as possible.

You can find the flow/design of the script here: [wiki](https://github.com/starryEcliipse/HackED2019/wiki) 


# Requirement
Basic HTML, CSS, JS, Linux, Git.


# Prepare the Environment
## Npm
We need to setup the ReactJS on our machine. I wrote this guide for MacOS.
1. Since you are going to use JavaScript for your React development on MacOS, there is no way around Node.js and NPM. 
2. Download Node.js and NPM.
3. Run this line in the terminal : $npm install -g create-react-app.
4. You can check its version again on the command line : $create-react-app --version.
5. You can use create-react-app by passing the name of your application to it on the command line:
$create-react-app my-app.
6. Afterward, you can navigate into the project on the command line and start it with npm:
$cd my-app/npm start
7. Finish set the environment.


## Yarn
I found that yarnlock is good to use than npm
1. Using the npm to install the yarn : $npm install -g yarn.
2. Using the command to check the version : $yarn -v.
3. You can use create-react-app by passing the name of your application to it on the command line : 
$yarn create react-app my-app
4. Afterward, you can navigate into the project on the command line and start it with yarn:
$cd my-app/yarn start



# File Descriptions

``` 
my-app (HackED2019)
├── README.md
├── node_modules 
├── package.json
├── package-lock.json
├── scripts
│   ├── build.js
│   ├── start.js
│   └── test.js
├── scripts
│   ├── env.js
│   ├── paths.js
│   ├── ployfills.js
│   ├── webpack.config.dev.js
│   ├── webpack.config.prod.js
│   ├── webpackDevServer.config.js
│   └── jest
│       ├── cssTransform.js
│       └── fileTransform.js
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
└── src
    ├── App.css
    ├── App.test.js
    ├── index.css
    ├── index.html
    ├── PageS
    └── PageF
```

    
## 1) package.json:
This file is a dependency package for managing downloads. The "react" library is often used in projects, and "react-dom" (jsx syntax is rendered to dom)
The most important command in the project is "start" to start the project, the role of "bulid" is to package the project.

## 2) public:

a. favicon.ico

It is the icon on the browser tab, which is also a sign of this project, or it can be said to represent a company logo. Can be replaced.

b. index.html

The entry file of the project, citing the third-party library, can also introduce cdn
<div id="root"></div> is the total container for the project, and all content is stored in this container. This container has one and only one.


## 3) src:

a.index.js

It is the core content of this project, which is our main work area. Among them, the index.js file is the only interface of the file associated with index.html.

The content structure of index.js:
'''
Import React from 'react';
Import ReactDOM from 'react-dom';
Import './index.css';
Import App from './App';
Import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

'''

The purpose of ReactDOM.render() is to render the contents of <App/> to the root "root".

The "root" in document.getElementById('root') is "root" in index.html, and <App /> refers to the page content. Here, <App /> can also write some content (structure, style, logic) is the root component of the entire project, such as:

ReactDOM.render(<p >Hello World</p>, document.getElementById('root'));

You can run the result (provided the local server is started, open localhost: 3000)

However, the reason for being able to reference <App /> is the header of the document content, with the import App from './App'; the content is to introduce the content of App.js into the index.js file.


b. App.js:

This class is inherited from the component provided by react, export default App; in order to expose the App, index.js can be referenced. If App.js inherits component, it must be rendered using render. The content of return is similar to the content of the html structure, which is jsx. The jsx syntax is the main syntax of react. The className of the internal div is a class name to distinguish the html syntax. This is the style reference of the div. In this file, you can only use one div container. If you add other content to the div's sibling directory, you will get an error.

className="App" is a style referenced to App.css. Note that the page content style is the principle of proximity, first using the style of App.css, App.css is the style of the component, and index.css is the global style.

There are two ways to render content, the jsx syntax (the default content above) and the React.createElement method.


# How to design the coding structure
# ReactDOM this is the important part I think in this project
[image]

# Demo

[Video]


# How to update/evolve this application in the future


# Some questions may meet
(1)How to test? npm test or yarn test
Runs the test watcher in an interactive mode. By default, runs tests related to files changed since the last commit.
(2)How to use npm run build or yarn build?
Builds the app for production to the build folder. It correctly bundles React in production mode and optimizes the build for the best performance.
The build is minified and the filenames include the hashes.


# Conclusion 



