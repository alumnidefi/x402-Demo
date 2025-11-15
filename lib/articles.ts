export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  tag: string;
  badge?: string;
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
    body: `
## Arrival Under Ash
Smoke curls above the ridgeline as we roll in. The settlement is a patchwork of terraced bunkers, each lit by lantern flame, each watching the river corridor from the Friedmann Ridge.

## Tactical Consensus
Today’s council meets in the northern bunker. Scouts report a convoy crawling along the old interstate. Every snare and sensor is in place, but the real battle is for attention. Whoever can tell the story first controls the narrative.

## The Final Note
An hour later the convoy turns. The watchman on the tower radios a terse confirmation, the kind only a steady hand can send. This dispatch is for the readers who step over the rope line.
`,
  },
];
