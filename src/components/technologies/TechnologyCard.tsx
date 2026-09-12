import { MdStarOutline } from "react-icons/md";
import type { ITech } from "../../types/technologiestypes";
import { toast } from "react-toastify";

interface TechnologyCardProps {
  technology: ITech;
  setSelected: React.Dispatch<React.SetStateAction<ITech[]>>;
  selected: ITech[];
}

const TechnologyCard = ({
  technology,
  setSelected,
  selected,
}: TechnologyCardProps) => {
  const handleSelected = (selection: ITech) => {
    if (selected.some((item) => item.name === selection.name)) {
      toast.error("Technology already selected");
      return;
    }
    setSelected((prev) => [...prev, selection]);
  };

  console.log(technology);
  return (
    <div>
      <div className=" w-71.25 border border-gray-300 p-6 rounded-lg">
        <div className="flex justify-between items-center">
          <img src={technology.icon} alt="" className="h-7 w-7" />
          <button
            className={`border rounded-3xl py-1 px-4 text-sm ${technology.badgeColor} ${technology.badge ? "" : "hidden"}`}
          >
            {technology.badge}
          </button>
        </div>
        <h4 className="font-bold mt-2">{technology.name}</h4>
        <p className="text-gray-500 text-sm ">{technology.description}</p>
        <hr className="my-4 border-t border-gray-300" />

        <div className="text-gray-500  flex justify-between items-center  mt-3 text-xs">
          <button className="bg-gray-200 font-semibold border-gray-400 rounded-md px-2 py-1">
            {technology.category}
          </button>
          <p>{technology.difficulty}</p>
          <div className="flex items-center gap-1 ">
            <MdStarOutline className="text-yellow-600" />
            <p className="font-bold">{technology.rating}</p>
          </div>
        </div>
        <button
        // disabled={selected.some((item) => item.name === technology.name)}
          onClick={() => handleSelected(technology)}
          className=
          {`mt-4 w-full btn btn-neutral text-white
            font-medium py-2 px-4 rounded-md ${selected.some((item) => item.name === technology.name)?"btn-disabled":""}`}
        >
          Add to Stack
        </button>
      </div>
    </div>
  );
};

export default TechnologyCard;
