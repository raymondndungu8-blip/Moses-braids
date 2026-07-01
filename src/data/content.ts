import { PortfolioItem, ServiceItem, Testimonial } from '../types';

// Real Moses Braids salon photos served from Google Drive
const GD = (id: string) => `https://lh3.googleusercontent.com/d/${id}`;

export const IMAGES = {
  heroPortrait:      GD('1C4EBkij6GCiIse6rIGzp7q1SoYQhY4V1'), // WA0054 – 440KB
  heroCornrows:      GD('1cFfvUbCILHVjPIoqDYF7iF9aYPvjMYLM'), // WA0052 – 412KB
  knotlessSpec:      GD('1lMmZHXCYkMhgKiR2bN60Cciq53fB3iPI'), // WA0014 – 384KB
  cornrowsSpec:      GD('1MYnK4yziofgBs0LEaHrvbbT435OoVa8W'), // WA0037 – 366KB
  passionTwistsSpec: GD('1s7nkSeOXoZSgejjLBAxST4W9v_M_IkuU'), // WA0013 – 340KB
  studioInterior:    GD('1AyuWRWEnetcwR2ht5cEnYnml_QzBHTTn'), // WA0021 – 322KB
  gildedKnotless:    GD('1wviEHB8sz6OzeSdGWQjLZcm2NE88EUFw'), // WA0016 – 316KB
  linearGeometry:    GD('1sNmBAQDk2Fz0zUbQbVnLBVSDDtcpYt7u'), // WA0022 – 311KB
  honeyBoxBraids:    GD('1mh6WZY1jOfuAYQUpWibsw3kxb8hbbPQ2'), // WA0027 – 307KB
  artisanDetails:    GD('1n60qgTWjrJ41s8c6HDP0aNMwADSn7AA6'), // WA0057 – 295KB
  architecturalUpdo: GD('1Af89KLoNh4nlQkhz7M9TKrLIrc0CiR6w'), // WA0055 – 292KB
  contactAtmosphere: GD('1Lx40STC3Sd9xUeoXWNd1tKqptmFa-bKK'), // WA0043 – 283KB
  mapGraphic:        GD('1aW3Ygc7EbUthZIL148kj7EBfcx3EYby4'), // WA0048 – 278KB
  serviceBoxBraids:  GD('1Omv5rU_Usc5Y4030H8c1OQJ2KAg6V6Nd'), // WA0030 – 273KB
  serviceKnotless:   GD('1wUi2GfvgPT3e7SpWPC6JXSI-W5wkHoLX'), // WA0058 – 320KB
  serviceCornrows:   GD('14AJRD1t2MywmoBvOPTKobhPUBInp0EVU'), // WA0036 – 391KB
};

export const DICTIONARY = {
  de: {
    nav: {
      home: 'Startseite',
      portfolio: 'Portfolio',
      services: 'Preise & Termine',
      contact: 'Kontakt',
      bookNow: 'Termin buchen'
    },
    hero: {
      tagline: 'Authentische Flechtkunst in Steyr',
      title1: 'Die Kunst',
      title2: 'der Textur',
      desc: 'Maßgeschneiderte Schutzfrisuren mit höchstem handwerklichem Anspruch. Wir vereinen traditionelle afrikanische Flechttechniken mit moderner Ästhetik in Steyr.',
      ctaBook: 'Termin buchen',
      ctaPortfolio: 'Portfolio ansehen',
      addressBadge: 'Haratzmüllerstr. 19, 4400 Steyr'
    },
    marquee: ['BOX BRAIDS', '✷', 'CORNROWS', '✷', 'KNOTLESS BRAIDS', '✷', 'PASSION TWISTS', '✷', 'FULANI BRAIDS', '✷', '4400 STEYR', '✷'],
    specialties: {
      heading: 'Unsere Spezialitäten',
      subheading: 'Jeder Stil wird präzise auf Ihre Haarstruktur, Kopfform und persönlichen Wünsche abgestimmt. Haarschonend & langlebig.',
      knotlessTitle: 'Knotless Braids',
      knotlessDesc: 'Besonders schonend für die Kopfhaut durch die knotenfreie Ansatztechnik. Natürlicher Fall ab dem ersten Tag ohne Spannungsgefühl.',
      cornrowsTitle: 'Design Cornrows',
      cornrowsDesc: 'Präzise geometrische Linien und individuelle Muster. Perfekt als ausdrucksstarker Look oder als langlebige Schutzfrisur.',
      passionTitle: 'Passion Twists',
      passionDesc: 'Leichte, gewellte Twists für einen lässigen, boho-inspirierten Look mit seidigem Glanz und maximalem Tragekomfort.',
      exploreAll: 'Alle Behandlungen entdecken'
    },
    studio: {
      tag: 'Das MOSES Erlebnis',
      title: 'Ein Rückzugsort für Pflege & Stil',
      desc1: 'In unserem lichtdurchfluteten Studio in der Haratzmüllerstr. 19 schaffen wir eine ruhige, einladende Atmosphäre. Das Flechten von Haaren ist bei uns kein reiner Service, sondern ein traditionelles Ritual der Verbundenheit und Achtsamkeit.',
      desc2: 'Wir verwenden ausschließlich biologische Öle und feuchtigkeitsspendende Leave-In Pflege, um Ihr Eigenhaar während der gesamten Tragezeit optimal zu nähren.',
      features: [
        'Haarschonende Spannung & Schutz der Kanten',
        'Inklusive Premium Kanekalon Haar in allen Farben',
        'Kaffee, marokkanischer Minztee & High-Speed WLAN'
      ]
    },
    testimonials: {
      heading: 'Stimmen aus der Community',
      subheading: 'Vertraut von Kundinnen und Kunden aus Steyr und Umgebung.'
    },
    portfolio: {
      title: 'Die Kunst der Textur',
      subtitle: 'Ein Einblick in unsere aktuellen Arbeiten. Jede Zopf-Kreation ist ein Unikat aus Präzision, Geduld und Leidenschaft.',
      filterAll: 'Alle Arbeiten',
      filterKnotless: 'Knotless',
      filterCornrows: 'Cornrows',
      filterBox: 'Box Braids',
      filterArtistic: 'Artistic Styles',
      zoomPrompt: 'Klicken zum Vergrößern'
    },
    servicesPage: {
      title: 'Kuratierte Handwerkskunst',
      subtitle: 'Transparente Preise inkl. Beratung, Waschen, Föhnen und hochwertigem Flechthaar.',
      startingAt: 'ab €',
      durationPrefix: 'Dauer ca. ',
      bookBtn: 'Diesen Stil buchen',
      philosophyTitle: 'Unsere Philosophie',
      philosophyText: 'Wir legen größten Wert auf die Gesundheit Ihrer Haarwurzeln. Niemals zu eng geflochten, immer individuell beraten.',
      widgetHeading: 'Termin konfigurieren',
      selectServicePrompt: 'Wählen Sie zuerst einen Stil',
      dateLabel: 'Wunschdatum',
      timeLabel: 'Uhrzeit',
      lengthLabel: 'Haarlänge / Finish Add-on',
      lengthOptions: {
        shoulder: 'Schulterlang (Standard)',
        midBack: 'Rückenmitte (+€30, ca. +45 Min)',
        waist: 'Taillenlänge (+€50, ca. +60 Min)',
        buttocks: 'Hüftlänge (+€80, ca. +90 Min)'
      },
      summaryTitle: 'Buchungsübersicht',
      basePrice: 'Basispreis',
      addonPrice: 'Längenaufschlag',
      totalEstimated: 'Geschätzter Gesamtpreis',
      continueBooking: 'Weiter zur Kontaktdaten-Eingabe'
    },
    contactPage: {
      title: 'Starten Sie Ihre Haar-Reise',
      subtitle: 'Haben Sie Fragen zu Ihrer Haarlänge oder einer speziellen Technik? Wir beraten Sie gerne persönlich.',
      studioHeader: 'Unser Studio',
      address: 'Haratzmüllerstr. 19\n4400 Steyr',
      hoursHeader: 'Öffnungszeiten',
      hoursText: 'Dienstag – Samstag: 10:00 – 19:00\nMontag & Sonntag: Geschlossen (VIP-Termine auf Anfrage)',
      contactInfoHeader: 'Direkter Kontakt',
      phone: 'Tel. 67799015819',
      email: '',
      formHeader: 'Schreiben Sie uns',
      formName: 'Ihr Name',
      formEmail: 'E-Mail-Adresse',
      formPhone: 'Telefonnummer (Optional)',
      formSubject: 'Betreff',
      formMessage: 'Ihre Nachricht oder spezielle Wünsche...',
      sendBtn: 'Nachricht senden',
      sentSuccess: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übertragen. Wir melden uns innerhalb von 24 Stunden.'
    },
    footer: {
      tagline: 'Authentische Flechtkunst in Steyr.',
      rights: '© 2026 MOSES. Alle Rechte vorbehalten.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      terms: 'AGB',
      igText: ''
    },
    modal: {
      title: 'Terminanfrage bestätigen',
      subtitle: 'Bitte füllen Sie Ihre Kontaktdaten aus, um den Termin verbindlich anzufragen.',
      name: 'Vollständiger Name',
      email: 'E-Mail',
      phone: 'Telefon für Rückfragen',
      notes: 'Besondere Wünsche oder Haarfarbe (z.B. #1B, #4, #27...)',
      confirmBtn: 'Termin verbindlich anfragen',
      cancelBtn: 'Abbrechen',
      successTitle: 'Anfrage eingegangen!',
      successMsg: 'Wir haben Ihre Buchungsanfrage für den {date} um {time} Uhr erhalten. Sie erhalten in Kürze eine Bestätigung per E-Mail.'
    }
  },
  en: {
    nav: {
      home: 'Home',
      portfolio: 'Portfolio',
      services: 'Services & Booking',
      contact: 'Contact',
      bookNow: 'Book Session'
    },
    hero: {
      tagline: 'Authentic Braiding Artistry in Steyr',
      title1: 'The Art',
      title2: 'of Texture',
      desc: 'Bespoke protective hairstyles crafted with uncompromising artisan precision. Merging traditional African braiding heritage with contemporary aesthetics in Steyr.',
      ctaBook: 'Schedule Session',
      ctaPortfolio: 'View Portfolio',
      addressBadge: 'Haratzmüllerstr. 19, 4400 Steyr'
    },
    marquee: ['BOX BRAIDS', '✷', 'CORNROWS', '✷', 'KNOTLESS BRAIDS', '✷', 'PASSION TWISTS', '✷', 'FULANI BRAIDS', '✷', '4400 STEYR', '✷'],
    specialties: {
      heading: 'Our Specialties',
      subheading: 'Every style is meticulously tailored to your hair texture, scalp contour, and lifestyle. Gentle on edges & lasting beauty.',
      knotlessTitle: 'Knotless Braids',
      knotlessDesc: 'Ultra-gentle on the scalp through our seamless feed-in technique. Natural drape and zero tension from day one.',
      cornrowsTitle: 'Design Cornrows',
      cornrowsDesc: 'Crisp geometric symmetry and bespoke parting artwork. Perfect as a striking standalone statement or lasting protective style.',
      passionTitle: 'Passion Twists',
      passionDesc: 'Lightweight, bohemian-textured twists offering effortless movement, radiant luster, and supreme everyday comfort.',
      exploreAll: 'Discover All Services'
    },
    studio: {
      tag: 'The MOSES Experience',
      title: 'A Sanctuary of Hair & Soul',
      desc1: 'Set within our welcoming studio on Haratzmüllerstr. 19, we foster a calm sanctuary. Here, hair braiding transcends routine grooming to become a time-honored ritual of connection and restoration.',
      desc2: 'We exclusively apply organic botanical oils and deep moisture leave-in mists to ensure your natural hair flourishes throughout the entire wear cycle.',
      features: [
        'Tension-conscious styling & hairline protection',
        'Premium Kanekalon extension hair included in all shades',
        'Artisan coffee, Moroccan mint tea & high-speed Wi-Fi'
      ]
    },
    testimonials: {
      heading: 'Community Voices',
      subheading: 'Trusted by discerning clients across Steyr and beyond.'
    },
    portfolio: {
      title: 'The Art of Texture',
      subtitle: 'A visual archive of recent salon sessions. Each style represents an individual study in symmetry, patience, and texture.',
      filterAll: 'All Works',
      filterKnotless: 'Knotless',
      filterCornrows: 'Cornrows',
      filterBox: 'Box Braids',
      filterArtistic: 'Artistic Styles',
      zoomPrompt: 'Click to inspect'
    },
    servicesPage: {
      title: 'Curated Artistry',
      subtitle: 'Transparent investment including consultation, cleansing, blow-out, and premium braiding extensions.',
      startingAt: 'from €',
      durationPrefix: 'Approx. ',
      bookBtn: 'Select This Style',
      philosophyTitle: 'Our Philosophy',
      philosophyText: 'We prioritize the long-term vitality of your follicles. Never braided too tight, always customized to your density.',
      widgetHeading: 'Session Configurator',
      selectServicePrompt: 'Please select a service above',
      dateLabel: 'Preferred Date',
      timeLabel: 'Time Slot',
      lengthLabel: 'Length & Density Add-on',
      lengthOptions: {
        shoulder: 'Shoulder Length (Standard)',
        midBack: 'Mid-Back (+€30, ~+45 mins)',
        waist: 'Waist Length (+€50, ~+60 mins)',
        buttocks: 'Hip Length (+€80, ~+90 mins)'
      },
      summaryTitle: 'Investment Summary',
      basePrice: 'Base Service',
      addonPrice: 'Length Add-on',
      totalEstimated: 'Estimated Total',
      continueBooking: 'Proceed to Client Details'
    },
    contactPage: {
      title: 'Begin Your Braiding Journey',
      subtitle: 'Have questions regarding your current hair length or custom color blends? We welcome your consultation.',
      studioHeader: 'Our Sanctuary',
      address: 'Haratzmüllerstr. 19\n4400 Steyr',
      hoursHeader: 'Opening Hours',
      hoursText: 'Tuesday – Saturday: 10:00 – 19:00\nMonday & Sunday: Closed (Private VIP sessions upon request)',
      contactInfoHeader: 'Direct Inquiries',
      phone: 'Tel. 67799015819',
      email: '',
      formHeader: 'Send a Message',
      formName: 'Full Name',
      formEmail: 'Email Address',
      formPhone: 'Phone Number (Optional)',
      formSubject: 'Subject',
      formMessage: 'Your inquiry or styling notes...',
      sendBtn: 'Dispatch Message',
      sentSuccess: 'Thank you! Your message has been received. Our concierge will reply within 24 hours.'
    },
    footer: {
      tagline: 'Authentic braiding artistry in Steyr.',
      rights: '© 2026 MOSES. All rights reserved.',
      imprint: 'Legal Notice',
      privacy: 'Privacy Policy',
      terms: 'Terms of Service',
      igText: ''
    },
    modal: {
      title: 'Confirm Appointment Request',
      subtitle: 'Provide your contact details below to secure your dedicated braiding slot.',
      name: 'Full Name',
      email: 'Email Address',
      phone: 'Mobile Phone',
      notes: 'Custom color requests (e.g., #1B, #4, #27 mixed...) or hair notes',
      confirmBtn: 'Submit Appointment Request',
      cancelBtn: 'Cancel',
      successTitle: 'Request Received!',
      successMsg: 'We have registered your session request for {date} at {time}. You will receive a formal confirmation email shortly.'
    }
  }
};

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    id: 'p1',
    titleDe: 'Gilded Knotless Braids',
    titleEn: 'Gilded Knotless Braids',
    category: 'knotless',
    categoryLabelDe: 'Knotless Braids',
    categoryLabelEn: 'Knotless Braids',
    image: IMAGES.gildedKnotless,
    descriptionDe: 'Taillenlange S/M Knotless Braids veredelt mit Goldfäden und feinen Manschetten.',
    descriptionEn: 'Waist-length S/M knotless braids accented with fine metallic gold thread and cuffs.',
    duration: '5.5 Std'
  },
  {
    id: 'p2',
    titleDe: 'Lineare Geometrie Cornrows',
    titleEn: 'Linear Geometry Cornrows',
    category: 'cornrows',
    categoryLabelDe: 'Design Cornrows',
    categoryLabelEn: 'Design Cornrows',
    image: IMAGES.linearGeometry,
    descriptionDe: 'Präzise geflochtene Stitch-Cornrows mit symmetrischen Seitenschneisen.',
    descriptionEn: 'Crisp stitch cornrows featuring razor-sharp geometric parting symmetry.',
    duration: '2.5 Std'
  },
  {
    id: 'p3',
    titleDe: 'Honigblond Box Braids',
    titleEn: 'Honey Box Braids',
    category: 'boxbraids',
    categoryLabelDe: 'Box Braids',
    categoryLabelEn: 'Box Braids',
    image: IMAGES.honeyBoxBraids,
    descriptionDe: 'Klassische Box Braids in Farbton #27/#30 Honigblond Mischung, sanft eingedreht.',
    descriptionEn: 'Classic box braids in warm custom honey blonde #27/#30 blend with curled tips.',
    duration: '6 Std'
  },
  {
    id: 'p4',
    titleDe: 'Fulani Artisan Details',
    titleEn: 'Fulani Artisan Details',
    category: 'artistic',
    categoryLabelDe: 'Artistic Styles',
    categoryLabelEn: 'Artistic Styles',
    image: IMAGES.artisanDetails,
    descriptionDe: 'Traditionell inspirierte Fulani Zöpfe mit Holzperlen und Mittelscheitel-Cornrow.',
    descriptionEn: 'Heritage-inspired Fulani braids adorned with organic wooden beads and center braid.',
    duration: '4.5 Std'
  },
  {
    id: 'p5',
    titleDe: 'Architektonischer Braided Updo',
    titleEn: 'Architectural Braided Updo',
    category: 'artistic',
    categoryLabelDe: 'Artistic Styles',
    categoryLabelEn: 'Artistic Styles',
    image: IMAGES.architecturalUpdo,
    descriptionDe: 'Hochgesteckte Skulptur aus feinen Cornrows und gedrehtem Zopf-Dutt für besondere Anlässe.',
    descriptionEn: 'Sculptural high bun constructed from fine feed-in cornrows for gala events.',
    duration: '3 Std'
  },
  {
    id: 'p6',
    titleDe: 'Boho Passion Twists',
    titleEn: 'Boho Passion Twists',
    category: 'knotless',
    categoryLabelDe: 'Passion Twists',
    categoryLabelEn: 'Passion Twists',
    image: IMAGES.passionTwistsSpec,
    descriptionDe: 'Seidige Bohemian Twists mit lockeren Wellen im unteren Drittel.',
    descriptionEn: 'Silky bohemian twists offering airy movement and natural undone ends.',
    duration: '4 Std'
  }
];

export const SERVICE_ITEMS: ServiceItem[] = [
  {
    id: 's1',
    titleDe: 'Klassische Box Braids',
    titleEn: 'Classic Box Braids',
    priceStart: 120,
    priceLabelDe: 'ab €120',
    priceLabelEn: 'from €120',
    durationDe: 'ca. 5 - 6 Std',
    durationEn: 'approx. 5 - 6 hrs',
    descriptionDe: 'Traditionelle Zöpfe mit klaren, quadratischen oder dreieckigen Abteilungen. Der zeitlose Klassiker für maximalen Schutz und Styling-Vielfalt.',
    descriptionEn: 'Traditional braids defined by clean square or triangle partings. Timeless durability offering versatile updos and lasting everyday elegance.',
    image: IMAGES.serviceBoxBraids,
    featuresDe: [
      'Auswahl aus über 40 Haarfarben',
      'Versiegelte oder gewellte Spitzen nach Wunsch',
      'Inklusive Kopfhaut-Peeling & Pflegeöl vor dem Start'
    ],
    featuresEn: [
      'Choice of over 40 Kanekalon hair shades',
      'Sealed blunt ends or bohemian curled tips',
      'Includes soothing scalp prep & organic oil treatment'
    ],
    popular: true
  },
  {
    id: 's2',
    titleDe: 'Knotless Braids',
    titleEn: 'Knotless Braids',
    priceStart: 150,
    priceLabelDe: 'ab €150',
    priceLabelEn: 'from €150',
    durationDe: 'ca. 5.5 - 7 Std',
    durationEn: 'approx. 5.5 - 7 hrs',
    descriptionDe: 'Das Eigenhaar wird nahtlos am Ansatz eingeflochten. Keinerlei Spannungsknoten am Haaransatz, extrem leichtes Tragegefühl und natürliche Beweglichkeit.',
    descriptionEn: 'Natural hair is fed seamlessly into the braid from the root. Zero root tension knots, feather-light weight, and immediate painless styling.',
    image: IMAGES.serviceKnotless,
    featuresDe: [
      'Größen: Small, S/M, Medium oder Large',
      'Höchster Schutz für empfindliche Babyhaare',
      'Perfekt für sportlich Aktive & sanften Schlaf'
    ],
    featuresEn: [
      'Available sizing: Small, S/M, Medium, or Large',
      'Maximum edge protection for delicate hairlines',
      'Ideal for active lifestyles & immediate painless sleep'
    ],
    popular: false
  },
  {
    id: 's3',
    titleDe: 'Design & Stitch Cornrows',
    titleEn: 'Design & Stitch Cornrows',
    priceStart: 60,
    priceLabelDe: 'ab €60',
    priceLabelEn: 'from €60',
    durationDe: 'ca. 1.5 - 3 Std',
    durationEn: 'approx. 1.5 - 3 hrs',
    descriptionDe: 'Flach an die Kopfhaut geflochtene Zöpfe mit kunstvollen Mustern, geometrischen Abteilungen oder präziser Stitch-Technik.',
    descriptionEn: 'Scalp-hugging braids crafted with intricate patterns, architectural geometry, or ultra-defined stitch feed-in lines.',
    image: IMAGES.serviceCornrows,
    featuresDe: [
      'Als geradliniger Allback, Freestyle oder Halo-Braid',
      'Mit oder ohne Kunsthaar-Verlängerung buchbar',
      'Ideal auch für Herren oder kurze Haarlängen ab 8 cm'
    ],
    featuresEn: [
      'Straight-back, bespoke freestyle, or crown halo layouts',
      'Available with or without extension feed-ins',
      'Suitable for all genders and hair lengths from 8cm'
    ],
    popular: false
  },
  {
    id: 's4',
    titleDe: 'Passion Twists & Goddess Braids',
    titleEn: 'Passion Twists & Goddess Braids',
    priceStart: 140,
    priceLabelDe: 'ab €140',
    priceLabelEn: 'from €140',
    durationDe: 'ca. 4 - 5 Std',
    durationEn: 'approx. 4 - 5 hrs',
    descriptionDe: 'Zweisträngige Twists mit gewelltem Water-Wave Haar oder Braids mit herausstehenden Lockensträhnen für den romantischen Boho-Chic.',
    descriptionEn: 'Two-strand twists using silky water-wave texture or knotless braids interspersed with free-flowing human hair curls for effortless romantic vibes.',
    image: IMAGES.passionTwistsSpec,
    featuresDe: [
      'Sehr leichtgewichtig & schnell trocknend',
      'Besonders weiche Textur',
      'Langlebigkeit ca. 6 - 8 Wochen bei guter Pflege'
    ],
    featuresEn: [
      'Feather-light weight & quick air-drying properties',
      'Touchably soft botanical luster',
      'Retains beauty for 6 - 8 weeks with night bonnet'
    ],
    popular: false
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Aminata S.',
    roleDe: 'Knotless Braids Kundin',
    roleEn: 'Knotless Braids Client',
    quoteDe: 'Ich hatte noch nie so schmerzfreie Braids direkt am ersten Tag! Das Studio in der Haratzmüllerstr. 19 ist wunderschön eingerichtet und man wird mit Minztee verwöhnt. Absolutes Steyr-Highlight.',
    quoteEn: 'I have never experienced such painless braids on day one! The Haratzmüllerstr. 19 studio is breathtakingly calm and the Moroccan mint tea was a dream. Best salon in Steyr.',
    rating: 5,
    date: 'Juni 2026'
  },
  {
    id: 't2',
    name: 'Elena W.',
    roleDe: 'Design Cornrows Kundin',
    roleEn: 'Design Cornrows Client',
    quoteDe: 'Die Präzision der Scheitel ist unfassbar. Aida hat genau verstanden, welche Kopfform ich habe und das Muster perfekt angepasst. Hielt locker 4 Wochen makellos!',
    quoteEn: 'The parting precision is unreal. The team understood my exact scalp contour and tailored the geometry flawlessly. Looked immaculate for 4 straight weeks!',
    rating: 5,
    date: 'Mai 2026'
  },
  {
    id: 't3',
    name: 'David K.',
    roleDe: 'Stitch Braids Kunde',
    roleEn: 'Stitch Braids Client',
    quoteDe: 'Einfach entspannteste Atmosphäre. Kein lauter Trubel, super schonend geflochten. Komme jetzt alle 6 Wochen hierher.',
    quoteEn: 'Such a peaceful sanctuary. No chaotic noise, extremely gentle braiding tension. This is now my permanent bi-monthly ritual.',
    rating: 5,
    date: 'April 2026'
  }
];
