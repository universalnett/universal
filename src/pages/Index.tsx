import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { ServiceCard } from "@/components/ServiceCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Shield, 
  Smartphone, 
  TrendingUp, 
  Wifi, 
  Users,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import teamWork from "@/assets/team-work.jpg";
import nocCenter from "@/assets/noc-center.jpg";
import wifiRouter from "@/assets/wifi-router.jpg";
import fiberNetwork from "@/assets/fiber-network.jpg";
import familyInternet from "@/assets/family-internet.jpg";
import speedMeter from "@/assets/speed-meter.jpg";

const Index = () => {
  const services = [
    {
      icon: Globe,
      title: "Fiber Broadband",
      description: "Ultra-fast fiber internet with speeds up to 10 Gbps for residential and commercial use.",
      features: [
        "Symmetric Upload/Download",
        "99.9% Uptime Guarantee",
        "No Data Caps",
        "IPv6 Ready"
      ]
    },
    {
      icon: Smartphone,
      title: "Business Solutions",
      description: "Enterprise-grade connectivity solutions tailored for your business needs.",
      features: [
        "Dedicated Bandwidth",
        "SLA Backed Service",
        "Priority Support",
        "Custom Solutions"
      ]
    },
    {
      icon: Shield,
      title: "Network Security",
      description: "Advanced security solutions to protect your network infrastructure and data.",
      features: [
        "DDoS Protection",
        "Firewall Management",
        "24/7 Monitoring",
        "Threat Intelligence"
      ]
    }
  ];

  const stats = [
    { number: "10K+", label: "Happy Customers" },
    { number: "99.9%", label: "Network Uptime" },
    { number: "24/7", label: "Support Available" },
    { number: "50+", label: "Cities Covered" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Hero />

      {/* ISP Problems Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Internet service provider <span className="text-highlight">problems</span> and their{" "}
                <span className="text-highlight">solutions</span>
              </h2>
              <p className="text-muted-foreground mb-6">
                Dealing with unreliable internet experiences that slow down productivity and
                drive meaningful connections? Our internet service providers offer solutions,
                strategy, and expertise in all facets of online connectivity that aim to provide
                faster, more reliable connections delivered by the choice and measure of the
                service selected by the values of clients of the network.
              </p>
              <Link to="/about">
                <Button className="neon-glow group">
                  Learn More
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <img
                src={teamWork}
                alt="Team collaboration"
                className="w-full h-64 object-cover rounded-lg"
              />
              <div className="flex flex-col gap-4">
                <div className="w-24 h-24 rounded-full border-2 border-primary flex items-center justify-center bg-card">
                  <Wifi className="w-12 h-12 text-primary" />
                </div>
                <img
                  src={nocCenter}
                  alt="Network operations"
                  className="w-full h-36 object-cover rounded-lg"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with WiFi Image */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Why choose <span className="text-highlight">Universal Net</span> for your connectivity?
              </h2>
              <p className="text-muted-foreground mb-6">
                Experience the next generation of internet connectivity with our cutting-edge
                fiber-optic infrastructure and enterprise-grade WiFi solutions.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  "Lightning-fast fiber speeds up to 10 Gbps",
                  "Advanced WiFi 6 routers included",
                  "Zero buffering, zero lag guaranteed",
                  "99.9% network uptime SLA",
                  "24/7 expert technical support",
                  "Free professional installation"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
              <Link to="/services">
                <Button className="neon-glow group">
                  Discover Our Technology
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src={wifiRouter}
                alt="Advanced WiFi Router Technology"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-card border border-border rounded-lg p-4 shadow-lg">
                <p className="text-sm text-muted-foreground mb-1">Connection Speed</p>
                <p className="text-2xl font-bold text-primary">10 Gbps</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fiber Technology Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={fiberNetwork}
                alt="Fiber Optic Network Infrastructure"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Built on <span className="text-highlight">fiber-optic</span> excellence
              </h2>
              <p className="text-muted-foreground mb-6">
                Our state-of-the-art fiber infrastructure delivers unmatched speed, reliability,
                and scalability. Using advanced optical networking technology, we ensure your
                connection is future-proof and capable of handling tomorrow's demands.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary mb-1">100%</p>
                  <p className="text-sm text-muted-foreground">Fiber Network</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary mb-1">10x</p>
                  <p className="text-sm text-muted-foreground">Faster Upload</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary mb-1">50ms</p>
                  <p className="text-sm text-muted-foreground">Ultra-Low Latency</p>
                </div>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="text-3xl font-bold text-primary mb-1">∞</p>
                  <p className="text-sm text-muted-foreground">No Data Caps</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Speed Performance Section */}
      <section className="py-20 bg-gradient-to-br from-card via-background to-card">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Experience <span className="text-highlight">gigabit speeds</span> like never before
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Say goodbye to buffering and slow downloads. Our fiber network delivers consistent
              gigabit speeds that handle everything from 4K streaming to massive file transfers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <img
              src={speedMeter}
              alt="Gigabit Speed Performance"
              className="w-full h-auto rounded-lg shadow-2xl"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
            {[
              { icon: TrendingUp, title: "Consistent Speed", description: "Same speed during peak hours" },
              { icon: Wifi, title: "Unlimited Devices", description: "Connect all your smart home devices" },
              { icon: Shield, title: "Secure Network", description: "Enterprise-grade security included" }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Family/Lifestyle Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Internet that <span className="text-highlight">powers</span> your whole home
              </h2>
              <p className="text-muted-foreground mb-6">
                From remote work and online learning to gaming and streaming, Universal Net keeps
                your entire family connected without slowdowns or interruptions.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Family-Friendly Plans</h3>
                    <p className="text-sm text-muted-foreground">
                      Plans designed for households with multiple users and devices
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Parental Controls</h3>
                    <p className="text-sm text-muted-foreground">
                      Keep your kids safe online with built-in content filtering
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Smartphone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Smart Home Ready</h3>
                    <p className="text-sm text-muted-foreground">
                      Connect all your IoT devices without network congestion
                    </p>
                  </div>
                </div>
              </div>
              <Link to="/plans">
                <Button className="neon-glow">
                  Find Your Perfect Plan
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src={familyInternet}
                alt="Family enjoying fast internet"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-card/30">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mb-12"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Explore unique internet service provider <span className="text-highlight">services</span>
            </h2>
            <p className="text-muted-foreground">
              Crafting compelling digital experiences that captivate audiences and drive
              meaningful connections. Our internet service providers offer solutions and
              expertise to fuel your online success.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                {...service}
                delay={index * 0.1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-primary/5">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Unique Diagonal Layout */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary/5" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-0 items-center max-w-6xl mx-auto">
            {/* Left Side - Diagonal Shape */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="bg-primary p-12 rounded-3xl transform lg:-rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl">
                <div className="transform lg:rotate-3">
                  <h2 className="text-3xl md:text-5xl font-bold mb-6 text-primary-foreground">
                    Ready to experience{" "}
                    <span className="bg-white text-primary px-3 py-1 rounded-lg inline-block">
                      blazing-fast
                    </span>{" "}
                    internet?
                  </h2>
                  <p className="text-primary-foreground/90 text-lg mb-8">
                    Join thousands of satisfied customers enjoying ultra-reliable fiber connectivity.
                  </p>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex -space-x-2">
                      <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-white/30 border-2 border-white" />
                      <div className="w-10 h-10 rounded-full bg-white/40 border-2 border-white" />
                    </div>
                    <span className="text-white font-semibold">10,000+ Happy Customers</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Buttons */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col gap-6 lg:pl-12"
            >
              <Link to="/plans" className="block">
                <button className="group relative p-8 bg-card border-2 border-primary rounded-2xl hover:bg-primary transition-all duration-300 text-left overflow-hidden w-full">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary-foreground transition-colors">View Our Plans</h3>
                    <p className="text-muted-foreground group-hover:text-primary-foreground/80 transition-colors">Explore flexible internet packages</p>
                  </div>
                  <ArrowRight className="absolute bottom-4 right-4 w-8 h-8 text-primary group-hover:text-primary-foreground group-hover:translate-x-2 transition-all" />
                </button>
              </Link>

              <Link to="/coverage" className="block">
                <button className="group relative p-8 bg-card border-2 border-border rounded-2xl hover:border-primary transition-all duration-300 text-left overflow-hidden w-full">
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-2">Check Coverage</h3>
                    <p className="text-muted-foreground">See if we're in your area</p>
                  </div>
                  <ArrowRight className="absolute bottom-4 right-4 w-8 h-8 text-muted-foreground group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
