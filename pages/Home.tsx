
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="bg-[#050505]">
      {/* Hero Section */}
      <section className="relative pt-40 pb-20 px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-6xl md:text-8xl font-bold leading-tight mb-8 max-w-4xl tracking-tight">
              Bringing The <br />
              World Closer, Fast <br />
              <span className="text-white">Freight Solutions</span>
            </h1>

            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <div className="max-w-sm">
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Global logistics designed for speed, precision, and trust — powered by technology and driven by people.
                </p>
                <div className="flex items-center gap-3">
                  <Link to="/contact" className="bg-[#FF4D00] text-white px-8 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-white hover:text-[#FF4D00] transition-all">
                    Get a Quote
                  </Link>
                  <button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:border-[#FF4D00] transition-all group">
                    <svg className="w-5 h-5 group-hover:text-[#FF4D00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M7 17L17 7M17 7H7M17 7V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Counter Badges */}
              <div className="flex gap-4">
                <div className="bg-[#FF4D00] rounded-2xl p-6 min-w-[180px] relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-2 opacity-20">
                    <svg className="w-12 h-12" viewBox="0 0 24 24" fill="currentColor"><path d="M13 17h-2v-4h2v4zm0-6h-2V7h2v4zm1 10H5a2 2 0 01-2-2V5a2 2 0 012-2h14a2 2 0 012 2v16l-4-4z" /></svg>
                  </div>
                  <p className="text-xs uppercase font-bold text-white/80 mb-4">Shipments<br />Delivered</p>
                  <p className="text-5xl font-extrabold">20k<span className="text-white/60">+</span></p>
                </div>
                <div className="bg-white text-black rounded-2xl p-6 min-w-[180px]">
                  <p className="text-xs uppercase font-bold text-black/60 mb-4">States<br />Covered</p>
                  <p className="text-5xl font-extrabold">50<span className="text-black/30"></span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Image Block - High-quality Red truck matching reference */}
          <div className="relative rounded-[40px] overflow-hidden aspect-[21/9] bg-[#111] shadow-2xl shadow-[#FF4D00]/5">
            <img
              src="/truck_fleet.png"
              alt="Vibrant red semi truck on the open road"
              className="w-full h-full object-cover opacity-90 transition-opacity duration-1000"
              onLoad={(e) => (e.currentTarget.style.opacity = '1')}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 px-4 md:px-8 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-5xl font-bold mb-10 leading-tight">
              Empowering Global <span className="text-slate-500">Trade with</span> <br />
              Smarter Logistics
            </h2>
            <p className="text-xl text-slate-400 leading-relaxed mb-8">
              Buckeye Truck LLC is a trusted trucking company specializing in hauling cars to retail customers across the United States. We provide exceptional Customer Support with order information, service updates, and guidance throughout the entire process.
            </p>
            <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-sm text-slate-400 italic">
                "When you consent to receive messaging from Buckeye Truck LLC, you are providing it only to Buckeye Truck LLC, not any third parties. Your SMS opt-in data will never be shared/sold to third parties."
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="h-64 rounded-3xl overflow-hidden border border-white/10 bg-[#111]">
                <img
                  src="/red_truck_driving.png"
                  className="w-full h-full object-cover opacity-90"
                  alt="Red semi truck driving perspective"
                />
              </div>
              <div className="bg-[#FF4D00] aspect-square rounded-3xl p-8 flex flex-col justify-end">
                <span className="text-5xl font-bold mb-2">05k+</span>
                <span className="text-sm font-semibold uppercase tracking-widest">Clients Served</span>
              </div>
            </div>
            <div className="space-y-4 pt-12">
              <div className="bg-white/5 aspect-square rounded-3xl p-8 flex flex-col justify-end border border-white/10">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-[#FF4D00]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </div>
                <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">Expand Your Reach</span>
              </div>
              <div className="h-64 rounded-3xl overflow-hidden border border-white/10 bg-[#111]">
                <img
                  src="/truck_detail.png"
                  className="w-full h-full object-cover opacity-90"
                  alt="Truck detail shot"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-32 px-4 md:px-8 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <h2 className="text-5xl font-bold">Why Choose Us? Core <br /><span className="text-slate-500">Values</span> That Deliver</h2>
            <Link to="/contact" className="text-[#FF4D00] font-bold flex items-center gap-2 group">
              Get A Quote Today
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M17 8l4 4m0 0l-4 4m4-4H3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: 'Auto Transport', desc: 'Professional car hauling services across the United States', icon: 'M9 17a2 2 0 11-4 0 2 2 0 014 0zM19 17a2 2 0 11-4 0 2 2 0 014 0z' },
              { title: 'Fully Insured', desc: 'Complete coverage for peace of mind during transport', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
              { title: 'Customer Support', desc: 'Dedicated team ready to assist with your needs', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
              { title: 'Nationwide', desc: 'Serving customers throughout the continental US', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z' }
            ].map((f, i) => (
              <div key={i} className="p-10 bg-white/5 rounded-3xl border border-white/5 hover:border-[#FF4D00]/30 transition-all hover:-translate-y-2 group">
                <div className="w-14 h-14 bg-[#FF4D00]/10 text-[#FF4D00] rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#FF4D00] group-hover:text-white transition-all">
                  <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={f.icon} /></svg>
                </div>
                <h3 className="text-xl font-bold mb-4">{f.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Banner */}
      <section className="py-16 border-y border-white/5 overflow-hidden bg-white">
        <div className="flex whitespace-nowrap animate-pulse">
          {[...Array(10)].map((_, i) => (
            <span key={i} className="text-black text-2xl font-black uppercase tracking-tighter mx-10 italic">
              Fast Delivery • Reliable Service • Secure Transport • Professional Support •
            </span>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 md:px-8 text-center bg-gradient-to-b from-transparent to-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold mb-8 italic">Ready to optimize your transport?</h2>
          <p className="text-xl text-slate-400 mb-12">Join the thousands of retail customers who trust Buckeye Truck LLC for their nationwide hauling needs.</p>
          <Link to="/contact" className="inline-block bg-[#FF4D00] text-white px-12 py-5 rounded-full font-bold text-lg hover:bg-white hover:text-black transition-all transform hover:scale-105">
            Book Your Schedule
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
