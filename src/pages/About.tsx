import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users, AlertCircle } from "lucide-react";
import { BRAND_NAME, LAUNCH_YEAR } from "@/lib/constants";

const About = () => {
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
            className="max-w-4xl mb-20"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-highlight">Universal Net</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Universal Net provides independent third-party service assistance and guidance for
              cable, internet, and streaming customers. We help with account, billing, and
              service navigation — we do not sell plans or act as a service provider.
            </p>
          </motion.div>

          {/* Compliance Disclaimer - MUST APPEAR EARLY */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 md:p-12 border border-primary/30 mb-20"
          >
            <div className="flex items-center gap-3 mb-6">
              <AlertCircle className="w-8 h-8 text-primary flex-shrink-0" />
              <h2 className="text-2xl md:text-3xl font-bold">Important Disclosure</h2>
            </div>
            <p className="text-lg text-muted-foreground mb-4">
              <strong>{BRAND_NAME} is an independent third-party service assistance provider.</strong>
            </p>
            <p className="text-muted-foreground">
              We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. We do not represent or partner with any ISP, telecom company, or cable provider. Our role is limited to independent guidance and informational support only.
            </p>
          </motion.div>

          {/* Mission & Vision */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground">
                To empower consumers with clear, unbiased assistance on account, billing, and
                service-related matters — helping people resolve issues and make informed
                decisions when dealing with cable, internet, and streaming providers.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card border border-border rounded-xl p-8"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-muted-foreground">
                To be the nation's most trusted independent assistance resource for customers
                navigating service, billing, and account challenges — recognized for clarity,
                neutrality, and results.
              </p>
            </motion.div>
          </div>

          {/* Story Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-muted-foreground mb-4">
                Launched in 2025 as an independent third-party assistance startup, Universal Net
                was created to help customers navigate complex account and billing issues with
                cable, internet, and streaming providers. Our focus is on advocacy, clarity,
                and practical resolution — not selling service plans.
              </p>
              <p className="text-muted-foreground mb-4">
                Our work is driven by a customer-first approach: listening carefully, providing
                transparent guidance, and escalating issues when needed so customers get fair
                outcomes.
              </p>
              <p className="text-muted-foreground">
                We partner with consumer advocates and maintain strict neutrality to ensure
                our recommendations and support remain unbiased and focused on the customer's
                best interest.
              </p>
            </div>
          </motion.div>

          {/* Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: Award,
                  title: "Excellence",
                  description: "We strive for excellence in every aspect of our service delivery."
                },
                {
                  icon: Users,
                  title: "Customer First",
                  description: "Our customers are at the heart of everything we do."
                },
                {
                  icon: Target,
                  title: "Innovation",
                  description: "We continuously innovate to stay ahead of technology trends."
                }
              ].map((value, index) => (
                <div
                  key={value.title}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
