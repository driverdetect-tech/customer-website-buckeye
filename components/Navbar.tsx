
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 px-4 md:px-8">
      <div className="max-w-7xl mx-auto glass-dark rounded-full py-2 px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-[#FF4D00] rounded-full flex items-center justify-center p-2 group-hover:scale-110 transition-transform">
               <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white">
                 <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                 <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
            </div>
            <span className="text-xl font-bold text-white tracking-tighter group-hover:text-[#FF4D00] transition-colors">BUCKEYE TRUCK</span>
          </Link>
        </div>
        
        {/* Navigation links removed as per request */}

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="flex bg-white text-black px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#FF4D00] hover:text-white transition-all items-center gap-2"
          >
            Book a schedule 
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
