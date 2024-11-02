import { Line, LineChart, ResponsiveContainer, XAxis, YAxis } from "recharts";
import { Card } from "../ui/card";
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "../ui/chart";

// Reusable card component for displaying metrics with a chart
const MetricCard = ({
  title,
  value,
  subtext,
  trend,
  data,
  dataKey,
}: {
  title: string;
  value: number;
  subtext: { men: number; women: number };
  trend: string;
  data: any[];
  dataKey: string;
}) => (
  <Card className="p-4">
    <h3 className="text-lg font-medium">{title}</h3>
    <div className="mt-2 flex items-baseline gap-2">
      <p className="text-3xl font-semibold">{value}</p>
      <span className="text-green-500 text-xs">{trend}</span>
    </div>
    <div className="mt-2 text-sm text-muted-foreground">
      <p>{subtext.men} Men</p>
      <p>{subtext.women} Women</p>
    </div>
    <div className="h-[100px] mt-4">
      {/* Ensure the config object is properly defined */}
      <ChartContainer
        config={{
          [dataKey]: {
            label: title,
            color: "hsl(var(--chart-1))",
          },
        }}
      >
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="month" hide />
            <YAxis hide />
            {/* Use ChartTooltip instead of Tooltip for consistency with shadcn/ui */}
            <ChartTooltip content={<ChartTooltipContent />} />
            <Line
              type="monotone"
              dataKey={dataKey}
              strokeWidth={2}
              activeDot={{ r: 4 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </ChartContainer>
    </div>
  </Card>
);

export default MetricCard;
