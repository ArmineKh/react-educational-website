import React, { useRef } from 'react';
import { Container } from 'reactstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll'
import './header.css';

const navLinks = [
  {
    display: 'Home',
    url: '/'
  },
  {
    display: 'About',
    url: '#about__us'
  },
  {
    display: 'Courses',
    url: '#courses'
  },
  {
    display: 'Why Choose Us',
    url: '#why__choose__us'
  },
  {
    display: 'Free Courses',
    url: '#free__courses'
  },
];

const Header = () => {
  const menuRef = useRef();

  const menuToggle = () => menuRef.current.classList.toggle("active__menu");

  return (
    <header className='header'>
      <Container>
        <div className="navigation d-flex align-items-center justify-content-between">
          <div className="logo">
            <h2 className='d-flex align-items-center'>
            <i className="ri-pantone-line"></i> Learners.
            </h2>
          </div>

          <div className="nav d-flex align-items-center gap-5">
            <div 
              className="nav__menu"  
              ref={menuRef} 
              onClick={menuToggle}
            >
              <ul className="nav__list">
                {navLinks.map(item => (
                  <li key={item.display} className="nav__item">
                    <AnchorLink href={item.url}>{item.display}</AnchorLink>
                  </li>
                ))}
              </ul>
            </div>

            <div className="nav__right">
              <p className='mb-0 d-flex align-items-center gap-2'><i className="ri-phone-line"></i> +374 00 00 00 00</p>
            </div>

          </div>

          <div className="mobile__menu">
            <span>
              <i className="ri-menu-line" onClick={menuToggle}></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header;