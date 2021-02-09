import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/route-consts';
import { useLocation } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isThisRouteActive = (currentRoute) => {
    if (location.pathname === '/' && currentRoute === ROUTES.HOME) {
      return 'active';
    }
    if (currentRoute === location.pathname) {
      return 'active';
    }
    return '';
  };
  return (
    <nav className='navbar navbar-expand-lg navbar-light'>
      <Link className='navbar-brand no-margin' to={ROUTES.HOME}>
        <img className='landing-page-logo-brand' src={process.env.PUBLIC_URL + '/static_content/logo-ggroup.gif'} alt='company_logo' /> 
      </Link>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarColor01'
        aria-controls='navbarColor01'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarColor01'>
        <ul className='navbar-nav ml-auto'>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.HOME)}`} to={ROUTES.HOME}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.ABOUT_US)}`} to={ROUTES.ABOUT_US}>
              About Us
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.PRODUCTS)}`} to={ROUTES.PRODUCTS}>
              Products
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.CONTACT_US)}`} to={ROUTES.CONTACT_US}>
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
