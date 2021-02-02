import React from 'react';

const HelloWorld = () => (
    <div className="pt-8 text-darkLiver container mx-auto max-w-3xl pb-32">
        <h1 className="text-6xl md:text-7xl text-raisinBlack font-semibold pb-8">1.1: Hello World</h1>
        <p className="pb-4 text-2xl font-bold">
            For our first trick, we'll create a simple, minimal React setup using Webpack. (We'll add Tailwind.css too, for ease of styling.)
        </p>
        <p className="py-4">
            Here's a list of everything we're going to add to this minimal project setup:
        </p>
        <ul className="list-disc p-4 pt-0">
            <li>webpack 4</li>
            <li>webpack-bundle-analyzer</li>
            <li>webpack-dev-server</li>
            <li>React 16</li>
            <li>React DOM</li>
            <li>Tailwind CSS</li>
            <li>autoprefixer (required for Tailwind CSS)</li>
            <li>postcss-cli (required for Tailwind CSS)</li>
            <li>css-loader (to compile CSS files)</li>
            <li>postcss-loader (to compile the Tailwind CSS files)</li>
            <li>babel-loader (required for React)</li>
            <li>@babel/core (required for React)</li>
            <li>@babel/preset-env (required for React)</li>
            <li>@babel/preset-react (required for React)</li>
            <li>@babel/cli (required for React)</li>
        </ul>
        <p className="py-4 italic text-sm">
            A lot of the following was borrowed from a helpful guide found at
            &nbsp;
            <a className="text-dodgerBlue" href="https://blog.logrocket.com/webpack-from-scratch-for-tailwind-css-with-react/">the LogRocket Blog</a>
            .
        </p>
        <h3 className="text-3xl semibold text-raisinBlack pt-4">Install Webpack</h3>
        <p className="py-4">
            Let's create a new directory to build our project in. In your terminal, type:
        </p>
        <p className="py-4">
            <code className="bg-darkLiver text-ecru p-4 rounded block">
                mkdir react-webpack
            </code>
        </p>
        <p className="py-4">(or replace with the name of your choice)</p>
        <p className="py-4">
            Then, let's navigate into that directory we just created, and initialize our 
            &nbsp;
            <code className="bg-ecru">package.json</code>
            &nbsp;
            file:
        </p>
        <p className="py-4">
            <code className="bg-darkLiver text-ecru p-4 rounded block">
                cd react-webpack
                <br/>
                npm init
            </code>
        </p>
        <p className="py-4">
            Answer the prompts to set up your
            &nbsp; 
            <code className="bg-ecru">
                package.json
            </code>
            .
            If you didn't, you can go ahead and add this to your
            &nbsp; 
            <code className="bg-ecru">
                package.json
            </code>
            &nbsp;
            the old-fashioned way:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`{`}
                <div className="px-4">
                    "name": "react-webpack",
                    <br />
                    "version": 1.0.0,
                    <br />
                    "main": "index.js",
                    <br />
                    "license": "MIT"
                    <br />
                </div>
            {`}`}
        </code>
        <p className="py-4">
            Now, we need Webpack, our handy-dandy <span className="italic">static module-bundler</span>.
            If Webpack is new to you, I suggest taking at least a cursory look at
            <a className="text-dodgerBlue" href="https://webpack.js.org/concepts/"> what they've got going on</a>
            .
        </p>
        <p className="py-4">
            We can add it globally if we want, but for simplicity, let's go ahead and drop it into our
            &nbsp;
            <code className="bg-ecru">
                react-webpack
            </code> 
            &nbsp;
            project as a dev dependency. In your terminal, type this command:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm i webpack webpack-cli -D
        </code>
        <p className="py-4">
            Now we need to create an entry point for our app (page loaded when the app starts up). To do that:
        </p>
        <ul className="list-disc p-4 pt-0">
            <li>Create a src folder and create an index.js file inside it.</li>
            <li>Update your
            &nbsp; 
            <code className="bg-ecru">
                package.json
            </code>
            's script section to look like this:</li>
        </ul>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`"scripts: {`}
                <div className="px-4">
                    "start": "webpack --mode development",
                    <br />
                    "build": "webpack --mode production"
                    <br />
                </div>
            {`}`}
        </code>
        <p className="py-4">
            At this point in our configuration, we should be able to run the command
            &nbsp; 
            <code className="bg-ecru">
                npm run start
            </code>
            &nbsp;
            and our project will successfully bundle. You can give it a shot to see if any issues pop up. If any errors present, review the above steps and see if you forgot anything.
        </p>
        <h3 className="text-3xl semibold text-raisinBlack pt-4">Add React</h3>
        <p className="py-4">
            Now it's React time! Yay!
            &nbsp;
            <span role="img" aria-label="celebration popper">🎉</span>
            &nbsp;
            In your terminal, type:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm i react react-dom -S
        </code>
        <p className="py-4">
            Where we use React, Babel comes along. Babel is a transpiler, that converts ES6 to ES5. This allows us to use all of the ES6 features React requires in any browser environment. We'll add Babel and it's friends as dev dependencies:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm i babel-loader @babel/core @babel/preset-env @babel/preset-react @babel/cli -D
        </code>
        <p className="py-4">
            We'll need to configure our Webpack setup to use Babel. We're telling Webpack that our
            &nbsp; 
            <code className="bg-ecru">.js</code>
            &nbsp;
            files contain React, and that we should load them via the 
            &nbsp; 
            <code className="bg-ecru">babel-loader</code>
            &nbsp;
            we just installed.
        </p>
        <p className="py-4">Now we'll need a Babel configuration file. In your terminal, type: </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            touch .babelrc
        </code>
        <p className="py-4">
            And, in that freshly generated
            &nbsp; 
            <code className="bg-ecru">.babelrc</code>
            &nbsp;
            file, add the following:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`"scripts: {`}
                <div className="px-4">
                    "presets": ["@babel/preset-env", "@babel/preset-react"]
                </div>
            {`}`}
        </code>
        <p className="py-4">
            At this point, we will also need to create an
            &nbsp; 
            <code className="bg-ecru">index.html </code>
            &nbsp;
            file in the
            &nbsp; 
            <code className="bg-ecru">src</code>
            &nbsp; 
            folder where we can add our section element with id index. This is where we render our main React component.
        </p>
        <p className="py-4">
            Under the
            &nbsp; 
            <code className="bg-ecru">src</code>
            &nbsp; 
            folder create an
            &nbsp; 
            <code className="bg-ecru">index.html </code>
            &nbsp;
            file and add the following lines to it:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`<!DOCTYPE html>`}
            <br />
            {`<html lang="en">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`<head>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<meta charset="UTF-8">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<meta name="viewport" content="width=device-width, initial-scale=1.0">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<meta http-equiv="X-UA-Compatible" content="ie=edge">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<title>React, Webpack and TailwindCSS</title>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`</head>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`<body>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<section id="index"></section>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`</body>`}
            <br />
            {`</html>`}
        </code>
        <p className="py-4">
            Now we need to install 
            &nbsp;
            <code className="bg-ecru">
            html-webpack-plugin
            </code>
            &nbsp;
            and use this in our webpack config file. It will generate an HTML file for your application, or you can provide a template. It also minifies the file.
        </p>
        <p className="py-4">
            In your terminal, type:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm i html-webpack-plugin -D
        </code>
        <p className="py-4">
            We'll also have to update our Webpack configuration:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`const HtmlWebPackPlugin = require("html-webpack-plugin");`}
            <br />
            <br />
            {`module.exports = {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`module: {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`rules: [`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`{`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`test: /\.js$/,`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`exclude: /node_modules/,`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`use: {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`loader: "babel-loader"`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`}`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`}`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`]`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`},`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`plugins: [`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`new HtmlWebPackPlugin({`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`template: "./src/index.html",`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`filename: "./index.html"`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`});`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`]`}
            <br/>
            {`};`}
        </code>
        <p className="py-4">
            It's nice to have a hot-reloading development server to work in. We can do this with
            &nbsp;
            <code className="bg-ecru">
            webpack-dev-server
            </code>. In your terminal, type:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm i webpack-dev-server -D
        </code>
        <p className="py-4">
            Edit the
            &nbsp;
            <code className="bg-ecru">
            scripts
            </code>
            &nbsp;
            section in your
            &nbsp;
            <code className="bg-ecru">
            package.json
            </code>
            &nbsp;
            to use 
            &nbsp;
            <code className="bg-ecru">
            webpack-dev-server
            </code>
            &nbsp;
            for development.
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`"scripts: {`}
                <div className="px-4">
                    "start": "webpack-dev-server --mode development",
                    <br />
                    "build": "webpack --mode production"
                    <br />
                </div>
            {`}`}
        </code>
        <h3 className="text-3xl semibold text-raisinBlack pt-8">Add Tailwind CSS</h3>
        <p className="py-4">
            This part is sort of optional. It's really just to make your life easier; this course isn't about your mad styling skills, after all, but rather your understanding of core React concepts. If you'd rather write your own
            &nbsp;
            <code className="bg-ecru">
            css
            </code>
            &nbsp;
            that's cool too.
        </p>
        <p className="py-4">
            In your terminal, type:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm install tailwindcss autoprefixer postcss-cli mini-css-extract-plugin postcss-loader --save-dev
        </code>
        <p className="py-4">
            And then generate a Tailwind configuration file:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            ./node_modules/.bin/tailwind init tailwind.config.js
        </code>
        <p className="py-4">
            Create a 
            &nbsp;
            <code className="bg-ecru">
            postcss.config.js
            </code>
            &nbsp;
            file in the root of your project, with the following code:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`const tailwindcss = require('tailwindcss');`}
            <br />
            <br />
            {`module.exports = {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`plugins: [`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`tailwindcss('./tailwind.config.js'),`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`require('autoprefixer'),`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`],`}
            <br/>
            {`};`}
        </code>
        <p className="py-4">
            Then, make a
            &nbsp;
            <code className="bg-ecru">
            styles.css
            </code>
            &nbsp;
            file in your
            &nbsp;
            <code className="bg-ecru">
            /src
            </code>
            &nbsp;
            directory, with:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`@tailwind base;`}
            <br />
            <br />
            {`@tailwind components;`}
            <br />
            <br />
            {`@tailwind utilities;`}
            <br />
            <br />
            {`/* Custom css */`}
            <br />
        </code>
        <p className="py-4">
            Since we will import the CSS files into our React components we need to install
            &nbsp;
            <code className="bg-ecru">
            css-loader
            </code>
            &nbsp;
            module to resolve them. Once that’s resolved, we also need a
            &nbsp;
            <code className="bg-ecru">
            style-loader
            </code>
            &nbsp;
            to inject this into our DOM by adding a
            &nbsp;
            <code className="bg-ecru">
            style
            </code>
            &nbsp;
            tag into the 
            &nbsp;
            <code className="bg-ecru">
            head
            </code>
            &nbsp;
            element of our HTML. In your terminal, type:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            npm i css-loader style-loader -D
        </code>
        <p className="py-4">
            We'll have to update the Webpack configuration so that it knows how to load css as well. Head back to your
            &nbsp;
            <code className="bg-ecru">
            webpack.config.js
            </code>
            &nbsp;
            and let's update it to look like this:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`const HtmlWebPackPlugin = require("html-webpack-plugin");`}
            <br />
            {`const MiniCssExtractPlugin = require("mini-css-extract-plugin");`}
            <br />
            <br />
            {`module.exports = {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`module: {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`rules: [`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`{`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`test: /\.js$/,`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`exclude: /node_modules/,`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`use: {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`loader: "babel-loader"`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`}`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`},`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`{`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`test: /\.css$/,`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`use: {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`MiniCssExtractPlugin.loader,`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`"css-loader", "postcss-loader",`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`}`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`}`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`]`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`},`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`plugins: [`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`new MiniCssExtractPlugin({`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`filename: "styles.css",`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`chunkFilename: "styles.css"`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`}),`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`new HtmlWebPackPlugin({`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`template: "./src/index.html",`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`filename: "./index.html"`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`})`}
            <br/>
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`]`}
            <br/>
            {`};`}
        </code>
        <h3 className="text-3xl semibold text-raisinBlack pt-8">Did it work?</h3>
        <p className="py-4">
            Theoretically we should be up and running! Let's test it out. in your
            &nbsp;
            <code className="bg-ecru">
            index.js
            </code>
            &nbsp;
            , let's copy over this boilerplate from Tailwind website:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">
            {`import React from "react";`}
            <br />
            {`import ReactDOM from "react-dom";`}
            <br />
            {`import './styles.css';`}
            <br />
            <br />
            {`const Index = () => {`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`return (`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<div className="bg-white mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<div className="sm:flex sm:items-center px-6 py-4">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt=""/>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<div className="text-center sm:text-left sm:flex-grow">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<div className="mb-4">`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<p className="text-xl leading-tight">Adam Wathan</p>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`</div>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<div>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`<button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`</div>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`</div>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`</div>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            {`</div>`}
            <br />
            &nbsp;&nbsp;&nbsp;&nbsp;
            {`);`}
            <br/>
            {`};`}
            <br/>
            <br/>
            {`ReactDOM.render(<Index />, document.getElementById("index"));`}
        </code>
        <p className="py-4">
            Finally, in your terminal run the command:
        </p>
        <code className="py-4 bg-darkLiver text-ecru p-4 rounded block">npm start</code>
        <p className="py-4">If all has gone according to plan, Webpack should boot up your dev server at 
            &nbsp;
            <code className="bg-ecru">
            http://localhost:8080
            </code>
            . When you get there, you should see that Tailwind boilerplate snippet on the page, just like this:
            &nbsp;
        </p>
        <div className="bg-white my-4 mx-auto max-w-sm shadow-lg rounded-lg overflow-hidden">
            <div className="sm:flex sm:items-center px-6 py-4">
                <img className="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0" src="https://avatars2.githubusercontent.com/u/4323180?s=400&u=4962a4441fae9fba5f0f86456c6c506a21ffca4f&v=4" alt=""/>
                <div className="text-center sm:text-left sm:flex-grow">
                <div className="mb-4">
                    <p className="text-xl leading-tight">Adam Wathan</p>
                    <p className="text-sm leading-tight text-grey-dark">Developer at NothingWorks Inc.</p>
                </div>
                <div>
                    <button className="text-xs font-semibold rounded-full px-4 py-1 leading-normal bg-white border border-purple text-purple hover:bg-purple hover:text-white">Message</button>
                </div>
                </div>
            </div>
        </div>
        <h3 className="text-3xl semibold text-raisinBlack pt-8">Challenge: </h3>
        <p className="py-4">
            Edit the source code in 
            &nbsp;
                <code className="bg-ecru">
                index.js
                </code>
            &nbsp;
            to contain:
        </p>
        <ul className="list-disc p-4 pt-0">
            <li>An h1 that says "Hello World!"</li>
            <li>A picture of your choice.</li>
            <li>A little paragraph about something you want to say.</li>
            <li>
                A background or text color set with
                &nbsp;
                <code className="bg-ecru">
                Tailwind
                </code>
                &nbsp;
                utility classes.
            </li>
        </ul>
        <a href="https://tailwindcss.com/" className="py-4 text-dodgerBlue">Read up on Tailwind here </a>
    </div>
);

export default HelloWorld;
