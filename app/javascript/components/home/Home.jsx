import React, { Component } from 'react'
import HookHome from './HookHome'
import Panel from './Panel'
import ContentHomeOne from './ContentHomeOne'
import ContentHomeTwo from './ContentHomeTwo'
import ContentHomeThree from './ContentHomeThree'
import ContentHomeFour from './ContentHomeFour'
import FooterHome from './FooterHome'

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
                <FooterHome />
            </React.Fragment>
            )
        }
    }
    