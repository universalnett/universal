import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const Terms = () => {
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
              Terms & <span className="text-highlight">Conditions</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By accessing and using Universal Net's internet services, you accept and
                  agree to be bound by these Terms and Conditions. If you do not agree to these
                  terms, please do not use our services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-4">
                  Universal Net provides fiber-optic internet connectivity services. We strive to
                  maintain 99.9% network uptime, but service may be interrupted for maintenance,
                  upgrades, or due to circumstances beyond our control.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Acceptable Use Policy</h2>
                <p className="text-muted-foreground mb-4">
                  You agree not to use our services for:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Illegal activities or to transmit illegal materials</li>
                  <li>Distributing malware, viruses, or harmful code</li>
                  <li>Sending spam or unsolicited communications</li>
                  <li>Attempting to gain unauthorized access to systems or networks</li>
                  <li>Interfering with other users' use of the service</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground mb-4">
                  You agree to pay all fees associated with your selected service plan. Payments
                  are due monthly in advance. Late payments may result in service suspension or
                  termination. Early termination fees may apply if you cancel before your contract
                  term ends.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Equipment</h2>
                <p className="text-muted-foreground mb-4">
                  We may provide equipment such as routers and modems. You are responsible for
                  the care and return of this equipment. Damage or loss of equipment may result
                  in replacement fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Service Modifications</h2>
                <p className="text-muted-foreground mb-4">
                  We reserve the right to modify, suspend, or discontinue any aspect of our
                  service at any time. We will provide reasonable notice of significant changes
                  that may affect your service.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground mb-4">
                  Universal Net shall not be liable for any indirect, incidental, special,
                  or consequential damages arising from your use or inability to use our services.
                  Our total liability shall not exceed the amount paid by you for services in the
                  three months preceding the claim.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Termination</h2>
                <p className="text-muted-foreground mb-4">
                  Either party may terminate this agreement with 30 days' written notice. We may
                  terminate immediately if you breach these terms or for non-payment of fees.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">9. Contact Information</h2>
                <p className="text-muted-foreground">
                  For questions about these Terms and Conditions, contact us at:<br />
                  Email: legal@universalnet.com<br />
                  Phone: (888) 854-1959
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

export default Terms;
