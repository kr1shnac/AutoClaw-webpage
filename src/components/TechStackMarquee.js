import React from 'react';

export default function TechStackMarquee() {
    const stack = [
        { name: 'Python', color: '#3776AB' },
        { name: 'Playwright', color: '#2EAD33' },
        { name: 'Ollama', color: '#FFFFFF' },
        { name: 'Llama 3.1', color: '#04A0DF' },
        { name: 'Gemini Vision', color: '#8E75B2' },
        { name: 'SQLite (WAL)', color: '#003B57' },
        { name: 'Streamlit', color: '#FF4B4B' },
        { name: 'Pydantic', color: '#E92063' },
    ];

    // We display the list multiple times to ensure smooth infinite scrolling even on ultra-wide screens
    const marqueeItems = [...stack, ...stack, ...stack, ...stack];

    return (
        <section className="py-8 w-full overflow-hidden border-y border-[rgba(255,255,255,0.05)] bg-[rgba(2,6,23,0.5)]">
            <div className="max-w-[1200px] mx-auto px-4 mb-4">
                <h3 style={{ fontSize: '0.9rem', color: '#64748b', textTransform: 'uppercase', letterSpacing: '2px', fontWeight: '700' }}>Engineered With</h3>
            </div>
            <div className="relative flex overflow-x-hidden w-full group">
                <div className="flex animate-marquee whitespace-nowrap min-w-full">
                    {marqueeItems.map((tech, index) => (
                        <div
                            key={index}
                            className="flex items-center mx-6 gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default"
                        >
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: tech.color, boxShadow: `0 0 10px ${tech.color}` }} />
                            <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: '600' }}>{tech.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
