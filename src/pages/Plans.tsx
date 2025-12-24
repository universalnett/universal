import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import PhoneButton from "@/components/PhoneButton";
import { DISPLAY_PHONE } from "@/lib/constants";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      icon: Zap,
      name: "Home Basic (example)",
      description: "A common entry-level archetype for light households. Use this to compare basic features.",
      features: [
        "Typical speed tier to support browsing and streaming",
        "Check for data caps and equipment fees",
        "Confirm installation and setup responsibilities",
        "Ask about support response times"
      ],
      popular: false
    },
    {
      icon: Rocket,
      name: "Home Premium (example)",
      description: "An illustrative mid-tier archetype for families and heavier usage.",
      features: [
        "Higher speed tiers and improved Wi‑Fi equipment",
        "Look for priority support and router details",
        "Review contract terms and promotional expirations",
        "Understand bundled services and charges"
      ],
      popular: true
    },
    {
      icon: Building2,
      name: "Business Pro (example)",
      description: "A representative business archetype used for comparison when reviewing contracts.",
      features: [
        "Consider SLAs, static IP options, and support SLA",
        "Clarify installation windows and on-site responsibilities",
        "Confirm billing cycles and prorations",
        "Evaluate escalation paths for outages"
      ],
      popular: false
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
            className="text-center max-w-4xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Plan Guidance & Assistance
            </h1>
            <p className="text-xl text-muted-foreground">
              We provide independent, descriptive guidance to help you compare plans and understand what matters for your home or business. We do not sell plans.
            </p>
          </motion.div>

          {/* Plans Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className={`relative h-full ${plan.popular ? 'border-primary shadow-lg shadow-primary/20' : 'border-border'}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold neon-glow">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <CardHeader className="text-center pb-8 pt-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  </CardHeader>

                  <CardContent className="pt-0">
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <PhoneButton className={`w-full ${plan.popular ? 'neon-glow' : ''}`} variant={plan.popular ? 'default' : 'secondary'}>{DISPLAY_PHONE}</PhoneButton>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Enterprise Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-card to-secondary rounded-2xl p-8 md:p-12 border border-border"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Need enterprise assistance?
              </h2>
              <p className="text-muted-foreground mb-8">
                We guide businesses through contract review, provider conversations, and migration planning. Our role is advisory and facilitative — we do not provide connectivity or sell plans.
              </p>
              <PhoneButton size="lg" className="neon-glow">{DISPLAY_PHONE}</PhoneButton>
            </div>
          </motion.div>

          {/* Features Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-20"
          >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Use Our Guidance?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Neutral Advice",
                  description: "We provide descriptive, unbiased information to help you decide."
                },
                {
                  title: "Actionable Steps",
                  description: "Practical checklists and escalation templates to speed resolution."
                },
                {
                  title: "Local Help",
                  description: "Experienced people who understand common provider workflows."
                }
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
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

export default Plans;
