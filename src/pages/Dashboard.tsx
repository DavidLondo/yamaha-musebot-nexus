import { BatteryStatus } from "@/components/BatteryStatus";
import { BatteryChart } from "@/components/BatteryChart";
import { RobotMap } from "@/components/RobotMap";
import { RobotInfo } from "@/components/RobotInfo";
import Sidebar from "@/components/Sidebar";

const Dashboard = () => {
  // Datos simulados - en producción vendrían de una API
  const batteryLevel = 85;
  const isCharging = false;

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main Content */}
      <div className="flex-1">
        {/* Header */}
        <header className="border-b border-border bg-card px-8 py-6">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Robot Status</h1>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-8">
          {/* Status Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card rounded-lg border border-border p-6 shadow-card">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Temperature</p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-3xl font-bold text-foreground">25°C</h3>
                  <span className="text-sm text-success">+1°C</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6 shadow-card">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Battery Level</p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-3xl font-bold text-foreground">85%</h3>
                  <span className="text-sm text-destructive">-5%</span>
                </div>
              </div>
            </div>
            
            <div className="bg-card rounded-lg border border-border p-6 shadow-card">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground">Location</p>
                <div className="flex items-baseline space-x-2">
                  <h3 className="text-xl font-bold text-foreground">Gallery 3</h3>
                  <span className="text-sm text-muted-foreground">N/A</span>
                </div>
              </div>
            </div>
          </div>

          {/* Battery Chart Section */}
          <div className="mb-8">
            <BatteryChart />
          </div>

          {/* Robot Location Section */}
          <div>
            <RobotMap 
              position={{ x: 45, y: 30 }}
              destination={{ x: 70, y: 60 }}
              status="guiding"
            />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;