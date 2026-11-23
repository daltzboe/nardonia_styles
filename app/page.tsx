"use client";

import { useState } from "react";
import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Clock3, Instagram, Menu, X, Sparkles, CalendarDays, Heart } from "lucide-react";

const services = [
  { category: "French Curls", items: [{ name: "Bob", price: "$190" }, { name: "Mid-back", price: "$240" }, { name: "Waist Length", price: "$270" }, { name: "Butt Length", price: "$300" }] },
  { category: "Knotless Braids", items: [{ name: "Bob", price: "$180" }, { name: "Mid-back", price: "$220" }, { name: "Waist Length", price: "$250" }, { name: "Boho Add-On", price: "+$20" }] },
  { category: "Fulani Quick Weaves", items: [{ name: "Full Style", price: "$120" }] },
  { category: "Island Twists", items: [{ name: "Bob", price: "$170" }, { name: "Mid-back", price: "$190" }, { name: "Waist Length", price: "$200" }, { name: "Boho Add-On", price: "+$20" }] },
  { category: "Men's Cornrows", items: [{ name: "Loc Retwist", price: "$50" }, { name: "Alicia Keys", price: "$120" }, { name: "Miracle Knots", price: "$120" }, { name: "Pinterest Inspo", price: "DM for inquiry" }] }
];
const bookingOptions = services.flatMap((group) => group.items.map((item) => `${group.category} — ${item.name}`));

const gallery = [
  { src: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?auto=format&fit=crop&w=900&q=85", alt: "Elegant long braided hairstyle", tag: "BRAIDS" },
  { src: "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&fit=crop&w=900&q=85", alt: "Beautiful salon hairstyle detail", tag: "SIGNATURE LOOK" },
  { src: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&w=900&q=85", alt: "Glamorous beauty editorial look", tag: "GLAM" },
  { src: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=900&q=85", alt: "Hair styling in the salon", tag: "THE PROCESS" }
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("Knotless Braids — Bob");
  const [submitted, setSubmitted] = useState(false);

  const goToBooking = (service?: string) => {
    if (service) setSelectedService(service);
    setMenuOpen(false);
    document.getElementById("booking")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main>
      <div className="announcement">A LITTLE LUXURY, A LOT OF CONFIDENCE <span>✦</span> NOW ACCEPTING APPOINTMENT REQUESTS</div>
      <header className="site-header">
        <a href="#home" className="brand" aria-label="Nardonia Styles home">
          <span className="brand-name">nardonia <span>styles</span></span>
        </a>
        <nav className={menuOpen ? "nav-links open" : "nav-links"}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>Our Story</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          <a href="#gallery" onClick={() => setMenuOpen(false)}>The Gallery</a>
          <a href="#payments" onClick={() => setMenuOpen(false)}>Payments</a>
        </nav>
        <button className="header-cta" onClick={() => goToBooking()}>Book an appointment <ArrowUpRight size={15} /></button>
        <button className="mobile-toggle" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="eyebrow-line" /> THE ART OF BEAUTIFUL HAIR</div>
          <h1>Your crown.<br /><em>Your moment.</em></h1>
          <p className="hero-description">Where every detail is intentional, every style tells a story, and you leave feeling like the best version of you.</p>
          <div className="hero-actions">
            <button className="button button-gold" onClick={() => goToBooking()}>Find your style <ArrowUpRight size={17} /></button>
            <a className="text-link" href="#gallery">Explore the looks <ArrowRight size={16} /></a>
          </div>
          <div className="hero-note"><span className="note-star">✳</span><span>GOOD HAIR DAYS<br /><b>START HERE.</b></span></div>
          <div className="hero-bottom"><span>01 — 04</span><span className="scroll-cue">SCROLL TO DISCOVER <ArrowDown size={13} /></span></div>
        </div>
        <div className="hero-visual">
          <div className="hero-photo" role="img" aria-label="Luxury hair beauty editorial portrait" />
          <div className="photo-frame" />
          <div className="hero-stamp"><span>NS</span><small>BEAUTY IN<br />EVERY DETAIL</small></div>
          <div className="vertical-caption">CONFIDENCE LOOKS GOOD ON YOU</div>
          <div className="hero-image-label"><span>THE NARDONIA EXPERIENCE</span><span>✦</span></div>
        </div>
      </section>

      <section className="ticker" aria-label="Our philosophy"><div className="ticker-track">{Array.from({ length: 4 }).map((_, i) => <span key={i}>BEAUTY IS A FEELING <i>✳</i> STYLE IS YOUR SIGNATURE <i>✳</i> YOU DESERVE THE EXTRAORDINARY <i>✳</i></span>)}</div></section>

      <section className="intro section-pad" id="about">
        <div className="section-kicker">01 / A NOTE FROM YOUR STYLIST</div>
        <div className="intro-content">
          <h2>More than a style.<br /><em>It’s a feeling.</em></h2>
          <div className="intro-text"><p>At Nardonia Styles, beauty is personal. It’s in the little details, the thoughtful touch, and the confidence you carry when you walk out the door.</p><p>From everyday elegance to your next show-stopping look, every appointment is a moment to pour a little more into you.</p><a href="#booking" className="underlined-link" onClick={(e) => { e.preventDefault(); goToBooking(); }}>Let’s create your look <ArrowUpRight size={15} /></a></div>
        </div>
        <div className="intro-signature">With love, <span>Nancy Ardonia</span></div>
      </section>

      <section className="services-section section-pad" id="services">
        <div className="section-top"><div><div className="section-kicker">02 / THE MENU</div><h2>Made for <em>your moment.</em></h2></div><p>Thoughtfully crafted styles. Beautiful finishes.<br />A little something for every version of you.</p></div>
        <div className="service-list">{services.map((group, i) => <article className="service-category" key={group.category}><div className="service-category-heading"><span className="service-number">0{i + 1}</span><h3>{group.category}</h3></div><div className="service-options">{group.items.map((item) => <div className="service-option" key={item.name}><span>{item.name}</span><b>{item.price}</b></div>)}</div><button className="circle-arrow" aria-label={"Book " + group.category} onClick={() => goToBooking(group.category + " — " + group.items[0].name)}><ArrowUpRight size={19} /></button></article>)}</div>
        <p className="service-disclaimer">Pinterest-inspired styles are available by inquiry. Please DM for details.</p>
      </section>

      <section className="gallery-section section-pad" id="gallery">
        <div className="gallery-heading"><div><div className="section-kicker">03 / THE LOOKBOOK</div><h2>A little <em>hairspiration.</em></h2></div><p>Every look has a story.<br />Here are a few of our favorites.</p></div>
        <div className="gallery-grid">{gallery.map((item, i) => <a href="#booking" onClick={(e) => { e.preventDefault(); goToBooking(); }} className={"gallery-item gallery-item-" + (i + 1)} key={item.src}><div className="gallery-image" style={{ backgroundImage: "url('" + item.src + "')" }} /><span className="gallery-tag">{item.tag}</span><span className="gallery-view"><ArrowUpRight size={18} /></span></a>)}</div>
        <div className="gallery-bottom"><span>YOUR NEXT LOOK IS WAITING</span><a href="#booking" onClick={(e) => { e.preventDefault(); goToBooking(); }}>Make it yours <ArrowRight size={16} /></a></div>
      </section>

      <section className="booking-section section-pad" id="booking">
        <div className="booking-intro"><div className="section-kicker">04 / YOUR TIME TO SHINE</div><h2>Let’s get you<br /><em>glowing.</em></h2><p>Ready for a fresh look? Tell us a little about what you have in mind and request your appointment below.</p><div className="booking-perks"><span><CalendarDays size={17} /> Personal appointment requests</span><span><Heart size={17} /> A style made for you</span></div></div>
        <div className="booking-form-wrap">
          {submitted ? <div className="success-state"><div className="success-icon"><Check size={25} /></div><h3>Your next good hair day<br /><em>starts here.</em></h3><p>Your request has been captured in this preview. Online booking notifications and appointment saving will be connected when we add the database.</p><button className="button button-gold" onClick={() => setSubmitted(false)}>Send another request <ArrowRight size={16} /></button></div> :
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-heading"><span>APPOINTMENT REQUEST</span><span>LET’S MAKE MAGIC ✳</span></div>
            <label>Your name<input required name="name" placeholder="First and last name" /></label>
            <div className="form-two"><label>Email address<input required type="email" name="email" placeholder="you@example.com" /></label><label>Phone number<input required type="tel" name="phone" placeholder="(000) 000-0000" /></label></div>
            <label>What style are you dreaming of?<span className="select-wrap"><select value={selectedService} onChange={(e) => setSelectedService(e.target.value)}>{bookingOptions.map((option) => <option key={option}>{option}</option>)}<option>Other / Custom Style</option></select><ChevronDown size={16} /></span></label>
            <div className="form-two"><label>Preferred date<input required type="date" name="date" min={new Date().toISOString().split("T")[0]} /></label><label>Preferred time<select name="time" defaultValue=""><option value="" disabled>Select a time</option><option>Morning (9 AM – 12 PM)</option><option>Afternoon (12 PM – 4 PM)</option><option>Evening (4 PM – 7 PM)</option></select></label></div>
            <label>Anything else we should know?<textarea name="notes" rows={3} placeholder="Hair length, inspiration, questions..." /></label>
            <button className="button button-gold form-submit" type="submit">Request my appointment <ArrowUpRight size={17} /></button>
            <p className="form-footnote">Submitting a request does not confirm an appointment. We’ll confirm availability and details with you.</p>
          </form>}
        </div>
      </section>

      <section className="payment-section section-pad" id="payments">
        <div className="payment-copy"><div className="section-kicker">05 / THE LITTLE DETAILS</div><h2>Easy ways<br />to <em>pay beautifully.</em></h2><p>We keep payment simple. Once your appointment is confirmed, you can send your deposit or payment directly through your preferred app.</p></div>
        <div className="payment-options">
          <div className="payment-card"><span className="payment-mark">Z</span><div><small>PAY WITH</small><h3>Zelle</h3><p>Send securely using the stylist’s Zelle details.</p><span className="payment-placeholder">916 883 8438</span></div></div>
          <div className="payment-card"><span className="payment-mark cash">$</span><div><small>PAY WITH</small><h3>Cash App</h3><p>Quick and easy payments through Cash App.</p><span className="payment-placeholder">$ardonancyy</span></div></div>
          <p className="payment-note"><Sparkles size={15} /> Payment details will be shared here once provided. No card payments are collected on this website.</p>
        </div>
      </section>

      <section className="closing-cta"><span className="closing-spark">✳</span><div className="section-kicker">A LITTLE SELF-LOVE LOOKS GOOD ON YOU</div><h2>Ready to feel <em>that girl?</em></h2><button className="button button-dark" onClick={() => goToBooking()}>Let’s book your look <ArrowUpRight size={17} /></button></section>

      <footer className="footer">
        <div className="footer-main"><a href="#home" className="brand footer-brand"><span className="brand-name">nardonia <span>styles</span></span></a><p>Beauty in every detail.<br />Confidence in every style.</p><a className="social-link" href="mailto:nardonia6@gmail.com"><span>✉</span> NARDONIA6@GMAIL.COM <ArrowUpRight size={14} /></a><a className="social-link" href="https://www.instagram.com/nardonia_styles/" target="_blank" rel="noreferrer"><Instagram size={17} /> @NARDONIA_STYLES <ArrowUpRight size={14} /></a></div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} NARDONIA STYLES. ALL RIGHTS RESERVED.</span><span>MADE WITH LOVE <i>✳</i></span><a href="#home">BACK TO TOP ↑</a></div>
      </footer>
    </main>
  );
}
