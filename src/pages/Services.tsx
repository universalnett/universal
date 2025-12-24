import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Smartphone,
  Cloud,
  Network,
  Headphones,
  Server,
  Zap,
  Lock
} from "lucide-react";

const Services = () => {
  const allServices = [
    {
      icon: Globe,
      title: "Billing & Account Assistance",
      description: "Help understanding bills, charges, and account statements from providers.",
      features: [
        "Bill review and explanation",
        "Charge dispute guidance",
        "Payment plan assistance",
        "Provider communication templates"
      ]
    },
    {
      icon: Smartphone,
      title: "Plan Comparison & Guidance",
      description: "Neutral, educational comparisons of plans and features to help you choose.",
      features: [
        "Plan feature breakdowns",
        "Side-by-side comparisons",
        "Cost vs. value analysis",
        "Provider requirement explanations"
      ]
    },
    {
      icon: Shield,
      title: "Technical Troubleshooting Guidance",
      description: "Step-by-step guidance to troubleshoot common connectivity issues with your provider.",
      features: [
        "Connection diagnosis steps",
        "Router and Wi‑Fi guidance",
        "Signal and speed checks",
        "When to escalate to provider"
      ]
    },
    {
      icon: Cloud,
      title: "Provider Escalation Support",
      description: "Assistance preparing and escalating issues to providers for faster resolution.",
      features: [
        "Issue documentation",
        "Escalation templates",
        "Follow-up coordination",
        "Advocacy best practices"
      ]
    },
    {
      icon: Network,
      title: "Onboarding & Setup Help",
      description: "Guidance through new-service setup, activation steps, and modem/router configuration.",
      features: [
        "Activation walkthroughs",
        "Router setup guidance",
        "Service verification steps",
        "Provider checklist"
      ]
    },
    {
      icon: Headphones,
      title: "Privacy & Security Advice",
      description: "Recommendations to protect your account and personal data when interacting with providers.",
      features: [
        "Credential safety tips",
        "Privacy settings review",
        "Phishing awareness",
        "Secure communication practices"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Our <span className="text-highlight">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive internet and networking solutions designed to meet the diverse needs
              of homes, businesses, and enterprises. From ultra-fast fiber connections to
              enterprise security, we've got you covered.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.05}
              />
            ))}
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20 bg-gradient-to-r from-card to-secondary rounded-2xl p-8 md:p-12 text-center border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need a <span className="text-highlight">custom solution</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team of experts can design a tailored internet and networking solution
              that perfectly fits your unique requirements.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors neon-glow"
            >
              Contact Our Team
            </a>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
