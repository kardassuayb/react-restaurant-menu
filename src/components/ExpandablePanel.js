import { useState } from "react";

const ExpandablePanel = ({ header, children }) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="mb-2 border rounded ">
      <div
        className="flex p-2 justify-between items-center cursor-pointer bg-white"
        onClick={handleClick}
      >
        <div className="flex flex-row items-center justify-between color-black ">
          {header}
        </div>
        {/* <div className="cursor-pointer" >
          {expanded ? <GoChevronDown /> : <GoChevronLeft />}
        </div> */}
      </div>
      {expanded && <div className="p-2 border-t bg-white">{children}</div>}
    </div>
  );
};

export default ExpandablePanel;
