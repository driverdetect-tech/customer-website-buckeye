
import React, { useState } from 'react';
import { ContactFormData } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    subject: 'Auto Transport Inquiry',
    message: '',
    company: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
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
          Thank you for reaching out, {formData.fullName.split(' ')[0]}. One of our logistics specialists will contact you shortly with a customized quote.
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Full Name</label>
                <input
                  required
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] text-white transition-all outline-none"
                  placeholder="John Smith"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Email Address</label>
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
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Subject</label>
              <select
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] text-white transition-all outline-none"
              >
                <option className="bg-[#050505]">Auto Transport Inquiry</option>
                <option className="bg-[#050505]">Bulk Hauling Quote</option>
                <option className="bg-[#050505]">Service Update</option>
                <option className="bg-[#050505]">General Question</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-slate-500 ml-1">Your Message</label>
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-6 py-4 rounded-2xl bg-white/5 border border-white/10 focus:border-[#FF4D00] focus:ring-1 focus:ring-[#FF4D00] text-white transition-all outline-none resize-none"
                placeholder="Include vehicle details and preferred shipping dates..."
              ></textarea>
            </div>

            <button
              disabled={isSubmitting}
              type="submit"
              className={`w-full py-5 rounded-2xl font-bold text-lg transition-all transform active:scale-95 flex items-center justify-center gap-2 ${
                isSubmitting ? 'bg-slate-700 cursor-not-allowed' : 'bg-[#FF4D00] text-white hover:bg-white hover:text-black shadow-lg shadow-[#FF4D00]/20'
              }`}
            >
              {isSubmitting ? 'Sending Request...' : 'Get My Free Quote'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
