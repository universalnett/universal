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
            
            {/* PRIMARY COMPLIANCE STATEMENT - MANDATORY */}
            <div className="bg-gradient-to-br from-primary/10 to-transparent rounded-2xl p-8 mb-8 border border-primary/30">
              <p className="text-lg font-bold mb-4 text-foreground">
                {BRAND_NAME} is an independent third-party service assistance provider.
              </p>
              <p className="text-muted-foreground mb-4">
                We are not affiliated with, authorized by, or endorsed by any internet, broadband, or cable TV service provider. Brand names, if mentioned, are used strictly for informational purposes only.
              </p>
            </div>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12 space-y-6">
              <div>
                <h2 className="text-2xl font-bold mb-3">What We Provide</h2>
                <p className="text-muted-foreground">
                  {BRAND_NAME} offers independent guidance and informational support related to cable, internet, broadband, Wi-Fi, and streaming services. We help consumers understand their options, navigate common issues, and prepare for conversations with service providers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">What We Are NOT</h2>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• An Internet Service Provider (ISP) or cable/telecom company</li>
                  <li>• Official customer support for any brand</li>
                  <li>• Affiliated, authorized, or endorsed by any service provider</li>
                  <li>• Able to guarantee specific outcomes with third-party providers</li>
                  <li>• A representative or authorized agent of any provider</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Accuracy & Limitations</h2>
                <p className="text-muted-foreground mb-3">
                  The information provided on this site is educational and intended to help you understand options and processes related to cable, internet, and streaming services. While we strive to provide accurate and up-to-date information, we:
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Do not guarantee the accuracy of all information</li>
                  <li>• Cannot predict outcomes with specific providers</li>
                  <li>• Recommend verifying information directly with your chosen provider</li>
                  <li>• Are not responsible for third-party provider actions or decisions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Credentials & Credentials Safety</h2>
                <p className="text-muted-foreground">
                  We will never request provider passwords or authentication credentials as a condition of assistance. If you choose to share any sensitive information, you do so at your own discretion and risk. We strongly recommend following secure practices when sharing personal or account information with anyone.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Brand References</h2>
                <p className="text-muted-foreground">
                  Any references to provider names, brands, logos, or services are descriptive only and do not indicate endorsement, sponsorship, or partnership. All provider trademarks and intellectual property belong to their respective owners. We mention provider names solely to help users identify relevant services or processes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Liability Limitation</h2>
                <p className="text-muted-foreground">
                  {BRAND_NAME} provides guidance for informational purposes only. We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services, guidance, or information. Users assume all responsibility for their decisions and interactions with service providers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Changes & Updates</h2>
                <p className="text-muted-foreground">
                  We reserve the right to modify this disclaimer and our services at any time. Your continued use of our services constitutes acceptance of any changes.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold mb-3">Contact & Questions</h2>
                <p className="text-muted-foreground">
                  If you have questions about this disclaimer or our services, please contact us using the information provided on our website.
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
