import React from "react";

const SearchBox = ({ method }) => {
  return (
    <>
      <input
        type="text"
        placeholder="Search For..."
        className="w-1/2 p-2 mb-10 rounded-lg border-solid border-2 border-violet-950 shadow-md shadow-gray-700"
        onChange={(e) => method(e.target.value)}
      />
    </>
  );
};

export default SearchBox;
