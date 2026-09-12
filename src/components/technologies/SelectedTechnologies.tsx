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
    <div >
      <h2 className="font-bold">Your Stack</h2>
      <div className="text-gray-400">{selected?.length} Technology selected</div>
      {selected?.map((stack) => (
        <div className="w-71.25 border border-gray-300 rounded-md px-4 py-2">
         <div className="flex justify-between">
             <div className="flex items-center gap-2">
                <img src={stack.icon} alt="" className="h-8" />
          <div>
            <h2>{stack.name}</h2>
          <p>{stack.category}</p>
          </div>
          </div>
          <button onClick={() => handleRemove(stack.id)}>
            <RxCross2 />
          </button>
         </div>
        </div>
      ))}
      <div>
        <button onClick={handleRemoveAll}>Remove All</button>
      </div>
    </div>
  );
};

export default SelectedTechnologies;
