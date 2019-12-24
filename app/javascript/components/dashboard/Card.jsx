import React, { Component } from 'react'
import {fetchHistory} from '../../util/wallets_v1_util'
import { LineChart, Line } from 'recharts'

import BTC from '../../../assets/images/logo/BTC.png'
import BCH from '../../../assets/images/logo/BCH.png'
import ETH from '../../../assets/images/logo/ETH.png'
import XLM from '../../../assets/images/logo/XLM.png'
import EOS from '../../../assets/images/logo/EOS.png'
import XRP from '../../../assets/images/logo/XRP.png'

const SimpleLineChart = function () {
    let data = [];
    for (let i = 0; i < 30; i += 1) {
        data.push({ pv: (100 + Math.floor(Math.random() * 100)) })
    }
    const colors = ['lightgrey','red','green','black','orange','blue','purple','yellow'];
    const colorChoice = colors[Math.floor(Math.random()*7)];
    return (
        <LineChart width={370} height={130} data={data}>
        <Line type="monotone" dataKey="pv" dot={false} strokeWidth='2' stroke={colorChoice} />
        </LineChart>
        );
}
    
    
export default class Card extends Component {
        
    constructor(props){
        super(props);
    }

    componentDidMount(){
        const sym = ['BTC', 'BCH', 'ETH', 'XLM', 'EOS', 'XRP'].indexOf(this.props.symbol)!== -1 ? this.props.symbol : 'BTC';  
        fetchHistory(sym)
            .then(res => this.drawGraph(this.props.name,
                res['Data']['Data']));
    }
    

    render() {
        const arr = [BTC,BCH,ETH,XLM,EOS,XRP];
        const arr_double = ['BTC', 'BCH', 'ETH', 'XLM', 'EOS', 'XRP'];
        const idx = (arr_double.indexOf(this.props.symbol) !== -1) ? arr_double.indexOf(this.props.symbol) : 1; 
        const divRed = {color:'red'};
        const divGreen = { color:'green' };
        const percentIsPos = (this.props.percentage>0);
                
        return (
                        <>                
                        <div className="card-container"> 
                        
                            <div className="card-sub-info">
                                <div>
                                    <img src={arr[idx]} alt="btc" width='28px' height='28px'/>
                                    <span className='card-name'>{this.props.name}</span>
                                </div>
                                <div>{this.props.time}</div>
                            </div>
                        
                            <div className='card-sub-info'>
                                <div className='card-price'>${this.props.price.toFixed(2)}</div>
                                <div style={percentIsPos ? divGreen : divRed }>{this.props.percentage.toPrecision(2)}%</div>
                            </div> 
                        
                            <div className="card-chart">
                                {SimpleLineChart()}
                        
                            </div>
                        </div>
                        </>
                )
    }
                              
}
                
                
                