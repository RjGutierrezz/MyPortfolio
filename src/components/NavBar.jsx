import { useEffect, useState } from 'react';
import { Link } from "react-router-dom"; // added
import { navLinks } from '../constants/index.js';

// changed: ensure BASE_URL always works as an absolute path and joins correctly
const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};
const isExternal = (url) => /^https?:\/\//i.test(url);
const isRoutePath = (url) => typeof url === "string" && url.startsWith("/"); // added

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
        {/* changed: behaves like navLinks (works from /project(s) too) */}
        <a className="logo" href={asset("#hero")}>
          Rover Gutierrez
        </a>

        <nav className="desktop">
          <ul>
            {navLinks.map(({ link, name, icon }) => ( // changed: include icon
              <li key={name} className="group">
                {isExternal(link) ? (
                  <a href={link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2"> {/* changed */}
                    {icon ? (
                      <span
                        className="icon-mask size-4"
                        style={{
                          color: "currentColor",
                          ["--icon-url"]: `url(${asset(icon)})`,
                        }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                ) : isRoutePath(link) ? (
                  <Link to={link} className="inline-flex items-center gap-2"> {/* changed */}
                    {icon ? (
                      <span
                        className="icon-mask size-4"
                        style={{
                          color: "currentColor",
                          ["--icon-url"]: `url(${asset(icon)})`,
                        }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span>{name}</span>
                    <span className="underline" />
                  </Link>
                ) : (
                  <a href={link} className="inline-flex items-center gap-2"> {/* changed */}
                    {icon ? (
                      <span
                        className="icon-mask size-4"
                        style={{
                          color: "currentColor",
                          ["--icon-url"]: `url(${asset(icon)})`,
                        }}
                        aria-hidden="true"
                      />
                    ) : null}
                    <span>{name}</span>
                    <span className="underline" />
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* optional: make contact consistent too (works from /project(s)) */}
        <a href={asset("#contact")} className="contact-btn group">
          <div className="inner">
            <span>Contact me</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default NavBar;