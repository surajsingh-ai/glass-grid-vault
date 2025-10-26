import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

interface DataRow {
  Clients: string;
  "No of Headshots": number;
  Price: number;
  Status: string;
  Email: string;
}

interface ChartsProps {
  data: DataRow[];
}

const COLORS = {
  completed: "hsl(180 100% 50%)",
  pending: "hsl(320 100% 60%)",
  "in progress": "hsl(270 60% 60%)",
};

export const Charts = ({ data }: ChartsProps) => {
  // Revenue by client data
  const revenueData = data
    .map((row) => ({
      name: row.Clients,
      revenue: row.Price,
    }))
    .slice(0, 8); // Top 8 clients

  // Status distribution
  const statusCounts = data.reduce((acc, row) => {
    const status = row.Status.toLowerCase();
    acc[status] = (acc[status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const statusData = Object.entries(statusCounts).map(([name, value]) => ({
    name: name.charAt(0).toUpperCase() + name.slice(1),
    value,
  }));

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
      <Card className="glass-card border-primary/20 animate-fade-in" style={{ animationDelay: "400ms" }}>
        <CardHeader>
          <CardTitle className="neon-text">Revenue by Client</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(180 100% 50% / 0.1)" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(180 50% 70%)"
                tick={{ fill: "hsl(180 50% 70%)" }}
              />
              <YAxis 
                stroke="hsl(180 50% 70%)"
                tick={{ fill: "hsl(180 50% 70%)" }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(260 50% 10%)",
                  border: "1px solid hsl(180 100% 50% / 0.3)",
                  borderRadius: "8px",
                  color: "hsl(180 100% 95%)"
                }}
              />
              <Bar 
                dataKey="revenue" 
                fill="hsl(180 100% 50%)"
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="glass-card border-primary/20 animate-fade-in" style={{ animationDelay: "500ms" }}>
        <CardHeader>
          <CardTitle className="neon-text">Status Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[entry.name.toLowerCase() as keyof typeof COLORS] || "hsl(270 60% 60%)"}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(260 50% 10%)",
                  border: "1px solid hsl(180 100% 50% / 0.3)",
                  borderRadius: "8px",
                  color: "hsl(180 100% 95%)"
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
