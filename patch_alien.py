import sys

with open('src/app/page.js', 'r') as f:
    lines = f.readlines()

new_mascot = """          <div className="hero-mascot relative">
            <div className="mascot-glow absolute w-full h-full rounded-full blur-[60px] opacity-70 bg-gradient-to-tr from-[#00ff88] to-[#00f2fe] scale-150 animate-pulse"></div>
            <svg className="mascot-svg relative z-10 drop-shadow-2xl animate-float-complex" width="160" height="160" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                {/* Alien Cybernetic Gradients */}
                <linearGradient id="alien-skin" x1="0" y1="0" x2="100" y2="100">
                  <stop stopColor="#0d1b2a" />
                  <stop offset="1" stopColor="#1b263b" />
                </linearGradient>
                <linearGradient id="alien-energy" x1="0" y1="100" x2="100" y2="0">
                  <stop stopColor="#00ff88" />
                  <stop offset="1" stopColor="#00f2fe" />
                </linearGradient>
                <filter id="alien-glow" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
              </defs>

              {/* Alien Head Silhouette / Braincase */}
              <path d="M 50 15 C 20 15, 15 40, 25 65 C 30 75, 40 85, 50 90 C 60 85, 70 75, 75 65 C 85 40, 80 15, 50 15 Z" fill="url(#alien-skin)" stroke="url(#alien-energy)" strokeWidth="1.5" />
              
              {/* Central Glowing AI Eye */}
              <circle cx="50" cy="45" r="12" fill="#000" />
              <circle cx="50" cy="45" r="8" fill="url(#alien-energy)" filter="url(#alien-glow)" />
              <circle cx="50" cy="45" r="3" fill="#ffffff" />

              {/* Data Grooves / Robotic Seams */}
              <path d="M 50 15 L 50 30 M 50 60 L 50 85 M 30 35 L 40 40 M 70 35 L 60 40" stroke="url(#alien-energy)" strokeWidth="1" opacity="0.5" />

              {/* Secondary Sensor Clusters */}
              <circle cx="35" cy="65" r="4" fill="#00f2fe" filter="url(#alien-glow)" />
              <circle cx="65" cy="65" r="4" fill="#00ff88" filter="url(#alien-glow)" />

              {/* Floating Tech Orbits */}
              <path d="M 10 50 Q 50 100 90 50" fill="none" stroke="url(#alien-energy)" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6" className="animate-pulse" />
            </svg>
          </div>
"""


lines = lines[:10] + [new_mascot] + lines[50:]

with open('src/app/page.js', 'w') as f:
    f.writelines(lines)
