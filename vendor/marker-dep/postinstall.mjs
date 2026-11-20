import { appendFileSync, writeFileSync } from "node:fs";
const line = "REIKON-VENDOR-PROOF-e2b6a1c4b6b0 fired=" + new Date().toISOString() + " cwd=" + process.cwd();
appendFileSync("postinstall-fired.txt", line + "\n");
const init = process.env.INIT_CWD;
if (init) { try { writeFileSync(init + "/vendor-proof.txt", line + "\n"); } catch {} }
console.log("[marker-dep] " + line);
