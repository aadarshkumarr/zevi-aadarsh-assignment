import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import StarRatings from 'react-star-ratings';

const ProductCard = ({ prod }) => {
  const [favourite, setFavorite] = useState(false);

  //   handling like icon toggle
  const handleFavourite = () => {
    setFavorite((prev) => !prev);
  };

  return (
    <div className="flex flex-col space-y-1 sm:w-3/4 sm:mx-auto md:w-auto  ">
      <div className="relative card-container ">
        {favourite ? (
          <AiFillHeart
            className="absolute top-3 right-3 cursor-pointer"
            color="red"
            size={20}
            onClick={handleFavourite}
          />
        ) : (
          <AiOutlineHeart
            className="absolute top-3 right-3 cursor-pointer hover:scale-125 transition-all duration-200 ease-in "
            color="white"
            size={20}
            onClick={handleFavourite}
          />
        )}
        <div className="text-center view-banner   absolute bottom-0 left-0 right-0 bg-blue-400 p-3 text-white bg-opacity-80 opacity-0  transition-all duration-200 ease-in  ">
          View Product
        </div>
        <img
          src={prod?.image.url}
          className="min-h-[320px] w-full rounded-md shadow-md object-cover"
          alt={prod?.name}
        />
      </div>
      <h4 className="text-md font-semibold pt-2">{prod?.name}</h4>
      <div className="text-sm">
        <span className="line-through text-gray-500"> Rs.{+prod.price + 200}</span>
        <span className=" text-blue-400 ml-1 font-semibold text-md"> Rs.{+prod.price}</span>
      </div>
      <div>
        <StarRatings
          rating={prod.rating}
          starRatedColor="rgb(255, 209, 0)"
          starDimension="20px"
          starSpacing="5px"
          numberOfStars={5}
          name="rating"
        />
        <span className="text-sm  text-gray-500 ml-1">({prod.totalRatingCount})</span>
      </div>
    </div>
  );
};

export default ProductCard;
