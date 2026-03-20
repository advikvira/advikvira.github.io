export interface NewsUpdate {
  id: string
  title: string
  description: string
  url: string
  date: string // ISO 8601 date string, e.g. "2026-03-17"
}

export const newsUpdates: NewsUpdate[] = [
//   {
//     title: "Georgia Tech press release on high-Ti lunar ilmenite ",
//     url: "https://example.com/research/radiation-shielding",
//     date: "[03/20/2026]",
//   },
  {
    title: "Submitted manuscript to JCP on grain charging simulations",
    url: "https://arxiv.org/abs/2602.17332",
    date: "[02/19/2026]",
  },
  {
    title: "Manuscript accepted in Nature Communications on high-Ti lunar ilmenite",
    url: "https://www.researchsquare.com/article/rs-7190245/v1?redirect=/article/rs-7190245",
    date: "[02/09/2026]",
  },
{
    title: "Successful defense of PhD thesis!",
    date: "[01/09/2026]",
  },
  // Add more updates here as needed
];
