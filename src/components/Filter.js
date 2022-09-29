import React from 'react';
import useCommonStore from '../store';
import StarRatings from 'react-star-ratings';
const Filter = () => {
  const products = useCommonStore((state) => state.products);
  const setFilter = useCommonStore((state) => state.setFilter);
  const performGlobalFilter = useCommonStore((state) => state.performGlobalFilter);
  // const performBrandsFilter = useCommonStore((state) => state.performBrandsFilter);

  let brands = products.map((item) => item.brand);
  brands = [...new Set(brands)];
  const stars = [1, 2, 3, 4, 5].reverse();

  const handlePrice = () => {
    const priceNodesEl = document.querySelectorAll('.price');
    const priceNodeArray = Array.from(priceNodesEl);

    let priceFilter = [];

    priceNodeArray.forEach((item) => {
      if (item.checked) {
        priceFilter.push(+item.getAttribute('minval'));
        priceFilter.push(+item.getAttribute('maxval'));
      }
    });

    setFilter({ priceFilter });
    performGlobalFilter();
  };

  const handleBrand = () => {
    const brandsEl = document.querySelectorAll('.brand');
    const brandsFilter = [];
    Array.from(brandsEl).forEach((item) => {
      if (item.checked) {
        brandsFilter.push(item.getAttribute('name'));
      }
    });

    setFilter({ brandsFilter });
    performGlobalFilter();
  };

  const handleRating = () => {
    const ratingsEl = document.querySelectorAll('.rating');
    const ratingsFilter = [];

    Array.from(ratingsEl).forEach((item) => {
      if (item.checked) {
        ratingsFilter.push(+item.getAttribute('name'));
      }
    });

    setFilter({ ratingsFilter });
    performGlobalFilter();
  };

  return (
    <div className=" h-full bg-white flex flex-col space-y-3 sm:text-center  md:text-left  ">
      {/* Brands */}
      <div className="flex flex-col space-y-3 border-b border-gray-200 w-3/4 mx-auto md:mx-0 py-3">
        <h1 className="text-xl font-semibold mb-1">BRAND</h1>
        {brands.map((brand) => (
          <div
            className="flex items-center space-x-2  justify-center md:justify-start "
            key={brand}
          >
            <input
              type="checkbox"
              className="brand "
              name={brand}
              onClick={handleBrand}
              id={brand}
            />
            <label className="text-md font-normal" htmlFor={brand}>
              {brand}
            </label>
          </div>
        ))}
      </div>
      {/* Price range */}
      <div className="flex flex-col space-y-3 border-b border-gray-200 w-3/4 mx-auto  md:mx-0 py-3">
        <h1 className="text-xl font-semibold mb-1">PRICE RANGE</h1>
        <div className="flex items-center justify-center md:justify-start space-x-2">
          <input
            type="checkbox"
            className="price"
            minval="0"
            maxval="500"
            onChange={handlePrice}
            id="500"
            name="500"
          />
          <label htmlFor="500">Under 500</label>
        </div>
        <div className="flex items-center justify-center  md:justify-start space-x-2">
          <input
            type="checkbox"
            className="price"
            onChange={handlePrice}
            id="1000"
            name="1000"
            minval="1000"
            maxval="3000"
          />
          <label htmlFor="1000">Under 1000 To 3000</label>
        </div>
        <div className="flex items-center justify-center  md:justify-start space-x-2">
          <input
            type="checkbox"
            className="price"
            onChange={handlePrice}
            id="3000"
            name="3000"
            minval="3000"
            maxval="5000"
          />
          <label htmlFor="3000">Under 3000 To 5000</label>
        </div>
      </div>
      {/* Ratings */}
      <div className="flex flex-col space-y-3 border-b border-gray-200 w-3/4 mx-auto md:mx-0  py-3">
        <h1 className="text-xl font-semibold mb-1">Ratings</h1>
        {stars.map((item) => (
          <div key={item} className="flex justify-center  md:justify-start items-center space-x-2">
            <input
              type="checkbox"
              onClick={handleRating}
              className="rating"
              id={item}
              name={item}
            />
            <label htmlFor={item}>
              <StarRatings
                rating={item}
                starRatedColor="rgb(255, 209, 0)"
                starDimension="20px"
                starSpacing="5px"
                numberOfStars={5}
                name="rating"
              />
            </label>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Filter;
