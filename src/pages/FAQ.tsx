import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { DISPLAY_PHONE, BRAND_NAME, LAUNCH_YEAR } from "@/lib/constants";
import PhoneButton from "@/components/PhoneButton";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-32 pb-20">
        <div className="container mx-auto px-4 lg:px-8 max-w-3xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
            <p className="text-sm text-muted-foreground mb-6">Disclosure: {BRAND_NAME} is an independent third-party service assistance startup, launched in {LAUNCH_YEAR}. We are not affiliated with, endorsed by, or sponsored by any provider.</p>

            <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
              <div>
                <h3 className="font-semibold">Are you an official cable or internet service provider?</h3>
                <p className="text-muted-foreground">No. We are an independent third-party assistance platform that helps guide and facilitate interactions with providers.</p>
              </div>

              <div>
                <h3 className="font-semibold">Do you sell internet, cable, or streaming plans?</h3>
                <p className="text-muted-foreground">No. We do not sell or activate plans. We provide assistance, explanations, and facilitation only.</p>
              </div>

              <div>
                <h3 className="font-semibold">Do you charge for your services?</h3>
                <p className="text-muted-foreground">Yes. Our service fees are separate from any charges billed by providers. See our Refund Policy for information about refund windows (7–15 days).</p>
              </div>

              <div>
                <h3 className="font-semibold">Will I still be billed by my service provider?</h3>
                <p className="text-muted-foreground">Yes. Any billing from your provider remains between you and that provider unless you instruct them otherwise.</p>
              </div>

              <div>
                <h3 className="font-semibold">Do you need my account passwords or sensitive information?</h3>
                <p className="text-muted-foreground">No. We never request provider passwords. We ask for only the information necessary to assist you and will explain how we use it.</p>
              </div>

              <div>
                <h3 className="font-semibold">Which providers do you support?</h3>
                <p className="text-muted-foreground">We may reference multiple providers for guidance only. Such references are descriptive and do not imply partnership, endorsement, or authorization.</p>
              </div>

              <div>
                <h3 className="font-semibold">Are your services refundable?</h3>
                <p className="text-muted-foreground">Refund requests can be submitted within 7 to 15 days of service purchase, depending on the type of assistance provided and whether assistance has already been delivered. See our Refund Policy page for full details.</p>
              </div>

              <div className="pt-6">
                <PhoneButton className="neon-glow">{DISPLAY_PHONE}</PhoneButton>
              </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default FAQ;
