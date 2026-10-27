// Blog articles. Add a `date` (e.g. "2026-11-01") to a post when you publish it.
export type Post = {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  date?: string;
  body: { h?: string; p: string[] }[];
};

export const readingTime = (post: Post) =>
  Math.max(1, Math.round(post.body.flatMap((b) => b.p).join(" ").split(/\s+/).length / 200));

export const posts: Post[] = [
  {
    slug: "communication-is-an-engineering-skill",
    title: "Communication is an engineering skill",
    summary: "Why clear writing, listening and explaining matter as much as code, and the habits I practise.",
    tags: ["Communication", "Teamwork"],
    body: [
      {
        p: [
          "Software is built by people, and many of the problems that slow a project down are misunderstandings, not bugs. A requirement heard differently by two people produces two different features. That is why I treat communication as a technical skill, and why it is one of the strengths I want to bring to my first role.",
        ],
      },
      {
        h: "Three habits I practise",
        p: [
          "Ask one more question before starting. Restating a task in my own words and checking it with the person who asked saves hours later.",
          "Explain the why, not only the what. A good commit message, README or comment says why a decision was made, so the next person does not have to guess.",
          "Match the explanation to the audience. A classmate, a lecturer and a non-technical friend each need a different version of the same idea. Practising presentations is the fastest way I know to find the one sentence that makes an idea land.",
        ],
      },
      {
        h: "Listening is the other half",
        p: [
          "Good communication is not only speaking clearly. In teamwork and code review it means treating feedback as information about the code, not about me, and asking what the other person actually saw.",
          "I am still learning, but I would rather say \"I do not understand this yet\" early than stay quiet and build the wrong thing.",
        ],
      },
    ],
  },
  {
    slug: "websocket-hijacking-explained",
    title: "How WebSocket hijacking works, and how to prevent it",
    summary: "A plain-language look at cross-site WebSocket hijacking (CSWSH) and the handshake checks that stop it.",
    tags: ["Security", "WebSocket", "Networks"],
    body: [
      {
        h: "What makes WebSockets different",
        p: [
          "A WebSocket starts as a normal HTTP request that asks the server to upgrade the connection. After this handshake, the browser and server exchange messages in both directions over one long-lived connection. Because the handshake is an ordinary request, the browser attaches cookies to it, including the session cookie of the site you are logged in to.",
        ],
      },
      {
        h: "Cross-site WebSocket hijacking",
        p: [
          "The browser's same-origin policy does not stop a page on another site from opening a WebSocket to your site. If the server identifies users only by cookie and never checks where the handshake came from, a malicious page can open a connection that carries the victim's session. That page can then send messages as the victim and read the replies. This attack is called cross-site WebSocket hijacking, or CSWSH.",
        ],
      },
      {
        h: "How to defend",
        p: [
          "Check the Origin header during the handshake and reject origins you do not expect.",
          "Do not rely on cookies alone. Include an unpredictable token, like a CSRF token, in the handshake and verify it on the server.",
          "Set session cookies with the SameSite attribute so they are not sent on cross-site requests.",
          "Treat message content as untrusted. Encode it before inserting it into a page, because unsanitised messages lead to cross-site scripting (XSS).",
        ],
      },
      {
        h: "Why this matters to me",
        p: [
          "My undergraduate thesis tested these problems, along with handshake manipulation, using Burp Suite Professional in the PortSwigger Web Security Academy. I also wrote a Python scanner with asyncio and websockets that automates the detection of five major vulnerabilities. Only test systems you own or have permission to test.",
        ],
      },
    ],
  },
  {
    slug: "choosing-a-data-structure",
    title: "How I choose a data structure",
    summary: "A short checklist for picking between arrays, hash maps, stacks, queues, heaps and trees.",
    tags: ["Data Structures", "Algorithms"],
    body: [
      {
        h: "Start with the operations, not the structure",
        p: [
          "Before picking anything I list what the program must do most often: look up by key, keep order, insert in the middle, or find the smallest item. The structure follows from that list.",
        ],
      },
      {
        h: "A short cheat sheet",
        p: [
          "Arrays give fast access by index, but inserting in the middle means shifting elements.",
          "Hash maps give average constant-time lookup by key, with no useful ordering.",
          "Stacks and queues fit last-in-first-out and first-in-first-out work, such as undo history or task scheduling.",
          "Heaps (priority queues) give quick access to the smallest or largest item.",
          "Balanced trees keep data sorted and allow ordered search in logarithmic time.",
        ],
      },
      {
        h: "Check with a small example",
        p: [
          "I write the five or six main operations on paper with a tiny input, estimate how many steps each takes, and only then write code. Big-O is a tool for comparing options, not a score. Data structures and algorithms are a core part of my degree, and this habit keeps my solutions simpler.",
        ],
      },
    ],
  },
];
