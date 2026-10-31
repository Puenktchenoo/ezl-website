// Zentrale Angaben zum Verein.
// Alles, was noch mit Sebastian geklärt werden muss, steht hier an einer Stelle.
// Ein Wert "null" bedeutet: noch offen. Die Seite zeigt dann einen neutralen Ersatztext.

export const verein = {
  name: 'Erforschung zukunftsfähiger Landnutzungsformen',
  kurz: 'EzL',
  rechtsform: 'nicht eingetragener Verein',
  sitz: 'Gemeinde Schorfheide',
  gegruendet: '2022', // OFFEN: Satzung nennt die Gründungsversammlung am 29.03.2021, Übergabe und Infotext nennen März 2022
  mitglieder: 'rund 10', // 8 Mitglieder plus 2 Fördermitglieder laut Tätigkeitsbericht
  vorsitz: 'Sebastian Weber',

  // OFFEN: Kontakt-E-Mail für die Seite. Bis zur Klärung die Adresse aus der Beitrittserklärung.
  email: 'permahof@gmx.net',

  // OFFEN: Anschrift fürs Impressum. Vorschlag laut Übergabe: Britz, nicht der Muttergarten.
  // Beispiel: ['Straße Hausnummer', '16230 Britz']
  anschrift: null as string[] | null,

  // OFFEN: Ist die Gemeinnützigkeit vom Finanzamt anerkannt?
  // true = Zuwendungsbestätigungen möglich, false = nein, null = noch ungeklärt
  gemeinnuetzigAnerkannt: null as boolean | null,

  // OFFEN: Bankverbindung veröffentlichen? Erst nach Freigabe auf true setzen.
  // Das Repository ist öffentlich: IBAN und BIC erst nach Freigabe eintragen.
  kontoZeigen: false,
  konto: {
    bank: 'GLS Gemeinschaftsbank',
    inhaber: 'Sebastian Weber',
    iban: '',
    bic: '',
  },

  // YouTube Video. Nur die ID eintragen (aus https://youtu.be/ID).
  videoId: 'ehJ2I9E9mic' as string | null,

} as const;

export const navigation = [
  { href: '/permakultur/', text: 'Permakultur' },
  { href: '/flaechen/', text: 'Flächen' },
  { href: '/vision/', text: 'Vision' },
  { href: '/mitmachen/', text: 'Mitmachen' },
];

export const fussLinks = [
  { href: '/ueber-uns/', text: 'Über uns' },
  { href: '/muttergarten/', text: 'Muttergarten' },
  { href: '/wirtschaft/', text: 'Lohnt sich das?' },
  { href: '/spenden/', text: 'Spenden' },
  { href: '/kontakt/', text: 'Kontakt' },
  { href: '/impressum/', text: 'Impressum' },
  { href: '/datenschutz/', text: 'Datenschutz' },
];
