
import React from 'react';
import type { PricingPlan } from '../types';
import useOnScreen from '../hooks/useOnScreen';

const pricingPlans: PricingPlan[] = [
    {
        name: 'Starter',
        price: 'Free',
        description: 'For individuals and hobbyists getting started.',
        features: ['1 Free Snapshot', 'Basic Analysis', 'Email Support'],
        isPopular: false,
    },
    {
        name: 'Pro',
        price: '$49',
        description: 'For professionals and small teams that need more power.',
        features: ['25 Snapshots/mo', 'Advanced AI Insights', 'Competitor Tracking', 'Embeddable Widgets', 'Priority Support'],
        isPopular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        description: 'For large organizations with specific needs.',
        features: ['Unlimited Snapshots', 'API Access', 'Custom Integrations', 'Dedicated Account Manager', 'SLA & Security Review'],
        isPopular: false,
    },
];

const PricingCard: React.FC<{ plan: PricingPlan, index: number }> = ({ plan, index }) => {
    const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.1 });

    return (
        <div 
            ref={ref}
            className={`relative border rounded-2xl p-8 flex flex-col transition-all duration-700 ease-out ${
                plan.isPopular 
                    ? 'border-av-purple shadow-2xl scale-105 bg-av-light-gray dark:bg-av-dark-slate' 
                    : 'border-gray-200 dark:border-gray-700 bg-av-light-gray/50 dark:bg-av-dark-slate/80'
            } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            {plan.isPopular && <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 bg-av-purple text-white text-xs font-bold px-4 py-1 rounded-full uppercase">Most Popular</div>}
            
            <h3 className="text-2xl font-bold text-av-text-dark dark:text-white">{plan.name}</h3>
            <p className="mt-2 text-av-text-dark-secondary dark:text-av-medium-gray">{plan.description}</p>
            
            <div className="mt-6">
                <span className="text-5xl font-extrabold text-av-text-dark dark:text-white">{plan.price}</span>
                {plan.price !== 'Free' && plan.price !== 'Custom' && <span className="text-av-text-dark-secondary dark:text-av-medium-gray">/mo</span>}
            </div>

            <ul className="mt-8 space-y-4 text-av-text-dark-secondary dark:text-av-lavender flex-grow">
                {plan.features.map(feature => (
                    <li key={feature} className="flex items-center">
                        {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                        <ion-icon name="checkmark-circle" className="text-av-purple mr-3 text-lg"></ion-icon>
                        <span>{feature}</span>
                    </li>
                ))}
            </ul>

            <button className={`w-full mt-10 py-3 font-semibold rounded-full transition-all duration-300 transform hover:scale-105 ${plan.isPopular ? 'bg-gradient-to-r from-av-purple to-av-violet-blue text-white' : 'bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-av-text-dark dark:text-white'}`}>
                {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
            </button>
        </div>
    );
};

const PricingPage: React.FC = () => {
  return (
    <div className="py-24 bg-white dark:bg-av-dark-slate">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-av-text-dark dark:text-white">Find the Perfect Plan</h1>
            <p className="mt-4 text-lg text-av-text-dark-secondary dark:text-av-medium-gray">Start for free, then scale as you grow. All plans include our core AI analysis engine.</p>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto items-start">
            {pricingPlans.map((plan, i) => <PricingCard key={plan.name} plan={plan} index={i} />)}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
