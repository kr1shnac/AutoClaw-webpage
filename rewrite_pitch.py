import sys

with open('src/app/page.js', 'r') as f:
    text = f.read()

# Replace the "Why better" segment
old_why_better = """        {/* WHY OUR SYSTEM IS BETTER */}
        <section id="why-better" className="section features-section">
          <div className="section-header">
            <h2><span className="accent-arrow">⟩</span> Why Our System is Superior</h2>
          </div>
          <p className="dim-text" style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 40px' }}>
            We bypass traditional web-scraping brittleness by implementing state-of-the-art Vision-Language-Action (VLA) loops and Human-in-the-Loop (HITL) authentication.
          </p>
          <div className="features-grid">
            <div className="feature-card">
              <h3 className="accent-title">HITL Authentication Evasion</h3>
              <p>Headless bots are instantly banned. We use Playwright Stealth to attach to local, human-authenticated hijacked browser sessions.</p>
            </div>
            <div className="feature-card">
              <h3 className="accent-title">Vision-Language Action (VLA)</h3>
              <p>Bypasses UI randomness. Injects JS bounding boxes for Gemini 1.5 to map exact X/Y pixel coordinates for hardware-level clicks.</p>
            </div>
            <div className="feature-card">
              <h3 className="accent-title">Semantic Evaluation Brain</h3>
              <p>A rigorous local LLM pipeline (Llama 3.1 / Qwen) evaluates extracted job descriptions against parsed resumes via strict Pydantic JSON schemas.</p>
            </div>
            <div className="feature-card">
              <h3 className="accent-title">Zero Cost, 100% Local</h3>
              <p>Operating entirely on free-tier APIs and local consumer hardware (Ollama, SQLite) to ensure financial sustainability and maximum privacy.</p>
            </div>
          </div>
        </section>"""

new_why_better = """        {/* THE ULTIMATE PITCH: SELF-HEALING VLA */}
        <section id="why-better" className="section features-section" style={{ paddingTop: '5rem' }}>
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <h2><span className="accent-arrow">⟩</span> The Ultimate Differentiator</h2>
          </div>
          <h3 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '1.5rem', color: '#fff', letterSpacing: '-0.02em' }}>
            AutoClaw is not blind. It is <span style={{ color: 'var(--accent-color)' }}>"Self-Healing."</span>
          </h3>
          <p className="dim-text" style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.15rem', lineHeight: '1.7' }}>
            Every existing job application bot relies purely on the website's underlying code. <strong>AutoClaw relies on human-like vision.</strong><br/><br/>
            You are not looking at a mere "job bot". You are looking at a resilient, privacy-first, autonomous web orchestration engine that solves the biggest problem in RPA—UI brittleness—by combining deterministic code with a visual AI fallback.
          </p>
          
          <div className="features-grid" style={{ gridTemplateColumns: '1fr', gap: '2rem', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Competitor 1 */}
            <div className="feature-card" style={{ padding: '2.5rem', borderLeft: '4px solid #ff00a0', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 className="accent-title" style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>1. Vs. Traditional GitHub Bots</h3>
                <span className="badge" style={{ background: 'rgba(255, 0, 160, 0.1)', color: '#ff00a0', margin: 0, border: '1px solid rgba(255, 0, 160, 0.3)' }}>VLA Fallback</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', marginTop: '1.5rem' }}>
                <div>
                  <p style={{ color: '#ff00a0', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Their Fatal Flaw</p>
                  <p className="dim-text" style={{ fontSize: '0.95rem' }}>Extreme brittleness. If Greenhouse updates `<button class="submit">` to `<button class="apply">`, they instantly crash.</p>
                </div>
                <div>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The AutoClaw Advantage</p>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6', fontSize: '0.95rem' }}>When HTML breaks, AutoClaw takes a screenshot, looks at the page using the Gemini Vision model, physically sees the new button, and clicks the exact pixel coordinates. <strong>It fixes itself in real-time.</strong></p>
                </div>
              </div>
            </div>

            {/* Competitor 2 */}
            <div className="feature-card" style={{ padding: '2.5rem', borderLeft: '4px solid #ffb000', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 className="accent-title" style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>2. Vs. Auto-Fill Extensions</h3>
                <span className="badge" style={{ background: 'rgba(255, 176, 0, 0.1)', color: '#ffb000', margin: 0, border: '1px solid rgba(255, 176, 0, 0.3)' }}>Autonomous Daemon</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', marginTop: '1.5rem' }}>
                <div>
                  <p style={{ color: '#ffb000', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Their Fatal Flaw</p>
                  <p className="dim-text" style={{ fontSize: '0.95rem' }}>Non-autonomous. You still have to manually scroll, evaluate if you are a fit, open 50 tabs, and click repeatedly.</p>
                </div>
                <div>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The AutoClaw Advantage</p>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6', fontSize: '0.95rem' }}>AutoClaw is a true autonomous background daemon. Hit "Start" on your terminal, walk away, and the system handles extraction, semantic AI decision-making (Ollama), and application execution completely on its own.</p>
                </div>
              </div>
            </div>

            {/* Competitor 3 */}
            <div className="feature-card" style={{ padding: '2.5rem', borderLeft: '4px solid #00f2fe', textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem', flexWrap: 'wrap', gap: '1rem' }}>
                <h3 className="accent-title" style={{ color: '#fff', fontSize: '1.4rem', margin: 0 }}>3. Vs. Enterprise AI Agents</h3>
                <span className="badge" style={{ background: 'rgba(0, 242, 254, 0.1)', color: '#00f2fe', margin: 0, border: '1px solid rgba(0, 242, 254, 0.3)' }}>100% Local Privacy</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'minmax(200px, 1fr) 2fr', gap: '2rem', marginTop: '1.5rem' }}>
                <div>
                  <p style={{ color: '#00f2fe', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>Their Fatal Flaw</p>
                  <p className="dim-text" style={{ fontSize: '0.95rem' }}>Massive security risks. They send your resume, session cookies, and login tokens to external cloud servers.</p>
                </div>
                <div>
                  <p style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginBottom: '0.5rem', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '1px' }}>The AutoClaw Advantage</p>
                  <p style={{ color: '#e2e8f0', lineHeight: '1.6', fontSize: '0.95rem' }}>By running Llama 3.1 or Qwen 2.5 locally via Ollama, and keeping the SQLite state matrix on your own hard drive, AutoClaw guarantees your personal data <strong>never leaves your machine.</strong></p>
                </div>
              </div>
            </div>

          </div>
        </section>"""


old_targets = """        {/* THE 4 PILLARS & TECH STACK */}
        <section id="targets" className="section integrations-section">
          <div className="section-header">
            <h2><span className="accent-arrow">⟩</span> The 4 Pillars (Target Platforms)</h2>
          </div>
          <div className="integrations-grid">
            <div className="integration-item">
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', marginRight: '10px' }}>&bull;</span> Lever (Testing Ground)
            </div>
            <div className="integration-item">
              <span style={{ color: 'var(--accent-secondary)', fontWeight: 'bold', marginRight: '10px' }}>&bull;</span> Greenhouse (VLA Fallback)
            </div>
            <div className="integration-item">
              <span style={{ color: '#8b5cf6', fontWeight: 'bold', marginRight: '10px' }}>&bull;</span> Y Combinator (Source Aggregator)
            </div>
            <div className="integration-item">
              <span style={{ color: '#ff00a0', fontWeight: 'bold', marginRight: '10px' }}>&bull;</span> LinkedIn (The Final Boss)
            </div>
          </div>
        </section>"""

new_targets = """        {/* THE 4 PILLARS & TARGET BATTLEFIELD */}
        <section id="targets" className="section targets-section" style={{ paddingTop: '6rem', paddingBottom: '6rem' }}>
          <div className="section-header" style={{ marginBottom: '3rem' }}>
            <h2><span className="accent-arrow">⟩</span> The Battlefield: Target Platforms</h2>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '900px', margin: '0 auto' }}>
            
            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--card-bg)', border: '1px solid var(--card-border)', borderRadius: '12px', padding: '2rem', transition: 'transform 0.2s', cursor: 'default' }} className="hover:scale-[1.02]">
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(0, 255, 136, 0.2)', marginRight: '2rem', fontVariantNumeric: 'tabular-nums' }}>01</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Lever 
                  <span className="badge" style={{ fontSize: '0.75rem', background: 'rgba(0, 255, 136, 0.1)', color: 'var(--accent-color)', border: '1px solid rgba(0, 255, 136, 0.3)' }}>Destination ATS</span>
                </h3>
                <p className="dim-text" style={{ margin: 0, lineHeight: '1.5' }}>Minimalist UI, highly predictable DOM. The baseline testing ground for autonomous resume uploads.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--card-bg)', border: '1px solid rgba(0, 242, 254, 0.2)', borderRadius: '12px', padding: '2rem', transition: 'transform 0.2s', cursor: 'default' }} className="hover:scale-[1.02]">
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(0, 242, 254, 0.2)', marginRight: '2rem', fontVariantNumeric: 'tabular-nums' }}>02</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Greenhouse 
                  <span className="badge" style={{ fontSize: '0.75rem', background: 'rgba(0, 242, 254, 0.1)', color: 'var(--accent-secondary)', border: '1px solid rgba(0, 242, 254, 0.3)' }}>Destination ATS</span>
                </h3>
                <p className="dim-text" style={{ margin: 0, lineHeight: '1.5' }}>The industry standard for elite startups. Slightly more complex DOM, serving as the primary deployment ground for the VLA visual fallback loop.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--card-bg)', border: '1px solid rgba(139, 92, 246, 0.2)', borderRadius: '12px', padding: '2rem', transition: 'transform 0.2s', cursor: 'default' }} className="hover:scale-[1.02]">
              <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(139, 92, 246, 0.2)', marginRight: '2rem', fontVariantNumeric: 'tabular-nums' }}>03</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  Y Combinator 
                  <span className="badge" style={{ fontSize: '0.75rem', background: 'rgba(139, 92, 246, 0.1)', color: '#8b5cf6', border: '1px solid rgba(139, 92, 246, 0.3)' }}>Source Aggregator</span>
                </h3>
                <p className="dim-text" style={{ margin: 0, lineHeight: '1.5' }}>Requires login but has low bot-protection. The primary source for remote and high-growth startup roles.</p>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', background: 'var(--card-bg)', border: '1px solid rgba(255, 0, 160, 0.2)', borderRadius: '12px', padding: '2rem', transition: 'transform 0.2s', cursor: 'default' }} className="hover:scale-[1.02]">
               <div style={{ fontSize: '3rem', fontWeight: '900', color: 'rgba(255, 0, 160, 0.2)', marginRight: '2rem', fontVariantNumeric: 'tabular-nums' }}>04</div>
              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#fff', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  LinkedIn 
                  <span className="badge" style={{ fontSize: '0.75rem', background: 'rgba(255, 0, 160, 0.1)', color: '#ff00a0', border: '1px solid rgba(255, 0, 160, 0.3)' }}>The Final Boss</span>
                </h3>
                <p className="dim-text" style={{ margin: 0, lineHeight: '1.5' }}>Heavily guarded by Cloudflare/DataDome. Scraped strictly via human-mimicking delays on an authenticated, hijacked browser session.</p>
              </div>
            </div>

          </div>
        </section>"""

if old_why_better in text and old_targets in text:
    text = text.replace(old_why_better, new_why_better)
    text = text.replace(old_targets, new_targets)
    with open('src/app/page.js', 'w') as f:
        f.write(text)
    print("PATCH SUCCESS")
else:
    print("WARNING: Could not find exact strings to replace")
