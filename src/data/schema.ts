// Public, verifiable structured data for the personal website.
export const getPersonSchema = (_url: string) => {
  const home = "https://christaeloranta.fi/";
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${home}#person`,
    name: "Christa Eloranta",
    jobTitle: "Full Stack Developer & Designer",
    url: home,
    image: "https://christaeloranta.fi/images/christaelorantajakokuva.webp",
    description: "Ohjelmistokehittäjä, muotoilija ja monialainen tekijä, joka yhdistää teknisen toteutuksen ja käyttäjälähtöisen suunnittelun.",
    knowsAbout: [
      "Ohjelmistokehitys", "Web-kehitys", "Järjestelmäintegraatiot",
      "UI/UX Design", "Käyttäjälähtöinen suunnittelu",
      "Tuotteistaminen", "Hienopuusepäntyö",
    ],
    alumniOf: [
      { "@type": "CollegeOrUniversity", name: "Lapin ammattikorkeakoulu" },
      { "@type": "CollegeOrUniversity", name: "Lapin yliopisto" },
    ],
    sameAs: [
      "https://www.linkedin.com/in/christa-eloranta/",
      "https://github.com/ch-risto",
      "https://www.instagram.com/christaeloranta/",
    ],
    mainEntityOfPage: home,
  };
};
