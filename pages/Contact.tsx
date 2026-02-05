
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const countries = [
  { code: 'US', dial_code: '+1', flag: '🇺🇸', name: 'United States' },
  { code: 'CA', dial_code: '+1', flag: '🇨🇦', name: 'Canada' },
  { code: 'GB', dial_code: '+44', flag: '🇬🇧', name: 'United Kingdom' },
  { code: 'AU', dial_code: '+61', flag: '🇦🇺', name: 'Australia' },
  { code: 'DE', dial_code: '+49', flag: '🇩🇪', name: 'Germany' },
  { code: 'FR', dial_code: '+33', flag: '🇫🇷', name: 'France' },
  { code: 'AE', dial_code: '+971', flag: '🇦🇪', name: 'UAE' },
  { code: 'MX', dial_code: '+52', flag: '🇲🇽', name: 'Mexico' },
  { code: 'BR', dial_code: '+55', flag: '🇧🇷', name: 'Brazil' },
  { code: 'CN', dial_code: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'IN', dial_code: '+91', flag: '🇮🇳', name: 'India' },
];

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    smsConsent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (submitted) {
    return (
      <div className="py-40 px-4 text-center max-w-2xl mx-auto min-h-screen">
        <div className="w-24 h-24 bg-[#FF4D00] text-white rounded-full flex items-center justify-center mx-auto mb-10 shadow-lg shadow-[#FF4D00]/20">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h2 className="text-5xl font-bold text-white mb-6 italic">Request Received!</h2>
        <p className="text-xl text-slate-400 mb-10">
          Thank you for reaching out, {formData.firstName}. One of our logistics specialists will contact you shortly with a customized quote.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="px-10 py-4 bg-white text-black rounded-full font-bold hover:bg-[#FF4D00] hover:text-white transition-all"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <div className="py-40 px-4 bg-[#050505] min-h-screen">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div>
          <span className="text-[#FF4D00] font-bold uppercase tracking-widest text-xs mb-4 block">Get In Touch</span>
          <h1 className="text-6xl font-bold text-white mb-8 leading-tight tracking-tighter">
            Ready to Move <br />
            <span className="text-slate-500 italic">Your Assets?</span>
          </h1>
          <p className="text-xl text-slate-400 mb-12 leading-relaxed">
            Fill out the form to get a personalized quote or to learn more about our nationwide car hauling services.
          </p>

          <div className="space-y-10">
            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#FF4D00]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Call Support</h4>
                <p className="text-slate-400">(314) 866-5805</p>
              </div>
            </div>

            <div className="flex items-start gap-6">
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 text-[#FF4D00]">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-white text-lg">Our Location</h4>
                <p className="text-slate-400">10701 E Winner Road Suite 220G,<br />Independence, MO 64052</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white/5 p-10 rounded-[40px] border border-white/10 backdrop-blur-xl">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white flex items-center gap-2">
              Get In Touch
            </h2>
            <p className="text-slate-400 mt-2">Input your information to learn about our services!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] text-white transition-all outline-none"
                  placeholder="John"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-300 ml-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  required
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] text-white transition-all outline-none"
                  placeholder="Doe"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] text-white transition-all outline-none"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-slate-300 ml-1">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-3">
                <div className="relative group">
                  <select
                    value={selectedCountry.code}
                    onChange={(e) => {
                      const country = countries.find(c => c.code === e.target.value);
                      if (country) setSelectedCountry(country);
                    }}
                    className="w-[100px] appearance-none px-4 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] text-white transition-all outline-none cursor-pointer"
                  >
                    {countries.map(country => (
                      <option key={country.code} value={country.code} className="bg-[#050505]">
                        {country.flag} {country.dial_code}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                    <svg className="h-4 w-4 fill-current" viewBox="0 0 20 20">
                      <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                    </svg>
                  </div>
                </div>
                <input
                  required
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="flex-1 px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] text-white transition-all outline-none"
                  placeholder="(555) 123-4567"
                />
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="flex items-center h-6">
                <input
                  id="smsConsent"
                  name="smsConsent"
                  type="checkbox"
                  checked={formData.smsConsent}
                  onChange={handleChange}
                  className="w-5 h-5 text-[#FF4D00] border-white/20 rounded bg-white/5 focus:ring-[#FF4D00] cursor-pointer"
                />
              </div>
              <label htmlFor="smsConsent" className="text-xs text-slate-400 leading-relaxed cursor-pointer select-none">
                By providing your phone number and checking this box, you agree to receive SMS messages from Buckeye Truck LLC including load status updates, delivery notifications, appointment reminders, application status updates, and DOT/FMCSA compliance alerts. Message frequency may vary. Standard Message and Data Rates may apply. Reply STOP to opt out. Reply HELP for help. Consent is not a condition of purchase. Your mobile information will not be sold or shared with third parties for promotional or marketing purposes.
              </label>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-3 ${isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-gradient-to-r from-[#FF4D00] to-[#FF3D4A] text-white hover:opacity-90 shadow-xl shadow-[#FF4D00]/20'
                }`}
            >
              <svg className="w-6 h-6 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
