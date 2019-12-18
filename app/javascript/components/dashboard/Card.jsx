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
    return (
        <LineChart width={100} height={50} data={data}>
            <Line type="monotone" dataKey="pv" dot={false} strokeWidth='2' stroke="lightgrey" />
        </LineChart>
    );
}


export default class Card extends Component {

    constructor(props){
        super(props);
        this.drawGraph = this.drawGraph.bind(this);
        
    }
    componentDidMount(){
        const sym = ['BTC', 'BCH', 'ETH', 'XLM', 'EOS', 'XRP'].indexOf(this.props.symbol)!== -1 ? this.props.symbol : 'BTC'  
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
            <div className="card-container"  >


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
                    <canvas id={this.props.name} >

                    </canvas>
                </div>
            </div>
            </>
        )
    }


    drawGraph(name, history) {
        const ctx = document.getElementById(name).getContext('2d');

        const hist = history.map(el =>
            el['close']
        );
        const norm = Math.max(...hist);
        // console.log(norm);
        const pts = hist.map(el => el / norm);
        // console.log(hist);
        const xlabel = pts.map(el => '');
        // console.log(xlabel);

        const myChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: xlabel,
                datasets: [{
                    label: '',
                    data: pts,
                    borderColor: ['rgb(255, 99, 132)', 'rgb(98, 126, 234)',
                        'rgb(175, 213, 136)', 'rgb(247,147,26)'][Math.floor(Math.random() * 4)],
                    borderWidth: 1
                }]
            },
            options: {
                legend: {
                    display: false,
                },
                elements: { point: { radius: 0 } },
                scales:
                {

                    xAxes: [{
                        gridLines: {
                            display: false,
                            drawBorder: false
                        },
                    }],
                    yAxes: [{
                        gridLines: {
                            drawBorder: false,
                            display: false
                        },
                        ticks: {
                            display: false
                        }
                    }]
                }
            }
        });

    }
}
    
 
