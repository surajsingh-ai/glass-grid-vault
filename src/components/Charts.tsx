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
  completed: "hsl(220 90% 56%)",
  pending: "hsl(220 14% 60%)",
  "in progress": "hsl(220 60% 70%)",
};

export const Charts = ({ data }: ChartsProps) => {
  const revenueData = data
    .map((row) => ({
      name: row.Clients,
      revenue: row.Price,
    }))
    .slice(0, 8);

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
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      <Card className="border">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Revenue by Client</CardTitle>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={revenueData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(220 14% 90%)" />
              <XAxis 
                dataKey="name" 
                stroke="hsl(220 10% 46%)"
                tick={{ fill: "hsl(220 10% 46%)", fontSize: 12 }}
              />
              <YAxis 
                stroke="hsl(220 10% 46%)"
                tick={{ fill: "hsl(220 10% 46%)", fontSize: 12 }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(0 0% 100%)",
                  border: "1px solid hsl(220 14% 90%)",
                  borderRadius: "6px",
                  fontSize: 12
                }}
              />
              <Bar 
                dataKey="revenue" 
                fill="hsl(220 90% 56%)"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="border">
        <CardHeader className="pb-2">
          <CardTitle className="text-base font-medium">Status Distribution</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-center">
          <ResponsiveContainer width="100%" height={280}>
            <PieChart>
              <Pie
                data={statusData}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={90}
                fill="#8884d8"
                dataKey="value"
              >
                {statusData.map((entry, index) => (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={COLORS[entry.name.toLowerCase() as keyof typeof COLORS] || "hsl(220 60% 70%)"}
                  />
                ))}
              </Pie>
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "hsl(0 0% 100%)",
                  border: "1px solid hsl(220 14% 90%)",
                  borderRadius: "6px",
                  fontSize: 12
                }}
              />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
};
