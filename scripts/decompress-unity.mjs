import { brotliDecompressSync } from "node:zlib";
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const source = join("public", "games", "prototype", "Build");
const output = join("dist", "client", "games", "prototype", "Build");

mkdirSync(output, { recursive: true });

for (const [compressed, expanded] of [
  ["ge-mu.data", "ge-mu.data"],
  ["ge-mu.framework.js", "ge-mu.framework.js"],
]) {
  const contents = brotliDecompressSync(readFileSync(join(source, compressed)));
  writeFileSync(join(output, expanded), contents);
}

const wasm = brotliDecompressSync(readFileSync(join(source, "ge-mu.wasm")));
const splitAt = Math.ceil(wasm.length / 2);
writeFileSync(join(output, "ge-mu.wasm.part1"), wasm.subarray(0, splitAt));
writeFileSync(join(output, "ge-mu.wasm.part2"), wasm.subarray(splitAt));
