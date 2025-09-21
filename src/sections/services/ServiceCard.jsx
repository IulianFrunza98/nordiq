import React from "react";

export default function ServiceCard({ text, icon }) {
  return (
    <div className="bg-white rounded-xl text-center px-4 py-3 shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 w-[220px] cursor-pointer h-[140px] flex flex-col items-center justify-center gap-2">
      <div className="text-green-600 font-bold w-5 h-5 mx-auto mb-2">
        {React.createElement(icon)}
      </div>
      <p className="font-medium text-gray-700 text-base leading-snug">{text}</p>
    </div>
  );
}
