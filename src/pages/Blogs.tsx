import { Navigation } from "@/components/Navigation";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-7xl">
        <div className="glass-card p-8 mb-8 animate-fade-in">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 neon-text">Analytics Insights Blog</h1>
          <p className="text-lg text-muted-foreground">
            Expert perspectives on analytics, business intelligence, and data-driven decision making.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <span className="text-sm text-primary font-semibold">Business Intelligence</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">The Future of Real-Time Analytics: Why Every Business Needs Live Data</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              In today's fast-paced business environment, waiting for end-of-day reports is no longer viable. Discover how real-time analytics 
              is transforming decision-making across industries and why businesses that embrace live data gain a significant competitive advantage. 
              Learn about the technologies powering real-time insights and how to implement them in your organization.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>8 min read</span> • <span>Published 3 days ago</span>
            </div>
          </article>

          <article className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <span className="text-sm text-accent font-semibold">Data Strategy</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">From Spreadsheets to Dashboards: A Complete Guide to Data Transformation</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Most businesses start with spreadsheets, but as data grows, so do the challenges. This comprehensive guide walks you through 
              the journey from manual data management to automated analytics dashboards. Explore best practices for data migration, 
              integration strategies, and how to build a scalable analytics infrastructure that grows with your business.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>12 min read</span> • <span>Published 1 week ago</span>
            </div>
          </article>

          <article className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <span className="text-sm text-secondary font-semibold">AI & Machine Learning</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">How AI is Revolutionizing Business Intelligence: Practical Applications</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Artificial Intelligence isn't just a buzzword—it's fundamentally changing how businesses extract insights from data. 
              Explore practical AI applications in business intelligence, from predictive analytics and anomaly detection to natural language 
              querying. See real-world examples of companies using AI to forecast trends, automate reporting, and uncover hidden opportunities.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>10 min read</span> • <span>Published 2 weeks ago</span>
            </div>
          </article>

          <article className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <span className="text-sm text-primary font-semibold">Best Practices</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">5 Key Metrics Every Business Should Track (And How to Visualize Them)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Not all metrics are created equal. Learn which KPIs truly matter for business success and how to track them effectively. 
              This article covers essential metrics across revenue, customer acquisition, operational efficiency, and growth. Plus, discover 
              visualization techniques that make complex data instantly understandable for stakeholders at all levels.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>7 min read</span> • <span>Published 3 weeks ago</span>
            </div>
          </article>

          <article className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <span className="text-sm text-accent font-semibold">Customer Success</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">Building a Data-Driven Culture: Lessons from High-Performing Teams</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Technology alone doesn't create data-driven organizations—culture does. Hear from companies that successfully transformed 
              their decision-making processes by fostering data literacy across all departments. Learn how to overcome resistance to change, 
              train teams on analytics tools, and create an environment where data informs every strategic decision.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>11 min read</span> • <span>Published 1 month ago</span>
            </div>
          </article>

          <article className="glass-card p-8 glass-card-hover">
            <div className="mb-4">
              <span className="text-sm text-secondary font-semibold">Technical Deep Dive</span>
              <h2 className="text-2xl font-bold mt-2 mb-3">API Integrations 101: Connecting Your Data Sources for Unified Analytics</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Modern businesses use dozens of tools, each generating valuable data. Learn how API integrations can unify disparate data 
              sources into a single analytics platform. This technical guide covers REST APIs, webhooks, authentication methods, and best 
              practices for building robust data pipelines. Includes code examples and integration templates for popular business tools.
            </p>
            <div className="text-sm text-muted-foreground">
              <span>15 min read</span> • <span>Published 1 month ago</span>
            </div>
          </article>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
