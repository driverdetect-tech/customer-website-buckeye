
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050505] text-slate-300 py-20 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        <div className="col-span-1 lg:col-span-1">
          <Link to="/" className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 bg-[#FF4D00] rounded-full flex items-center justify-center p-2">
              <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tighter">BUCKEYE TRUCK</span>
          </Link>
          <div className="space-y-4 text-sm text-slate-400">
            <p><strong>MC Number:</strong> 1269864</p>
            <p><strong>DOT Number:</strong> 3666726</p>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-[#FF4D00]">Company</h4>
          <ul className="space-y-4 text-sm">
            <li><Link to="/" className="hover:text-[#FF4D00] transition-colors">Home</Link></li>
            <li><Link to="/contact" className="hover:text-[#FF4D00] transition-colors">Get In Touch</Link></li>
            <li><Link to="/terms" className="hover:text-[#FF4D00] transition-colors">Terms of Service</Link></li>
            <li><Link to="/privacy" className="hover:text-[#FF4D00] transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-[#FF4D00]">Contact Info</h4>
          <ul className="space-y-4 text-sm text-slate-400">
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#FF4D00] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" strokeWidth="2" /></svg>
              <span>(314) 866-5805</span>
            </li>
            <li className="flex items-start gap-3">
              <svg className="w-5 h-5 text-[#FF4D00] mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" strokeWidth="2" /></svg>
              <span>buckeye.driverdetect.io</span>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs text-[#FF4D00]">HQ Office</h4>
          <p className="text-sm text-slate-400 leading-relaxed">
            10701 E Winner Road Suite 220G,<br />
            Independence, MO 64052
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
        <p>&copy; {new Date().getFullYear()} Buckeye Truck LLC. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">Twitter</a>
          <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-white transition-colors">Facebook</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
