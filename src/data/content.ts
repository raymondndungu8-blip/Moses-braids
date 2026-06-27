import { PortfolioItem, ServiceItem, Testimonial } from '../types';

export const IMAGES = {
  heroPortrait: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyYrJ06cioFo64lbN0Bk2H1-keDV_Wso6eQAl5HiPKYJiUVzKeo6Rf7pbYDEHEYC4_6hIE10sxcq9eDeV4QzxgKlNtEPd_070IVTpi_SsCsjdcJ56jkCig58adp2vOzU_qBAlW1K6R07eQ1RDa_QlF51EHBqXiZZmtoeZUCFtZ6kPXcE5gUmT2Q4wqTAhivdRbUtnCcsSaa7W6CLEx-1ICFLmiIUcfaQUs5O9LTDTVjdpkMgMWwuApLwluFPVr7YvNehmTeTocY5Q',
  heroCornrows: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCm9W9cttdeA8_-40rgv56xjghXEtQI5xGOi3RTj2oXhV49oHI-MWSHd0MTVXoztB151eZvfeslX4hxFkVQg33BVEYlH5IBf0coNHl-HngKCPqrr5GfkaJRNK7iaHh8HQI2Ihy8YjI1FQLX9jvqmk0HUGHLtvmzrfXqOrb8feCyYk2BD5ncuOlOXFWYxPz5wDB2WeFW4olZ5YYTZB0nOYuFp5lf-IDvNn0vIj4Fyy0Osv2LTj4WSXpAZCaqn5qrlZ6ZDXGrr5x-iY',
  knotlessSpec: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCBRdfeQIJ3ZQwFzv3P9XK8CAoiaOKdS8KLWx34_b_tcsIVZQ7TpsCpT-iSaL7gqe_9hd_JxKL3xL0fC3q8GkTjpwM5qGwM_wibz1AYDNtmUoDgWEVO8d0TRP6F4D0xjYjeDht7EARotlLnMeKEKNhG9UTfLpWTjcwe1sDWCg6dJxdsrLlvmTXwY-YRHbc6GnPk-jY2FzFBP6ZLlTHQpjuM0tz9sIWoLn13oGtBAfaPh_OYssiMMFk49cxNrYNTLRzmOHoy5HN3zbI',
  cornrowsSpec: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmmvGSQqAP2Etrfda0htQLog3-IzbUC3e9gHJ3vTLWFO7Mq1nVzSNMhatjk2B-y3XSb-5yZZpTtV_w0Ad9xvH7TRKLwv0LTbk8agsNYJTdVqQ6BVmByAvqpijvfnq1ZW7fgRxVPh4VnNkFc9gJTInVYwzcicJ3xELKaA-8U19Gr5zzMmbLzAwtly4KHT2S7HK1-jvZN3AYjYEEdsMJJhrzyLob9amGK2Jsv20rP1JMjqbewYSDRMn5p8qdiHrHKC6WCG8oqQwOnmo',
  passionTwistsSpec: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDz8XSDwUAck7Hin5Ujhi8TfyeKVzlaD7toZJMBcLxHjrGnKSoPDV_GWaAiNmlMRuZBJZB2XH1Jz1lmCAvvVS8Be1BjCIDempUxDN-YeMwR97FvOF7_T2gBMZJ_ZEa69KIfiQw_VpXv_MjkQymXOEzOxnK7kw49xvCRZ_JvC8X_CqGQmszC5mw7OnpZvbZVuL4x9DVg8fxpaekOZX7wFYk7zmWTggNOAhNRHyxz2TUAFnDuSHX0NJvcg55TWkAMz6lXZhTcNYnhO58',
  studioInterior: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0eW9AdH8nRTfJQ-Ep3lbvmvLYj_yWUSHAeItPTeWfAiwyGwASpaFFY3tLF5Ar1GnywFAFtzci73TqT4-ggMamPtEfOHKIa5p4n7eCTqPEzZPlqiu7VGfrwpQ2k5EIKGRXDu4AaKHKZMO9rjSNHPiPfXMA_mkoUOGkPHev6Zv4-NBKZqwE6B1zzCu5LgLLe2K2bEKY0-D05eFElsl6duxZ4WA3GKzTOSBrKZALQH7S4iiFsGPBrtGPeN8G2yVQpfxCKrotxNaKUN0',
  gildedKnotless: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAeb8Q8sNB1WW1saST5F2V9j4ElIc_QKCGAcfEQyBaMxZdDy2L56wy2k4kUEsxNfhyaOjYPNkEgChgwEh2gCcs7z380EVgxrijxh3_tqXKH0sTaFVYwkdUa-hyZnl_PjwqFSWrA459HX5ldLPu3SeyRd5WobVYltqV6syt-X-l9F1HP5N67_iDPUBChFnM1cMh9szWuTbEp2vXyh_6kBIhkECQ13ylKIrwPKPdJ7OHp2UEb_TWr9ZCdtunlUrhhGjdf7QGSe7RgNj0',
  linearGeometry: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXLsuC5W6J1VXUToQ29dTkVKJHA5e-8nrocCjGKIIGbOzkEFFvNpbtXNrdC9fNfuqWGRKNWBW0eMDqODpIDvGmWjFuikXkbK3Pi_xRPc7HVikDw5z4Ra5-FCh6x_DRef2rgz-2r2qOa2swdaYU2Oac0e_SSsApOzeLW0zOjqwaYLsGL38MNQ2fb2ym37CtXwmTNJGAQgWPJQzmgEUda7QxdaKthfrvzg4pQE2hdzL_yW3M0jAUTvgRQIE2vi6UxOVtCyO22g6dZJQ',
  honeyBoxBraids: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDAFacDPw6ZflFsMgW-kjZy8l-m2Oenq3U7CY_P71ScoS72rDKf3_DnjgTre0xnwTFSx2rHYqvL4qtcbEhFGwtTTVkhYdWUs54psi0feBlE3-YK20R5whpTwOYvmPjFba-WN8_7PErkM8t-QJXZn5n58DwewgckRO8qmvsfFg7PCI2rKpKKuHhZ39BkihTgK790PQKhDbC2MxVk1JuzulQTMP0MJsORjXGterOWNmYBkF5oT21kiqOYzMzRUpm2QbG396KjvfZfqhw',
  artisanDetails: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDsEfW0mG7zPQ-ZygYjpwbMC66NHoB7dM4XAc6xsIg_F9d-4hxI-vEg1S3w1M1oS5qJsigHH9vNHKuCqfEa6E-PIx3t7EEzEuMFs9AnlZZ6f_ixClblyYFXeY-jxUOyNiaxfqmsSafd7RowdekFE6r_z6CCIXCi3XNVoqkriHkkrovHTruCliXa1g94bx0G__pjzen9sC6Hg2WOOAqaQ0BZ6puNOkKALFhhJYR5oELBTaSaoXbKSw_NSvbVd4i734OiuYP2d2mYidk',
  architecturalUpdo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD88-pDid-CLpmGUKydNkylhG-6vAKnwsJZwO8IQ1nfSarCwZiUvv0BDBB1LLHiIJflW39XtpPSbxb3XgTXTuQtdMDHiHRPlTlpqfjU85CKHXUT4dJ2sgMWr3Ozmh22pZ2ZszxOJjHRtx00tvfn24-VIAHHSd9xcDVoj4ibWBE4e6VCmuhmDHa6rKV12fyEoeBqTC2I_-lFJh06isIraSUJByXuUjfh5TwU-6QRoWkqVS5NdrjgpAz_EeBuHjn5wWFa-ycG5szaNyo',
  contactAtmosphere: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD7bdy9ckb8ZSPVqwG3AfJ2bBSXyYX_Clj-Q-vbipvWeIDtr6PoSfSpyLbk1Xv5JBBWpft351x56Y5L5A2hsZDhJnHOLybyO4XRNBEsLxFIf6mpELJBUlMqpsNJv3DJQGaofysqWr4dWt7-E2RsKIUkFCcyLvCdiO8M94rX-DWtIkF6F3I-ZtXnT0AJtf6vGSXS2OmzYXPlUAellfJtrKmktfpnMWUhFaIX7Vfo2VMQKDA2J09wl_plT1jZHmzEAkcMuG9KgiolS9g',
  mapGraphic: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDufbaYV8AQ9TFhffjfQeSTL7I62vqRt6A7tY4ReQRlqCkf7dq8Rnsc89VvpUqDYbkqlzrX441Gy72ZPc5hO_wmxmcddgwK3P0J_l-FYXJhjAdh6n9leKNnRgBGOxFA3Eeo9Kp0djmVlmZ94OKCtzmjmcFmGEk1BauJYurWQaYkQG0XDf-QHgoJofG0gEQ1u7UvrtC-OH5PFI-BIBqD25P5zcghnzRV4557f9tXtQBu-myUh_A8lYav_PlhTy5rHCHMR58e_Kmmfj0',
  serviceBoxBraids: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBRaSiGyW61VMJ69uFi85oOffBEIbP2FUh25D0ojcEkrs3PhkeghFdKwmj0B7qs91eDXoqdAOX-wQ8Dgm6p5D9Kej04aQwxiakdibfSkjJJdqKd6lyIGEmyWPWydfCC3oiMiU3RnnyvUR3wQwkIOjQHU1L0V7CJKaCj6gUhMd56UlMVp8dKE5tvH4fKXmPz9etboM0TtcOAtEAQpidHwFA0dzMDNdrAlISNSMYCdiWxsBIM0ZTzYJSVcZHOvNYZYfftJ0Gfqra5j3A',
  serviceKnotless: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBP6gSAWY19-TAGYiqR6fP1KchDGBD1dkAVz2rgqdNK36q0NeRRWYJEK0bzr8x6VZsBr28AB8Of-v_hi31yK4fTgv8j65gMH9buQerTmL2TzlKJ4BrcpvTrnDMsAPS_6uBjaZnl1Ssf9B92_3yfQyola_ep39KB_oyN9XuahUHW2G46VUtGRLhBPb9uF3swaUFd2k-0bQqj63XPKTfasZSEqH_jTtegxXtgTCnvWO3eohEdEC7prVxBSM-EiT3uKLBusp0T11toeDo',
  serviceCornrows: 'https://lh3.googleusercontent.com/aida-public/AB6AXuButwKo33CYHJyU22t7Gtev_sXMiyZUywnDO6EBw9NOQ-l3T74qtMXYQp8pMv_sb_Q8950EGElM45M2pq6gdF7mm-4IHhCX7h6B6Z_lYrq63wh6s2CC3_v1mfF_bYnXoNjc-_zXF_9qOuO7z1NXiRBTQByEDyZxb5ar3VEFydJSZooN9_Ulw6SyXdP09_AYtpcsVNwQYUp9fUhW3Jm_SeOR6Nc5SkGB4nlWXQT9_80REvgBkd28eST-OnCH2aboIBZNXuY-kIPniss'
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
