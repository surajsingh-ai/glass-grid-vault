import { Navigation } from "@/components/Navigation";

const Sales = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Sales</h1>
        <p className="text-muted-foreground">Track and manage your sales here.</p>
      </div>
    </div>
  );
};

export default Sales;
