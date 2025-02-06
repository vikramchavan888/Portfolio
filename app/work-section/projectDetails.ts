export type ProjectProps = {
  id: number;
  name: string;
  description: string;
  technologies: string[];
  github: string;
  demo: string;
  image: string;
  available: boolean;
};

export const devProjects = [
  {
    id: 0,
    name: "Synthetix",
    description:
      "Built specifically for an AI startup, this website lets them present cutting-edge AI data processing solutions tailored to their customers' needs.",
    technologies: ["React", "Next.js", "Prismic CMS"],
    github: "https://github.com/vikramchavan888/synthetix",
    demo: "https://synthetix-6979.vercel.app/",
    image: require(".//../../public/projects/synthetix-flip.png"),
    available: true,
  },
  {
    id: 1,
    name: "Form-Builder",
    description:
      "form builder is a app where one set of users can create forms and view form responses. And on the other hand, other set of users can fill the forms which are shared through public links.",
    technologies: ["React", "CSS", "Mongo DB"],
    github: "https://github.com/vikramchavan888/-form-builder",
    demo: "https://form-builder-app-delta.vercel.app/",
    image: require(".//../../public/projects/Screenshot (211).png"),
    available: true,
  },
  {
    id: 2,
    name: "Interlock",
    description:
      "This is a website for a Fintech Startup to showcase their innovative solutions tailored to meet the evolving needs of their clients.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/vikramchavan888/interlock",
    demo: "https://interlock-eight.vercel.app/",
    image: require(".//../../public/projects/interlock.png"),
    available: true,
  },
  {
    id: 3,
    name: "Propellent",
    description:
      "A website built for a software startup and small business, to showcase their services and mark their online presence.",
    technologies: ["React", "Tailwind CSS", "Framer Motion"],
    github: "https://github.com/vikramchavan888/propellent",
    demo: "https://propellent-beta.vercel.app/",
    image: require(".//../../public/projects/propellent-new.png"),
    available: true,
  },
];
