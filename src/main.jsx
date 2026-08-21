import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, MapPin, Phone, Menu, X, Clock3,
  Sparkles, Scissors, Droplets, ScanFace, ChevronDown
} from "lucide-react";
import "./styles.css";

const InstagramIcon = ({ size = 18 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const imgs = {
  hero: "https://content.jdmagicbox.com/v2/comp/kolkata/m1/033pxx33.xx33.260218143038.v7m1/catalogue/sam-studio-salon-and-aesthetic-clinic-circus-avenue-kolkata-cosmetologist-doctors-gz1lq774si-250.jpg?w=3840&q=75",
  video: "https://stream.jdmagicbox.com/thumbnail/033pxx33.xx33.260218143038.v7m1/033pxx33.xx33.260218143038.v7m1_algqgkwkctullrp.jpg?w=3840&q=75",
  exterior: "https://content.jdmagicbox.com/v2/comp/kolkata/m1/033pxx33.xx33.260218143038.v7m1/catalogue/ry89z0iegtjj2j3-qvanir9ogt-250.jpg?w=3840&q=75",
  interior: "https://content.jdmagicbox.com/v2/comp/kolkata/m1/033pxx33.xx33.260218143038.v7m1/catalogue/sam-studio-salon-and-aesthetic-clinic-circus-avenue-kolkata-cosmetologist-doctors-9n1s0yi547-250.jpg?w=3840&q=75"
};

const serviceGroups = [
  {
    icon: Sparkles, no: "01", title: "Skin & Cosmetology",
    image: imgs.interior,
    copy: "Personalised skin rituals and modern cosmetology treatments.",
    items: ["Korean Glass Skin Boosters", "Korean Facial Treatments", "Chemical Peels", "Neck Whitening", "Mole Removal", "D-Tan Therapies"]
  },
  {
    icon: Scissors, no: "02", title: "Hair & Restoration",
    image: imgs.hero,
    copy: "Repair, smooth, transform and style with tailored hair services.",
    items: ["Hair Botox", "Keratin Treatments", "Hair Weaving", "Hair Extensions", "Custom Colour", "Hair Spa & Styling"]
  },
  {
    icon: ScanFace, no: "03", title: "Aesthetic Clinic",
    image: imgs.exterior,
    copy: "Consultation-led aesthetic care for skin and hair concerns.",
    items: ["Skin Rejuvenation", "PRP Hair Consultations", "Laser-Based Solutions", "Aesthetic Consultations"]
  },
  {
    icon: Droplets, no: "04", title: "Everyday Beauty",
    image: imgs.video,
    copy: "The essentials, finished with the same attention to detail.",
    items: ["Facials", "Bleaching Combos", "Threading", "Everyday Hair Spa", "Grooming", "Beauty Finishing"]
  }
];

function App() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState(null);
  const nav = ["Home", "Services", "About", "Results", "Gallery", "Contact"];

  return (
    <div className="site">
      <header className="nav">
        <a className="brand" href="#home">
          <span className="brand-mark">SAM</span><span className="brand-sub">STUDIO</span>
        </a>
        <nav className={open ? "navlinks open" : "navlinks"}>
          {nav.map(x => <a key={x} href={"#" + x.toLowerCase()} onClick={() => setOpen(false)}>{x}</a>)}
        </nav>
        <a className="book desktop" href="#contact">Book appointment <ArrowUpRight size={15} /></a>
        <button className="menubtn" onClick={() => setOpen(!open)} aria-label="Open menu">{open ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section id="home" className="hero">
          <img src={imgs.hero} className="heroimg" alt="SAM STUDIO" />
          <div className="heroShade" />
          <div className="heroCopy">
            <p className="eyebrow">SALON · SKIN · AESTHETICS</p>
            <h1>Beauty,<br /><em>refined.</em></h1>
            <p className="heroText">A contemporary beauty and aesthetic destination on Karaya Road, bringing salon craft and modern cosmetology together.</p>
            <div className="heroButtons">
              <a className="lightBtn" href="#services">Explore services <ArrowUpRight size={17} /></a>
              <a className="ghostBtn" href="tel:+919073042549">Call +91 90730 42549</a>
            </div>
          </div>
          <div className="heroMeta"><span>51/1 KARAYA ROAD · BECK BAGAN</span><span>DAILY · 11:00 — 21:00</span></div>
        </section>

        <section className="quickFacts">
          <div><Clock3 size={18} /><span><b>Open daily</b> 11:00 AM — 9:00 PM</span></div>
          <div><MapPin size={18} /><span><b>Karaya Road</b> Near Karaya Police Station</span></div>
          <div><Phone size={18} /><span><b>Appointments</b> +91 90730 42549</span></div>
          <div><InstagramIcon size={18} /><span><b>@sam_studio_24</b> Follow the studio</span></div>
        </section>

        <section id="about" className="intro section">
          <div className="sectionTag">THE SAM EXPERIENCE</div>
          <div>
            <h2>More than a salon.<br /><em>A space for you.</em></h2>
            <p>SAM STUDIO SALON & AESTHETIC CLINIC brings together hair, beauty, skin and aesthetic services under one roof. The experience is designed around consultation, care, cleanliness and a polished finish.</p>
            <p className="smallNote">Located in the Ballygunge / Circus Avenue area of Kolkata, the studio serves clients looking for both everyday beauty and more specialised treatment experiences.</p>
            <a className="textLink" href="#services">Discover the services <ArrowUpRight size={16} /></a>
          </div>
        </section>

        <section className="darkBand">
          <div className="darkBandInner">
            <p className="eyebrow">ONE ADDRESS · MULTIPLE BEAUTY NEEDS</p>
            <h2>From everyday grooming<br />to <em>advanced care.</em></h2>
            <p>Choose a treatment, speak with the team, and make your appointment around what you want to achieve.</p>
          </div>
        </section>

        <section id="services" className="services section">
          <div className="sectionHead">
            <div><div className="sectionTag">WHAT WE DO</div><h2>Signature <em>services.</em></h2></div>
            <p className="sectionLead">Four distinct service worlds, one considered studio experience.</p>
          </div>

          <div className="serviceGrid">
            {serviceGroups.map((s, i) => {
              const Icon = s.icon;
              const isOpen = expanded === i;
              return <article className="service" key={s.title}>
                <div className="serviceImg"><img src={s.image} alt={s.title} /><span>{s.no}</span><div className="serviceIcon"><Icon size={20}/></div></div>
                <div className="serviceInfo">
                  <div><h3>{s.title}</h3><p>{s.copy}</p></div>
                  <button onClick={() => setExpanded(isOpen ? null : i)} aria-label={`Show ${s.title} services`}><ChevronDown className={isOpen ? "rot" : ""}/></button>
                </div>
                <div className={isOpen ? "serviceItems show" : "serviceItems"}>
                  {s.items.map(item => <span key={item}>{item}</span>)}
                </div>
              </article>
            })}
          </div>
        </section>

        <section className="splitFeature">
          <div className="splitImage"><img src={imgs.interior} alt="SAM STUDIO interior" /></div>
          <div className="splitCopy">
            <p className="sectionTag">WHY SAM</p>
            <h2>Care that feels<br /><em>considered.</em></h2>
            <div className="principles">
              <div><b>01</b><span><strong>Personal</strong> — start with what you need, not a one-size-fits-all routine.</span></div>
              <div><b>02</b><span><strong>Precise</strong> — treatments and styling are approached with attention to detail.</span></div>
              <div><b>03</b><span><strong>Refined</strong> — a clean, premium environment from consultation to finish.</span></div>
            </div>
          </div>
        </section>

        <section id="results" className="results section">
          <div className="sectionHead"><div><div className="sectionTag">CLIENT PROOF</div><h2>Results that<br /><em>feel personal.</em></h2></div><p className="sectionLead">Use this area for authorised real-client before / after photography and verified testimonials.</p></div>
          <div className="resultGrid">
            <div className="resultCard"><span>SKIN</span><h3>Korean facial & skin-care journeys</h3><p>Show real, consented client results here.</p></div>
            <div className="resultCard dark"><span>HAIR</span><h3>Repair, smoothness & transformation</h3><p>Show real, consented hair results here.</p></div>
            <div className="resultCard image"><img src={imgs.hero} alt="SAM STUDIO beauty image" /><span>STUDIO</span></div>
          </div>
        </section>

        <section id="team" className="team section">
          <div className="sectionHead">
            <div><div className="sectionTag">THE EXPERTS</div><h2>Meet our<br /><em>specialists.</em></h2></div>
            <p className="sectionLead">Our team of experienced cosmetologists and senior stylists are here to guide your beauty journey.</p>
          </div>
          <div className="teamGrid">
            <div className="teamCard">
              <div className="teamImg"><img src={imgs.interior} alt="Expert" /></div>
              <div className="teamInfo">
                <h3>Lead Aesthetician</h3>
                <p>Skin & Cosmetology</p>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImg"><img src={imgs.exterior} alt="Expert" /></div>
              <div className="teamInfo">
                <h3>Senior Stylist</h3>
                <p>Hair Restoration & Colour</p>
              </div>
            </div>
            <div className="teamCard">
              <div className="teamImg"><img src={imgs.hero} alt="Expert" /></div>
              <div className="teamInfo">
                <h3>Therapy Expert</h3>
                <p>Everyday Beauty & Wellness</p>
              </div>
            </div>
          </div>
        </section>

        <section className="brands section">
          <div className="sectionHead" style={{marginBottom: "30px"}}>
            <div><div className="sectionTag">PREMIUM PRODUCTS</div><h2>Brands we <em>trust.</em></h2></div>
          </div>
          <div className="brandMarquee">
            <div className="marqueeTrack">
              <span>L'Oréal Professionnel</span>
              <span>Schwarzkopf</span>
              <span>Olaplex</span>
              <span>Dermalogica</span>
              <span>Kerastase</span>
              <span>Esthederm</span>
              <span>L'Oréal Professionnel</span>
              <span>Schwarzkopf</span>
              <span>Olaplex</span>
              <span>Dermalogica</span>
              <span>Kerastase</span>
              <span>Esthederm</span>
            </div>
          </div>
        </section>

        <section className="statement">
          <img src={imgs.exterior} alt="SAM STUDIO exterior" />
          <div className="statementShade" />
          <div className="statementCopy"><p className="eyebrow">THE DETAILS MATTER</p><h2>Personal.<br /><em>Precise.</em><br />Refined.</h2></div>
        </section>

        <section id="gallery" className="gallery section">
          <div className="sectionHead"><div><div className="sectionTag">A GLIMPSE INTO SAM</div><h2>The studio,<br /><em>in focus.</em></h2></div><p className="sectionLead">Current gallery placeholders use the publicly indexed Justdial imagery supplied for this build.</p></div>
          <div className="masonry">
            <img className="g1" src={imgs.exterior} alt="SAM STUDIO exterior" />
            <img className="g2" src={imgs.interior} alt="SAM STUDIO interior" />
            <img className="g3" src={imgs.hero} alt="SAM STUDIO" />
            <img className="g4" src={imgs.video} alt="SAM STUDIO video still" />
          </div>
        </section>

        <section className="proof section">
          <div className="sectionTag">REPUTATION</div>
          <div className="rating"><strong>4.7</strong><span>/ 5</span></div>
          <div className="stars">★★★★★</div>
          <p className="reviewCount">100+ public reviews / votes across major local listings</p>
          <blockquote>“Clean, friendly and attentive — the kind of experience that makes you want to come back.”</blockquote>
          <p className="reviewDisclaimer">Use only verified review quotations and current platform counts on the production site.</p>
        </section>

        <section id="contact" className="cta">
          <div><p className="eyebrow">YOUR NEXT LOOK STARTS HERE</p><h2>Make time<br /><em>for you.</em></h2></div>
          <div className="ctaActions">
            <a className="darkBtn" href="tel:+919073042549"><Phone size={16}/> Call to book</a>
            <a className="outlineBtn" href="https://www.google.com/maps/search/?api=1&query=SAM+STUDIO+SALON+AND+AESTHETIC+CLINIC+Karaya+Road+Kolkata" target="_blank"><MapPin size={16}/> Find us</a>
            <a className="outlineBtn" href="https://instagram.com/sam_studio_24" target="_blank"><InstagramIcon size={16}/> Instagram</a>
          </div>
          <div className="contactNumbers"><span>+91 90730 42549</span><span>+91 97486 84121</span></div>
        </section>
      </main>

      <footer>
        <div className="footerBrand"><span className="brand-mark">SAM</span><span className="brand-sub">STUDIO</span></div>
        <p>Salon · Skin · Aesthetics</p>
        <div className="footerRight"><span>51/1 Karaya Road, Kolkata 700019</span><a href="tel:+919073042549">+91 90730 42549</a><a href="https://instagram.com/sam_studio_24" target="_blank"><InstagramIcon size={17}/></a></div>
      </footer>
    </div>
  );
}
createRoot(document.getElementById("root")).render(<App />);
