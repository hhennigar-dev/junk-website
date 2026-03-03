import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Truck, 
  Trash2, 
  Recycle, 
  Calendar, 
  CheckCircle2, 
  Star, 
  Phone, 
  ArrowRight, 
  Menu, 
  X,
  MapPin,
  Clock,
  ShieldCheck,
  Package,
  ArrowUpRight
} from 'lucide-react';
import { cn } from './lib/utils';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 py-6",
      isScrolled ? "bg-white/90 backdrop-blur-md py-4 border-b border-zinc-100 shadow-sm" : "bg-transparent"
    )}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
            <Truck size={18} />
          </div>
          <span className="font-bold text-lg tracking-tight text-zinc-900">
            HALIFAX JUNK PROS
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['Services', 'Process', 'Pricing', 'Areas'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
              className="text-sm font-medium text-zinc-500 transition-colors hover:text-zinc-900"
            >
              {item}
            </a>
          ))}
          <button className="px-6 py-2.5 rounded-full text-sm font-semibold bg-zinc-900 text-white hover:bg-zinc-800 transition-all active:scale-95">
            Book Now
          </button>
        </div>

        <button 
          className="md:hidden p-2 text-zinc-900"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-zinc-100 p-8 flex flex-col gap-6 md:hidden shadow-xl"
          >
            {['Services', 'Process', 'Pricing', 'Areas'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-xl font-semibold text-zinc-900"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <button className="w-full bg-zinc-900 text-white py-4 rounded-2xl font-bold">
              Get a Free Quote
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-40 pb-24 md:pt-56 md:pb-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 text-zinc-600 text-xs font-bold uppercase tracking-wider mb-8">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Available Today in Halifax
              </div>
              <h1 className="text-6xl md:text-[5.5rem] font-bold text-zinc-900 leading-[1.05] tracking-tight mb-8">
                Professional junk removal, <span className="text-zinc-400">handled.</span>
              </h1>
              <p className="text-xl text-zinc-500 mb-12 max-w-xl leading-relaxed">
                We provide premium, eco-friendly removal services for homes and businesses across HRM. Transparent pricing, professional crews, and zero stress.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-10 py-5 bg-zinc-900 text-white rounded-full font-bold text-lg hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-900/10 flex items-center justify-center gap-2">
                  Book Your Pickup
                  <ArrowRight size={20} />
                </button>
                <a href="tel:9025550123" className="w-full sm:w-auto px-10 py-5 bg-zinc-100 text-zinc-900 rounded-full font-bold text-lg hover:bg-zinc-200 transition-all flex items-center justify-center gap-2">
                  <Phone size={20} />
                  (902) 555-0123
                </a>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-zinc-900/10"
            >
              <img 
                src="https://i.ibb.co/5DYB6Wc/Junk-Removal-Services.jpg" 
                alt="Professional Junk Removal Service"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            {/* Floating Info Card */}
            <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-zinc-100 max-w-[240px] hidden md:block">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={20} />
                </div>
                <span className="font-bold text-zinc-900">Eco-Certified</span>
              </div>
              <p className="text-sm text-zinc-500 leading-relaxed">90% of all items we collect are recycled or donated.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TrustBar = () => {
  return (
    <section className="bg-zinc-50 py-12 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center md:justify-between items-center gap-12">
          <div className="flex items-center gap-4">
            <div className="flex text-yellow-400">
              {[...Array(5)].map((_, i) => <Star key={i} fill="currentColor" size={18} />)}
            </div>
            <p className="text-sm font-bold text-zinc-400 uppercase tracking-widest">
              500+ Verified Reviews
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale">
            <div className="flex items-center gap-2 font-bold text-xs tracking-widest">
              <ShieldCheck size={20} /> FULLY INSURED
            </div>
            <div className="flex items-center gap-2 font-bold text-xs tracking-widest">
              <Recycle size={20} /> ECO-FRIENDLY
            </div>
            <div className="flex items-center gap-2 font-bold text-xs tracking-widest">
              <CheckCircle2 size={20} /> HRM CERTIFIED
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { title: "Schedule", desc: "Choose a 2-hour window that works for your schedule." },
    { title: "Estimate", desc: "We provide a firm, no-obligation quote on-site." },
    { title: "Removal", desc: "Our professional crew hauls and sweeps the area." },
    { title: "Dispose", desc: "We sort everything for recycling and donation." },
  ];

  return (
    <section id="process" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">How it works.</h2>
          <p className="text-zinc-500 text-xl font-light max-w-2xl">Simple, transparent, and professional. Reclaiming your space in four easy steps.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {steps.map((step, i) => (
            <div key={i} className="group">
              <div className="text-zinc-200 font-bold text-6xl mb-8 group-hover:text-zinc-900 transition-colors duration-500">0{i + 1}</div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-zinc-500 leading-relaxed font-light">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    { title: "Residential", desc: "Furniture, appliances, and general household clutter removal.", icon: <Trash2 /> },
    { title: "Commercial", desc: "Office cleanouts, retail debris, and property management.", icon: <Package /> },
    { title: "Construction", desc: "Renovation waste, drywall, and concrete disposal.", icon: <Truck /> },
  ];

  return (
    <section id="services" className="py-32 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-1">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">What we take.</h2>
            <p className="text-zinc-500 text-lg font-light mb-12">If it's not hazardous and two people can lift it, we can haul it. Professional service for every need.</p>
            <button className="flex items-center gap-2 text-zinc-900 font-bold uppercase tracking-widest text-xs hover:gap-4 transition-all">
              View All Services <ArrowRight size={16} />
            </button>
          </div>
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <div key={i} className="p-10 bg-white rounded-[2rem] border border-zinc-100 hover:shadow-xl hover:shadow-zinc-900/5 transition-all duration-500">
                <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center text-zinc-900 mb-8">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-zinc-500 font-light leading-relaxed">{service.desc}</p>
              </div>
            ))}
            <div className="p-10 bg-zinc-900 rounded-[2rem] flex flex-col justify-between group cursor-pointer">
              <h3 className="text-2xl font-bold text-white">Need a custom <br />cleanout?</h3>
              <div className="flex items-center justify-between">
                <span className="text-zinc-400 font-medium">Get a custom quote</span>
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white group-hover:bg-white group-hover:text-zinc-900 transition-all">
                  <ArrowUpRight size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Pricing = () => {
  const plans = [
    { name: "Single Item", price: "95", desc: "Couch, fridge, or mattress." },
    { name: "1/4 Truck", price: "185", desc: "Small closet or garage." },
    { name: "1/2 Truck", price: "345", desc: "Large room or basement." },
    { name: "Full Truck", price: "595", desc: "Estate or office move." },
  ];

  return (
    <section id="pricing" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Simple pricing.</h2>
          <p className="text-zinc-500 text-xl font-light">All-inclusive rates. No hidden fees.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <div key={i} className="p-10 rounded-[2rem] border border-zinc-100 hover:border-zinc-900 transition-all duration-500">
              <h3 className="font-bold text-zinc-400 uppercase tracking-widest text-xs mb-4">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-bold text-zinc-900">${plan.price}</span>
                <span className="text-zinc-400 text-sm font-light">+ tax</span>
              </div>
              <p className="text-zinc-500 text-sm font-light mb-10 leading-relaxed">{plan.desc}</p>
              <button className="w-full py-3 rounded-full border border-zinc-200 text-zinc-900 font-bold text-sm hover:bg-zinc-900 hover:text-white transition-all">
                Select
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Areas = () => {
  const neighborhoods = [
    "Downtown Halifax", "Dartmouth", "Bedford", "Sackville", 
    "Clayton Park", "Fairview", "Spryfield", "Cole Harbour"
  ];

  return (
    <section id="areas" className="py-32 bg-zinc-900 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Serving HRM.</h2>
            <p className="text-zinc-400 text-xl font-light leading-relaxed mb-12">
              Our professional crews are in your neighborhood every day. From the waterfront to the suburbs, we've got Halifax covered.
            </p>
            <div className="flex items-center gap-4 p-6 bg-white/5 rounded-2xl border border-white/10 inline-flex">
              <MapPin className="text-zinc-400" />
              <span className="font-bold">Halifax Regional Municipality</span>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-x-12 gap-y-6">
            {neighborhoods.map((area, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="w-1 h-1 rounded-full bg-zinc-600 group-hover:bg-white transition-colors" />
                <span className="text-zinc-400 group-hover:text-white transition-colors font-medium">{area}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white text-zinc-900 py-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-20 mb-24">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-zinc-900 flex items-center justify-center text-white">
                <Truck size={16} />
              </div>
              <span className="font-bold text-lg tracking-tight">HALIFAX JUNK PROS</span>
            </div>
            <p className="text-zinc-500 font-light leading-relaxed">
              Halifax's premium junk removal choice. Professional service, ethical disposal, and community focused.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-20">
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">Navigation</h4>
              <ul className="space-y-4 text-sm text-zinc-600">
                <li><a href="#services" className="hover:text-zinc-900 transition-colors">Services</a></li>
                <li><a href="#process" className="hover:text-zinc-900 transition-colors">Process</a></li>
                <li><a href="#pricing" className="hover:text-zinc-900 transition-colors">Pricing</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 mb-8">Contact</h4>
              <ul className="space-y-4 text-sm text-zinc-600 font-bold">
                <li>(902) 555-0123</li>
                <li className="font-normal">hello@halifaxjunkpros.ca</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="pt-12 border-t border-zinc-100 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
          <p>© 2024 Halifax Junk Pros</p>
          <div className="flex gap-12">
            <a href="#" className="hover:text-zinc-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-zinc-900 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Process />
        <Services />
        <Pricing />
        <Areas />
        
        {/* Final CTA Section */}
        <section className="py-32 bg-zinc-50 border-y border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-5xl md:text-7xl font-bold text-zinc-900 mb-10 tracking-tight leading-tight">Ready to reclaim <br />your space?</h2>
            <p className="text-zinc-500 text-xl mb-12 font-light">Join thousands of Halifax residents who chose the professional way.</p>
            <button className="px-12 py-6 bg-zinc-900 text-white rounded-full font-bold text-xl hover:bg-zinc-800 transition-all active:scale-95 shadow-xl shadow-zinc-900/10">
              Get Your Free Estimate
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
