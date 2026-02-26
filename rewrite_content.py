import sys

with open('src/app/page.js', 'r') as f:
    lines = f.readlines()

new_content = """        {/* WHY OUR SYSTEM IS BETTER */}
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
        </section>

        {/* SYSTEM ARCHITECTURE & EXECUTION FLOW */}
        <section id="architecture" className="section quickstart-section">
          <div className="section-header">
            <h2><span className="accent-arrow">⟩</span> Master Execution Blueprint</h2>
          </div>
          <div className="terminal-box">
            <div className="terminal-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div className="terminal-dots" style={{ display: 'flex', gap: '8px' }}>
                <span className="dot" style={{background: '#ff00a0', width: '12px', height: '12px', borderRadius: '50%'}}></span>
                <span className="dot" style={{background: '#ffb000', width: '12px', height: '12px', borderRadius: '50%'}}></span>
                <span className="dot" style={{background: '#00ff88', width: '12px', height: '12px', borderRadius: '50%'}}></span>
              </div>
              <div className="terminal-tabs" style={{ display: 'flex', gap: '15px' }}>
                <span style={{ color: 'white', borderBottom: '2px solid var(--accent-color)', paddingBottom: '4px', fontSize: '0.85rem' }}>Phase 1-4 Flow</span>
              </div>
              <div></div>
            </div>
            <div className="terminal-body" style={{ fontFamily: 'monospace', lineHeight: '1.6', fontSize: '0.9rem' }}>
              <span style={{color: 'var(--accent-color)'}}>[PHASE 1: Auth Gateway]</span><br/>
              > Launch local Chrome (--remote-debugging-port=9222)<br/>
              > Human solves targeted CAPTCHAs manually<br/>
              > Playwright attaches & inherits trusted session<br/><br/>
              
              <span style={{color: 'var(--accent-secondary)'}}>[PHASE 2: Deterministic Extraction]</span><br/>
              > Navigate Source platforms at randomized human speeds<br/>
              > Extract raw job URLs via precise DOM parsing<br/>
              > Commit to local SQLite state matrix<br/><br/>

              <span style={{color: '#8b5cf6'}}>[PHASE 3: Semantic Brain]</span><br/>
              > Strip HTML noise via BeautifulSoup4<br/>
              > Feed JD + Resume to Ollama (Llama 3.1 8B)<br/>
              > Force strict Pydantic JSON {"{match_score, decision}"}<br/><br/>

              <span style={{color: '#ff00a0'}}>[PHASE 4: VLA Execution Loop]</span><br/>
              > Route to ATS (Lever/Greenhouse)<br/>
              > If standard DOM fails: Inject JS Set-of-Mark bounding boxes<br/>
              > Gemini 1.5 processes screenshot to locate Submit button<br/>
              > Execute raw hardware-level mouse click
            </div>
          </div>
        </section>

        {/* THE 4 PILLARS & TECH STACK */}
        <section id="targets" className="section integrations-section">
          <div className="section-header">
            <h2><span className="accent-arrow">⟩</span> The 4 Pillars (Target Platforms)</h2>
          </div>
          <div className="integrations-grid">
            <div className="integration-item">
              <span style={{color: 'var(--accent-color)', fontWeight: 'bold', marginRight: '10px'}}>&bull;</span> Lever (Testing Ground)
            </div>
            <div className="integration-item">
              <span style={{color: 'var(--accent-secondary)', fontWeight: 'bold', marginRight: '10px'}}>&bull;</span> Greenhouse (VLA Fallback)
            </div>
            <div className="integration-item">
              <span style={{color: '#8b5cf6', fontWeight: 'bold', marginRight: '10px'}}>&bull;</span> Y Combinator (Source Aggregator)
            </div>
            <div className="integration-item">
              <span style={{color: '#ff00a0', fontWeight: 'bold', marginRight: '10px'}}>&bull;</span> LinkedIn (The Final Boss)
            </div>
          </div>
        </section>
"""


start_idx = -1
end_idx = -1

for i, line in enumerate(lines):
    if "{/* TESTIMONIALS: WHAT PEOPLE SAY */}" in line:
        start_idx = i
    if "</main>" in line:
        end_idx = i
        break

if start_idx != -1 and end_idx != -1:
    lines = lines[:start_idx] + [new_content] + lines[end_idx:]

with open('src/app/page.js', 'w') as f:
    f.writelines(lines)
