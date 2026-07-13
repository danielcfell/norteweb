/* ============================================================
   gen-variants.mjs — genera VARIANTES de las imágenes del hero y
   del bot con la Inference API de Hugging Face (FLUX.1-schnell).
   Pasa prompt positivo y negativo, 2 variantes por imagen (seeds
   distintos), y optimiza a WebP en public/img/<name>-v1|v2.webp.
   El token se lee de HUGGINGFACE_API_KEY y NUNCA se imprime.
   ============================================================ */

import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const MODEL = process.env.HF_MODEL || "black-forest-labs/FLUX.1-schnell";
const token = process.env.HUGGINGFACE_API_KEY || process.env.HF_TOKEN;
if (!token || token.length < 20) { console.error("✗ Falta HUGGINGFACE_API_KEY en .env.local"); process.exit(1); }
const redact = (s) => String(s).replaceAll(token, "«REDACTED»");

const JOBS = [
  {
    name: "hero", w: 1200, h: 800, outW: 1100,
    prompt:
      "Warm, natural-light documentary photograph of a small business owner in a shop in a small Andean town, smiling while using a smartphone at the counter. Realistic, soft daylight, warm earthy tones, shallow depth of field, 35mm, editorial, authentic, trustworthy. Muted green and cream color grade.",
    negative:
      "neon, glowing, cyberpunk, sci-fi, 3d render, holographic, futuristic, blue neon, pink neon, dark background, floating UI, circuit lines, network globe, abstract tech, lens flare, oversaturated, text, watermark, distorted hands, extra fingers",
  },
  {
    name: "bot", w: 1024, h: 768, outW: 1024,
    prompt:
      "Warm, natural-light documentary photograph of a relaxed small shop owner in a small Andean town, calmly doing other work or having a coffee while a smartphone rests on the counter showing message notifications. Realistic, soft daylight, warm earthy tones, shallow depth of field, 35mm, editorial, authentic, conveys calm and trust. Muted green and cream color grade.",
    negative:
      "neon, glowing, cyberpunk, sci-fi, 3d render, holographic, futuristic, blue neon, pink neon, dark background, floating UI, abstract tech, lens flare, oversaturated, text, watermark, distorted hands, extra fingers, person staring at phone",
  },
];

const ENDPOINTS = [
  `https://router.huggingface.co/hf-inference/models/${MODEL}`,
  `https://api-inference.huggingface.co/models/${MODEL}`,
];
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const OUT = path.resolve(__dirname, "..", "public", "img");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function gen(job, seed, attempt = 1) {
  const body = JSON.stringify({
    inputs: job.prompt,
    parameters: { width: job.w, height: job.h, negative_prompt: job.negative, seed },
  });
  for (const url of ENDPOINTS) {
    const res = await fetch(url, {
      method: "POST",
      headers: { Authorization: `Bearer ${token}`, "Content-Type": "application/json", Accept: "image/png", "x-wait-for-model": "true" },
      body,
    });
    const ct = res.headers.get("content-type") || "";
    if (res.ok && ct.startsWith("image/")) return Buffer.from(await res.arrayBuffer());
    const txt = redact(await res.text()).slice(0, 220);
    if ((res.status === 503 || res.status === 429) && attempt <= 4) {
      const wait = 15000 * attempt;
      console.log(`   · ${job.name} seed ${seed}: ${res.status}, reintento ${attempt}/4 en ${wait / 1000}s…`);
      await sleep(wait);
      return gen(job, seed, attempt + 1);
    }
    console.log(`   · ${job.name} seed ${seed}: endpoint ${res.status} → ${txt}`);
  }
  throw new Error(`fallo ${job.name} seed ${seed}`);
}

await mkdir(OUT, { recursive: true });
console.log(`• Modelo: ${MODEL} · 2 variantes por imagen → public/img/\n`);
for (const job of JOBS) {
  for (let v = 1; v <= 2; v++) {
    const seed = job.name === "hero" ? v * 1111 : v * 2222 + 7;
    process.stdout.write(`→ ${job.name}-v${v} (seed ${seed})… `);
    try {
      const raw = await gen(job, seed);
      const out = path.join(OUT, `${job.name}-v${v}.webp`);
      const info = await sharp(raw).resize({ width: job.outW, withoutEnlargement: true }).webp({ quality: 82 }).toFile(out);
      console.log(`✓ ${info.width}x${info.height}, ${(info.size / 1024).toFixed(0)} KB`);
    } catch (e) { console.log(`✗ ${redact(e.message)}`); }
  }
}
console.log("\nListo. Elige v1 o v2 de cada una.");
