import { Navigation } from "@/components/Navigation";

const Customers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Customer Relationship Management</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Build lasting relationships with powerful CRM tools and customer insights.
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-6">
            <h2 className="text-3xl font-semibold mb-4 text-primary">CRM Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">360° Customer View</h3>
                <p className="text-muted-foreground">
                  Access complete customer profiles with purchase history, interactions, preferences, and communication logs all in one place.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Automated Workflows</h3>
                <p className="text-muted-foreground">
                  Streamline customer interactions with automated follow-ups, reminders, and personalized communication based on customer behavior.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Contact Management</h3>
                <p className="text-muted-foreground">
                  Organize and segment customers efficiently. Tag, categorize, and filter contacts to target the right audience for your campaigns.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Engagement Analytics</h3>
                <p className="text-muted-foreground">
                  Track customer engagement metrics, email open rates, and interaction patterns to optimize your communication strategy.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Lead Scoring</h3>
                <p className="text-muted-foreground">
                  Prioritize high-value prospects with intelligent lead scoring based on behavior, demographics, and engagement levels.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Customer Support Integration</h3>
                <p className="text-muted-foreground">
                  Seamlessly manage support tickets and customer inquiries with integrated help desk functionality and response tracking.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Customer Testimonials</h2>
            <div className="space-y-6 mt-6">
              <div className="border border-border/50 rounded-lg p-6 glass-card-hover">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "The analytics platform has transformed how we understand our customers. We've increased retention by 45% in just six months."
                </p>
                <p className="font-semibold text-primary">— Sarah Johnson, Marketing Director</p>
              </div>

              <div className="border border-border/50 rounded-lg p-6 glass-card-hover">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "Real-time insights mean we can respond to customer needs instantly. Our satisfaction scores have never been higher."
                </p>
                <p className="font-semibold text-primary">— Michael Chen, Customer Success Manager</p>
              </div>

              <div className="border border-border/50 rounded-lg p-6 glass-card-hover">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "Finally, a CRM that's both powerful and easy to use. Our team adopted it immediately, and productivity has soared."
                </p>
                <p className="font-semibold text-primary">— Emily Rodriguez, Operations Lead</p>
              </div>

              <div className="border border-border/50 rounded-lg p-6 glass-card-hover">
                <p className="text-lg italic text-muted-foreground mb-4">
                  "The automated workflows saved us countless hours. We can focus on building relationships instead of manual data entry."
                </p>
                <p className="font-semibold text-primary">— David Park, Sales Director</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
