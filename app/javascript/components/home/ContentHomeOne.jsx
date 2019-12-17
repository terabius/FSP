import React from 'react'

import XLM from '../../../assets/images/logo/XLM.png'
import DAI from '../../../assets/images/logo/DAI.png'
import EOS from '../../../assets/images/logo/EOS.png'
import XTZ from '../../../assets/images/logo/XTZ.png'

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
                    <div className="contentOne-data"><img src={XTZ} width='34px' height='34px' alt="" />Tezos <span className="grey">XTZ</span> </div>
                    <div className="contentOne-data"><img src={DAI} width='34px' height='34px' alt="" />Dai <span className="grey">DAI</span>  </div>
                    <div className="contentOne-data"><img src={EOS} width='34px' height='34px' alt="" />EOS <span className="grey">EOS</span>   </div>
                    <div className="contentOne-data"><img src={XLM} width='34px' height='34px' alt="" />Stellar Lumens <span className="grey">XLM</span> </div>
            </div>
          </div>  
        </>
    )
}
