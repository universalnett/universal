import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { DISPLAY_PHONE, BRAND_NAME, LAUNCH_YEAR } from "@/lib/constants";

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
            <p className="text-muted-foreground mb-8">Last updated: January {LAUNCH_YEAR}</p>

            <div className="mb-6 text-sm text-muted-foreground">
              Disclosure: {BRAND_NAME} is an independent third-party service assistance startup, launched in {LAUNCH_YEAR}. We are not affiliated with any provider.
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
                <p className="text-muted-foreground mb-4">
                  We collect the information you share when you request assistance, such as name, contact details, and details about the issue you're seeking help with. We never request provider passwords or other sensitive authentication credentials.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
                <p className="text-muted-foreground mb-4">
                  We use collected information to deliver the assistance you request, facilitate communications with providers with your permission, process payments for our assistance, and improve our guidance services. We do not use your data to impersonate providers.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Information Sharing and Disclosure</h2>
                <p className="text-muted-foreground mb-4">
                  We do not sell your personal information. We may share information with service providers who assist us, to comply with law, or with your consent. We will not request provider passwords as a condition of assistance.
                </p>
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
                  Phone: {DISPLAY_PHONE}<br />
                  Address: 123 Fiber Street, Tech City, TC 12345
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

export default Privacy;
