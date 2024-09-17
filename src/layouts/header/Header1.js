import React from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router-dom';

// Component
import MainMenu from './MainMenu';
import OffCanvasMenu from './OffcanvasMenu';
import useHeaderSticky from '../../hooks/useHeaderSticky';
import Search from '../../component/search';
import LogoDark from '../../assets/images/logo-dark.png';
import LogoLight from '../../assets/images/logo-light.png';

// SCSS
import './style.scss';
import { FaSignOutAlt } from 'react-icons/fa';

const Header1 = (props) => {
  // Header Sticky : Custom Hooks
  const [isSticky] = useHeaderSticky();
    const navigate = useNavigate();

  // Logout function
  const logout = () => {
    sessionStorage.removeItem('userId'); // Clear the user session
    navigate('/login-signup'); // Redirect to the login page
  };

  return (
    <>
      <header
        className={`site-header header-default ${
          isSticky ? 'header-sticky' : ''
        } ${props.className || ''}`}
      >
        <div className="header-wrapper">
          <div className={`${props.containerSize || 'container-fluid'}`}>
            <div className="header-inner">
              <div className="site-logo">
                <NavLink className="logo-link" to="/">
                  {props?.siteLogo ? <img className="img-fluid desktop-logo" src={props.siteLogo} alt="logo" /> :
                    <img className="img-fluid desktop-logo" src={LogoDark} alt="logo" />}
                  {props?.mobileLogo ? <img className="img-fluid mobile-logo" src={props.mobileLogo} alt="logo" /> :
                    <img className="img-fluid mobile-logo" src={LogoLight} alt="logo" />}
                </NavLink>
              </div>

              <div className="menu-links">
                <div className="header-button d-none d-lg-block">
                  <NavLink className="button flat" to="/">Home</NavLink>
                </div>
                <div className="main-menu d-none d-lg-block">
                  <MainMenu />
                </div>
                <div className="header-action">
                  {/*<div className="header-action-info">*/}
                  {/*  <ul>*/}
                  {/*    <li key="1">*/}
                  {/*      <Search />*/}
                  {/*    </li>*/}
                  {/*  </ul>*/}
                  {/*</div>*/}
                  <div className="header-button d-none d-lg-block">
                    <NavLink className="button flat" to="/add-car">Add Car</NavLink>
                  </div>
                  <div className="header-button d-none d-lg-block">
                    <NavLink className="button flat" to="/login-signup">Login/Sign Up</NavLink>
                  </div>
                  <div className="header-button d-none d-lg-block">
                    <button className="button flat" onClick={logout}>
                      <FaSignOutAlt /> {/* Add the logout icon here */}
                      Logout
                    </button>
                  </div>
                  <div className="mobile-menu-btn d-lg-none">
                    <OffCanvasMenu position="end" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Header1;
