import { Navigation } from "@/components/Navigation";

const Customers = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Customers</h1>
        <p className="text-muted-foreground">Manage your customer relationships.</p>
      </div>
    </div>
  );
};

export default Customers;
