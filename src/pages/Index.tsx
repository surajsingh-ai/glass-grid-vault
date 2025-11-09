import { useEffect, useState, lazy, Suspense } from "react";
import { Users, Camera, DollarSign, Activity, RefreshCw } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Navigation } from "@/components/Navigation";

// Lazy load heavy components to reduce initial bundle size
const Charts = lazy(() => import("@/components/Charts").then(m => ({ default: m.Charts })));
const Chatbot = lazy(() => import("@/components/Chatbot").then(m => ({ default: m.Chatbot })));

interface DataRow {
  Clients: string;
  "No of Headshots": number;
  Price: number;
  Status: string;
  Email: string;
}

const SHEET_URL = "https://docs.google.com/spreadsheets/d/1fsA_bg6iAwg9pb0ILVyoenxHgW8AbpRlZ1hNj_1rnUQ/export?format=csv";

const Index = () => {
  const [data, setData] = useState<DataRow[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchData = async () => {
    setLoading(true);
    // Add galaxy spin animation to button
    const button = document.querySelector('.refresh-button');
    if (button) {
      button.classList.add('galaxy-spin');
      setTimeout(() => button.classList.remove('galaxy-spin'), 2000);
    }
    try {
      const response = await fetch(SHEET_URL);
      const csvText = await response.text();
      
      // Parse CSV
      const lines = csvText.split("\n");
      const headers = lines[0].split(",").map(h => h.trim());
      
      const parsedData = lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
          const values = line.split(",").map(v => v.trim());
          const row: any = {};
          headers.forEach((header, index) => {
            if (header === "No of Headshots" || header === "Price") {
              row[header] = parseFloat(values[index]) || 0;
            } else {
              row[header] = values[index] || "";
            }
          });
          return row as DataRow;
        })
        .filter(row => row.Clients && row.Clients.trim() !== "");
      
      setData(parsedData);
      toast({
        title: "Data refreshed",
        description: "Dashboard updated with latest data",
      });
    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "Failed to fetch data from Google Sheets",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Calculate metrics
  const totalClients = data.length;
  const totalHeadshots = data.reduce((sum, row) => sum + (row["No of Headshots"] || 0), 0);
  const totalRevenue = data.reduce((sum, row) => sum + (row.Price || 0), 0);
  const averagePrice = totalClients > 0 ? totalRevenue / totalClients : 0;

  return (
    <div className="min-h-screen relative">
      <div className="fixed inset-0 z-0">
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 20}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <Navigation />
        <div className="p-6 md:p-8 lg:p-12">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in">
            <div className="relative">
              <h1 className="text-4xl md:text-6xl font-bold neon-text mb-2 animate-float">
                Real Time Dashboard
              </h1>
              <div className="absolute -inset-2 bg-gradient-to-r from-primary via-accent to-secondary opacity-20 blur-3xl -z-10" />
              <p className="text-muted-foreground text-lg">Real-time Google Sheets Analytics</p>
            </div>
            <Button 
              onClick={fetchData} 
              disabled={loading}
              className="refresh-button glass-card glass-card-hover neon-border bg-gradient-to-r from-primary/20 to-accent/20 hover:from-primary/30 hover:to-accent/30 text-foreground relative overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 animate-shimmer" 
                style={{ backgroundSize: '200% 100%' }} />
              <RefreshCw className={`mr-2 h-4 w-4 relative z-10 ${loading ? "animate-spin" : ""}`} />
              <span className="relative z-10">Refresh Data</span>
            </Button>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8" style={{ perspective: '1000px' }}>
        <MetricCard
          title="Total Clients"
          value={totalClients}
          icon={Users}
          delay={0}
        />
        <MetricCard
          title="Total Headshots"
          value={totalHeadshots}
          icon={Camera}
          delay={100}
        />
        <MetricCard
          title="Total Revenue"
          value={`₹${totalRevenue.toFixed(2)}`}
          icon={DollarSign}
          delay={200}
        />
        <MetricCard
          title="Average Price"
          value={`₹${averagePrice.toFixed(2)}`}
          icon={Activity}
          delay={300}
        />
          </div>

          {/* Charts */}
          {data.length > 0 && (
        <Suspense fallback={
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
            <Skeleton className="h-[400px] glass-card" />
            <Skeleton className="h-[400px] glass-card" />
          </div>
        }>
          <Charts data={data} />
          </Suspense>
          )}

          {/* Data Table */}
          <div className="mt-8">
        {data.length > 0 ? (
          <DataTable data={data} />
        ) : (
          !loading && (
            <div className="glass-card p-12 text-center">
              <p className="text-muted-foreground">No data available</p>
            </div>
          )
        )}
          </div>

          {/* Chatbot */}
          <Suspense fallback={null}>
            <Chatbot />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Index;
