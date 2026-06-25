// Zentrale Site-Daten — Single Source. NAP zeichengleich (siehe context/strategie.md).
export const site = {
  name: "AGOS BAU",
  owner: "André Paul Gostomczyk",
  legalForm: "Einzelunternehmen",
  street: "Auf den Mehren 45",
  zip: "28832",
  city: "Achim",
  phone: "04202 511 61 31",
  phoneHref: "tel:+4942025116131",
  whatsapp: "0174 8842492",
  whatsappHref: "https://wa.me/491748842492",
  email: "info@agosbau.de",
  instagram: "@agos_bau",
  instagramHref: "https://instagram.com/agos_bau",
  url: "https://agosbau.de",
  hours: "Mo–Do 08–17 Uhr, Fr 08–14 Uhr",
  rating: { value: "5.0", count: 25 },
  founded: 2019,
  projects: "über 100",
  area: "Achim + 40–60 km (Bremen & Umland)",
  cta: "Kostenloses Angebot anfragen",
  reassurance: "Persönlicher Rückruf von André – kein Callcenter. Festpreis, keine versteckten Kosten.",
};

export const nav = [
  { label: "Badsanierung", href: "/badsanierung-bremen/" },
  { label: "Fliesenverlegung", href: "/fliesenverlegung-bremen/" },
  { label: "Referenzen", href: "/referenzen/" },
  { label: "Über uns", href: "/ueber-uns/" },
  { label: "FAQ", href: "/faq/" },
];

export const services = [
  { title: "Badsanierung", href: "/badsanierung-bremen/", desc: "Ihr komplettes Bad, neu und schlüsselfertig – aus einer Hand.", img: "badsanierung-bremen-agos-bau.webp" },
  { title: "Fliesenverlegung", href: "/fliesenverlegung-bremen/", desc: "Wand, Boden, innen und außen – sauber und präzise.", img: "fliesenverlegen-bremen-agos-bau.webp" },
  { title: "Großformatfliesen", href: "/grossformatfliesen-bremen/", desc: "XXL-Platten bis 120×270 cm, fachgerecht verlegt.", img: "grossformat-fliesen-bremen.webp" },
  { title: "Barrierefreies Bad", href: "/barrierefreies-bad-bremen/", desc: "Bodengleiche Dusche, sicher und modern.", img: "Barrierefreie-baeder-nach-din-18040-2.webp" },
  { title: "Terrasse & Außenbereich", href: "/terrasse-pool-fliesen/", desc: "Frostsichere Fliesen für Terrasse und Pool.", img: "terasse-und-pool-fliesen.webp" },
];

// Verbatim Google-Bewertungen (Quelle: intake/reviews.md)
export const reviews = [
  { name: "Christian Heinzl", text: "Wir sind mit der Arbeit von AGOS Bau wirklich zu 100 Prozent zufrieden. Von der Beratung bis zur Ausführung hat alles wunderbar geklappt. Unser Badezimmer sieht wirklich klasse jetzt aus, mit den großen Fliesen." },
  { name: "Irina und Peter", text: "Unser kleines Bad wurde vor 2 Jahren vom Agos Team komplett erneuert. Nach 2 Jahren kann ich nun sagen: Es ist immer noch der Hammer! Das tolle Ergebnis hält, was es verspricht." },
  { name: "Waldemar Sobocik", text: "Die Aufgabe war ein älteres Bad zu sanieren – beim Abriss stießen wir auf einige Hindernisse. Das war für das Team von Agos Bau kein Problem. Die Jungs haben eine Spitzenarbeit abgeliefert." },
  { name: "Robin Bennecke", text: "Absolute Profis am Werk. Agos-Bau hat mehrere Badezimmer bei uns gemacht – wir sind von Qualität und Service mehr als begeistert. Preis-Leistung mehr als fair. Sogar die Baustelle wurde sauber hinterlassen." },
  { name: "Lars D.", text: "Wir können AGOS für jeden empfehlen, der Wert auf hochwertige Fliesenlegearbeiten legt. Die Leidenschaft fürs Handwerk sieht man dem jungen Chef an. Klare Empfehlung." },
];

export const usps = [
  { title: "Aus einer Hand", desc: "Wir koordinieren auch Sanitär und Elektrik über feste Partnerbetriebe." },
  { title: "Festpreis", desc: "Was wir vereinbaren, gilt. Keine versteckten Kosten." },
  { title: "Normgerecht", desc: "Abdichtung nach DIN 18534 – damit Ihr Bad auch in zehn Jahren dicht ist." },
];
