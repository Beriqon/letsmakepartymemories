import fs from "node:fs/promises";
import path from "node:path";
import heicConvert from "heic-convert";

const projectRoot = process.cwd();
const inputDirs = [
  path.join(projectRoot, "public", "gallerij"),
  path.join(projectRoot, "public", "gallerijwetransfer"),
];

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function convertDir(inputDir) {
  try {
    const entries = await fs.readdir(inputDir, { withFileTypes: true });
    const heicFiles = entries
      .filter((e) => e.isFile())
      .map((e) => e.name)
      .filter((name) => name.toLowerCase().endsWith(".heic"));

    let converted = 0;
    for (const filename of heicFiles) {
      const inputPath = path.join(inputDir, filename);
      const outputFilename = filename.replace(/\.heic$/i, ".jpg");
      const outputPath = path.join(inputDir, outputFilename);

      if (await fileExists(outputPath)) continue;

      const inputBuffer = await fs.readFile(inputPath);
      const outputBuffer = await heicConvert({
        buffer: inputBuffer,
        format: "JPEG",
        quality: 0.9,
      });

      await fs.writeFile(outputPath, outputBuffer);
      converted += 1;
    }

    console.log(`Converted ${converted} HEIC file(s) in ${inputDir}`);
  } catch (err) {
    if (err && typeof err === "object" && err.code === "ENOENT") {
      console.log(`Skipped (missing): ${inputDir}`);
      return;
    }
    throw err;
  }
}

async function main() {
  for (const dir of inputDirs) {
    await convertDir(dir);
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

