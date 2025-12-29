import { useEffect, useState } from 'react';
import {navLinks} from '../constants/index.js'

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    handleScroll(); // init on mount
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const syncTimelineBgVars = () => {
      const el = document.body || document.documentElement;
      const cs = window.getComputedStyle(el);

      const bgColor = cs.backgroundColor || 'transparent';
      const bgImage = cs.backgroundImage || 'none';

      document.documentElement.style.setProperty('--timeline-bg-color', bgColor);
      document.documentElement.style.setProperty('--timeline-bg-image', bgImage);
    };

    syncTimelineBgVars();

    window.addEventListener('resize', syncTimelineBgVars, { passive: true });
    window.addEventListener('scroll', syncTimelineBgVars, { passive: true });

    const mo = new MutationObserver(syncTimelineBgVars);
    mo.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'style'] });
    if (document.body) mo.observe(document.body, { attributes: true, attributeFilter: ['class', 'style'] });

    return () => {
      window.removeEventListener('resize', syncTimelineBgVars);
      window.removeEventListener('scroll', syncTimelineBgVars);
      mo.disconnect();
    };
  }, []);

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
      <div className="inner">
        <a className="logo" href="#hero">
          Rover Gutierrez
        </a>
        
        <nav className="desktop">
          <ul>
            {navLinks.map(({link, name}) => (
              <li key={name} className="group">
                <a href={link}>
                  <span>{name}</span>
                  <span className="underline"/>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a href="#contact" className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  )
}

export default NavBar