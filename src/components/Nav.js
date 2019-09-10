import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import logo from 'assets/img/logo.svg';
import data from 'data/johnayeni.json';

const Nav = () => {
  const {
    header: { links },
  } = data;
  return (
    <nav className="nav">
      <div className="nav-content">
        <div className="logo">
          <img
            src={logo}
            alt="John Ayeni"
            onClick={() => scroll.scrollToTop()}
            width="50"
          />
        </div>
        <ul className="links">
          {links.map((link, index) => (
            <li key={index}>
              {link.text.startsWith('#') ? (
                <Link
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  {link.text}
                </Link>
              ) : (
                <a
                  href={link.to}
                  className="underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.text}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
