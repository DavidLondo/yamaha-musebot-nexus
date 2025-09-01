import { Card } from "@/components/ui/card";
import { MapPin, Navigation } from "lucide-react";

interface RobotMapProps {
  position?: { x: number; y: number };
  destination?: { x: number; y: number };
  status?: 'idle' | 'moving' | 'guiding' | 'charging';
}

export const RobotMap = ({ 
  position = { x: 45, y: 30 },
  destination = { x: 70, y: 60 },
  status = 'guiding'
}: RobotMapProps) => {
  const getStatusColor = () => {
    switch (status) {
      case 'idle': return 'text-muted-foreground';
      case 'moving': return 'text-warning';
      case 'guiding': return 'text-success';
      case 'charging': return 'text-primary';
      default: return 'text-muted-foreground';
    }
  };

  const getStatusLabel = () => {
    switch (status) {
      case 'idle': return 'En espera';
      case 'moving': return 'Moviéndose';
      case 'guiding': return 'Guiando visita';
      case 'charging': return 'Cargando';
      default: return 'Desconocido';
    }
  };

  return (
    <Card className="bg-gradient-card border-primary/20 backdrop-blur-sm">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Posición del Robot</h3>
          <div className="flex items-center space-x-2">
            <div className={`w-2 h-2 rounded-full ${getStatusColor().replace('text-', 'bg-')} animate-pulse`}></div>
            <span className={`text-sm font-medium ${getStatusColor()}`}>
              {getStatusLabel()}
            </span>
          </div>
        </div>

        {/* Mapa simplificado del museo */}
        <div className="relative bg-muted/30 rounded-lg h-48 overflow-hidden border">
          {/* Sala principal */}
          <div className="absolute inset-4 border-2 border-dashed border-muted-foreground/30 rounded">
            <span className="absolute top-2 left-2 text-xs text-muted-foreground">Sala Principal</span>
          </div>
          
          {/* Salas secundarias */}
          <div className="absolute top-4 right-4 w-16 h-12 border border-muted-foreground/20 rounded">
            <span className="text-xs p-1 text-muted-foreground">Sala A</span>
          </div>
          <div className="absolute bottom-4 right-4 w-16 h-12 border border-muted-foreground/20 rounded">
            <span className="text-xs p-1 text-muted-foreground">Sala B</span>
          </div>

          {/* Entrada */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-4 bg-primary/30 rounded-t">
            <span className="text-xs text-center block text-primary">Entrada</span>
          </div>

          {/* Posición actual del robot */}
          <div 
            className="absolute w-4 h-4 transform -translate-x-1/2 -translate-y-1/2 z-10"
            style={{ left: `${position.x}%`, top: `${position.y}%` }}
          >
            <div className="relative">
              <div className="w-4 h-4 bg-primary rounded-full shadow-glow animate-pulse"></div>
              <MapPin className="absolute -top-1 -left-1 w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Destino */}
          {status === 'moving' && (
            <div 
              className="absolute w-3 h-3 transform -translate-x-1/2 -translate-y-1/2"
              style={{ left: `${destination.x}%`, top: `${destination.y}%` }}
            >
              <div className="w-3 h-3 bg-warning rounded-full opacity-60"></div>
              <Navigation className="absolute -top-1 -left-1 w-5 h-5 text-warning" />
            </div>
          )}
        </div>

        {/* Coordenadas */}
        <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
          <div>
            <span className="text-muted-foreground">Coordenadas:</span>
            <span className="ml-2 font-medium">X: {position.x}, Y: {position.y}</span>
          </div>
          <div>
            <span className="text-muted-foreground">Sala actual:</span>
            <span className="ml-2 font-medium">Sala Principal</span>
          </div>
        </div>
      </div>
    </Card>
  );
};