import React from "react";
import { IoLocation } from "react-icons/io5";
import { IoIosCalendar, IoIosHeartEmpty } from "react-icons/io";
import { Pagination } from "../../../../Components";
import { useNavigate } from "react-router-dom";
import moment from "moment";

export const JobCard = ({
  jobs,
  currentPage,
  totalPages,
  onPageChange,
  pageSize,
  onPageSizeChange,
}) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center pb-10 pt-5 gap-2 px-[10%]">
      <p className="w-full font-medium">Found {jobs?.length} Vacancies</p>
      <div className="w-full flex flex-col gap-2 my-5">
        {jobs?.map((item, index) => (
          <div
            className="border p-3 flex items-center gap-3 justify-between "
            key={index}
            onClick={() => navigate(`/find-job/${item._id}`)}
          >
            <div className="flex items-center gap-3 cursor-pointer">
              <div className="w-20 h-16 border">
                <img
                  src={item?.company?.logo?.[0]}
                  alt="companyImg"
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <div className="flex flex-col gap-1">
                <h3 className="text-sm font-bold">{item?.company?.name}</h3>
                <div className="flex items-center gap-2">
                  <p className="text-gray-500 text-xs">{item.title}</p>{" "}
                  <hr className="w-[1px] bg-gray-400 h-4" />
                  <div className="flex items-center gap-2">
                    <IoLocation className="text-gray-400" />
                    <span className="text-gray-400 text-xs">
                      {item.location}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <IoIosCalendar className="text-gray-400" />
                  <span className="text-gray-400 text-xs">
                    {moment(item?.createdAt).format("L")} -{" "}
                    {moment(item?.deadline).format("L")} ({item?.daysLeft} days
                    left)
                  </span>
                </div>
              </div>
            </div>
            <div className="text-right flex items-center gap-3">
              <span className="bg-transparent border border-[#1EBBD7] text-[#1EBBD7] text-sm py-1 px-3 rounded-full font-medium">
                {item.jobType}
              </span>
              <IoIosHeartEmpty />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={onPageChange}
        pageSize={pageSize}
        onPageSizeChange={onPageSizeChange}
      />
    </div>
  );
};
