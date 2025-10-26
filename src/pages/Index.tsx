import { useEffect, useState } from "react";
import { Users, Camera, DollarSign, Activity, RefreshCw } from "lucide-react";
import { MetricCard } from "@/components/MetricCard";
import { DataTable } from "@/components/DataTable";
import { Charts } from "@/components/Charts";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";

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
        });
      
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
  const totalHeadshots = data.reduce((sum, row) => sum + row["No of Headshots"], 0);
  const totalRevenue = data.reduce((sum, row) => sum + row.Price, 0);
  const completedCount = data.filter(row => row.Status.toLowerCase() === "completed").length;

  return (
    <div className="min-h-screen p-6 md:p-8 lg:p-12">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4 animate-fade-in">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold neon-text mb-2">
            Cyberpunk Dashboard
          </h1>
          <p className="text-muted-foreground">Real-time Google Sheets Analytics</p>
        </div>
        <Button 
          onClick={fetchData} 
          disabled={loading}
          className="glass-card glass-card-hover border-primary/30 bg-primary/10 hover:bg-primary/20 text-primary"
        >
          <RefreshCw className={`mr-2 h-4 w-4 ${loading ? "animate-spin" : ""}`} />
          Refresh Data
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
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
          value={`$${totalRevenue.toFixed(2)}`}
          icon={DollarSign}
          delay={200}
        />
        <MetricCard
          title="Completed"
          value={completedCount}
          icon={Activity}
          trend={`${((completedCount / totalClients) * 100).toFixed(1)}% completion rate`}
          delay={300}
        />
      </div>

      {/* Charts */}
      {data.length > 0 && <Charts data={data} />}

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
    </div>
  );
};

export default Index;
