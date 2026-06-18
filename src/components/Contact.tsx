import React, { useState, useRef } from 'react';
import { socialLinks } from '../data/mockData';
import LucideIcon from './LucideIcon';
import { motion } from 'motion/react';
import HCaptcha from '@hcaptcha/react-hcaptcha';

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const captchaRef = useRef<any>(null);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    botcheck: false
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
    captcha: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error
    setFormErrors(prev => ({ ...prev, [name]: '', captcha: '' }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const onHCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    setFormErrors(prev => ({ ...prev, captcha: '' }));
  };

  const validateForm = () => {
    let isValid = true;
    const errors = { name: '', email: '', message: '', captcha: '' };

    if (!formData.name.trim()) {
      errors.name = 'Operational Name parameters are required.';
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim()) {
      errors.email = 'Secure destination Email is required.';
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      errors.email = 'Strict structural Email verification failed. Use format: node@host.domain';
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = 'Transmission payload message must have size > 0.';
      isValid = false;
    }

    if (!captchaToken) {
      errors.captcha = 'Security hCaptcha token validation is required.';
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    // Honeypot check
    if (formData.botcheck) {
      setStatus('success'); // Silently pretend success to bots
      return;
    }

    setStatus('submitting');
    setErrorMessage('');

    // Retrieve access key strictly from VITE env variable, or fall back to placeholder
    const activeAccessKey = (import.meta as any).env.VITE_WEB3FORMS_ACCESS_KEY || 'YOUR_WEB3FORMS_ACCESS_KEY';

    const transmissionPayload = {
      access_key: activeAccessKey,
      name: formData.name,
      email: formData.email,
      message: formData.message,
      subject: `Portfolio Contact from ${formData.name}`,
      from_name: "Portfolio Website",
      "h-captcha-response": captchaToken
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(transmissionPayload)
      });

      const result = await response.json();

      if (response.status === 200 || result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          message: '',
          botcheck: false
        });
        // Reset hCaptcha
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      } else {
        setStatus('error');
        setErrorMessage(result.message || 'Transmission failed over remote gateway routers.');
        // Reset hCaptcha
        captchaRef.current?.resetCaptcha();
        setCaptchaToken(null);
      }
    } catch (err: any) {
      setStatus('error');
      setErrorMessage('Endpoint timeout. Network interface could not resolve Web3Forms router nodes.');
      // Reset hCaptcha
      captchaRef.current?.resetCaptcha();
      setCaptchaToken(null);
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#0A0A0B] overflow-hidden border-t border-white/5">
      
      {/* Visual background details */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-[size:30px_30px]" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-white/2 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="contact-container">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="contact-headers-wrapper">
          <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
            Get In Touch
          </h2>
          <p className="font-serif text-3xl font-light text-white sm:text-4xl mt-3 tracking-wide">
            I am always open to opportunities, collaborations, and meaningful conversations.
          </p>
          <p className="text-white/50 text-sm mt-4 font-sans leading-relaxed">
            Have a project in mind or just want to connect?
          </p>
           <p className="text-white/50 text-sm mt-4 font-sans leading-relaxed">
            I would love to hear from you let us build something amazing together.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start max-w-5xl mx-auto" id="contact-grid-layout">
          
          {/* Left Column: Technical information & directions */}
          <div className="lg:col-span-5 space-y-6" id="contact-info-column">
            <div className="rounded border border-white/5 bg-white/[0.01] p-6 sm:p-8 space-y-6 shadow-sm">
              <h3 className="font-serif text-base italic text-white mb-4">
                Contact Information
              </h3>
              
              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 text-white/80 rounded">
                  <LucideIcon name="Mail" size={14} />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] text-[#717178] tracking-widest uppercase">EMAIL</h4>
                  <p className="font-sans text-sm font-normal text-white mt-1 select-all hover:text-white/80 transition-colors">
                    {socialLinks.email}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-2 bg-white/5 text-white/80 rounded">
                  <LucideIcon name="Globe" size={14} />
                </div>
                <div>
                  <h4 className="font-mono text-[9px] text-[#717178] tracking-widest uppercase">Address</h4>
                  <p className="font-sans text-sm font-normal text-white mt-1">
                    Bihar, India
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive HTML Form Validation */}
          <div className="lg:col-span-7" id="contact-form-column">
            
            <form 
              onSubmit={handleFormSubmit}
              className="rounded border border-white/5 bg-white/[0.01] p-6 sm:p-8 space-y-6 shadow-sm"
              id="web3forms-validated-form"
            >
              
              {/* anti-spam trap honeypot mechanism */}
              <input 
                type="checkbox" 
                name="botcheck" 
                onChange={handleCheckboxChange}
                checked={formData.botcheck}
                style={{ display: 'none' }} 
                tabIndex={-1} 
                autoComplete="off"
                className="hidden pointer-events-none"
              />

              {/* Name box input */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-wider text-white/60 block">
                  Your Name *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full bg-black border ${formErrors.name ? 'border-red-500/70' : 'border-white/10 focus:border-white/40'} rounded-sm px-4 py-3 font-sans text-sm text-white placeholder-white/20 focus:outline-none transition-all`}
                    placeholder="Enter full name or entity handle..."
                    required
                    id="form-input-name"
                  />
                  {formErrors.name && (
                    <p className="font-mono text-[10px] text-red-500 mt-1.5 flex items-center space-x-1">
                      <span>●</span>
                      <span>{formErrors.name}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Email box input */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-wider text-white/60 block">
                  Your Email *
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full bg-black border ${formErrors.email ? 'border-red-500/70' : 'border-white/10 focus:border-white/40'} rounded-sm px-4 py-3 font-sans text-sm text-white placeholder-white/20 focus:outline-none transition-all`}
                    placeholder="name@company.com"
                    required
                    id="form-input-email"
                  />
                  {formErrors.email && (
                    <p className="font-mono text-[10px] text-red-500 mt-1.5 flex items-center space-x-1">
                      <span>●</span>
                      <span>{formErrors.email}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Message box input */}
              <div className="space-y-1.5">
                <label className="font-sans text-[10px] uppercase tracking-wider text-white/60 block">
                  Message *
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`w-full bg-black border ${formErrors.message ? 'border-red-500/70' : 'border-white/10 focus:border-white/40'} rounded-sm px-4 py-3 font-sans text-sm text-white placeholder-white/20 focus:outline-none transition-all resize-none`}
                    placeholder="Detail your request, project dimensions, or collaboration boundaries..."
                    required
                    id="form-input-message"
                  />
                  {formErrors.message && (
                    <p className="font-mono text-[10px] text-red-500 mt-1.5 flex items-center space-x-1">
                      <span>●</span>
                      <span>{formErrors.message}</span>
                    </p>
                  )}
                </div>
              </div>

              {/* Captcha Validation Module using HCaptcha */}
              <div className="p-4 border border-white/5 bg-black rounded flex flex-col space-y-4" id="captcha-widget-container">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2.5">
                    <div className="h-5 w-5 bg-white/5 text-white/80 rounded flex items-center justify-center">
                      <LucideIcon name="ShieldCheck" size={11} />
                    </div>
                    <span className="font-sans text-xs text-[#A1A1AA]">
                      Security Captcha Handshake Required
                    </span>
                  </div>
                  <span className="font-mono text-[9px] text-white/30 uppercase tracking-widest text-right">
                    W3F GATEWAY READY
                  </span>
                </div>
                
                <div className="flex justify-center py-2 h-captcha-wrapper overflow-hidden max-w-full">
                  <HCaptcha
                    ref={captchaRef}
                    sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
                    onVerify={onHCaptchaChange}
                    theme="dark"
                  />
                </div>

                {formErrors.captcha && (
                  <p className="font-mono text-[10px] text-red-500 mt-1 flex items-center space-x-1 justify-center">
                    <span>●</span>
                    <span>{formErrors.captcha}</span>
                  </p>
                )}
              </div>

              {/* Submission Controls & Status Feedbacks */}
              <div className="space-y-4">
                
                {/* Submit trigger button */}
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className={`w-full inline-flex items-center justify-center space-x-2 bg-white text-black font-sans text-xs font-bold uppercase tracking-widest py-3.5 px-4 rounded-sm hover:bg-white/95 transition-all text-center cursor-pointer ${
                    status === 'submitting' ? 'opacity-50 cursor-not-allowed bg-white/70' : ''
                  }`}
                  id="form-submit-controller"
                >
                  {status === 'submitting' ? (
                    <>
                      <LucideIcon name="RefreshCw" size={12} className="animate-spin text-black" />
                      <span>Transmitting...</span>
                    </>
                  ) : (
                    <>
                      <LucideIcon name="Zap" size={12} className="text-black" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Submit Feedbacks status blocks */}
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded border border-emerald-500/20 bg-emerald-500/5 text-emerald-400 font-sans text-xs flex items-start space-x-2.5"
                    id="submit-status-success"
                  >
                    <span className="shrink-0 font-bold">✓</span>
                    <div>
                      <p className="font-bold">Transmission Successful.</p>
                      <p className="text-[11px] text-emerald-400/80 mt-0.5">
                        Your message has processed through the communication pipeline. Abhishek will establish contact shortly.
                      </p>
                    </div>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded border border-red-500/20 bg-red-500/5 text-red-400 font-sans text-xs flex items-start space-x-2.5"
                    id="submit-status-error"
                  >
                    <span className="shrink-0 font-bold">☠</span>
                    <div>
                      <p className="font-bold">Transmission Halted.</p>
                      <p className="text-[11px] text-red-500/80 mt-0.5">
                        {errorMessage}
                      </p>
                    </div>
                  </motion.div>
                )}

              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
