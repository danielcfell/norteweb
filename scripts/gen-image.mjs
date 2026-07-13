/* ============================================================
   gen-image.mjs — genera imágenes con la Gemini API (Nano Banana:
   modelo gemini-2.5-flash-image), tier gratuito.
   La API key se lee de la variable de entorno (GEMINI_API_KEY o
   GOOGLE_API_KEY) y NUNCA se imprime ni se guarda en el repo.

   Uso:
     node --env-file=.env.local scripts/gen-image.mjs "<prompt>" <salida.png>

   Ejemplo:
     node --env-file=.env.local scripts/gen-image.mjs "un gato" public/gato.png
   ============================================================ */

import { writeFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const MODEL = process.env.GEN_MODEL || "gemini-2.5-flash-image";
const ENDPOINT = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

const key = process.env.GEMINI_API_KEY || process.env.GOOGLE_API_KEY;

function fail(msg) {
  console.error(`\n✗ ${msg}\n`);
  process.exit(1);
}

if (!key || key.includes("PEGA_TU_KEY") || key.length < 20) {
  fail(
    "No hay API key válida. Define GEMINI_API_KEY (o GOOGLE_API_KEY) en .env.local " +
      "y ejecuta con:  node --env-file=.env.local scripts/gen-image.mjs \"<prompt>\" <salida.png>"
  );
}

const prompt = process.argv[2];
const outPath = process.argv[3];
if (!prompt || !outPath) {
  fail('Faltan argumentos. Uso: node --env-file=.env.local scripts/gen-image.mjs "<prompt>" <salida.png>');
}

console.log(`• Modelo: ${MODEL} (tier gratuito)`);
console.log(`• Prompt: ${prompt.slice(0, 80)}${prompt.length > 80 ? "…" : ""}`);
console.log(`• Salida: ${outPath}`);
console.log("• Generando…");

const res = await fetch(ENDPOINT, {
  method: "POST",
  headers: {
    "x-goog-api-key": key, // en header, nunca en la URL
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    contents: [{ parts: [{ text: prompt }] }],
    generationConfig: { responseModalities: ["IMAGE"] },
  }),
});

if (!res.ok) {
  const body = await res.text();
  // Redacta cualquier eco de la key por si acaso apareciera en el error.
  const safe = body.replaceAll(key, "«REDACTED»");
  fail(`La API respondió ${res.status} ${res.statusText}:\n${safe.slice(0, 800)}`);
}

const data = await res.json();
const parts = data?.candidates?.[0]?.content?.parts ?? [];
const imgPart = parts.find((p) => p.inlineData?.data);

if (!imgPart) {
  const textPart = parts.find((p) => p.text)?.text ?? "(sin contenido)";
  fail(`La respuesta no trajo imagen. Texto devuelto: ${textPart.slice(0, 400)}`);
}

const buf = Buffer.from(imgPart.inlineData.data, "base64");
await mkdir(dirname(outPath), { recursive: true });
await writeFile(outPath, buf);

console.log(`\n✓ Imagen guardada: ${outPath}  (${(buf.length / 1024).toFixed(0)} KB, ${imgPart.inlineData.mimeType})`);
