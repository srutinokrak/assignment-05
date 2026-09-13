import React from "react";
import type { ITech } from "../../types/technologiestypes";
import { RxCross2 } from "react-icons/rx";
import { toast } from "react-toastify";

interface SelectedTechnologiesProps {
  selected: ITech[];
  setSelected: React.Dispatch<React.SetStateAction<ITech[]>>;
}
const SelectedTechnologies = ({
  selected,
  setSelected,
}: SelectedTechnologiesProps) => {
  console.log(selected);

  const handleRemove = (id: string) => {
    const updatedSelected = selected.filter((tech) => tech.id !== id);
    setSelected(updatedSelected);
    toast.success("Technology removed from stack");
  };

  const handleRemoveAll = () => {
    setSelected([]);
    toast.success("All technologies removed from stack");
  };

  return (
    <div className="h-fit md:w-72.25 border border-gray-300 p-6 rounded-lg">
     
         <h2 className="font-bold">Your Stacks</h2>
       
       <p className="text-gray-400 mb-3">{selected.length === 0 ?"No technologies selected yet.":`${selected.length} ${selected.length === 1 ? "Technology" : "Technologies"} Selected`}</p>
         
        {selected.length === 0? 
        (
            <div className="border border-dashed border-gray-300 rounded-xl py-8 text-center text-gray-400 text-sm">Your stack is empty.</div>
        ):
        <>
     
      <div className="flex flex-col gap-2">
        {selected?.map((stack) => (
        <div className="w-full border border-gray-300 rounded-md px-4 py-2">
         <div className="flex justify-between">
             <div className="flex items-center gap-2">
                <img src={stack.icon} alt="" className="h-8" />
          <div className="font-xl ">
            <h2 className="font-bold">{stack.name}</h2>
          <p className="text-sm">{stack.category}</p>
          </div>
          </div>
          <button onClick={() => handleRemove(stack.id)}>
            <RxCross2 />
          </button>
         </div>
        </div>
      ))}
      </div>
 
      <div >
        <button className="mt-4 w-full 
            font-medium py-2 px-4 rounded-md border border-red-400 text-sm text-red-500 " onClick={handleRemoveAll}>Remove All</button>
      </div>
        </>}

     
     
    </div>
  );
};

export default SelectedTechnologies;
