import React, { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(true);
  const [homeActive, setHomeActive] = useState(true);
  const [servicesActive, setServicesActive] = useState(false);
  const [aboutActive, setAboutActive] = useState(false);
  const [scheduleActive, setScheduleActive] = useState(false);
  const [contactActive, setContactActive] = useState(false);

  const handleSelectHome = () => {
    window.scrollTo(0, 0);
  }

  const handleSelectServices = () => {
    window.scrollTo(0, 470);
  }

  const handleSelectAbout = () => {
    window.scrollTo(0, 1150);
  }

  const handleSelectSchedule = () => {
    window.scrollTo(0, 1500);
  }

  const handleSelectContact = () => {
    window.scrollTo(0, 3000);
  }

  if (typeof window !== "undefined") window.addEventListener('scroll', () => {
    let scroll = window.scrollY;
    
    // Switches which nav element is active
    if (scroll <= 400) {
      setHomeActive(true);
      setServicesActive(false);
      setAboutActive(false);
      setScheduleActive(false);
      setContactActive(false);
    } else if (scroll > 400 && scroll < 900) {
      setHomeActive(false);
      setServicesActive(true);
      setAboutActive(false);
      setScheduleActive(false);
      setContactActive(false);
    } else if (scroll > 900 && scroll < 1400) {
      setHomeActive(false);
      setServicesActive(false);
      setAboutActive(true);
      setScheduleActive(false);
      setContactActive(false);
    } else if (scroll > 1400 && scroll < 1700) {
      setHomeActive(false);
      setServicesActive(false);
      setAboutActive(false);
      setScheduleActive(true);
      setContactActive(false);
    } else if (scroll > 1700) {
      setHomeActive(false);
      setServicesActive(false);
      setAboutActive(false);
      setScheduleActive(false);
      setContactActive(true);
    }
  });

  const toggleNavList = () => {
    const navList = document.querySelector('.nav__links-container');
    setOpen(!open);
    if (open) {
      navList.classList.add('nav__links-container--open');
    } else {
      navList.classList.remove('nav__links-container--open');
    }
  };

  return (
    <nav className="nav">
      <a href="javascript:;" className="nav-title" onClick={handleSelectHome} draggable={false}><span className="nav-title__logo">SH</span> Compliance & Service Consulting</a>
      <button className="nav__toggle" onClick={toggleNavList}>
        <img src="images/hamburger_btn.svg" alt="Nav hamburger button" draggable={false} />
      </button>
      <ul className="nav__links-container">
        <li>
          {homeActive ? 
            <a href="javascript:;" className="nav__link nav__link--active" onClick={handleSelectHome} draggable={false}>Home</a> 
            : 
            <a href="javascript:;" className="nav__link" onClick={handleSelectHome} draggable={false}>Home</a>
          }
        </li>
        <li>
          {servicesActive ? 
            <a href="javascript:;" className="nav__link nav__link--active" draggable={false}>Services</a> 
            : 
            <a href="javascript:;" className="nav__link" onClick={handleSelectServices} draggable={false}>Services</a>
          }
        </li>
        <li>
          {aboutActive ?
            <a href="javascript:;" className="nav__link nav__link--active" onClick={handleSelectAbout} draggable={false}>About</a>
            :
            <a href="javascript:;" className="nav__link" onClick={handleSelectAbout} draggable={false}>About</a>
          }
        </li>
        <li>
          {scheduleActive ?
            <a href="javascript:;" className="nav__link nav__link--active" onClick={handleSelectSchedule} draggable={false}>Schedule</a>
            :
            <a href="javascript:;" className="nav__link" onClick={handleSelectSchedule} draggable={false}>Schedule</a>
          }
        </li>
        <li>
          {contactActive ?
            <a href="javascript:;" className="nav__link nav__link--active" onClick={handleSelectContact} draggable={false}>Contact</a>
            :
            <a href="javascript:;" className="nav__link" onClick={handleSelectContact} draggable={false}>Contact</a>
          }
        </li>
      </ul>
    </nav>
  );
}
