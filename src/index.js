import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import Firebase from 'firebase';

var config = {
  apiKey: "AIzaSyCIMBmTqvSS2TRy_zuJG1lUS9OykFndLpI",
  authDomain: "namtest-f9ef6.firebaseapp.com",
  databaseURL: "https://namtest-f9ef6.firebaseio.com",
  projectId: "namtest-f9ef6",
  storageBucket: "namtest-f9ef6.appspot.com",
  messagingSenderId: "990274150243"
};

Firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
