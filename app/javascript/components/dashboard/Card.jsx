import React, { Component } from 'react'
import {fetchHistory} from '../../util/wallets_v1_util'

export default class Card extends Component {

    constructor(props){
        super(props);

        this.drawGraph = this.drawGraph.bind(this);
        
    }
    
    
    drawGraph(name, history){
        const ctx = document.getElementById(name).getContext('2d');
        
        const hist = history.map( el =>
            el['close']
            );
        const norm = Math.max(...hist);
        // console.log(norm);
        const pts = hist.map(el=>el/norm);
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
                    borderWidth: 1
                }]
            },
            options: {
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

    componentDidMount(){

        fetchHistory('BTC')
            .then(r => this.drawGraph(this.props.name,
                r['Data']['Data']));
                
    }

    render() {
        const divRed = {color:'red'};
        const divGreen = { color:'green' };
        const percentIsPos = (this.props.percentage>0);
        
        return (
            <>                
            <div className="card-container"  >
                <div className="card-sub-info">
                    <div>{this.props.name}</div>
                    <div>{this.props.time}</div>
            
                </div>
                <div className='card-sub-info'>
                    <div>{this.props.price.toFixed(2)}</div>
                    <div style={percentIsPos ? divGreen : divRed }>{this.props.percentage.toPrecision(2)}%</div>
                </div>            
                <div className="card-chart">
                    <canvas id={this.props.name}>

                    </canvas>
                </div>
            </div>
            </>
            )
        }
    }
    
    
