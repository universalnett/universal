import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

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
            <p className="text-muted-foreground mb-8">Last updated: January 2025</p>

            <div className="prose prose-invert max-w-none">
              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">1. 30-Day Money-Back Guarantee</h2>
                <p className="text-muted-foreground mb-4">
                  We offer a 30-day money-back guarantee for all new residential customers. If
                  you're not satisfied with our service within the first 30 days, you may cancel
                  and receive a full refund of your monthly service fees.
                </p>
                <p className="text-muted-foreground mb-4">
                  Please note: Installation fees, equipment costs, and third-party charges are
                  non-refundable.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">2. Service Credit for Outages</h2>
                <p className="text-muted-foreground mb-4">
                  If you experience a service outage lasting more than 4 consecutive hours due
                  to our network issues, you may be eligible for a service credit. Credits are
                  calculated as a pro-rata amount of your monthly fee for the duration of the
                  outage.
                </p>
                <p className="text-muted-foreground mb-4">
                  To request a service credit, contact our support team within 30 days of the
                  outage with details of the incident.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">3. Mid-Contract Cancellation</h2>
                <p className="text-muted-foreground mb-4">
                  If you cancel your service before your contract term ends, you may be subject
                  to an early termination fee. This fee is calculated based on the remaining
                  months of your contract.
                </p>
                <p className="text-muted-foreground mb-4">
                  Early termination fees may be waived in the following circumstances:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-4">
                  <li>You move to a location where our service is not available</li>
                  <li>Significant changes to service terms that you do not accept</li>
                  <li>Documented prolonged service issues that remain unresolved</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">4. Refund Processing Time</h2>
                <p className="text-muted-foreground mb-4">
                  Approved refunds are processed within 5-10 business days. The refund will be
                  credited to your original payment method. Please allow additional time for your
                  financial institution to process the credit.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">5. Equipment Return</h2>
                <p className="text-muted-foreground mb-4">
                  To receive a full refund, you must return all Universal Net equipment (routers,
                  modems, etc.) within 30 days of service cancellation. Equipment must be
                  returned in good working condition.
                </p>
                <p className="text-muted-foreground mb-4">
                  Failure to return equipment or returning damaged equipment may result in
                  equipment replacement charges being deducted from your refund.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">6. Business Accounts</h2>
                <p className="text-muted-foreground mb-4">
                  Business account refund policies may differ from residential accounts. Please
                  refer to your business service agreement or contact your account manager for
                  specific details.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">7. How to Request a Refund</h2>
                <p className="text-muted-foreground mb-4">
                  To request a refund:
                </p>
                <ol className="list-decimal list-inside text-muted-foreground space-y-2 mb-4">
                  <li>Contact our customer support team</li>
                  <li>Provide your account details and reason for the refund request</li>
                  <li>Follow instructions for equipment return (if applicable)</li>
                  <li>Allow 5-10 business days for processing</li>
                </ol>
              </section>

              <section className="mb-8">
                <h2 className="text-2xl font-bold mb-4">8. Contact Us</h2>
                <p className="text-muted-foreground">
                  For refund inquiries or questions about this policy:<br />
                  Email: billing@universalnet.com<br />
                  Phone: (888) 854-1959<br />
                  Hours: Monday-Friday 8AM-8PM, Saturday-Sunday 9AM-5PM
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

export default Refund;
