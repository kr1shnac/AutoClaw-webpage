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
          <a href="https://github.com/krishna-cx" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1.2rem', borderRadius: '999px', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', backdropFilter: 'blur(10px)' }} className="hover:bg-[rgba(255,255,255,0.1)] transition-all">
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

          <h1 style={{ display: 'inline-block', fontSize: '5rem', fontWeight: '900', marginBottom: '0.5rem', letterSpacing: '-0.03em', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.1' }}>
            AutoClaw
          </h1>

          <h2 style={{ fontSize: '1.75rem', fontWeight: '700', color: '#fff', marginBottom: '1.5rem', letterSpacing: '-0.01em' }}>
            The AI that actually does things.
          </h2>

          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
            A friendly and relentlessly efficient bot. <br />
            It finds, evaluates, and applies to jobs entirely on its own.
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
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>👁️</div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>Smart Adaptation</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Traditional bots break when websites change. AutoClaw adapts automatically, ensuring you never miss an application.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(139,92,246,0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>⚡</div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>Fully Autonomous</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                No more repetitive clicking. Start the process and let AutoClaw effortlessly handle the entire workflow for you.
              </p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(59,130,246,0.3)', borderRadius: '16px', padding: '2.5rem', textAlign: 'center', transition: 'transform 0.3s' }} className="hover:scale-[1.02]">
              <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🔒</div>
              <h3 style={{ fontSize: '1.3rem', color: '#fff', marginBottom: '1rem', fontWeight: '700' }}>Privacy First</h3>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6' }}>
                Your data stays absolutely safe. Everything runs locally on your machine, so your resume is never exposed.
              </p>
            </div>

          </div>
        </section>

        {/* TELEGRAM INTEGRATION */}
        <section id="telegram" className="section" style={{ paddingTop: '5rem', paddingBottom: '2rem' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(15,23,42,0.8), rgba(2,6,23,0.9))', border: '1px solid rgba(56,189,248,0.3)', borderRadius: '24px', padding: '3rem', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '3rem', position: 'relative', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
            {/* Background Glow */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '300px', height: '300px', background: '#38bdf8', filter: 'blur(120px)', opacity: '0.15', borderRadius: '50%', zIndex: 0, pointerEvents: 'none' }}></div>

            <div style={{ flex: '1 1 400px', zIndex: 1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }}>
                <div style={{ background: '#38bdf8', width: '48px', height: '48px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: '0 0 20px rgba(56,189,248,0.4)' }}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.1406 2.85938C20.6719 2.625 20.1094 2.67188 19.6875 2.95312L2.6875 14.9531C2.26562 15.25 2.07812 15.7969 2.23438 16.2969C2.40625 16.8125 2.85938 17.1562 3.40625 17.2031L8.53125 17.5938L11.5312 21.0938C11.8125 21.4219 12.2344 21.5781 12.6562 21.5469C13.0781 21.5312 13.4688 21.2969 13.6719 20.9219L15.3906 17.9062L19.2344 19.3438C19.5625 19.4688 19.9219 19.4375 20.2188 19.25C20.5156 19.0625 20.7188 18.75 20.7812 18.4062L21.7812 3.90625C21.8281 3.46875 21.5781 3.0625 21.1406 2.85938ZM18.2344 5.92188L8.6875 12.6562L5.85938 12.4375L18.2344 5.92188ZM12.7812 18.1562L10.7031 15.7344L17.7656 8.53125L12.7812 18.1562Z" fill="white" />
                  </svg>
                </div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-0.02em' }}>
                  Works with <span style={{ color: '#38bdf8' }}>Telegram</span>
                </h2>
              </div>

              <h3 style={{ fontSize: '1.35rem', color: '#f8fafc', marginBottom: '1.25rem', fontWeight: '600', lineHeight: '1.4' }}>
                Chat with your bot. It understands. It executes.
              </h3>

              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.7', fontSize: '1.1rem', marginBottom: '2rem', maxWidth: '480px' }}>
                No complex dashboards required. Just message your AutoClaw bot: <span style={{ color: '#e2e8f0', fontWeight: '500' }}>&quot;Find software engineer roles in NY&quot;</span> and it autonomously begins searching, tailoring, and applying.
              </p>

              <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(56,189,248,0.1)', border: '1px solid rgba(56,189,248,0.5)', padding: '0.8rem 1.75rem', borderRadius: '999px', color: '#38bdf8', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'all 0.3s' }} className="hover:bg-[rgba(56,189,248,0.2)] hover:scale-[1.05]">
                Try Demo Bot ↗
              </a>
            </div>

            {/* Chat UI Mockup */}
            <div style={{ flex: '1 1 300px', zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
              <div style={{ width: '100%', maxWidth: '340px', background: '#0f172a', border: '1px solid #1e293b', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.4)' }}>
                {/* Header */}
                <div style={{ background: '#1e293b', padding: '1rem', display: 'flex', alignItems: 'center', gap: '0.875rem', borderBottom: '1px solid #334155' }}>
                  <div style={{ width: '40px', height: '40px', background: 'var(--accent-gradient)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', fontSize: '1.3rem' }}>🤖</div>
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
                    <span style={{ color: '#38bdf8' }}>🔍 Found 12 roles.</span><br />
                    ✍️ Tailoring your resume...<br />
                    ✅ Applying now. I&apos;ll notify you soon.
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
              { name: 'Lever', logo: 'https://logo.clearbit.com/lever.co', url: 'https://lever.co' },
              { name: 'Greenhouse', logo: 'https://logo.clearbit.com/greenhouse.io', url: 'https://greenhouse.io' },
              { name: 'Y Combinator', logo: 'https://logo.clearbit.com/ycombinator.com', url: 'https://ycombinator.com' },
              { name: 'LinkedIn', logo: 'https://logo.clearbit.com/linkedin.com', url: 'https://linkedin.com' }
            ].map((platform, i) => (
              <Link key={platform.name} href={platform.url} target="_blank" style={{ textDecoration: 'none', background: 'linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center', transition: 'all 0.3s', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }} className="hover:scale-105 hover:border-[rgba(236,72,153,0.5)]">
                <img src={platform.logo} alt={`${platform.name} logo`} style={{ width: '40px', height: '40px', borderRadius: '6px', objectFit: 'contain', background: '#fff', padding: platform.name === 'Y Combinator' ? '0' : '2px' }} />
                <h3 style={{ color: '#cbd5e1', fontSize: '1.15rem', fontWeight: '600', margin: 0 }}>{platform.name}</h3>
              </Link>
            ))}
          </div>
        </section>

      </main>

      {/* COMPACT FOOTER */}
      <footer style={{ background: '#020617', padding: '4rem 2rem 3rem', marginTop: '4rem', borderTop: '2px solid rgba(236,72,153,0.3)', textAlign: 'center' }}>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '0.5rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Built with ☕ and slight desperation by
        </p>
        <h2 style={{ fontSize: '3.5rem', fontWeight: '900', color: '#fff', marginBottom: '1.5rem', lineHeight: '1.1' }}>
          <Link href="https://krishnac.vercel.app/" target="_blank" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">Krishna</Link>
          <span style={{ color: 'var(--text-secondary)', margin: '0 0.5rem', fontSize: '2.5rem' }}>&amp;</span>
          <Link href="https://nuhan04.vercel.app/" target="_blank" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">Nuhan</Link>
        </h2>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          We built AutoClaw because applying to jobs manually is soul-crushing. It&apos;s completely open-source, so feel free to steal our code, contribute on GitHub, or drop us an email if you want to collaborate (or hire us).
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
          <a href="https://github.com/krishna-cx" target="_blank" style={{ background: 'rgba(236,72,153,0.15)', color: '#fff', border: '1px solid rgba(236,72,153,0.5)', padding: '0.8rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover:bg-[#ec4899]">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            Contribute on GitHub
          </a>
          <a href="mailto:autoclaw.dev@gmail.com" style={{ background: 'rgba(139,92,246,0.15)', color: '#fff', border: '1px solid rgba(139,92,246,0.5)', padding: '0.8rem 2rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1rem', transition: 'all 0.3s', display: 'flex', alignItems: 'center', gap: '0.5rem' }} className="hover:bg-[#8b5cf6]">
            <span>✉️</span> Drop us an Email
          </a>
        </div>
      </footer>
    </>
  );
}
