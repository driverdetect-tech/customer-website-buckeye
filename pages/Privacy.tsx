
import React from 'react';

const Privacy: React.FC = () => {
  return (
    <div className="py-40 px-4 max-w-5xl mx-auto">
      <div className="mb-16">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 italic tracking-tighter uppercase">Privacy Policy</h1>
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
              <p><span className="text-white font-semibold">Website:</span> buckeye.driverdetect.io</p>
              <p><span className="text-white font-semibold">Mailing Address:</span> 10701 E Winner Road Suite 220G, Independence, MO 64052</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">2.</span> INTRODUCTION
          </h2>
          <p>
            Buckeye Truck LLC ("Company," "we," "us," or "our") is committed to protecting your privacy and personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services, visit our website, or communicate with us through any channel, including SMS/text messaging.
          </p>
          <p className="text-white font-bold italic mt-4">
            We respect your privacy and will never contact you without your explicit consent.
          </p>
        </section>

        <section className="bg-[#FF4D00]/10 p-8 rounded-[40px] border border-[#FF4D00]/20">
          <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-tight italic">
            3. Our Commitment To You
          </h2>
          <ul className="space-y-4 text-sm font-bold text-slate-200">
            <li className="flex items-start gap-3">
              <span className="text-[#FF4D00] mt-1">✓</span>
              We will NEVER send you unsolicited messages — We only contact you after you have explicitly opted in
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4D00] mt-1">✓</span>
              We will NEVER sell your information — Your data is not for sale, period
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4D00] mt-1">✓</span>
              We will NEVER share your mobile data for marketing — Your phone number stays with us
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4D00] mt-1">✓</span>
              We will NEVER engage in spam or deceptive practices — We are committed to honest, transparent communication
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#FF4D00] mt-1">✓</span>
              We will ALWAYS honor your opt-out requests — You are in control of your communication preferences
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
            <span className="text-[#FF4D00]">4.</span> INFORMATION WE COLLECT
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2 italic">4.1 Personal Information</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><span className="text-white">Contact Information:</span> Name, email, mailing address, and mobile number</li>
                <li><span className="text-white">Business Information:</span> Company name, MC number, DOT number</li>
                <li><span className="text-white">Account Information:</span> Credentials and preferences</li>
                <li><span className="text-white">Records:</span> Logs of your communications with us</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-white mb-2 italic">4.2 Mobile & 4.3 Automatic Data</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li>Consent preferences and opt-in/opt-out status</li>
                <li>Message delivery and response metrics</li>
                <li>IP address, browser type, and device information</li>
                <li>Browsing patterns and referring URLs</li>
              </ul>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">5.</span> HOW WE USE YOUR INFORMATION
          </h2>
          <div className="bg-white/5 p-6 rounded-2xl border border-white/10 text-sm grid md:grid-cols-2 gap-4">
            <p>• To provide and improve logistics services</p>
            <p>• To respond to inquiries and provide support</p>
            <p>• To send SMS messages (only after opt-in)</p>
            <p>• To comply with legal and safety obligations</p>
            <p>• To detect and prevent fraud or security issues</p>
          </div>
        </section>

        <section className="border-l-4 border-[#FF4D00] pl-8">
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">6.</span> SMS/TEXT MESSAGING PRIVACY
          </h2>
          <p className="font-bold text-white mb-4 underline">IMPORTANT: No mobile information will be shared with third parties or affiliates for marketing or promotional purposes at any time.</p>
          <p className="text-sm">We will NEVER sell your phone number, rent your mobile information, or share opt-in data with affiliates for their own marketing purposes.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">7.</span> ANTI-SPAM & ANTI-FRAUD
          </h2>
          <p className="text-sm">
            Buckeye Truck LLC is firmly committed to preventing spam. We never send unsolicited messages, never purchase contact lists, and never engage in phishing. All our communications clearly identify us and comply with TCPA, CTIA, and A2P 10DLC requirements.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <span className="text-[#FF4D00]">8.</span> DATA SECURITY
          </h2>
          <p className="text-sm">
            We implement appropriate technical measures including encryption of sensitive data, secure storage with access controls, regular security assessments, and specialized employee training on data protection.
          </p>
        </section>

        <section className="grid md:grid-cols-2 gap-8">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">9. YOUR RIGHTS</h2>
            <ul className="text-xs space-y-2 list-disc pl-4 uppercase tracking-wider">
              <li>Request access to your personal data</li>
              <li>Request deletion of your information</li>
              <li>Opt-out of communications at any time</li>
              <li>Withdraw consent for any channel</li>
            </ul>
          </div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5">
            <h2 className="text-xl font-bold text-white mb-4">10. CHILDREN'S PRIVACY</h2>
            <p className="text-xs uppercase leading-relaxed">Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children under 18.</p>
          </div>
        </section>

        <section className="border-t border-white/10 pt-12">
          <h2 className="text-2xl font-bold text-white mb-6 italic">11. CONTACT US</h2>
          <div className="space-y-2 text-slate-300">
            <p className="font-bold text-white">Buckeye Truck LLC</p>
            <p>10701 E Winner Road Suite 220G</p>
            <p>Independence, MO 64052</p>
            <p>Phone: (314) 866-5805</p>
            <p>Website: buckeye.driverdetect.io</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Privacy;
