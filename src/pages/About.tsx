import { Navigation } from "@/components/Navigation";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-muted-foreground">Learn more about our company and mission.</p>
      </div>
    </div>
  );
};

export default About;
