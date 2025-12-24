import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { DISPLAY_PHONE, BRAND_NAME, LAUNCH_YEAR } from "@/lib/constants";

const Refund = () => {
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
              Refund <span className="text-highlight">Policy</span>
            </h1>
            <p className="text-muted-foreground mb-8">Last updated: January {LAUNCH_YEAR}</p>

            <div className="mb-6 text-sm text-muted-foreground">
              Disclosure: {BRAND_NAME} is an independent third-party service assistance startup, launched in {LAUNCH_YEAR}. We do not sell provider plans and are not affiliated with providers.
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert max-w-none">
                <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. Refund Window</h2>
                <p className="text-muted-foreground mb-4">
                  Refund requests can be submitted within 7 to 15 days of purchasing assistance, depending on the type of assistance provided and whether substantive assistance has already been delivered.
                </p>
                <p className="text-muted-foreground mb-4">
                  Eligibility depends on the assistance type and any third-party costs incurred. Please review the eligibility details below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Refund Eligibility</h2>
                <p className="text-muted-foreground mb-4">
                  Refund eligibility is evaluated based on the category of assistance, whether work was completed, and any third-party charges. Refunds do not cover provider charges.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Third-Party Costs</h2>
                <p className="text-muted-foreground mb-4">
                  Refunds do not cover fees charged directly by providers. If {BRAND_NAME} paid third-party fees on your behalf, those costs may affect refund amounts.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Refund Processing Time</h2>
                <p className="text-muted-foreground mb-4">
                  Approved refunds are generally processed within 5-10 business days and credited to the original payment method. Processing times may vary by financial institution.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. How to Request a Refund</h2>
                <p className="text-muted-foreground mb-4">To request a refund within the 7–15 day window:</p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Contact our support team with purchase details.</li>
                  <li>Explain the assistance provided and whether any work was completed.</li>
                  <li>Provide receipts for any third-party costs, if applicable.</li>
                  <li>We will review and respond with next steps.</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Business Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  Business assistance and refund eligibility may differ; contact our team to review your account.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
                <p className="text-muted-foreground">
                  For refund inquiries or questions about this policy:<br />
                  Email: billing@universalnet.com<br />
                  Phone: {DISPLAY_PHONE}<br />
                  Hours: Monday-Friday 8AM-8PM, Saturday-Sunday 9AM-5PM
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

export default Refund;
