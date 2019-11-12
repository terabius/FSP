import React, { Component } from 'react'
import {add ,remove } from '../../actions/wallets_actions'

export default class PriceItem extends Component {
    constructor(props){
        super(props);
        
        this.handleFollow = this.handleFollow.bind(this);
    }

    handleFollow(event){
        console.log(this.props.symbol);
        console.log(event.target);
        
        event.target.style.color='yellow';

        store.dispatch(add(this.props.symbol))
        .then(res => console.log(res)); 
    }

    render() {
        return (
            <>
                <div className="price-item">
                    <div>{this.props.number}</div>
                    <div className='crypto-name'>{this.props.name}</div>
                    <div>{this.props.price}</div>
                    <div>{this.props.change}</div>
                    <div>{this.props.market}</div>
                    <div><button className='btn btn-flat' disabled>Trade</button></div>
                    <div>
                        <i className="fa fa-3x fa-star" aria-hidden="true" onClick={this.handleFollow}></i>
                    </div>
                </div>
            </>
        )
    }
}
