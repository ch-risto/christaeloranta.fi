// src/data/schema.ts
export const getPersonSchema = (url: string) => {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Christa Eloranta",
    jobTitle: "Full Stack Developer & Designer",
    url: url,
    image: "https://www.christaeloranta.fi/images/ChristaEloranta.jpg",
    sameAs: [
      "https://www.linkedin.com/in/christa-eloranta",
      "https://github.com/ch-risto",
      "https://www.instagram.com/christaeloranta/",
    ],
    knowsAbout: [
      "Ohjelmistokehitys",
      "UI/UX Design",
      "Käyttäjälähtöinen suunnittelu",
      "Hienopuusepäntyö",
    ],
  };
};
