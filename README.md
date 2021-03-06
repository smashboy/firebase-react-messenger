# Firebase React Messenger

![image](https://user-images.githubusercontent.com/30213662/130116642-734b77f6-243a-4a31-9958-e309972d5bfe.png)


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Requirements

### `Firebase credentials`

You have to generate firebase service account key in your project settings and paste it to `src/core/firebase/firebaseCredentials.ts`.

Also you will need to configure the following firestore indexes:

![image](https://user-images.githubusercontent.com/30213662/130205923-34ede02b-7c6f-49ee-a3f3-3c5c57f687ff.png)

![image](https://user-images.githubusercontent.com/30213662/130206011-a9e4b30f-c50f-4057-afab-c7897117858c.png)



## Available Scripts

In the project directory, you can run:


### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## App Structure

### `src/core`

The main place which contains components, hooks, etc that are used throughout app.

### `src/features`

Contains folders that includes specific functionality (conversation, thread, conversations list).
 

