import React from 'react'

const Navbar = () => {
    return (
        <div className='navbar bg-img'>
            <nav className='nav container'>
                <div className="nav__logo-wrapper">
                    <a href='#'><img src="/logo-grey.svg" alt="" /></a>
                </div>
                <ul className='nav__links bold-text'>
                    <li><a href="" className='nav__links-item'>Home</a></li>
                    <li><a href="" className='nav__links-item'>About</a></li>
                    <li><a href="" className='nav__links-item'>Tariff</a></li>
                    <li><a href="" className='nav__links-item'>Contact</a></li>
                    <button className="nav__button nav-bold-text  nav-btn">Book Now</button>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar
