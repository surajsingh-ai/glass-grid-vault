import { LucideIcon } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface MetricCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  trend?: string;
  delay?: number;
}

export const MetricCard = ({ title, value, icon: Icon, trend, delay = 0 }: MetricCardProps) => {
  return (
    <Card 
      className="glass-card glass-card-hover animate-fade-in border-primary/20"
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-5 w-5 text-primary" />
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold neon-text">{value}</div>
        {trend && (
          <p className="text-xs text-accent mt-1">{trend}</p>
        )}
      </CardContent>
    </Card>
  );
};
