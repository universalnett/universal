import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Check, Zap, Building2, Rocket } from "lucide-react";

const Plans = () => {
  const plans = [
    {
      icon: Zap,
      name: "Home Basic",
      speed: "100 Mbps",
      price: "$49",
      period: "/month",
      description: "Perfect for browsing, streaming, and everyday use",
      features: [
        "100 Mbps symmetric speed",
        "Unlimited data usage",
        "Free router included",
        "24/7 customer support",
        "Free installation",
        "No contracts required"
      ],
      popular: false
    },
    {
      icon: Rocket,
      name: "Home Premium",
      speed: "500 Mbps",
      price: "$79",
      period: "/month",
      description: "Ideal for families and power users",
      features: [
        "500 Mbps symmetric speed",
        "Unlimited data usage",
        "Advanced WiFi 6 router",
        "Priority customer support",
        "Free installation & setup",
        "No contracts required",
        "Parental controls included",
        "Network security suite"
      ],
      popular: true
    },
    {
      icon: Building2,
      name: "Business Pro",
      speed: "1 Gbps",
      price: "$149",
      period: "/month",
      description: "Enterprise-grade connectivity for businesses",
      features: [
        "1 Gbps symmetric speed",
        "Unlimited data usage",
        "Business-grade equipment",
        "Dedicated support team",
        "SLA-backed uptime guarantee",
        "Static IP addresses (5)",
        "Priority installation",
        "Free on-site support"
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
              Choose Your <span className="text-highlight">Perfect Plan</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Lightning-fast fiber internet plans for homes and businesses. No hidden fees,
              no data caps, just pure speed.
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
                    <div className="mb-2">
                      <span className="text-5xl font-bold">{plan.price}</span>
                      <span className="text-muted-foreground">{plan.period}</span>
                    </div>
                    <p className="text-3xl font-bold text-primary">{plan.speed}</p>
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
                    <Button 
                      className={`w-full ${plan.popular ? 'neon-glow' : ''}`}
                      variant={plan.popular ? 'default' : 'secondary'}
                    >
                      Get Started
                    </Button>
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
                Need <span className="text-highlight">Enterprise Solutions</span>?
              </h2>
              <p className="text-muted-foreground mb-8">
                For businesses requiring custom bandwidth, dedicated support, and tailored SLAs,
                our enterprise team can design a solution that fits your exact needs.
              </p>
              <Button size="lg" className="neon-glow">
                Contact Sales Team
              </Button>
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
              Why Choose <span className="text-highlight">Universal Net</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "No Hidden Fees",
                  description: "What you see is what you pay. No surprise charges or hidden costs."
                },
                {
                  title: "99.9% Uptime",
                  description: "Industry-leading reliability with SLA-backed uptime guarantees."
                },
                {
                  title: "Local Support",
                  description: "Real people, real help. 24/7 support from our expert team."
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
