new_page = '''import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="star-overlay"></div>

      <main className="main-content">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-mascot relative">
            <div className="mascot-glow absolute w-full h-full rounded-full blur-[80px] opacity-50 bg-gradient-to-br from-[#a855f7] via-[#6366f1] to-[#f59e0b] scale-[2] animate-pulse"></div>
            <svg className="mascot-svg relative z-10 drop-shadow-2xl animate-float-complex" width="140" height="140" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <linearGradient id="g1" x1="0" y1="0" x2="100" y2="100">
                  <stop stopColor="#a855f7" />
                  <stop offset="1" stopColor="#6366f1" />
                </linearGradient>
                <linearGradient id="g2" x1="100" y1="0" x2="0" y2="100">
                  <stop stopColor="#f59e0b" />
                  <stop offset="1" stopColor="#a855f7" />
                </linearGradient>
                <filter id="glo" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="b" />
                  <feComposite in="SourceGraphic" in2="b" operator="over" />
                </filter>
              </defs>
              {/* Outer hexagonal ring */}
              <polygon points="50,8 85,27 85,73 50,92 15,73 15,27" fill="none" stroke="url(#g1)" strokeWidth="1.5" opacity="0.6" />
              {/* Inner rotated hexagon */}
              <polygon points="50,20 75,35 75,65 50,80 25,65 25,35" fill="rgba(168,85,247,0.08)" stroke="url(#g2)" strokeWidth="1" />
              {/* Core eye */}
              <circle cx="50" cy="50" r="14" fill="#0a0812" stroke="url(#g1)" strokeWidth="1.5" />
              <circle cx="50" cy="50" r="8" fill="url(#g1)" filter="url(#glo)" />
              <circle cx="50" cy="50" r="3" fill="#fff" />
              {/* Accent dots */}
              <circle cx="50" cy="20" r="2.5" fill="#f59e0b" filter="url(#glo)" />
              <circle cx="75" cy="65" r="2" fill="#a855f7" filter="url(#glo)" />
              <circle cx="25" cy="65" r="2" fill="#6366f1" filter="url(#glo)" />
            </svg>
          </div>

          <h1 className="hero-title-main relative z-10" style={{ background: 'linear-gradient(135deg, #a855f7, #c084fc, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>AutoClaw</h1>
          <h2 className="hero-accent-subtitle relative z-10">THE AI THAT ACTUALLY DOES THINGS.</h2>

          <p className="hero-paragraph" style={{ maxWidth: '600px' }}>
            An autonomous agent that finds, evaluates, and applies to software engineering jobs — entirely on its own.
          </p>

          <div className="hero-banner-container">
            <div className="hero-banner" style={{ borderColor: 'rgba(168, 85, 247, 0.3)' }}>
              <span style={{ cursor: 'default' }}>
                <span className="badge" style={{ background: 'linear-gradient(135deg, #a855f7, #6366f1)', color: '#fff' }}>COMING SOON</span> The Autonomous Job Application Engine &rarr;
              </span>
            </div>
          </div>
        </section>

        {/* THE CORE DIFFERENTIATOR */}
        <section id="why-better" className="section features-section" style={{ paddingTop: '5rem' }}>
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <h2><span className="accent-arrow">&#x27E9;</span> Why AutoClaw is Different</h2>
          </div>
          <h3 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '1rem', color: '#fff', letterSpacing: '-0.02em' }}>
            Other bots are <span style={{ color: '#8e86a0', textDecoration: 'line-through' }}>blind</span>. AutoClaw is{' '}
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontWeight: 'bold' }}>self-healing.</span>
          </h3>
          <p className="dim-text" style={{ textAlign: 'center', maxWidth: '550px', margin: '0 auto 3rem', fontSize: '1rem', lineHeight: '1.6' }}>
            When a website changes its UI overnight, every other bot crashes. AutoClaw sees the page like a human and adapts instantly.
          </p>

          <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>

            <div className="feature-card" style={{ padding: '2rem', borderLeft: '3px solid #a855f7', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <h3 className="accent-title" style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Vs. Selenium Scrapers</h3>
                <span className="badge" style={{ background: 'rgba(168, 85, 247, 0.15)', color: '#a855f7', border: '1px solid rgba(168, 85, 247, 0.3)', margin: 0 }}>Self-Healing Vision</span>
              </div>
              <p className="dim-text" style={{ marginTop: '0.75rem', lineHeight: '1.5' }}>They crash when a CSS class changes. AutoClaw screenshots the page, asks Gemini Vision to find the button, and clicks the exact pixel.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem', borderLeft: '3px solid #f59e0b', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <h3 className="accent-title" style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Vs. Browser Extensions</h3>
                <span className="badge" style={{ background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b', border: '1px solid rgba(245, 158, 11, 0.3)', margin: 0 }}>Fully Autonomous</span>
              </div>
              <p className="dim-text" style={{ marginTop: '0.75rem', lineHeight: '1.5' }}>Simplify and Teal still need you. AutoClaw runs as a background daemon — hit start, walk away.</p>
            </div>

            <div className="feature-card" style={{ padding: '2rem', borderLeft: '3px solid #6366f1', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '0.75rem' }}>
                <h3 className="accent-title" style={{ color: '#fff', fontSize: '1.2rem', margin: 0 }}>Vs. Cloud AI Agents</h3>
                <span className="badge" style={{ background: 'rgba(99, 102, 241, 0.15)', color: '#6366f1', border: '1px solid rgba(99, 102, 241, 0.3)', margin: 0 }}>100% Local</span>
              </div>
              <p className="dim-text" style={{ marginTop: '0.75rem', lineHeight: '1.5' }}>Enterprise agents leak your resume to cloud servers. AutoClaw runs Llama 3 locally via Ollama. Your data never leaves your machine.</p>
            </div>

          </div>
        </section>

        {/* TARGET PLATFORMS */}
        <section id="targets" className="section" style={{ paddingTop: '5rem', paddingBottom: '5rem' }}>
          <div className="section-header" style={{ marginBottom: '2.5rem' }}>
            <h2><span className="accent-arrow">&#x27E9;</span> Target Platforms</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', maxWidth: '900px', margin: '0 auto' }}>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(135deg, #a855f7, #6366f1)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>01</div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Lever</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', margin: 0 }}>Baseline ATS testing ground</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(99, 102, 241, 0.2)', borderRadius: '12px', padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(135deg, #6366f1, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>02</div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Greenhouse</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', margin: 0 }}>VLA fallback deployment</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '12px', padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(135deg, #f59e0b, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>03</div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>Y Combinator</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', margin: 0 }}>High-growth startup source</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(168, 85, 247, 0.25)', borderRadius: '12px', padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ fontSize: '2rem', fontWeight: '800', background: 'linear-gradient(135deg, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.5rem' }}>04</div>
              <h3 style={{ color: '#fff', fontSize: '1.15rem', marginBottom: '0.4rem' }}>LinkedIn</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', margin: 0 }}>The final boss</p>
            </div>

          </div>
        </section>

        {/* REMOTE COMMAND CENTER */}
        <section id="remote" className="section" style={{ paddingTop: '4rem', paddingBottom: '5rem' }}>
          <div className="section-header" style={{ marginBottom: '1.5rem' }}>
            <h2><span className="accent-arrow">&#x27E9;</span> Remote Command Center</h2>
          </div>
          <p className="dim-text" style={{ textAlign: 'center', maxWidth: '500px', margin: '0 auto 2.5rem', fontSize: '1rem' }}>
            Control AutoClaw from your phone. Monitor, pause, or kill operations from anywhere via Telegram.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(0, 136, 204, 0.25)', borderRadius: '14px', padding: '2rem', width: '240px', textAlign: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 1rem' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.14.14 0 0 0-.07-.2c-.08-.06-.19-.04-.27-.02-.12.03-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.44 3.8-1.6 4.59-1.88 5.1-1.89.11 0 .37.03.54.17.14.12.18.28.2.46-.01.06.01.24 0 .38z" fill="#0088cc"/>
              </svg>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Telegram Bot</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Send /start, /status, /pause</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '14px', padding: '2rem', width: '240px', textAlign: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 1rem' }}>
                <path d="M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0" stroke="#a855f7" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              </svg>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Live Alerts</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>Every application, every match</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(245, 158, 11, 0.2)', borderRadius: '14px', padding: '2rem', width: '240px', textAlign: 'center' }}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 1rem' }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#f59e0b" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
              </svg>
              <h3 style={{ color: '#fff', fontSize: '1.1rem', marginBottom: '0.5rem' }}>Kill Switch</h3>
              <p className="dim-text" style={{ fontSize: '0.85rem', lineHeight: '1.4', margin: 0 }}>One tap to halt everything</p>
            </div>

          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="footer section" style={{ borderTop: '1px solid rgba(168, 85, 247, 0.1)' }}>
        <div style={{ maxWidth: '700px', margin: '0 auto', textAlign: 'center', padding: '3.5rem 2rem' }}>
          <h2 style={{ fontSize: '2rem', color: '#fff', marginBottom: '0.75rem', letterSpacing: '-0.02em' }}>
            Want to be a part of{' '}
            <span style={{ background: 'linear-gradient(135deg, #a855f7, #f59e0b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>something bigger?</span>
          </h2>
          <p className="dim-text" style={{ fontSize: '1rem', lineHeight: '1.6', maxWidth: '500px', margin: '0 auto 2rem' }}>
            Two engineers building the future of autonomous web orchestration. If you can push this further — reach out.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '2.5rem' }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '1.25rem 1.75rem' }}>
              <p style={{ color: '#a855f7', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>Email</p>
              <a href="mailto:autoclaw.dev@gmail.com" style={{ color: '#eee8fa', fontSize: '0.95rem', textDecoration: 'none', borderBottom: '1px dashed rgba(168, 85, 247, 0.4)', paddingBottom: '2px' }}>autoclaw.dev@gmail.com</a>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '10px', padding: '1.25rem 1.75rem' }}>
              <p style={{ color: '#6366f1', fontWeight: '600', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.4rem' }}>Telegram</p>
              <a href="https://t.me/autoclaw" style={{ color: '#eee8fa', fontSize: '0.95rem', textDecoration: 'none', borderBottom: '1px dashed rgba(99, 102, 241, 0.4)', paddingBottom: '2px' }}>@autoclaw</a>
            </div>
          </div>

          <p className="dim-text" style={{ fontSize: '0.8rem' }}>
            Engineered by <span style={{ color: '#a855f7' }}>Krishna</span> &amp; <span style={{ color: '#6366f1' }}>Nuhan</span> — Final Year Capstone Project
          </p>
        </div>
      </footer>
    </>
  );
}
'''

with open('src/app/page.js', 'w') as f:
    f.write(new_page)
print("FULL PAGE REWRITE SUCCESS")
