import React, { Component } from 'react'

export default class Card extends Component {

    constructor(props){
        super(props);

        this.drawGraph = this.drawGraph.bind(this);
    }

    drawGraph(name){
        const canvas = document.getElementById(name);
        console.log(canvas);
        const ctx = canvas.getContext('2d');
        
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(50, 50);
        ctx.stroke();
        ctx.transform(1,0,0,-1,0,0);
 
    }

    componentDidMount(){
        this.drawGraph(this.props.name)
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
                    <canvas id={this.props.name}>

                    </canvas>
                    
                </div>
            </div>
            </>
            )
        }
    }
    
    
    