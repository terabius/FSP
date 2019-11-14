import React, { Component } from 'react'
import {add ,remove } from '../../actions/wallets_actions'

export default class PriceItem extends Component {
    constructor(props){
        super(props);
        
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(event){

        // console.log(this.props.symbol);
        // console.log(event.target);
        
        if(Object.keys(this.props.wallets).includes(this.props.symbol)){
            // console.log(this.props.wallets[this.props.symbol].id);
            store.dispatch(remove(this.props.wallets[this.props.symbol].id));
            event.target.style.color = 'black';
        }
        else{
            event.target.style.color='yellow';
            store.dispatch(add(this.props.symbol));
        }
    }

    star = () =>{
        const followed = {
            color: 'yellow',
        };
        const style = {
            color: 'black',
        }
        
        if (Object.keys(this.props.wallets).includes(this.props.symbol)){
            return followed;
        }else{
            return style;
        }
    }

    render() {
        const divRed = { color: 'red' };
        const divGreen = { color: 'green' };
        const percentIsPos = (this.props.change > 0);

        return (
            <>  
                <div className="price-item">
                    <div>{this.props.number}</div>
                    <div className='crypto-name'>{this.props.name}</div>
                    <div>{this.props.price.toFixed(2)}</div>
                    <div style={percentIsPos ? divGreen : divRed }>{this.props.change.toPrecision(2)}%</div>
                    <div>{this.props.market}</div>
                    <div><button className='btn btn-flat' disabled>Trade</button></div>
                    <div>
                        <i className="fa fa-3x fa-star" aria-hidden="true" style={this.star()} onClick={this.handleFollow}></i>
                    </div>
                </div>
            </>
        )
    }
}
