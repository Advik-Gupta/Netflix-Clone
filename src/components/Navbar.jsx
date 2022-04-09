import React, { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [handleShow, setHandleShow] = useState(false)

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 70) {
                setHandleShow(true)
            } else {
                setHandleShow(false)
            }
        })
    }, [])
    

    return (
        <div className={`nav ${handleShow ? 'nav_black' : ''} `}>
            <img className='nav_logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/340px-Netflix_2015_logo.svg.png" alt="Netflix Logo" />
            <img className='nav_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="User Avatar" />
        </div>
    )
}

export default Navbar