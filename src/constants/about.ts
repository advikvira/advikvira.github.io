export const aboutInformation = {
  firstName:    "Advik D.",
  lastName:     "Vira",
  title:        "Physicist",
  institution:  "Georgia Institute of Technology",
  photo:        "/attachments/advikvira.jpg",
  cv:           "/attachments/completeCV.pdf",
  email:        "avira@gatech.edu",
  domain:       "www.advikdvira.com",
  linkedin:     "https://www.linkedin.com/in/advik-vira",
  googlescholar:"https://scholar.google.com/citations?user=yfkVSRgAAAAJ&hl=en&oi=ao",
  orcid:        "https://orcid.org/0000-0003-0869-4951",
  researchgate: "https://www.researchgate.net/profile/Advik-Vira?ev=prf_overview",
  github:       "https://github.com/advikvira",
  bio: `I am a <u>physicist</u> with a background in both computational and experimental approaches.
        I earned my Ph.D. in Physics from the <strong>Georgia Institute of Technology</strong>, where I simulated 
        radiation shielding composites to optimize its internal structure and analyzed Apollo rocks 
        at an atomic-scale using transmission electron microscopy.<br><br>

        Before graduate school, I worked at <strong>Los Alamos National Laboratory</strong> in the 
        space division on near-Earth satellites and at the <strong>Harvard-Smithsonian Center 
        for Astrophysics</strong> on infrared spectroscopy for the solar eclipse. I received my 
        B.A. in Physics and Mathematics from <strong>Smith College</strong>.`,

// google-friendly (no HTML, clean sentences)
bioPlain: `I am a physicist with a background in both computational modeling and experimental approaches, with applications in space physics, planetary science, and geoscience.`,

get jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": `${this.firstName} ${this.lastName}`,
    "url": "https://www.advikdvira.com",
    "description": this.bioPlain, // use clean version instead
    "jobTitle": this.title,
    "affiliation": {
      "@type": "Organization",
      "name": this.institution
    },
    "alumniOf": [
      { "@type": "Organization", "name": "Georgia Institute of Technology" },
      { "@type": "Organization", "name": "Smith College" }
      ],
    "sameAs": [
      this.linkedin,
      this.googlescholar,
      this.github,
      this.orcid,
      this.researchgate
    ]
    };
  }
};
