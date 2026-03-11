import { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { navLinks } from '../constants/index.js';
import GlassSurface from './HeroModels/GlassSurface.jsx';

const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};
const isExternal = (url) => /^https?:\/\//i.test(url);
const isRoutePath = (url) => typeof url === "string" && url.startsWith("/");

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  // close menu on route change
  useEffect(() => { setMenuOpen(false); }, [location]);

  // close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMenuOpen(false); };
    window.addEventListener('resize', onResize, { passive: true });
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ...existing code for syncTimelineBgVars useEffect...
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

  const renderLink = ({ link, name, icon }, isMobile = false) => {
    const baseClass = isMobile
      ? "inline-flex items-center gap-3 text-lg font-semibold text-white-50 py-3"
      : "inline-flex items-center gap-2";

    const iconEl = icon ? (
      <span
        className="icon-mask size-4"
        style={{ color: "currentColor", ["--icon-url"]: `url(${asset(icon)})` }}
        aria-hidden="true"
      />
    ) : null;

    if (isExternal(link)) {
      return (
        <a href={link} target="_blank" rel="noopener noreferrer" className={baseClass}
          onClick={() => isMobile && setMenuOpen(false)}>
          {iconEl}<span>{name}</span>{!isMobile && <span className="underline" />}
        </a>
      );
    }
    if (isRoutePath(link)) {
      return (
        <Link to={link} className={baseClass} onClick={() => isMobile && setMenuOpen(false)}>
          {iconEl}<span>{name}</span>{!isMobile && <span className="underline" />}
        </Link>
      );
    }
    return (
      <a href={link} className={baseClass} onClick={() => isMobile && setMenuOpen(false)}>
        {iconEl}<span>{name}</span>{!isMobile && <span className="underline" />}
      </a>
    );
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`}>
        <GlassSurface
          width="100%"
          height="auto"
          borderRadius={40}
          className="w-full max-w-[1280px] mx-auto"
          style={{ height: "auto", minHeight: scrolled ? 72 : 78 }}
        >
          <div className="inner">
            <a className="logo" href={asset("#hero")}>
              Rover Gutierrez
            </a>

            <nav className="desktop">
              <ul>
                {navLinks.map((item) => (
                  <li key={item.name} className="group">
                    {renderLink(item)}
                  </li>
                ))}
              </ul>
            </nav>

            {/* mobile hamburger */}
            <button
              className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 z-[110]"
              onClick={() => setMenuOpen((v) => !v)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
            </button>

            <a href={asset("#contact")} className="contact-btn group hidden lg:flex">
              <div className="contact-pill">
                <span>Contact me</span>
              </div>
            </a>
          </div>
        </GlassSurface>
      </header>

      {/* mobile drawer overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-black/60 backdrop-blur-sm lg:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* mobile drawer */}
      <nav
        className={`fixed top-0 right-0 z-[100] h-full w-72 max-w-[85vw] bg-[#071a2e]/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-300 ease-in-out lg:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col pt-24 px-8 gap-2">
          {navLinks.map((item) => (
            <div key={item.name}>{renderLink(item, true)}</div>
          ))}
          <a
            href={asset("#contact")}
            className="mt-6 px-5 py-3 rounded-full bg-[#f2e9e4] text-black font-semibold text-center"
            onClick={() => setMenuOpen(false)}
          >
            Contact me
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;