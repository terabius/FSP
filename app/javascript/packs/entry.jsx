import { } from 'jquery-ujs'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store/configureStore'
import Root from '../components/Root'


document.addEventListener('DOMContentLoaded', () => {
  let store;

  if (window.currentUser) {
  
    // let preloadedState = {};
    
    // $.ajax({url:'/v1/session/reload'})
    // .then( res => {
    // preloadedState.entities = res;
    // });
    // preloadedState.session = { id: window.currentUser.id };
    // preloadedState.errors = {session:'passed'};

    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        users: {
          [id]: currentUser
        }
      },
      session: { id }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
   
  } else {
    store = configureStore();
  }
  
  window.store = store;
  //creating my root div with id root 
  const root = document.createElement('div');
  root.setAttribute("id", "root");

  ReactDOM.render(
    <Root store={store}/>,
    document.body.appendChild(root),
  )
})
