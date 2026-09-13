import { use, useState } from "react";
import type { ITech } from "../../types/technologiestypes";
import Availabletechnologies from "./Availabletechnologies";
import SelectedTechnologies from "./SelectedTechnologies";

interface TechnologiesProps {
  technologiesPromise: Promise<ITech[]>;
}

const Technologies = ({ technologiesPromise }: TechnologiesProps) => {
  const technologies = use(technologiesPromise);

  const [selected, setSelected] = useState<ITech[]>([]);

  console.log(technologies);
  return (
    <div className="flex flex-col md:flex-row  gap-10 justify-center mx-auto">
      <Availabletechnologies
        technologies={technologies}
        setSelected={setSelected}
        selected={selected}
      />
      <SelectedTechnologies selected={selected} setSelected={setSelected} />
    </div>
  );
};

export default Technologies;
