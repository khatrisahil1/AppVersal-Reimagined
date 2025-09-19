
import React, { useState } from 'react';

type Step = 'name' | 'email' | 'inquiry' | 'message' | 'submitted';

const ContactInfoCard: React.FC<{ icon: string; title: string; children: React.ReactNode; href?: string }> = ({ icon, title, children, href }) => {
    const content = (
        <>
            {/* Fix: Changed class to className to align with React's JSX typings for custom elements. */}
            <ion-icon name={icon} className="text-3xl text-av-cyan"></ion-icon>
            <h3 className="mt-2 font-semibold">{title}</h3>
            <p className="text-av-lavender text-sm">{children}</p>
        </>
    );

    if (href) {
        return <a href={href} className="text-center p-4 rounded-lg hover:bg-white/10 transition-colors duration-300">{content}</a>;
    }
    return <div className="text-center p-4">{content}</div>;
}

const ContactPage: React.FC = () => {
  const [step, setStep] = useState<Step>('name');
  const [formData, setFormData] = useState({
      name: '',
      email: '',
      inquiry: '',
      message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      const { name, value } = e.target;
      setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleNext = (e: React.FormEvent) => {
      e.preventDefault();
      switch (step) {
          case 'name':
              if (formData.name) setStep('email');
              break;
          case 'email':
              if (formData.email) setStep('inquiry');
              break;
          case 'inquiry':
              if (formData.inquiry) setStep('message');
              break;
          case 'message':
              if (formData.message) {
                // Mock submission
                console.log('Form Submitted:', formData);
                setStep('submitted');
              }
              break;
      }
  };

  return (
    <div className="bg-gradient-to-br from-av-indigo via-av-dark-slate to-av-dark-slate min-h-screen flex items-center justify-center py-24">
      <div className="container mx-auto px-6 text-white">
        <div className="text-center">
            {step !== 'submitted' ? (
                <>
                    <h1 className="text-4xl md:text-5xl font-extrabold">Let's talk.</h1>
                    <form onSubmit={handleNext} className="mt-12 max-w-xl mx-auto">
                        {step === 'name' && (
                            <div className="animate-fade-in-up">
                                <label htmlFor="name" className="text-2xl text-av-lavender">First, what should we call you?</label>
                                <input type="text" name="name" id="name" value={formData.name} onChange={handleInputChange} autoFocus
                                    className="mt-4 w-full bg-transparent border-b-2 border-av-medium-gray text-4xl text-center focus:outline-none focus:border-av-cyan transition-colors" />
                            </div>
                        )}
                        {step === 'email' && (
                             <div className="animate-fade-in-up">
                                <label htmlFor="email" className="text-2xl text-av-lavender">Great, {formData.name}. What's your email?</label>
                                <input type="email" name="email" id="email" value={formData.email} onChange={handleInputChange} autoFocus
                                    className="mt-4 w-full bg-transparent border-b-2 border-av-medium-gray text-4xl text-center focus:outline-none focus:border-av-cyan transition-colors" />
                            </div>
                        )}
                         {step === 'inquiry' && (
                             <div className="animate-fade-in-up">
                                <label htmlFor="inquiry" className="text-2xl text-av-lavender">How can we help you today?</label>
                                <select name="inquiry" id="inquiry" value={formData.inquiry} onChange={handleInputChange} autoFocus
                                    className="mt-4 w-full bg-transparent border-b-2 border-av-medium-gray text-4xl text-center focus:outline-none focus:border-av-cyan transition-colors appearance-none">
                                    <option value="" disabled className="bg-av-dark-slate">Select a topic...</option>
                                    <option value="enterprise" className="bg-av-dark-slate text-2xl">Enterprise Plan</option>
                                    <option value="support" className="bg-av-dark-slate text-2xl">Technical Support</option>
                                    <option value="partnership" className="bg-av-dark-slate text-2xl">Partnership</option>
                                    <option value="other" className="bg-av-dark-slate text-2xl">Something else</option>
                                </select>
                            </div>
                        )}
                         {step === 'message' && (
                             <div className="animate-fade-in-up">
                                <label htmlFor="message" className="text-2xl text-av-lavender">Tell us a bit more.</label>
                                <textarea name="message" id="message" value={formData.message} onChange={handleInputChange} autoFocus rows={3}
                                    className="mt-4 w-full bg-transparent border-b-2 border-av-medium-gray text-2xl text-center focus:outline-none focus:border-av-cyan transition-colors resize-none" />
                            </div>
                        )}
                        <button type="submit" className="mt-8 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-av-purple to-av-violet-blue rounded-full hover:scale-105 transform transition-transform duration-300">
                           Next
                        </button>
                    </form>
                </>
            ) : (
                <div className="animate-fade-in-up">
                    <h1 className="text-4xl md:text-5xl font-extrabold text-av-cyan">Thank You!</h1>
                    <p className="mt-4 text-xl text-av-lavender">We've received your message and will get back to you at {formData.email} shortly.</p>
                </div>
            )}
        </div>
        
        <div className="mt-24 pt-16 border-t border-white/10 max-w-4xl mx-auto text-left animate-fade-in-up">
            <h2 className="text-3xl font-bold text-center mb-8">Or Reach Us Directly</h2>
            <div className="grid md:grid-cols-3 gap-8 bg-white/5 backdrop-blur-sm p-8 rounded-2xl">
                <ContactInfoCard icon="location-outline" title="Our Office">
                    123 Innovation Drive<br/>Suite 404, Tech City
                </ContactInfoCard>
                <ContactInfoCard icon="mail-outline" title="Email Us" href="mailto:hello@appversal.io">
                    General: hello@appversal.io<br/>Support: support@appversal.io
                </ContactInfoCard>
                <ContactInfoCard icon="call-outline" title="Call Us" href="tel:+1234567890">
                    Mon-Fri, 9am - 5pm<br/>+1 (234) 567-890
                </ContactInfoCard>
            </div>
        </div>

      </div>
    </div>
  );
};

export default ContactPage;
