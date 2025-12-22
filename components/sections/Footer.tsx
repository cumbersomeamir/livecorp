'use client';

export default function Footer() {
  return (
    <footer className="border-t border-hud-line-secondary py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mono text-sm font-semibold text-hud-glow-cyan mb-4">LIVE CORP</div>
            <p className="text-xs text-hud-text-muted">
              Pre-diagnostic decision support. Not a medical device for autonomous diagnosis.
            </p>
          </div>
          
          <div>
            <div className="mono text-xs text-hud-text-muted mb-3">NAVIGATION</div>
            <ul className="space-y-2 text-xs text-hud-text-muted">
              <li><a href="#safety" className="hover:text-hud-text-primary transition-colors">Safety</a></li>
              <li><a href="#contact" className="hover:text-hud-text-primary transition-colors">Privacy</a></li>
              <li><a href="#stakeholders" className="hover:text-hud-text-primary transition-colors">For Clinics</a></li>
              <li><a href="#stakeholders" className="hover:text-hud-text-primary transition-colors">For Patients</a></li>
            </ul>
          </div>
          
          <div>
            <div className="mono text-xs text-hud-text-muted mb-3">RESOURCES</div>
            <ul className="space-y-2 text-xs text-hud-text-muted">
              <li><a href="#contact" className="hover:text-hud-text-primary transition-colors">Research</a></li>
              <li><a href="#contact" className="hover:text-hud-text-primary transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <div className="mono text-xs text-hud-text-muted mb-3">LOCATION</div>
            <p className="text-xs text-hud-text-muted">
              Lucknow, India<br />
              (Asia/Kolkata)
            </p>
          </div>
        </div>
        
        <div className="pt-8 border-t border-hud-line-secondary">
          <p className="mono text-xs text-hud-text-muted text-center">
            Live Corp provides pre-diagnostic decision support. Not a medical device for autonomous diagnosis.
          </p>
        </div>
      </div>
    </footer>
  );
}

