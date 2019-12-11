import React, { Component } from 'react'

export default class PanelItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div>{this.props.num} </div>
                <div className="panel-name"> {this.props.name}</div>
                <div className='panel-price'>{this.props.price}</div>
                <div className='panel-change'>{this.props.change}</div>
                <div className='panel-chart'>{this.props.chart}</div>
                <div className='panel-action'>
                    <div className='btn btn-flat'>Trade</div>
                </div>
                <div className="panel-dummy"></div>
            </>
        )
    }
}
