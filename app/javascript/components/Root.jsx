import React from 'react'
import {Provider} from 'react-redux'
import {BrowserRouter as Router } from 'react-router-dom'
import App from './App'

export default function Root({store}) {
    return (
        
            <Provider store={store} >
                <Router>
                    <App />
                </Router>
            </Provider >            
        
        )
    }
    