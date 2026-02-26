import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="robotic-bg">
        {/* Animated Background Nodes */}
        <div className="bg-node" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="bg-node" style={{ top: '30%', left: '80%', animationDelay: '2s' }}></div>
        <div className="bg-node" style={{ top: '60%', left: '10%', animationDelay: '4s' }}></div>
        <div className="bg-node" style={{ top: '80%', left: '85%', animationDelay: '1s' }}></div>
        <div className="bg-line" style={{ top: '20%', left: '20%', width: '150px', transform: 'rotate(45deg)', animationDelay: '0.5s' }}></div>
        <div className="bg-line" style={{ top: '70%', left: '70%', width: '200px', transform: 'rotate(-30deg)', animationDelay: '3s' }}></div>
      </div>
      <div className="star-overlay"></div>

      <main className="main-content relative">
        {/* TOP NAVIGATION / GITHUB LINK */}
        <div style={{ width: '100%', maxWidth: '1200px', padding: '2rem', display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
          <a href="https://github.com/kr1shnac/AutoClaw.git" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1.2rem', borderRadius: '999px', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', backdropFilter: 'blur(10px)' }} className="hover:bg-[rgba(255,255,255,0.1)] transition-all">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            Star on GitHub
          </a>
        </div>
        {/* HERO SECTION */}
        <section className="section" style={{ paddingTop: '8rem', paddingBottom: '6rem', textAlign: 'center' }}>

          {/* CUTE BOT MASCOT */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div className="animate-cute-float" style={{ position: 'relative' }}>
              <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '120px', height: '120px', background: 'var(--accent-gradient)', filter: 'blur(50px)', opacity: '0.4', borderRadius: '50%', zIndex: '-1' }}></div>
              <svg width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="bodyGrad" x1="0" y1="0" x2="100" y2="100">
                    <stop stopColor="#1e293b" />
                    <stop offset="1" stopColor="#0f172a" />
                  </linearGradient>
                  <linearGradient id="screenGrad" x1="0" y1="0" x2="0" y2="100">
                    <stop stopColor="#0f172a" />
                    <stop offset="1" stopColor="#020617" />
                  </linearGradient>
                </defs>
                {/* Ears/Antennas */}
                <rect x="15" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />
                <rect x="77" y="35" width="8" height="15" rx="3" fill="#cbd5e1" className="animate-ear" />
                {/* Bot Body */}
                <rect x="20" y="25" width="60" height="50" rx="15" fill="url(#bodyGrad)" stroke="#ec4899" strokeWidth="2" />
                {/* Bot Screen */}
                <rect x="28" y="33" width="44" height="30" rx="6" fill="url(#screenGrad)" stroke="#334155" strokeWidth="1" />
                {/* Cute Eyes */}
                <path d="M 38 45 Q 42 42 46 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />
                <path d="M 54 45 Q 58 42 62 45" stroke="#ec4899" strokeWidth="3" strokeLinecap="round" className="animate-blink" fill="none" />
                {/* Blushing Cheeks */}
                <circle cx="35" cy="52" r="3" fill="#ec4899" opacity="0.6" />
                <circle cx="65" cy="52" r="3" fill="#ec4899" opacity="0.6" />
                {/* Cute little mouth */}
                <path d="M 47 52 Q 50 55 53 52" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" fill="none" />
                {/* Little floating hands */}
                <circle cx="25" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '0.5s' }} />
                <circle cx="75" cy="85" r="6" fill="#8b5cf6" className="animate-cute-float" style={{ animationDelay: '1s' }} />
              </svg>
            </div>
          </div>

          <h1 className="hero-title" style={{ display: 'inline-block', fontSize: '5rem', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.03em', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.1' }}>
            AutoClaw
          </h1>

          <h2 className="hero-subtitle" style={{ fontSize: '1.75rem', fontWeight: '700', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            The AI that actually does things.
          </h2>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            A friendly and relentlessly efficient bot. <br />
            It finds, evaluates, and applies to jobs entirely on its own. <br /><br />
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', background: 'linear-gradient(90deg, rgba(236,72,153,0.15), rgba(56,189,248,0.15))', padding: '0.75rem 1.5rem', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', color: '#fff', fontSize: '1.1rem', fontWeight: '600', marginTop: '1rem', boxShadow: '0 4px 20px -5px rgba(236,72,153,0.3)' }}>
              <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '28px', height: '28px', background: '#ec4899', borderRadius: '50%', boxShadow: '0 0 10px rgba(236,72,153,0.5)' }}>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </span>
              Just chat with it like a friend, and watch it execute.
            </div>
          </p>

          <div className="capsule-badge" style={{ marginBottom: '1rem' }}>
            <span className="capsule-tag">COMING SOON</span>
            <span>Your Personal Agent</span>
          </div>
        </section>

        {/* WHY AUTOCLAW */}
        <section id="features" className="section" style={{ paddingTop: '2rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
            Why AutoClaw?
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(236,72,153,0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" /></svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>Smart Adaptation</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Traditional bots break when websites change. AutoClaw adapts automatically, ensuring you never miss an application.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>Fully Autonomous</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                No more repetitive clicking. Start the process and let AutoClaw effortlessly handle the entire workflow for you.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <div style={{ marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
              </div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>Privacy First</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Your data stays absolutely safe. Everything runs locally on your machine, so your resume is never exposed.
              </p>
            </div>

          </div>
        </section>

        {/* TELEGRAM INTEGRATION */}
        <section id="telegram" className="section" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
          <div className="telegram-card" style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(2,6,23,0.9))', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '24px', padding: '3rem', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: '#38bdf8', filter: 'blur(120px)', opacity: '0.15', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

            <div style={{ flex: '1 1 400px', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#38bdf8', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(56,189,248,0.4)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1406 2.85938C20.6719 2.625 20.1094 2.67188 19.6875 2.95312L2.6875 14.9531C2.26562 15.25 2.07812 15.7969 2.23438 16.2969C2.40625 16.8125 2.85938 17.1562 3.40625 17.2031L8.53125 17.5938L11.5312 21.0938C11.8125 21.4219 12.2344 21.5781 12.6562 21.5469C13.0781 21.5312 13.4688 21.2969 13.6719 20.9219L15.3906 17.9062L19.2344 19.3438C19.5625 19.4688 19.9219 19.4375 20.2188 19.25C20.5156 19.0625 20.7188 18.75 20.7812 18.4062L21.7812 3.90625C21.8281 3.46875 21.5781 3.0625 21.1406 2.85938ZM18.2344 5.92188L8.6875 12.6562L5.85938 12.4375L18.2344 5.92188ZM12.7812 18.1562L10.7031 15.7344L17.7656 8.53125L12.7812 18.1562Z" fill="white" />
                  </svg>
                </div>
                <h2 className="telegram-title" style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                  Works with <span style={{ color: '#38bdf8' }}>Telegram</span>
                </h2>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '1.25rem', fontWeight: '600', lineHeight: '1.4' }}>
                Chat with your bot. It understands. It executes.
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '480px' }}>
                No complex dashboards required. Just message your AutoClaw bot: <span style={{ color: '#e2e8f0', fontWeight: '500' }}>&quot;Find software engineer roles in YC&quot;</span> and it autonomously begins searching, tailoring, and applying.
              </p>

            </div>

            {/* Chat UI Mockup */}
            <div style={{ flex: '1 1 300px', zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '340px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.4)' }}>
                {/* Header */}
                <div style={{ background: '#1e293b', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.875rem', borderBottom: '1px solid #334155' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--accent-gradient)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="10" rx="2" /><circle cx="12" cy="5" r="2" /><path d="M12 7v4" /><line x1="8" y1="16" x2="8" y2="16" /><line x1="16" y1="16" x2="16" y2="16" /></svg>
                  </div>
                  <div>
                    <div style={{ color: '#fff', fontWeight: '600', fontSize: '0.95rem' }}>AutoClaw Bot</div>
                    <div style={{ color: '#38bdf8', fontSize: '0.8rem', fontWeight: '500' }}>bot</div>
                  </div>
                </div>
                {/* Body */}
                <div style={{ padding: '1.25rem', display: 'flex', flexDirection: 'column', gap: '1rem', background: '#020617', height: '240px' }}>
                  {/* User Bubble */}
                  <div style={{ alignSelf: 'flex-end', background: '#38bdf8', color: '#0f172a', padding: '0.75rem 1rem', borderRadius: '16px 16px 4px 16px', maxWidth: '85%', fontSize: '0.9rem', fontWeight: '500', lineHeight: '1.4' }}>
                    Find and apply to frontend roles at YC startups.
                  </div>
                  {/* Bot Bubble */}
                  <div style={{ alignSelf: 'flex-start', background: '#1e293b', color: '#e2e8f0', padding: '0.875rem 1rem', borderRadius: '16px 16px 16px 4px', maxWidth: '85%', fontSize: '0.9rem', border: '1px solid #334155', lineHeight: '1.5' }}>
                    <span style={{ fontWeight: '600', color: '#fff' }}>Understood! 🚀</span><br /><br />
                    Starting autonomous sequence...<br />
                    <span style={{ color: '#38bdf8', display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                      Found 12 roles.
                    </span>
                    <span style={{ color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
                      Tailoring your resume...
                    </span>
                    <span style={{ color: '#e2e8f0', display: 'flex', alignItems: 'center', gap: '6px', marginTop: '4px' }}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                      Applying now. I&apos;ll notify you soon.
                    </span>
                  </div>
                </div>
                {/* Input Area */}
                <div style={{ padding: '0.75rem 1rem', background: '#0f172a', borderTop: '1px solid #1e293b', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <div style={{ flex: 1, height: '36px', background: '#1e293b', borderRadius: '18px', display: 'flex', alignItems: 'center', padding: '0 1rem' }}>
                    <span style={{ color: '#64748b', fontSize: '0.9rem' }}>Message...</span>
                  </div>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: '#38bdf8', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer', transition: 'transform 0.2s' }} className="hover:scale-[1.1]">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M22 2L11 13" stroke="#0f172a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" fill="#0f172a" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>

        {/* TARGETS */}
        <section id="targets" className="section" style={{ paddingTop: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
            Supported Platforms
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {[
              { name: 'Lever', color: '#38bdf8', symbol: 'L', url: 'https://lever.co' },
              { name: 'Greenhouse', color: '#10b981', symbol: 'G', url: 'https://greenhouse.io' },
              { name: 'Y Combinator', color: '#f97316', symbol: 'Y', url: 'https://ycombinator.com' },
              { name: 'LinkedIn', color: '#0ea5e9', symbol: 'in', url: 'https://linkedin.com' }
            ].map((platform, i) => (
              <Link key={platform.name} href={platform.url} target="_blank" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '16px', padding: '2rem 1.5rem', textAlign: 'center', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', position: 'relative', overflow: 'hidden' }} className="hover:-translate-y-2 hover:border-[rgba(255,255,255,0.2)] hover:shadow-2xl hover:shadow-[#0ea5e9]/20 group">
                <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: `linear-gradient(135deg, ${platform.color} 0%, #0f172a 120%)`, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: `0 4px 20px -5px ${platform.color}, inset 0 1px 1px rgba(255,255,255,0.4)`, zIndex: 1 }}>
                  <span style={{ color: '#fff', fontSize: platform.symbol === 'in' ? '1.5rem' : '1.75rem', fontWeight: '800', fontFamily: platform.symbol === 'in' ? 'sans-serif' : 'serif', letterSpacing: platform.symbol === 'in' ? '-1px' : '0' }}>{platform.symbol}</span>
                </div>
                <h3 style={{ color: '#f8fafc', fontSize: '1.25rem', fontWeight: '700', margin: 0, zIndex: 1 }}>{platform.name}</h3>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* COMPACT FOOTER */}
      <footer style={{ background: '#020617', padding: '4rem 2rem 3rem', marginTop: '4rem', borderTop: '2px solid rgba(236,72,153,0.3)', textAlign: 'center' }}>
        <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Built with
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 6px' }}><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
          and slight desperation by
        </p>
        <h2 className="footer-title" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem', fontWeight: '900', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          <Link href="https://krishnac.vercel.app/" target="_blank" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">Krishna</Link>
          <span className="footer-ampersand" style={{ color: 'var(--text-secondary)', margin: '0 0.5rem', fontSize: '2.5rem' }}>&amp;</span>
          <Link href="https://nuhan04.vercel.app/" target="_blank" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">Nuhan</Link>
        </h2>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          We are currently building AutoClaw because applying to jobs manually is soul-crushing. The full platform is expected to launch in the next two to three months. In the meantime, it&apos;s completely open-source, so feel free to check out our progress on GitHub, drop us an email if you want to collaborate, or <span style={{ color: '#fff', fontWeight: '700', borderBottom: '2px solid #ec4899' }}>hire us.</span>
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="https://github.com/kr1shnac/AutoClaw.git" target="_blank" style={{ background: 'rgba(236,72,153,0.15)', color: '#fff', border: '1px solid rgba(236,72,153,0.5)', padding: '0.8rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover:bg-[#ec4899]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            Contribute on GitHub
          </a>
          <a href="mailto:krishnacgowda10@gmail.com" style={{ background: 'rgba(139,92,246,0.15)', color: '#fff', border: '1px solid rgba(139,92,246,0.5)', padding: '0.8rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover:bg-[#8b5cf6]">
            <span style={{ display: 'flex', alignItems: 'center' }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" /></svg>
            </span>
            Drop us an Email
          </a>
        </div>
      </footer>
    </>
  );
}
