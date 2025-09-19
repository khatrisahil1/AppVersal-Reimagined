
import React, { useState } from 'react';
import useOnScreen from '../hooks/useOnScreen';

// --- Skeleton Loader ---
const SkeletonLoader: React.FC = () => (
    <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 animate-pulse">
        <div className="h-6 bg-slate-700 rounded w-3/4 mb-4"></div>
        <div className="space-y-3">
            <div className="h-4 bg-slate-700 rounded"></div>
            <div className="h-4 bg-slate-700 rounded w-5/6"></div>
            <div className="h-4 bg-slate-700 rounded w-2/3"></div>
        </div>
        <div className="h-8 bg-slate-700 rounded w-1/2 mt-6"></div>
    </div>
);

// --- Insight Panel ---
const InsightPanel: React.FC = () => {
    const insights = {
        title: "AI-Powered Analysis for 'ExampleApp'",
        summary: "ExampleApp demonstrates strong user retention but shows potential for improvement in its onboarding flow and monetization strategy. Key opportunities lie in simplifying the initial user experience and introducing a tiered subscription model.",
        strengths: ["High daily active user engagement.", "Robust and stable core feature set.", "Positive sentiment in user reviews regarding performance."],
        opportunities: ["Simplify the 3-step sign-up process to a single step.", "Introduce a 'Pro' tier with exclusive features to increase LTV.", "Gamify the tutorial to improve feature discovery by new users."]
    };

    return (
        <div className="bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-8 text-white animate-fade-in-up">
            <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-av-cyan to-av-sky-blue">{insights.title}</h3>
            <p className="mt-4 text-av-lavender">{insights.summary}</p>
            
            <div className="mt-8 grid md:grid-cols-2 gap-8">
                <div>
                    {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                    <h4 className="font-semibold text-lg text-av-success flex items-center"><ion-icon name="checkmark-circle-outline" className="mr-2 text-xl"></ion-icon>Key Strengths</h4>
                    <ul className="mt-2 list-disc list-inside text-av-lavender space-y-1">
                        {insights.strengths.map((s, i) => <li key={i}>{s}</li>)}
                    </ul>
                </div>
                <div>
                    {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                    <h4 className="font-semibold text-lg text-av-warning flex items-center"><ion-icon name="trending-up-outline" className="mr-2 text-xl"></ion-icon>Growth Opportunities</h4>
                    <ul className="mt-2 list-disc list-inside text-av-lavender space-y-1">
                        {insights.opportunities.map((o, i) => <li key={i}>{o}</li>)}
                    </ul>
                </div>
            </div>

            <div className="mt-8 flex items-center space-x-4">
                <button className="px-5 py-2 text-sm font-semibold text-white bg-white/20 rounded-full hover:bg-white/30 transition-colors">Copy Insights</button>
                <button className="px-5 py-2 text-sm font-semibold text-white bg-white/20 rounded-full hover:bg-white/30 transition-colors">Share</button>
                <button className="px-5 py-2 text-sm font-semibold text-white bg-white/20 rounded-full hover:bg-white/30 transition-colors">Email Report</button>
            </div>
        </div>
    );
};


const SnapshotPage: React.FC = () => {
  const [appId, setAppId] = useState('');
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!appId) {
        setError('Please enter an App ID or URL.');
        setStatus('error');
        return;
    }
    setError('');
    setStatus('loading');
    setTimeout(() => {
        // Mock API call
        setStatus('success');
    }, 3000);
  };

  // Fix: Specify the element type for useOnScreen to match the div ref.
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1, rootMargin: "-100px" });

  return (
    <div className="bg-gradient-to-br from-av-indigo via-av-dark-slate to-av-dark-slate py-24 min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-white">Get Your Instant AI Snapshot</h1>
            <p className="mt-4 text-lg text-av-lavender">Enter any App Store or Google Play URL to receive a comprehensive analysis in seconds. No sign-up required for your first report.</p>
        </div>

        <div className="max-w-2xl mx-auto mt-12">
            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-md p-4 rounded-full border border-white/20 flex items-center gap-4 shadow-2xl">
                {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                <ion-icon name="search-outline" className="text-2xl text-av-lavender ml-2"></ion-icon>
                <input
                    type="text"
                    value={appId}
                    onChange={(e) => setAppId(e.target.value)}
                    placeholder="Enter App Store or Google Play URL..."
                    className="w-full bg-transparent text-white placeholder-av-medium-gray focus:outline-none"
                    disabled={status === 'loading'}
                />
                <button type="submit" className="px-6 py-3 text-sm font-semibold text-white bg-gradient-to-r from-av-purple to-av-violet-blue rounded-full hover:scale-105 transform transition-transform duration-300 disabled:opacity-50 disabled:cursor-not-allowed" disabled={status === 'loading'}>
                    {status === 'loading' ? 'Analyzing...' : 'Generate'}
                </button>
            </form>
            {status === 'error' && <p className="text-center text-av-error mt-4">{error}</p>}
        </div>

        <div ref={ref} className="mt-16 max-w-4xl mx-auto transition-opacity duration-1000" style={{ opacity: isVisible ? 1 : 0}}>
             {status === 'loading' && <SkeletonLoader />}
             {status === 'success' && <InsightPanel />}
        </div>
      </div>
    </div>
  );
};

export default SnapshotPage;
