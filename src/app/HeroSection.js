'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timers = [
      setTimeout(() => setPhase(1), 300),   // Bot appears and waves Hi
      setTimeout(() => setPhase(2), 2400),  // Intro fades, bot drops
      setTimeout(() => setPhase(3), 3000),  // Bot hits text, text glows
      setTimeout(() => setPhase(4), 4000),  // Bot floats back gently
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  if (!mounted) {
    return (
      <section className="section text-center py-16 md:py-32 mt-12 md:mt-0">
        <div style={{ height: '400px' }} />
      </section>
    );
  }

  return (
    <>
      {/* ── CINEMATIC FULLSCREEN INTRO ── */}
      <div
        className="intro-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0b0f19',
          opacity: phase < 2 ? 1 : 0,
          pointerEvents: phase >= 2 ? 'none' : 'auto',
          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Ambient gentle pink glow 💖 */}
        <div
          style={{
            position: 'absolute',
            width: '350px',
            height: '350px',
            background: 'var(--accent-gradient)',
            filter: 'blur(100px)',
            opacity: phase >= 1 ? 0.4 : 0.1,
            transition: 'opacity 1s ease',
            borderRadius: '50%',
            animation: 'pulseGlow 3s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Cute Smiling Bot Appears */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            transform:
              phase === 0
                ? 'scale(0.8) translateY(30px) rotate(-5deg)'
                : phase === 1
                  ? 'scale(1.4) translateY(0) rotate(5deg)'
                  : 'scale(0.8) translateY(250px) rotate(0deg)', // drops down
            opacity: phase === 0 ? 0 : phase < 2 ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease',
          }}
        >
          <BotSVG size={140} idSuffix="intro" />

          {/* Simple Waving Hand next to Bot */}
          <div
            style={{
              position: 'absolute',
              right: '-60px',
              top: '5%',
              fontSize: '4rem',
              animation: 'waveHand 1.2s ease-in-out infinite',
              transformOrigin: '70% 70%',
              opacity: phase === 1 ? 1 : 0,
              transform: phase === 1 ? 'scale(1)' : 'scale(0.5)',
              transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)',
              filter: 'drop-shadow(0 0 10px rgba(236,72,153,0.3))',
            }}
          >
            👋
          </div>
        </div>
      </div>

      {/* ── ACTUAL HERO SECTION ── */}
      <section className="section text-center py-16 md:py-32 mt-12 md:mt-0 relative z-10">
        {/* Bot lands on text */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div
            className={phase >= 4 ? 'animate-cute-float' : ''}
            style={{
              position: 'relative',
              opacity: phase >= 2 ? 1 : 0,
              transform:
                phase === 2
                  ? 'translateY(25px) scale(0.95)' // The hit down
                  : phase >= 3
                    ? 'translateY(0) scale(1)' // Rests
                    : 'translateY(-150px) scale(1.2)', // Matches drop start
              transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
          >
            <BotSVG size={120} idSuffix="hero" />
          </div>
        </div>

        {/* AutoClaw title starts white, glows when hit */}
        <h1
          className="hero-title"
          style={{
            display: 'inline-block',
            fontSize: '5rem',
            fontWeight: '900',
            marginBottom: '0.5rem',
            letterSpacing: '-0.03em',
            lineHeight: '1.1',
            position: 'relative',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          {/* Base white text that fades away on impact */}
          <span
            style={{
              color: '#ffffff',
              opacity: phase >= 3 ? 0 : 1,
              transition: 'opacity 0.6s ease',
              position: 'relative',
              zIndex: 2,
            }}
          >
            AutoClaw
          </span>

          {/* Glowing colorful text that fades in on impact */}
          <span
            style={{
              position: 'absolute',
              left: 0,
              top: 0,
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              opacity: phase >= 3 ? 1 : 0,
              transition: 'opacity 0.6s ease',
              zIndex: 3,
            }}
          >
            AutoClaw
          </span>

          {/* Explosion / Glow Burst at impact */}
          {(phase === 3) && (
            <div
              style={{
                position: 'absolute',
                top: '0%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '150px',
                height: '150px',
                background: 'var(--accent-gradient)',
                borderRadius: '50%',
                filter: 'blur(50px)',
                opacity: 0.6,
                pointerEvents: 'none',
                zIndex: 1,
                animation: 'glowBurst 1s ease-out forwards',
              }}
            />
          )}
        </h1>

        {/* Subtitle */}
        <h2
          className="hero-subtitle"
          style={{
            fontSize: '1.75rem',
            fontWeight: '700',
            color: '#fff',
            marginBottom: '1.5rem',
            letterSpacing: '-0.01em',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}
        >
          The AI that actually does things.
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.6',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
          }}
        >
          A friendly and relentlessly efficient bot. <br />
          It finds, evaluates, and applies to jobs entirely on its own. <br /><br />
          <span
            style={{
              display: 'block',
              marginTop: '1.5rem',
              fontSize: '1.25rem',
              fontWeight: '400',
              background: 'var(--accent-gradient)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.4',
            }}
          >
            Just chat with it like a friend, and watch it execute.
          </span>
        </p>

        {/* Capsule badge */}
        <div
          className="capsule-badge"
          style={{
            marginBottom: '1rem',
            opacity: phase >= 2 ? 1 : 0,
            transform: phase >= 2 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <span className="capsule-tag">COMING SOON</span>
          <span>Your Personal Agent</span>
        </div>
      </section>
    </>
  );
}

function BotSVG({ size = 140, idSuffix = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id={`bodyGrad-${idSuffix}`} x1="0" y1="0" x2="100" y2="100">
          <stop stopColor="#1e293b" />
          <stop offset="1" stopColor="#0f172a" />
        </linearGradient>
        <linearGradient id={`screenGrad-${idSuffix}`} x1="0" y1="0" x2="0" y2="100">
          <stop stopColor="#0f172a" />
          <stop offset="1" stopColor="#020617" />
        </linearGradient>
      </defs>

      {/* Ears */}
      <rect x="15" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />
      <rect x="77" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />

      {/* Body & Screen */}
      <rect x="20" y="25" width="60" height="50" rx="15" fill={`url(#bodyGrad-${idSuffix})`} stroke="#ec4899" strokeWidth="2" />
      <rect x="28" y="33" width="44" height="30" rx="6" fill={`url(#screenGrad-${idSuffix})`} stroke="#334155" strokeWidth="1" />

      {/* Happy Arched Eyes */}
      <path d="M 38 45 Q 42 41 46 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />
      <path d="M 54 45 Q 58 41 62 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />

      {/* Cute Pink Blushing Cheeks 💖 */}
      <ellipse cx="32" cy="51" rx="4" ry="2.5" fill="#ec4899" opacity="0.8" />
      <ellipse cx="68" cy="51" rx="4" ry="2.5" fill="#ec4899" opacity="0.8" />

      {/* Extremely Cute Wide Smile */}
      <path d="M 42 54 Q 50 63 58 54" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" fill="none" />

      {/* Floating Orbs (Thrusters/Wheels) */}
      <circle cx="25" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '0.5s' }} />
      <circle cx="75" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '1s' }} />
    </svg>
  );
}
