/**
 * ============================================================================
 * SITE CONTENT — Carol A. Anderson, MS, LMFT
 * ============================================================================
 * All copy and factual content lives here so Carol (or a developer) can update
 * words, prices and links in one place without touching layout code.
 *
 * ITEMS MARKED "CAROL TO VERIFY" ARE PLACEHOLDERS — they are not published as
 * fact anywhere on the site, and must be confirmed before launch.
 * ============================================================================
 */

/* ------------------------------------------------------------------------- */
/* Practice details                                                           */
/* ------------------------------------------------------------------------- */

export const PRACTICE = {
  name: "Carol A. Anderson",
  credentials: "MS, LMFT",
  fullName: "Carol A. Anderson, MS, LMFT",
  license: "MFT29432",
  licenseNote: "Licensed Marriage and Family Therapist, State of California",
  phoneDisplay: "(559) 484-2078",
  phoneHref: "tel:+15594842078",
  /**
   * CAROL TO VERIFY — the site needs a real, monitored email address.
   * Currently a clearly labelled placeholder used by the contact form.
   */
  email: "hello@carolandersontherapy.com",
  street: "6777 North Willow Avenue, Suite 139",
  cityLine: "Fresno, CA 93710",
  neighborhood: "North Fresno · Hoover neighborhood",
  /**
   * CAROL TO VERIFY — replace with actual published office hours.
   */
  hours: [
    { day: "Monday – Thursday", time: "9:00 AM – 5:00 PM" },
    { day: "Friday", time: "By appointment" },
    { day: "Saturday / Sunday", time: "Closed" },
  ],
  psychologyToday:
    "https://www.psychologytoday.com/us/therapists/carol-a-anderson-fresno-ca/1713137",
  headway: "https://headway.co/",
  /** Deep-link used for the embedded map. */
  mapEmbed:
    "https://www.google.com/maps?q=6777+North+Willow+Avenue,+Suite+139,+Fresno,+CA+93710&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=6777+North+Willow+Avenue+Suite+139+Fresno+CA+93710",
  yearsInPractice: 40,
} as const;

export const CRISIS = {
  line: "If you are in crisis or need immediate help, call or text 988 or dial 911.",
  short: "Call or text 988 · Dial 911",
} as const;

export const DISCLAIMER =
  "This website is for general information only. It is not therapy, and it does not create a therapeutic relationship. A therapeutic relationship begins only when we meet and agree to work together. This site does not provide emergency services.";

/* ------------------------------------------------------------------------- */
/* Navigation                                                                 */
/* ------------------------------------------------------------------------- */

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "About Carol", to: "/about" },
  { label: "Couples Therapy", to: "/couples-therapy" },
  { label: "Singles & Dating", to: "/singles" },
  { label: "Individual & EMDR", to: "/individual-therapy" },
  { label: "Workshops", to: "/workshops" },
  { label: "Fees & Insurance", to: "/fees" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

/* ------------------------------------------------------------------------- */
/* Home — hero                                                                */
/* ------------------------------------------------------------------------- */

export const HERO = {
  eyebrow: "Fresno, California · In-person & virtual",
  /** Each word carries its own rise + blur reveal. `em` words get the gold underline. */
  headline: [
    { text: "You", em: false },
    { text: "matter", em: true },
    { text: "here.", em: false },
    { text: "And", em: false },
    { text: "so", em: false },
    { text: "does", em: false },
    { text: "your", em: false },
    { text: "story.", em: true },
  ],
  subheadline:
    "Couples and individuals find clarity, connection and hope — because your hardest season can become your turning point.",
  rotatingLead: "A calm space for",
  rotatingWords: ["couples", "individuals", "new beginnings", "healing"],
  primaryCta: { label: "Book Your Free 15-Minute Consultation", to: "/contact" },
  secondaryCta: { label: "How I Help", to: "/#how-i-help" },
  proofLine: "40+ years of guiding people home to themselves and each other.",
  videoUrl:
    "https://res.cloudinary.com/du3lmc1dx/video/upload/17759816-hd_1920_1080_24fps_uf0qqu.mp4",
  /** Original Cloudinary player embed, kept for reference / easy swap:
   *  https://player.cloudinary.com/embed/?cloud_name=du3lmc1dx&public_id=17759816-hd_1920_1080_24fps_uf0qqu
   */
  poster: "images/office-room-1.jpg",
} as const;

/* ------------------------------------------------------------------------- */
/* Home — empathy                                                             */
/* ------------------------------------------------------------------------- */

export const EMPATHY = {
  eyebrow: "You're in the right place",
  heading: "Whatever brought you here, you don't have to explain it perfectly.",
  paragraphs: [
    "Maybe you and your partner have started to feel more like roommates than lovers. Maybe the same argument keeps circling back, and neither of you knows how to step out of it.",
    "Maybe you're carrying something heavy — grief, worry, an old hurt — that you have never once said out loud.",
    "Maybe you're tired of the same pattern with the same kind of person, and you're starting to wonder if something in you needs to change first.",
  ],
  pivot: "Here is what I have learned in forty years of sitting with people: challenges are often a catalyst for growth. Not proof that something is wrong with you. A sign that something in you is ready.",
  pullQuote: "I would be honored to join you.",
  image: "images/hands-tea.jpg",
  imageAlt:
    "Two people's hands resting gently together over two warm cups of tea on a wooden table",
} as const;

/* ------------------------------------------------------------------------- */
/* Home — three service cards                                                 */
/* ------------------------------------------------------------------------- */

export type ServiceKey = "couples" | "singles" | "individual";

export const SERVICES: {
  key: ServiceKey;
  title: string;
  short: string;
  detail: string;
  image: string;
  alt: string;
  to: string;
  cta: string;
  hover: string;
}[] = [
  {
    key: "couples",
    title: "Couples Therapy & Workshops",
    short:
      "For couples who still love each other but have forgotten how to reach one another.",
    detail:
      "Imago Relationship Therapy helps you stop fighting about the fight and start understanding the deeper needs underneath it. You'll learn to speak in a way your partner can actually hear — and to listen in a way that softens rather than defends.",
    image: "images/couple-walking.jpg",
    alt: "A couple walking hand in hand along a soft path in warm evening light",
    to: "/couples-therapy",
    cta: "Explore couples therapy",
    hover:
      "What to expect: no taking sides, no blame. We slow things down, name the pattern you're both stuck in, and give you tools you can use the same night.",
  },
  {
    key: "singles",
    title: "Singles' Therapy & Workshops",
    short:
      "For people who keep choosing the same person in a different body — and want to choose differently.",
    detail:
      "Based on Imago's work for singles, this is about understanding your own pattern, healing what draws you to it, and becoming the kind of partner a lasting relationship can actually grow in.",
    image: "images/singles-window.jpg",
    alt: "A woman sitting by a sunny window with a warm drink, looking out thoughtfully",
    to: "/singles",
    cta: "Explore singles' work",
    hover:
      "What to expect: honest, kind reflection on your relationship history, and practical clarity about what you actually want — before you go looking for it again.",
  },
  {
    key: "individual",
    title: "Individual Therapy & EMDR",
    short:
      "For anxiety, grief, trauma, self-esteem and the weight you've been carrying alone.",
    detail:
      "Some hurts live in the body and don't respond to talking alone. EMDR is a gentle, well-researched approach that helps your brain finally process what it has been holding — so the past can stop running the present.",
    image: "images/journal-window.jpg",
    alt: "A person writing in a journal beside a sunny window with a cup of tea",
    to: "/individual-therapy",
    cta: "Explore individual therapy",
    hover:
      "What to expect: your pace, always. We build safety first, then work with the memories and beliefs that keep you stuck, at a speed that never overwhelms you.",
  },
];

/* ------------------------------------------------------------------------- */
/* Home — Carol's approach (4 steps)                                          */
/* CAROL TO VERIFY: confirm or adjust these four steps to match her process.  */
/* ------------------------------------------------------------------------- */

export const PROCESS = [
  {
    step: "01",
    title: "A free 15-minute consultation",
    body:
      "We talk. You ask whatever you need to ask. I listen. There is no cost, no pressure and no commitment — it is simply a chance to see whether I feel like a fit for you.",
  },
  {
    step: "02",
    title: "Discover your roadblocks",
    body:
      "Together we name what is really happening — the old patterns, the unspoken hurts, the things you both keep politely stepping around.",
  },
  {
    step: "03",
    title: "Learn practical tools",
    body:
      "You will leave our sessions with something you can actually use: ways to listen without defending, to speak without wounding, and to repair after a hard moment.",
  },
  {
    step: "04",
    title: "Create lasting connection",
    body:
      "The goal is never simply to stop arguing. It is to build something that genuinely feels like a fit for each other — and to keep growing into it.",
  },
];

/* ------------------------------------------------------------------------- */
/* About Carol                                                                */
/* ------------------------------------------------------------------------- */

export const ABOUT = {
  eyebrow: "About Carol",
  heading: "I believe the person in front of me is the most important person in the room.",
  intro: [
    "I'm Carol. For more than forty years I have had the great privilege of sitting with people — couples, individuals, families — during the seasons that ask the very most of them.",
    "I came to this work slowly and honestly. I completed my master's degree at California State University, Fresno in 1986, trained in EMDR in 1992, and became a certified Imago Relationship Therapist in 1994. But the credentials are only the frame. The real work happens in the space between two people who are willing, just for a moment, to try again.",
    "I do not have a script for you. What I have is a quiet room, forty years of pattern recognition, and a stubborn belief that people can change — that a marriage can soften, that a wound can close, that a person who has been unkind to themselves for decades can learn to be kind.",
  ],
  closing:
    "If you are standing at the edge of something hard, you do not have to take the whole step today. You only have to make one phone call.",
  portraitAlt: "REPLACE WITH CAROL'S REAL PHOTO — portrait of Carol A. Anderson",
  portraitCaption: "REPLACE WITH CAROL'S REAL PHOTO",
  timeline: [
    {
      year: "1986",
      title: "Master of Science (60 unit), CSU Fresno",
      body:
        "Graduate training in marriage and family therapy at California State University, Fresno.",
    },
    {
      year: "1992",
      title: "EMDR Institute, Level 2 trained",
      body:
        "Trained in Eye Movement Desensitization and Reprocessing through the EMDR Institute — a gentle, evidence-based approach for trauma and distressing memories.",
    },
    {
      year: "1994",
      title: "Certified Imago Relationship Therapist",
      body:
        "Advanced Therapist, Couples Workshop Presenter and Singles Workshop Presenter — a certification she has held and deepened for more than three decades.",
    },
    {
      year: "Today",
      title: "40+ years of practice in Fresno",
      body:
        "Working with adults and elders, couples, individuals and groups — in person in Fresno, and virtually when that serves you better.",
    },
  ],
  credentials: [
    { value: 40, suffix: "+", label: "Years in practice" },
    { value: 1994, suffix: "", label: "Certified Imago Therapist", display: "Advanced" },
    { value: 1992, suffix: "", label: "EMDR trained, Level 2", display: "Level 2" },
    { value: 0, suffix: "", label: "Licensed MFT, California", display: "MFT29432" },
  ],
  endorsement: {
    quote:
      "Highly respected experienced LMFT, known for her professionalism, compassion and strong commitment to providing quality care.",
    author: "Tineka Murphy-Burgess, LCSW",
    role: "Professional peer endorsement",
  },
  officeImages: [
    {
      src: "images/office-room-1.jpg",
      alt: "Carol's Fresno therapy room with warm morning light, a gray loveseat and caramel leather chairs arranged in a circle",
    },
    {
      src: "images/office-room-2.jpg",
      alt: "A wall of framed diplomas and certificates above a mahogany secretary desk in Carol's office",
    },
    {
      src: "images/office-room-3.jpg",
      alt: "A calm corner of Carol's office with a bookshelf, gray sofa and leather armchairs in soft window light",
    },
    {
      src: "images/office-room-4.jpg",
      alt: "Carol's bright therapy room with tall windows, a console table with plants and comfortable seating",
    },
  ],
} as const;

/* ------------------------------------------------------------------------- */
/* Specialties & clients                                                      */
/* ------------------------------------------------------------------------- */

export const SPECIALTIES = [
  "Anxiety",
  "Codependency",
  "Family conflict",
  "Grief",
  "Marital and premarital",
  "Relationship issues",
  "Self-esteem",
  "Spirituality",
  "Stress",
  "Trauma and PTSD",
  "Women's issues",
];

export const CLIENTS = [
  "Adults",
  "Elders (65+)",
  "Individuals",
  "Couples",
  "Groups",
];

/* ------------------------------------------------------------------------- */
/* Fees & insurance                                                           */
/* ------------------------------------------------------------------------- */

export const FEES = {
  intro:
    "Therapy is an investment in your life and your relationships, and I want the cost to be clear before you ever sit down. No surprises, no hidden add-ons.",
  table: [
    {
      service: "Individual therapy",
      length: "50-minute session",
      price: "$100",
      note: "90-minute sessions available and optional.",
    },
    {
      service: "Couples therapy",
      length: "50-minute session",
      price: "$135",
      note: "90-minute sessions are optional but suggested — many couples find the longer session gives them room to actually finish a conversation.",
    },
    {
      service: "Free consultation",
      length: "15 minutes",
      price: "No cost",
      note: "By phone or email, before you commit to anything.",
    },
  ],
  paymentMethods: [
    "Cash",
    "Check",
    "Credit card",
    "Apple Pay / Apple Cash",
    "Venmo",
    "PayPal",
  ],
  slidingScale: {
    body:
      "I keep a limited number of sliding-scale openings so that cost is never the only reason someone goes without care. If the full fee is not possible for you right now, please say so — I would rather have the conversation than have you carry this alone.",
    cta: { label: "Ask about the sliding scale", to: "/contact" },
  },
  headway: {
    body:
      "I am in network with Headway, a simple service that checks your insurance benefits for you — usually in a couple of minutes — and confirms your copay before your first visit.",
    steps: [
      "Go to Headway and search for Carol A. Anderson, MS, LMFT in Fresno, CA.",
      "Join Headway (it is free to join) and complete the short benefits check.",
      "Request Carol specifically, and Headway will confirm your coverage and copay.",
      "We then book your first session and your free 15-minute consultation.",
    ],
  },
} as const;

/* ------------------------------------------------------------------------- */
/* Workshops                                                                  */
/* CAROL TO VERIFY: no dates are published here — Carol confirms each event   */
/* before it goes live.                                                       */
/* ------------------------------------------------------------------------- */

export const WORKSHOPS = [
  {
    title: "Getting the Love You Want",
    subtitle: "Couples workshop, based on the Imago work of Harville Hendryx and Helen LaKelly Hunt",
    format: "Weekend format · In person in Fresno",
    body:
      "A deeper, structured experience for couples who want more than an hour a week. Over the course of the workshop you will practise the conversations that are hardest to have at home — in a room where nobody is keeping score.",
    includes: [
      "Understanding the unconscious pattern that chose your partner",
      "The Carousel and other Imago dialogues, guided step by step",
      "Rebuilding appreciation after years of frustration",
      "Practical tools you take home the same day",
    ],
    image: "images/office-room-3.jpg",
    alt: "A calm therapy room prepared for a small group workshop",
  },
  {
    title: "Keeping the Love You Find",
    subtitle: "Singles workshop, based on the Imago work for people not yet in a relationship",
    format: "Single or multi-session · In person in Fresno",
    body:
      "For people who are tired of repeating the same relationship. This workshop looks honestly at what draws you in, what keeps you there, and what would need to change for the next one to last.",
    includes: [
      "Naming your own relationship pattern without shame",
      "What you are actually looking for (it is rarely what you list)",
      "Healing the unfinished business that chooses for you",
      "Becoming a partner a lasting love can grow in",
    ],
    image: "images/office-room-4.jpg",
    alt: "A bright, welcoming room set for a small singles workshop",
  },
];

/* ------------------------------------------------------------------------- */
/* FAQ                                                                        */
/* ------------------------------------------------------------------------- */

export const FAQS = {
  "What is Imago therapy?": [
    "Imago Relationship Therapy is a way of working with couples developed by Harville Hendryx and Helen LaKelly Hunt. Its central idea is simple and, for most people, a relief: you did not accidentally choose your partner, and you are not crazy for having chosen them.",
    "We are each drawn — unconsciously — to a partner who will grow us, someone who carries both the qualities we love and the very habits that frustrate us most. Imago helps couples see that pattern clearly, understand the childhood needs underneath it, and turn the fight they keep having into a conversation that actually connects them.",
    "The work is built around structured dialogues: you speak, your partner mirrors back what they heard, and for the first time in a long time, both people feel heard. It is warm, practical, and it works. The couple's book behind the method is Getting the Love You Want; the singles' book is Keeping the Love You Find.",
  ],
  "What is EMDR?": [
    "EMDR stands for Eye Movement Desensitization and Reprocessing. It is a well-researched therapy most often used for trauma and PTSD, and it also helps with anxiety, grief, phobias and painful beliefs about yourself.",
    "Sometimes talking about something difficult is not enough, because the memory is stored in a part of the brain that words cannot easily reach. EMDR uses gentle bilateral stimulation — usually eye movements or tapping — while you hold a memory in mind, which helps your brain finally process what it has been holding onto.",
    "It is not hypnosis, and you are never made to relive anything before you are ready. We build safety and resources first, always, and you set the pace throughout.",
  ],
  "How does the free 15-minute consultation work?": [
    "You call or email, and we find fifteen quiet minutes. You tell me, in whatever order it comes out, what is going on. I ask a few questions so I understand what you are looking for. You ask me anything you want — about how I work, what it costs, whether I think I can help.",
    "There is no charge and no obligation. It exists so that you do not have to book a full session with a stranger and hope for the best. If I am not the right person for you, I will tell you honestly and help you think about what might be.",
  ],
  "Do you take insurance?": [
    "I am in network with Headway, a service that verifies your benefits for you and confirms your copay before your first appointment. You join Headway, request me by name, and they handle the details.",
    "I am also happy to work with you as a private-pay client. Many people prefer that for reasons of privacy and flexibility, and some plans cover less than you might expect. I can help you think it through either way.",
  ],
  "Do you offer virtual sessions?": [
    "Yes. My practice is mostly in person at my office in Fresno, and I offer virtual sessions when that serves you better — for travel, illness, caregiving, or simply because it is easier to be honest from your own couch.",
    // CAROL TO VERIFY: confirm which platform is used for virtual sessions and whether any additional fee applies.
    "Virtual sessions are held on a secure, private platform and work on a phone, tablet or computer.",
  ],
  "How long are sessions, and how often will we meet?": [
    "Individual and couples sessions are 50 minutes. For couples, a 90-minute session is optional but suggested — most couples find that an hour simply is not long enough to finish one real conversation.",
    "Most people start weekly and then move to every other week as things settle. There is no contract and no minimum number of sessions; you are free to stop whenever you choose.",
  ],
  "I have never been to therapy before. What actually happens?": [
    "The first session is mostly listening. I ask about what brought you in, a little about your history, and what you would like to be different. You are never required to disclose more than you want to.",
    "By the end of that first session you will usually leave with at least one thing that makes sense of what you have been carrying. That is the beginning of hope, and it is where the work starts.",
  ],
  "What if my partner does not want to come?": [
    "This is one of the most common questions I am asked, and the answer is gentler than you might fear. Come on your own. Individual work often changes a relationship more than people expect, and it is far better than waiting for permission you may never get.",
    "If your partner is hesitant, you are both welcome to use the free 15-minute consultation to ask me anything, with no pressure to book.",
  ],
  "Is what I say confidential?": [
    "Yes. What you share in therapy is confidential and protected by California law. The exceptions are the standard legal ones — a risk of serious harm to yourself or someone else, suspected abuse of a child or vulnerable adult, or a court order. I will always tell you before I take any action.",
  ],
  "How do I know if you are the right therapist for me?": [
    "Honestly? You will feel it in the first fifteen minutes. That is exactly why the consultation is free.",
    "The research is clear that the single biggest factor in whether therapy helps is the relationship between you and your therapist — not the technique. So I would rather you test the fit first than commit to a year of sessions with someone you do not feel safe with.",
  ],
};

/* ------------------------------------------------------------------------- */
/* Reflections / Resources                                                    */
/* CAROL TO VERIFY: these are drafts. Publish only what Carol approves.       */
/* ------------------------------------------------------------------------- */

export const REFLECTIONS = [
  {
    title: "The argument you keep having is rarely about the dishes",
    excerpt:
      "Most recurring fights are not about the surface subject at all. They are about something older and softer — being unseen, being left, not mattering. Here is how to start hearing the real request underneath the complaint.",
    date: "Draft — not yet published",
    readingTime: "5 min read",
    tag: "Couples",
  },
  {
    title: "You are not too broken for a good relationship",
    excerpt:
      "Many people arrive in my office convinced they are unlovable in some specific, unfixable way. In my experience the opposite is closer to true: the people who worry most about being too much are usually the ones who never learned they were enough.",
    date: "Draft — not yet published",
    readingTime: "4 min read",
    tag: "Singles",
  },
  {
    title: "What I want people to know before their first EMDR session",
    excerpt:
      "A plain-language walk-through of what EMDR actually feels like, what it does not feel like, and why we spend the first part of our work simply building safety.",
    date: "Draft — not yet published",
    readingTime: "6 min read",
    tag: "EMDR",
  },
  {
    title: "Grief does not arrive on a schedule",
    excerpt:
      "There is no correct timeline for loss, and no correct way to do it. What helps is usually smaller and kinder than people expect — permission, company, and one small ordinary thing at a time.",
    date: "Draft — not yet published",
    readingTime: "5 min read",
    tag: "Grief",
  },
];

/* ------------------------------------------------------------------------- */
/* Optional content                                                           */
/* NOTE: Carol has asked that faith, religion or spirituality-as-religion not
/* be named on this site unless she requests it. The "Spirituality" entry in
/* SPECIALTIES above is part of her listed clinical specialties and is
/* therefore retained, but no religious language is used anywhere in the copy.
/* ------------------------------------------------------------------------- */
