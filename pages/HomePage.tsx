import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import type { Testimonial } from '../types';
import useAnimatedCounter from '../hooks/useAnimatedCounter';
import useOnScreen from '../hooks/useOnScreen';

// --- Animated Counter Component ---
const AnimatedCounter: React.FC<{ value: number; label: string; suffix?: string }> = ({ value, label, suffix = "" }) => {
  const ref = useRef<HTMLDivElement>(null);
  const count = useAnimatedCounter(ref, value, 2000);

  return (
    <div ref={ref} className="text-center group">
      <p className="text-4xl md:text-5xl font-bold text-av-text-dark dark:text-white transition-all duration-300 group-hover:drop-shadow-[0_0_8px_#6A5AE0]">
        {count.toLocaleString()}
        {suffix}
      </p>
      <p className="mt-1 text-sm md:text-base text-av-text-dark-secondary dark:text-av-medium-gray uppercase tracking-wider">
        {label}
      </p>
    </div>
  );
};

// --- KPI Bar Section ---
const KPIBar: React.FC = () => {
  return (
    <section className="py-16 bg-av-light-gray dark:bg-av-dark-slate/50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter value={1500} suffix="+" label="Apps Analyzed" />
          <AnimatedCounter value={42} label="Data Points per App" />
          <AnimatedCounter value={97} suffix="%" label="Insight Accuracy" />
          <AnimatedCounter value={12} suffix="M" label="Users Reached" />
        </div>
      </div>
    </section>
  );
};

// --- Feature Card Component ---
const FeatureCard: React.FC<{ icon: string; title: string; children: React.ReactNode }> = ({ icon, title, children }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-white/50 dark:bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl p-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="bg-gradient-to-br from-av-purple to-av-violet-blue text-white w-12 h-12 rounded-lg flex items-center justify-center">
        <ion-icon name={icon} className="w-6 h-6"></ion-icon>
      </div>
      <h3 className="mt-4 text-xl font-bold text-av-text-dark dark:text-white">{title}</h3>
      <p className="mt-2 text-av-text-dark-secondary dark:text-av-lavender">{children}</p>
    </div>
  );
};

// --- Features Section ---
const FeaturesSection: React.FC = () => {
  return (
    <section
      className="py-24 bg-cover bg-center"
      style={{ backgroundImage: "url('https://picsum.photos/seed/bg/1920/1080')" }}
    >
      <div className="absolute inset-0 bg-av-dark-slate/70"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white">What We Do</h2>
          <p className="mt-4 text-lg text-av-lavender">
            AppVersal provides instant, AI-driven analysis to supercharge your app's performance, user engagement, and market positioning.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard icon="analytics-outline" title="Instant Snapshots">
            Get a complete AI-generated report on any app in seconds. Understand strengths, weaknesses, and key opportunities at a glance.
          </FeatureCard>
          <FeatureCard icon="rocket-outline" title="Growth Metrics">
            Uncover actionable insights on user acquisition, retention, and monetization strategies used by top-performing apps.
          </FeatureCard>
          <FeatureCard icon="bulb-outline" title="Feature Analysis">
            Our AI breaks down app features, identifying what drives engagement and what users are missing.
          </FeatureCard>
          <FeatureCard icon="shield-checkmark-outline" title="Performance Benchmarking">
            See how your app stacks up against the competition with detailed performance and UX comparisons.
          </FeatureCard>
          <FeatureCard icon="code-slash-outline" title="Embeddable Widgets">
            Showcase your app's best features and reviews directly on your website with our beautiful, interactive widgets.
          </FeatureCard>
          <FeatureCard icon="color-palette-outline" title="UI/UX Teardown">
            Receive an automated analysis of an app's design system, usability, and overall user experience.
          </FeatureCard>
        </div>
      </div>
    </section>
  );
};

// --- Testimonial Card ---
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  const [ref, isVisible] = useOnScreen<HTMLDivElement>({ threshold: 0.2 });

  return (
    <div
      ref={ref}
      className={`bg-av-light-gray/80 dark:bg-av-dark-slate/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <p className="text-av-text-dark-secondary dark:text-av-lavender italic">"{testimonial.quote}"</p>
      <div className="flex items-center mt-6">
        <img src={testimonial.avatarUrl} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
        <div className="ml-4">
          <p className="font-bold text-av-text-dark dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-av-text-dark-secondary dark:text-av-medium-gray">
            {testimonial.title}, {testimonial.company}
          </p>
        </div>
      </div>
    </div>
  );
};

// --- Testimonials Section ---
const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      quote:
        "AppVersal's Snapshot feature is a game-changer. We identified three critical UX improvements in under five minutes. Incredible.",
      name: 'Sarah Jennings',
      title: 'Product Lead',
      company: 'Innovate Co.',
      avatarUrl: 'https://picsum.photos/seed/person1/100',
    },
    {
      quote:
        'The competitive benchmarking is brutally honest and incredibly useful. We now know exactly where to focus our development efforts.',
      name: 'Marcus Wei',
      title: 'Lead Developer',
      company: 'NextGen Apps',
      avatarUrl: 'https://picsum.photos/seed/person2/100',
    },
    {
      quote:
        "I love the embeddable widgets. They look fantastic on our landing page and have boosted our conversion rate by 15%.",
      name: 'Elena Rodriguez',
      title: 'Marketing Director',
      company: 'ConnectSphere',
      avatarUrl: 'https://picsum.photos/seed/person3/100',
    },
  ];

  return (
    <section className="relative py-24 bg-white dark:bg-av-dark-slate">
      <div
        className="absolute inset-0 hidden dark:block bg-cover bg-center"
        style={{ backgroundImage: "url('https://picsum.photos/seed/bg/1920/1080')" }}
      ></div>
      <div className="absolute inset-0 hidden dark:block bg-av-dark-slate/80"></div>
      <div className="container mx-auto px-6 relative">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold text-av-text-dark dark:text-white">
            Trusted by Industry Leaders
          </h2>
          <p className="mt-4 text-lg text-av-text-dark-secondary dark:text-av-medium-gray">
            Don't just take our word for it. Here's what our clients have to say.
          </p>
        </div>
        <div className="mt-16 grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <TestimonialCard key={i} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

// --- CTA Banner ---
const CTABanner: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-av-indigo via-av-purple to-av-violet-blue">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-extrabold text-white">Ready to See the Future?</h2>
        <p className="mt-4 text-lg text-av-lavender max-w-2xl mx-auto">
          Get your free, AI-powered app snapshot today and uncover insights that drive growth.
        </p>
        <div className="mt-8">
          <Link
            to="/snapshot"
            className="inline-block px-10 py-4 text-lg font-semibold text-av-purple bg-white rounded-full hover:scale-105 transform transition-transform duration-300 shadow-2xl"
          >
            Generate Snapshot
          </Link>
        </div>
      </div>
    </section>
  );
};

// --- Home Page ---
const HomePage: React.FC = () => {
  return (
    <div className="animate-fade-in-up">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white -mt-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-av-indigo via-av-dark-slate to-av-dark-slate opacity-50 z-10"></div>
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none opacity-60"
        >
          <source
            src="https://storage.googleapis.com/gtv-videos-bucket/sample/SubaruOutback.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <div className="relative z-20 container mx-auto px-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight leading-tight">
            Instant AI Insights
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-av-cyan to-av-sky-blue">
              For Any App.
            </span>
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-av-lavender">
            Uncover strengths, weaknesses, and growth opportunities with our AI-powered snapshot. Your competitive edge
            is one click away.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/snapshot"
              className="px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-av-purple to-av-violet-blue rounded-full hover:scale-105 transform transition-transform duration-300 shadow-lg"
            >
              Get Your Free Snapshot
            </Link>
            <Link
              to="/case-studies"
              className="px-8 py-3 text-lg font-semibold text-white bg-white/10 border border-white/20 rounded-full hover:bg-white/20 transform transition-colors duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      <KPIBar />
      <FeaturesSection />
      <TestimonialsSection />
      <CTABanner />
    </div>
  );
};

export default HomePage;