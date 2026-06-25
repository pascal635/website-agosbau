// Stadtteil-/Umlandseiten — pro Ort eigener, einzigartiger Inhalt (≥60 % unique).
export interface City {
  slug: string;       // URL ohne /
  ort: string;        // Anzeige-Ort (H1)
  keyword: string;    // Primary Keyword
  metaDesc: string;
  subline: string;
  context: string;    // lokaler Bezug (unique)
  proof?: { text: string; name: string };
  faq: { q: string; a: string }[];
  heroImg: string;
}

export const cities: City[] = [
  {
    slug: "fliesenleger-bremen-oberneuland",
    ort: "Bremen-Oberneuland",
    keyword: "Fliesenleger Bremen-Oberneuland",
    metaDesc: "Fliesenleger & Badsanierung in Bremen-Oberneuland. Fachbetrieb aus Achim, Festpreis, Referenz vor Ort: zwei Villen mit Pool und Großformatfliesen. Jetzt anfragen.",
    subline: "Modernes Bad oder neue Fliesen in Oberneuland? Wir kommen aus Achim, kennen das Viertel und seine hochwertigen Häuser – und haben hier schon gebaut.",
    context: "Oberneuland steht für gepflegte Villen, große Grundstücke und gehobenes Wohnen im Bremer Osten. Wer hier saniert, will Qualität, die zum Haus passt – kein Standard von der Stange. Genau diese Ansprüche bedienen wir: präzise Fliesenarbeit, Großformat und eine Ausführung, die auch in zehn Jahren noch überzeugt.",
    proof: { text: "Unsere Flaggschiff-Referenz liegt direkt hier: zwei Villen in Oberneuland, vollständig von uns geplant – Poolbau, Terrassenfliesen und Bäder mit Großformat, alle Gewerke koordiniert.", name: "Projekt Oberneuland" },
    faq: [
      { q: "Kommen Sie für ein Projekt nach Oberneuland?", a: "Ja. Von unserem Sitz in Achim sind wir schnell in Oberneuland und im gesamten Bremer Osten. Oberneuland gehört zu unserem Kerngebiet." },
      { q: "Übernehmen Sie auch kleinere Aufträge?", a: "Vom einzelnen Fliesenaustausch bis zur kompletten Villa – fragen Sie einfach an." },
    ],
    heroImg: "badsanierung-bremen-agos-bau.webp",
  },
  {
    slug: "fliesenleger-bremen-schwachhausen",
    ort: "Bremen-Schwachhausen",
    keyword: "Fliesenleger Bremen-Schwachhausen",
    metaDesc: "Fliesenleger & Badsanierung in Bremen-Schwachhausen. Erfahrung mit Altbau und Stadtvillen, normgerechte Abdichtung, Festpreis. Fachbetrieb aus Achim. Jetzt anfragen.",
    subline: "Schwachhausen ist Altbau-Land. Genau hier zählt, dass Untergrund und Abdichtung stimmen – nicht nur die Optik.",
    context: "Schwachhausen gehört zu den begehrtesten Wohnlagen Bremens: Gründerzeit-Altbauten, Stadtvillen und gewachsene Straßenzüge rund um den Bürgerpark. Altbau-Sanierung verlangt Erfahrung – schiefe Wände, alte Untergründe, fehlende Abdichtung aus früheren Jahrzehnten. Wir gleichen aus, dichten normgerecht nach DIN 18534 ab und verlegen sauber, statt Probleme zu überfliesen.",
    proof: { text: "Wir haben in Schwachhausen bereits gearbeitet, unter anderem für die physioWERK-Praxis: „Top Arbeit – absolut empfehlenswert! Die Jungs waren pünktlich, freundlich und haben äußerst sauber gearbeitet.“", name: "physioWERK, Schwachhausen" },
    faq: [
      { q: "Sanieren Sie auch in Altbauten in Schwachhausen?", a: "Ja, regelmäßig. Wir prüfen vor Ort, in welchem Zustand Untergrund und Abdichtung sind, und sagen Ihnen ehrlich, was nötig ist." },
      { q: "Wie kommen Sie nach Schwachhausen?", a: "Von Achim aus liegt Schwachhausen in unserem Kerngebiet (Achim + 40–60 km)." },
    ],
    heroImg: "badsanierung-agosbao-32refwefd3.webp",
  },
  {
    slug: "fliesenleger-bremen-borgfeld",
    ort: "Bremen-Borgfeld",
    keyword: "Fliesenleger Bremen-Borgfeld",
    metaDesc: "Fliesenleger & Badsanierung in Bremen-Borgfeld: Einfamilienhäuser, Neubau und Sanierung. Festpreis, saubere Abdichtung. Fachbetrieb aus Achim. Jetzt anfragen.",
    subline: "Im grünen Nordosten Bremens, direkt an der Wümme – wir fliesen Bäder, Wohnräume und Außenbereiche im Einfamilienhaus.",
    context: "Borgfeld liegt im grünen Nordosten Bremens, geprägt von Einfamilienhäusern und ruhigen Wohnlagen nahe der Wümme. Hier geht es oft um das eigene Haus: ein neues Familienbad, größere Wohnräume mit durchgehendem Fliesenbild oder eine Terrasse für den Garten. Wir arbeiten sauber und planbar, damit das Zuhause schnell wieder bewohnbar ist.",
    faq: [
      { q: "Arbeiten Sie in Borgfeld auch im Einfamilienhaus?", a: "Ja, das ist hier der Regelfall – vom Familienbad bis zur durchgehenden Wohnraum-Verfliesung. Termine planen wir verlässlich." },
      { q: "Wie weit ist Borgfeld von Ihnen entfernt?", a: "Borgfeld liegt im Nordosten Bremens und damit in unserem Einzugsgebiet (Achim + 40–60 km)." },
    ],
    heroImg: "bad-modern-hero.webp",
  },
  {
    slug: "fliesenleger-bremen-horn-lehe",
    ort: "Bremen-Horn-Lehe",
    keyword: "Fliesenleger Bremen-Horn-Lehe",
    metaDesc: "Fliesenleger & Badsanierung in Bremen-Horn-Lehe: vom Reihenhaus bis zur Stadtvilla. Festpreis, normgerechte Abdichtung. Fachbetrieb aus Achim. Jetzt anfragen.",
    subline: "Vom Reihenhaus bis zur Stadtvilla im Bremer Osten: wir sanieren Bäder und verlegen Fliesen, sauber und zum Festpreis.",
    context: "Horn-Lehe ist ein vielfältiger Stadtteil im Bremer Osten – ruhige Wohnstraßen, gemischter Baubestand vom Reihenhaus bis zur großzügigen Villa, dazu die Nähe zur Universität. Diese Vielfalt kennen wir: Wir planen die Badsanierung passend zum Haus, ob kompaktes Familienbad oder gehobenes Designbad mit Großformat.",
    faq: [
      { q: "Sanieren Sie auch einzelne Bäder in Mehrfamilienhäusern?", a: "Ja. Wir arbeiten für Eigentümer, Hausverwaltungen und in Mehrparteienhäusern – einzeln oder als Gesamtprojekt." },
      { q: "Liegt Horn-Lehe in Ihrem Gebiet?", a: "Ja, Horn-Lehe im Bremer Osten gehört zu unserem Einzugsgebiet (Achim + 40–60 km)." },
    ],
    heroImg: "bad-walkin-dusche.webp",
  },
  {
    slug: "fliesenleger-bremen-lilienthal",
    ort: "Lilienthal",
    keyword: "Fliesenleger Lilienthal",
    metaDesc: "Fliesenleger & Badsanierung in Lilienthal bei Bremen: Einfamilienhäuser, Festpreis, saubere Abdichtung. Fachbetrieb aus Achim. Jetzt kostenloses Angebot anfragen.",
    subline: "Direkt nordöstlich von Bremen: wir sanieren Bäder und verlegen Fliesen im Haus, sauber und zum Festpreis.",
    context: "Lilienthal liegt im Landkreis Osterholz, direkt nordöstlich von Bremen und an Borgfeld angrenzend. Geprägt von Einfamilienhäusern und gewachsenen Wohngebieten geht es hier meist um das eigene Zuhause: ein neues Bad, eine bodengleiche Dusche für später oder ein durchgehendes Fliesenbild im Wohnbereich.",
    faq: [
      { q: "Kommen Sie nach Lilienthal?", a: "Ja. Lilienthal liegt nordöstlich von Bremen in unserem Einzugsgebiet (Achim + 40–60 km)." },
      { q: "Planen Sie ein altersgerechtes Bad mit?", a: "Gern. Bodengleiche Duschen und barrierefreie Bäder gehören zu unseren Leistungen – technisch korrekt und förderfähig gebaut." },
    ],
    heroImg: "bad-barrierefrei.webp",
  },
  {
    slug: "fliesenleger-achim",
    ort: "Achim",
    keyword: "Fliesenleger Achim",
    metaDesc: "Ihr Fliesenleger in Achim: AGOS BAU sitzt hier. Badsanierung, Fliesen und barrierefreie Bäder vom Betrieb vor Ort. Festpreis, persönlich. Jetzt anfragen.",
    subline: "AGOS BAU ist in Achim zu Hause. Kurze Wege, persönlicher Kontakt, Bäder und Fliesen vom Betrieb aus der Nachbarschaft.",
    context: "Achim ist unser Sitz, Auf den Mehren 45. Das heißt für Sie kurze Wege, schnelle Termine vor Ort und einen Ansprechpartner aus der Region, der bleibt. Wir kennen die Häuser hier – vom Reihenhaus bis zum freistehenden Eigenheim – und sanieren Bäder, die zu Achim passen.",
    faq: [
      { q: "Wo genau sitzen Sie in Achim?", a: "AGOS BAU, Auf den Mehren 45, 28832 Achim. Rufen Sie an oder schreiben Sie uns – wir kommen für ein Aufmaß vorbei." },
      { q: "Wie schnell bekomme ich in Achim einen Termin?", a: "Als Betrieb vor Ort sind wir schnell bei Ihnen. Den nächstmöglichen Termin nennen wir Ihnen ehrlich bei der Anfrage." },
    ],
    heroImg: "badsanierung-nacher-agos-bau-bremen-3ewf.webp",
  },
  {
    slug: "fliesenleger-oyten",
    ort: "Oyten",
    keyword: "Fliesenleger Oyten",
    metaDesc: "Fliesenleger & Badsanierung in Oyten: Nachbargemeinde von Achim, kurze Wege, Festpreis, saubere Abdichtung. Fachbetrieb AGOS BAU. Jetzt Angebot anfragen.",
    subline: "Oyten liegt direkt neben Achim – kürzer können die Wege kaum sein. Ihr Bad, sauber saniert und zum Festpreis.",
    context: "Oyten grenzt direkt an Achim und liegt zwischen unserem Sitz und Bremen. Für Sie heißt das: sehr kurze Anfahrt, schnelle Besichtigung und ein Betrieb, der praktisch um die Ecke sitzt. In den vielen Einfamilienhäusern Oytens geht es meist um das eigene Bad – komplett saniert oder neu gefliest.",
    faq: [
      { q: "Wie schnell sind Sie in Oyten?", a: "Sehr schnell – Oyten ist unsere Nachbargemeinde. Für ein Aufmaß sind wir kurzfristig vor Ort." },
      { q: "Machen Sie auch kleinere Fliesenarbeiten in Oyten?", a: "Ja, vom Einzelaustausch bis zur Komplettsanierung." },
    ],
    heroImg: "fliesenverlegen-bremen-agos-bau.webp",
  },
  {
    slug: "fliesenleger-stuhr",
    ort: "Stuhr",
    keyword: "Fliesenleger Stuhr",
    metaDesc: "Fliesenleger & Badsanierung in Stuhr bei Bremen: Brinkum, Moordeich & Umgebung. Festpreis, normgerechte Abdichtung. Fachbetrieb AGOS BAU. Jetzt anfragen.",
    subline: "Im Südwesten Bremens – von Brinkum bis Moordeich sanieren wir Bäder und verlegen Fliesen, sauber und zum Festpreis.",
    context: "Stuhr liegt im Südwesten direkt an Bremen, mit Ortsteilen wie Brinkum und Moordeich und vielen Einfamilienhäusern. Ob neues Familienbad, barrierefreie Dusche oder durchgehendes Fliesenbild – wir planen passend zum Haus und führen sauber aus, damit das Zuhause schnell wieder nutzbar ist.",
    faq: [
      { q: "Kommen Sie bis nach Stuhr?", a: "Ja. Stuhr im Südwesten Bremens liegt in unserem Einzugsgebiet (Achim + 40–60 km)." },
      { q: "Bekomme ich vorab einen festen Preis?", a: "Ja. Nach dem Aufmaß erhalten Sie einen Festpreis, ohne versteckte Kosten." },
    ],
    heroImg: "grossformat-fliesen-bremen.webp",
  },
  {
    slug: "fliesenleger-verden",
    ort: "Verden",
    keyword: "Fliesenleger Verden",
    metaDesc: "Fliesenleger & Badsanierung in Verden (Aller): selber Landkreis wie unser Sitz Achim, kurze Wege, Festpreis. Fachbetrieb AGOS BAU. Jetzt Angebot anfragen.",
    subline: "Verden und Achim liegen im selben Landkreis – kurze Wege, persönlicher Kontakt. Ihr Bad, sauber saniert und zum Festpreis.",
    context: "Verden an der Aller gehört zum selben Landkreis wie unser Sitz in Achim. Das bedeutet kurze Anfahrtswege und einen Betrieb aus der direkten Region. In der historischen Reiterstadt mit ihrem gemischten Baubestand sanieren wir Bäder vom Altbau bis zum modernen Eigenheim – mit normgerechter Abdichtung und sauberer Ausführung.",
    faq: [
      { q: "Sind Sie auch in Verden tätig?", a: "Ja. Verden liegt im selben Landkreis wie unser Sitz Achim – wir sind schnell vor Ort." },
      { q: "Sanieren Sie auch ältere Häuser in Verden?", a: "Ja. Gerade in Altbauten prüfen wir Untergrund und Abdichtung genau und sagen Ihnen ehrlich, was nötig ist." },
    ],
    heroImg: "bad-waschtisch-detail.webp",
  },
];
