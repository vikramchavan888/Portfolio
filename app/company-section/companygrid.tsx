import CompanyCard from "./CompanyCard";
import {
  Companyprojects,CompanyProps
} from "../company-section/companydetails";
import { useState } from "react";
import { monaSans } from "../fonts/monaSans";
import AnimatedWords2 from "../animations/AnimatedWords2";
const CompanyGrid = () => {
  const [filter, setFilter] = useState(true);

  return (
    <>
      <div
        className={`relative mb-16 flex w-full flex-col items-center justify-center gap-10  text-[#e4ded7] sm:items-center lg:max-w-[1440px]`}
      >
        <AnimatedWords2
          title={"Experience"}
          style={`flex max-w-[500px] pr-5 flex-col items-start text-left ${monaSans.className} font-extrabold uppercase leading-[0.9em] text-[#e4ded7] sm:max-w-full sm:flex-row sm:items-center sm:justify-center sm:text-center lg:text-center text-[clamp(70px,10vw,155.04px)]`}
        />
      </div>
      <div className="grid w-[90%] grid-cols-1 grid-rows-1 gap-y-10 gap-x-6 lg:max-w-[1200px] lg:grid-cols-1">
        {Companyprojects.map((project: CompanyProps) => (
          <CompanyCard
            id={project.id}
            key={project.id}
            name={project.name}
            description={project.description}
            technologies={project.technologies}
            github={project.github}
            demo={project.demo}
            image={project.image}
            available={project.available}
          />
        ))}
      </div>
    </>
  );
};

export default CompanyGrid;
