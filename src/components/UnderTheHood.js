export default function UnderTheHood() {
    return (
        <section id="under-the-hood" className="section py-12 md:py-20 relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.05)_0,transparent_50%)] pointer-events-none" />
            <div className="max-w-5xl mx-auto px-4 relative z-10">
                <h2 style={{ fontSize: '2.5rem', fontWeight: '800', textAlign: 'center', marginBottom: '1rem', color: '#fff' }}>
                    How AutoClaw <span style={{ color: '#38bdf8' }}>Actually</span> Works
                </h2>
                <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 3rem' }}>
                    Beyond simple CSS selectors. Engineered for adversarial DOM manipulation and complex ATS platforms.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Text Description */}
                    <div className="space-y-6">
                        <div style={{ background: 'rgba(15,23,42,0.6)', border: '1px solid rgba(56,189,248,0.3)' }} className="p-5 md:p-8 rounded-2xl backdrop-blur-md">
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ec4899', boxShadow: '0 0 10px #ec4899' }} />
                                Vision-Language-Action Fallback
                            </h3>
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                When standard Playwright CSS selectors break on platforms like Greenhouse, AutoClaw doesn&apos;t crash. It dynamically injects JavaScript to draw set-of-mark bounding boxes over the UI.
                            </p>
                            <br />
                            <p style={{ color: '#cbd5e1', lineHeight: '1.7' }}>
                                A screenshot is captured and piped to the <strong>Gemini 1.5 Flash Vision API</strong>. AutoClaw infers the semantic meaning of elements, calculates exact X/Y pixel coordinates, and orchestrates a hardware-level click to proceed.
                            </p>
                        </div>
                        {/* Tech details grid */}
                        <div className="grid grid-cols-2 gap-4">
                            <div style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(255,255,255,0.1)' }} className="p-4 md:p-6 rounded-xl">
                                <div style={{ color: '#38bdf8', fontWeight: '700', marginBottom: '0.25rem' }} className="text-lg md:text-xl">Sub-1s</div>
                                <div style={{ color: '#94a3b8' }} className="text-xs md:text-sm">Vision API Latency</div>
                            </div>
                            <div style={{ background: 'rgba(15,23,42,0.4)', border: '1px solid rgba(255,255,255,0.1)' }} className="p-4 md:p-6 rounded-xl">
                                <div style={{ color: '#10b981', fontWeight: '700', marginBottom: '0.25rem' }} className="text-lg md:text-xl">100%</div>
                                <div style={{ color: '#94a3b8' }} className="text-xs md:text-sm">DOM Bypass Rate</div>
                            </div>
                        </div>
                    </div>

                    {/* Terminal Mockup */}
                    <div style={{ background: '#020617', borderRadius: '16px', border: '1px solid #1e293b', overflow: 'hidden', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)' }}>
                        {/* Terminal Header */}
                        <div style={{ background: '#0f172a', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #1e293b' }}>
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                            <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                            <span style={{ marginLeft: '1rem', color: '#64748b', fontSize: '0.8rem', fontFamily: 'monospace' }}>autoclaw-core.py</span>
                        </div>
                        {/* Terminal Body */}
                        <div style={{ fontFamily: 'monospace', color: '#a5b4fc', lineHeight: '1.6' }} className="p-4 md:p-6 text-[0.8rem] md:text-[0.9rem] h-[240px] md:h-[320px] overflow-y-auto">
                            <div style={{ color: '#64748b' }}># [AutoClaw Phase 4: Execution]</div>
                            <div><span style={{ color: '#c084fc' }}>INFO</span>: Locating target node: "Submit Application"</div>
                            <div><span style={{ color: '#eab308' }}>WARN</span>: Playwright CSS select timeout (DOM obfuscated).</div>
                            <div className="mt-4" style={{ color: '#64748b' }}># Initializing VLA Fallback Strategy</div>
                            <div><span style={{ color: '#c084fc' }}>INFO</span>: Injecting Set-of-Mark JS payload...</div>
                            <div><span style={{ color: '#22c55e' }}>SUCCESS</span>: 42 Bounding boxes drawn.</div>
                            <div><span style={{ color: '#c084fc' }}>INFO</span>: Transmitting viewport dump to Gemini 1.5 Flash Vision...</div>
                            <div className="mt-4" style={{ color: '#38bdf8' }}>{`>`} Vision Inference Complete</div>
                            <div style={{ color: '#94a3b8', paddingLeft: '1rem' }}>{`{`}</div>
                            <div style={{ color: '#94a3b8', paddingLeft: '2rem' }}>"target_id": <span style={{ color: '#fca5a5' }}>"box-17"</span>,</div>
                            <div style={{ color: '#94a3b8', paddingLeft: '2rem' }}>"confidence": <span style={{ color: '#86efac' }}>0.992</span>,</div>
                            <div style={{ color: '#94a3b8', paddingLeft: '2rem' }}>"coordinates": <span style={{ color: '#fde047' }}>{"{x: 842, y: 1105}"}</span></div>
                            <div style={{ color: '#94a3b8', paddingLeft: '1rem' }}>{`}`}</div>
                            <div className="mt-4"><span style={{ color: '#c084fc' }}>INFO</span>: Executing hardware-level click at (842, 1105)</div>
                            <div><span style={{ color: '#22c55e' }}>SUCCESS</span>: Transitioning to Phase 1: Authentication</div>
                            <div className="animate-pulse inline-block w-2 h-4 bg-white mt-2" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
