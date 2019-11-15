import React, { Component } from 'react'

export default class PanelItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div>{this.props.num} <span className="panel-name"> {this.props.name}</span></div>
                <div className='panel-price'>{this.props.price}</div>
                <div className='panel-change'>{this.props.change}</div>
                <div className='panel-chart'>{this.props.chart}</div>
                <div className='btn btn-flat'>Trade</div>
            </>
        )
    }
}
