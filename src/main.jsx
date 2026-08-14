import React from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const states = {
  nominal: { label: 'Nominal', className: 'state-nominal' },
  attention: { label: 'Attention', className: 'state-attention' },
  fault: { label: 'Fault', className: 'state-fault' },
  telemetry: { label: 'Telemetry', className: 'state-telemetry' },
  neutral: { label: 'Structural', className: 'state-neutral' },
}

function StatusBadge({ state = 'neutral', children }) {
  const item = states[state]
  return <span className={`status-badge ${item.className}`}><span className="status-dot" />{children ?? item.label}</span>
}

function Metric({ label, value, unit, state = 'neutral' }) {
  return (
    <div className="metric-card">
      <div className="metric-label">{label}</div>
      <div className="metric-value">{value} <span>{unit}</span></div>
      <StatusBadge state={state} />
    </div>
  )
}

function Panel({ title, eyebrow, children, className = '' }) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-header">
        <div>
          <div className="eyebrow">{eyebrow}</div>
          <h2>{title}</h2>
        </div>
      </div>
      {children}
    </section>
  )
}

function App() {
  return (
    <div className="app-shell">
      <header className="topbar">
        <div className="brand-block">
          <div className="brand-mark">VO</div>
          <div>
            <div className="brand-title">VOID OPTICAL UNO</div>
            <div className="brand-subtitle">FIELD CONTROL / DIGITAL TWIN</div>
          </div>
        </div>
        <div className="top-status">
          <StatusBadge state="telemetry">COMMS ACTIVE</StatusBadge>
          <span className="mono">VO1-UI-001 · v0.1</span>
        </div>
      </header>

      <main className="main">
        <div className="hero-row">
          <div>
            <div className="eyebrow">LAYER 3 — SIGNS / HUMAN-MACHINE INTERFACE</div>
            <h1>VO-1 Control Dashboard</h1>
            <p>Operator-facing shell for field monitoring, simulation results, telemetry, and repair workflows.</p>
          </div>
          <StatusBadge state="nominal">SYSTEM NOMINAL</StatusBadge>
        </div>

        <div className="metric-grid">
          <Metric label="Battery SOC" value="82" unit="%" state="nominal" />
          <Metric label="PV Input" value="486" unit="W" state="telemetry" />
          <Metric label="Internal Temp" value="31.4" unit="°C" state="nominal" />
          <Metric label="External Temp" value="36.8" unit="°C" state="attention" />
        </div>

        <div className="dashboard-grid">
          <Panel title="Level 0 Geometry" eyebrow="STRUCTURE / L0-GEO-001">
            <div className="placeholder-visual">
              <div className="wireframe">VO-1</div>
              <div className="visual-caption">Digital twin geometry authority</div>
            </div>
            <div className="panel-footer"><StatusBadge state="neutral">SIMULATION AUTHORITY</StatusBadge><span className="mono">PASS / GEOMETRY LOCK</span></div>
          </Panel>

          <Panel title="Power & Battery" eyebrow="LEVEL 4 / TELEMETRY">
            <div className="data-list">
              <div><span>Battery SOC</span><strong>82%</strong></div>
              <div><span>PV Input</span><strong>486 W</strong></div>
              <div><span>PV Today</span><strong>4.82 kWh</strong></div>
              <div><span>Fault Flags</span><strong className="good">0 active</strong></div>
            </div>
            <div className="progress"><span style={{ width: '82%' }} /></div>
          </Panel>

          <Panel title="Simulation Results" eyebrow="LEVEL 1–5 / DIGITAL TWIN">
            <div className="results-table">
              {[['L1','Structural FEA','PASS'],['L2','Solar Optical Yield','PASS'],['L3','Thermal / CFD','QUEUED'],['L4','Power / Battery','PASS'],['L5','Integrated System','QUEUED']].map(([level, name, result]) => (
                <div className="result-row" key={level}><span className="level-tag">{level}</span><span>{name}</span><StatusBadge state={result === 'PASS' ? 'nominal' : 'attention'}>{result}</StatusBadge></div>
              ))}
            </div>
          </Panel>

          <Panel title="Field Repair / Part Lookup" eyebrow="QR / VO1-PART-####">
            <div className="lookup-box">
              <div className="qr-symbol">▦</div>
              <div><strong>Scan or enter a part identifier</strong><p>Resolve part metadata, revision, repair instructions, and inventory state.</p></div>
            </div>
            <button className="action-button">OPEN PART LOOKUP</button>
          </Panel>

          <Panel title="Sovereign Deployment Charter" eyebrow="DEPLOYMENT / ASSET VAULT">
            <div className="charter-grid">
              <div><span>Authority</span><strong>Digital Twin</strong></div>
              <div><span>UI Override</span><strong>Disabled</strong></div>
              <div><span>Asset Vault</span><strong>Not Bound</strong></div>
              <div><span>Physical Fabrication</span><strong>Not Authorized</strong></div>
            </div>
          </Panel>

          <Panel title="HMI Sign & Telemetry Language" eyebrow="VO1-UI-002 / SEMIOTIC LAYER">
            <div className="legend-grid">
              <StatusBadge state="nominal">Nominal / Energy Positive</StatusBadge>
              <StatusBadge state="attention">Attention / Reduced Margin</StatusBadge>
              <StatusBadge state="fault">Fault / Protective Action</StatusBadge>
              <StatusBadge state="telemetry">Telemetry / Comms Active</StatusBadge>
            </div>
          </Panel>
        </div>

        <footer className="footer-note">Twin is authoritative. UI renders simulation and telemetry state; it does not override simulation results.</footer>
      </main>
    </div>
  )
}

createRoot(document.getElementById('root')).render(<App />)
