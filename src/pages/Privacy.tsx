import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Privacy = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Privacy <span className="text-highlight">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  Universal Net collects information that you provide directly to us when you
                  create an account, subscribe to our services, or contact us for support. This may include:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Name, email address, and contact information</li>
                  <li>Billing and payment information</li>
                  <li>Service address and installation details</li>
                  <li>Technical support and communication records</li>
                  <li>Network usage data and service performance metrics</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use the information we collect to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Provide, maintain, and improve our internet services</li>
                  <li>Process your payments and manage your account</li>
                  <li>Send you service updates, technical notices, and support messages</li>
                  <li>Respond to your requests, questions, and feedback</li>
                  <li>Monitor and analyze network performance and usage</li>
                  <li>Detect, prevent, and address technical issues and security threats</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share your information in the
                  following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>With service providers who perform services on our behalf</li>
                  <li>In response to legal requests or to comply with applicable laws</li>
                  <li>To protect the rights, property, and safety of Universal Net and our users</li>
                  <li>With your consent or at your direction</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
                <p className="text-muted-foreground mb-4">
                  We implement appropriate technical and organizational measures to protect your
                  personal information against unauthorized access, alteration, disclosure, or
                  destruction. However, no internet transmission is completely secure, and we
                  cannot guarantee absolute security.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Your Rights and Choices</h2>
                <p className="text-muted-foreground mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Access and update your personal information</li>
                  <li>Request deletion of your data (subject to legal obligations)</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
                <p className="text-muted-foreground mb-4">
                  If you have questions about this Privacy Policy, please contact us at:
                </p>
                <p className="text-muted-foreground">
                  Email: privacy@universalnet.com<br />
                  Phone: (888) 854-1959<br />
                  Address: 123 Fiber Street, Tech City, TC 12345
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
