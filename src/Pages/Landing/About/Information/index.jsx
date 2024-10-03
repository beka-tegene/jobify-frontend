import React from "react";
import aboutus from "../../../../assets/About me-rafiki.svg";
export const Information = () => {
  return (
    <div className="px-[10%] py-10">
      <div className="grid grid-cols-2 gap-3 items-center">
        <div>
          <img src={aboutus} alt="aboutus" />
        </div>
        <div className="flex items-start flex-col gap-3">
          <h2 className="font-medium text-[#1EBBD7]">Know us---</h2>
          <h2 className="font-bold text-3xl">About Us</h2>
          <p className="text-gray-400">
            Find the perfect job opportunity that matches your skills,
            aspirations, and long-term career goals. Whether you're seeking new
            challenges or looking to grow in your current field, explore a wide
            range of positions tailored to your unique expertise and interests.
            Find the perfect job opportunity that matches your skills,
            aspirations, and long-term career goals. Whether you're seeking new
            challenges or looking to grow in your current field, explore a wide
            range of positions tailored to your unique expertise and interests.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3 items-center">
        <div className="flex items-start flex-col gap-3">
          <h2 className="font-medium text-[#1EBBD7]">Know us---</h2>
          <h2 className="font-bold text-3xl">About Us</h2>
          <p className="text-gray-400">
            Find the perfect job opportunity that matches your skills,
            aspirations, and long-term career goals. Whether you're seeking new
            challenges or looking to grow in your current field, explore a wide
            range of positions tailored to your unique expertise and interests.
            Find the perfect job opportunity that matches your skills,
            aspirations, and long-term career goals. Whether you're seeking new
            challenges or looking to grow in your current field, explore a wide
            range of positions tailored to your unique expertise and interests.
          </p>
        </div>
        <div>
          <img src={aboutus} alt="aboutus" />
        </div>
      </div>
    </div>
  );
};
