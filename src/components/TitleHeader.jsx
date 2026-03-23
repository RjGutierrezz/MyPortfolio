const TitleHeader = ({ title, sub }) => {
  return (
    <div className="flex flex-col items-center gap-5">
      {/* changed: glass/bubble background only for the sub badge */}
      <div className="text-white-50 hero-badge title-sub-glass">
        <p>{sub}</p>
      </div>

      <div>
        <h1 className="text-white-50 font-semibold md:text-5xl text-3xl text-center">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleHeader;