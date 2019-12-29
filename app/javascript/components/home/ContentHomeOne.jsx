import React from 'react'
import {Link} from 'react-router-dom'

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
                    Discover how specific cryptocurrencies work — and <br/>
                     get a bit of each crypto to try out for yourself.
                </p> <br/>
                    <div><Link to='/signup' className='btn btn-flat'>Start earning</Link></div>
            </div>
            <div className="contentOne-col">
                    <div className="contentOne-data"><img src={XTZ} width='38px' height='38px' alt="tezos" />Tezos <span className="grey">XTZ</span> </div>
                    <div className="contentOne-data"><img src={DAI} width='38px' height='38px' alt="dai" />Dai <span className="grey">DAI</span>  </div>
                    <div className="contentOne-data"><img src={EOS} width='38px' height='38px' alt="eos" />EOS <span className="grey">EOS</span>   </div>
                    <div className="contentOne-data"><img src={XLM} width='38px' height='38px' alt="stellar" />Stellar Lumens <span className="grey">XLM</span> </div>
            </div>
          </div>  
        </>
    )
}
