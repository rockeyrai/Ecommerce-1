"use client"
import { Area, AreaChart, CartesianGrid, XAxis, YAxis } from "recharts"
import {Select, SelectItem} from "@nextui-org/react";


import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";

export const description = "An area chart with gradient fill and Y-axis"

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 186, mobile: 80 },
  { month: "Agust", desktop: 305, mobile: 200 },
  { month: "September", desktop: 237, mobile: 120 },
  { month: "October", desktop: 73, mobile: 190 },
  { month: "November", desktop: 209, mobile: 130 },
  { month: "December", desktop: 214, mobile: 140 },
]

const animals = [
  {key: "2024", label: "2024"},
  {key: "2023", label: "2023"},
  {key: "2022", label: "2022"},
  {key: "2021", label: "2021"},
  {key: "2020", label: "2020"},
  {key: "2019", label: "2019"},
  {key: "2018", label: "2018"},
  {key: "2017", label: "2017"},
  {key: "2016", label: "2016"},
  {key: "2015", label: "2015"},
  {key: "2014", label: "2014"},
  {key: "2013", label: "2013"},
  {key: "2012", label: "2012"}  
];

const chartConfig = {
  desktop: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },

  mobile: {
    label: "Expesis",
    color: "hsl(var(--chart-2))",
  }
}

export function ChartComponent() {
  return (
    <Card className='h-[450px] w-[600px]'>
      <CardHeader >
        <CardTitle className='flex justify-between items-center' >
        <dvi>
          <h1>Encome and Expenditure</h1>
          <div className="text-xs flex gap-3 mt-3">
            <div className="flex gap-2"><div className="bg-green-500 h-4 rounded w-4" > </div> - Income</div>
            <div className="flex gap-2"><div className="bg-red-500 h-4 rounded w-4" > </div> - Expenses</div>
          </div>
        </dvi>
        <div>
        <Select
      items={animals}
      placeholder="2024"
      className="w-24"
    >
      {(animal) => <SelectItem>{animal.label}</SelectItem>}
    </Select></div></CardTitle>
      </CardHeader>
      <CardContent className='p-0'>
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 0, // Increased left margin to accommodate Y-axis labels
              right:30,
              top: 20, // Added top margin for better spacing
              bottom: 20, // Added bottom margin for better spacing
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={true}
              axisLine={true}
              tickMargin={10}
              tickCount={10}
              tickFormatter={(value) => value.slice(0, 4)} />
            <YAxis
              tickLine={true}
              axisLine={true}
              tickMargin={10}
              // Adjust this value to change the number of ticks
              tickCount={10}
              // Adjust the domain to fit your data
              domain={[0, 'dataMax + 100']} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <defs>
              <linearGradient id="fillDesktop" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-desktop)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-desktop)" stopOpacity={0.1} />
              </linearGradient>
              <linearGradient id="fillMobile" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-mobile)" stopOpacity={0.8} />
                <stop offset="95%" stopColor="var(--color-mobile)" stopOpacity={0.1} />
              </linearGradient>
            </defs>
            <Area
              dataKey="mobile"
              type="natural"
              fill="url(#fillMobile)"
              fillOpacity={0.4}
              stroke="var(--color-mobile)"
              stackId="a" />
            <Area
              dataKey="desktop"
              type="natural"
              fill="url(#fillDesktop)"
              fillOpacity={0.4}
              stroke="var(--color-desktop)"
              stackId="a" />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}