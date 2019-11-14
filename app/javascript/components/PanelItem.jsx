import React, { Component } from 'react'

export default class PanelItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div>{this.props.num}</div>
                <div>{this.props.name}</div>
                <div>{this.props.price}</div>
                <div>{this.props.change}</div>
                <div>{this.props.chart}</div>
                <div className='btn btn-flat'>Trade</div>
            </>
        )
    }
}
