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
      className="glass-card glass-card-hover animate-fade-in animate-float-3d relative overflow-hidden group"
      style={{ 
        animationDelay: `${delay}ms`,
        animationDuration: `${4 + delay / 100}s`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="absolute -inset-1 bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 blur-xl transition-opacity duration-500" />
      
      <CardHeader className="flex flex-row items-center justify-between pb-2 relative z-10">
        <CardTitle className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
          {title}
        </CardTitle>
        <div className="relative">
          <Icon className="h-6 w-6 text-primary drop-shadow-[0_0_8px_hsl(var(--primary))] group-hover:scale-110 transition-transform" />
          <div className="absolute inset-0 animate-pulse-glow">
            <Icon className="h-6 w-6 text-accent opacity-50" />
          </div>
        </div>
      </CardHeader>
      <CardContent className="relative z-10">
        <div className="text-3xl font-bold neon-text mb-1">{value}</div>
        {trend && (
          <p className="text-xs text-accent mt-1 flex items-center gap-1">
            <span className="inline-block w-2 h-2 rounded-full bg-accent animate-pulse-glow" />
            {trend}
          </p>
        )}
      </CardContent>
    </Card>
  );
};
