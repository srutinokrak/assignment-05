

import type { ITech } from '../../types/technologiestypes';
import TechnologyCard from './TechnologyCard';

interface AvailableProps {
    technologies: ITech[]
   setSelected:ITech[]
  
}

const Availabletechnologies = ({ technologies ,setSelected}: AvailableProps) => {
 

    return (
        <div  className="grid grid-cols-3 gap-5 ">
      {technologies.map((technology) => (
        <div key={technology.id}>
          <TechnologyCard
            technology={technology}
            setSelected={setSelected}
          />
        </div>
      ))}
        </div>
    );
};

export default Availabletechnologies;