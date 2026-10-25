// Prüft die gebaute Seite auf Gedankenstriche, Semikolons und Bindestriche als Gedankenstrich.
// Aufruf nach dem Build: npm run check:texte
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const dateien = [];
const lauf = (d) => readdirSync(d).forEach((f) => {
  const p = join(d, f);
  statSync(p).isDirectory() ? lauf(p) : p.endsWith('.html') && dateien.push(p);
});
lauf('dist');

let fehler = 0;
for (const f of dateien) {
  const text = readFileSync(f, 'utf8')
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<svg[\s\S]*?<\/svg>/g, (m) => m.replace(/<[^>]+>/g, ' '))
    .replace(/<[^>]+>/g, ' ')
    .replace(/&[a-z#0-9]+;/gi, (e) => (e === '&amp;' ? '&' : ' '));
  const treffer = [...text.matchAll(/.{0,40}(–|—|;| - ).{0,40}/g)];
  for (const t of treffer) { fehler++; console.log(`${f}: »${t[0].trim()}«`); }
}
console.log(fehler ? `${fehler} Stellen gefunden.` : `OK: ${dateien.length} Seiten ohne Gedankenstriche und Semikolons.`);
process.exit(fehler ? 1 : 0);
