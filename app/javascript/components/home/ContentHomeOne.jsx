import React from 'react'
import XLM from '../../../assets/images/logo/XLM.png'

export default function ContentHomeOne() {

    return (
        <>
          <div className="contentOne-container">
            <div className="contentOne-col">
                <h2>
                    Earn up to US$126 <br/>
                    worth of crypto
                </h2>
                <p>
                    Discover how specific cryptocurrencies work — and<br/>
                     get a bit of each crypto to try out for yourself.
                </p> <br/>
                <div><a href="" className="btn btn-flat">Start earning</a></div>
            </div>
            <div className="contentOne-col">
                    <div className="contentOne-data"><img src={XLM} width='28px' height='28px' alt="" />     Bitcoin SYM</div>
                    <div className="contentOne-data"><img src={XLM} width='28px' height='28px' alt="" />     Bitcoin SYM</div>
                    <div className="contentOne-data"><img src={XLM} width='28px' height='28px' alt="" />     Bitcoin SYM</div>
                    <div className="contentOne-data"><img src={XLM} width='28px' height='28px' alt="" />     Bitcoin SYM</div>
            </div>
          </div>  
        </>
    )
}
