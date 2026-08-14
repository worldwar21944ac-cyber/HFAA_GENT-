# VO-1 HMI Sign & Telemetry Language v0.1

## Semantic tokens

| State | Visual token | Operator meaning | Example |
|---|---|---|---|
| NOMINAL | Emerald | Operating within defined margin | Energy-positive, no active fault |
| ATTENTION | Amber | Reduced margin or pending action | Thermal margin narrowing |
| FAULT | Rose | Protective action / abnormal state | Sensor or system fault |
| TELEMETRY | Sky | Communications or live-data activity | SPIDER-0 link active |
| STRUCTURAL | Zinc | Neutral / reference information | Geometry, revision, metadata |

## Rules

- Color is never the sole carrier of meaning; pair state with text and/or an icon.
- Fault state must be explicit and must not be represented as nominal by animation.
- Telemetry activity indicates data flow, not health.
- Structural state is informational and does not imply pass/fail.
- The dashboard does not authorize fabrication or override simulation authority.

## Freeze status

v0.1 is a language proposal. It is not frozen until validated against field/operator scenarios and accessibility checks.
