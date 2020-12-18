import * as path from "https://deno.land/std@0.81.0/path/mod.ts";
import { sideServe } from "https://cdn.jsdelivr.net/gh/ekmwest/side@1.1.3/mod.js";

const rootPath = Deno.cwd();
const sourcePath = path.join(rootPath, 'src');
const targetPath = path.join(rootPath, 'docs');
const componentsPath = path.join(sourcePath, 'components');

sideServe(sourcePath, targetPath, componentsPath);
