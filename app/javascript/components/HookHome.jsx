import React from 'react'

export default function HookHome() {
    return (
        <div>
            <h1 className="megatitle">Buy and sell cryptocurrency</h1>
            <h2 className="subtitle">Coinbase is the easiest place to buy, sell, and manage your cryptocurrency portfolio.</h2>

            <div className="email-group">
                <input className="email-input" type="text" placeholder="Email address" />
                <button name="button" type="submit" className="btn btn-flat green">
                    Get Started
                    </button>
            </div>

        </div>
    )
}
