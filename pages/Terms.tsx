
import React from 'react';

const Terms: React.FC = () => {
  return (
    <div className="py-40 px-4 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 italic tracking-tighter uppercase">Terms of Service</h1>
        <p className="text-[#FF4D00] font-bold tracking-widest uppercase text-sm">Buckeye Truck LLC</p>
      </div>

      <div className="prose prose-invert max-w-none text-slate-400 leading-relaxed space-y-12">
        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#FF4D00]">1.</span> COMPANY INFORMATION
          </h2>
          <div className="grid md:grid-cols-2 gap-6 bg-white/5 p-6 rounded-2xl border border-white/5">
            <div className="space-y-2">
              <p><span className="text-white font-semibold">Company Name:</span> Buckeye Truck LLC</p>
              <p><span className="text-white font-semibold">MC Number:</span> 1269864</p>
              <p><span className="text-white font-semibold">DOT Number:</span> 3666726</p>
            </div>
            <div className="space-y-2">
              <p><span className="text-white font-semibold">Telephone:</span> (314) 866-5805</p>
              <p><span className="text-white font-semibold">Website:</span> www.robertson-trucks.com</p>
              <p><span className="text-white font-semibold">Mailing Address:</span> 10701 E Winner Road Suite 220G, Independence, MO 64052</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">2.</span> ACCEPTANCE OF TERMS
          </h2>
          <p>
            By accessing or using the services provided by Buckeye Truck LLC ("Company," "we," "us," or "our"), including but not limited to our website, mobile applications, SMS/text messaging services, and transportation services, you ("User," "you," or "your") agree to be bound by these Terms of Service ("Terms"). If you do not agree to these Terms, please do not use our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">3.</span> DESCRIPTION OF SERVICES
          </h2>
          <p>
            Buckeye Truck LLC provides freight transportation, trucking, logistics, and related services. We may communicate with you regarding our services through various channels, including but not limited to email, telephone, and SMS/text messaging, but only after obtaining your explicit consent.
          </p>
        </section>

        <section className="space-y-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">4.</span> SMS/TEXT MESSAGING TERMS AND CONDITIONS
          </h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-white mb-3 italic">4.1 Program Description</h3>
              <p className="mb-4">Buckeye Truck LLC offers an SMS/text messaging program to provide you with important updates related to our transportation services and employment opportunities. By opting in, you consent to receive automated text messages related to:</p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h4 className="text-[#FF4D00] font-bold text-xs uppercase mb-3">Operational</h4>
                  <ul className="text-xs space-y-2 list-disc pl-4">
                    <li>Load status updates</li>
                    <li>Delivery confirmations</li>
                    <li>Account notifications</li>
                    <li>Appointment reminders</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h4 className="text-[#FF4D00] font-bold text-xs uppercase mb-3">Recruitment</h4>
                  <ul className="text-xs space-y-2 list-disc pl-4">
                    <li>Application status</li>
                    <li>Interview scheduling</li>
                    <li>Opportunity notifications</li>
                    <li>Onboarding steps</li>
                  </ul>
                </div>
                <div className="bg-white/5 p-5 rounded-xl border border-white/5">
                  <h4 className="text-[#FF4D00] font-bold text-xs uppercase mb-3">Compliance</h4>
                  <ul className="text-xs space-y-2 list-disc pl-4">
                    <li>FMCSA/DOT updates</li>
                    <li>Safety reminders</li>
                    <li>License renewals</li>
                    <li>HOS compliance</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-[#FF4D00]/10 p-6 rounded-2xl border border-[#FF4D00]/20">
              <h3 className="text-lg font-bold text-white mb-3 italic">4.2 Consent Requirement — We Will Never Contact You Without Your Permission</h3>
              <p className="text-slate-300 font-semibold mb-3 underline uppercase">IMPORTANT: Buckeye Truck LLC will NEVER send you unsolicited text messages.</p>
              <p>We will only send SMS/text messages to you after you have provided your explicit opt-in consent. We do not send spam, purchase phone lists, or engage in deceptive practices.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-3 italic">4.3 Message Frequency</h3>
                <p>Message frequency varies based on interaction. You may receive approximately 2-10 messages per month.</p>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h3 className="text-lg font-bold text-white mb-3 italic">4.4 Opt-In Consent</h3>
                <p>By providing your number, you expressly consent to receive recurring automated SMS. Consent is voluntary and revocable.</p>
              </div>
            </div>

            <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
              <h3 className="text-lg font-bold text-white mb-3 italic">4.5 Opt-Out & 4.6 Support</h3>
              <p>Opt out anytime by replying <span className="text-white font-bold">STOP</span>, UNSUBSCRIBE, or QUIT. Reply <span className="text-white font-bold">HELP</span> for support, visit our website, or call (314) 866-5805.</p>
            </div>
            
            <p className="text-sm">4.7 Message and data rates may apply. 4.8 No mobile information will be shared with third parties for marketing purposes.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">5.</span> ANTI-SPAM COMMITMENT
          </h2>
          <p>
            Buckeye Truck LLC is committed to responsible messaging. We strictly prohibit unsolicited commercial messages (spam) and comply with all applicable regulations including TCPA and CTIA best practices.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-12 border-t border-white/10 pt-12">
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#FF4D00]">6.</span> USER RESPONSIBILITIES
            </h2>
            <p className="text-sm">Users must provide accurate information, maintain account confidentiality, notify us of unauthorized use, and comply with all lawful use regulations.</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
              <span className="text-[#FF4D00]">7.</span> PROHIBITED USES
            </h2>
            <p className="text-sm">You may not violate laws, transmit objectionable content, disrupt services, impersonate entities, or damage our infrastructure in any way.</p>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">8.</span> INTELLECTUAL PROPERTY
          </h2>
          <p>
            All content, trademarks, logos, and intellectual property are the property of Buckeye Truck LLC or their respective owners. Reproduction without consent is prohibited.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-8">
           <section className="bg-white/5 p-8 rounded-3xl border border-white/5">
             <h2 className="text-xl font-bold text-white mb-4">9. DISCLAIMER</h2>
             <p className="text-xs uppercase leading-relaxed">Our services are provided "as is" and "as available" without warranties of any kind. We do not warrant that our services will be uninterrupted or error-free.</p>
           </section>
           <section className="bg-white/5 p-8 rounded-3xl border border-white/5">
             <h2 className="text-xl font-bold text-white mb-4">10. LIMITATION</h2>
             <p className="text-xs uppercase leading-relaxed">Buckeye Truck LLC shall not be liable for any indirect, incidental, special, or consequential damages arising out of your use of our services.</p>
           </section>
        </div>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">12.</span> GOVERNING LAW
          </h2>
          <p>
            These Terms shall be governed by and construed in accordance with the laws of the State of Missouri. Any disputes shall be subject to the exclusive jurisdiction of the state and federal courts located in Jackson County, Missouri.
          </p>
        </section>

        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6 italic">14. CONTACT INFORMATION</h2>
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-white">Buckeye Truck LLC</p>
            <p>10701 E Winner Road Suite 220G</p>
            <p>Independence, MO 64052</p>
            <p>Phone: (314) 866-5805</p>
            <p>Website: www.robertson-trucks.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Terms;
