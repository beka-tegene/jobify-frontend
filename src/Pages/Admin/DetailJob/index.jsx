import React, { useEffect } from "react";
import { ButtonUi } from "../../../Components";
import { IoLocation } from "react-icons/io5";
import { IoIosCalendar } from "react-icons/io";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchJobByIdRequest,
  fetchJobsRequest,
} from "../../../Store/Hook/jobsSlice";
import { useNavigate, useParams } from "react-router-dom";
import moment from "moment";
export const DetailJob = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { selectedJob, jobs, loading, error } = useSelector(
    (state) => state.jobs
  );
  useEffect(() => {
    dispatch(fetchJobByIdRequest(id));
  }, [dispatch, id]);
  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);
  return (
    <div className="px-5 py-6">
      <div className="grid grid-cols-3 gap-3">
        <div className="col-span-2">
          {/* Job Title and Company */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-800">
              {selectedJob?.job?.title}
            </h1>
            <p className="text-xl text-gray-600">
              at {selectedJob?.job?.company?.name}
            </p>
          </div>

          {/* Job Meta Info */}
          <div className="flex items-start gap-2 flex-col mb-3">
            <div className="text-gray-600 ">
              <span className="font-semibold">Location:</span>{" "}
              {selectedJob?.job?.location}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">Job Type:</span>{" "}
              {selectedJob?.job?.jobType}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">Experience Level:</span>{" "}
              {selectedJob?.job?.experienceLevel}
            </div>
            <div className="text-gray-600">
              <span className="font-semibold">Salary:</span> $
              {selectedJob?.job?.minSalary} - ${selectedJob?.job?.maxSalary}
            </div>
          </div>

          {/* Job Description */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Job Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {selectedJob?.job?.description}
            </p>
          </div>

          {/* Responsibilities */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Responsibilities
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {selectedJob?.job?.responsibilities?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Requirements */}
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Requirements
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              {selectedJob?.job?.requirements?.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Apply Button */}
          <div className="mt-12">
            <ButtonUi
              label="Apply Now"
              type="button"
              className="bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-6 rounded-md text-[#f8feff] font-semibold"
            />
          </div>
        </div>
        <div>
          <p className="w-full font-semibold mb-5 text-lg">Related Vacancy</p>
          <div className="w-full flex flex-col gap-2  mb-5">
            {jobs?.jobs?.map((item, index) => (
              <div
                className="border p-3 flex items-center gap-3 justify-between "
                key={index}
              >
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => navigate(`/admin/jobs/${item._id}`)}
                >
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
                        {moment(item?.deadline).format("L")} ({item?.daysLeft}{" "}
                        days left)
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
