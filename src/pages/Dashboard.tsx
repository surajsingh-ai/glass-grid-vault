import { Navigation } from "@/components/Navigation";

const Dashboard = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">Welcome to your dashboard.</p>
      </div>
    </div>
  );
};

export default Dashboard;
