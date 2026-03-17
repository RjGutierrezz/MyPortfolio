/* eslint-disable react-hooks/exhaustive-deps */
import { useRef } from 'react';

// changed: removed all SVG filter logic — pure CSS glass only
const GlassSurface = ({
  children,
  width = 200,
  height = 80,
  borderRadius = 20,
  backgroundOpacity = 0.10,
  saturation = 1,
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);

  const containerStyles = {
    ...style,
    width: typeof width === 'number' ? `${width}px` : width,
    height: typeof height === 'number' ? `${height}px` : height,
    borderRadius: `${borderRadius}px`,
    background: `rgba(255, 255, 255, ${backgroundOpacity})`,
    backdropFilter: `blur(12px) saturate(${saturation * 1.8}) brightness(1.2)`,
    WebkitBackdropFilter: `blur(12px) saturate(${saturation * 1.8}) brightness(1.2)`,
    border: '1px solid rgba(255, 255, 255, 0.15)',
    boxShadow: `inset 0 1px 0 0 rgba(255, 255, 255, 0.2),
                inset 0 -1px 0 0 rgba(255, 255, 255, 0.1),
                0px 4px 16px rgba(17, 17, 26, 0.05),
                0px 8px 24px rgba(17, 17, 26, 0.05)`,
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden transition-opacity duration-[260ms] ease-out flex items-center ${className}`}
      style={containerStyles}
    >
      <div className="w-full h-full relative z-10">
        {children}
      </div>
    </div>
  );
};

export default GlassSurface;
