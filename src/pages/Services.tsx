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
      title: "Fiber Broadband",
      description: "Lightning-fast fiber internet with speeds up to 10 Gbps for homes and businesses.",
      features: [
        "Symmetric Upload/Download Speeds",
        "99.9% Network Uptime Guarantee",
        "Unlimited Data Usage",
        "IPv6 Ready Infrastructure"
      ]
    },
    {
      icon: Smartphone,
      title: "Business Internet",
      description: "Enterprise-grade connectivity solutions with dedicated bandwidth and priority support.",
      features: [
        "Dedicated Fiber Connections",
        "SLA-Backed Service Guarantees",
        "Scalable Bandwidth Options",
        "Business-Grade Equipment"
      ]
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Comprehensive security solutions to protect your network and data from threats.",
      features: [
        "Advanced DDoS Protection",
        "Managed Firewall Services",
        "Real-time Threat Monitoring",
        "Security Incident Response"
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      description: "Reliable cloud infrastructure and hosting solutions for modern businesses.",
      features: [
        "Private Cloud Hosting",
        "Cloud Backup Solutions",
        "Hybrid Cloud Architecture",
        "Disaster Recovery Services"
      ]
    },
    {
      icon: Network,
      title: "Managed Networks",
      description: "Complete network management and optimization services for enterprise clients.",
      features: [
        "24/7 Network Monitoring",
        "Performance Optimization",
        "Network Design & Planning",
        "Equipment Maintenance"
      ]
    },
    {
      icon: Server,
      title: "Colocation Services",
      description: "Secure data center space with enterprise-grade infrastructure and connectivity.",
      features: [
        "Tier III Data Centers",
        "Redundant Power Systems",
        "Physical Security 24/7",
        "Direct Fiber Connectivity"
      ]
    },
    {
      icon: Zap,
      title: "Fiber Installation",
      description: "Professional fiber optic installation and deployment services.",
      features: [
        "Site Survey & Planning",
        "Professional Installation",
        "Quality Testing & Validation",
        "Post-Installation Support"
      ]
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description: "Round-the-clock technical support from our expert team.",
      features: [
        "Phone & Email Support",
        "Live Chat Assistance",
        "On-Site Technical Support",
        "Proactive Monitoring"
      ]
    },
    {
      icon: Lock,
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to safeguard your digital assets.",
      features: [
        "Vulnerability Assessments",
        "Penetration Testing",
        "Security Compliance",
        "Incident Management"
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
