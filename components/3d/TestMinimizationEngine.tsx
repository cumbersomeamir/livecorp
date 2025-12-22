'use client';

export default function TestMinimizationEngine() {
  const nodes = [
    { label: 'CAMERA', angle: 0 },
    { label: 'MIC', angle: 60 },
    { label: 'WEARABLE', angle: 120 },
    { label: 'VITALS', angle: 180 },
    { label: 'DIPSTICK', angle: 240 },
    { label: 'SYMPTOMS', angle: 300 },
  ];

  return (
    <div className="w-full h-full min-h-[500px] flex items-center justify-center relative">
      {/* Outer Ring */}
      <div className="absolute w-64 h-64 border-2 border-hud-glow-teal/40 rounded-full animate-spin" style={{ animationDuration: '20s' }} />
      <div className="absolute w-48 h-48 border-2 border-hud-glow-cyan/60 rounded-full animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />
      
      {/* Center Core */}
      <div className="absolute w-24 h-24 border-2 border-hud-glow-cyan rounded-full flex items-center justify-center">
        <div className="w-16 h-16 border border-hud-glow-teal/50 rounded-full" />
      </div>

      {/* Orbiting Nodes */}
      {nodes.map((node, index) => {
        const radius = 120;
        const x = Math.cos((node.angle * Math.PI) / 180) * radius;
        const y = Math.sin((node.angle * Math.PI) / 180) * radius;
        
        return (
          <div
            key={index}
            className="absolute flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
              transform: 'translate(-50%, -50%)',
            }}
          >
            <div className="w-12 h-12 border-2 border-hud-glow-cyan rounded-full flex items-center justify-center mb-2">
              <div className="w-6 h-6 border border-hud-glow-cyan/50 rounded-full" />
            </div>
            <span className="mono text-xs text-hud-text-muted">{node.label}</span>
          </div>
        );
      })}
    </div>
  );
}
