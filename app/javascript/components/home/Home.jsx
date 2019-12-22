import React, { Component } from 'react'

import HookHome from './HookHome'
import Panel from './Panel'
import ContentHomeOne from './ContentHomeOne'
import ContentHomeTwo from './ContentHomeTwo'
import ContentHomeThree from './ContentHomeThree'
import ContentHomeFour from './ContentHomeFour'
import ContentHomeFive from './ContentHomeFive'
import ContentHomeSix from './ContentHomeSix'


export default class Home extends Component {
    
    render() {
        return (
            <React.Fragment>
                <HookHome />
                <Panel />
                <ContentHomeOne />
                <ContentHomeTwo />
                <ContentHomeThree />
                <ContentHomeFour />
                <ContentHomeFive />
                <ContentHomeSix />
            </React.Fragment>
            )
        }
    }
    