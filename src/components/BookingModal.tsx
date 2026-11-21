import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, CheckCircle, Sparkles, Calendar, Users, Building, Mail, Phone, User, ArrowRight } from 'lucide-react';
import confetti from 'canvas-confetti';
import { sendBookingRequest, TARGET_EMAIL } from '../utils/emailService';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialExperienceId?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, initialExperienceId }) => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [fallbackGmailUrl, setFallbackGmailUrl] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    groupSize: '25-50',
    experienceType: initialExperienceId || 'half-day-retreat',
    preferredDate: '',
    notes: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const result = await sendBookingRequest(formData);
    setFallbackGmailUrl(result.fallbackUrl);
    setIsSubmitting(false);
    setSubmitted(true);

    confetti({
      particleCount: 60,
      spread: 70,
      origin: { y: 0.5 },
      colors: ['#FF7417', '#FFB58A', '#38251C', '#FFF8EF']
    });
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div 
        onClick={onClose}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-rasphera-dark/80 backdrop-blur-sm overflow-y-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-rasphera-cream border-3 border-rasphera-dark rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-solid-xl relative my-8"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-9 h-9 rounded-full bg-white border-2 border-rasphera-dark flex items-center justify-center font-display text-lg hover:bg-rasphera-orange hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>

          {submitted ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-100 border-3 border-green-600 rounded-full flex items-center justify-center mx-auto mb-5 text-green-600 shadow-md">
                <CheckCircle className="w-9 h-9 sm:w-10 sm:h-10" />
              </div>
              <span className="text-xs font-mono font-bold text-rasphera-orange uppercase tracking-wider block mb-1">
                Dispatched to {TARGET_EMAIL}
              </span>
              <h3 className="font-display text-3xl sm:text-4xl text-rasphera-dark font-black tracking-tight mb-2">
                LET'S MAKE PLAY MATTER!
              </h3>
              <p className="font-body text-xs sm:text-sm md:text-base text-rasphera-brown font-medium leading-relaxed max-w-md mx-auto mb-6">
                Thank you, <strong>{formData.name}</strong>. Your full session proposal request has been delivered directly to <span className="font-bold text-rasphera-dark font-mono">{TARGET_EMAIL}</span>. Rajesh & Spandhana will review your target dates and respond with an itemized game kit preview within 24 hours.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={fallbackGmailUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display uppercase tracking-wider text-sm py-3 px-6 rounded-xl border-2 border-rasphera-dark box-solid-shadow font-bold transition-all"
                >
                  <Mail className="w-4 h-4" />
                  <span>Open in Gmail</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto bg-rasphera-cream hover:bg-white text-rasphera-dark font-display uppercase tracking-wider text-sm py-3 px-6 rounded-xl border-2 border-rasphera-dark font-bold transition-all"
                >
                  Back to Website
                </button>
              </div>
            </div>
          ) : (
            <div>
              <div className="border-b-2 border-rasphera-dark/20 pb-4 mb-6">
                <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-rasphera-orange uppercase tracking-wider mb-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Direct Delivery to {TARGET_EMAIL}</span>
                </div>
                <h3 className="font-display text-3xl sm:text-4xl text-rasphera-dark font-black tracking-tight">
                  CURATE AN EXPERIENCE
                </h3>
                <p className="text-xs sm:text-sm text-rasphera-brown font-medium mt-1">
                  Tailored wooden gaming workshops designed for your team's specific goals.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-rasphera-dark mb-1 flex items-center gap-1">
                      <User className="w-3.5 h-3.5 text-rasphera-orange" />
                      <span>Full Name *</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rajesh Kumar"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-rasphera-dark mb-1 flex items-center gap-1">
                      <Mail className="w-3.5 h-3.5 text-rasphera-orange" />
                      <span>Work Email *</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                    />
                  </div>
                </div>

                {/* Company & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-rasphera-dark mb-1 flex items-center gap-1">
                      <Building className="w-3.5 h-3.5 text-rasphera-orange" />
                      <span>Company / Organization</span>
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Acme Studio"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-rasphera-dark mb-1 flex items-center gap-1">
                      <Phone className="w-3.5 h-3.5 text-rasphera-orange" />
                      <span>Phone / WhatsApp</span>
                    </label>
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                    />
                  </div>
                </div>

                {/* Experience Format & Group Size */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-rasphera-dark mb-1">
                      Experience Format *
                    </label>
                    <select
                      value={formData.experienceType}
                      onChange={(e) => setFormData({ ...formData, experienceType: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                    >
                      <option value="quick-play-lab">Quick Play Lab (45 - 90 min)</option>
                      <option value="half-day-retreat">Half-Day Wellness Retreat (3 - 4 hrs)</option>
                      <option value="full-day-corporate">Full-Day Corporate Experience (6 - 8 hrs)</option>
                      <option value="custom">Custom Gathering / Event</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-rasphera-dark mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-rasphera-orange" />
                      <span>Estimated Group Size</span>
                    </label>
                    <select
                      value={formData.groupSize}
                      onChange={(e) => setFormData({ ...formData, groupSize: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                    >
                      <option value="10-25">10 - 25 Participants</option>
                      <option value="25-50">25 - 50 Participants</option>
                      <option value="50-100">50 - 100 Participants</option>
                      <option value="100-300+">100 - 300+ Participants</option>
                    </select>
                  </div>
                </div>

                {/* Target Date */}
                <div>
                  <label className="block text-xs font-bold text-rasphera-dark mb-1 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-rasphera-orange" />
                    <span>Target Date or Timeframe</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Next month, Q3 Offsite, or Dec 15"
                    value={formData.preferredDate}
                    onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-xs font-bold text-rasphera-dark mb-1">
                    Any Specific Team Focus or Venue Details?
                  </label>
                  <textarea
                    rows={2}
                    placeholder="e.g. We are an engineering team needing a creative break, venue is in Bangalore..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full text-sm px-3.5 py-2 rounded-xl border-2 border-rasphera-dark bg-white focus:outline-none focus:border-rasphera-orange"
                  />
                </div>

                {/* Submit button with live dispatch status */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex items-center justify-center gap-2 bg-rasphera-orange hover:bg-rasphera-orange-hover text-white font-display text-lg uppercase tracking-wider py-3.5 px-6 rounded-xl border-2 border-rasphera-dark box-solid-shadow box-solid-shadow-hover transition-all font-bold disabled:opacity-75 disabled:cursor-wait"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>DISPATCHING TO {TARGET_EMAIL}...</span>
                      </>
                    ) : (
                      <>
                        <span>CONFIRM & REQUEST EXPERIENCE PROPOSAL</span>
                        <ArrowRight className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>

              </form>
            </div>
          )}

        </motion.div>
      </div>
    </AnimatePresence>
  );
};
