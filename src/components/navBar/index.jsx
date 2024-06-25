import React, { useState } from 'react'
import { FaBars, FaReact } from 'react-icons/fa'
import { HiX } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import './styles.scss'
import Reacts from './react.json'
import Lottie from 'lottie-react'

const NavBar = () => {

    const data = [
        {
            label: 'HOME',
            to: '/'
        },
        {
            label: 'ABOUT',
            to: '/about'
        },
        
        
        {
            label: 'RESUME',
            to: '/resume'
        },
        {
            label: 'SKILLS',
            to: '/skills'
        },
        {
            label: 'PORTFOLIO',
            to: '/portfolio'
        },
        {
            label: 'CONTACT',
            to: '/contact'
        }
    ]

    const [toggleIcon, setToggleIcon] = useState(false)

    const handleToggleIcon = () => {
        setToggleIcon(!toggleIcon)
    }

    return (
        <div>
            <nav className="navbar">
                <div className="navbar__container">
                    <Link to={"/"} className="navbar__container__logo"  >
                        <div style={{ width: "10%" }}>
                            <Lottie loop={true} animationData={Reacts} />
                        </div>
                    </Link>
                </div>
                <ul className={`navbar__container__menu ${toggleIcon ? "active" : ""} `} >
                    {
                        data.map((item, key) => (
                            <li key={key} className="navbar__container__menu__items">
                                <Link className="navbar__container__menu__items__links" to={item.to} >
                                    {item.label}
                                </Link>
                            </li>
                        ))
                    }
                </ul>
                <div className="navbar__icons" onClick={handleToggleIcon} >
                    {toggleIcon ? <HiX size={30} /> : <FaBars size={30} />}

                </div>
            </nav>

        </div>


    )
}

export default NavBar