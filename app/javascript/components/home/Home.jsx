import React, { Component } from 'react'
import HookHome from './HookHome'
import Panel from './Panel'

export default class Home extends Component {
    
    render() {
        return (
            <React.Fragment>
                <HookHome />
                <Panel />
            </React.Fragment>
            )
        }
    }
    