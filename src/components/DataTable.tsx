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
  const getStatusVariant = (status: string) => {
    switch (status.toLowerCase()) {
      case "completed":
        return "default";
      case "pending":
        return "secondary";
      case "in progress":
        return "outline";
      default:
        return "secondary";
    }
  };

  return (
    <div className="border rounded-lg">
      <div className="p-4 border-b">
        <h2 className="text-lg font-medium">Client Records</h2>
      </div>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Client</TableHead>
              <TableHead>Headshots</TableHead>
              <TableHead>Price</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{row.Clients}</TableCell>
                <TableCell>{row["No of Headshots"]}</TableCell>
                <TableCell>₹{row.Price.toFixed(2)}</TableCell>
                <TableCell>
                  <Badge variant={getStatusVariant(row.Status)}>
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
