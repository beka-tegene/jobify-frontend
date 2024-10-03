import React from "react";
import { ButtonUi } from "../../../../Components";
import heroImg from "../../../../assets/job-hunt-not-css.svg";
import { useNavigate } from "react-router-dom";
export const Hero = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-2 gap-3 items-center px-[10%] py-20">
      <div className="flex items-start flex-col gap-3">
        <h2 className="font-bold text-3xl">
          Empower Your Career, Connect with Top Companies
        </h2>
        <p className="text-gray-500 text-sm">
          Seamlessly manage your company’s hiring process with our all-in-one
          platform.
        </p>
        <p className="text-gray-400 text-xs">
          Find the perfect job opportunity that matches your skills,
          aspirations, and long-term career goals. Whether you're seeking new
          challenges or looking to grow in your current field, explore a wide
          range of positions tailored to your unique expertise and interests.
        </p>
        <ButtonUi
          onClick={() => navigate("/find-job")}
          label="Find Job"
          type="button"
          className="bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
        />
      </div>
      <div>
        <img src={heroImg} alt="heroImg" />
      </div>
    </div>
  );
};
