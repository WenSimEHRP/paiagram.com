import { execSync } from "node:child_process";
export var gitHash = "none";
try {
    gitHash = execSync("git rev-parse --short HEAD").toString().trim();
} catch (e) {
    console.error(e)
}
console.log(gitHash);
