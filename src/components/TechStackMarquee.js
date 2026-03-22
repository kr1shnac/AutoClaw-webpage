import React from 'react';

export default function TechStackMarquee() {
    const stack = [
        { name: 'Next.js 14', color: '#FFFFFF' },
        { name: 'Tailwind CSS', color: '#38bdf8' },
        { name: 'FastAPI', color: '#009688' },
        { name: 'Playwright', color: '#2EAD33' },
        { name: 'PostgreSQL', color: '#336791' },
        { name: 'Redis', color: '#DC382D' },
        { name: 'Gemini 2.0 Flash', color: '#8E75B2' },
        { name: 'Docker', color: '#2496ED' },
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
