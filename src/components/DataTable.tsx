import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

interface DataRow {
  Clients: string;
  "No of Headshots": number;
  Price: number;
  Status: string;
  Email: string;
}

interface DataTableProps {
  data: DataRow[];
}

export const DataTable = ({ data }: DataTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "bg-primary/20 text-primary border-primary/50";
      case "pending":
        return "bg-accent/20 text-accent border-accent/50";
      case "in progress":
        return "bg-secondary/40 text-secondary-foreground border-secondary";
      default:
        return "bg-muted/20 text-muted-foreground border-muted";
    }
  };

  return (
    <div className="glass-card rounded-lg p-6 overflow-hidden animate-fade-in" style={{ animationDelay: "600ms" }}>
      <h2 className="text-2xl font-bold mb-4 neon-text">Client Records</h2>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow className="border-primary/20 hover:bg-primary/5">
              <TableHead className="text-primary">Client</TableHead>
              <TableHead className="text-primary">Headshots</TableHead>
              <TableHead className="text-primary">Price</TableHead>
              <TableHead className="text-primary">Status</TableHead>
              <TableHead className="text-primary">Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow 
                key={index} 
                className="border-primary/10 hover:bg-primary/5 transition-colors"
              >
                <TableCell className="font-medium">{row.Clients}</TableCell>
                <TableCell>{row["No of Headshots"]}</TableCell>
                <TableCell className="text-primary">${row.Price.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge className={getStatusColor(row.Status)}>
                    {row.Status}
                  </Badge>
                </TableCell>
                <TableCell className="text-muted-foreground">{row.Email}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};
