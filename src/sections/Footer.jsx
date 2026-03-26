import { socialImgs } from "../constants";
import GlassSurface from '../components/HeroModels/GlassSurface.jsx';

// changed: ensure BASE_URL always works as an absolute path and joins correctly
const ASSET_BASE = import.meta.env.BASE_URL || "/";
const asset = (p) => {
  const base = ASSET_BASE.startsWith("/") ? ASSET_BASE : `/${ASSET_BASE}`;
  const normalizedBase = base.endsWith("/") ? base : `${base}/`;
  return `${normalizedBase}${String(p).replace(/^\/+/, "")}`;
};

const Footer = () => {
  return (
    <footer className="footer">
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={20}
        className="w-full max-w-[1150px] mx-auto"
        style={{ height: "auto", minHeight: 60 }}
      >
        <div className='footer-container'>
          <div className='flex flex-col justify-center items-center md:items-start'>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span
                className="icon-mask w-4 h-4 md:w-5 md:h-5"
                style={{
                  color: "#e0d7f5",
                  ["--icon-url"]: `url(${asset("images/order.png")})`,
                }}
                aria-hidden="true"
              />
              <span className="text-sm md:text-base">Resume</span>
            </a>
          </div>
          <div className='socials'>
            {socialImgs
              .filter((img) => Boolean(img.url))
              .map((img) => (
                <a
                  className='icon'
                  target='_blank'
                  rel="noopener noreferrer"
                  href={img.url}
                  key={img.url || img.name}
                >
                  <img src={img.imgPath} alt={img.name} />
                </a>
              ))}
          </div>

          <div className="flex items-center justify-center md:justify-end w-full">
            <p className="text-center md:text-right text-xs md:text-sm">
              © {new Date().getFullYear()} Rover Gutierrez. All rights reserved.
            </p>
          </div>

        </div>
      </GlassSurface>
    </footer>
  )
}

export default Footer
