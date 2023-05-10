interface Project {
  name: string;
  description: string;
  stack: string[];
  closed?: boolean;
  emoji?: string;
  url?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "DUTCalendarTracker",
    description:
      "DUTCalendarTracker can provide easy access to classes from the university website. Get notifications about tomorrow's classes, timetable changes, etc.",
    stack: [
      "CapRover",
      "Docker",
      "TypeScript",
      "grammY",
      "Prisma",
      "BullMQ",
      "Redis",
      "NestJS",
      "ReDoc",
      "JSDom",
      "PostgreSQL",
    ],
    emoji: "📆",
    url: "https://dut-api.lwjerri.ml",
  },
  {
    name: "PoruchBot",
    description:
      "PoruchBot was developed especially for a volunteer organization. This bot performs a key function in the branch of getting help for people who have had to change their place of residence because of the war. This bot asks for basic information about the person, validates the data, searches the databases, and prevents possible cheating of the organization from re-registering. This is a very high-load bot.",
    stack: ["TypeScript", "CapRover", "Docker", "grammY", "Prisma", "BullMQ", "Redis", "PostgreSQL"],
    emoji: "🍾",
  },
  {
    name: "SimonBot",
    description:
      "A discord bot that can track user orders and show some additional info about orders. Management of Discord servers, notification of new videos on YouTube channels, a tier system based on messages and user activity, fun commands, full moderation suite, real-time table with user data, position rentals, and more.",
    stack: ["discord.js", "Prisma", "Canvacord", "JSDom", "TypeScript", "PostgreSQL"],
    emoji: "🦾",
  }
];

export const load = (() => {
  return { projects };
})