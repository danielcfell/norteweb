import sharp from "sharp";

// La imagen fuente fue removida de public/ (limpieza); recupérala con:
//   git show ad5e687:public/img/bot-robot-2.webp > public/img/bot-robot-2.webp
const SRC = "public/img/bot-robot-2.webp";
const OUT = process.argv[2] || "public/img/_bot-preview.webp";

// pantalla verde detectada
const cx = 616, cy = 442;
const size = Number(process.argv[3] || 118);   // ancho del logo
const rot  = Number(process.argv[4] || 0);     // grados

// glifo WhatsApp (silueta) en blanco
const wa = `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24">
<g transform="rotate(${rot} 12 12)">
<path fill="#ffffff" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885M20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.14 1.595 5.945L0 24l6.335-1.652a12.062 12.062 0 005.71 1.447h.006c6.585 0 11.946-5.336 11.949-11.896 0-3.176-1.24-6.165-3.495-8.411"/>
</g></svg>`;

const logo = await sharp(Buffer.from(wa)).png().toBuffer();
const meta = await sharp(logo).metadata();

await sharp(SRC)
  .composite([{ input: logo, left: Math.round(cx - meta.width/2), top: Math.round(cy - meta.height/2) }])
  .webp({ quality: 88 })
  .toFile(OUT);

console.log("escrito:", OUT, `logo ${meta.width}x${meta.height} @ (${cx},${cy}) rot ${rot}`);
