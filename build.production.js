import * as esbuild from "esbuild";
import { dirname, resolve } from "path" 
import { fileURLToPath } from "url";
import copy from "esbuild-copy-static-files";

import { buildEnvironment } from "./build.environment.js";
import { dTSPathAliasPlugin } from 'esbuild-plugin-d-ts-path-alias';

import { glob } from "glob";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const getGlobFiles = async (directory, ignore = null) => {
  const files = await glob(directory, { ignore: ignore });
  return files;
};

const runBuild = async () => {
  const sourceFiles = await getGlobFiles("./src/**/*.ts");
  const plugins = [
    buildEnvironment({ environment: "production" }),
    copy({
      src: resolve(__dirname,"./static"),
      dest:  resolve(__dirname,"./dist/static"),
      recursive: true,
    }),
    dTSPathAliasPlugin({
      tsconfigPath:"./tsconfig.json",
      outputPath:"./dist/types",
      debug:true
    })
  ];

  esbuild.build({
    plugins,
    supported: {
      "dynamic-import": true,
    },
    platform: "browser",
    format: "esm",
    bundle: true,
    write: true,
    entryPoints: ["./src/main.ts", ...sourceFiles],
    tsconfig: "./tsconfig.json",
    outdir: "./dist/src",
    external: ["http", "canvas", "global-jsdom", "global-jsdom/register"],
    keepNames: true,
    treeShaking:true,
    sourcemap: true,
    minify: false,
    target: "es2018",
    loader: {
      ".js":"ts",
      ".png": "dataurl",
      ".jpg": "file",
      ".jpeg": "file",
      ".svg": "text"
    }
  });
};

runBuild();
