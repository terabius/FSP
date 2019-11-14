import React, { Component } from 'react'
import {fetchHistory} from '../../util/wallets_v1_util'

import BTC from '../../../assets/images/logo/BTC.png'
import BCH from '../../../assets/images/logo/BCH.png'
import ETH from '../../../assets/images/logo/ETH.png'
import XLM from '../../../assets/images/logo/XLM.png'
import EOS from '../../../assets/images/logo/EOS.png'
import XRP from '../../../assets/images/logo/XRP.png'


export default class Card extends Component {

    constructor(props){
        super(props);
        this.drawGraph = this.drawGraph.bind(this);
        
    }
    componentDidMount(){
        
        fetchHistory(this.props.symbol)
        .then(res => this.drawGraph(this.props.name,
            res['Data']['Data']));
            
        }
        
        render() {
        const arr = [BTC,BCH,ETH,XLM,EOS,XRP];
        const divRed = {color:'red'};
        const divGreen = { color:'green' };
        const percentIsPos = (this.props.percentage>0);

        const finder = (arr)=> {
            for(const i in arr){
                if(i.indexOf(this.props.symbol)){
                    console.log(i);
                    return i;
                }
            }
        }

        return (
            <>                
            <div className="card-container"  >


                <div className="card-sub-info">
                   
                    <div>
                        
                        <img src={finder(arr)} alt="btc" width='28px' height='28px'/>
                        <span className='card-name'>{this.props.name}</span>
                    </div>
                    <div>{this.props.time}</div>
                </div>


                <div className='card-sub-info'>
                    <div className='card-price'>${this.props.price.toFixed(2)}</div>
                    <div style={percentIsPos ? divGreen : divRed }>{this.props.percentage.toPrecision(2)}%</div>
                </div> 



                <div className="card-chart">
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
                    // backgroundColor: [
                    //     'rgba(255, 99, 132, 0.2)',
                    //     'rgba(54, 162, 235, 0.2)',
                    //     'rgba(255, 206, 86, 0.2)',
                    //     'rgba(75, 192, 192, 0.2)',
                    //     'rgba(153, 102, 255, 0.2)',
                    //     'rgba(255, 159, 64, 0.2)'
                    // ],
                    // borderColor: [
                    //     'rgba(255, 99, 132, 1)',
                    //     'rgba(54, 162, 235, 1)',
                    //     'rgba(255, 206, 86, 1)',
                    //     'rgba(75, 192, 192, 1)',
                    //     'rgba(153, 102, 255, 1)',
                    //     'rgba(255, 159, 64, 1)'
                    // ],
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
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
    
    
