import GlassSurface from './HeroModels/GlassSurface.jsx';

const ASSET_BASE = import.meta.env.BASE_URL;
const asset = (p) => `${ASSET_BASE}${String(p).replace(/^\/+/, "")}`;

// changed: add `toId` prop (defaults to "counter" for backwards compatibility)
const Button = ({ text, className, id, toId = "counter" }) => {
  return (
    <a
      onClick={(e) => {
        e.preventDefault();

        // changed: scroll to configurable target
        const target = document.getElementById(toId);
        if (target && id) {
          const offset = window.innerHeight * 0.15;
          const top = target.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      }}
      className={`${className ?? ""} cta-wrapper`}
    >
      <GlassSurface
        width="100%"
        height="auto"
        borderRadius={40}
        className="w-full"
        style={{ height: "auto", minHeight: 0 }}
      >
        <div className="cta-button group">
          <div className="bg-circle" />
          <p className="text">{text}</p>
          <div className="arrow-wrapper">
            <img src={asset("images/arrow-down.svg")} alt="arrow" />
          </div>
        </div>
      </GlassSurface>
    </a>
  );
};

export default Button;