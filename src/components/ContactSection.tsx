import React, { useState } from 'react';
import { ArrowRight, Sparkles, CheckCircle, Mail } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendContactInquiry, TARGET_EMAIL } from '../utils/emailService';

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenBooking }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fallbackGmailUrl, setFallbackGmailUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    experienceType: 'Quick Play Lab',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendContactInquiry(formData);
    setFallbackGmailUrl(result.fallbackUrl);
    setIsSubmitting(false);
    setFormSubmitted(true);

    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
      colors: ['#FF7417', '#FFF8EF', '#38251C']
    });
  };

  return (
    <section
      id="contact"
      className="min-h-screen w-full relative bg-gradient-to-b from-rasphera-orange via-[#FF6E0F] to-[#E55B00] text-white overflow-hidden flex flex-col justify-center items-center pt-20 sm:pt-24 pb-8 sm:pb-12 scroll-mt-0"
    >
      
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10 my-auto">
        
        {/* Main CTA Container - Scaled to fit screen comfortably and centered */}
        <div className="bg-[#FFF8EF] border-3 sm:border-4 border-rasphera-dark rounded-2xl sm:rounded-3xl p-5 sm:p-7 md:p-8 shadow-solid-xl text-rasphera-dark">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            
            {/* Left Content (lg: col-span-7) */}
            <div className="lg:col-span-7">
              
              <div className="inline-flex items-center gap-1.5 px-3 py-0.5 rounded-full bg-rasphera-orange/15 border border-rasphera-orange text-rasphera-orange font-display tracking-widest text-[10px] sm:text-xs uppercase mb-2 sm:mb-3 font-bold">
                <Sparkles className="w-3 h-3 fill-rasphera-orange" />
                <span>Transform Your Workplace Culture</span>
              </div>

              {/* PDF Heading: LET'S MAKE PLAY MATTER. (Scaled down to fit screen) */}
              <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight text-rasphera-dark font-black leading-none uppercase mb-3 sm:mb-4">
                LET'S MAKE <br />
                <span className="text-rasphera-orange">PLAY MATTER.</span>
              </h2>

              {/* PDF Core Description */}
              <p className="font-body text-xs sm:text-sm md:text-base text-rasphera-brown font-semibold leading-relaxed mb-4 sm:mb-6 max-w-lg">
                Transforming corporate wellness through empathetic play. Bringing people together through creativity, collaboration, and meaningful gaming experiences.
              </p>

              {/* Quick Info Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3.5 border-t-2 border-dashed border-rasphera-dark/20 text-xs">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rasphera-orange/20 border border-rasphera-orange flex items-center justify-center text-rasphera-orange font-bold text-xs">
                    📍
                  </div>
                  <div>
                    <span className="font-bold text-rasphera-dark block text-xs">Location</span>
                    <span className="text-rasphera-brown text-[11px] sm:text-xs">Bangalore, Karnataka & Pan-India</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-rasphera-orange/20 border border-rasphera-orange flex items-center justify-center text-rasphera-orange font-bold text-xs">
                    ✉️
                  </div>
                  <div>
                    <span className="font-bold text-rasphera-dark block text-xs">Direct Inquiry</span>
                    <a href={`mailto:${TARGET_EMAIL}`} className="text-rasphera-brown hover:text-rasphera-orange font-semibold transition-colors text-[11px] sm:text-xs font-mono">
                      {TARGET_EMAIL}
                    </a>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Fast Action Card (lg: col-span-5) */}
            <div className="lg:col-span-5 bg-gradient-to-br from-white to-rasphera-peach/20 border-2 sm:border-3 border-rasphera-dark rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-solid">
              
              {formSubmitted ? (
                <div className="text-center py-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-100 border-2 border-green-600 rounded-full flex items-center justify-center mx-auto mb-3 text-green-600 shadow-sm">
                    <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-mono font-bold text-rasphera-orange uppercase tracking-wider block mb-1">
                    Sent to {TARGET_EMAIL}
                  </span>
                  <h3 className="font-display text-xl sm:text-2xl text-rasphera-dark font-bold mb-1.5">
                    Inquiry Dispatched!
                  </h3>
                  <p className="text-xs text-rasphera-brown font-medium mb-4 leading-relaxed">
                    Your details have been transmitted directly to <span className="font-bold text-rasphera-dark font-mono">{TARGET_EMAIL}</span>. Rajesh & Spandhana will connect with you within 24 hours with custom recommendations.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                    <a
                      href={fallbackGmailUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-rasphera-orange text-white text-xs font-display uppercase tracking-wider font-bold hover:bg-rasphera-orange-hover transition-colors shadow-sm"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Open in Gmail</span>
                    </a>
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="font-display uppercase text-xs tracking-wider px-3.5 py-1.5 bg-rasphera-cream border border-rasphera-dark rounded-lg text-rasphera-dark font-bold hover:bg-white transition-colors"
                    >
                      Submit Another
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
                  <div>
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-rasphera-orange block mb-0.5">
                      Direct Dispatch
                    </span>
                    <h3 className="font-display text-lg sm:text-xl text-rasphera-dark font-bold leading-tight">
                      Book a Conversation
                    </h3>
                    <p className="text-[11px] text-rasphera-brown font-medium">
                      Delivered directly to <span className="font-bold text-rasphera-orange font-mono">{TARGET_EMAIL}</span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-rasphera-dark mb-0.5">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3 py-1.5 sm:py-2 rounded-lg border-2 border-rasphera-dark bg-rasphera-cream focus:bg-white focus:outline-none focus:border-rasphera-orange font-medium transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5">
                    <div>
                      <label className="block text-[11px] font-semibold text-rasphera-dark mb-0.5">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="priya@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3 py-1.5 sm:py-2 rounded-lg border-2 border-rasphera-dark bg-rasphera-cream focus:bg-white focus:outline-none focus:border-rasphera-orange font-medium transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-[11px] font-semibold text-rasphera-dark mb-0.5">
                        Company Name
                      </label>
                      <input
                        type="text"
                        placeholder="Google, Razorpay, etc."
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3 py-1.5 sm:py-2 rounded-lg border-2 border-rasphera-dark bg-rasphera-cream focus:bg-white focus:outline-none focus:border-rasphera-orange font-medium transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-rasphera-dark mb-0.5">
                      Desired Experience Format
                    </label>
                    <select
                      value={formData.experienceType}
                      onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3 py-1.5 sm:py-2 rounded-lg border-2 border-rasphera-dark bg-rasphera-cream focus:bg-white focus:outline-none focus:border-rasphera-orange font-medium"
                    >
                      <option value="Quick Play Lab">Quick Play Lab (45 - 90 min)</option>
                      <option value="Half-Day Wellness Retreat">Half-Day Wellness Retreat (3 - 4 hrs)</option>
                      <option value="Full-Day Corporate Experience">Full-Day Corporate Experience (6 - 8 hrs)</option>
                      <option value="Custom Event / Wedding / Community">Custom Event / Community Gathering</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-semibold text-rasphera-dark mb-0.5">
                      Message / Team Goals (Optional)
                    </label>
                    <textarea
                      rows={2}
                      placeholder="Tell us about your team size, event timeline, or goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full text-xs sm:text-sm px-3 py-1.5 rounded-lg border-2 border-rasphera-dark bg-rasphera-cream focus:bg-white focus:outline-none focus:border-rasphera-orange font-medium resize-none"
                    />
                  </div>

                  {/* Primary CTA button with live status */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full mt-1 inline-flex items-center justify-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display text-sm sm:text-base uppercase tracking-wider py-2.5 sm:py-3 px-5 rounded-xl border-2 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold group disabled:opacity-75 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>SENDING TO {TARGET_EMAIL}...</span>
                      </>
                    ) : (
                      <>
                        <span>LET'S CREATE AN EXPERIENCE.</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-[10px] sm:text-[11px] text-center text-rasphera-brown font-medium pt-0.5">
                    Or prefer a structured inquiry?{' '}
                    <button
                      type="button"
                      onClick={onOpenBooking}
                      className="text-rasphera-orange underline font-bold"
                    >
                      Open Full Booking Wizard
                    </button>
                  </p>
                </form>
              )}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
