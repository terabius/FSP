import { } from 'jquery-ujs'
import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from '../store/configureStore'
import Root from '../components/Root'


document.addEventListener('DOMContentLoaded', () => {
  let store;
  // let fassets;

  // $.ajax({ url: 'https://raw.githubusercontent.com/bppandre/apitest/master/crypto.json', dataType:'json'})
  //   .then(res => res.data.forEach(el => 
  //     Object.assign({}, fassets, el.symbol)));
      

  if (window.currentUser) {
  
    const { wallet } = window;
    const wallets = {};
    wallet.forEach(element => {
      wallets[element.name] = element;
    });
    const { currentUser } = window;
    const { id } = currentUser;
    const preloadedState = {
      entities: {
        wallets: wallets,
        users: {
          [id]: currentUser
        }
      },
      session: { id }
    };

    store = configureStore(preloadedState);
    delete window.currentUser;
    delete window.wallet;
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
