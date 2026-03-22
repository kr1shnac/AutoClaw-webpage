import Link from 'next/link';
import HeroSection from './HeroSection';
import UnderTheHood from '../components/UnderTheHood';
import TechStackMarquee from '../components/TechStackMarquee';

export default function Home() {
  return (
    <>
      <div className="robotic-bg">
        { }
        <div className="bg-node" style={{ top: '10%', left: '15%', animationDelay: '0s' }}></div>
        <div className="bg-node" style={{ top: '30%', left: '80%', animationDelay: '2s' }}></div>
        <div className="bg-node" style={{ top: '60%', left: '10%', animationDelay: '4s' }}></div>
        <div className="bg-node" style={{ top: '80%', left: '85%', animationDelay: '1s' }}></div>
        <div className="bg-line" style={{ top: '20%', left: '20%', width: '150px', transform: 'rotate(45deg)', animationDelay: '0.5s' }}></div>
        <div className="bg-line" style={{ top: '70%', left: '70%', width: '200px', transform: 'rotate(-30deg)', animationDelay: '3s' }}></div>
      </div>
      <div className="star-overlay"></div>

      <main className="main-content relative">
        { }
        <div style={{ width: '100%', maxWidth: '1200px', padding: '2rem', display: 'flex', justifyContent: 'flex-end', position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', zIndex: 50 }}>
          <a href="https://github.com/kr1shnac/AutoClaw.git" target="_blank" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(255,255,255,0.1)', padding: '0.6rem 1.2rem', borderRadius: '999px', color: '#fff', textDecoration: 'none', fontSize: '0.9rem', fontWeight: '600', backdropFilter: 'blur(10px)' }} className="hover:bg-[rgba(255,255,255,0.1)] transition-all">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.416 22 12c0-5.523-4.477-10-10-10z"></path></svg>
            Star on GitHub
          </a>
        </div>
        { }
        <HeroSection />

        {/* ── THE PROBLEM NARRATIVE ── */}
        <section className="section pt-10 pb-16 px-4 max-w-4xl mx-auto text-center relative z-10 -mt-10">
            <h2 className="text-[2.5rem] md:text-[3.5rem] font-bold text-white mb-6 leading-tight tracking-tight">
              Job hunting is <span className="text-pink-500">broken.</span>
            </h2>
            <p className="text-[1.1rem] md:text-[1.3rem] text-slate-400 mb-8 leading-relaxed font-light max-w-2xl mx-auto">
              Applying to 500+ jobs manually is soul-crushing. Existing tools just spam 
              untailored resumes blindly. We built a system that actually parses the job, rewrites 
              your resume, and bypasses complex forms using pure visual AI.
            </p>
            <div className="h-[1px] w-32 bg-[rgba(236,72,153,0.3)] mx-auto mt-12 mb-8" style={{boxShadow: '0 0 15px rgba(236,72,153,0.5)'}}></div>
        </section>

        {/* ── THE AUTOCLAW WORKFLOW (PULLING THE AUDIENCE IN) ── */}
        <section id="workflow" className="section py-10 md:py-20 max-w-[1200px] mx-auto px-4 relative z-10">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>
            How <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>It Actually Works</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Step 1 */}
            <div className="flex flex-col p-8 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(56,189,248,0.3)] backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
              <div className="text-sky-400 font-mono text-4xl font-bold opacity-30 mb-4">01</div>
              <h3 className="text-xl text-white font-bold mb-3">Drop Your Resume</h3>
              <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                Upload your master resume once. AutoClaw parses it perfectly, maps your skills, and builds a centralized data profile requiring zero manual data entry.
              </p>
            </div>

            {/* Step 2 */}
            <div className="flex flex-col p-8 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(236,72,153,0.3)] backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
              <div className="text-pink-500 font-mono text-4xl font-bold opacity-30 mb-4">02</div>
              <h3 className="text-xl text-white font-bold mb-3">Agent Scours Web</h3>
              <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                The Scanner browses job boards autonomously. It extracts listings, scores them against your profile out of 100, and filters out the noise.
              </p>
            </div>

            {/* Step 3 */}
            <div className="flex flex-col p-8 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(139,92,246,0.3)] backdrop-blur-md hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
              <div className="text-purple-500 font-mono text-4xl font-bold opacity-30 mb-4">03</div>
              <h3 className="text-xl text-white font-bold mb-3">Tailor & Apply</h3>
              <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                AutoClaw tailors your resume for that specific job, drafts a cover letter, and visually clicks through ATS forms using Gemini 2.0 without breaking.
              </p>
            </div>

            {/* Step 4 */}
            <div className="flex flex-col p-8 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(16,185,129,0.3)] backdrop-blur-md hover:-translate-y-2 transition-transform duration-300">
              <div className="text-emerald-500 font-mono text-4xl font-bold opacity-30 mb-4">04</div>
              <h3 className="text-xl text-white font-bold mb-3">Interview Prep</h3>
              <p className="text-slate-400 leading-relaxed text-[0.95rem]">
                It detects interview invites in your email, syncs them to your calendar, and generates a detailed research brief 48 hours before you speak.
              </p>
            </div>

          </div>
        </section>

        {/* ── THE COMMAND CENTER (USER FACING DASHBOARD) ── */}
        <section id="dashboard" className="section pb-10 md:pb-20 max-w-[1200px] mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-stretch">
            {/* Pipeline Tracker */}
            <div className="flex flex-col p-8 md:p-10 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(34,197,94,0.3)] backdrop-blur-md group hover:-translate-y-1 transition-transform duration-300">
              <div className="w-12 h-12 bg-emerald-500/15 rounded-xl flex items-center justify-center mb-6 border border-emerald-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              </div>
              <h3 className="text-2xl text-white font-bold mb-4">Pipeline Tracker</h3>
              <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
                Watch the magic happen live. A beautiful Kanban board that tracks every application's status from 'Drafted' to 'Interview Scheduled'.
              </p>
              {/* Kanban Mockup */}
              <div className="mt-auto bg-[#020617]/80 p-4 rounded-2xl border border-slate-800/60 shadow-inner flex flex-col gap-3">
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <div className="w-2 h-2 rounded-full bg-sky-500"></div>
                  <div className="flex-1">
                    <div className="text-slate-200 text-sm font-semibold">Frontend Engineer • Foundit</div>
                    <div className="text-slate-500 text-xs mt-1">Score: 92/100</div>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-slate-900/50 rounded-xl border border-[rgba(255,255,255,0.05)]">
                  <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]"></div>
                  <div className="flex-1">
                    <div className="text-slate-200 text-sm font-semibold">React Dev • Internshala</div>
                    <div className="text-emerald-400/80 text-xs mt-1">Interview Scheduled</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Q&A Memory Vault */}
            <div className="flex flex-col p-8 md:p-10 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(139,92,246,0.3)] backdrop-blur-md group hover:-translate-y-1 transition-transform duration-300">
               <div className="w-12 h-12 bg-purple-500/15 rounded-xl flex items-center justify-center mb-6 border border-purple-500/30 group-hover:scale-110 transition-transform duration-300">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8b5cf6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
               </div>
               <h3 className="text-2xl text-white font-bold mb-4">Q&A Memory Vault</h3>
               <p className="text-slate-400 leading-relaxed max-w-sm mb-8">
                Tired of answering the same questions? AutoClaw remembers your best responses to screening questions and dynamically adapts them for future applications.
               </p>
               {/* Terminal Mockup */}
               <div className="mt-auto bg-[#020617]/80 p-4 rounded-2xl border border-slate-800/60 shadow-inner">
                  <div className="flex items-center gap-2 mb-3">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    <span className="text-emerald-500 text-xs font-bold tracking-widest">MEMORY ACCESSED</span>
                  </div>
                  <div className="text-slate-400 text-sm font-mono italic leading-relaxed">
                    "Recalling previous successful answer about Next.js experience... Tailoring specifically to match current company core values."
                  </div>
               </div>
            </div>
          </div>
        </section>

        {/* ── THE ARCHITECTURE (Under The Hood) ── */}
        <div className="relative z-10 pt-10">
          <UnderTheHood />

          {/* 3-Agent Architecture Section (Brief) */}
          <section id="orchestration" className="section pb-10 md:pb-20 pt-4 relative">
            <div className="max-w-[1200px] mx-auto px-4 relative z-10">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto bg-[#0f172a]/60 border border-[rgba(255,255,255,0.05)] p-2 rounded-3xl backdrop-blur-sm">
                
                {/* Planner */}
                <div className="p-6 md:p-8 flex flex-col items-center text-center">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(236,72,153,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', border: '1px solid rgba(236,72,153,0.3)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ec4899" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="12" y1="16" x2="12" y2="12" /><line x1="12" y1="8" x2="12.01" y2="8" /></svg>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Planner Agent</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    The master brain. Scores jobs, delegates tasks, and prevents loops.
                  </p>
                </div>

                {/* Scanner */}
                <div className="p-6 md:p-8 flex flex-col items-center text-center border-l md:border-l border-t md:border-t-0 border-[rgba(255,255,255,0.05)]">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(56,189,248,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', border: '1px solid rgba(56,189,248,0.3)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Scanner Agent</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    The researcher. Browses job boards and extracts requirements via Vision LLM.
                  </p>
                </div>

                {/* Applicant */}
                <div className="p-6 md:p-8 flex flex-col items-center text-center border-l md:border-l border-t md:border-t-0 border-[rgba(255,255,255,0.05)]">
                  <div style={{ width: '48px', height: '48px', background: 'rgba(16,185,129,0.1)', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '1rem', border: '1px solid rgba(16,185,129,0.3)' }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" /><polyline points="22 4 12 14.01 9 11.01" /></svg>
                  </div>
                  <h3 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Applicant Agent</h3>
                  <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.5' }}>
                    The executor. Instantly tailors resumes and fires the Validator loop dynamically.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* ── TARGETS AND PLATFORMS ── */}
        <section id="targets" className="section py-10 md:py-20 max-w-[1200px] mx-auto px-4 relative z-10">
          <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '4rem', color: '#fff' }}>
            Outsmart <span style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>The System</span>
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
            {[
              { name: 'Internshala', color: '#0ea5e9', symbol: 'I', url: 'https://internshala.com', hoverClass: 'hover:border-[#0ea5e9]/50 hover:shadow-[#0ea5e9]/20' },
              { name: 'Naukri.com', color: '#3b82f6', symbol: 'N', url: 'https://naukri.com', hoverClass: 'hover:border-[#3b82f6]/50 hover:shadow-[#3b82f6]/20' },
              { name: 'Indeed', color: '#2563eb', symbol: 'In', url: 'https://indeed.com', hoverClass: 'hover:border-[#2563eb]/50 hover:shadow-[#2563eb]/20' },
              { name: 'Wellfound', color: '#f97316', symbol: 'W', url: 'https://wellfound.com', hoverClass: 'hover:border-[#f97316]/50 hover:shadow-[#f97316]/20' },
              { name: 'LinkedIn', color: '#0284c7', symbol: 'in', url: 'https://linkedin.com', hoverClass: 'hover:border-[#0284c7]/50 hover:shadow-[#0284c7]/20' }
            ].map((platform, i) => (
              <Link key={platform.name} href={platform.url} target="_blank" className={`flex flex-col items-center justify-center p-6 rounded-[24px] bg-[rgba(15,23,42,0.6)] border border-[rgba(255,255,255,0.05)] backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:shadow-lg group ${platform.hoverClass}`} style={{ textDecoration: 'none' }}>
                <div style={{ borderRadius: '16px', background: `linear-gradient(135deg, ${platform.color}15 0%, transparent 100%)`, display: 'flex', justifyContent: 'center', alignItems: 'center', border: `1px solid ${platform.color}40`, zIndex: 1, marginBottom: '1.25rem' }} className="w-16 h-16 shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <span style={{ color: platform.color, fontWeight: '800', fontFamily: platform.symbol === 'in' ? 'sans-serif' : 'serif', letterSpacing: platform.symbol === 'in' ? '-1px' : '0' }} className="text-[1.8rem] opacity-90">{platform.symbol}</span>
                </div>
                <h3 style={{ color: '#f8fafc', fontWeight: '700', margin: 0, zIndex: 1 }} className="text-[1.1rem] text-center w-full">{platform.name}</h3>
              </Link>
            ))}
          </div>
        </section>

        <TechStackMarquee />

      </main>

      {/* ── FOOTER ── */}
      <footer className="py-12 md:py-16 px-4 md:px-8 mt-4 text-center">
        <p className="flex flex-wrap items-center justify-center text-sm md:text-base font-semibold uppercase tracking-widest text-[#94a3b8] mb-2">
          Built with
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ margin: '0 6px' }}><path d="M18 8h1a4 4 0 0 1 0 8h-1" /><path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" /><line x1="6" y1="1" x2="6" y2="4" /><line x1="10" y1="1" x2="10" y2="4" /><line x1="14" y1="1" x2="14" y2="4" /></svg>
          and slight desperation by
        </p>
        <h2 className="flex flex-wrap items-center justify-center text-[2.5rem] md:text-[3.5rem] font-[900] text-white mb-6 leading-[1.1]" style={{ fontFamily: 'sans-serif' }}>
          <Link href="https://krishnac.vercel.app/" target="_blank" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">Krishna</Link>
          <span style={{ color: 'var(--text-secondary)', margin: '0 0.5rem', fontSize: '2.5rem' }}>&amp;</span>
          <Link href="https://nuhan04.vercel.app/" target="_blank" style={{ background: 'var(--accent-gradient)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', textDecoration: 'none' }} className="hover:opacity-80 transition-opacity">Nuhan</Link>
        </h2>

        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '650px', margin: '0 auto 2.5rem', lineHeight: '1.6' }}>
          We are currently building AutoClaw because applying to jobs manually is soul-crushing. The full platform is expected to launch in the next two to three months. In the meantime, it&apos;s completely open-source, so feel free to check out our progress on GitHub, drop us an email if you want to collaborate, or <span style={{ color: '#fff', fontWeight: '700', borderBottom: '2px solid #ec4899' }}>hire us.</span>
        </p>

        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
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
