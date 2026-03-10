<script setup lang="ts">
import type { FaqItem } from "~~/types/content"

const sanitizeJournalImagePath = (path: string) =>
  path
    .split("/")
    .map((segment) =>
      segment
        .trim()
        .toLowerCase()
        .replace(/[_\s]+/g, "-")
        .replace(/[^a-z0-9.-]+/g, "-")
        .replace(/-+/g, "-")
        .replace(/^-|-$/g, ""),
    )
    .join("/")

const journalImage = (path: string) =>
  `https://images.jabberworks.co.uk/uploads/${sanitizeJournalImagePath(path)}`

const faqHtml = (html: string) => ({
  _type: "html" as const,
  html,
})

const faqVideo = (url: string, title?: string) => ({
  _type: "youtube" as const,
  youtube: { url, title },
})

const faqItems: FaqItem[] = [
  {
    question: "Where can I find your books?",
    answer: [
      faqHtml(`
        <p>You should be able to find my books in bookshops and libraries (and if they don’t have them, please do ask about them!) If you can support a local independent bookshop, that would be brilliant. My local is <strong>First Draft Books</strong> in Bovey Tracey, Devon, and they get 30% commission <a href="https://uk.bookshop.org/lists/reeve-mcintyre-books">when you buy books through this Bookshop.org link</a>.</p>
        <p>Based in Scotland? <strong>The Celtic House</strong> is based on Islay, in the Hebrides, and <a href="https://uk.bookshop.org/lists/adventuremice-series">they have an Adventuremice page here</a>.</p>
        <p>Are you a big comics fan? Then support lovely <strong>Page 45</strong> bookshop in Nottingham, who have a <a href="https://www.page45.com/store/Philip-Reeve-And-Sarah-McIntyre.html">Reeve &amp; McIntyre page here</a>. Give them a boost and say hello from me!</p>
        <p>In the <strong>USA</strong>, <a href="https://bookshop.org/contributors/sarah-mcintyre-c45c6e76-f0b6-4da4-bce8-9d1f76a66385">Bookshop.org</a> is the best place to buy our Adventuremice books.</p>
      `),
    ],
  },
  {
    question: "Besides buying books, how else can I support your work?",
    answer: [
      faqHtml(`
        <p>If you want to help me make more books, what can help most is if you <strong>post reviews</strong> on the major book websites, on your blog and on social media! And <strong>pre-ordering books</strong> is a HUGE help for both the booksellers and me: the sellers can gauge how many books to stock and know there’s interest, and it boosts my first-week sales figures, which mean a lot to the people who make business decisions about how many more books to commission from me.</p>
        <p><img src="${journalImage("2012/01/mcintyre_ideas_comic1.gif")}" alt="Comic about ideas, part one"></p>
        <p><img src="${journalImage("2012/01/mcintyre_ideas_comic2.gif")}" alt="Comic about ideas, part two"></p>
      `),
    ],
  },
  {
    question: "When did you first start drawing?",
    answer: [
      faqHtml(`
        <p><img src="${journalImage("2012/01/sarah_mary_paint.jpg")}" alt="Sarah and Mary painting as children"></p>
        <p>Probably in my high chair, with pureed squash. This is me, painting with my little sister, Mary. But here’s the earliest cartoon with words and pictures that I can remember making. I remember there was a comic strip in our newspaper, <em>The Seattle Times</em>, called <em><a href="http://en.wikipedia.org/wiki/Wizard_of_id">The Wizard of Id</a></em>, and the king in it was always yelling ‘FINK!’ at people.</p>
        <p><img src="${journalImage("2012/01/mcintyre_harold_angels.jpg")}" alt="Early cartoon by Sarah McIntyre"></p>
      `),
    ],
  },
  {
    question: "Where do you work?",
    answer: [
      faqHtml(`
        <p>I work in a studio at the Bovey Paradiso arts centre in Devon, in the town of Bovey Tracey, next to Dartmoor. Here’s my desk. Behind it, you can spot a mixture of my own work and work that inspires me, or simply makes me happy.</p>
        <p><img src="${journalImage("2025/06/Paradiso_studio_desk_wp.jpg")}" alt="Sarah McIntyre's desk at Bovey Paradiso"></p>
        <p>When I first started illustrating, I worked from home, but I really struggled with having my work space ten feet away from where I ate breakfast; it’s great being able to arrive at work in the morning and then leave it and go home. My longest-running studio mate was Gary Northfield, who was a huge help to me, learning about the business, and challenging me to make my drawings more lively and spontaneous. I’ve also shared space with <a href="http://www.vivianeschwarz.co.uk">Viviane Schwarz</a>, <a href="http://whodunnknit.com">Lauren O’Farrell</a>, <a href="http://littlewhitebird.com/">Ellen Lindner</a> and <a href="http://elissaelwick.co.uk/">Elissa Elwick</a>, and learned a lot from all of them in different ways. Now Gary’s actually my publisher, having started up <a href="http://bog-eyed-books.com/books.html">Bog Eyed Books</a>, and reprinting <em>Vern &amp; Lettuce</em>!</p>
        <p><img src="${journalImage("2018/07/gary_studio.jpg")}" alt="Gary Northfield in the studio"></p>
      `),
    ],
  },
  {
    question: "Do you prefer making books by yourself or working with a writer?",
    answer: [
      faqHtml(`
        <p>I like doing both! When I write my own story, it means I get to decide exactly what I’m going to draw. But when I work with other people, sometimes we spark new ideas off each other and the ideas are better than ones I might have come up with myself. I love doing Comics Jams, where one person draws a panel, then other person draws a panel, and neither person knows where the story is going to go. You can see a fun example of one I did with my friend <a href="http://scribblehound.com/">David O’Connell</a>, called <a href="http://www.jabberworks.co.uk/comics.php"><em>AIRSHIP</em></a>. And here’s how we made our picture book, <em><a href="http://www.jampires.com">Jampires</a></em>:</p>
        <p><img src="${journalImage("2012/01/sarahdave.gif")}" alt="Sarah McIntyre and David O'Connell"></p>
        <p><img src="${journalImage("2012/01/jampires_comic.jpg")}" alt="Jampires process comic"></p>
        <p>The other fun thing about working with a co-author is getting to run around together in silly costumes. <a href="http://philip-reeve.com/">Philip Reeve</a> is always up for that! Here’s our moon landing for our book <em>Cakes in Space</em>:</p>
        <p><img src="${journalImage("2012/01/ReeveMcIntyre_Cakes_banner_lores2.jpg")}" alt="Philip Reeve and Sarah McIntyre in Cakes in Space costumes"></p>
      `),
    ],
  },
  {
    question: "How do you make your comics?",
    answer: [
      faqHtml(`
        <p>It depends if it’s a simple, scrappy comic or something very polished. But here’s how I draw a comic like <em>Vern and Lettuce</em>:</p>
        <p><img src="${journalImage("2012/01/howimakecomics1.gif")}" alt="How I make comics step one"></p>
        <p><img src="${journalImage("2012/01/howimakecomics2.gif")}" alt="How I make comics step two"></p>
        <p><img src="${journalImage("2012/01/howimakecomics3.gif")}" alt="How I make comics step three"></p>
        <p>Here’s a <a href="http://jabberworks.livejournal.com/686575.html">special article I wrote on my blog</a> if you’re totally new to comics but want to find out more about making them!</p>
      `),
    ],
  },
  {
    question: "Who are your biggest influences?",
    answer: [
      faqHtml(`
        <p>Thousands and thousands of other artists have inspired my work, but the top three might be <a href="http://en.wikipedia.org/wiki/Maurice_Sendak">Maurice Sendak</a>, <a href="http://www.satoshiland.com">Satoshi Kitamura</a> and <a href="http://en.wikipedia.org/wiki/Posy_Simmonds">Posy Simmonds</a>. Funnily enough, all three of them are creators whose work slides between the categories of picture books and comics.</p>
      `),
    ],
  },
  {
    question: "What is your favourite comic?",
    answer: [
      faqHtml(`
        <p><em><a href="http://en.wikipedia.org/wiki/Calvin_and_hobbes">Calvin and Hobbes</a></em> by Bill Watterson! The comic strip ran every day in <em>The Seattle Times</em>, in black and white, and in colour on Sundays. I loved it as a kid, I love it now, it works on lots of different levels.</p>
      `),
    ],
  },
  {
    question: "What would your advice be to someone who wants to get picture books or comics published?",
    answer: [
      faqHtml(`
        <p>Don’t wait until you think you’re good enough to get published, start making lots of books and comics right now. By making books, you’ll learn how they work, and you’ll get a little better each time. And being able to finish a book is very important, it’s good to get into the habit. Keep your early books simple, they don’t have to be 200-page graphic novels. They might be quite small, and as short as eight pages, a couple folded pieces of paper. Here are some of the little books I’ve made through the years:</p>
        <p><img src="${journalImage("2012/01/sarah_minibooks1.jpg")}" alt="A selection of Sarah McIntyre mini books"></p>
        <p>When you’ve finished your little book, you can make copies of it and give them to your friends, sell them as small-press comics fairs, or use them as business cards. Be sure to put your name and website address somewhere on it. It doesn’t have to be a fancy website, you can get a free blog and start posting artwork and comic strips as you make them.</p>
        <p><img src="${journalImage("2012/01/hypercom_wksp8-1.jpg")}" alt="Workshop image about making little books"></p>
        <p><a href="http://www.comicconventions.co.uk/uk-and-ireland-comic-conventions-list-2015/">Here’s a list of UK comics festivals</a> if you think you might want to get a table and try selling some of your work. See if there’s one in your area and then look up its website for details:</p>
        <p><img src="${journalImage("2012/01/comiccon_list.jpg")}" alt="UK comics conventions list"></p>
        <p>A few of the festivals are worth travelling a long distance to go to, such as <a href="http://thoughtbubblefestival.com/">Thought Bubble</a> in Leeds and the <a href="http://www.comicartfestival.com/">Lakes International Comic Art Festival</a> in Kendal. Consider sharing a table with a friend to cut costs. Try just going along to it the first year to get a sense of the festival’s layout and keep an eye out for the best way to display your work.</p>
        <p>Get familiar with the children’s section or the comics section of your local bookshop. You’d be amazed by how many people want to get into children’s books but haven’t read any that have been published in the last five years. Perhaps keep a reading diary with notes about why you like certain books and don’t like others. Read lots of other books outside the area you want to work. Watch films and animations and think about the different ways people tell stories in them.</p>
      `),
    ],
  },
  {
    question: "Why do you wear such big hats?",
    answer: [
      faqHtml(`
        <p>If I wear a big hat, I can hide a little elf under it who tells me what to say on stage if I forget my lines. So if I say something silly, it’s her fault, not mine. It makes me less nervous; I think, no one is looking at me, they are all looking at my hat! I keep track of my hats <a href="http://www.pinterest.com/mcintyre1000/my-hats/">on a Pinterest page</a>.</p>
        <p><img src="${journalImage("2012/01/sarah_hats.jpg")}" alt="A line-up of Sarah McIntyre's hats"></p>
      `),
    ],
  },
  {
    question: "Did you study at art college?",
    answer: [
      faqHtml(`
        <p><img src="${journalImage("2012/01/moscow_times_presscard.jpg")}" alt="Moscow Times press card"></p>
        <p>I didn’t go to art college right away, I first studied Russian literature at Bryn Mawr College, in the USA. (I’m originally from Seattle.) I’m glad I didn’t start off studying art directly after graduating from school, because it was during my study-abroad year in Moscow (and the second year I took off university to work at <a href="http://www.themoscowtimes.com/"><em>The Moscow Times</em></a>) that I fell in love with Russian art and illustration, and that has been a big influence on me. Working as a copy editor at a newspaper also helped me think more about words, and improved my writing skills. When I moved to London, I took evening classes in illustration for a couple years and made lots of little books for myself. I was in my early 30s when I started my Master’s degree in Illustration at Camberwell art college, with excellent course leader Janet Woolley. Having a big gap after my undergraduate studies was very helpful for me because by the time I got to art college, I had a big treasure chest stored up in my head of adventures I’d had and things I’d learned, and I was very focused about the kinds of questions I wanted to ask about making books as a business.</p>
        <p>If you’re trying to pick a course right now, remember that it’s all about the teachers, not the reputation of the college. If a teacher is good, sets frequent assignments and sets regular times to give you feedback, the course will be good; if the teacher doesn’t care, the course will feel like a big waste of money. Don’t be overawed by a tutor who feels distant but seems cool and trendy; they need to care about you and have a certain amount of human warmth to them.</p>
        <p>Check out my blog post <a href="http://jabberworks.livejournal.com/650671.html">Should you go to Art College?</a></p>
      `),
    ],
  },
  {
    question: "Can you give me any drawing tips?",
    answer: [
      faqHtml(`
        <p>Try to draw something every day. Setting yourself challenges can be very inspiring.</p>
        <p>* Keep a sketchbook or a drawing blog.</p>
        <p>* Draw a room in your house. Try drawing it in various different ways: realistically, or play around with the perspectives like <a href="http://en.wikipedia.org/wiki/David_Mckee">David McKee</a>, Satoshi Kitamura or <a href="http://en.wikipedia.org/wiki/Mini_Grey">Mini Grey</a> might do. (Look at their books to see what I mean.) Next, draw a building in your neighbourhood. Try drawing it different ways, focusing on different things: the signage, the windows, the roof, the colours, the textures, the lines, the people walking in front of it. If you emphasise any of these things, the pictures will look very different.</p>
        <p>* Draw an animal. Draw that animal on a bike. Draw it sitting on your head. (Animals always look funnier sitting on your head.)</p>
      `),
    ],
  },
  {
    question: "What are some of the drawing challenges you’ve set for yourself?",
    answer: [
      faqHtml(`
        <p><strong>Tree-a-Day</strong>: One year I decided I was going to get up early five mornings a week and each morning, draw one of the <a href="http://jabberworks.livejournal.com/tag/trees">trees</a> in Greenwich Park. I didn’t manage it every single day, but I did it far more often than if I hadn’t set myself a goal. A friend, <a href="http://www.philipreeve.blogspot.co.uk/">Philip Reeve</a>, was doing the same challenge on Dartmoor, and it was motivating to know that if I drew my picture for the day, we could compare notes on our drawings. We had so much fun doing it, that now we’re making books together!</p>
        <p><img src="${journalImage("2012/01/greenwich_tree_sketch1.jpg")}" alt="Greenwich tree sketch"></p>
        <p><img src="${journalImage("2012/01/greenwich_tree_lino1.jpg")}" alt="Greenwich tree lino print"></p>
        <p><strong>Hourly Comic</strong>: Hundreds of people do this on <a href="http://hourlycomic.com/">a set day</a> every year, but you can do it anytime. Draw a comics panel, or a set of panels, about your day, one for every hour you are awake. Scan it, post it online, and turn it into a little book.</p>
        <p><img src="${journalImage("2012/01/hourly_comic.gif")}" alt="Hourly comic example"></p>
        <p><strong>Draw yourself as a teenager</strong>: <a href="http://davario.livejournal.com/30861.html">Lots of people</a> tried out this Internet meme when it was posted. Alternative versions: If you’re not a teenager yet, draw how you imagine you might be as a teenager. Draw yourself as an old person, how you imagine you will be. Draw yourself as a kid.</p>
        <p><img src="${journalImage("2012/01/teenage_self.gif")}" alt="Teenage self portrait challenge"></p>
        <p>Here’s a <a href="https://www.booktrust.org.uk/books/writing-tips/writing-tips-for-teens/authors-tips/sarah-mcintyres-writing-workshop-making-a-comics-jam/">four-video Booktrust series</a>, leading you through a whole Comics Jam session packed full of top tips for making comics. You can watch this yourself, or use it to teach a class! This is video No.2:</p>
      `),
      faqVideo("https://www.youtube.com/watch?v=hXN42udkVq4", "Booktrust Comics Jam"),
      faqHtml(`
        <p>If you’re on Twitter, you can join me and lots of other people in the Virtual Studio – <a href="https://twitter.com/StudioTeaBreak">@StudioTeaBreak</a> – where we meet up on hashtags for fun drawing challenges. All ages and abilities welcome!</p>
        <p><img src="${journalImage("2012/01/virtual_studio_banner.jpg")}" alt="Virtual Studio banner"></p>
      `),
    ],
  },
  {
    question: "Where can I find out more about the #PicturesMeanBusiness campaign?",
    answer: [
      faqHtml(`
        <p>Here’s the website: <a href="http://www.picturesmeanbusiness.com">picturesmeanbusiness.com</a> The main idea is to encourage publishers, writers, teachers and book lovers to credit illustrators for their work by showing them that when we do this, <em>everyone</em> wins. You can follow the discussion on Twitter on the <a href="https://twitter.com/search?src=typd&amp;q=%23picturesmeanbusiness">#PicturesMeanBusiness</a> hash tag.</p>
        <p><img src="${journalImage("2015/05/pmb_soa_mtg_sign.gif")}" alt="Pictures Mean Business sign"></p>
      `),
    ],
  },
  {
    question: "Can you point me toward any online courses?",
    answer: [
      faqHtml(`
        <p>Yes! I teach this online Curtis Brown Creatives course with my Jampires co-author David O’Connell. You can take the <a href="https://www.curtisbrowncreative.co.uk/course/illustrating-a-childrens-picture-book/">illustration track</a> with me, the <a href="https://www.curtisbrowncreative.co.uk/course/writing-a-childrens-picture-book/">writing track</a> with Dave, or do a <a href="https://www.curtisbrowncreative.co.uk/course/writing-and-illustrating-a-childrens-picture-book/">track that combines both</a> writing and illustrating. Together with CBC, Dave and I came up with the initial videos, teaching material and homework challenges, and the team run the course every term, with a qualified moderator coaching you and giving feedback on the forums. Check the <a href="https://www.curtisbrowncreative.co.uk/creative-writing-courses/">CBC website</a> to find out when the next course starts!</p>
        <p><img src="${journalImage("2019/08/CurtisBrowncourse_graphic2.jpg")}" alt="Curtis Brown Creatives course graphic"></p>
      `),
    ],
  },
  {
    question: "What suggestions would you give for putting together a portfolio?",
    answer: [
      faqHtml(`
        <p>These days websites are just as important, probably more important than an actual portfolio. But it’s good to have both. Put in your absolute favourite work, and the kind of work you want to make more of. Make sure it’s relevant to the kind of work you’re looking for. If you’re trying to get work making books for very young children, the editor or art director will want to see how you draw children, animals, monsters, pirates, that sort of thing. Your portfolio should be constantly evolving as you make new things. Don’t get stuck in a rut pushing the same pictures or the same story around for years and years, always be working on the next idea.</p>
      `),
    ],
  },
  {
    question: "If I’m a writer, do I need to find an illustrator to get my story published?",
    answer: [
      faqHtml(`
        <p><img src="${journalImage("2012/01/WAYB2012.gif")}" alt="Writers' &amp; Artists' Yearbook graphic"></p>
        <p><strong>NO</strong>. This is a big myth, and agents and editors will back me up on this. There are lots of amazing illustrators out there, but fewer good writers, so if your story is very good, the right publisher may be interested in it. Editors will know lots of good illustrators with whom they’re comfortable working, and they prefer to pair up a new writer with one of their own illustrators. That said, if you and a friend really spark off each other and want to work together, there’s nothing to stop you from submitting your joint work. But if you’re just wandering around looking for an illustrator, you’d do better to focus on your writing and submit it by itself.</p>
        <p>The <a href="http://www.writersandartists.co.uk/"><em>Writers’ &amp; Artists’ Yearbook</em></a> gives excellent guidelines for submission. It’s updated yearly, and it’s important to get the most recent edition because people move around a lot in publishing. If you can’t afford to buy it, you can almost always find it at your local library. There’s one that encompasses broader publishing houses and another that’s more specifically focused on children’s book publishing contacts and advice.</p>
      `),
    ],
  },
  {
    question: "Where can I learn more about getting into publishing?",
    answer: [
      faqHtml(`
        <p><img src="${journalImage("2012/01/scbwi-1.jpg")}" alt="SCBWI logo"></p>
        <p>I used to recommend the British branch of the <a href="https://www.scbwi.org/uk-regions-2025">Society of Children’s Book Writers &amp; Illustrators</a> (SCBWI), but it’s been going through a difficult patch with its headquarters in the USA, taken away entirely from its previous organisers with their history of events and network. So I wouldn’t recommend paying any subscription money to the new coordinators until the dust settles. (<em>This is a recent edit – Aug 2025 – and I’ll continue with what this paragraph said earlier…</em>) You can learn about the industry at their talks and conferences, join critique groups, and meet editors, agents, art directors, publishers, and other creatives at their social events. An editor is much more likely to pay attention to something you’ve submitted if they’ve met you already, face to face, at a social or book launch. Writing and illustrating can be a lonely job, and it’s hugely helpful to meet other like-minded people, and be able to share experiences and ask questions of each other.</p>
        <p><img src="${journalImage("2012/01/SoA_logo.gif")}" alt="Society of Authors logo"></p>
        <p>If you’ve already had at least one book published, the <a href="http://www.societyofauthors.org">Society of Authors</a> is great if you need legal advice and contract help, and socialising with people who have been in the industry for a long time. The SoA champions book-related political causes that help us be able to keep doing our jobs, so they’re well worth supporting. Historically they’ve been more geared toward writers than illustrators, but that’s changing, and they’re keen to get more feedback from illustrators and how they can help us.</p>
        <p><a href="https://jabberworks.livejournal.com/590358.html">Article: <em>On author promotion – 8 ways not to be a spammer</em></a></p>
      `),
    ],
  },
  {
    question: "Do I need an agent to get published?",
    answer: [
      faqHtml(`
        <p>No, you don’t need an agent. But I have a literary agent (not an illustration agent) named <a href="http://unitedagents.co.uk/jodie-marsh">Jodie Hodges</a>, and I love working with her because she makes sure my contracts are sound and organises my payments, so I don’t have to spend time chasing up clients. She also helps me keep track of my schedule and deadlines, and advises me if I’m taking on too much work or not enough.</p>
        <p>If you’re having a hard time getting work, an agent probably won’t help you get it. You really need to be able to sell yourself these days. If you’re getting so much work that you can’t handle it by yourself, an agent may be what you need to help sort you out. If you can secure a promise from a publisher for a first book deal, most agents will be much more interested in taking you on than if you’ve never had an offer.</p>
      `),
    ],
  },
  {
    question: "What’s your No.1 tip for doing children’s events?",
    answer: [
      faqHtml(`
        <p><img src="${journalImage("2012/01/imagine_southbank.jpg")}" alt="Imagine Festival Southbank"></p>
        <p>Remember that events aren’t really about you at all: children are just as interested in being seen by you as they are in seeing you. The more interactive you can make your presentation and the more attention you can give to people in the audience, the more excited they’ll be about what you’re presenting.</p>
        <p><img src="${journalImage("2012/01/wigtown.jpg")}" alt="Wigtown event photo"></p>
        <p>Be sure to check out my <a href="http://jabberworks.livejournal.com/637011.html">25 tips for hosting an awesome Author Visit</a>.</p>
      `),
    ],
  },
  {
    question: "Can you give me any tips for finding my illustration ‘style’?",
    answer: [
      faqHtml(`
        <p>Style isn’t something to aim for, style is something other people might start to notice about your work as you keep experimenting and trying new things, until you find ways of working that most resonate with you. Don’t worry about style, just do whatever it takes to make the story you’re illustrating communicate the most effectively. <a href="https://jabberworks.livejournal.com/835972.html">Here’s an article I wrote about this.</a></p>
      `),
    ],
  },
  {
    question: "I’m a creative person and I think making picture books might be a good way to express that. But I need to find some inspiration and motivation. Where should I start?",
    answer: [
      faqHtml(`
        <p>Do you want to make books at your own pace, just for fun, with no deadlines and total freedom to write and draw whatever you like? Or do you have a lot of energy, want to go into publishing books, and have the drive to learn what it takes to have a good head for business? There’s nothing wrong at all with the first option. Making books for pleasure is one of the best things in life.</p>
        <p>You may have a story burning inside of you that you’d like to illustrate, or be in love with a fairy tale and want to explore it in pictures. Or you may want to keep an illuminated journal, or travel diary. Perhaps you make comics about the day-to-day things that happen to you. Self publishing may be the way forward if this is how you work. That can be as simple as making photocopies and stapling them together. Another option is to post instalments on your blog.</p>
        <p>I wouldn’t recommend trying to earn a living by making picture books and comics unless you’re so obsessed with them that it’s almost unhealthy. To be a full-time professional illustrator, you can’t just like drawing, you need to be the sort of person who is always drawing, who can’t help drawing.</p>
      `),
      faqVideo("https://www.youtube.com/watch?v=KB_h2VpFFUI", "Making picture books and comics"),
    ],
  },
  {
    question: "I disagree with some of the things you’ve written here. What do you think about that?",
    answer: [
      faqHtml(`
        <p>That’s fine! There are no such things as hard and fast rules in publishing. You need to find out what’s right for you, and what works. Keeping a good sense of humour about things and being kind to people will get you as far in this line of work as having a good portfolio. People who work in the children’s book industry, particularly people who work in picture books, are almost all genuinely nice, caring people. It’s one of the reasons I love my job.</p>
      `),
    ],
  },
  {
    question: "I have a great idea for a story. Would you be interested in illustrating it?",
    answer: [
      faqHtml(`
        <p>A lot of people ask me this, and while I’m honoured to be asked, right now I’d have to say no. You can get in touch with my agent about it if you like, but my publishers have already put me together with some writers I love working with. I’m doing some new book projects with close friends, and I’m also writing more and more of my own books, so there aren’t any gaps in my schedule for several years. I’ve written a <a href="http://jabberworks.livejournal.com/744387.html">more detailed article about that here</a>:</p>
        <p><img src="${journalImage("2012/01/dear_writer_sm.jpg")}" alt="Dear writer article image"></p>
      `),
    ],
  },
  {
    question: "Can I send you my book idea or text for you to look over and give me feedback?",
    answer: [
      faqHtml(`
        <p>Unless I know you very well or you’re taking part in one of my workshops, I’m afraid I won’t be able to do this. Even if I do know you, I might be too busy, and please be understanding and don’t push me about it. Critiquing manuscripts can even be dangerous for me, because it opens me up to future allegations of copying if I publish something similar.</p>
        <p>I suggest you join a critique group. Contact <a href="http://www.britishscbwi.org/">SCBWI</a> about finding a group in your area or join an online E-critique group. Be prepared to critique other people’s work, too; you need to give something as well as take, particularly if you’re not paying anyone to do it.</p>
        <p>One useful tip for people thinking about submitting picture books is that there’s a standard format which is most cost-effective for printing. You don’t have to follow this 32-page template, but if you do, your books is far more likely to get published. Keep it in mind when you’re putting together your story.</p>
        <p><img src="${journalImage("2012/01/thumbnail_template.gif")}" alt="32-page thumbnail template"></p>
        <p>Here are my first thumbnail roughs for <em>Morris the Mankiest Monster</em>. I left thinking about the cover design and endpapers until later, but I’d already worked with my editor and designer to figure out exactly how Morris would look.</p>
        <p><img src="${journalImage("2012/01/morris_thumbs.jpg")}" alt="Morris the Mankiest Monster thumbnail roughs"></p>
        <p>For more info about this, read my blog post <a href="http://jabberworks.livejournal.com/631059.html">Top Tip for Putting Together a Picture Book</a>.</p>
      `),
    ],
  },
  {
    question: "What should I do during that long wait between sending out my book idea to a publisher and hearing back? I’m getting frustrated.",
    answer: [
      faqHtml(`
        <p>As tempting as it is to have big tired flop, this isn’t waiting time, this should be your most active time. If publishers are thinking they might be interested in your book, there’s a good chance they’ll be researching you, to find out what kind of web presence you have, and what other work you’ve done. I’d say, don’t sit around, get busy on the next project, and let your energy and excitement be in some way visible to them, either through a blog, going to publishing events, putting on an exhibition, whatever it is that pushes your creativity forward.</p>
      `),
    ],
  },
  {
    question: "Can you put me in touch with [such and such] illustrator?",
    answer: [
      faqHtml(`
        <p>Have you tried looking at his or her website first? Usually people put contact details on their websites. If they don’t put them there, there’s a good chance they’d rather have you go through their agent or publisher, and you can find their contact details on their websites.</p>
      `),
    ],
  },
  {
    question: "I get intimidated by all these other amazing illustrators out there, how can I ever compete with them?",
    answer: [
      faqHtml(`
        <p>This is an active choice you’re going to have to make: when you see a wonderful piece of artwork, does it fill you with joy, or rage and jealousy? If you choose to see other artists as the competition, and let their successes burn away at you, you’re always going to be unhappy; there will always be someone better or more successful than you.</p>
        <p>You can choose to see other artists as esteemed colleagues, not enemies, and take pleasure in their work instead of thinking it always reflects badly on your own work. When you take the attitude that we illustrators are all working together, you’ll discover friendship and community; illustrators care about each other, and help each other.</p>
        <p>But as a young illustration student, don’t be a spoiled brat and <em>expect</em> free help from professionals, be humbly grateful; if they go out of their way to assist you, you need to be sure to thank them and let them know you appreciate them taking time for you out of their busy work schedule.</p>
      `),
    ],
  },
  {
    question: "You say you’re too busy to answer my long list of questions for my university project, but whenever I look at your blog, you always seem to be running around having a lark. When do you get any work done?",
    answer: [
      faqHtml(`
        <p>I gave up sleeping years ago. No, really, if I sit all day in my studio answering e-mails, I won’t have any fun left in me to put into the books I make and they’ll be as stagnant as day-old diner coffee. In that sense, getting out and about and playing around with silly pictures I’m not intending to publish is very much part of my work.</p>
        <p>I once heard the writer Neil Gaiman say in a graduation speech that he came to a point in his career when he realised he’d stopped being a professional writer and had become a professional e-mailer. I know just what he means! I’d much rather come up with my own new story than spend ages on e-mail trying to convince you to make your own. I’ve given you links to helpful resources, and if you want to do it, just DO IT. (Oh, and keep reading <a href="http://jabberworks.livejournal.com/">my blog</a>; I’m always adding little bits and bobs you might find useful.)</p>
      `),
    ],
  },
  {
    question: "My Illustration course leader says I won’t pass unless I send out a list of survey questions to an illustrator. I know you won’t do those, but may I copy and paste these answers into my homework and pretend you said them directly to me?",
    answer: [
      faqHtml(`
        <p>Absolutely – I give you total permission!</p>
      `),
    ],
  },
  {
    question: "Do you have any tips for contacting writers and illustrators with questions?",
    answer: [
      faqHtml(`
        <p>Yes, make sure if you’re asking questions, that they’re ones you can’t find by looking at their websites or blogs, or by looking things up on Google. Customise your questions, don’t send them your generic homework sheet to fill out, they’re not going to do your homework for you.</p>
        <p>Don’t tell them you’re a Huge Fan but then they can see you don’t even follow them on social media. Illustrators are busy people, so if they take time out of their work to answer your questions, be sure to respond with a short note, saying thank you. (<em>Not</em> ‘ty’... that’s a childish slap in the face, you can take the time out of your busy schedule to type out ‘thank you’.)</p>
      `),
    ],
  },
  {
    question: "What are your views on art at Artificial Intelligence (AI)?",
    answer: [
      faqHtml(`
        <p>I’ve written an article about it here: <a href="https://jabberworks.livejournal.com/921354.html"><em>AI &amp; Copyright: why does it matter?</em></a></p>
      `),
    ],
  },
  {
    question: "How can I promote my books without being a spammer?",
    answer: [
      faqHtml(`
        <p><a href="http://jabberworks.livejournal.com/590358.html">Some thoughts on author promo, over on my blog.</a></p>
      `),
    ],
  },
  {
    question: "Where can I find out about international editions of your books? And if I’m interested in translating your work, who should I contact?",
    answer: [
      faqHtml(`
        <p><img src="${journalImage("2012/01/foreign_editions.jpg")}" alt="Foreign editions of Sarah McIntyre books"></p>
        <p>My books are published in lots of languages, particularly my books with Philip Reeve! For our books together, I’ve listed the translators on the web page for each book, and you can look them up on the foreign publisher websites or online retailers may supply them. I don’t deal directly with translation rights; if you want to discuss translating, you’ll need to get in touch with my publishers.</p>
        <p>I don’t have a lot of input into how the books are reworked, but it’s always fascinating to see my author copies come through the post. You can read blog articles on two of our translators: <a href="http://jabberworks.livejournal.com/592393.html">Sandra Hessels (Dutch)</a> and <a href="http://jabberworks.livejournal.com/727487.html">Örkény Ajkay (Hungarian)</a>.</p>
      `),
    ],
  },
  {
    question: "Where would you like me to buy your books?",
    answer: [
      faqHtml(`
        <p>If you can support independent bookshops and booksellers, that would be great! I know not everyone has a good local bookshop, but some have good shipping services, such as Page 45 in Nottingham, who ship worldwide. (<a href="https://www.page45.com/store/Philip-Reeve-And-Sarah-McIntyre.html">Here’s a page they’ve created specially to link to all my books they sell</a>, and each book comes with an in-depth review by owner Stephen Holland.)</p>
        <p><img src="${journalImage("2012/01/page_45_RMpage.jpg")}" alt="Page 45 Reeve and McIntyre page"></p>
      `),
    ],
  },
  {
    question: "Can I bake a cake in the shape of one of your characters and send you a photo?",
    answer: [
      faqHtml(`
        <p>Yes, please!</p>
        <p><img src="${journalImage("2012/01/morris_cake_musson.jpg")}" alt="Morris the Mankiest Monster cake by Bevis Musson"></p>
        <p><em>Morris the Mankiest Monster cake by Bevis Musson</em></p>
      `),
    ],
  },
]

useSeoMeta({
  title: "FAQs",
  description:
    "Find quick answers about Sarah’s books, resources, events, and how to explore the site.",
})
</script>

<template>
  <main class="mx-auto max-w-4xl px-6 py-16 sm:py-20">
    <header class="max-w-2xl">
      <h1 class="mt-3 text-4xl tracking-tight text-gray-950 sm:text-5xl">
        Frequently asked questions
      </h1>
      <p class="mt-4 text-base leading-7 text-gray-600 sm:text-lg">
        Quick answers about the books, classroom resources, events, and how the site is
        organised.
      </p>
    </header>

    <section class="mt-10 sm:mt-12" aria-label="Frequently asked questions">
      <FaqAccordion :items="faqItems" :single="true" />
    </section>
  </main>
</template>
