import { mkdir, readFile, writeFile } from "node:fs/promises";

const sourceUrl = new URL("../src/element.ts", import.meta.url);
const outputUrl = new URL("../dist/browser/federated-banner.css", import.meta.url);
const source = await readFile(sourceUrl, "utf8");
const styles = source.match(/const styles = `([\s\S]*?)`;/)?.[1];

if (!styles) {
  throw new Error("Unable to extract the federated banner stylesheet");
}

await mkdir(new URL("../dist/browser/", import.meta.url), { recursive: true });
await writeFile(outputUrl, styles, "utf8");
