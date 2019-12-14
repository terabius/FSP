import React, { Component } from 'react'

export default class PanelItem extends Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <>
                <div className='panel-ord'>{this.props.num} </div>
                <div className="panel-name"> IMGGS {this.props.name} BBTTC </div>
                <div className='panel-price'>${this.props.price}</div>
                <div className='panel-change'>{this.props.change}%</div>
                <div className='panel-chart'>{this.props.chart}</div>
                <div className="panel-action"><div className="btn btn-green">buy</div></div>
            </>
        )
    }
}
