import React from 'react';
import { useState, useRef } from 'react';
import { BiSearch } from 'react-icons/bi';
import logo from '../assets/zevi logo.png';

import useCommonStore from '../store';

const SearchBar = ({ suggestions }) => {
  const searchTerm = useCommonStore((state) => state.searchTerm);
  const setSearchTerm = useCommonStore((state) => state.setSearchTerm);

  //  to show suggestions box
  const [isSuggestions, setIsSuggestions] = useState(false);

  // ref element for handling search input
  const inputEl = useRef();

  const handleInputChange = () => {
    // setSearchTerm(inputEl.current.value);
    setSearchTerm(inputEl.current.value);
  };

  suggestions = suggestions.slice(0, 4);

  return (
    <div className="p-5">
      {/* logo */}
      <div>
        <img src={logo} className="w-[70px] ml-auto" alt="zevi logo" />
      </div>
      {/* search input  */}
      <div className="flex justify-between items-center max-w-md mt-5 p-3 space-x-4 rounded-lg shadow-md mx-auto bg-white">
        <input
          onFocus={() => setIsSuggestions(true)}
          onBlur={() => setIsSuggestions(false)}
          type="text"
          onChange={handleInputChange}
          ref={inputEl}
          className="outline-none focus:p-1 transition-all duration-150 ease-in border-none text-md font-semibold text-gray-500 w-full"
          placeholder="H&M Crop top..."
        />
        <BiSearch size={20} />
      </div>
      {/* Suggestions */}
      {isSuggestions && searchTerm?.length === 0 && (
        <div className="max-w-3xl mx-auto mt-5 rounded-md  bg-white p-5 px-8 shadow-2xl  ">
          <h3 className="mb-3 text-xl font-semibold">Latest Trends</h3>
          <div className="grid grid-cols-4 gap-5 ">
            {suggestions.map((item) => (
              <div key={item?.id}>
                <div>
                  <img
                    src={item?.image.url}
                    alt={item?.name}
                    className=" inline-block rounded-md  w-full min-h-[250px] object-cover"
                  />
                </div>
                <p className="mt-2 font-medium text-xs"> {item?.name} </p>
              </div>
            ))}
          </div>
          <h2 className="font-semibold text-md mt-5">Popular Suggestions</h2>
          {suggestions.map((item) => (
            <div key={item?.id}>
              <p className="mt-2 font-medium text-xs"> {item?.name} </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
