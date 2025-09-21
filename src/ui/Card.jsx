import React from "react";

export default function Card({ text, icon }) {
  return (
    <div className="bg-white rounded-xl flex-col shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 w-full max-w-[350px] cursor-pointer flex items-center gap-3 px-4 py-2">
      {icon && (
        <div className="text-green-600 flex-shrink-0">
          {React.createElement(icon, { className: "w-5 h-5" })}
        </div>
      )}
      <p className="font-medium text-gray-700 text-base leading-snug">{text}</p>
    </div>
  );
}
