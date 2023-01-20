# studious-engine


## Description

This is an application of a simple text editor that can function both `online` and `offline`. It is a single-page text editor that runs in the browser and meets the PWA criteria. It features a number of data presistence techniques that serve as redundancy in case one of the options is not supported by the browser. This application is deplyed on Heroku and also functions `offline` when `installed`.  

## Table of Contents (Optional)

If your README is long, add a table of contents to make it easy for users to find what they need.

- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Questions](#questions)

## Installation

  Clone my repository on GitHub.
  
  To install the application's `dependencies` and `devDependencies`, run:
  ```
  npm install
  ```
  
  To invoke the application, run:
  ```
  npm run start
  ```

## Usage

  ## Usage
  Please see the screenshots for an example.
  
  ### Features and Functionalities
  
  This application is developed to allow users to create notes or code snippets with or without an internet connection, so users can reliably retrieve them for later use. It follows the features and functionalities required in the Assignment's README:
  
  1. When the user opens the application in the user's editor, the user will see a client server folder structure.
  
  2. When the user runs `npm run start` from the root directory, the application starts up the backend and serve the client.
  
  3. When the user runs the text editor application from my terminal, the user will find that the application's JavaScript files have been bundled using webpack.
  
  4. When the user runs the webpack plugins, the user will find a generated HTML file, service worker, and a manifest file.
  
  5. When the user uses next-gen JavaScript in the application, the text editor still functions in the browser without errors.
  
  6. When the user opens the text editor, the user will find the IndexedDB has immediately created a database storage.
  
  7. When the user enters content and subsequently clicks off of the DOM window, the content in the text editor is saved with IndexedDB.
  
  8. When the user reopens the text editor after closing it, the content in the text editor has been retrieved from the IndexedDB.
  
  9. When the user clicks on the Install button, the application is downloaded as an icon on the user's desktop.

  10. When the user loads the application, the user can register a service worker using workbox.

  11. When the user registers a service worker, the user's static assets are pre cached upon loading along with subsequent pages and static assets. 
  
  13. When the user deploys to Heroku, the user has a proper build scripts for a webpack application. 

The following shows the launched application:

![shot1](https://user-images.githubusercontent.com/115522524/213817290-4a4a1e82-aa1f-40ae-ad81-5c20cfd07b64.png)

The following shows the install button to `download` the application:

![shot2](https://user-images.githubusercontent.com/115522524/213817306-f5091e2f-5ef4-40a4-b1fc-c333105fe6bc.png)

The following shows the `manifest.json` for the application:

![shot3](https://user-images.githubusercontent.com/115522524/213817313-70e6dfc5-5c2c-4b0d-813d-18690a636d1b.png)

The following shows the `Service Workers` for the application:

![shot4](https://user-images.githubusercontent.com/115522524/213817327-061d7685-0c73-4f57-a7a2-0412538326f3.png)

The following showes the `IndexedDB` for the application:

![shot5](https://user-images.githubusercontent.com/115522524/213817336-e92524d4-8bd1-43c2-9d81-0433c5cc93d9.png)

The following shows the `downloaded` application:

![shot6](https://user-images.githubusercontent.com/115522524/213817341-84800e37-e091-4aea-8fea-1c10687ccfba.png)

[A deployed version can be viewed here.](https://thawing-basin-03739.herokuapp.com/)

## Author
Jason Doss

## Questions
For questions or issues, please contace:
- Jason Doss
- Email: jason.j.doss@gmail.com
- GitHub Profile: https://github.com/dossj88


