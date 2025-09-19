import React, { useState } from 'react';
import type { CaseStudy } from '../types';
import useOnScreen from '../hooks/useOnScreen';

// Dummy Data
const caseStudies: CaseStudy[] = [
    {
        id: 1,
        title: "Boosting Engagement for a Social Fitness App",
        company: "FitLife",
        category: "User Retention",
        imageUrl: "https://picsum.photos/seed/casestudy1/800/600",
        beforeImageUrl: "https://picsum.photos/seed/before1/800/600?grayscale",
        afterImageUrl: "https://picsum.photos/seed/after1/800/600",
        problem: "FitLife had a high user drop-off rate after the first week. Our AI snapshot identified a complex onboarding process and lack of community features.",
        solution: "We recommended a gamified tutorial and the introduction of social 'Challenges'. The UI was simplified based on our automated UX teardown.",
        outcome: "The changes led to a dramatic increase in user stickiness and organic growth through friend invites.",
        metrics: [
            { label: "Weekly Retention", value: "+45%", change: "increase" },
            { label: "Session Duration", value: "+12 mins", change: "increase" },
            { label: "User Referrals", value: "+200%", change: "increase" },
        ]
    },
    {
        id: 2,
        title: "Optimizing Conversion for a FinTech App",
        company: "CoinStack",
        category: "Monetization",
        imageUrl: "https://picsum.photos/seed/casestudy2/800/600",
        beforeImageUrl: "https://picsum.photos/seed/before2/800/600?grayscale",
        afterImageUrl: "https://picsum.photos/seed/after2/800/600",
        problem: "CoinStack struggled to convert free users to their premium subscription. The value proposition was unclear and the upgrade path was buried in settings.",
        solution: "Our analysis suggested highlighting premium features contextually within the app and simplifying the checkout flow. A new pricing page was designed based on competitor analysis.",
        outcome: "The app saw a significant lift in subscription revenue and a higher average revenue per user (ARPU).",
        metrics: [
            { label: "Free-to-Paid Conversion", value: "+78%", change: "increase" },
            { label: "ARPU", value: "+$2.50", change: "increase" },
            { label: "Churn Rate", value: "-15%", change: "decrease" },
        ]
    }
];

// Before/After Slider Component
const BeforeAfterSlider: React.FC<{ before: string; after: string }> = ({ before, after }) => {
    const [sliderValue, setSliderValue] = useState(50);

    return (
        <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg group">
            <img src={after} alt="After" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 w-full h-full" style={{ clipPath: `polygon(0 0, ${sliderValue}% 0, ${sliderValue}% 100%, 0 100%)` }}>
                <img src={before} alt="Before" className="w-full h-full object-cover" />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="h-full w-1 bg-white/50 absolute" style={{ left: `${sliderValue}%` }}>
                    <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center cursor-pointer text-av-dark-slate">
                        <ion-icon name="caret-back-outline"></ion-icon>
                        <ion-icon name="caret-forward-outline"></ion-icon>
                    </div>
                </div>
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="w-full h-full absolute appearance-none bg-transparent cursor-pointer"
                />
            </div>
            <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded">BEFORE</div>
            <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">AFTER</div>
        </div>
    );
};

// Case Card Component
const CaseCard: React.FC<{ study: CaseStudy }> = ({ study }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div ref={ref} className={`bg-white dark:bg-av-dark-slate/80 rounded-2xl shadow-xl overflow-hidden transition-all duration-700 ease-out hover:scale-105 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <BeforeAfterSlider before={study.beforeImageUrl} after={study.afterImageUrl} />
            <div className="p-6">
                <p className="text-sm font-semibold text-av-purple dark:text-av-cyan">{study.category}</p>
                <h3 className="mt-2 text-2xl font-bold text-av-text-dark dark:text-white">{study.title}</h3>
                <p className="mt-2 text-av-text-dark-secondary dark:text-av-lavender">{study.problem}</p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    {study.metrics.map(metric => (
                        <div key={metric.label}>
                            <p className="text-2xl font-bold text-av-success">{metric.value}</p>
                            <p className="text-xs text-av-text-dark-secondary dark:text-av-medium-gray uppercase tracking-wider">{metric.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};


const CaseStudiesPage: React.FC = () => {
  return (
    <div className="bg-av-light-gray dark:bg-av-dark-slate">
        <div className="container mx-auto px-6 py-24">
            <div className="text-center max-w-3xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-extrabold text-av-text-dark dark:text-white">Real Results, Real Growth</h1>
                <p className="mt-4 text-lg text-av-text-dark-secondary dark:text-av-medium-gray">See how our AI-powered insights have transformed businesses and driven measurable success for apps across industries.</p>
            </div>

            <div className="mt-16 grid lg:grid-cols-2 gap-12">
                {caseStudies.map(study => <CaseCard key={study.id} study={study} />)}
            </div>
        </div>
    </div>
  );
};

export default CaseStudiesPage;