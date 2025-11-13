import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Welcome to Your Dashboard</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Your central hub for managing and monitoring your business analytics in real-time.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="glass-card p-6 glass-card-hover">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Real-Time Analytics</h2>
            <p className="text-muted-foreground">
              Monitor your business metrics with live data synchronization from Google Sheets. Track clients, headshots, revenue, and performance indicators as they happen.
            </p>
          </div>

          <div className="glass-card p-6 glass-card-hover">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Interactive Visualizations</h2>
            <p className="text-muted-foreground">
              Explore your data through beautiful, interactive charts and graphs. Gain insights with revenue trends, client distribution, and performance metrics at a glance.
            </p>
          </div>

          <div className="glass-card p-6 glass-card-hover">
            <h2 className="text-2xl font-semibold mb-3 text-primary">AI-Powered Insights</h2>
            <p className="text-muted-foreground">
              Get intelligent answers to your business questions with our integrated AI chatbot. Ask about trends, predictions, and data analysis in natural language.
            </p>
          </div>

          <div className="glass-card p-6 glass-card-hover">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Data Management</h2>
            <p className="text-muted-foreground">
              Easily view, sort, and filter your data in comprehensive tables. Export reports and manage your information with powerful search capabilities.
            </p>
          </div>

          <div className="glass-card p-6 glass-card-hover">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Customer Insights</h2>
            <p className="text-muted-foreground">
              Understand your customer base with detailed analytics. Track engagement, monitor status updates, and identify opportunities for growth.
            </p>
          </div>

          <div className="glass-card p-6 glass-card-hover">
            <h2 className="text-2xl font-semibold mb-3 text-primary">Performance Tracking</h2>
            <p className="text-muted-foreground">
              Measure what matters with key performance indicators. Set goals, track progress, and make data-driven decisions to scale your business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
