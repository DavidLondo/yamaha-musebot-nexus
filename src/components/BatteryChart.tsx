import { Card } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';

// Datos de ejemplo para el gráfico
const batteryData = [
  { time: '00:00', battery: 95 },
  { time: '02:00', battery: 88 },
  { time: '04:00', battery: 82 },
  { time: '06:00', battery: 75 },
  { time: '08:00', battery: 68 },
  { time: '10:00', battery: 62 },
  { time: '12:00', battery: 55 },
  { time: '14:00', battery: 48 },
  { time: '16:00', battery: 42 },
  { time: '18:00', battery: 38 },
  { time: '20:00', battery: 35 },
  { time: '22:00', battery: 32 }
];

export const BatteryChart = () => {
  return (
    <Card className="bg-gradient-card border-primary/20 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg font-semibold">Historial de Batería</h3>
          <div className="text-sm text-muted-foreground">Últimas 24 horas</div>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={batteryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="time" 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                fontSize={12}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                  color: 'hsl(var(--card-foreground))'
                }}
                labelFormatter={(value) => `Hora: ${value}`}
                formatter={(value) => [`${value}%`, 'Batería']}
              />
              <Line 
                type="monotone" 
                dataKey="battery" 
                stroke="hsl(var(--primary))" 
                strokeWidth={3}
                dot={{ 
                  fill: 'hsl(var(--primary))', 
                  strokeWidth: 2,
                  r: 4 
                }}
                activeDot={{ 
                  r: 6, 
                  fill: 'hsl(var(--primary-glow))',
                  stroke: 'hsl(var(--primary))',
                  strokeWidth: 2
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </Card>
  );
};