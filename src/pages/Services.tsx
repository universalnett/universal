import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ServiceCard } from "@/components/ServiceCard";
import PhoneButton from "@/components/PhoneButton";
import { DISPLAY_PHONE, BRAND_NAME } from "@/lib/constants";
import { motion } from "framer-motion";
import {
  Globe,
  Shield,
  Smartphone,
  Cloud,
  Network,
  Headphones,
  AlertCircle,
  CheckCircle
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

  const doNots = [
    "Provide official customer support for any brand",
    "Sell internet or cable subscriptions",
    "Act as an Internet Service Provider (ISP)",
    "Guarantee specific technical fixes or outcomes",
    "Represent or partner with telecom/cable companies"
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
              What We <span className="text-highlight">Provide</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              {BRAND_NAME} provides independent third-party guidance and informational support related to internet, broadband, Wi-Fi, and cable TV services. We help you understand your options and navigate service provider processes.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {allServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.05}
              />
            ))}
          </div>

          {/* What We Do Not Do - MANDATORY COMPLIANCE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <div className="bg-gradient-to-br from-destructive/10 to-transparent rounded-2xl p-8 md:p-12 border border-destructive/30">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                <h2 className="text-3xl font-bold">What We Do NOT Provide</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                To avoid confusion, please note the following services are NOT offered by {BRAND_NAME}:
              </p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {doNots.map((item, idx) => (
                  <li key={idx} className="flex gap-3">
                    <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Compliance Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold">Our Commitment to Clarity</h2>
            </div>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong>{BRAND_NAME} is an independent third-party service assistance provider.</strong>
              </p>
              <p>
                We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. We do not represent any ISP, telecom company, or cable provider.
              </p>
              <p>
                Our role is limited to independent guidance, informational support, and practical assistance. Brand references are for informational purposes only and do not indicate endorsement, sponsorship, or partnership.
              </p>
              <p>
                We cannot and do not guarantee outcomes with third-party service providers. Our guidance is intended to inform and empower you in your conversations with your chosen provider.
              </p>
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 text-center border border-primary/30"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready for Independent <span className="text-highlight">Assistance?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Talk to our service advisors. We'll provide informational support and guidance to help you navigate internet and cable service options.
            </p>
            <PhoneButton size="lg" className="neon-glow">{DISPLAY_PHONE}</PhoneButton>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Services;
