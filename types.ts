import React from 'react';

// Fix: Corrected the global definition for 'ion-icon' to allow name and other HTML attributes.
declare global {
    namespace JSX {
        interface IntrinsicElements {
            'ion-icon': React.DetailedHTMLProps<
                React.HTMLAttributes<HTMLElement> & {
                    name: string;
                },
                HTMLElement
            >;
        }
    }
}

export type Theme = 'light' | 'dark' | 'system';

export interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDarkMode: boolean;
}

export interface PricingPlan {
    name: string;
    price: string;
    description: string;
    features: string[];
    isPopular: boolean;
}

export interface CaseStudy {
    id: number;
    title: string;
    company: string;
    category: string;
    imageUrl: string;
    beforeImageUrl: string;
    afterImageUrl: string;
    problem: string;
    solution: string;
    outcome: string;
    metrics: { label: string; value: string; change: string }[];
}

export interface Testimonial {
    quote: string;
    name: string;
    title: string;
    company: string;
    avatarUrl: string;
}