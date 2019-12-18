import React from 'react'

export default function Footer() {
    return (
        <>
            <div className="footer-container">
                <div>
                    <span>Home</span>
                    <span>Careers</span>
                    <span>Legal & Privacy</span>
                </div>
                <div>
                    <span>© 2019 Koinbase</span>
                    <span>
                    <select name="lang" id="lang">
                        <option value="english">English</option>
                        <option value="francais">Francais</option>
                    </select>
                    </span>
                    <span>
                    <div className="btn btn-flat spec">Need Help?</div>
                    </span>
                </div>
            </div>
        </>
    )
}
