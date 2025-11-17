import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { MapPin, Search, CheckCircle } from "lucide-react";

const Coverage = () => {
  const regions = [
    {
      name: "Northern Region",
      cities: ["Seattle", "Portland", "Spokane", "Tacoma", "Vancouver"],
      status: "Full Coverage"
    },
    {
      name: "Eastern Region",
      cities: ["New York", "Boston", "Philadelphia", "Pittsburgh", "Buffalo"],
      status: "Full Coverage"
    },
    {
      name: "Southern Region",
      cities: ["Atlanta", "Miami", "Houston", "Dallas", "Austin"],
      status: "Full Coverage"
    },
    {
      name: "Western Region",
      cities: ["Los Angeles", "San Francisco", "San Diego", "Phoenix", "Las Vegas"],
      status: "Full Coverage"
    },
    {
      name: "Central Region",
      cities: ["Chicago", "Denver", "Kansas City", "Minneapolis", "St. Louis"],
      status: "Expanding"
    },
    {
      name: "Mountain Region",
      cities: ["Salt Lake City", "Boise", "Reno", "Albuquerque", "Colorado Springs"],
      status: "Coming Soon"
    }
  ];

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
            className="max-w-4xl mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Check Our <span className="text-highlight">Coverage</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Find out if fiber internet is available in your area. We're constantly expanding
              our network to bring ultra-fast connectivity to more communities.
            </p>

            {/* Address Search */}
            <Card className="border-border">
              <CardContent className="p-6">
                <div className="flex flex-col md:flex-row gap-4">
                  <div className="flex-1">
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                      <Input
                        placeholder="Enter your address or zip code"
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <Button className="neon-glow">
                    <Search className="w-4 h-4 mr-2" />
                    Check Availability
                  </Button>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Coverage Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <Card className="border-border overflow-hidden">
              <div className="bg-gradient-to-br from-secondary via-card to-secondary p-12 md:p-20 text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-2">Interactive Coverage Map</h3>
                <p className="text-muted-foreground">
                  Coverage map visualization would be displayed here
                </p>
              </div>
            </Card>
          </motion.div>

          {/* Coverage Regions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Service <span className="text-highlight">Regions</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regions.map((region, index) => (
                <motion.div
                  key={region.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-border h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="text-xl font-bold">{region.name}</h3>
                        <span className={`text-xs px-2 py-1 rounded-full ${
                          region.status === 'Full Coverage' 
                            ? 'bg-primary/20 text-primary' 
                            : region.status === 'Expanding'
                            ? 'bg-yellow-500/20 text-yellow-500'
                            : 'bg-muted text-muted-foreground'
                        }`}>
                          {region.status}
                        </span>
                      </div>
                      <ul className="space-y-2">
                        {region.cities.map((city) => (
                          <li key={city} className="flex items-center gap-2 text-sm text-muted-foreground">
                            {region.status === 'Full Coverage' && (
                              <CheckCircle className="w-4 h-4 text-primary" />
                            )}
                            {region.status !== 'Full Coverage' && (
                              <div className="w-4 h-4 rounded-full border border-muted-foreground" />
                            )}
                            <span>{city}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-r from-card to-secondary rounded-2xl p-8 md:p-12 text-center border border-border"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don't see your <span className="text-highlight">area</span>?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're constantly expanding our network. Register your interest and we'll notify
              you when fiber internet becomes available in your area.
            </p>
            <Button size="lg" className="neon-glow">
              Register Interest
            </Button>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Coverage;
