
import React, { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);
    return (
        <div className="flex text-yellow-400 text-xl">
            {[...Array(fullStars)].map((_, i) => <ion-icon key={`full-${i}`} name="star"></ion-icon>)}
            {halfStar && <ion-icon name="star-half"></ion-icon>}
            {[...Array(emptyStars)].map((_, i) => <ion-icon key={`empty-${i}`} name="star-outline"></ion-icon>)}
        </div>
    );
};

const InteractiveWidgetPreview: React.FC = () => {
    const { isDarkMode: isSiteDarkMode } = useTheme();
    const [widgetTheme, setWidgetTheme] = useState<'light' | 'dark'>(isSiteDarkMode ? 'dark' : 'light');

    useEffect(() => {
        setWidgetTheme(isSiteDarkMode ? 'dark' : 'light')
    }, [isSiteDarkMode]);

    const themeClasses = {
        light: 'bg-white text-gray-900',
        dark: 'bg-gray-800 text-white'
    };
    const secondaryTextClasses = {
        light: 'text-gray-600',
        dark: 'text-gray-400'
    }

    return (
        <div className="w-full max-w-sm mx-auto">
            <div className={`p-6 rounded-2xl shadow-lg transition-colors duration-300 ${themeClasses[widgetTheme]}`}>
                <div className="flex items-center">
                    <img src="https://picsum.photos/seed/appicon/100" alt="App Icon" className="w-16 h-16 rounded-xl" />
                    <div className="ml-4">
                        <h4 className="font-bold text-lg">ExampleApp</h4>
                        <p className={`text-sm ${secondaryTextClasses[widgetTheme]}`}>Productivity Inc.</p>
                        <div className="flex items-center mt-1">
                            <StarRating rating={4.5} />
                            <span className={`ml-2 text-xs ${secondaryTextClasses[widgetTheme]}`}>(1.2k Reviews)</span>
                        </div>
                    </div>
                </div>
                <p className={`mt-4 text-sm ${widgetTheme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>"The best productivity app I've ever used. A must-have for any professional."</p>
                <button className="mt-4 w-full bg-blue-500 text-white font-semibold py-2 rounded-lg hover:bg-blue-600 transition-colors">Download Now</button>
            </div>
             <div className="mt-4 flex justify-center items-center space-x-2">
                <span className="text-sm font-medium text-av-text-dark-secondary dark:text-av-medium-gray">Preview mode:</span>
                <button onClick={() => setWidgetTheme('light')} className={`px-3 py-1 text-xs rounded-full transition-colors ${widgetTheme === 'light' ? 'bg-av-purple text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Light</button>
                <button onClick={() => setWidgetTheme('dark')} className={`px-3 py-1 text-xs rounded-full transition-colors ${widgetTheme === 'dark' ? 'bg-av-purple text-white' : 'bg-gray-200 dark:bg-gray-700'}`}>Dark</button>
            </div>
        </div>
    );
};

const CodeSnippet: React.FC<{ code: string }> = ({ code }) => {
    const [copied, setCopied] = useState(false);
    
    const handleCopy = () => {
        navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="bg-gray-900 rounded-lg relative">
            <pre className="text-sm text-white p-4 overflow-x-auto">
                <code>{code}</code>
            </pre>
            <button onClick={handleCopy} className="absolute top-2 right-2 bg-gray-700 text-white px-2 py-1 text-xs rounded hover:bg-gray-600 transition-colors">
                {copied ? 'Copied!' : 'Copy'}
            </button>
        </div>
    );
};


const WidgetsPage: React.FC = () => {
  const showcaseEmbedCode = `<div id="appversal-widget-container"></div>\n<script src="https://cdn.appversal.io/widget.js" data-app-id="12345" async defer></script>`;
  const carouselEmbedCode = `<div id="appversal-carousel-container"></div>\n<script src="https://cdn.appversal.io/carousel.js" data-app-id="12345" async defer></script>`;

  return (
    <div className="py-24 bg-white dark:bg-av-dark-slate">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-extrabold text-av-text-dark dark:text-white">Beautiful, Embeddable Widgets</h1>
            <p className="mt-4 text-lg text-av-text-dark-secondary dark:text-av-medium-gray">Showcase your app's success directly on your website. Our widgets are easy to install, customizable, and designed to convert.</p>
        </div>
        
        <div className="mt-16 grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-av-light-gray dark:bg-av-dark-slate/50 p-8 rounded-3xl flex flex-col items-center justify-center">
                <InteractiveWidgetPreview />
            </div>
            <div>
                <h2 className="text-3xl font-bold text-av-text-dark dark:text-white">App Showcase Widget</h2>
                <p className="mt-2 text-av-text-dark-secondary dark:text-av-lavender">Display your app's icon, rating, and top review in a clean, professional card. It's the perfect social proof to add to your landing page.</p>
                <div className="mt-6">
                    <h3 className="font-semibold text-lg text-av-text-dark dark:text-white mb-2">Embed Code</h3>
                    <CodeSnippet code={showcaseEmbedCode} />
                </div>
            </div>
        </div>

        <div className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
             <div>
                <h2 className="text-3xl font-bold text-av-text-dark dark:text-white">Review Carousel</h2>
                <p className="mt-2 text-av-text-dark-secondary dark:text-av-lavender">Dynamically display your best app store reviews in a sleek, auto-playing carousel. Keep your social proof fresh without lifting a finger.</p>
                <div className="mt-6">
                    <h3 className="font-semibold text-lg text-av-text-dark dark:text-white mb-2">Embed Code</h3>
                    <CodeSnippet code={carouselEmbedCode} />
                </div>
            </div>
            <div className="bg-av-light-gray dark:bg-av-dark-slate/50 p-8 rounded-3xl flex flex-col items-center justify-center">
                 <img src="https://picsum.photos/seed/carousel/400/200" alt="Carousel preview" className="rounded-lg shadow-xl" />
                 <p className="text-sm mt-4 text-av-text-dark-secondary dark:text-av-medium-gray">Live preview coming soon!</p>
            </div>
        </div>

      </div>
    </div>
  );
};

export default WidgetsPage;
