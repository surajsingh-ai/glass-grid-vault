import { Navigation } from "@/components/Navigation";

const Services = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Our Services</h1>
        <p className="text-muted-foreground">Discover the services we offer.</p>
      </div>
    </div>
  );
};

export default Services;
