import type { Book } from "~~/types/content"
const adventuremiceBuyLinks = [
        {
            url: "https://uk.bookshop.org/lists/reeve-mcintyre-books",
            linkText: "First Draft Books"
        },
        {
            url: "https://www.waterstones.com/books/search/term/adventuremice",
            linkText: "Waterstones"
        },
        {
            url: "https://uk.bookshop.org/lists/adventuremice-series",
            linkText: "The Celtic House 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
        },
        {
            url: "https://blackwells.co.uk/bookshop/search/?format=&keyword=adventuremice",
            linkText: "Blackwells"
        },
        {
            url: "https://halfwayupthestairs.ie/?s=adventuremice&post_type=product&dgwt_wcas=1",
            linkText: "Halfway up the stairs 🇮🇪"
        },
    ]

export const books: Book[] = [
    {
        _type: "book",
        slug: "adventuremice-otter-chaos",
        pageLink: { url: "https://adventuremice.com/books/otter-chaos" },
        title: "Adventuremice: Otter Chaos",
        cover: { src: "/books/advmice-cover-otter-chaos.jpg", alt: "Adventuremice: Otter Chaos" },
        blurb: "Meet Pedro. He's tiny. But he's looking for a BIG ADVENTURE.\n" +
            "\n" +
            "When his first try at an adventure goes a bit wrong, Pedro is rescued by the ADVENTUREMICE! They are a brave, determined team who keep all the mouse Islands safe from harm.\n" +
            "\n" +
            "Pedro's dream is to show he's heroic enough to join their ranks. And soon he gets the chance to prove himself, when a big, scary otter starts causing trouble in the waters nearby...\n" +
            "\n" +
            "The first book in this swashbuckling series by Reeve & McIntyre",
        buyLinks: adventuremiceBuyLinks,
        youtube: {
            url: "https://youtu.be/hHjNV71qzEQ",
            title: "Presenting... Adventuremice!"
        }
    },
    {
        _type: "book",
        slug: "adventuremice-mermouse-mystery",
        pageLink: { url: "https://adventuremice.com/books/mermouse-mystery" },
        title: "Adventuremice: The Mermouse Mystery",
        cover: { src: "/books/advmice-cover-mermouse-mystery.jpg", alt: "Adventuremice: The Mermouse Mystery" },
        blurb: "Pedro is getting used to the thrilling life of the Adventuremice. But one stormy night, he finds something he's only ever dreamed of seeing: a real, live mermouse! This little mermouse is lost, and Pedro and the Adventuremice need to get him safely home. They must summon all their bravery and brilliance, plunge into the depths of the ocean and find the mysterious Mermouse City. It won't be straightforward, but it will be another exciting, friend-filled adventure for Pedro and the team!",
        buyLinks: adventuremiceBuyLinks,
        youtube: {
            url: "https://youtu.be/3jEV2iQUpvo",
            title: "Adventuremice: Mermouse Mystery - Draw Meepie!"
        }
    },
    {
        _type: "book",
        slug: "adventuremice-mice-on-the-ice",
        pageLink: { url: "https://adventuremice.com/books/mice-on-the-ice" },
        title: "Adventuremice: Mice on the Ice",
        cover: { src: "/books/advmice-cover-mice-on-ice.jpeg", alt: "Adventuremice: Mice on the Ice" },
        blurb: "The Frost Fair is coming! But when a surprise snowfall puts the mice's plans at risk, it's up to Pedro and the team to save the Fair and bring joy to the town! Guaranteed to warm hearts everywhere.",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "adventuremice-mice-on-the-moon",
        pageLink: { url: "https://adventuremice.com/books/mice-on-the-moon" },
        title: "Adventuremice: Mice on the Moon",
        cover: { src: "/books/advmice-cover-mice-moon.png", alt: "Adventuremice: Mice on the Moon" },
        blurb: "Little Pedro has an out-of-this-world adventure!\n" +
            "\n" +
            "The heroic Adventuremice have been summoned by an inventor-mouse! Millie's Uncle Bernie has built a spaceship and he wants the brave and clever Adventuremice to fly it.\n" +
            "\n" +
            "BOOM! Pedro and his friends blast into outer space, where they become the first mice on the moon. Or so they think . . .",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "adventuremice-ghostly-galleon",
        pageLink: { url: "https://adventuremice.com/books/ghostly-galleon" },
        title: "Adventuremice: The Ghostly Galleon",
        cover: { src: "/books/advmice-cover-ghostly-galleon.jpg", alt: "Adventuremice: The Ghostly Galleon" },
        blurb: "The spookiest time of the year calls for a treasure hunt! So when the Adventuremice hear about ghostly goings-on at sea, they try to get to the bottom of the mystery of old Captain Cheesebeard and his ancient treasure hoard!",
        buyLinks: adventuremiceBuyLinks,
        youtube: {
            url: "https://youtu.be/FmFL3R3wKho",
            title: "Presenting... Adventuremice: The Ghostly Galleon!"
        }
    },
    {
        _type: "book",
        slug: "adventuremice-mice-camera-action",
        pageLink: { url: "https://adventuremice.com/books/mice-camera-action" },
        title: "Adventuremice: Mice, Camera, Action!",
        cover: { src: "/books/advmice-cover-mice-camera-action.jpg", alt: "Adventuremice: Mice, Camera, Action!" },
        blurb: "An exciting letter has arrived at the Mousebase – from Hollybush. A famous producer is making Adventuremice: The Movie! Pedro and the team travel to the film set, where there's glitz, glamour and an out-of-control otter! It's up to the Adventuremice to save the day, and the movie! Get those cameras rolling...",
        buyLinks: adventuremiceBuyLinks,
        youtube: {
            url: "https://youtu.be/KcE2xQmYli8",
            title: "Authors read from Mice, Camera, Action!"
        }
    },
    {
        _type: "book",
        slug: "adventuremice-mousehole-centre-of-earth",
        pageLink: { url: "https://adventuremice.com/books/mousehole-centre-of-earth" },
        title: "Adventuremice: Mousehole to the Centre of the Earth",
        cover: { src: "/books/advmice-cover-mousehole-centre-earth-cover.jpg", alt: "Adventuremice: Mousehole to the Centre of the Earth" },
        blurb: "When Uncle Bernie turns up with his incredible Mechanical Mole machine, the Adventuremice go on a mission! Pedro and the crew burrow to an underground cave world, unlike anything they've ever seen. There are tiny, twisty trees, and even tinier pterodactyls! But there's also a HAMSTERSAURUS REX on the loose!\n" +
            "\n" +
            "Can the team save the nervous local cavemice from this giant predator, or is there more to the creature than meets the eye?",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "adventuremice-mice-and-mummies",
        pageLink: { url: "https://adventuremice.com/books/mice-and-mummies" },
        title: "Adventuremice: Of Mice and Mummies",
        cover: { src: "/books/advmice-cover-mice-mummies.jpg", alt: "Adventuremice: Of Mice and Mummies" },
        blurb: "When the Adventuremice discover an old stone covered in hieroglyphs, a race begins! The story of ancient Queen Neferteacake's magnificent golden tomb is revealed, and a rather naughty mouse wants to get there first. Our intrepid Adventuremice set off on an exciting journey to a secret island, full of incredible mouse sphinxes, pyramids and palaces. Another sparkling, gloriously illustrated story celebrating kindness and friendship from Reeve & McIntyre.",
        buyLinks: [
            {
                url: "https://uk.bookshop.org/lists/reeve-mcintyre-books",
                linkText: "First Draft Books"
            },
            {
                url: "https://www.waterstones.com/books/search/term/adventuremice",
                linkText: "Waterstones"
            },
            {
                url: "https://uk.bookshop.org/lists/adventuremice-series",
                linkText: "The Celtic House 🏴󠁧󠁢󠁳󠁣󠁴󠁿"
            },
            {
                url: "https://blackwells.co.uk/bookshop/search/?format=&keyword=adventuremice",
                linkText: "Blackwells"
            },
            {
                url: "https://halfwayupthestairs.ie/?s=adventuremice&post_type=product&dgwt_wcas=1",
                linkText: "Halfway up the stairs 🇮🇪"
            },
        ],
        youtube: {
            url: "https://youtu.be/vrsLLbZxcvI",
            title: "Adventuremice - Of Mice and Mummies trailer"
        }
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-seawigs",
        pageLink: { url: "/books/reeve-mcintyre-seawigs" },
        title: "Seawigs",
        cover: { src: "/books/rm-cover-seawigs.jpg", alt: "Seawigs cover" },
        blurb: "Oliver grew up in a family of explorers - but his biggest adventure is about to begin! Along with his new friends, a grumpy old albatross, a short-sighted mermaid and a friendly island called Cliff, Oliver goes off in search of his missing parents."
           + "\n" +
        "But before he can put his rescue plan into action there&rsquo;s the evil Stacey de Lacey and an army of greasy, green sea monkeys to contend with…",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-cakes-space",
        pageLink: { url: "/books/reeve-mcintyre-cakes-space" },
        title: "Cakes in Space",
        cover: { src: "/books/rm-cover-cakesspace.jpg", alt: "Cakes in space cover" },
        blurb: "Astra&rsquo;s family plan to sleep for the 200 years it takes their spaceship to reach their new home on Nova Mundi. But halfway there, Astra finds herself WIDE AWAKE&#33; With her robot friend, Pilbeam, she goes off exploring and soon finds out the ship is in deep trouble. It&rsquo;s been knocked off course and invaded by a gang of Poglites, an alien salvage crew searching for spoonage."
        + "\n" +
            "But even the Poglites need Astra&rsquo;s help when they discover something far more sinister lurking in the canteen. Sure, they&rsquo;re cakes; but no one would describe them a sweet.",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-jinks-o-hare",
        pageLink: { url: "/books/reeve-mcintyre-jinks-o-hare" },
        title: "Jinnks & O'Hare funfair repair",
        cover: { src: "/books/rm-cover-jinksohare.jpg", alt: "Jinks and O'Hare funfair repair cover" },
        blurb: "Draw yourself in to the world of REEVE &amp; MCINTYRE with this Pug-a-Doodle-Do! Bumper Book of Fun! Pull out your pencils for doodling, adventure comics, funny mash-ups and fabulous flights of fancy&#33;",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-pugs",
        pageLink: { url: "/books/reeve-mcintyre-pugs" },
        title: "Pugs of the frozen north",
        cover: { src: "/books/rm-cover-pugs.jpg", alt: "Pugs of the frozen north cover" },
        blurb: "The race to the top of the world&#33; It comes around once in a lifetime - and the prize? Your heart&rsquo;s desire. Shen and Sika can’t resist the chance to win, but competition is fierce. The path to victory is littered with snow trolls, sea monsters and a gang of particularly hungry yetis. But Sika and Shen have something the other contestants don&rsquo;t have. Actually, they have 66 other things - PUGS, to be exact. That&rsquo;s a 264-paw-powered sled. Let the race begin&#33;",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-pug-a-doodle-doo",
        pageLink: { url: "/books/reeve-mcintyre-pug-a-doodle-doo" },
        title: "Pug a doodle doo",
        cover: { src: "/books/rm-cover-pugadoodle.jpg", alt: "Pugs a doodle doo cover" },
        blurb: "Draw yourself in to the world of REEVE &amp; MCINTYRE with this Pug-a-Doodle-Do! Bumper Book of Fun! Pull out your pencils for doodling, adventure comics, funny mash-ups and fabulous flights of fancy&#33;",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-kevin",
        pageLink: { url: "/books/reeve-mcintyre-kevin" },
        title: "The legend of Kevin",
        cover: { src: "/books/rm-cover-kevin.jpg", alt: "The legend of Kevin cover" },
        blurb: "The race to the top of the world&#33; It comes around once in a lifetime - and the prize? Your heart&rsquo;s desire. Shen and Sika can’t resist the chance to win, but competition is fierce. The path to victory is littered with snow trolls, sea monsters and a gang of particularly hungry yetis. But Sika and Shen have something the other contestants don&rsquo;t have. Actually, they have 66 other things - PUGS, to be exact. That&rsquo;s a 264-paw-powered sled. Let the race begin&#33;",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-kevin-biscuit-bandit",
        pageLink: { url: "/books/reeve-mcintyre-kevin-biscuit-bandit" },
        title: "Kevin and the biscuit bandit",
        cover: { src: "/books/rm-cover-kevin-biscuitbandit.gif", alt: "Kevin and the biscuit bandit cover" },
        blurb: "Bumbleford has been rocked by a series of biscuit thefts. All the clues lead straight to the only roly-poly flying pony in town, and Max’s best friend, KEVIN!"
            + "\n" +
            "Max and Kevin are forced to go on the run. Will they find the real culprit before Kevin ends up in pony prison?",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "reeve-mcintyre-kevin-great-escape",
        pageLink: { url: "/books/reeve-mcintyre-kevin-great-escape" },
        title: "Kevin's great escape",
        cover: { src: "/books/rm-cover-kevin.jpg", alt: "The legend of Kevin cover" },
        blurb: "Kevin is a roly-poly flying pony. He has everything he needs - a constant supply of biscuits and his best friend, Max."
            + "\n" +
            "Misty Twiglet is a famous pop star. She has everything she needs except for a perfectly quirky, one-of-a-kind pet. The roly-poly flying pony kind&hellip;"
            + "\n" +
            "When Kevin is kidnapped, Max and his sister daisy come to Kevin's rescue, and there's no way they're giving up on him without a fight."
            + "\n" +
            "FREE KEVIN!",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-grumpycorn",
        pageLink: { url: "/books/sarah-mcintyre-grumpycorn" },
        title: "Grumpycorn",
        cover: { src: "/books/sm-cover-grumpycorn.jpg", alt: "Grumpycorn cover" },
        blurb: "Unicorn’s so excited… he’s going to write the most FABULOUS story in the world!"
            + "\n" +
            "He has a special writing cottage where he can be all alone and find inspiration. What else does he need? Maybe his special pen. And his special tea. And maybe some home-baked cookies. …And an idea."
            + "\n" +
            "NOT the ideas of the friends - Narwhal, Mermaid and Jellyfish - who curiously arrive to find out about this fabulous story and beg to have starring roles… no, not THOSE ideas. Just GO AWAY, everyone!"
            + "\n" +
            "What will it take for Unicorn to write the most fabulous story in the world? Will he simply have a diva meltdown and alienate all his friends?"
            + "\n" +
            "Readers of all ages will get a laugh from these home truths about creativity and friendship.  A perfect give for a child or for that grownup you know who’s always been meaning to write that book or do that certain creative thing they never quite manage to do.",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-dont-call-me-grumpycorn",
        pageLink: { url: "/books/sarah-mcintyre-dont-call-me-grumpycorn" },
        title: "Don't call me grumpycorn",
        cover: { src: "/books/sm-cover-dont-call-me-grumpycorn.jpg", alt: "Grumpycorn cover" },
        blurb: "Unicorn is ready for his BIGGEST ADVENTURE yet&hellip; and his friends are coming, too! But will they all agree on which planet is the most FABULOUS?",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-vern-lettuce",
        pageLink: { url: "/books/sarah-mcintyre-vern-lettuce" },
        title: "Vern & Lettuce",
        cover: { src: "/books/sm-cover-vern-lettuce.jpg", alt: "Vern and Lettuce cover" },
        blurb: "Welcome to Pickle Rye, home of best friends Lettuce the rabbit and Vern the sheep. Join them for baking, birthdays, bunny-sitting and a quest for fame in the Big City!"
            + "\n" +
            "Vern and Lettuce reach for the stars, but there's danger lurking just beneath their feet…",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-dinosaur-police",
        pageLink: { url: "/books/sarah-mcintyre-dinosaur-police" },
        title: "Dinosaur Police",
        cover: { src: "/books/sm-cover-dinosaur-police.jpg", alt: "Dinosaur Police cover" },
        blurb: "Hungry T-Rex on the rampage&#33;"
            + "\n" +
            "Red Alert&#33; How will Dinoville&rsquo;s police squad catch Trevor the T-Rex, who&rsquo;s at the pizza factory, gobbling up all the pizzas meant for the town fair? Inspector Sarah Tops and Seargeant Stig O&rsquo;Saurus race after him in their car, sirens blazing, with Officer Brachio galloping alongside. Trevor turns out to be terribly troublesome, but when he goes charging through a building site - and WET CEMENT - the Dinosaur Police may just be able to bring him to justice&hellip;",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-dinosaur-firefighters",
        pageLink: { url: "/books/sarah-mcintyre-dinosaur-firefighters" },
        title: "Dinosaur Firefighters",
        cover: { src: "/books/sm-cover-dinosaur-firefighters.jpg", alt: "Dinosaur Firefighters cover" },
        blurb: "NEE NAR&#33; NEE NAR&#33;"
                + "\n" +
            "Action stations&#33; Join Dipsy and the Dinoville firefighters as they slide down poles, race to the rescue and untangle a Tyrannosaurus Rex. It&rsquo;s all in a day&rsquo;s work for a Diplodocus&#33; Get set for this funny, fiery, action-adventure companion book to Dinosaur Police.",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-shark-in-the-bath",
        pageLink: { url: "/books/sarah-mcintyre-shark-in-the-bath" },
        title: "There's a shark in the bath",
        cover: { src: "/books/sm-cover-shark-bath.jpg", alt: "There's a shark in the bath cover" },
        blurb: "BIG TEETH! BUBBLES! BATHROOM CHAOS!"
            + "\n" +
        "When a family of sharks pop out the plughole, Dulcie must figure out a way to keep them from eating her up! Cue utter silliness and sea creatures.",
        buyLinks: adventuremiceBuyLinks,
    },
    {
        _type: "book",
        slug: "sarah-mcintyre-new-neighbours",
        pageLink: { url: "/books/sarah-mcintyre-new-neighbours" },
        title: "The New Neighbours",
        cover: { src: "/books/sm-cover-new-neighbours.jpg", alt: "The new neighbours cover" },
        blurb: "Who&rsquo;s this, now??"
            + "\n" +
            "When new neighbours move in to the tower block, what will the other residents of Pickle Rye think? Find out in this hilarious and light-hearted book that is bursting with wonderful characters and humour. Giggle away as you hop, trot and totter down the stairs to share news of the new neighbours and learn just how important it is to leave judgements and prejudices far behind.",
        buyLinks: adventuremiceBuyLinks,
    },
]
