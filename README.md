# Webpack 4 Zillow
This project is a webpack configuration example. Using the latest(6/7/19) versions of webpack 4.x and Babel 7.x. The example show of how to set up react, jsx, and js into a bundle.js file. Along with the bundle.js setup, are examples of accepting various image file types, and transforming scss to a single css file. Topics of dealing with data sizes and including unique hashing labels are also covered. 

## How to Run
Once in the directory: 
```
npm install
```
To run the app (building the bundle + watching for changes):
```
npm run webpack-dev
```
Once this is complete the application can be reached by navigating to:
`localhost:8080`

### To only build a bundle file
Once in the directory: 
```
npm install
```
To build a bundle file:
```
npm run webpack
```

##Webpack 4 Zillow Checkpoints:
1. [x] Has a single javascript file as the entrypoint into the application

2. [x] Handles Javascript/ES6/React code with both .js and .jsx file extensions; should output a single ES5 .js bundle with a unique hash added to the filename

3. [x] Handles SCSS code with .scss extensions; should output a single .css file with a unique hash added to the filename

4. [x] Handles IMG file with .jpeg, .jpg, .png, and .gif extensions; should return a link referencing the file

5. [x] Handles SVG file with .svg extension; return a base-64 data-encoded string if the file is < 1MB and a link to the file otherwise
