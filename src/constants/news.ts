export interface NewsUpdate {
  id: string
  title: string
  description: string
  url: string
  date: string
}

export const newsUpdates: NewsUpdate[] = [
  {
    title: "Check out our brief on The Conversation about our Nat. Comm. manuscript!",
    url: "https://theconversation.com/new-study-measures-titanium-in-apollo-rock-to-uncover-moons-early-chemistry-278721",
    date: "[03/27/2026]",
  },

  {
    titleParts: [
      { text: "Georgia Tech story on ", url: null },
      { text: "trivalent Ti lunar ilmenite manuscript in Nat. Comm.", url: "https://www.nature.com/articles/s41467-026-69770-w" },
    ],
    url: "https://cos.gatech.edu/news/38-billion-year-old-titanium-clue-sheds-new-light-moons-early-chemistry",
    date: "[03/27/2026]",
  },
  {
    titleParts: [
      { text: "CLEVER", url: "https://clever.research.gatech.edu/the-team/" },
      { text: " was recognized for outstanding achievement in Georgia Tech's Institute Awards!", url: null },
    ],
    url: "https://research.gatech.edu/2026-georgia-tech-research-awards",
    date: "[03/25/2026]",
  },
  {
    titleParts: [
      { text: "KSCO manuscript in Nat. Comm.", url: "https://www.nature.com/articles/s41467-025-67394-0" },
      { text: " received the 2026 Sigma Xi Best Paper Award", url: null },
    ],
    url: "https://bpb-us-e1.wpmucdn.com/sites.gatech.edu/dist/0/283/files/2026/03/2026_SigmaXi_Research_Award_Winner.pdf",
    date: "[03/23/2026]",
  },
  {
    title: "Submited manuscript on grain charging simulations to J. Comput. Phys.",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6352017",
    date: "[02/19/2026]",
  },
  {
    title: "Manuscript accepted in Nat. Comm. on trivalent Ti lunar ilmenite 🎉",
    url: "https://www.nature.com/articles/s41467-026-69770-w",
    date: "[02/09/2026]",
  },
  {
    title: "Successfully defended my PhD!",
    date: "[01/09/2026]",
  },
];
