import sys

with open('src/app/page.js', 'r') as f:
    lines = f.readlines()

new_mascot = """          <div className="hero-mascot relative">
            <div className="mascot-glow absolute w-full h-full rounded-full blur-[60px] opacity-70 bg-gradient-to-tr from-[#00f2fe] to-[#17eda1] scale-150 animate-pulse"></div>
            <svg className="mascot-svg relative z-10 drop-shadow-2xl animate-spin-slow" width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="q-grad-1" x1="0" y1="0" x2="100" y2="100">
                  <stop stopColor="#00f2fe" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#4facfe" stopOpacity="0.8" />
                </linearGradient>
                <linearGradient id="q-grad-2" x1="100" y1="0" x2="0" y2="100">
                  <stop stopColor="#17eda1" stopOpacity="0.9" />
                  <stop offset="1" stopColor="#00f2fe" stopOpacity="0.8" />
                </linearGradient>
                <filter id="q-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Rotating Diamond Frames (Orbiting) */}
              <g className="animate-spin-reverse" style={{ transformOrigin: '50px 50px' }}>
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="url(#q-grad-1)" strokeWidth="1.5" transform="rotate(0 50 50)" filter="url(#q-glow)" opacity="0.6"/>
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="url(#q-grad-2)" strokeWidth="1.5" transform="rotate(45 50 50)" filter="url(#q-glow)" opacity="0.6"/>
              </g>

              {/* Core Geometry (Screen Blend Mode for super bright intersections) */}
              <g style={{ mixBlendMode: 'screen' }}>
                <path d="M50 10 L65 35 L90 50 L65 65 L50 90 L35 65 L10 50 L35 35 Z" fill="url(#q-grad-1)" filter="url(#q-glow)" />
                <path d="M50 25 L80 50 L50 75 L20 50 Z" fill="url(#q-grad-2)" filter="url(#q-glow)" transform="rotate(45 50 50)" />
              </g>

              {/* Inner Radiant Star */}
              <circle cx="50" cy="50" r="8" fill="#ffffff" filter="url(#q-glow)" />
              <path d="M50 0 L52 48 L100 50 L52 52 L50 100 L48 52 L0 50 L48 48 Z" fill="#ffffff" opacity="0.8" />

              {/* Energy Sparks */}
              <circle cx="50" cy="50" r="3" fill="#000" />
            </svg>
          </div>
"""

# Replace lines 11 to 47 (indices 10 to 47 exclusive)
lines = lines[:10] + [new_mascot] + lines[47:]

with open('src/app/page.js', 'w') as f:
    f.writelines(lines)
