import { Navigation } from "@/components/Navigation";

const Sales = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Sales Tracking & Management</h1>
          <p className="text-lg text-muted-foreground mb-2">
            Comprehensive tools to monitor, analyze, and optimize your sales performance.
          </p>
        </div>

        <div className="space-y-8">
          <div className="glass-card p-6">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Key Sales Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Revenue Analytics</h3>
                <p className="text-muted-foreground">
                  Track your revenue streams in real-time with detailed breakdowns by client, service, and time period. Identify your most profitable offerings and optimize pricing strategies.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Sales Pipeline</h3>
                <p className="text-muted-foreground">
                  Visualize your entire sales funnel from lead to conversion. Monitor deal stages, forecast revenue, and identify bottlenecks to improve conversion rates.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Performance Metrics</h3>
                <p className="text-muted-foreground">
                  Measure key sales KPIs including average deal size, win rates, sales velocity, and customer acquisition costs. Set targets and track progress toward goals.
                </p>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-accent">Client Activity Tracking</h3>
                <p className="text-muted-foreground">
                  Monitor client interactions, purchase history, and engagement patterns. Identify upsell opportunities and strengthen customer relationships.
                </p>
              </div>
            </div>
          </div>

          <div className="glass-card p-6">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Sales Strategies</h2>
            <div className="space-y-6 mt-6">
              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Data-Driven Decision Making</h3>
                <p className="text-muted-foreground">
                  Leverage real-time analytics to make informed decisions. Use historical data patterns to predict future trends and adjust strategies proactively.
                </p>
              </div>

              <div className="border-l-4 border-accent pl-4">
                <h3 className="text-xl font-semibold mb-2">Customer Segmentation</h3>
                <p className="text-muted-foreground">
                  Group customers by behavior, value, and needs. Tailor your sales approach to each segment for maximum effectiveness and personalization.
                </p>
              </div>

              <div className="border-l-4 border-secondary pl-4">
                <h3 className="text-xl font-semibold mb-2">Automated Reporting</h3>
                <p className="text-muted-foreground">
                  Generate comprehensive sales reports automatically. Share insights with stakeholders and track team performance effortlessly.
                </p>
              </div>

              <div className="border-l-4 border-primary pl-4">
                <h3 className="text-xl font-semibold mb-2">Optimization & Growth</h3>
                <p className="text-muted-foreground">
                  Continuously improve your sales processes by analyzing conversion data, customer feedback, and market trends. Identify opportunities for scaling revenue.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sales;
