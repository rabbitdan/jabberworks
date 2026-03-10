import type { Event } from "~~/types/content"

const journalUpload = (path: string) =>
  `https://images.jabberworks.co.uk/uploads/${path}`

export const events: Event[] = [
  {
    _type: "event",
    title: "Adventuremice Drawing Event at Gnash Comics",
    dateStart: "2025-12-13",
    city: "Ashburton",
    status: "past",
    series: "Adventuremice",
    url: "https://gnashcomics.co.uk/",
    blurb: "Adventuremice drawing event with Philip Reeve at Gnash Comics.",
    description: "A compact independent-bookshop/comics-shop archive entry showing live drawing and joint presentation work in Devon.",
    tags: ["bookshop", "comics", "family", "regional", "drawing"]
  },
  {
    _type: "event",
    title: "Wintertide Festival Adventuremice Event",
    dateStart: "2025-11-29",
    city: "Buckfastleigh",
    venue: "Town Hall",
    status: "past",
    series: "Adventuremice",
    url: "https://www.thesouthwester.co.uk/wintertide",
    blurb: "Adventuremice family event for Wintertide festival with Buckfastleigh Library, followed by bookselling and signing.",
    description: "Useful archive evidence of library-partnered festival programming with family draw-along energy and post-event signing.",
    tags: ["festival", "library", "family", "regional", "signing"],
    startTime: "14:00",
    endTime: "15:00"
  },
  {
    _type: "event",
    title: "Adventuremice Event at The Bookery",
    dateStart: "2025-11-01",
    city: "Crediton",
    status: "past",
    series: "Adventuremice",
    url: "https://thebookery.org.uk/",
    blurb: "Adventuremice event and signing at The Bookery, hosted by bookshop patrons Reeve & McIntyre.",
    description: "A clear archive example of recurring independent bookshop work with a strong local audience.",
    tags: ["bookshop", "family", "independent-bookshop", "signing", "regional"],
    startTime: "11:00",
    endTime: "12:00",
    images: [
      {
        src: journalUpload("2025/11/bookerynov25-wp.jpg"),
        alt: "Poster for the November 2025 Adventuremice event at The Bookery in Crediton."
      }
    ]
  },
  {
    _type: "event",
    title: "Pedro's Pom-Pom Party",
    dateStart: "2025-10-17",
    city: "Bovey Tracey",
    status: "past",
    series: "Adventuremice",
    url: "https://firstdraftbooks.co.uk/",
    blurb: "After-school partnership event with First Draft Books and Pom Stitch Tassel, combining craft and Adventuremice drawing.",
    description: "A useful organiser-facing example of a co-produced retail event that mixes craft activity, draw-along teaching, and family bookshop programming.",
    tags: ["bookshop", "family", "craft", "drawing", "regional"],
    images: [
      {
        src: journalUpload("2025/10/pomfirstdraftcollab.jpg"),
        alt: "Sarah McIntyre and Philip Reeve with children at Pedro's Pom-Pom Party."
      }
    ]
  },
  {
    _type: "event",
    title: "Bath Kids Lit Fest",
    dateStart: "2025-09-28",
    dateEnd: "2025-09-29",
    city: "Bath",
    venue: "The Guildhall",
    status: "past",
    series: "Adventuremice",
    blurb: "Public and schools Adventuremice events at Bath Kids Lit Fest.",
    description: "Included as a representative two-day festival example showing both public and school audiences in the same venue.",
    tags: ["festival", "school", "family", "literary-festival"],
    sessions: [
      {
        title: "Public event",
        date: "2025-09-28",
        venue: "The Guildhall",
        city: "Bath"
      },
      {
        title: "Schools event",
        date: "2025-09-29",
        venue: "The Guildhall",
        city: "Bath"
      }
    ]
  },
  {
    _type: "event",
    title: "Barnes Children's Literature Festival",
    dateStart: "2025-05-19",
    city: "Barnes",
    venue: "Live Room, Twickenham Stadium",
    status: "past",
    series: "Adventuremice",
    blurb: "Reeve & McIntyre Adventuremice event for Barnes Children's Literature Festival.",
    description: "A strong festival archive entry with a clear stage image and a known national family-festival brand.",
    tags: ["festival", "family", "literary-festival", "stage"],
    startTime: "11:30",
    images: [
      {
        src: journalUpload("2025/05/barnes-wp.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at Barnes Children's Literature Festival."
      }
    ]
  },
  {
    _type: "event",
    title: "Pugs of the Frozen North Stage Tour",
    dateStart: "2025-02-20",
    dateEnd: "2025-02-22",
    city: "South West England",
    status: "past",
    series: "Pugs of the Frozen North",
    blurb: "A short south-west stage tour of Pugs of the Frozen North presented with local bookshop partners.",
    description: "This archive entry preserves a theatre-led format rather than a standard author talk, with bookshop-supported performances in Crediton, Totnes, and Bovey Tracey.",
    tags: ["theatre", "tour", "family", "regional", "bookshop"],
    images: [
      {
        src: journalUpload("2025/01/pugs-poster-wp.jpg"),
        alt: "Poster for the 2025 Pugs of the Frozen North stage shows."
      }
    ],
    sessions: [
      {
        title: "Crediton performance",
        date: "2025-02-20",
        startTime: "16:00",
        venue: "Old Town Hall",
        city: "Crediton"
      },
      {
        title: "Totnes performance",
        date: "2025-02-21",
        startTime: "14:00",
        venue: "The Mansion, The Old School Hall",
        city: "Totnes"
      },
      {
        title: "Bovey Tracey performance",
        date: "2025-02-22",
        startTime: "16:30",
        venue: "Riverside Community Centre",
        city: "Bovey Tracey"
      }
    ]
  },
  {
    _type: "event",
    title: "Emirates Festival of Literature",
    dateStart: "2026-01-24",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "scheduled",
    series: "Reeve & McIntyre",
    url: "https://litfesttickets.emirateslitfest.com/addtocart/reeve-and-mcintyre-adventuremice?locale=en",
    blurb: "Three appearances at Emirates Festival of Literature featuring Adventuremice, an illustrators' panel, and Philip Reeve's Mortal Engines celebration.",
    description: "A strong international festival day with multiple formats: family event, live panel, and evening novels event.",
    tags: ["festival", "panel", "family", "international", "literary-festival"],
    sessions: [
      {
        title: "Reeve & McIntyre present Adventuremice!",
        startTime: "10:00",
        endTime: "11:00",
        venue: "Al Barza, Intercontinental",
        city: "Dubai",
        links: [
          {
            label: "Book tickets",
            url: "https://litfesttickets.emirateslitfest.com/addtocart/reeve-and-mcintyre-adventuremice?locale=en"
          }
        ]
      },
      {
        title: "The Illustrators' Showdown",
        startTime: "13:00",
        endTime: "14:00",
        venue: "Dubai Festival City",
        city: "Dubai",
        description: "Featuring Sarah McIntyre with John Patrick Green, Maitha Al Khayat, and Rachel Bright.",
        links: [
          {
            label: "Book tickets",
            url: "https://litfesttickets.emirateslitfest.com/addtocart/the-illustrators-showdown?locale=en"
          }
        ]
      },
      {
        title: "Philip Reeve, Celebrating 20 Years of Mortal Engines",
        startTime: "20:00",
        endTime: "21:00",
        venue: "Dubai Festival City",
        city: "Dubai",
        links: [
          {
            label: "Book tickets",
            url: "https://litfesttickets.emirateslitfest.com/author-details/philip-reeve?locale=en"
          }
        ]
      }
    ]
  },
  {
    _type: "event",
    title: "Adventuremice Online Event for UK Schools",
    dateStart: "2026-01-30",
    startTime: "09:15",
    mode: "online",
    status: "scheduled",
    series: "Adventuremice",
    url: "https://www.instagram.com/p/DTipSacintU/?img_index=1",
    blurb: "Free Reeve & McIntyre online Adventuremice event for UK schools and home educators in Years 1 to 6.",
    description: "A useful archive and listings entry for remote school delivery with national reach.",
    tags: ["online", "school", "family", "free-event"]
  },
  {
    _type: "event",
    title: "Publication Day - Bridge of Storms",
    dateStart: "2026-02-12",
    status: "publication",
    series: "Mortal Engines",
    blurb: "Publication day for Philip Reeve's Mortal Engines novel Bridge of Storms.",
    description: "Included as part of the wider professional track record around launches and related event work.",
    tags: ["publication", "launch", "novel", "collaboration"],
    images: [
      {
        src: journalUpload("2026/01/mortalengines-10books.jpg"),
        alt: "A stack of Mortal Engines books to mark the publication of Bridge of Storms."
      }
    ]
  },
  {
    _type: "event",
    title: "Isle of Wight Story Festival",
    dateStart: "2026-02-21",
    city: "Newport, Isle of Wight",
    status: "scheduled",
    url: "https://www.iwstoryfestival.com/",
    blurb: "Four appearances across the day including a stage play, Grumpycorn event, Adventuremice event, and Philip Reeve's Bridge of Storms event.",
    description: "A varied festival day spanning theatre, solo picture-book presentation, family co-presentation, and novels programming.",
    tags: ["festival", "family", "theatre", "picture-book", "literary-festival"],
    images: [
      {
        src: journalUpload("2026/01/grumpycorn_2covers_lj.jpg"),
        alt: "Two Grumpycorn covers used in promotion for Sarah McIntyre's Isle of Wight Story Festival event."
      }
    ],
    sessions: [
      {
        title: "Pugs of the Frozen North",
        startTime: "10:00",
        endTime: "11:00",
        description: "Stage play with songs presented by The Foundry Group, followed by a Reeve & McIntyre signing.",
        links: [
          {
            label: "Book tickets",
            url: "https://www.iwstoryfestival.com/pugs-of-the-frozen-north-foundry-group"
          }
        ]
      },
      {
        title: "Sarah McIntyre presents Don't Call Me Grumpycorn!",
        startTime: "12:15",
        endTime: "13:15",
        links: [
          {
            label: "Book tickets",
            url: "https://www.iwstoryfestival.com/sarah-mcintyre-grumpycorn"
          }
        ]
      },
      {
        title: "Reeve & McIntyre present Adventuremice!",
        startTime: "14:00",
        endTime: "15:00",
        links: [
          {
            label: "Book tickets",
            url: "https://www.iwstoryfestival.com/philip-reeve-sarah-mcyintyre-adventuremice"
          }
        ]
      },
      {
        title: "Philip Reeve presents Bridge of Storms",
        startTime: "16:15",
        endTime: "17:15",
        links: [
          {
            label: "Book tickets",
            url: "https://www.iwstoryfestival.com/philip-reeve"
          }
        ]
      }
    ]
  },
  {
    _type: "event",
    title: "Publication Day - Adventuremice: Of Mice and Mummies",
    dateStart: "2026-02-26",
    status: "publication",
    series: "Adventuremice",
    blurb: "Publication day for Adventuremice Book 8, Of Mice and Mummies.",
    description: "A launch-day archive marker for the eighth Adventuremice book.",
    tags: ["publication", "launch", "family", "series"],
    images: [
      {
        src: journalUpload("2025/10/advmice8-cover-lores.jpg"),
        alt: "Cover artwork for Adventuremice: Of Mice and Mummies."
      }
    ]
  },
  {
    _type: "event",
    title: "World Book Day London Tour",
    dateStart: "2026-03-04",
    dateEnd: "2026-03-07",
    city: "London",
    status: "scheduled",
    series: "Adventuremice",
    url: "https://www.waterstones.com/events/reeve-and-mcintyre-present-adventuremice/london-trafalgar-square",
    blurb: "A week of Adventuremice school visits culminating in a public Waterstones Trafalgar Square event.",
    description: "A useful multi-stop World Book Day archive entry combining school visits with a ticketed public bookshop appearance.",
    tags: ["tour", "school", "bookshop", "family", "world-book-day"],
    sessions: [
      {
        title: "King's House School author visit",
        date: "2026-03-04",
        city: "Richmond"
      },
      {
        title: "St Richard Reynolds Catholic Primary & College author visit",
        date: "2026-03-05",
        city: "Twickenham"
      },
      {
        title: "Princess Frederica CE VA Primary School author visit",
        date: "2026-03-06",
        city: "London"
      },
      {
        title: "Waterstones Trafalgar Square public Adventuremice event",
        date: "2026-03-07",
        startTime: "11:00",
        endTime: "12:00",
        city: "London",
        links: [
          {
            label: "Book tickets",
            url: "https://www.waterstones.com/events/reeve-and-mcintyre-present-adventuremice/london-trafalgar-square"
          }
        ]
      }
    ]
  },
  {
    _type: "event",
    title: "Bovey Book Fest",
    dateStart: "2026-03-14",
    city: "Bovey Tracey",
    status: "scheduled",
    url: "https://www.eventbrite.com/e/bovey-book-fest-tickets-1968513372488?aff=oddtdtcreator",
    blurb: "Children's book festival in Bovey Tracey with First Draft Books.",
    description: "A local festival entry with a clearly associated poster image and direct ticket link.",
    tags: ["festival", "family", "regional", "literary-festival"],
    images: [
      {
        src: journalUpload("2025/11/boveybookfest26-wp.jpg"),
        alt: "Poster for Bovey Book Fest 2026."
      }
    ]
  },
  {
    _type: "event",
    title: "Newport Festival of Words",
    dateStart: "2026-03-22",
    city: "Newport",
    status: "scheduled",
    url: "https://www.newportwordfest.co.uk/",
    blurb: "Festival appearance at Newport Festival of Words. Details to follow.",
    description: "Retained as a forthcoming festival marker pending fuller programme details.",
    tags: ["festival", "family", "literary-festival"]
  },
  {
    _type: "event",
    title: "Stratford Lit Fest Schools Events",
    dateStart: "2026-03-25",
    city: "Stratford",
    status: "scheduled",
    blurb: "School events at St Barts Coventry and St Lawrence Primary for Stratford Lit Fest.",
    description: "A concise school-festival entry that preserves the school-facing side of festival programming.",
    tags: ["festival", "school", "family", "regional"]
  },
  {
    _type: "event",
    title: "Oxford Lit Fest",
    dateStart: "2026-03-28",
    city: "Oxford",
    venue: "Magdalen College Auditorium",
    startTime: "12:00",
    endTime: "13:00",
    status: "scheduled",
    series: "Adventuremice",
    url: "https://oxfordliteraryfestival.org/literature-events/2026/march-28/of-mice-and-mummies",
    blurb: "Adventuremice event at Oxford Lit Fest, with Philip Reeve's Mortal Engines event earlier the same day.",
    description: "A useful flagship literary-festival listing with direct ticketing and clear venue information.",
    tags: ["festival", "family", "literary-festival"]
  },
  {
    _type: "event",
    title: "Adventuremice Event at The Bookery",
    dateStart: "2026-04-04",
    city: "Crediton",
    status: "scheduled",
    series: "Adventuremice",
    url: "https://thebookery.org.uk/",
    blurb: "Adventuremice event at The Bookery. Details to follow.",
    description: "Retained as a forthcoming independent bookshop event marker.",
    tags: ["bookshop", "family", "independent-bookshop", "regional"]
  },
  {
    _type: "event",
    title: "Waterstones Children's Book Festival",
    dateStart: "2026-05-16",
    city: "Taunton",
    venue: "Brewhouse Studio Theatre",
    startTime: "10:30",
    status: "scheduled",
    series: "Adventuremice",
    url: "https://www.waterstones.com/events/childrens-book-festival-adventuremice-with-philip-reeve-and-sarah-mcintyre/taunton",
    blurb: "Adventuremice event for the Waterstones Children's Book Festival in Taunton.",
    description: "A direct festival-ticketed bookshop event with a clearly associated promotional image.",
    tags: ["festival", "bookshop", "family", "literary-festival"],
    images: [
      {
        src: journalUpload("2026/01/Philip-Reeve-and-Sarah-McIntyre-Landscape-1024x576.jpg"),
        alt: "Promotional image for Philip Reeve and Sarah McIntyre's Waterstones Children's Book Festival event in Taunton."
      }
    ]
  },
  {
    _type: "event",
    title: "Exeter Cathedral: In Conversation With...",
    dateStart: "2024-11-10",
    city: "Exeter",
    venue: "Exeter Cathedral",
    status: "past",
    blurb: "An evening 'In Conversation With...' event with Canon Deborah Parsons, followed by Q&A, compline, and book signing.",
    description: "Useful archive evidence of adult-facing conversation events outside the usual school and festival circuit.",
    tags: ["conversation", "adult", "talk", "signing", "regional"],
    startTime: "18:30",
    images: [
      {
        src: journalUpload("2025/01/gcg2fuexwaasgc.jpg"),
        alt: "Sarah McIntyre speaking at Exeter Cathedral."
      }
    ]
  },
  {
    _type: "event",
    title: "Adventuremice School Visit to Manor Park",
    dateStart: "2024-10-15",
    city: "Dorchester",
    status: "past",
    series: "Adventuremice",
    blurb: "Reeve & McIntyre Adventuremice school visit to Manor Park CofE First School.",
    description: "A school-visit archive entry with a clearly associated event image from the visit.",
    tags: ["school", "family", "regional", "drawing", "collaboration"],
    images: [
      {
        src: journalUpload("2025/01/dorchestermanorpark-drawings.jpg"),
        alt: "Children's drawings from the Manor Park Adventuremice school visit."
      }
    ]
  },
  {
    _type: "event",
    title: "Bath Children's Literature Festival Schools Events",
    dateStart: "2024-09-30",
    dateEnd: "2024-10-01",
    city: "Bath",
    venue: "Assembly Rooms",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/919822.html",
    blurb: "Two Adventuremice schools events at Bath Children's Literature Festival, with sponsored signed books for children.",
    description: "A strong archive example of large-scale sponsored school festival events with book distribution.",
    tags: ["festival", "school", "family", "literary-festival"],
    images: [
      {
        src: journalUpload("2024/10/bath24-wp.jpg"),
        alt: "Sarah McIntyre and Philip Reeve on stage at Bath Children's Literature Festival."
      }
    ]
  },
  {
    _type: "event",
    title: "Marlborough Lit Fest",
    dateStart: "2024-09-29",
    city: "Marlborough",
    venue: "Town Hall",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/919668.html",
    blurb: "Adventuremice event at Marlborough Lit Fest.",
    description: "Included for its direct festival image evidence and useful town-hall public event format.",
    tags: ["festival", "family", "literary-festival", "regional"],
    startTime: "11:30",
    images: [
      {
        src: journalUpload("2024/10/marlb24-benphillipsphoto-1.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at Marlborough Lit Fest."
      }
    ]
  },
  {
    _type: "event",
    title: "Adventuremice Schools Tour with Budleigh Salterton Literary Festival",
    dateStart: "2024-07-04",
    dateEnd: "2024-07-05",
    city: "Budleigh Salterton and Exmouth",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/918896.html",
    blurb: "Two-day Adventuremice schools tour visiting multiple schools with Budleigh Salterton Literary Festival.",
    description: "A particularly useful archive entry for demonstrating multi-school touring, festival partnership work, and bookseller collaboration.",
    tags: ["school", "tour", "festival", "family", "regional"],
    images: [
      {
        src: journalUpload("2024/07/stpetersbudleigh-lj1.jpg"),
        alt: "Sarah McIntyre and Philip Reeve during the Budleigh Salterton schools tour."
      }
    ]
  },
  {
    _type: "event",
    title: "Summer Solstice Music Festival Adventuremice Event",
    dateStart: "2024-06-19",
    city: "Seldovia",
    country: "USA",
    venue: "Sea Otter Community Center",
    status: "past",
    series: "Adventuremice",
    blurb: "Solo Adventuremice event at the Summer Solstice Music Festival in Seldovia, Alaska.",
    description: "An international solo event entry that broadens the archive beyond UK festivals and school visits.",
    tags: ["festival", "family", "international", "solo"],
    startTime: "11:00",
    endTime: "12:00",
    images: [
      {
        src: journalUpload("2024/07/seldovia-event.jpg"),
        alt: "Sarah McIntyre presenting at the Seldovia Summer Solstice Music Festival."
      }
    ]
  },
  {
    _type: "event",
    title: "Brighton Book Festival",
    dateStart: "2024-05-12",
    city: "Brighton",
    venue: "Brighton Girls",
    status: "past",
    series: "Adventuremice",
    blurb: "Reeve & McIntyre Adventuremice public event hosted by Book Nook Hove.",
    description: "A clean public-festival archive entry with a strong event photo and bookshop-hosting context.",
    tags: ["festival", "family", "bookshop", "public-event"],
    images: [
      {
        src: journalUpload("2024/05/brighton-advmice-may24.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at Brighton Book Festival."
      }
    ]
  },
  {
    _type: "event",
    title: "Adventuremice Book Launch at Ivybridge Bookshop",
    dateStart: "2024-03-09",
    city: "Ivybridge",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/918450.html",
    blurb: "Adventuremice book launch event at the Ivybridge Bookshop.",
    description: "Useful archive evidence of a standalone launch event outside the larger festival circuit.",
    tags: ["launch", "bookshop", "family", "regional", "independent-bookshop"],
    images: [
      {
        src: journalUpload("2024/03/ivybridge-event-wp.jpg"),
        alt: "Poster for the Adventuremice launch event at Ivybridge Bookshop."
      }
    ]
  },
  {
    _type: "event",
    title: "Exeter What If...? Festival",
    dateStart: "2024-02-17",
    city: "Exeter",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/918450.html",
    blurb: "Reeve & McIntyre Adventuremice event at Exeter's What If...? Festival.",
    description: "A retained archive marker for an established Exeter family-festival appearance.",
    tags: ["festival", "family", "regional"]
  },
  {
    _type: "event",
    title: "Visit to The British School of Brussels",
    dateStart: "2023-10-19",
    dateEnd: "2023-10-20",
    city: "Brussels",
    country: "Belgium",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/915666.html",
    blurb: "Reeve & McIntyre school visit to The British School of Brussels.",
    description: "An international school-visit example with a clearly associated photo from the visit.",
    tags: ["school", "international", "family", "collaboration"],
    images: [
      {
        src: journalUpload("2023/11/brussels-wp-1.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at The British School of Brussels."
      }
    ]
  },
  {
    _type: "event",
    title: "Cheltenham Lit Fest",
    dateStart: "2023-10-13",
    dateEnd: "2023-10-14",
    city: "Cheltenham",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/915268.html",
    blurb: "Reeve & McIntyre Adventuremice schools and public festival events at Cheltenham.",
    description: "A strong two-day literary festival archive entry spanning both a large schools audience and a main public event.",
    tags: ["festival", "school", "family", "literary-festival", "stage"],
    images: [
      {
        src: journalUpload("2023/10/chelt23-stage.jpg"),
        alt: "Sarah McIntyre and Philip Reeve on stage at Cheltenham Lit Fest."
      }
    ]
  },
  {
    _type: "event",
    title: "Bath Children's Literature Festival",
    dateStart: "2023-10-01",
    city: "Bath",
    venue: "The Egg",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/914309.html",
    blurb: "Reeve & McIntyre Adventuremice event at Bath Children's Literature Festival.",
    description: "Included for archive continuity as part of Sarah and Philip's repeat festival track record.",
    tags: ["festival", "family", "literary-festival"],
    startTime: "11:00",
    images: [
      {
        src: journalUpload("2023/10/bath23-marjorie73.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at Bath Children's Literature Festival."
      }
    ]
  },
  {
    _type: "event",
    title: "Booktastic Book Festival",
    dateStart: "2023-07-07",
    city: "Bedford",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/912214.html",
    blurb: "Reeve & McIntyre Adventuremice event at Booktastic Book Festival.",
    description: "A family festival archive entry with direct photographic evidence from the event.",
    tags: ["festival", "family", "regional"],
    startTime: "10:00",
    images: [
      {
        src: journalUpload("2023/08/booktastic-chiara-lj2.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at Bedford Booktastic Book Festival."
      }
    ]
  },
  {
    _type: "event",
    title: "Henleaze Primary and Max Minerva's Event Day",
    dateStart: "2023-06-05",
    city: "Bristol",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/911871.html",
    blurb: "Reeve & McIntyre school visit to Henleaze Primary followed by window decorating at Max Minerva's bookshop.",
    description: "Useful for organisers because it shows mixed-format day programming: school visit plus public-facing bookshop activation.",
    tags: ["school", "bookshop", "family", "window-display", "regional"],
    images: [
      {
        src: journalUpload("2023/06/maxminervaswindow1.jpg"),
        alt: "Adventuremice window display at Max Minerva's bookshop in Bristol."
      }
    ]
  },
  {
    _type: "event",
    title: "Launch of Adventuremice: Mermouse Mystery",
    dateStart: "2023-06-01",
    city: "Totnes",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/911285.html",
    blurb: "Launch event for Adventuremice: Mermouse Mystery at East Gate Bookshop.",
    description: "Retained as a clear series-launch archive marker in an independent bookshop setting.",
    tags: ["launch", "bookshop", "family", "independent-bookshop", "series"]
  },
  {
    _type: "event",
    title: "Adventuremice Dartmoor Mini Tour",
    dateStart: "2023-04-05",
    city: "Chagford and Ashburton",
    status: "past",
    series: "Adventuremice",
    url: "https://jabberworks.livejournal.com/908482.html",
    blurb: "Adventuremice mini tour to Astor's Bookshop in Chagford and Gnash Comics in Ashburton.",
    description: "A good archive example of a small regional two-stop tour built around independent bookselling partners.",
    tags: ["tour", "bookshop", "family", "regional", "independent-bookshop"],
    images: [
      {
        src: journalUpload("2023/02/rm-adventuremice-swtour-graphic-tw.jpg"),
        alt: "Graphic for the Adventuremice Dartmoor mini tour."
      }
    ]
  },
  {
    _type: "event",
    title: "Emirates Lit Fest",
    dateStart: "2023-02-03",
    dateEnd: "2023-02-05",
    city: "Dubai",
    country: "United Arab Emirates",
    status: "past",
    url: "https://jabberworks.livejournal.com/904424.html",
    blurb: "Festival appearances at Emirates Lit Fest.",
    description: "Included as part of Sarah's repeat international festival track record.",
    tags: ["festival", "international", "family", "literary-festival"]
  },
  {
    _type: "event",
    title: "Storytime at Halfway Up The Stairs",
    dateStart: "2022-11-12",
    city: "Greystones",
    country: "Ireland",
    status: "past",
    url: "https://www.independent.ie/regionals/wicklow/bray-news/pictures-show-all-the-fun-of-saturday-storytime-with-author-sarah-mcintyre-in-greystones/42162201.html",
    blurb: "Storytime event at Halfway Up The Stairs bookshop in Greystones.",
    description: "A useful Irish bookshop archive entry with a clearly associated image from the event.",
    tags: ["bookshop", "family", "storytime", "international", "independent-bookshop"],
    images: [
      {
        src: journalUpload("2024/01/greystones-nov22-wp.jpg"),
        alt: "Children with Sarah McIntyre at Halfway Up The Stairs in Greystones."
      }
    ]
  },
  {
    _type: "event",
    title: "Visit to Chagford CofE Primary School as Patron of Reading",
    dateStart: "2022-04-27",
    city: "Chagford",
    status: "past",
    url: "https://jabberworks.livejournal.com/897602.html",
    blurb: "Visit to Chagford CofE Primary School as its new Patron of Reading, hosted with Astor's Bookshop.",
    description: "A useful archive entry showing patronage, schools work, and local bookshop partnership.",
    tags: ["school", "patron-of-reading", "regional", "family", "bookshop"],
    images: [
      {
        src: journalUpload("2022/05/middevonadv-chagford-ap22.jpg"),
        alt: "Sarah McIntyre visiting Chagford CofE Primary School."
      }
    ]
  },
  {
    _type: "event",
    title: "Isle of Wight Story Festival",
    dateStart: "2022-02-25",
    dateEnd: "2022-02-26",
    city: "Isle of Wight",
    status: "past",
    url: "https://jabberworks.livejournal.com/895611.html",
    blurb: "Festival events featuring Grumpycorn and Kevin vs the Unicorns.",
    description: "A useful pre-Adventuremice archive entry showing the same family-festival circuit across other Sarah and Reeve & McIntyre titles.",
    tags: ["festival", "family", "picture-book", "literary-festival"]
  },
  {
    _type: "event",
    title: "Max Minerva's Big-Up Bookshops Tour Events",
    dateStart: "2021-10-08",
    dateEnd: "2021-10-09",
    city: "Bristol",
    status: "past",
    url: "https://jabberworks.livejournal.com/890949.html",
    blurb: "School visits and bookshop events at Max Minerva's as part of the Big-Up Bookshops tour.",
    description: "A strong archive example of multi-part programming combining sponsored school visits with a public indie bookshop event.",
    tags: ["bookshop", "school", "tour", "family", "regional"],
    images: [
      {
        src: journalUpload("2021/10/rm-bookshops-wp.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at Max Minerva's in Bristol."
      }
    ]
  },
  {
    _type: "event",
    title: "Picture Book Masterclass at The Bookery",
    dateStart: "2021-09-25",
    city: "Crediton",
    status: "past",
    url: "https://jabberworks.livejournal.com/889375.html",
    blurb: "Picture book masterclass at The Bookery bookshop.",
    description: "Included to preserve workshop and teaching formats alongside school and festival appearances.",
    tags: ["bookshop", "teaching", "workshop", "professional", "regional"],
    images: [
      {
        src: journalUpload("2021/09/bookery-joint-wp.jpg"),
        alt: "Sarah McIntyre and Philip Reeve at The Bookery in Crediton."
      }
    ]
  },
  {
    _type: "event",
    title: "Bookery Devon Schools Events",
    dateStart: "2021-09-22",
    dateEnd: "2021-09-23",
    city: "Devon",
    status: "past",
    series: "Grumpycorn and Kevin",
    blurb: "A pair of Bookery-organised school event days across Devon, including Broadclyst, Chulmleigh, Haywards, and Landscore.",
    description: "A strong archive example of sponsor-backed multi-school programming organised through an independent bookshop.",
    tags: ["school", "tour", "bookshop", "family", "regional"],
    images: [
      {
        src: journalUpload("2021/09/bookery-sarah-wp.jpg"),
        alt: "Sarah McIntyre during a Bookery-organised Devon schools event."
      }
    ]
  },
  {
    _type: "event",
    title: "Barnes Children's Literature Festival",
    dateStart: "2021-06-26",
    city: "London",
    status: "past",
    url: "https://jabberworks.livejournal.com/882765.html",
    blurb: "Festival events including Grumpycorn and Kevin vs the Biscuit Bandit.",
    description: "A retained archive marker for a key children's festival, supported by a clearly associated event banner image.",
    tags: ["festival", "family", "picture-book", "literary-festival"],
    images: [
      {
        src: journalUpload("2021/07/barnes-banner-lj.jpg"),
        alt: "Banner for Barnes Children's Literature Festival."
      }
    ]
  }
]
