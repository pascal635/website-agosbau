#!/usr/bin/env node
// One-off: alle Quellbilder (echt + KI + Platzhalter) → public/images/ als optimiertes WebP.
import sharp from 'sharp';
import { readdirSync, mkdirSync, statSync } from 'node:fs';
import { join, parse } from 'node:path';

const SRC_DIRS = ['assets/images', 'assets/images/ai', 'assets/images/ai/placeholders'];
const OUT = 'public/images';
const MAX_W = 1600;
const exts = new Set(['.png', '.jpg', '.jpeg', '.webp']);

mkdirSync(OUT, { recursive: true });
let n = 0;
for (const dir of SRC_DIRS) {
  let files = [];
  try { files = readdirSync(dir); } catch { continue; }
  for (const f of files) {
    const p = join(dir, f);
    if (!statSync(p).isFile()) continue;
    const { name, ext } = parse(f);
    if (!exts.has(ext.toLowerCase())) continue;
    const out = join(OUT, `${name}.webp`);
    await sharp(p)
      .rotate()
      .resize({ width: MAX_W, withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(out);
    n++;
    console.log('✓', out);
  }
}
console.log(`\n${n} Bilder optimiert → ${OUT}`);
