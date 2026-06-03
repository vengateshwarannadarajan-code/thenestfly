import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const EMAILJS_SERVICE_ID = 'service_y0js2ee';
const EMAILJS_TEMPLATE_ID = 'template_hbkn9mn';
const EMAILJS_PUBLIC_KEY = 'GERgwtvqYSgQuCMf3';

const destinations = [
  'France', 'United Kingdom', 'Canada', 'United States', 
  'Australia', 'Germany', 'Ireland', 'Singapore', 
  'Dubai', 'Switzerland', 'New Zealand', 'Other'
];

const qualifications = [
  '10th / Secondary', '12th / Higher Secondary', 
  'Diploma', 'Bachelor Degree (UG)', 
  'Postgraduate Diploma', 'Master Degree (PG)', 'Other'
];

const intakeSeasons = ['Spring', 'Summer', 'Fall', 'Winter', 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const intakeYears = ['2026', '2027', '2028'];

const countries = [
  'India', 'Sri Lanka', 'Bangladesh', 'Nepal', 'Pakistan',
  'France', 'United Kingdom', 'Germany', 'UAE', 'Singapore',
  'Canada', 'Australia', 'USA', 'Other'
];

export default function ConsultationForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    full_name: '',
    email: '',
    whatsapp: '',
    country: '',
    destination: '',
    intake_season: '',
    intake_year: '',
    qualification: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          full_name: formData.full_name,
          email: formData.email,
          whatsapp: formData.whatsapp,
          country: formData.country,
          destination: formData.destination,
          intake: `${formData.intake_season} ${formData.intake_year}`,
          qualification: formData.qualification,
          message: formData.message,
        },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('success');
      setFormData({ full_name: '', email: '', whatsapp: '', country: '', destination: '', intake_season: '', intake_year: '', qualification: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputClass = "w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-white/40 focus:outline-none focus:border-white/60 focus:bg-white/15 transition-all text-sm";
  const selectClass = "w-full bg-[#1e3a8a] border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/60 transition-all text-sm appearance-none cursor-pointer";
  const labelClass = "block text-white/80 text-sm font-medium mb-1.5";

  if (status === 'success') {
    return (
      <div className="max-w-2xl mx-auto bg-white/10 border border-white/20 rounded-2xl p-12 text-center mb-12">
        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-2xl font-bold mb-3" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Consultation Booked!
        </h3>
        <p className="text-white/80 text-lg mb-2">Thank you for reaching out.</p>
        <p className="text-white/60">We will contact you on WhatsApp within 24 hours to confirm your consultation time.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-8 bg-white/20 hover:bg-white/30 text-white px-8 py-3 rounded-lg transition-colors"
        >
          Book another
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto mb-12">
      <div className="bg-white/10 border border-white/20 rounded-2xl p-8">
        <h3 className="text-xl font-bold text-white mb-6 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
          Book Your Free Consultation
        </h3>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
          {/* Row 1 — Name + Email */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Full Name *</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                placeholder="Your full name"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Email Address *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
                className={inputClass}
              />
            </div>
          </div>

          {/* Row 2 — WhatsApp + Country */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>WhatsApp Number *</label>
              <input
                type="tel"
                name="whatsapp"
                value={formData.whatsapp}
                onChange={handleChange}
                placeholder="+91 98765 43210"
                required
                className={inputClass}
              />
            </div>
            <div>
              <label className={labelClass}>Country You Are From *</label>
              <select name="country" value={formData.country} onChange={handleChange} required className={selectClass}>
                <option value="">Select country</option>
                {countries.map(c => <option key={c} value={c}>{c}</option>)}
              </select>
            </div>
          </div>

          {/* Row 3 — Destination + Qualification */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Preferred Study Destination *</label>
              <select name="destination" value={formData.destination} onChange={handleChange} required className={selectClass}>
                <option value="">Select destination</option>
                {destinations.map(d => <option key={d} value={d}>{d}</option>)}
              </select>
            </div>
            <div>
              <label className={labelClass}>Current Highest Qualification *</label>
              <select name="qualification" value={formData.qualification} onChange={handleChange} required className={selectClass}>
                <option value="">Select qualification</option>
                {qualifications.map(q => <option key={q} value={q}>{q}</option>)}
              </select>
            </div>
          </div>

          {/* Row 4 — Intake Season + Year */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Preferred Intake Season *</label>
              <select name="intake_season" value={formData.intake_season} onChange={handleChange} required className={selectClass}>
                <option value="">Select season / month</option>
                <optgroup label="Seasons">
                  {['Spring', 'Summer', 'Fall', 'Winter'].map(s => <option key={s} value={s}>{s}</option>)}
                </optgroup>
                <optgroup label="Specific Month">
                  {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map(m => <option key={m} value={m}>{m}</option>)}
                </optgroup>
              </select>
            </div>
            <div>
              <label className={labelClass}>Preferred Intake Year *</label>
              <select name="intake_year" value={formData.intake_year} onChange={handleChange} required className={selectClass}>
                <option value="">Select year</option>
                {intakeYears.map(y => <option key={y} value={y}>{y}</option>)}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className={labelClass}>Message (Optional)</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Tell us about your academic background, goals, or any specific questions..."
              rows={3}
              className={inputClass + ' resize-none'}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full bg-[#f97316] hover:bg-[#ea580c] disabled:bg-white/20 text-white py-4 rounded-xl font-semibold text-lg transition-all hover:scale-[1.01] disabled:cursor-not-allowed"
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {status === 'sending' ? 'Sending...' : 'Book Free Consultation'}
          </button>

          {status === 'error' && (
            <p className="text-red-300 text-sm text-center">Something went wrong. Please try WhatsApp instead.</p>
          )}

          <p className="text-white/40 text-xs text-center">
            We will reach out within 24 hours on WhatsApp to confirm your consultation.
          </p>
        </form>
      </div>
    </div>
  );
}
