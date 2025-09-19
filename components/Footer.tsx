import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode; tooltip: string }> = ({ href, children, tooltip }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative text-av-lavender hover:text-white transition-colors duration-300"
        data-tooltip={tooltip}
        aria-label={tooltip}
    >
        {children}
    </a>
);

const Footer: React.FC = () => {
    const sections = {
        'Product': [
            { name: 'Snapshot', path: '/snapshot' },
            { name: 'Widgets', path: '/widgets' },
            { name: 'Pricing', path: '/packages' },
        ],
        'Resources': [
            { name: 'Case Studies', path: '/case-studies' },
            { name: 'Blog', path: '#' },
            { name: 'Documentation', path: '#' },
        ],
        'Company': [
            { name: 'About Us', path: '#' },
            { name: 'Careers', path: '#' },
            { name: 'Contact', path: '/contact' },
        ]
    };

  return (
    <footer className="bg-av-text-dark text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
            <div className="col-span-2 lg:col-span-2">
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-av-purple to-av-sky-blue">AppVersal</h3>
                <p className="mt-2 text-av-lavender max-w-sm">Reimagining app analytics with AI-powered insights, delivered beautifully.</p>
            </div>
            {Object.entries(sections).map(([title, links]) => (
                <div key={title}>
                    <h4 className="font-semibold tracking-wider uppercase text-av-medium-gray">{title}</h4>
                    <ul className="mt-4 space-y-2">
                        {links.map(link => (
                            <li key={link.name}>
                                <Link to={link.path} className="text-av-lavender hover:text-white transition-colors duration-300">{link.name}</Link>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className="text-av-medium-gray text-sm">&copy; {new Date().getFullYear()} AppVersal, Inc. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
                {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                <SocialIcon href="#" tooltip="Follow us on Twitter"><ion-icon name="logo-twitter" className="w-6 h-6"></ion-icon></SocialIcon>
                {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                <SocialIcon href="#" tooltip="Our GitHub Repository"><ion-icon name="logo-github" className="w-6 h-6"></ion-icon></SocialIcon>
                {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
                <SocialIcon href="#" tooltip="Connect with us on LinkedIn"><ion-icon name="logo-linkedin" className="w-6 h-6"></ion-icon></SocialIcon>
            </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
