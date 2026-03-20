import { Space } from "lucide-react";

export const researchInformation = {
  picture: "/attachments/overview-v2.png",
  general: `My research interests lie at the intersection of materials science, 
            planetary science, and space physics, approached from a physics perspective 
            using both computational and experimental methods.`,
  topics: [
    {
      id: "Lunar Geoscience",
      title: "Microscopic Characterization of Lunar Materials",
      sections: [
        {
          label: "Overview",
          text: `The Moon serves as a natural achive of early geological history of the 
                  Earth-Moon systen. Unaltered lunar material offers a window into the events 
                  that occured nearly four billion years ago. Using advanced electron microscopy 
                  and spectroscopy techniques, we can characterize the structure and composition 
                  of lunar minerals at an atomic level to uncover chemical environment present on 
                  the ancient Moon.`,
        },
        {
          label: "Key Result",
          text: `We studied the mineral ilmenite from an Apollo 17 rock and found that the ilmenite itself 
                 is enriched in titanium. We find that the excess
                 titanium is found in a trivalent valence state as opposed to the tetravalent state. 
                 The reduced valence state only occurs in oxygen-poor environments, which we estimated 
                 using the abundance of trivalent titanium.`,
          links: [{ href: "https://www.researchsquare.com/article/rs-7190245/v1?redirect=/article/rs-7190245", label: "Nature Communicatinos (2026) - high-Ti Ilmenite", external: true }],
        },
      ],
      methods: ["Focused Ion Beam", "Transmission Electron Microscopy", "STEM/EELS", "Hyperspy", "Noise Reduction Techniques"],
      support: "STEM/EELS @ U.S. Naval Research Laboratory.<br> NASA Solar System Exploration Research Institute (SSERVI): ",
      link: { href: "https://clever.research.gatech.edu/", label: "Center for Lunar Environment and Volatile Exploration Research (CLEVER)", external: false },
    },    

    {
      id: "Space Weathering",
      title: "Surface Modification Processes on the Moon",
      sections: [
        {
          label: "Topic 1",
          text: `Solar wind ions and electrons continuously bombard the surface of airless bodies,
                 resulting in structural and compositional alterations. We irradiate terrestrial ilmenite to simulate the solar wind and characterize the 
                 induced formation of nanophase iron (npFe) and its associated microscopic changes 
                 using electron microscopy.`,
          links: [{ href: "https://arxiv.org/abs/2509.03334", label: "PSJ [In Review] — Creation of npFe in ilmenite", external: true}],
        },
        {
          label: "Topic 2",
          text: `As charged particles irradiate the surface of airless bodies, the minerals accumulate 
                  the charge and can eventually lead to a respulsive force between mineral grains.  
                  We simulate the charge accumulation within intergrain micro-cavities using a kinetic 
                  Monte Carlo approach by connecting the microscopic scattering events to the macroscopic 
                  surface charge. `,
          links: [{ href: "https://arxiv.org/abs/2602.17332", label: "JCP [In Review] — Grain Scale Simulations", external: true}],
        },
      ],
      methods: ["Ion Irradiation","Electron Microscopy", "S/TEM", "EELS", "Hyperspy", "Monte Carlo","SDTrimSP", "SRIM/TRIM", "Geant4", "Kinetic Monte Carlo"],
      support: "NASA Solar System Exploration Research Institute (SSERVI): ",
      link: { href: "https://clever.research.gatech.edu/", label: "Center for Lunar Environment and Volatile Exploration Research (CLEVER)", external: false },
    },
    {
      id: "Material Solutions",
      title: "Radiation Shielding Composites",
      sections: [
        {
          label: "Overview",
          text: `Our goal is to advance the development of radiation shielding materials by incorporating 
                exploring polymers suitable for additive manufacturing, optimizing shielding structures, 
                and investigating radiation-induced damage. To specifically address:`,
          items: [["How can shielding composites be optimized to reduce the radiation exposure of occupational workers?"],
                  ["How do the manufactured composites compare with the simulation predictions?"], 
                  ["How does the associated radiation damage affect the structural and optical properties of the composites?"]],
          
        },
        {
          label: "Key Result",
          text: `We simulated composite shielding materials incorporating hexagonal boron 
                 nitride (hBN) into a high-density polyethylene (HDPE) matrix and evaluated 
                 their neutron attenuation performance using Geant4 Monte Carlo simulations. 
                 Optimized hBN/HDPE composites reduced th effective dose by up to 72× compared 
                 to aluminum shields. Improvements are relevant to both astronauts in space exploration
                 and terrestrial environments such as medical facilities.`,
          links: [{ href: "https://doi.org/10.1063/5.0163377", 
                  label: "APL Mater. (2023) — hBN/HDPE shielding composites", external: true }],
        },
      ],
      support: "Former NASA Solar System Exploration Research Institute (SSERVI) called the Radiation Effects on Volatiles and Exploration of Asteroids and Lunar Surfaces (REVEALS)",
      methods: ["Monte Carlo", "Neutron transport", "Geant4", "Additive Manufacturing", "hBN/HDPE Composites", "Vacancy Defects", "Molecular Dynamics"],
      
    },
    {
      id: "Space Instrumentation",
      title: "Time-of-Flight Mass Spectrometry",
      sections: [
        {
          label: "Overview",
          text: `Space plasma instruments typically use a time-of-flight (TOF) mass spectrometers 
                  to measure the compositions of charge particles in solar, space, and planetary science. 
                  A noteable TOF instrument is the NASA Van Allen Probes instrument called HOPE (Helium, Oxygen, Proton, and Electron), 
                  developed at Los Alamos National Laboratory, which successfully measured the particle 
                  fluxes in Earth's radiation belts. `,
        },
        {
          label: "Impact",
          text: `We developed models to predict TOF mass spectrometer resolution and characterized ultrathin 
                  graphene foils for next-generation detectors, improving calibration fidelity for magnetospheric 
                  particle measurements while exploring graphene’s potential. `,
          links: [{ href: "https://doi.org/10.1029/2020JA028862", label: "JGR (2021) — Bayesian model of HOPE", external: true },
                 { href: "https://doi.org/10.1029/2020JA027971", label: "JGR (2020) — Resolution of TOF Mass Spectrometry", external: true },
                 { href: "https://doi.org/10.1063/1.5134768", label: "RSI (2020) — Angular Scattering of Graphene Foils", external: true }],
        },
      ],
      methods: ["TOF Instruments", "Bayesian Inference", "Monte Carlo","MCMC", "SRIM/TRIM", "Ion Beams", "Graphene foils"],
      support: "Internal funding sources at Los Alamos National Laboratory.",
    },

  ],
};
