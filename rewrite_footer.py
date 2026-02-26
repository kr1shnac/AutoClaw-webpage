with open('src/app/page.js', 'r') as f:
    text = f.read()

# 1. Remove the entire Master Execution Blueprint section
old_blueprint = """        {/* SYSTEM ARCHITECTURE & EXECUTION FLOW */}
        <section id="architecture" className="section quickstart-section">
          <div className="section-header">
            <h2><span className="accent-arrow">⟩</span> Master Execution Blueprint</h2>
          </div>
          <div className="terminal-box">
            <div className="terminal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="terminal-dots" style={{ display: 'flex', gap: '8px' }}>
                <span className="dot" style={{ background: '#ff00a0', width: '12px', height: '12px', borderRadius: '50%' }}></span>
                <span className="dot" style={{ background: '#ffb000', width: '12px', height: '12px', borderRadius: '50%' }}></span>
                <span className="dot" style={{ background: '#00ff88', width: '12px', height: '12px', borderRadius: '50%' }}></span>
              </div>
              <div className="terminal-tabs" style={{ display: 'flex', gap: '15px' }}>
                <span style={{ color: 'white', borderBottom: '2px solid var(--accent-color)', paddingBottom: '4px', fontSize: '0.85rem' }}>Phase 1-4 Flow</span>
              </div>
              <div></div>
            </div>
            <div className="terminal-body" style={{ fontFamily: 'monospace', lineHeight: '1.6', fontSize: '0.9rem' }}>
              <span style={{ color: 'var(--accent-color)' }}>[PHASE 1: Auth Gateway]</span><br />
              &gt; Launch local Chrome (--remote-debugging-port=9222)<br />
              &gt; Human solves targeted CAPTCHAs manually<br />
              &gt; Playwright attaches &amp; inherits trusted session<br /><br />

              <span style={{ color: 'var(--accent-secondary)' }}>[PHASE 2: Deterministic Extraction]</span><br />
              &gt; Navigate Source platforms at randomized human speeds<br />
              &gt; Extract raw job URLs via precise DOM parsing<br />
              &gt; Commit to local SQLite state matrix<br /><br />

              <span style={{ color: '#8b5cf6' }}>[PHASE 3: Semantic Brain]</span><br />
              &gt; Strip HTML noise via BeautifulSoup4<br />
              &gt; Feed JD + Resume to Ollama (Llama 3.1 8B)<br />
              &gt; Force strict Pydantic JSON {"{match_score, decision}"}<br /><br />

              <span style={{ color: '#ff00a0' }}>[PHASE 4: VLA Execution Loop]</span><br />
              &gt; Route to ATS (Lever/Greenhouse)<br />
              &gt; If standard DOM fails: Inject JS Set-of-Mark bounding boxes<br />
              &gt; Gemini 1.5 processes screenshot to locate Submit button<br />
              &gt; Execute raw hardware-level mouse click
            </div>
          </div>
        </section>"""

text = text.replace(old_blueprint, '')

# 2. Replace the entire footer with new Telegram + Contributor section
old_footer = """      <footer className="footer section">
        <div className="footer-top">
          <div className="newsletter">
            <div className="section-header">
              <h2><span className="accent-arrow">⟩</span> Stay in the Loop</h2>
            </div>
            <p className="dim-text">Get updates on new features, integrations, and lobster wisdom. No spam, unsubscribe anytime.</p>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email address" />
              <button className="btn-primary">Subscribe</button>
            </div>
          </div>
          <div className="footer-links-col">
            <div className="section-header">
              <h2><span className="accent-arrow">⟩</span> Featured In</h2>
            </div>
            <nav className="sitemap">
              <Link href="#">MacStories</Link>
              <Link href="#">StarryHope</Link>
            </nav>
          </div>
          <div className="footer-links-col">
            <div className="section-header">
              <h2><span className="accent-arrow">⟩</span> Sponsors</h2>
            </div>
            <nav className="sitemap">
              <Link href="#">Blog</Link>
              <Link href="#">Showcase</Link>
              <Link href="#">Shoutouts</Link>
              <Link href="#">Integrations</Link>
              <Link href="#">Trust</Link>
            </nav>
          </div>
        </div>
        <div className="footer-bottom">
          <p>
            Built by <a href="https://molty.me" className="accent-link">Molty</a> 🦞, a space lobster AI with a <a href="https://soul.md" className="accent-link">soul</a>,
            by <a href="https://github.com/autoclaw" className="accent-link">The AutoClaw Team</a>.
          </p>
          <p className="dim-text">Formerly known as Clawdbot and Moltbot. Independent project, not affiliated with Anthropic.</p>
        </div>
      </footer>"""

new_footer_and_telegram = """        {/* REMOTE COMMAND CENTER */}
        <section id="remote" className="section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2><span className="accent-arrow">⟩</span> Command Center: Remote Telemetry</h2>
          </div>
          <p className="dim-text" style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem', fontSize: '1.1rem', lineHeight: '1.7' }}>
            AutoClaw doesn't just run on your desktop. It runs on your <strong style={{ color: '#fff' }}>phone</strong>.
            Fire commands, check status, and monitor live application logs from anywhere on the planet.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap' }}>
            
            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(0, 136, 204, 0.3)', borderRadius: '16px', padding: '2.5rem', width: '280px', textAlign: 'center', transition: 'transform 0.3s, border-color 0.3s' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 1.5rem' }}>
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69.01-.03.01-.14-.07-.2-.08-.06-.19-.04-.27-.02-.12.03-1.98 1.26-5.61 3.71-.53.36-1.01.54-1.44.53-.47-.01-1.38-.27-2.06-.49-.83-.27-1.49-.42-1.43-.88.03-.24.37-.49 1.02-.75 3.99-1.73 6.65-2.87 7.97-3.44 3.8-1.6 4.59-1.88 5.1-1.89.11 0 .37.03.54.17.14.12.18.28.2.46-.01.06.01.24 0 .38z" fill="#0088cc"/>
              </svg>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Telegram Bot</h3>
              <p className="dim-text" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Send /start, /status, or /pause from anywhere. Your phone becomes the dashboard.</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(0, 255, 136, 0.3)', borderRadius: '16px', padding: '2.5rem', width: '280px', textAlign: 'center', transition: 'transform 0.3s, border-color 0.3s' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 1.5rem' }}>
                <rect x="5" y="2" width="14" height="20" rx="3" stroke="var(--accent-color)" strokeWidth="1.5" fill="none"/>
                <line x1="9" y1="19" x2="15" y2="19" stroke="var(--accent-color)" strokeWidth="1.5" strokeLinecap="round"/>
                <circle cx="12" cy="8" r="2" fill="var(--accent-color)" opacity="0.6"/>
                <path d="M9 12h6M9 14h4" stroke="var(--accent-secondary)" strokeWidth="1" strokeLinecap="round" opacity="0.5"/>
              </svg>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Live Notifications</h3>
              <p className="dim-text" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>Real-time alerts for every application submitted, every match scored, every error caught.</p>
            </div>

            <div style={{ background: 'var(--card-bg)', border: '1px solid rgba(139, 92, 246, 0.3)', borderRadius: '16px', padding: '2.5rem', width: '280px', textAlign: 'center', transition: 'transform 0.3s, border-color 0.3s' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" style={{ margin: '0 auto 1.5rem' }}>
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" stroke="#8b5cf6" strokeWidth="1.5" fill="none" strokeLinejoin="round"/>
              </svg>
              <h3 style={{ color: '#fff', fontSize: '1.3rem', marginBottom: '0.75rem' }}>Instant Kill Switch</h3>
              <p className="dim-text" style={{ fontSize: '0.9rem', lineHeight: '1.5' }}>One command to halt all operations instantly. Full control, zero risk, from your pocket.</p>
            </div>

          </div>
        </section>
      </main>

      {/* CONTRIBUTE / JOIN THE PROJECT */}
      <footer className="footer section" style={{ borderTop: '1px solid rgba(0, 255, 136, 0.1)' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', padding: '4rem 2rem' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#fff', marginBottom: '1rem', letterSpacing: '-0.02em' }}>
            Want to be a part of <span style={{ color: 'var(--accent-color)' }}>something bigger?</span>
          </h2>
          <p className="dim-text" style={{ fontSize: '1.15rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
            AutoClaw is an open engineering effort by two students who refuse to settle for average.
            If you think you can push this system further — we want to hear from you.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.5rem 2rem', minWidth: '220px' }}>
              <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Drop us an email</p>
              <a href="mailto:autoclaw.dev@gmail.com" style={{ color: '#fff', fontSize: '1.1rem', textDecoration: 'none', borderBottom: '1px dashed rgba(0, 255, 136, 0.4)', paddingBottom: '2px' }}>autoclaw.dev@gmail.com</a>
            </div>
            <div style={{ background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '1.5rem 2rem', minWidth: '220px' }}>
              <p style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: '0.5rem' }}>Reach out on Telegram</p>
              <a href="https://t.me/autoclaw" style={{ color: '#fff', fontSize: '1.1rem', textDecoration: 'none', borderBottom: '1px dashed rgba(0, 242, 254, 0.4)', paddingBottom: '2px' }}>@autoclaw</a>
            </div>
          </div>

          <p className="dim-text" style={{ fontSize: '0.85rem', marginTop: '2rem' }}>
            Engineered with precision by <span style={{ color: 'var(--accent-color)' }}>Krishna</span> & <span style={{ color: 'var(--accent-secondary)' }}>Nuhan</span> — Final Year Capstone Project.
          </p>
        </div>
      </footer>"""

text = text.replace(old_footer, new_footer_and_telegram)

with open('src/app/page.js', 'w') as f:
    f.write(text)
print("PATCH SUCCESS")
