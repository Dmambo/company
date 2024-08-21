import React from "react";

interface ServeProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  ribbonLabel: string;
}

const Serve: React.FC<ServeProps> = ({ title, description, icon, ribbonLabel }) => {
  // Truncate description to 50 characters
  const truncatedDescription =
    description.length > 50 ? `${description.slice(0, 125)}...` : description;

  return (
    <div className="relative w-full max-w-xs mx-auto bg-gray-50 text-center rounded-tl-[4rem] border-2 border-white">
      <div className="absolute top-8 right-[-2px] h-8 w-28 bg-indigo-800 clip-path-custom"></div>
      <div className="p-8 max-w-[25ch] mx-auto">
        <div className="w-8 h-8 mx-auto mb-4">{icon}</div>
        <p className="font-extrabold text-xl text-gray-900 mb-2">{title}</p>
        <p className="text-gray-700 text-sm">{truncatedDescription}</p>
      </div>
      <div className="mt-6 grid place-items-center h-12 bg-indigo-800 relative left-[-5%] w-[110%] rounded-b-[2rem]">
        <label className="relative flex items-center justify-center w-20 h-20 bg-white rounded-full border-8 border-indigo-800 text-indigo-800 font-extrabold text-2xl transform -translate-y-1/2">
          {ribbonLabel}
          <span className="absolute right-[calc(100%+4px)] bottom-1/2 w-6 h-6 rounded-br-[20px] shadow-lg" style={{ boxShadow: "5px 5px 0 #393e7f" }}></span>
          <span className="absolute left-[calc(100%+4px)] bottom-1/2 w-6 h-6 rounded-bl-[20px] shadow-lg" style={{ boxShadow: "-5px 5px 0 #393e7f" }}></span>
        </label>
      </div>
    </div>
  );
};

export default Serve;
