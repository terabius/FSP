import React from 'react'
import {Provider} from 'react-redux'
import App from './App'

export default function Root({store}) {
    return (
        <div>
            <Provider store={store} >
                <App />
            </Provider >            
        </div>
        )
    }
    