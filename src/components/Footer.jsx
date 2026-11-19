import React from 'react';
import { Link } from 'react-router-dom';
import { useConfig } from '../context/ConfigContext';
import {
  UtensilsCrossed,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  MessageCircle,
  ExternalLink,
  Car,
} from 'lucide-react';
import { InstagramIcon, FacebookIcon, YoutubeIcon } from './SocialIcons';

export default function Footer() {
  const { config, t, mode } = useConfig();

  return (
    <footer className="bg-neutral-950 text-neutral-300 border-t border-neutral-800 pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Restaurant Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary text-white flex items-center justify-center shadow-lg">
                <UtensilsCrossed className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-extrabold text-xl text-white font-serif tracking-tight">
                  {config.business.logo.textPrimary} <span className="text-brand-primary">{config.business.logo.textSecondary}</span>
                </h3>
                <p className="text-[10px] uppercase font-bold text-neutral-400 tracking-wider">
                  {config.business.logo.tagline}
                </p>
              </div>
            </div>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {config.business.tagline}
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed">
              {t('footer.aboutText')}
            </p>

            {/* Verified FSSAI Registration Badge */}
            {config.business.fssai.hasLicense && (
              <div className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 text-xs">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                <div>
                  <div className="font-bold text-[11px] text-white">
                    {config.business.fssai.label}
                  </div>
                  <div className="text-[10px] text-neutral-400 tracking-wider font-mono">
                    Lic. No: {config.business.fssai.licenseNumber}
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Column 2: Quick Links & Order Platforms */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-primary pl-2">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-brand-primary transition">
                  {t('nav.home')}
                </Link>
              </li>
              <li>
                <Link to="/menu" className="hover:text-brand-primary transition">
                  {t('nav.menu')}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-primary transition">
                  {t('nav.about')}
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-brand-primary transition">
                  {t('nav.gallery')}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-brand-primary transition">
                  {t('nav.contact')}
                </Link>
              </li>
            </ul>

            {/* Zomato & Swiggy Links */}
            {(config.integrations.zomatoUrl || config.integrations.swiggyUrl) && (
              <div className="pt-2">
                <div className="text-[11px] font-semibold text-neutral-400 mb-2">
                  Order Also Available On:
                </div>
                <div className="flex flex-wrap gap-2">
                  {config.integrations.zomatoUrl && (
                    <a
                      href={config.integrations.zomatoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-red-600/20 text-red-400 border border-red-600/30 text-xs font-bold hover:bg-red-600 hover:text-white transition flex items-center gap-1"
                    >
                      <span>Zomato</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                  {config.integrations.swiggyUrl && (
                    <a
                      href={config.integrations.swiggyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-3 py-1.5 rounded bg-orange-600/20 text-orange-400 border border-orange-600/30 text-xs font-bold hover:bg-orange-600 hover:text-white transition flex items-center gap-1"
                    >
                      <span>Swiggy</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Column 3: Hours & Timings */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-primary pl-2">
              {t('footer.timings')}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <div className="font-semibold text-white">Daily Timings</div>
                  <div className="text-neutral-400">{config.contact.timings.openingHours}</div>
                </div>
              </div>

              <div className="p-2 rounded bg-neutral-900 border border-neutral-800 text-[11px]">
                <span className="text-emerald-400 font-bold block mb-0.5">
                  {config.contact.timings.weeklyHoliday}
                </span>
                <span className="text-neutral-400">
                  Breakfast: {config.contact.timings.breakfast} <br />
                  Dinner: {config.contact.timings.dinner}
                </span>
              </div>

              <div className="flex items-start gap-2 text-neutral-400">
                <Car className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-[11px] leading-relaxed">
                  {config.contact.address.highwayInfo}
                </span>
              </div>
            </div>
          </div>

          {/* Column 4: Contact & Social */}
          <div className="space-y-4">
            <h4 className="text-sm font-bold uppercase tracking-wider text-white border-l-2 border-brand-primary pl-2">
              {t('footer.contactUs')}
            </h4>
            <div className="space-y-2.5 text-xs">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-brand-primary shrink-0 mt-0.5" />
                <span className="text-neutral-300">
                  {config.contact.address.line1}, {config.contact.address.line2}, {config.contact.address.city}, {config.contact.address.state} - {config.contact.address.pincode}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a href={`tel:${config.contact.phoneCall}`} className="hover:text-white transition">
                  {config.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-green-500 shrink-0" />
                <a
                  href={`https://wa.me/${config.contact.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  {config.contact.whatsappDisplay} (WhatsApp Order)
                </a>
              </div>

              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href={`mailto:${config.contact.email}`} className="hover:text-white transition">
                  {config.contact.email}
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-2 flex items-center gap-3">
              {config.integrations.social.instagram && (
                <a
                  href={config.integrations.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-primary transition"
                  aria-label="Instagram"
                >
                  <InstagramIcon className="w-4 h-4" />
                </a>
              )}
              {config.integrations.social.facebook && (
                <a
                  href={config.integrations.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-primary transition"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-4 h-4" />
                </a>
              )}
              {config.integrations.social.youtube && (
                <a
                  href={config.integrations.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-white hover:bg-brand-primary transition"
                  aria-label="YouTube"
                >
                  <YoutubeIcon className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Demo Notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            &copy; {new Date().getFullYear()} {config.business.name}. {t('footer.allRights')}.
          </div>

          <div className="text-center sm:text-right">
            <span className="text-neutral-400 font-medium">
              {config.business.demoNotice}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
