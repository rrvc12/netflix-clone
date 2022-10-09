import React, { useEffect, useState } from 'react'
import './Nav.css'

function Nav() {
	const [show, handleShow] = useState(false);

	const transitionNavBar = () => {
		if (window.scrollY > 100){
			handleShow(true);
		} else {
			handleShow(false);
		}
	}

	useEffect(() =>{
		window.addEventListener("scroll", transitionNavBar);
		return () => window.removeEventListener('scroll', transitionNavBar);
	}, [])

  return (
    <div className={`nav ${show && "nav__black"}`}>
        <div className='nav_contents'>
          <img className='nav__logo'
            src='https://logodownload.org/wp-content/uploads/2014/10/netflix-logo-5.png' 
            alt="Logo"
          />
          <img className='nav__avatar'
            src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
            alt='avatar'
          />
        </div>
    </div>
  )
}

export default Nav