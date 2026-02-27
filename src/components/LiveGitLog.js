import React from 'react';

const fetchGitCommits = async () => {
    try {
        const res = await fetch('https://api.github.com/repos/kr1shnac/AutoClaw/commits', {
            next: { revalidate: 3600 } // Caches the response for 1 hour
        });

        if (!res.ok) return [];
        const data = await res.json();
        return data.slice(0, 3); // Grab the last 3 commits
    } catch (err) {
        console.error("Failed to fetch commits:", err);
        return [];
    }
};

const timeAgo = (dateStr) => {
    const date = new Date(dateStr);
    const now = new Date();
    const seconds = Math.floor((now - date) / 1000);

    let interval = seconds / 3600;
    if (interval > 1) {
        return Math.floor(interval) + " hours ago";
    }
    interval = seconds / 60;
    if (interval > 1) {
        return Math.floor(interval) + " minutes ago";
    }
    return "just now";
};

export default async function LiveGitLog() {
    const commits = await fetchGitCommits();

    return (
        <div style={{ background: '#020617', borderRadius: '16px', border: '1px solid #1e293b', overflow: 'hidden', boxShadow: '0 10px 30px -10px rgba(0, 0, 0, 0.5)' }}>
            {/* Terminal Header */}
            <div style={{ background: '#0f172a', padding: '0.75rem 1rem', display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #1e293b', justifyContent: 'space-between' }}>
                <div className="flex items-center gap-2">
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ef4444' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#eab308' }} />
                    <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#22c55e' }} />
                    <span style={{ marginLeft: '0.5rem', color: '#64748b', fontSize: '0.8rem', fontFamily: 'monospace', fontWeight: 'bold' }}>Live Git Log</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                    <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                    </span>
                    <span style={{ color: '#22c55e', fontSize: '0.7rem', fontWeight: '600' }}>v3.0.0</span>
                </div>
            </div>

            {/* Terminal Body */}
            <div style={{ padding: '1.25rem', fontFamily: 'monospace', fontSize: '0.85rem', color: '#cbd5e1', lineHeight: '1.6' }}>
                <div style={{ color: '#38bdf8', marginBottom: '1rem' }}>$ git log -n 3 --oneline</div>

                {commits.length === 0 ? (
                    <div style={{ color: '#64748b' }}>Waiting for updates...</div>
                ) : (
                    <div className="space-y-4">
                        {commits.map((c, i) => (
                            <div key={c.sha} className="flex flex-col border-l-2 border-[#1e293b] pl-3 relative">
                                <div style={{ position: 'absolute', left: '-5px', top: '5px', width: '8px', height: '8px', borderRadius: '50%', background: '#38bdf8' }} />
                                <div className="flex justify-between items-start gap-4">
                                    <span style={{ color: '#f8fafc', fontWeight: 'bold' }}>
                                        {c.commit.message.split('\n')[0]}
                                    </span>
                                    <span style={{ color: '#64748b', fontSize: '0.75rem', whiteSpace: 'nowrap' }}>
                                        {timeAgo(c.commit.author.date)}
                                    </span>
                                </div>
                                <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginTop: '2px' }}>
                                    <span style={{ color: '#ec4899' }}>{c.sha.substring(0, 7)}</span> • {c.commit.author.name}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
