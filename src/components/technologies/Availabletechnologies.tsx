

import type { ITech } from '../../types/technologiestypes';
import TechnologyCard from './TechnologyCard';

interface AvailableProps {
    technologies: ITech[]
   
  
}

const Availabletechnologies = ({ technologies }: AvailableProps) => {
 

    return (
        <div  className="grid grid-cols-3 gap-5 ">
      {technologies.map((technology) => (
        <div key={technology.id}>
          <TechnologyCard
            technology={technology}
          />
        </div>
      ))}
        </div>
    );
};

export default Availabletechnologies;