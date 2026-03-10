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
        borderRadius={40}
        className="w-full max-w-[1150px] mx-auto"
        style={{ height: "auto", minHeight: 60 }}
      >
        <div className='footer-container'>
          <div className='flex flex-col justify-center'>
            <a
              href={`${import.meta.env.BASE_URL}resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              <span
                className="icon-mask w-5 h-5"
                style={{
                  color: "#ffffff",
                  ["--icon-url"]: `url(${asset("images/order.png")})`,
                }}
                aria-hidden="true"
              />
              <span>Resume</span>
            </a>
          </div>
          <div className='socials'>
            {socialImgs
              .filter((img) => Boolean(img.url)) // don't render items missing a url
              .map((img) => (
                <a
                  className='icon'
                  target='_blank'
                  rel="noopener noreferrer"
                  href={img.url}
                  key={img.url || img.name} // stable + unique
                >
                  <img src={img.imgPath} alt={img.name} />
                </a>
              ))}
          </div>

          <div className="flex items-center justify-center md:justify-end w-full">
            <p className="text-center md:text-right">
              © {new Date().getFullYear()} Rover Gutierrez. All rights reserved.
            </p>
          </div>

        </div>
      </GlassSurface>
    </footer>
  )
}

export default Footer
