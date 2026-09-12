import React from 'react';

const SelectedTechnologies = ({selected, setSelected}) => {
    console.log(selected);
    
    return (
        <div>
            <h2>Your Stack</h2>
            {selected.length} Technology selected
           {selected?.map((stack)=>(
            <div>
                 <img src={stack.icon} alt="" className='h-8'/>
             <h2>{stack.name}</h2>
             <p>{stack.category}</p>
            </div>
           ))} 
        </div>
    );
};

export default SelectedTechnologies;