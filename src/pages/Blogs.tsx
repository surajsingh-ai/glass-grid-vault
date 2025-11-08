import { Navigation } from "@/components/Navigation";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-4">Blogs</h1>
        <p className="text-muted-foreground">Read our latest articles and insights.</p>
      </div>
    </div>
  );
};

export default Blogs;
