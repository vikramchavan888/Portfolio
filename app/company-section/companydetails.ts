export type CompanyProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const Companyprojects = [
  {
    id: 0,
    name: "Persistent System",
    description:
      "Utilized Generative AI for threat detection, predictive modeling, and attack simulations in Checkmarx SAST; applied NLP for security log analysis; developed a blockchain miner for PolygonID.",
    technologies: ["Java" ,"React", "Spring", "Web3","Nodejs"],
    github: "https://vikramchavan888.github.io/persistent.com/",
    demo: "https://www.persistent.com/",
    image: require(".//../../public/projects/odunsi.png"),
    available: true,
  },
];