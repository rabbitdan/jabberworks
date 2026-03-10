import type { Event } from "~~/types/content"

export const events: Event[] = [
    {
        _type: "event",
        title: "Emirates Festival of Literature",
        dateStart: "2025-01-25",
        city: "Dubai",
        country: "United Arab Emirates",
        status: "past",
        series: "Reeve & McIntyre",
        url: "https://emirateslitfest.com/",
        blurb: "Festival appearances across the day featuring Adventuremice, an illustration panel, and a Mortal Engines anniversary event.",
        description: [
            "A strong festival archive example covering multiple formats in one day: family presentation, live panel, and evening celebration event.",
            "Useful for showing large-scale international festival work and repeat collaboration with Philip Reeve."
        ],
        tags: ["festival", "panel", "family", "international"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve presenting on stage."
            }
        ],
        sessions: [
            {
                title: "Reeve & McIntyre present Adventuremice",
                startTime: "10:00",
                endTime: "11:00",
                venue: "Al Barza, Intercontinental"
            },
            {
                title: "The Illustrators' Showdown",
                startTime: "13:00",
                endTime: "14:00",
                venue: "Dubai Festival City",
                description: "Panel appearance with John Patrick Green, Maitha Al Khayat, and Rachel Bright."
            },
            {
                title: "Philip Reeve: 20 Years of Mortal Engines",
                startTime: "20:00",
                endTime: "21:00",
                venue: "Dubai Festival City"
            }
        ]
    },
    {
        _type: "event",
        title: "Adventuremice Online Event for UK Schools",
        dateStart: "2025-01-31",
        startTime: "09:15",
        mode: "online",
        status: "past",
        series: "Adventuremice",
        url: "https://www.instagram.com/p/DTipSacintU/?img_index=1",
        blurb: "A free online Reeve & McIntyre event for UK schools and home educators from Years 1 to 6.",
        description: [
            "Archive example of a school-facing digital event format with broad national reach.",
            "Useful when demonstrating remote delivery alongside in-person festival and school work."
        ],
        tags: ["online", "school", "family"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at a live event."
            }
        ]
    },
    {
        _type: "event",
        title: "Publication Day - Bridge of Storms",
        dateStart: "2025-02-12",
        status: "publication",
        series: "Mortal Engines",
        blurb: "Publication day for Philip Reeve's Mortal Engines novel Bridge of Storms.",
        description: "Included in the archive as part of Sarah's ongoing professional track record around launches, collaborations, and related public events.",
        tags: ["publication", "launch", "novel", "collaboration"],
        images: [
            {
                src: "/events/mortalengines-10books.jpg",
                alt: "A stack of Mortal Engines books."
            }
        ]
    },
    {
        _type: "event",
        title: "Isle of Wight Story Festival",
        dateStart: "2025-02-22",
        city: "Newport",
        status: "past",
        url: "https://www.iwstoryfestival.com/",
        blurb: "Festival appearances including a stage play, Adventuremice presentation, and a new Mortal Engines event.",
        description: [
            "A varied one-day festival programme spanning theatre, illustration, co-presented school-age events, and a novels audience.",
            "Useful archive evidence of range across age groups and event formats."
        ],
        tags: ["festival", "family", "theatre", "panel"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve presenting at a festival."
            }
        ],
        sessions: [
            {
                title: "Pugs of the Frozen North (Stage Play)",
                startTime: "10:00",
                endTime: "11:00"
            },
            {
                title: "Don't Call Me Grumpycorn!",
                startTime: "12:15",
                endTime: "13:15"
            },
            {
                title: "Reeve & McIntyre present Adventuremice",
                startTime: "14:00",
                endTime: "15:00"
            },
            {
                title: "Philip Reeve - Bridge of Storms",
                startTime: "16:15",
                endTime: "17:15"
            }
        ]
    },
    {
        _type: "event",
        title: "Publication Day - Adventuremice: Of Mice and Mummies",
        dateStart: "2025-02-27",
        status: "publication",
        series: "Adventuremice",
        blurb: "Publication day for Adventuremice Book 8, Of Mice and Mummies.",
        description: "Included to preserve launch milestones in the events archive rather than separating them from live appearances.",
        tags: ["publication", "launch", "family", "series"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at an Adventuremice event."
            }
        ]
    },
    {
        _type: "event",
        title: "World Book Day London Tour",
        dateStart: "2025-03-04",
        dateEnd: "2025-03-07",
        city: "London",
        status: "past",
        url: "https://events.waterstones.com/",
        blurb: "A run of school visits and a public Waterstones event celebrating World Book Day.",
        description: [
            "Useful archive example of a multi-stop tour week combining schools and public-facing bookshop programming.",
            "Shows the practical range of World Book Day work beyond a single festival slot."
        ],
        tags: ["tour", "school", "bookshop", "family"],
        images: [
            {
                src: "/events/grumpycorn2-covers.jpg",
                alt: "Two Grumpycorn book covers."
            }
        ]
    },
    {
        _type: "event",
        title: "Bovey Book Fest",
        dateStart: "2025-03-15",
        city: "Bovey Tracey",
        status: "past",
        url: "https://firstdraftbooks.co.uk/bovey-book-fest-2026/",
        blurb: "Children's book festival appearance with First Draft Books.",
        description: "A local festival appearance that helps show the breadth of regional events alongside larger national and international festivals.",
        tags: ["festival", "family", "regional"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre speaking on stage."
            }
        ]
    },
    {
        _type: "event",
        title: "Newport Festival of Words",
        dateStart: "2025-03-22",
        city: "Newport",
        status: "past",
        url: "https://www.newportwordfest.co.uk/",
        blurb: "Festival appearances spanning picture-book fun and Adventuremice event work.",
        description: "A compact archive example of family festival programming with more than one tone and audience entry point across the same day.",
        tags: ["festival", "family", "picture-book"],
        images: [
            {
                src: "/events/grumpycorn2-covers.jpg",
                alt: "Grumpycorn books by Sarah McIntyre."
            }
        ]
    },
    {
        _type: "event",
        title: "Oxford Literary Festival",
        dateStart: "2025-03-28",
        city: "Oxford",
        status: "past",
        url: "https://oxfordliteraryfestival.org/literature-events/2026/march-28/of-mice-and-mummies",
        blurb: "Adventuremice event at Magdalen College Auditorium.",
        description: "A useful archive marker for established literary festival work in a flagship venue.",
        tags: ["festival", "family", "literary-festival"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at a live literary event."
            }
        ]
    },
    {
        _type: "event",
        title: "Adventuremice Event at The Bookery",
        dateStart: "2025-04-05",
        city: "Crediton",
        status: "past",
        series: "Adventuremice",
        url: "https://thebookery.org.uk/",
        blurb: "A public Adventuremice event at The Bookery in Crediton.",
        description: "Preserves the bookshop side of the archive, not just festivals and school work.",
        tags: ["bookshop", "family", "independent-bookshop"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at an audience event."
            }
        ]
    },
    {
        _type: "event",
        title: "Waterstones Children's Book Festival",
        dateStart: "2025-05-17",
        city: "Taunton",
        startTime: "10:30",
        status: "past",
        series: "Adventuremice",
        url: "https://www.eventbrite.co.uk/e/adventuremice-with-philip-reeve-and-sarah-mcintyre-brewhouse-taunton-tickets-1978330517834",
        blurb: "Adventuremice event at the Brewhouse Studio Theatre for the Waterstones Children's Book Festival.",
        description: "A clear archive example of branded retail-festival programming in a theatre setting.",
        tags: ["festival", "bookshop", "family"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve on stage."
            }
        ]
    },
    {
        _type: "event",
        title: "Wigtown Book Festival",
        dateStart: "2024-09-27",
        dateEnd: "2024-10-06",
        city: "Wigtown",
        status: "past",
        url: "https://jabberworks.livejournal.com/933587.html",
        blurb: "Festival visit with schools outreach, a public family event, and festival photo coverage.",
        description: [
            "Included as a representative archive example of multi-day festival presence rather than a single-stage appearance.",
            "Useful for organisers looking for evidence of school and public programme flexibility."
        ],
        tags: ["festival", "school", "family", "regional"],
        links: [
            {
                label: "Festival photos and write-up",
                url: "https://jabberworks.livejournal.com/933587.html"
            }
        ],
        images: [
            {
                src: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiQ1G5mFx4xkZePv7olVH32VMBt_olFBwrr4Vxqtv-08hoemgNv1v5s5bGfLAjD__FO2zqaqI9brl_yiPtx9eokyOtjB8b6xgUqjpDDURuLhbv8QOpW6wCGWdD1vpGf-K3s7Qn7x8S-4gdjlwm5hL_0cV7gw-AD4BvvLaKqvKGW6vM1JS4ff6c5QehvUQg/s1074/IMG_3554.jpg",
                alt: "Sarah McIntyre and Philip Reeve with children at Wigtown Book Festival."
            }
        ]
    },
    {
        _type: "event",
        title: "Eastbourne Schools Tour",
        dateStart: "2024-11-05",
        city: "Eastbourne",
        status: "past",
        url: "https://jabberworks.livejournal.com/933997.html",
        blurb: "A run of school events and related archive write-up from Eastbourne visits.",
        description: "Added to preserve school-visit evidence in the archive rather than letting the public events dominate the dataset.",
        tags: ["school", "tour", "family", "regional"],
        links: [
            {
                label: "School visit write-up",
                url: "https://jabberworks.livejournal.com/933997.html"
            }
        ]
    },
    {
        _type: "event",
        title: "Hexham Book Festival",
        dateStart: "2024-11-08",
        city: "Hexham",
        status: "past",
        blurb: "Festival programming in Hexham including family-facing live event work.",
        description: "A representative regional festival entry kept for track-record value.",
        tags: ["festival", "family", "regional"]
    },
    {
        _type: "event",
        title: "Barnes BookFest Schools Events",
        dateStart: "2024-11-14",
        city: "London",
        status: "past",
        blurb: "School events connected to Barnes BookFest.",
        description: "Useful archive evidence of school programming attached to a known festival brand.",
        tags: ["festival", "school", "family"]
    },
    {
        _type: "event",
        title: "Alderney Book Festival",
        dateStart: "2024-11-15",
        city: "Alderney",
        status: "past",
        blurb: "Festival appearances and school work on Alderney.",
        description: "Preserves island festival and outreach work that would otherwise disappear into the old blog archive.",
        tags: ["festival", "school", "family", "regional"]
    },
    {
        _type: "event",
        title: "Curtis Brown Creative Writing and Illustrating Course",
        dateStart: "2024-11-20",
        city: "London",
        status: "past",
        blurb: "Teaching contribution to the Curtis Brown Creative writing and illustrating course.",
        description: "Included because professional teaching and mentoring work belongs in the same track-record archive as festival appearances.",
        tags: ["teaching", "course", "professional", "mentoring"]
    },
    {
        _type: "event",
        title: "Streatham Festival",
        dateStart: "2024-11-24",
        city: "London",
        status: "past",
        blurb: "Festival appearance at Streatham Festival.",
        description: "A straightforward public festival entry retained for archive continuity.",
        tags: ["festival", "family", "regional"]
    },
    {
        _type: "event",
        title: "Emirates Festival of Literature",
        dateStart: "2026-01-24",
        city: "Dubai",
        country: "United Arab Emirates",
        status: "scheduled",
        series: "Reeve & McIntyre",
        url: "https://emirateslitfest.com/",
        blurb: "Festival appearances across the day featuring Adventuremice, an illustration panel, and a Mortal Engines celebration.",
        tags: ["festival", "panel", "family", "international"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve presenting on stage."
            }
        ],
        sessions: [
            {
                title: "Reeve & McIntyre present Adventuremice",
                startTime: "10:00",
                endTime: "11:00",
                venue: "Al Barza, Intercontinental"
            },
            {
                title: "The Illustrators' Showdown",
                startTime: "13:00",
                endTime: "14:00",
                venue: "Dubai Festival City",
                description: "Featuring Sarah McIntyre with John Patrick Green, Maitha Al Khayat, and Rachel Bright."
            },
            {
                title: "Philip Reeve: 20 Years of Mortal Engines",
                startTime: "20:00",
                endTime: "21:00",
                venue: "Dubai Festival City"
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
        blurb: "A free online Reeve & McIntyre event for UK schools and home educators from Years 1 to 6.",
        tags: ["online", "school", "family"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at a live event."
            }
        ]
    },
    {
        _type: "event",
        title: "Publication Day - Bridge of Storms",
        dateStart: "2026-02-12",
        status: "publication",
        series: "Mortal Engines",
        blurb: "Publication day for Philip Reeve's Mortal Engines novel Bridge of Storms.",
        tags: ["publication", "launch", "novel", "collaboration"],
        images: [
            {
                src: "/events/mortalengines-10books.jpg",
                alt: "A stack of Mortal Engines books."
            }
        ]
    },
    {
        _type: "event",
        title: "Isle of Wight Story Festival",
        dateStart: "2026-02-21",
        city: "Newport",
        status: "scheduled",
        url: "https://www.iwstoryfestival.com/",
        blurb: "Festival appearances including a stage play, Adventuremice presentation, and a new Mortal Engines event.",
        tags: ["festival", "family", "theatre", "panel"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve presenting at a festival."
            }
        ],
        sessions: [
            {
                title: "Pugs of the Frozen North (Stage Play)",
                startTime: "10:00",
                endTime: "11:00"
            },
            {
                title: "Don't Call Me Grumpycorn!",
                startTime: "12:15",
                endTime: "13:15"
            },
            {
                title: "Reeve & McIntyre present Adventuremice",
                startTime: "14:00",
                endTime: "15:00"
            },
            {
                title: "Philip Reeve - Bridge of Storms",
                startTime: "16:15",
                endTime: "17:15"
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
        tags: ["publication", "launch", "family", "series"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at an Adventuremice event."
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
        url: "https://events.waterstones.com/",
        blurb: "A week of school visits and a public Waterstones event celebrating World Book Day.",
        tags: ["tour", "school", "bookshop", "family"],
        images: [
            {
                src: "/events/grumpycorn2-covers.jpg",
                alt: "Two Grumpycorn book covers."
            }
        ]
    },
    {
        _type: "event",
        title: "Bovey Book Fest",
        dateStart: "2026-03-14",
        city: "Bovey Tracey",
        status: "scheduled",
        url: "https://firstdraftbooks.co.uk/bovey-book-fest-2026/",
        blurb: "Children's book festival appearance with First Draft Books.",
        tags: ["festival", "family", "regional"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre speaking on stage."
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
        blurb: "Festival appearance. Details to be confirmed.",
        tags: ["festival", "family", "picture-book"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre at a live event."
            }
        ]
    },
    {
        _type: "event",
        title: "Oxford Literary Festival",
        dateStart: "2026-03-28",
        city: "Oxford",
        startTime: "12:00",
        endTime: "13:00",
        status: "scheduled",
        url: "https://oxfordliteraryfestival.org/literature-events/2026/march-28/of-mice-and-mummies",
        blurb: "Adventuremice event at Magdalen College Auditorium.",
        tags: ["festival", "family", "literary-festival"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at a live literary event."
            }
        ]
    },
    {
        _type: "event",
        title: "Adventuremice Event at The Bookery",
        dateStart: "2026-04-04",
        city: "Crediton",
        status: "scheduled",
        series: "Adventuremice",
        url: "https://thebookery.org.uk/",
        blurb: "Adventuremice event. Details to follow.",
        tags: ["bookshop", "family", "independent-bookshop"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve at an audience event."
            }
        ]
    },
    {
        _type: "event",
        title: "Waterstones Children's Book Festival",
        dateStart: "2026-05-16",
        city: "Taunton",
        startTime: "10:30",
        status: "scheduled",
        series: "Adventuremice",
        url: "https://www.eventbrite.co.uk/e/adventuremice-with-philip-reeve-and-sarah-mcintyre-brewhouse-taunton-tickets-1978330517834",
        blurb: "Adventuremice event at the Brewhouse Studio Theatre.",
        tags: ["festival", "bookshop", "family"],
        images: [
            {
                src: "/events/event1.png",
                alt: "Sarah McIntyre and Philip Reeve on stage."
            }
        ]
    }
]
