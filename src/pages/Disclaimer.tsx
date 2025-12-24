import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { BRAND_NAME, LAUNCH_YEAR } from "@/lib/constants";

const Disclaimer = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-4">Disclaimer</h1>
            <p className="text-sm text-muted-foreground mb-6">{BRAND_NAME} is an independent third-party assistance startup, launched in {LAUNCH_YEAR}. We provide guidance and facilitation only; we are not a service provider and do not sell or activate plans.</p>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="prose prose-invert">
                <p>
                  The information provided on this site is educational and intended to help you understand options and processes related to cable, internet, and streaming services. While we strive to be accurate, we do not guarantee outcomes with third-party providers.
                </p>

                <p>
                  We will never request provider passwords or authentication credentials as a condition of assistance. If you choose to share any sensitive information, you do so at your own discretion and should follow our guidance on secure sharing.
                </p>

                <p>
                  Provider references are descriptive only and do not indicate endorsement, sponsorship, or partnership. All provider trademarks belong to their respective owners.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Disclaimer;
