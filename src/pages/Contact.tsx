import { Navigation } from "@/components/Navigation";

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-muted-foreground">Get in touch with our team.</p>
      </div>
    </div>
  );
};

export default Contact;
