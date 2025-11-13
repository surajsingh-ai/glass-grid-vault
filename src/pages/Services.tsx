import { Navigation } from "@/components/Navigation";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Our Services</h1>
          <p className="text-lg text-muted-foreground">
            Comprehensive analytics solutions tailored to transform your business operations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-3 text-primary">Real-Time Dashboard Analytics</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-lg">
              Transform your raw data into actionable insights with our cutting-edge real-time dashboard. Monitor key metrics, 
              track performance, and visualize trends as they happen.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>✓ Live data synchronization from multiple sources</p>
              <p>✓ Customizable KPI tracking and alerts</p>
              <p>✓ Interactive charts and visualizations</p>
              <p>✓ Mobile-responsive design for on-the-go access</p>
              <p>✓ Automated reporting and data exports</p>
            </div>
          </div>

          <div className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-3 text-primary">AI-Powered Business Intelligence</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-lg">
              Harness the power of artificial intelligence to uncover hidden patterns, predict trends, and get intelligent 
              recommendations for your business decisions.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>✓ Natural language querying of your data</p>
              <p>✓ Predictive analytics and forecasting</p>
              <p>✓ Anomaly detection and alerts</p>
              <p>✓ Automated insight generation</p>
              <p>✓ Smart recommendations based on historical data</p>
            </div>
          </div>

          <div className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-3 text-primary">Customer Relationship Management</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-lg">
              Build stronger customer relationships with our comprehensive CRM solution. Track interactions, manage leads, 
              and optimize your sales pipeline for maximum conversion.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>✓ 360-degree customer view and history</p>
              <p>✓ Lead scoring and pipeline management</p>
              <p>✓ Automated workflow and follow-ups</p>
              <p>✓ Email integration and tracking</p>
              <p>✓ Customer segmentation and targeting</p>
            </div>
          </div>

          <div className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-3 text-primary">Data Integration & Migration</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-lg">
              Seamlessly connect all your data sources and migrate legacy systems to our modern platform. We handle the 
              technical complexity so you can focus on insights.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>✓ Google Sheets, Excel, and database integration</p>
              <p>✓ API connectivity for third-party tools</p>
              <p>✓ Secure data migration services</p>
              <p>✓ Real-time data synchronization</p>
              <p>✓ Custom integration development</p>
            </div>
          </div>

          <div className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-3 text-primary">Custom Analytics Solutions</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-lg">
              Every business is unique. We develop tailored analytics solutions that align with your specific workflows, 
              goals, and industry requirements.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>✓ Bespoke dashboard and report design</p>
              <p>✓ Industry-specific analytics templates</p>
              <p>✓ Custom data models and calculations</p>
              <p>✓ White-label solutions available</p>
              <p>✓ Dedicated support and training</p>
            </div>
          </div>

          <div className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <h2 className="text-3xl font-semibold mb-3 text-primary">Training & Consultation</h2>
            </div>
            <p className="text-muted-foreground mb-4 text-lg">
              Empower your team with data literacy and analytics expertise. Our training programs and consulting services 
              ensure you get maximum value from your data.
            </p>
            <div className="space-y-2 text-muted-foreground">
              <p>✓ Personalized onboarding and training sessions</p>
              <p>✓ Best practices for data analysis</p>
              <p>✓ Strategic consulting for data-driven transformation</p>
              <p>✓ Ongoing support and optimization</p>
              <p>✓ Analytics strategy development</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
