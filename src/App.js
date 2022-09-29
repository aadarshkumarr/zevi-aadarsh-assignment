import React, { useEffect } from 'react';
import Main from './components/Main';
import SearchBar from './components/SearchBar';
import useCommonStore from './store';
const App = () => {
  const products = useCommonStore((state) => state.products);
  const fetchData = useCommonStore((state) => state.fetchData);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className="max-w-7xl main-wrapper h-screen  mx-auto ">
      <div className="h-full  bg-black bg-opacity-10  ">
        <SearchBar suggestions={products} />
        <Main />
      </div>
    </div>
  );
};

export default App;
