import { use, useState,  } from "react"
import type { ITech } from "../../types/technologiestypes";
import Availabletechnologies from "./Availabletechnologies";
import SelectedTechnologies from "./SelectedTechnologies";

interface TechnologiesProps{
    technologiesPromise: Promise<ITech[]>
}

const Technologies = ({technologiesPromise}:TechnologiesProps) => {

    

    const technologies = use(technologiesPromise)

   const [selected, setSelected]= useState()

    console.log(technologies);
    return (
        <div>
            <Availabletechnologies
             technologies = {technologies}
             setSelected={setSelected}
             />
             <SelectedTechnologies selected={selected}/>
        </div>
    );
};

export default Technologies;