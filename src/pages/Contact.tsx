import { Navigation } from "@/components/Navigation";
import { Mail, Phone, Clock } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Contact Us</h1>
          <p className="text-lg text-muted-foreground">
            Have questions? We'd love to hear from you. Get in touch with our team.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="glass-card p-8">
              <h2 className="text-3xl font-semibold mb-6 text-primary">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 text-primary">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <a href="mailto:thakursuraj5454@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                      thakursuraj5454@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-accent/10 text-accent">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <a href="tel:+919170732347" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 9170732347
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-secondary/10 text-secondary">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Office Hours</h3>
                    <div className="text-muted-foreground space-y-1">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                      <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-semibold mb-4 text-primary">Contact Person</h2>
              <div className="space-y-2">
                <p className="text-lg"><span className="font-semibold">Name:</span> Suraj Singh</p>
                <p className="text-muted-foreground">Lead Analytics Consultant</p>
              </div>
            </div>
          </div>

          <div className="glass-card p-8">
            <h2 className="text-3xl font-semibold mb-6 text-primary">Send Us a Message</h2>
            <p className="text-muted-foreground mb-6">
              Fill out the form below and we'll get back to you within 24 hours. Whether you have questions about our services, 
              need technical support, or want to discuss a custom solution, we're here to help.
            </p>
            
            <div className="space-y-6">
              <div className="space-y-4">
                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">General Inquiries</h3>
                  <p className="text-sm text-muted-foreground">
                    Questions about our platform, pricing, or features? We're happy to provide detailed information about how 
                    GALAXY can benefit your business.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-accent/5 border border-accent/20">
                  <h3 className="font-semibold mb-2">Technical Support</h3>
                  <p className="text-sm text-muted-foreground">
                    Experiencing issues with your dashboard or need help with integrations? Our technical team is ready to assist 
                    you with any challenges.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-secondary/5 border border-secondary/20">
                  <h3 className="font-semibold mb-2">Custom Solutions</h3>
                  <p className="text-sm text-muted-foreground">
                    Need a tailored analytics solution for your unique business requirements? Let's discuss how we can build 
                    something perfect for you.
                  </p>
                </div>

                <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
                  <h3 className="font-semibold mb-2">Partnership Opportunities</h3>
                  <p className="text-sm text-muted-foreground">
                    Interested in partnering with GALAXY? We're always looking for strategic partnerships that create value for 
                    our mutual customers.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <p className="text-sm text-muted-foreground">
                  <strong>Response Time:</strong> We typically respond to all inquiries within 24 hours during business days. 
                  For urgent matters, please call us directly at the number above.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
