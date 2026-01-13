import { Link } from "react-router-dom";
import { Wifi, Phone, Zap } from "lucide-react";
import PhoneButton from "./PhoneButton";
import { BRAND_NAME, DISPLAY_PHONE, LAUNCH_YEAR } from "@/lib/constants";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-background via-card to-background">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-64 h-64 bg-primary rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 relative z-10">
        {/* Top Section - Brand & Compliance Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16 items-center">
          <div>
            <div className="mb-6">
              <span className="text-3xl font-bold tracking-tight">
                {BRAND_NAME}
              </span>
              <p className="text-xs text-muted-foreground mt-1">Independent third-party service assistance</p>
            </div>
            {/* COMPLIANCE STATEMENT - VISIBLE IN FOOTER */}
            <div className="bg-card/50 border border-border/50 rounded-lg p-4 mb-6">
              <p className="text-xs text-muted-foreground leading-relaxed">
                <strong>{BRAND_NAME} is an independent third-party service assistance provider.</strong> We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names mentioned are for informational purposes only.
              </p>
            </div>
          </div>

          {/* Contact Information - CLEARLY VISIBLE */}
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8">
            <div className="flex items-center gap-2 mb-6">
              <Phone className="w-6 h-6 text-primary" />
              <h3 className="text-xl font-bold">Contact Us</h3>
            </div>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-muted-foreground mb-1">Phone</p>
                <a 
                  href={`tel:+18888541959`} 
                  className="text-lg font-bold text-primary hover:text-primary/90 transition-colors"
                >
                  {DISPLAY_PHONE}
                </a>
              </div>
              <div>
                <p className="text-xs text-muted-foreground mb-1">Business Name</p>
                <p className="text-sm font-semibold">{BRAND_NAME}</p>
              </div>
              <p className="text-xs text-muted-foreground pt-2">
                Available for service inquiries and guidance related to internet and cable services.
              </p>
            </div>
          </div>
        </div>

        {/* Middle Section - Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-foreground text-lg">Quick Links</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link to="/about" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">About Us</Link></li>
              <li><Link to="/services" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Services</Link></li>
              <li><Link to="/plans" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Plans</Link></li>
              <li><Link to="/faq" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">FAQ</Link></li>
              <li><Link to="/disclaimer" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Disclaimer</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4 text-foreground text-lg">Support</h3>
            <ul className="space-y-3">
              <li><Link to="/coverage" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Coverage</Link></li>
              <li><Link to="/contact" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Contact</Link></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Help Center</a></li>
              <li><a href="#" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Tech Support</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4 text-foreground text-lg">Legal</h3>
            <ul className="space-y-3">
              <li><Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Privacy</Link></li>
              <li><Link to="/terms" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Terms</Link></li>
              <li><Link to="/refund" className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 inline-block transition-all">Refund</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-2">
            <h3 className="font-bold mb-4 text-foreground text-lg">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href={`tel:${"+18888541959"}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">{DISPLAY_PHONE}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {LAUNCH_YEAR} {BRAND_NAME}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <span className="text-xs text-muted-foreground">Made with ❤️ for fast internet</span>
              <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                <span className="text-xs text-primary font-semibold">Online 24/7</span>
              </div>
            </div>
          </div>
        </div>
      </div>
        
        {/* Disclosure - visible in footer on every page */}
        <div className="mt-6 text-xs text-muted-foreground">
          {BRAND_NAME} is an independent third-party service assistance startup, launched in {LAUNCH_YEAR}. We provide neutral assistance and guidance and are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming service provider. All trademarks belong to their respective owners.
          <div className="mt-2">
            <Link to="/faq" className="text-xs text-muted-foreground hover:text-primary mr-4">FAQ</Link>
            <Link to="/disclaimer" className="text-xs text-muted-foreground hover:text-primary">Disclaimer</Link>
          </div>
        </div>
    </footer>
  );
};
