import { $ } from "bun";
export var gitHash = "none";
try {
    gitHash = (await $`git rev-parse --short HEAD`.text()).trim()
} catch (e) {
    console.error(e)
}
console.log(gitHash);
