import { useEffect, useState, lazy, Suspense } from "react";
import { Users, Camera, DollarSign, Activity, RefreshCw } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { Navigation } from "@/components/Navigation";

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
    try {
      const response = await fetch(SHEET_URL);
      const csvText = await response.text();
      
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

  const totalClients = data.length;
  const totalHeadshots = data.reduce((sum, row) => sum + (row["No of Headshots"] || 0), 0);
  const totalRevenue = data.reduce((sum, row) => sum + (row.Price || 0), 0);
  const averagePrice = totalClients > 0 ? totalRevenue / totalClients : 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-semibold text-foreground">Dashboard</h1>
            <p className="text-sm text-muted-foreground mt-1">Real-time analytics from Google Sheets</p>
          </div>
          <Button 
            onClick={fetchData} 
            disabled={loading}
            variant="outline"
            size="sm"
          >
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
            Refresh
          </Button>
        </div>

        {/* Metrics */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <MetricCard title="Total Clients" value={totalClients} icon={Users} />
          <MetricCard title="Total Headshots" value={totalHeadshots} icon={Camera} />
          <MetricCard title="Total Revenue" value={`₹${totalRevenue.toFixed(2)}`} icon={DollarSign} />
          <MetricCard title="Average Price" value={`₹${averagePrice.toFixed(2)}`} icon={Activity} />
        </div>

        {/* Charts */}
        {data.length > 0 && (
          <Suspense fallback={
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-8">
              <Skeleton className="h-80" />
              <Skeleton className="h-80" />
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
              <div className="border rounded-lg p-12 text-center">
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
  );
};

export default Index;
