"use client";

import React, { useState } from 'react';

export default function WaitlistForm() {
    const [email, setEmail] = useState('');

    return (
        <div style={{ marginTop: '2.5rem', width: '100%', maxWidth: '400px' }}>
            <p style={{ color: '#94a3b8', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: '500' }}>
                Enter your email to get early access.
            </p>
            {/* Configure action URL to point to Formspree when ready */}
            <form action="https://formspree.io/f/YOUR_FORM_ID" method="POST" className="flex items-center group relative">
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="hiringmanager@ycombinator.com"
                    required
                    style={{
                        flex: 1,
                        background: 'rgba(15,23,42,0.8)',
                        border: '1px solid rgba(255,255,255,0.1)',
                        padding: '0.8rem 1.25rem',
                        borderRadius: '999px 0 0 999px',
                        color: '#fff',
                        outline: 'none',
                        position: 'relative',
                        zIndex: 1,
                        borderRight: 'none',
                        fontSize: '0.95rem'
                    }}
                    className="focus:border-pink-500 transition-colors"
                />
                <button
                    type="submit"
                    style={{
                        background: 'var(--accent-gradient)',
                        padding: '0.8rem 1.75rem',
                        borderRadius: '0 999px 999px 0',
                        color: '#fff',
                        fontWeight: '700',
                        fontSize: '0.95rem',
                        border: 'none',
                        cursor: 'pointer',
                        position: 'relative',
                        zIndex: 1,
                        border: '1px solid rgba(255,255,255,0.1)',
                        borderLeft: 'none',
                        boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.3)',
                    }}
                    className="hover:opacity-90 transition-opacity"
                >
                    Join
                </button>
            </form>
        </div>
    );
}
