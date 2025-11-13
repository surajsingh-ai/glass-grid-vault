import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">About GALAXY</h1>
          <p className="text-lg text-muted-foreground">
            Pioneering the future of business analytics with cutting-edge technology and innovation.
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-8">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At GALAXY, we're on a mission to democratize data analytics and empower businesses of all sizes with real-time insights. 
              We believe that every organization deserves access to powerful, intuitive analytics tools that turn raw data into actionable intelligence. 
              Our platform bridges the gap between complex data systems and business decision-makers, making analytics accessible to everyone.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Vision</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We envision a world where data-driven decision making is the norm, not the exception. By combining artificial intelligence, 
              real-time processing, and beautiful visualizations, we're creating the next generation of business intelligence platforms. 
              Our goal is to be the trusted analytics partner for businesses worldwide, helping them unlock their full potential through the power of data.
            </p>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-accent">Innovation First</h3>
                <p className="text-muted-foreground">
                  We constantly push boundaries and embrace new technologies to stay ahead of the curve. Our commitment to innovation 
                  drives us to continuously improve and evolve our platform.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-accent">Customer Obsession</h3>
                <p className="text-muted-foreground">
                  Our customers are at the heart of everything we do. We listen, learn, and build solutions that truly address their needs 
                  and exceed their expectations.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-accent">Transparency & Trust</h3>
                <p className="text-muted-foreground">
                  We believe in open communication and building trust through honest, transparent relationships with our customers, 
                  partners, and team members.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-2xl font-semibold text-accent">Excellence in Execution</h3>
                <p className="text-muted-foreground">
                  We take pride in delivering high-quality solutions with attention to detail. Every feature, every line of code, 
                  and every customer interaction reflects our commitment to excellence.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                GALAXY was founded with a simple yet powerful idea: business analytics should be both powerful and accessible. 
                Our founders, experienced data scientists and entrepreneurs, recognized a gap in the market for analytics tools 
                that combined enterprise-grade capabilities with user-friendly interfaces.
              </p>
              <p>
                What started as a side project quickly grew into a full-fledged platform serving businesses across industries. 
                From small startups to growing enterprises, our customers trust GALAXY to provide the insights they need to make 
                confident, data-driven decisions.
              </p>
              <p>
                Today, we're proud to be at the forefront of the analytics revolution, helping thousands of businesses transform 
                how they work with data. Our journey has just begun, and we're excited about the innovations and opportunities that lie ahead.
              </p>
              <p>
                Join us as we continue to push the boundaries of what's possible in business analytics. Together, we're building 
                a future where every business decision is powered by data, insight, and intelligence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
