import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <div className='Navbar__wrapper'>
        {/* <div className='Navbar__logo'>Iris Predictor</div> */}
        <div className='Navbar__items'>
          <div className='Navbar__item'>
            <div className='inner_ring'>
              <Link className='anchor__tag' to='/'>
                  Home
              </Link>
            </div>
            <div className='asthetic__wrapper first'>
              <div className='asthetic'></div>
              <div className='asthetic_2'></div>
            </div>
          </div>
          <div className='Navbar__item'>
            <Link className='anchor__tag' to='/predict'>
                Predict
            </Link>
            <div className='asthetic__wrapper second'>
              <div className='asthetic'></div>
              <div className='asthetic_2'></div>
            </div>
          </div>
          <div className='Navbar__item'>
          <Link className='anchor__tag' to='/database'>
                Database
          </Link>

          </div>
        </div>
    </div>
  )
}

export default Navbar