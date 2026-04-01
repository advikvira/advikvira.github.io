// constants/publications.ts

export interface Publication {
  id: number;
  venue: string;
  year: number;
  status: 'published' | 'review' | 'submitted' | 'notpeer';
  title: string;
  authors: string; // use <strong>Name<strong> for bold/accent styling
  url?: string;
  tags?: string[]; // for additional badges like "Conference Proceedings"
}

export const publicationInformation = {
  stats: {
    published: 13,
    underReview: 3,
  },
  publications: [
    {
      id: 1,
      venue: "Journal of Computational Physics",
      year: 2026,
      status: "review",
      title: "g4chargeit: Geant4-based kinetic Monte Carlo simulations of charging in dielectric materials",
      authors: "Gandhi, K. P., <strong>Vira, A. D.</strong>, Farrell, W. M., Simonov, N., Romero-Calvo, A., Orlando, T. M., First, P. N., and Jiang, Z.",
      url: "https://doi.org/10.2139/ssrn.6352017",
    },
    {
      id: 2,
      venue: "Planetary Science Journal",
      year: 2026,
      status: "review",
      title: "Creation of Lunar-Like Rims in Ilmenite using Synthetic Solar Wind",
      authors: "Trivedi, R. S., <strong>Vira, A. D.</strong>, Jones, B. M., Burgess, K. D., Huang, Z., Liu, H., Rane, P., Tian, M., Hirabayashi, M., Orlando, T. M., Jiang, Z., and First, P. N.",
      url: "https://arxiv.org/abs/2509.03334",
    },
    {
      id: 3,
      venue: "AGU Advances",
      year: 2026,
      status: "review",
      title: "Solar Wind-induced Oxygen Vacancies Nucleate Nanophase Iron in Lunar Regolith",
      authors: "Huang, Z., Trivedi, R. S., <strong>Vira, A. D.</strong>, Jiang, Z., First, P. N., Hirabayashi, M., Jones, B. M., and Orlando, T. M.",
    },
    {
      id: 4,
      venue: "Nature Communications",
      year: 2026,
      status: "published",
      title: "Trivalent Titanium in High-Titanium Lunar Ilmenite",
      authors: "<strong>Vira, A. D.</strong>, Burgess, K. D., First, E. C., Tian, M., Eames, K. M., Trivedi, R. S., Dotson, G. K., Kim, D. M., Farr, T. P., Lisabeth, H., Tamura, N., Livernois, E. R., Jones, B. M., Orlando, T. M., Jiang, Z., and First, P. N.",
      url: "https://doi.org/10.1038/s41467-026-69770-w",
    },
    {
      id: 5,
      venue: "Nature Communications",
      year: 2025,
      status: "published",
      title: "Sharp spectroscopic fingerprints of disorder in an incompressible magnetic state",
      authors: "Kim, C., Rathi, S., Zhang, N., Seth, A., Simonov, N. V., Rutherford, A., Chen, L., Zhou, H., Peng, C., Xu, M., Xie, W., <strong>Vira, A. D.</strong>, Tian, M., Ozerov, M., Kimchi, I., Mourigal, M., Smirnov, D., and Jiang, Z.",
      url: "https://doi.org/10.1038/s41467-025-67394-0",
    },
    {
      id: 6,
      venue: "Planetary Science Journal",
      year: 2025,
      status: "published",
      title: "Solar wind sputtering of secondary ions from water-ice-covered regolith analogs",
      authors: "Schaible, M. J., Dotson, G. K., Trivedi, R., <strong>Vira, A. D.</strong>, and Hand, K. P.",
      url: "https://doi.org/10.3847/PSJ/adfc4f",
    },
    {
      id: 7,
      venue: "APL Materials",
      year: 2023,
      status: "published",
      title: "Designing a boron nitride polyethylene composite for shielding neutrons",
      authors: "<strong>Vira, A. D.</strong>, Mone, E. M., Ryan, E. A., Connolly, P. T., Smith, K., Roecker, C. D., Mesick, K. E., Orlando, T. M., Jiang, Z., and First, P. N.",
      url: "https://doi.org/10.1063/5.0163377",
    },
    {
      id: 8,
      venue: "The Astronomical Journal",
      year: 2022,
      status: "published",
      title: "The Airborne Infrared Spectrometer: Development, Characterization, and the 2017 August 21 Eclipse Observation",
      authors: "Samra, J. E., Marquez, V., Cheimets, P., DeLuca, E. E., Golub, L., Hannigan, J. W., Madsen, C. A., <strong>Vira, A. D.</strong>, and Adams, A.",
      url: "https://doi.org/10.3847/1538-3881/ac7218",
    },
    {
      id: 9,
      venue: "JGR: Space Physics",
      year: 2021,
      status: "published",
      title: "Bayesian Model for HOPE Mass Spectrometers on Van Allen Probes",
      authors: "<strong>Vira, A. D.</strong>, Larsen, B. A., Skoug, R. M., and Fernandes, P. A.",
      url: "https://doi.org/10.1029/2020JA028862",
    },
    {
      id: 10,
      venue: "Review of Scientific Instruments",
      year: 2020,
      status: "published",
      title: "Angular scattering of protons through ultrathin graphene foils: Application for time-of-flight instrumentation",
      authors: "<strong>Vira, A. D.</strong>, Fernandes, P. A., Funsten, H. O., Morley, S. K., Yamaguchi, H., Liu, F., and Moody, N. A.",
      url: "https://doi.org/10.1063/1.5134768",
    },
    {
      id: 11,
      venue: "JGR: Space Physics",
      year: 2020,
      status: "published",
      title: "Understanding Mass Resolution of Foil-Based Time-of-Flight Mass Spectrometry",
      authors: "<strong>Vira, A. D.</strong>, Fernandes, P. A., Skoug, R. M., Funsten, H. O., and Reisenfeld, D. B.",
      url: "https://doi.org/10.1029/2020JA027971",
    },
    {
      id: 12,
      venue: "Physical Review A",
      year: 2020,
      status: "published",
      title: "Resonant two-photon spectroscopy of the 2s3d ¹D₂ level of neutral ⁹Be",
      authors: "Cook, E. C., <strong>Vira, A. D.</strong>, and Williams, W. D.",
      url: "https://doi.org/10.1103/PhysRevA.101.042503",
    },
    {
      id: 13,
      venue: "Solar Physics",
      year: 2019,
      status: "published",
      title: "Solar Eclipse Observations from the Ground and Air from 0.31 to 5.5 Microns",
      authors: "Judge, P., Berkey, B., Boll, A., Bryans, P., Burkepile, J., Cheimets, P., DeLuca, E., De Toma, G., Gibson, K., Golub, L., Hannigan, J., Madsen, C., Marquez, V., Richards, A., Samra, J., Sewell, S., Tomczyk, S., and <strong>Vira, A. D.</strong>",
      url: "https://doi.org/10.1007/s11207-019-1550-3",
    },
    {
      id: 14,
      venue: "Review of Scientific Instruments",
      year: 2018,
      status: "published",
      title: "Calibrating an ultra-low expansion cavity for high precision spectroscopy from 630 THz to 685 THz using molecular tellurium lines",
      authors: "Patterson, C., <strong>Vira, A. D.</strong>, Herd, M. T., Hawkins, W. B., and Williams, W. D.",
      url: "https://doi.org/10.1063/1.5008290",
    },
    {
      id: 15,
      venue: "Physical Review Letters",
      year: 2018,
      status: "published",
      title: "Testing Quantum Electrodynamics in the Lowest Singlet State of Neutral Beryllium-9",
      authors: "Cook, E. C., <strong>Vira, A. D.</strong>, Patterson, C., Livernois, E., and Williams, W. D.",
      url: "https://doi.org/10.1103/PhysRevLett.121.053001",
    },
    {
      id: 16,
      venue: "SPIE Proceedings",
      year: 2018,
      status: "published",
      title: "Image stabilization for Airborne Infrared Spectrometer",
      authors: "<strong>Vira, A. D.</strong>, Samra, J., Cheimets, P., DeLuca, E., Fedeler, S., Guth, G., and Marquez, V.",
      url: "https://doi.org/10.1117/12.2319890",
      tags: ["Conference Proceedings"],
    },
  ] as const,
};