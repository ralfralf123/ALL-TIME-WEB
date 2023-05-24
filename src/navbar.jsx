import React from 'react';

const handleNavClick = (id) => {
  const element = document.getElementById(id);
  const yOffset = -80; // adjust this value to account for fixed header height
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  // remove scroll class from any previously scrolled-to elements
  const currentActive = document.querySelector('.menu-item.active');
  if (currentActive) {
    currentActive.classList.remove('active');
    const currentTarget = document.getElementById(currentActive.dataset.target);
    if (currentTarget) {
      currentTarget.classList.remove('scroll');
    }
  }

  // scroll to target element and add scroll class
  window.scrollTo({ top: y, behavior: 'smooth' });
  element.classList.add('scroll');
  e.currentTarget.classList.add('active');
};


const Navbar = () => {
  return (
    <div className="header">
      <img src="elements/Asset 1.png" alt="logo" />
      <nav>
        <ul className="menu-container">
        <li className="menu-item active" data-target="home" onClick={() => handleNavClick('home')}>Home</li>
        <li className="menu-item" data-target="about" onClick={() => handleNavClick('about')}>About Us</li>
        <li className="menu-item" data-target="services" onClick={() => handleNavClick('services')}>Services</li>
        <li className="menu-item" data-target="contact" onClick={() => handleNavClick('contact')}>Contact Us</li>
        </ul>
      </nav>
      <input type="text" className="search-bar" />
    </div>
  );
};

export default Navbar;
