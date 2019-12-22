import React, { Component } from 'react'
import { LineChart, Line } from 'recharts'

import BTC from '../../../assets/images/logo/BTC.png'
import BCH from '../../../assets/images/logo/BCH.png'
import ETH from '../../../assets/images/logo/ETH.png'
import LTC from '../../../assets/images/logo/LTC.png'

const SimpleLineChart = function(){
    let data = [];
    for(let i=0;i<30;i+=1){
        data.push({ pv: (100 + Math.floor(Math.random() * 100) )})
    }
        return (
            <LineChart width={100} height={50} data={data}>
                <Line type="monotone" dataKey="pv" dot={false} strokeWidth='2' stroke="lightgrey" />
            </LineChart>
        );
}

export default class PanelItem extends Component {
    constructor(props){
        super(props);
        
    }


   
    
    render() {
        const arr = [BTC,BCH,ETH,LTC];
        const divRed = { color: 'red' };
        const divGreen = { color: 'green' };
        const percentIsPos = (this.props.change > 0);

        return (
            <>
                
                <div className='panel-ord'>{this.props.num} </div>
                <div className="panel-name"> <img src={arr[this.props.num-1]} width='35px' height='35px' alt=""/> {this.props.name} <span>{this.props.symbol }</span>  </div>
                <div className='panel-price'>US${this.props.price}</div>
                <div className='panel-change' style={percentIsPos ? divGreen : divRed}>{this.props.change}%</div>
                <div className='panel-chart'>{SimpleLineChart()}</div>
                <div className="panel-action"><div className="btn btn-flat green">buy</div></div>
            </>
        )
    }
}







