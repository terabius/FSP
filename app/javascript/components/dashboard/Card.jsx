import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props){
        super(props);
    }

    drawGraph(){
        const canvas = document.getElementById('name');
        console.log(canvas);
        const ctx = canvas.getContext('2d');
        ctx.fillStyle = 'rgb(200,0,0)';
        ctx.fillRect(10, 10, 50, 50);
 
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
                    GRAPH
                    <canvas id='name'>

                    </canvas>
                    
                </div>
            </div>
            </>
            )
        }
    }
    
    
    