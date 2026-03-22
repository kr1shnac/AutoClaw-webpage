'use client';

import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [phase, setPhase] = useState(0);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const timers = [
      setTimeout(() => setPhase(1), 100),   // Bot appears + SYSTEM ONLINE
      setTimeout(() => setPhase(2), 1600),  // READY TO WORK.
      setTimeout(() => setPhase(3), 3000),  // Intro fades, bot drops
      setTimeout(() => setPhase(4), 3600),  // Impacts title, title glows, bot rests
      setTimeout(() => setPhase(5), 4600),  // Floats
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
          opacity: phase < 3 ? 1 : 0,
          pointerEvents: phase >= 3 ? 'none' : 'auto',
          transition: 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        {/* Ambient glow in background setup */}
        <div
          style={{
            position: 'absolute',
            width: '400px',
            height: '400px',
            background: 'var(--accent-gradient)',
            filter: 'blur(120px)',
            opacity: phase >= 2 ? 0.3 : 0.1,
            transition: 'opacity 1s ease',
            borderRadius: '50%',
            animation: 'pulseGlow 4s ease-in-out infinite',
            zIndex: 1,
          }}
        />

        {/* Huge Bot Appears */}
        <div
          style={{
            position: 'relative',
            zIndex: 2,
            transform:
              phase === 0
                ? 'scale(0.8) translateY(30px)'
                : phase < 3
                  ? 'scale(1.4) translateY(0)'
                  : 'scale(1) translateY(250px)', // drops down
            opacity: phase === 0 ? 0 : phase < 3 ? 1 : 0,
            transition: 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), opacity 0.5s ease',
          }}
        >
          <BotSVG size={140} idSuffix="intro" />

          {/* Waving hand */}
          {phase >= 1 && phase < 3 && (
            <div
              style={{
                position: 'absolute',
                right: '-40px',
                top: '15%',
                fontSize: '2.5rem',
                animation: 'waveHand 1s ease-in-out infinite',
                transformOrigin: '70% 70%',
              }}
            >
              👋
            </div>
          )}
        </div>
      </div>

      {/* ── ACTUAL HERO SECTION ── */}
      <section className="section text-center py-16 md:py-32 mt-12 md:mt-0 relative z-10">
        {/* Bot lands on text */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}>
          <div
            className={phase >= 5 ? 'animate-cute-float' : ''}
            style={{
              position: 'relative',
              opacity: phase >= 3 ? 1 : 0,
              transform:
                phase === 3
                  ? 'translateY(25px) scale(0.95)' // The hit down
                  : phase >= 4
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
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease 0.1s, transform 0.6s ease 0.1s',
          }}
        >
          {/* Base white text that fades away on impact */}
          <span
            style={{
              color: '#ffffff',
              opacity: phase >= 4 ? 0 : 1,
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
              opacity: phase >= 4 ? 1 : 0,
              transition: 'opacity 0.6s ease',
              zIndex: 3,
            }}
          >
            AutoClaw
          </span>

          {/* Explosion / Glow Burst at impact */}
          {(phase === 4) && (
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
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s',
          }}
        >
          A truly intelligent job application agent.
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: '1.25rem',
            color: 'var(--text-secondary)',
            maxWidth: '600px',
            margin: '0 auto 2.5rem',
            lineHeight: '1.6',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.4s, transform 0.6s ease 0.4s',
          }}
        >
          A relentless, intelligent job search copilot. <br />
          It finds jobs, tailors your resume, writes cover letters, and applies for you — autonomously, 24/7. <br /><br />
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
            India-first. Open Source. Free forever.
          </span>
        </p>

        {/* Capsule badge */}
        <div
          className="capsule-badge"
          style={{
            marginBottom: '1rem',
            opacity: phase >= 3 ? 1 : 0,
            transform: phase >= 3 ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s',
          }}
        >
          <span className="capsule-tag">COMING SOON</span>
          <span>Apply smarter. Get hired faster.</span>
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
      <rect x="15" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />
      <rect x="77" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />
      <rect x="20" y="25" width="60" height="50" rx="15" fill={`url(#bodyGrad-${idSuffix})`} stroke="#ec4899" strokeWidth="2" />
      <rect x="28" y="33" width="44" height="30" rx="6" fill={`url(#screenGrad-${idSuffix})`} stroke="#334155" strokeWidth="1" />
      <path d="M 38 45 Q 42 42 46 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />
      <path d="M 54 45 Q 58 42 62 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />
      <circle cx="35" cy="52" r="3" fill="#ec4899" opacity="0.6" />
      <circle cx="65" cy="52" r="3" fill="#ec4899" opacity="0.6" />
      <path d="M 47 52 Q 50 55 53 52" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
      <circle cx="25" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '0.5s' }} />
      <circle cx="75" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '1s' }} />
    </svg>
  );
}
