import fs from "fs";
import path from "path";
import * as esbuild from "esbuild";

fs.mkdirSync("dist", { recursive: true });

/**
 * @type {esbuild.BuildOptions}
 */
const baseOptions = {
  entryPoints: ["src/index.ts"],
  bundle: true,
  minify: true,
  target: "es2020",
};

// build esm
esbuild.build({
  ...baseOptions,
  outfile: "dist/index.js",
  format: "esm",
});

// build umd
esbuild.build({
  ...baseOptions,
  outfile: "dist/lib.umd.js",
  format: "iife",
  globalName: "ClickToCelebrate",
});

// build react
esbuild.build({
  ...baseOptions,
  entryPoints: ["src/react.tsx"],
  outfile: "dist/react.js",
  format: "esm",
  external: ["react"],
});

// copy files
const sourceDir = "src/";
const destinationDir = "dist/";
const files = ["styles.css", "types.d.ts"];
files.forEach((file) => {
  fs.copyFileSync(
    path.resolve(sourceDir + file),
    path.resolve(destinationDir + file)
  );
});
