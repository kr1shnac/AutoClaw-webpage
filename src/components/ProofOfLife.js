import React from 'react';

export default function ProofOfLife() {
    return (
        <div style={{ flex: '1 1 350px', zIndex: 1, position: 'relative', display: 'flex', justifyContent: 'center' }}>
            <div
                style={{
                    width: '100%',
                    maxWidth: '420px',
                    aspectRatio: '16/10',
                    background: 'rgba(2,6,23,0.8)',
                    border: '1px solid rgba(56,189,248,0.4)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 20px 40px -5px rgba(0, 0, 0, 0.4), 0 0 30px rgba(56,189,248,0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    position: 'relative',
                    padding: '2rem'
                }}
            >
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(56,189,248,0.1)_0,transparent_100%)]"></div>

                {/* Replace the content below with actual <video> or <img> tag when ready */}
                <div className="relative z-10 flex flex-col items-center justify-center text-center">
                    <div style={{
                        width: '64px',
                        height: '64px',
                        background: 'rgba(56,189,248,0.2)',
                        borderRadius: '50%',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginBottom: '1rem',
                        border: '1px solid rgba(56,189,248,0.5)'
                    }}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                        </svg>
                    </div>
                    <h4 style={{ color: '#fff', fontSize: '1.2rem', fontWeight: '700', marginBottom: '0.5rem' }}>Proof of Life</h4>
                    <p style={{ color: '#94a3b8', fontSize: '0.9rem', maxWidth: '250px' }}>
                        Drop your 5-10s MP4/GIF here to show the autonomous agent in action.
                    </p>
                </div>
            </div>
        </div>
    );
}
