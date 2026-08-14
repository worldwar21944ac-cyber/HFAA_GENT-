# HFAA_GENT-

## VO-1 Void Optical Uno Control Dashboard

`VO1-UI-001 v0.1` is a React + Tailwind HMI shell for VO-1 field monitoring and digital-twin simulation results.

### Structure

```text
.
├── docs/
│   ├── VO1-UI-001.md
│   ├── VO1-UI-002-dashboard-component-map.md
│   └── VO1-HMI-sign-telemetry-language-v0.1.md
├── src/
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

### Run

```bash
npm install
npm run dev
```

### Authority

The digital twin is authoritative. The UI renders simulation and telemetry state and does not override simulation results.

### Current scope

The repository contains the visual shell and architecture documentation. Live telemetry, SPIDER-0, QR lookup, asset-vault integration, and physical deployment remain unbound.
