import { execSync } from "node:child_process";
export var gitHashShort = "none";
export var gitHashLong = "none";
try {
    gitHashShort = execSync("git rev-parse --short HEAD").toString().trim();
} catch (e) {
    console.error(e)
}
try {
    gitHashLong = execSync("git rev-parse HEAD").toString().trim();
} catch (e) {
    console.error(e)
}
console.log(gitHashShort);
