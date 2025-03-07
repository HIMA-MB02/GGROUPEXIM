import React from 'react';
import { Link } from 'react-router-dom';
import ROUTES from '../../constants/route-consts';
import { useLocation } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isThisRouteActive = (currentRoute) => {
    if (location.pathname === '/' && currentRoute.path === ROUTES.HOME.path) {
      return 'active';
    }
    if (currentRoute === location.pathname) {
      return 'active';
    }
    return '';
  };
  const getCurrentRouteName = () => {
    for (const route in ROUTES) {
      if (location.pathname === '/') return ROUTES.HOME.name;
      if (ROUTES[route].path === location.pathname) {
        return ROUTES[route].name;
      }
    }
  };
  return (
    <>
    <nav className='navbar navbar-expand-lg navbar-light'>
      <Link className='navbar-brand no-margin' to={ROUTES.HOME.path}>
        <img className='landing-page-logo-brand' src={process.env.PUBLIC_URL + '/static_content/logo-ggroup.gif'} alt='company_logo' /> 
        
        </Link>

        <h2 className='current-path-display-mobile'>{getCurrentRouteName()}</h2>

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
            <Link className={`nav-link ${isThisRouteActive(ROUTES.HOME)}`} to={ROUTES.HOME.path}>
            {ROUTES.HOME.name}
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.ABOUT_US)}`} to={ROUTES.ABOUT_US.path}>
              {ROUTES.ABOUT_US.name}
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.PRODUCTS)}`} to={ROUTES.PRODUCTS.path}>
              {ROUTES.PRODUCTS.name}
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.GALLERY)}`} to={ROUTES.GALLERY.path}>
              {ROUTES.GALLERY.name}
            </Link>
          </li>
          <li className='nav-item'>
            <Link className={`nav-link ${isThisRouteActive(ROUTES.CONTACT_US)}`} to={ROUTES.CONTACT_US.path}>
              {ROUTES.CONTACT_US.name}
            </Link>
          </li>
        </ul>
      </div>
      </nav>
      <h2 className='current-path-display'>{getCurrentRouteName()}</h2>
      </>
  );
};

export default Navbar;
