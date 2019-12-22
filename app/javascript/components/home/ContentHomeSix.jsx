import React from 'react'

import banner from '../../../assets/images/banner.jpg'

export default function ContentHomeSix() {
    return (
        <div className='contentSix-container'>
            <div>
                <div className="contentOne-col">
                    <h2>
                        Earn up to US$126 <br />
                        worth of crypto
                    </h2>
                    <p>
                        Discover how specific cryptocurrencies work — and<br />
                        get a bit of each crypto to try out for yourself.
                    </p> <br />
                    <div><a href="" className="btn btn-flat">Start earning</a></div>
                </div>
            </div>
            <div>
                <img src={banner} alt="banner"/>
            </div>
        </div>
    )
}
