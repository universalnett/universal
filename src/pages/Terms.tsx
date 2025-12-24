import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { DISPLAY_PHONE, BRAND_NAME, LAUNCH_YEAR } from "@/lib/constants";

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
            <p className="text-muted-foreground mb-8">Last updated: January {LAUNCH_YEAR}</p>

            <div className="mb-6 text-sm text-muted-foreground">
              Disclosure: {BRAND_NAME} is an independent third-party service assistance startup, launched in {LAUNCH_YEAR}. We are not affiliated with, endorsed by, or sponsored by any cable, internet, or streaming provider.
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
                <p className="text-muted-foreground mb-4">
                  By using this site to request assistance, you agree to these Terms. If you do not accept these Terms, please do not use our assistance services.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Service Description</h2>
                <p className="text-muted-foreground mb-4">
                  {BRAND_NAME} provides independent assistance and guidance related to cable, internet, and streaming services. We do not provide connectivity, sell plans, or operate a network.
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
                  When you purchase assistance from {BRAND_NAME}, any fees for our assistance are separate from provider charges. Provider billing remains unchanged. Please review the Refund Policy for eligibility and timelines.
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
                  For questions about these Terms, contact our support team at:<br />
                  Email: legal@universalnet.com<br />
                  Phone: {DISPLAY_PHONE}
                </p>
              </section>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
