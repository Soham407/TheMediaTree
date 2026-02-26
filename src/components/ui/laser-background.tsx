import React, { useEffect, useRef } from 'react';

const LaserBackground: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-hidden z-0">
            {/* Main Laser Beam Moving Vertical */}
            <div className="absolute w-full h-[2px] bg-linear-to-r from-transparent via-yellow-400 to-transparent blur-xs opacity-40 animate-laser-move-y"></div>
            <div className="absolute w-full h-px bg-white opacity-60 animate-laser-move-y shadow-[0_0_15px_rgba(250,204,21,0.8)]"></div>

            {/* Subtle Grid System */}
            <div className="absolute inset-0 opacity-10" 
                 style={{ 
                     backgroundImage: `linear-gradient(#facc15 1px, transparent 1px), linear-gradient(90deg, #facc15 1px, transparent 1px)`,
                     backgroundSize: '40px 40px'
                 }}>
            </div>

            {/* Random Vertical Laser Strikes */}
            <div className="absolute top-0 left-1/4 w-px h-full bg-yellow-400/20 blur-[2px] animate-pulse"></div>
            <div className="absolute top-0 left-3/4 w-px h-full bg-yellow-400/10 blur-[1px] animate-pulse delay-700"></div>

            <style dangerouslySetInnerHTML={{ __html: `
                @keyframes laser-move-y {
                    0% { top: -10%; }
                    100% { top: 110%; }
                }
                .animate-laser-move-y {
                    animation: laser-move-y 4s linear infinite;
                }
            `}} />
        </div>
    );
};

export default LaserBackground;
