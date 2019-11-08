// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store/configureStore'
import App from '../components/App'


document.addEventListener('DOMContentLoaded', () => {

  let store;
  if (window.currentUser) {
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entitities: {
        users: {
          [id]: currentUser
        }
      }
      session: { id }
    };
    store = configureStore(preloadedState);

    // Clean up after ourselves so we don't accidentally use the
    // global currentUser instead of the one in the store
    delete window.currentUser;

  } else {
    store = configureStore();
  }

  //creating my root div with id root 
  const root = document.createElement('div');
  root.setAttribute("id", "root")  
  ReactDOM.render(
    <App store={store}/>,
    document.body.appendChild(root),
  )
})
