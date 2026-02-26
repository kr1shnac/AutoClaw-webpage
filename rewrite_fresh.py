css_content = """@import "tailwindcss";

:root {
  --bg-color: #0b0f19;
  --text-primary: #ffffff;
  --text-secondary: #94a3b8;
  --accent-color: #ec4899;
  --accent-secondary: #8b5cf6;
  --accent-gradient: linear-gradient(135deg, #ec4899, #8b5cf6, #3b82f6);
  --card-bg: rgba(15, 23, 42, 0.6);
  --card-border: rgba(236, 72, 153, 0.2);
  --font-sans: var(--font-geist-sans), Arial, Helvetica, sans-serif;
}

*::selection {
  background-color: var(--accent-color) !important;
  color: #fff !important;
}

body {
  background-color: var(--bg-color);
  color: var(--text-primary);
  font-family: var(--font-sans);
  overflow-x: hidden;
  margin: 0;
  padding: 0;
}

.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.section {
  width: 100%;
  max-width: 1200px;
  padding: 4rem 2rem;
  margin: 0 auto;
}

/* Star field */
.star-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image:
    radial-gradient(1px 1px at 20px 30px, rgba(255, 255, 255, 0.4), transparent),
    radial-gradient(1.5px 1.5px at 140px 170px, rgba(236, 72, 153, 0.4), transparent),
    radial-gradient(2px 2px at 250px 160px, rgba(139, 92, 246, 0.4), transparent),
    radial-gradient(1px 1px at 390px 40px, rgba(59, 130, 246, 0.4), transparent),
    radial-gradient(1.5px 1.5px at 130px 280px, rgba(255, 255, 255, 0.2), transparent);
  background-repeat: repeat;
  background-size: 400px 400px;
  z-index: -2;
  opacity: 0.6;
  animation: bgDrift 150s linear infinite;
}

@keyframes bgDrift {
  0% { transform: translateY(0); }
  100% { transform: translateY(-400px); }
}

/* Animations for Cute Bot */
@keyframes cuteFloat {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-12px); }
}
@keyframes blink {
  0%, 96%, 100% { transform: scaleY(1); }
  98% { transform: scaleY(0.1); }
}
@keyframes earWiggle {
  0%, 100% { transform: rotate(0deg); }
  25% { transform: rotate(-10deg); }
  75% { transform: rotate(10deg); }
}
.animate-cute-float { animation: cuteFloat 4s ease-in-out infinite; }
.animate-blink { animation: blink 4s infinite; transform-origin: center; }
.animate-ear { animation: earWiggle 5s infinite; transform-origin: bottom center; }

/* Custom Badge */
.capsule-badge {
  display: inline-flex;
  align-items: center;
  background: rgba(15, 23, 42, 0.8);
  border: 1px solid rgba(236, 72, 153, 0.5);
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: #fff;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}
.capsule-badge:hover {
  border-color: rgba(139, 92, 246, 0.8);
  transform: translateY(-2px);
  box-shadow: 0 10px 25px -5px rgba(236, 72, 153, 0.3);
}
.capsule-tag {
  background: var(--accent-gradient);
  color: #fff;
  font-weight: 800;
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  border-radius: 999px;
  margin-right: 0.75rem;
  letter-spacing: 0.5px;
}
"""

js_content = """import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="star-overlay"></div>

      <main className="main-content">
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

          <div className="capsule-badge" style={{ marginBottom: '2rem' }}>
            <span className="capsule-tag">COMING SOON</span>
            <span>Your Personal Agent</span>
          </div>

          <h1 style={{ fontSize: '5rem', fontWeight: '900', marginBottom: '1rem', letterSpacing: '-0.03em', background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', lineHeight: '1.1' }}>
            AutoClaw
          </h1>
          
          <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto 3rem', lineHeight: '1.6' }}>
            A friendly and relentlessly efficient bot. <br/>
            It finds, evaluates, and applies to jobs entirely on its own.
          </p>
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

        {/* TARGETS */}
        <section id="targets" className="section" style={{ paddingTop: '5rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '3rem', color: '#fff' }}>
            Supported Platforms
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
            {['Lever', 'Greenhouse', 'Y Combinator', 'LinkedIn'].map((platform, i) => (
              <div key={platform} style={{ background: 'linear-gradient(135deg, rgba(30,41,59,0.5), rgba(15,23,42,0.8))', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px', padding: '1.5rem', textAlign: 'center' }}>
                <h3 style={{ color: '#cbd5e1', fontSize: '1.15rem', fontWeight: '600', margin: 0 }}>{platform}</h3>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* BIG FOOTER */}
      <footer style={{ background: '#020617', padding: '8rem 2rem 5rem', marginTop: '4rem', borderTop: '2px solid rgba(236,72,153,0.3)', textAlign: 'center' }}>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '1rem', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Proudly Designed By
        </p>
        <h2 style={{ fontSize: '5rem', fontWeight: '900', color: '#fff', marginBottom: '2rem', lineHeight: '1.1' }}>
          <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Krishna & Mohan</span>
        </h2>
        
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '4rem' }}>
          Building the future of autonomous workflows. Want to collaborate? Let's talk.
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
          <a href="mailto:autoclaw.dev@gmail.com" style={{ background: 'rgba(236,72,153,0.15)', color: '#fff', border: '1px solid rgba(236,72,153,0.5)', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'all 0.3s' }} className="hover:bg-[#ec4899]">
            Shoot us an Email
          </a>
          <a href="https://t.me/autoclaw" style={{ background: 'rgba(139,92,246,0.15)', color: '#fff', border: '1px solid rgba(139,92,246,0.5)', padding: '1rem 2.5rem', borderRadius: '999px', textDecoration: 'none', fontWeight: '600', fontSize: '1.1rem', transition: 'all 0.3s' }} className="hover:bg-[#8b5cf6]">
            Find us on Telegram
          </a>
        </div>

        <p style={{ color: '#475569', fontSize: '0.9rem' }}>
          © AutoClaw Project. Final Year Capstone.
        </p>
      </footer>
    </>
  );
}
"""

with open("src/app/globals.css", "w") as f:
    f.write(css_content)
    
with open("src/app/page.js", "w") as f:
    f.write(js_content)
    
print("Successfully generated new styling and scripts!")
