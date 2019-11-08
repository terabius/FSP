// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import { } from 'jquery-ujs'
import React from 'react'
import ReactDOM from 'react-dom'
// import configureStore from '../store/configureStore'
import App from '../components/App'


document.addEventListener('DOMContentLoaded', () => {
  let start;
  // let store;
  if (window.currentUser) {
    
    const { currentUser } = window;
    const { id } = currentUser;
    start  = {currentUser , id};
    // const preloadedState = {
    //   entities: {
    //     users: {
    //       [id]: currentUser
    //     }
    //   },
    //   session: { id }
    // };
    // store = configureStore(preloadedState);

    delete window.currentUser;

  } else {
    start = {currentUser:null};
    // store = configureStore();
  }
  //creating my root div with id root 
  const root = document.createElement('div');
  root.setAttribute("id", "root");

  ReactDOM.render(
    <App store={start}/>,
    document.body.appendChild(root),
  )
})
