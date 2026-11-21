'use client';

import { useEffect, useState } from 'react';

const cities = [
  'Agra', 'Aligarh', 'Bareilly', 'Delhi', 'Ghaziabad', 'Gurugram', 'Kanpur',
  'Lucknow', 'Meerut', 'Moradabad', 'Mumbai', 'Noida', 'Other',
];

const availableServices = [
  'Digital Marketing',
  'Software Development',
  'Web Development',
  'App Development',
  'Video Shoot & Editing',
];

function PopupSelect({ name, value, placeholder, options, active, setActive, setValue, required = false }) {
  const expanded = active === name;
  return (
    <div className="consultation-select-wrap">
      <input type="hidden" name={name} value={value} required={required} />
      <button type="button" className={`consultation-select-trigger${value ? ' is-selected' : ''}`} onClick={() => setActive(expanded ? '' : name)} aria-haspopup="listbox" aria-expanded={expanded}>
        <span>{value || placeholder}</span><i aria-hidden="true" />
      </button>
      {expanded && <div className="consultation-select-menu" role="listbox" aria-label={placeholder}>
        {options.map((option) => <button type="button" role="option" aria-selected={value === option} className={value === option ? 'is-selected' : ''} key={option} onClick={() => { setValue(option); setActive(''); }}>{option}</button>)}
      </div>}
    </div>
  );
}

export default function ConsultationPopup() {
  const [open, setOpen] = useState(false);
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const [activeSelect, setActiveSelect] = useState('');
  const [service, setService] = useState('');
  const [city, setCity] = useState('');

  useEffect(() => {
    // Keep the brand intro visible first; the enquiry form follows its 2.1s animation.
    const timer = window.setTimeout(() => setOpen(true), 2250);
    return () => window.clearTimeout(timer);
  }, []);

  async function submit(event) {
    event.preventDefault();
    if (!service) {
      setError('Please select a service.');
      setActiveSelect('service');
      return;
    }
    setStatus('sending');
    setError('');
    const data = Object.fromEntries(new FormData(event.currentTarget));
    const selectedCity = String(data.city || '').trim();
    const message = selectedCity ? `City: ${selectedCity}\n\n${data.message}` : data.message;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...data, message, source: 'website-popup' }),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || 'Something went wrong. Please try again.');
      setStatus('sent');
    } catch (requestError) {
      setStatus('idle');
      setError(requestError.message);
    }
  }

  if (!open) return null;

  return (
    <div className="consultation-overlay" role="dialog" aria-modal="true" aria-labelledby="consultation-title">
      <section className="consultation-popup">
        <button className="consultation-close" onClick={() => setOpen(false)} aria-label="Close consultation form">×</button>
        <div className="consultation-topbar">
          <img src="/images/zentrix-logo-white.png" alt="Zentrix Infotech" className="consultation-logo consultation-logo-dark" />
          <img src="/images/zentrix-logo.png" alt="Zentrix Infotech" className="consultation-logo consultation-logo-light" />
          <span className="consultation-step"><i /> Free consultation</span>
        </div>

        {status === 'sent' ? (
          <div className="consultation-success">
            <span aria-hidden="true">✓</span>
            <h2>Thank you!</h2>
            <p>Your consultation request has been received. Our team will contact you shortly.</p>
            <button type="button" onClick={() => setOpen(false)}>Close</button>
          </div>
        ) : (
          <>
            <div className="consultation-heading">
              <span className="consultation-kicker">LET’S START A CONVERSATION</span>
              <h2 id="consultation-title">What are you <em>looking for?</em></h2>
              <p>Share your requirement. We’ll help you choose the right way to build it.</p>
            </div>

            <form onSubmit={submit} className="consultation-form">
              <label className="consultation-field consultation-wide">
                <span>Service</span>
                <PopupSelect name="service" value={service} placeholder="Select Service" options={availableServices} active={activeSelect} setActive={setActiveSelect} setValue={setService} required />
              </label>
              <div className="consultation-grid">
                <label className="consultation-field">
                  <span>Name <b>*</b></span>
                  <input name="name" placeholder="Your name" autoComplete="name" required />
                </label>
                <label className="consultation-field">
                  <span>Phone <b>*</b></span>
                  <input name="phone" type="tel" placeholder="Your phone number" autoComplete="tel" required />
                </label>
                <label className="consultation-field">
                  <span>Email <b>*</b></span>
                  <input name="email" type="email" placeholder="you@example.com" autoComplete="email" required />
                </label>
                <label className="consultation-field">
                  <span>City</span>
                  <PopupSelect name="city" value={city} placeholder="Select City" options={cities} active={activeSelect} setActive={setActiveSelect} setValue={setCity} />
                </label>
              </div>
              <label className="consultation-field consultation-wide">
                <span>Message <b>*</b></span>
                <textarea name="message" rows="3" placeholder="Tell us about your requirements..." required />
              </label>
              {error && <p role="alert" className="consultation-error">{error}</p>}
              <button className="consultation-submit" disabled={status === 'sending'}>
                {status === 'sending' ? 'Sending…' : 'Get Free Consultation'}
              </button>
            </form>
            <p className="consultation-safe">🔒 Your information is safe with us!</p>
          </>
        )}
      </section>
    </div>
  );
}
