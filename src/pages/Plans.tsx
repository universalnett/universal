import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";
import { DISPLAY_PHONE, BRAND_NAME } from "@/lib/constants";
import { motion } from "framer-motion";
import { CheckCircle, AlertCircle } from "lucide-react";

const Plans = () => {
  const whatWeDo = [
    "Help you understand internet and broadband service options",
    "Provide neutral, descriptive guidance on common plan features",
    "Explain technical terms and service requirements",
    "Offer checklists to help evaluate what matters most to you",
    "Guide you through common provider processes"
  ];

  const whatWeDoNot = [
    "Sell internet or cable subscriptions",
    "Act as an Internet Service Provider (ISP)",
    "Provide official customer support for any brand",
    "Represent or partner with any telecom or cable company",
    "Guarantee specific outcomes with service providers"
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Plan Guidance & Service Assistance
            </h1>
            <p className="text-xl text-muted-foreground">
              {BRAND_NAME} is an independent third-party service assistance provider. We provide neutral guidance to help you understand internet, broadband, and cable TV service options.
            </p>
          </motion.div>

          {/* What We Do - Compliant Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 border border-primary/30">
                <div className="flex items-center gap-3 mb-6">
                  <CheckCircle className="w-8 h-8 text-primary flex-shrink-0" />
                  <h2 className="text-2xl font-bold">What We Provide</h2>
                </div>
                <ul className="space-y-4">
                  {whatWeDo.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-gradient-to-br from-destructive/10 to-transparent rounded-2xl p-8 border border-destructive/30">
                <div className="flex items-center gap-3 mb-6">
                  <AlertCircle className="w-8 h-8 text-destructive flex-shrink-0" />
                  <h2 className="text-2xl font-bold">What We Are NOT</h2>
                </div>
                <ul className="space-y-4">
                  {whatWeDoNot.map((item, idx) => (
                    <li key={idx} className="flex gap-3">
                      <span className="w-2 h-2 bg-destructive rounded-full mt-2 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Compliance Statement */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 mb-20"
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Important Disclaimer</h2>
            <p className="text-muted-foreground mb-4">
              <strong>{BRAND_NAME} is an independent third-party service assistance provider.</strong> We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
            </p>
            <p className="text-muted-foreground">
              Our role is limited to independent guidance and informational support. We cannot guarantee outcomes with third-party service providers, nor do we represent or speak on behalf of any ISP, telecom company, or cable provider.
            </p>
          </motion.div>

          {/* How We Help Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              How We Help You Navigate Service Options
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Understand Your Options",
                  description: "Learn what features matter, what questions to ask, and what to look for when evaluating services."
                },
                {
                  title: "Get Clear Explanations",
                  description: "We translate industry jargon and explain technical requirements in simple, practical terms."
                },
                {
                  title: "Prepare for Conversations",
                  description: "We provide checklists, templates, and talking points to help you communicate effectively with providers."
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                >
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-8 md:p-12 border border-primary/30 text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Get Independent Guidance?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Talk to our independent service advisors. We'll help you understand your options and navigate service provider processes.
            </p>
            <PhoneButton size="lg" className="neon-glow">{DISPLAY_PHONE}</PhoneButton>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Plans;
