export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  badge?: string;
  price: string;
  body: string;
};

export const premiumArticles: Article[] = [
  {
    slug: "when-the-flames-fall",
    title: "When the Flames Fall: Nights on the Front Range",
    excerpt:
      "A midnight patrol through the Front Range slopes reveals how local militias are rewriting the playbook on supply lines.",
    date: "November 2025 // Field Dispatch",
    tag: "Feature",
    badge: "Pay-per-article",
    price: "$0.01",
    body: `
## Arrival Under Ash
Smoke curls above the ridgeline as we roll in. The settlement is a patchwork of terraced bunkers, each lit by lantern flame, each watching the river corridor from the Friedmann Ridge.

## Tactical Consensus
Todays council meets in the northern bunker. Scouts report a convoy crawling along the old interstate. Every snare and sensor is in place, but the real battle is for attention. Whoever can tell the story first controls the narrative.

## The Final Note
An hour later the convoy turns. The watchman on the tower radios a terse confirmation, the kind only a steady hand can send. This dispatch is for the readers who step over the rope line.
`,
  },
  {
    slug: "coach-norvell-hotseat",
    title: "Coach Norvell on the Hotseat",
    excerpt:
      "Inside the locker room, donor dinners, and tactical shifts that could cost Norvell his seat if the next game goes sideways.",
    date: "December 2025 // Coachroom",
    tag: "Spotlight",
    badge: "Premium Drop",
    price: "$5.00",
    body: `
## Locker Room Pressure
Norvell's statements are measured, but the tension between staff and boosters is wide enough to rewrite headlines. We hear from insiders about late-night huddles and guard rotations that have already raised eyebrows.

## Recruiting Heat
Five-star prospects are leaning toward other programs, yet this dispatch tracks the vault of calls and the secret workout loops keeping them in play.

## Season on the Line
One more slip and the board is expected to move. This long-form report breaks down the $1.00 toll and why that price matters when the conference is holding its breath.
`,
  },
  {
    slug: "recruiting-roundup",
    title: "Recruiting Roundup: The Quiet Sprint",
    excerpt:
      "A rapid-fire thread of new recruits, midnight dinners, and the analytics the coaches arent sharing with the press.",
    date: "December 2025 // Recruiting Desk",
    tag: "Recruiting",
    price: "$0.05",
    body: `
## Finishing Touches
Our crew catalogues the latest offers, midnight recruit dinners, and the intangible traits the floor staff is tracking.

## Eyes on the Rim
Coaches rate discipline, shot arcs, and poise; we share the charts they dont post elsewhere.
`,
  },
  {
    slug: "basketball-headlines",
    title: "Basketball Headlines: January Flash",
    excerpt:
      "Five short takes from across the conference: injuries, defense shifts, and the sneaky stats that have bettors talking.",
    date: "January 2026 // Headlines",
    tag: "Headlines",
    price: "$0.05",
    body: `
1. Injuries are creeping into the second unit, forcing lineup resets.
2. A hush-hush three-point clinic has shifted the leagues efficiency rate by 4% this week.
3. Defense-first teams are posting higher possession values after the new analytics board update.
4. Overseas transfers are lining up for spring workouts with our staff.
5. Momentum is currency; this flash report shows who is hoarding it.
`,
  },
  {
    slug: "youtube-strategy-session",
    title: "YouTube Strategy Session",
    excerpt:
      "A paywalled video wrap capturing the locker room tape, boardroom leaks, and the narrative the program doesnt want you to see.",
    date: "February 2026 // Video Briefing",
    tag: "Video",
    price: "$0.05",
    body: `
## Studio Signal
We distill the 12-minute clip into frames, highlight the plays, and mark the moments the boosters were debating mid-month.

## Narration Notes
Each overlay is shot through the x402 facilitator so you can pay once and loop the footage from any device.
`,
  },
];
