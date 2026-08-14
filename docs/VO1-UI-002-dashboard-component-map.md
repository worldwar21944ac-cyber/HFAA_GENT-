# VO1-UI-002 — Dashboard Component Map

| Component | Purpose | Data contract | Status |
|---|---|---|---|
| SystemStatus | Overall HMI state | system status | Shell |
| BatteryTelemetry | SOC and power state | battery.soc, pv.w, pv.wh | Shell |
| GeometryStatus | Level 0 geometry authority | twin.geometry | Shell |
| SimulationResults | L1–L5 pass/fail | simulation.levels[] | Shell |
| ThermalPanel | Level 3 thermal/CFD | thermal.* | Queued |
| SolarYieldPanel | Level 2 optical yield | solar.* | Queued |
| PartLookup | VO1-PART-#### resolution | parts.* | Queued |
| CharterPanel | Deployment/authorization state | charter.* | Shell |
| HmiLegend | Four-color semantic language | static token map | Shell |
| SPIDERFeed | Secure live telemetry | spider.* | Queued |

## Data-flow rule

Sensor and simulation contracts flow into the dashboard. No UI action is permitted to mutate the simulation authority.

## Binding order

1. Stable schema and validation
2. Telemetry adapters
3. Simulation result adapters
4. QR/part lookup
5. SPIDER-0 feed
6. Asset-vault / charter integration
7. Field deployment hardening
