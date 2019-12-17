import React, { Component } from 'react'

import BTC from '../../../assets/images/logo/BTC.png'
import BCH from '../../../assets/images/logo/BCH.png'
import ETH from '../../../assets/images/logo/ETH.png'
import XLM from '../../../assets/images/logo/XLM.png'

export default class PanelItem extends Component {
    constructor(props){
        super(props);
        
    }


    
    render() {
        const arr = [BTC,BCH,ETH,XLM];
        const divRed = { color: 'red' };
        const divGreen = { color: 'green' };
        const percentIsPos = (this.props.change > 0);

        return (
            <>
                
                <div className='panel-ord'>{this.props.num} </div>
                <div className="panel-name"> <img src={arr[this.props.num-1]} width='35px' height='35px' alt=""/> {this.props.name} BBTTC </div>
                <div className='panel-price'>US${this.props.price}</div>
                <div className='panel-change' style={percentIsPos ? divGreen : divRed}>{this.props.change}%</div>
                <div className='panel-chart'>{this.props.chart}</div>
                <div className="panel-action"><div className="btn btn-flat green">buy</div></div>
            </>
        )
    }
}
