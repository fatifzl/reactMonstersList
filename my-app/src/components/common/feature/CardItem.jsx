import React from "react";

const CardItem = ({ data }) => {
  return (
    <div className="bg-blue-200 rounded-xl flex flex-col items-center justify-center 
    hover:scale-110 transition-all shadow-md shadow-gray-700 w-40">
      <img
        src={`https://www.robohash.org/${data.id}`}
        alt={data.name}
        width={120}
        height={120}
        className="mb-2"
      />
      <p className="text-sm font-semibold">{data.name}</p>
      <p className="text-xs font-semibold mb-3">{data.email}</p>
    </div>
  );
};

export default CardItem;
