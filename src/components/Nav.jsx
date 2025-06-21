import React, { useEffect, useState } from 'react';
import NavLink from './NavLink';
import Image from 'next/image';


export default function Nav() {
  const [activeLink, setActiveLink] = useState('home');

  useEffect(() => {
    const sectionSelectors = {
      home: '#header',
      services: '#company-services',
      about: '#about',
      schedule: '#schedule-form',
      contact: '#contact',
    };

    const getSectionOffsets = () => (
      Object.entries(sectionSelectors).map(([name, selector]) => {
        const el = document.querySelector(selector);
        return el ? { name, top: el.getBoundingClientRect().top + window.scrollY } : null;
      }).filter(Boolean)
    );

    let sections = getSectionOffsets();

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      const pageBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 5;
    
      let current = sections[0]?.name;
    
      for (let i = 0; i < sections.length; i++) {
        const thisSection = sections[i];
        const nextSection = sections[i + 1];
        if (!nextSection || scrollY < nextSection.top) {
          current = thisSection.name;
          break;
        }
      }

      if (pageBottom) {
        current = 'contact';
      }
      if (current !== activeLink) {
        setActiveLink(current);
      }
    };

    const handleResizeOrLoad = () => {
      sections = getSectionOffsets();
      handleScroll();
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResizeOrLoad);
    window.addEventListener('load', handleResizeOrLoad);
    handleResizeOrLoad();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResizeOrLoad);
      window.removeEventListener('load', handleResizeOrLoad);
    };
  }, [activeLink]);

  const handleNavigate = (selector) => {
    document.querySelector(selector)?.scrollIntoView({ block: 'center' });
  };

  const toggleNavList = () => {
    const navList = document.querySelector('.nav__links-container');
    navList.classList.toggle('nav__links-container--open')
  };


  return (
    <nav className="nav">
      <NavLink className="nav-title" active={activeLink === 'home'} onClick={() => handleNavigate('#header')}><span className="nav-title__logo">SH</span> Compliance & Service Consulting</NavLink>
      <button className="nav__toggle" onClick={toggleNavList}>
        <Image src="/images/hamburger_btn.svg" alt="Nav hamburger button" draggable={false} height={26} width={28} />
      </button>
      <ul className="nav__links-container">
        <li><NavLink active={activeLink === 'home'} onClick={() => handleNavigate('#header')}>Home</NavLink></li>
        <li><NavLink active={activeLink === 'services'} onClick={() => handleNavigate('#company-services')}>Services</NavLink></li>
        <li><NavLink active={activeLink === 'about'} onClick={() => handleNavigate('#about')}>About</NavLink></li>
        <li><NavLink active={activeLink === 'schedule'} onClick={() => handleNavigate('#schedule-form')}>Schedule</NavLink></li>
        <li><NavLink active={activeLink === 'contact'} onClick={() => handleNavigate('#contact')}>Contact</NavLink></li>
      </ul>
    </nav>
  );
}