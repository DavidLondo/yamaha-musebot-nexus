import { BatteryStatus } from "@/components/BatteryStatus";
import { BatteryChart } from "@/components/BatteryChart";
import { RobotMap } from "@/components/RobotMap";
import { RobotInfo } from "@/components/RobotInfo";

const Dashboard = () => {
  // Datos simulados - en producción vendrían de una API
  const batteryLevel = 32;
  const isCharging = false;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-card/50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center shadow-glow">
                <span className="text-primary-foreground font-bold text-lg">Y</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                  Yamaha MuseBot Dashboard
                </h1>
                <p className="text-sm text-muted-foreground">Centro de control del robot guía</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse"></div>
              <span className="text-sm text-success font-medium">Sistema operativo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Columna izquierda - Información del robot */}
          <div className="lg:col-span-1 space-y-6">
            <RobotInfo 
              robotId="YMH-BOT-001"
              uptime="8h 42m"
              visitorsServed={23}
              connectionStatus="connected"
            />
          </div>

          {/* Columna central - Batería */}
          <div className="lg:col-span-1 space-y-6">
            <BatteryStatus 
              percentage={batteryLevel}
              isCharging={isCharging}
              voltage={12.1}
              temperature={28}
            />
            <BatteryChart />
          </div>

          {/* Columna derecha - Mapa */}
          <div className="lg:col-span-1">
            <RobotMap 
              position={{ x: 45, y: 30 }}
              destination={{ x: 70, y: 60 }}
              status="guiding"
            />
          </div>
        </div>

        {/* Sección inferior - Métricas adicionales */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-card rounded-lg border border-primary/20 p-4 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-success">98.2%</div>
              <div className="text-sm text-muted-foreground">Disponibilidad</div>
            </div>
          </div>
          
          <div className="bg-gradient-card rounded-lg border border-primary/20 p-4 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary">4.8</div>
              <div className="text-sm text-muted-foreground">Rating promedio</div>
            </div>
          </div>
          
          <div className="bg-gradient-card rounded-lg border border-primary/20 p-4 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-warning">3</div>
              <div className="text-sm text-muted-foreground">Tours activos</div>
            </div>
          </div>
          
          <div className="bg-gradient-card rounded-lg border border-primary/20 p-4 backdrop-blur-sm">
            <div className="text-center">
              <div className="text-2xl font-bold text-muted-foreground">12.5°C</div>
              <div className="text-sm text-muted-foreground">Temp. ambiente</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;