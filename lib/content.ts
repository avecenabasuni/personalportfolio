export const sectionContent = {
  writing: {
    description:
      "I write about what I build. If something took me a while to figure out, I document it.",
  },
  currentlyWorkingOn: {
    description: "Always building something. Here's what's in progress right now.",
  },
  about: {
    paragraphs: [
      "I'm Avecena, an Electrical Engineer from Universitas Indonesia who somehow ended up obsessed with making cloud systems reliable and observable. The transition from debugging microcontrollers to instrumenting distributed systems felt natural. The same instinct that makes you add a serial monitor to an Arduino makes you instrument an API endpoint.",
      "Outside of work I'm lifting at the gym, on the minisoccer or football pitch on weekends, and occasionally getting humbled by Dota 2. I think being a team sport person shapes how I work too. Observability is fundamentally a team problem. It only works if everyone on the team can see what's happening, not just the person who built the dashboard.",
      "Right now I'm looking for an SRE role where I can go deep on reliability engineering, incident response, and building observability that engineers actually use. Jakarta based. Open to remote and relocation.",
    ],
  },
  experience: {
    title: "The roles changed.",
    description:
      "The instinct to understand how systems behave did not.",
  },
  technicalSkills: {
    title: "Tools I reach for in production.",
  },
  cta: {
    title: "Ready to talk?",
    description:
      "I'm currently open to SRE and cloud infrastructure roles. If your team is dealing with alert noise, slow root cause analysis, or monitoring that nobody trusts, I'd like to hear about it.",
    disclaimer: "No commitment. Just a conversation.",
  },
} as const;
