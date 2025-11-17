import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

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
              We're pioneering the future of connectivity with cutting-edge fiber infrastructure
              and unwavering commitment to customer satisfaction.
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
                To deliver ultra-fast, reliable fiber internet connectivity that empowers
                individuals and businesses to thrive in an increasingly digital world, while
                maintaining the highest standards of service excellence.
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
                To become the nation's leading fiber internet provider, connecting every home and
                business with world-class infrastructure that enables limitless digital possibilities
                and drives economic growth.
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
                Founded in 2015, Universal Net began with a simple yet ambitious goal: to
                revolutionize internet connectivity by bringing fiber-optic technology to
                underserved communities. What started as a small regional operation has grown
                into a nationwide network serving over 10,000 customers across 50+ cities.
              </p>
              <p className="text-muted-foreground mb-4">
                Our journey has been driven by innovation, customer-first values, and an
                unwavering belief that everyone deserves access to lightning-fast, reliable
                internet. We've invested millions in cutting-edge infrastructure, assembled a
                team of industry experts, and maintained our commitment to exceptional service.
              </p>
              <p className="text-muted-foreground">
                Today, we continue to expand our network, enhance our services, and set new
                standards for what an internet service provider can be. Our story is one of
                growth, innovation, and dedication to connecting communities.
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
