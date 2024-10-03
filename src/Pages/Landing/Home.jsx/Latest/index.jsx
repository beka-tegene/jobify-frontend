import React, { useEffect } from "react";
import { IoLocation } from "react-icons/io5";
import { IoIosCalendar, IoIosHeartEmpty } from "react-icons/io";
import { useForm } from "react-hook-form";
import { ButtonUi, CheckboxInput, TextInput } from "../../../../Components";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsRequest } from "../../../../Store/Hook/jobsSlice";
import moment from "moment";

export const Latest = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector((state) => state.jobs);

  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      date: "",
      location: "",
      salary: "",
      company: "",
      freelance: false,
      full_time: false,
      part_time: false,
      temporary: false,
      internship: false,
    },
  });

  useEffect(() => {
    dispatch(fetchJobsRequest());
  }, [dispatch]);

  const onSubmit = (data) => {
    const filters = {};

    if (data.date) filters.date = data.date;
    if (data.location) filters.location = data.location;
    if (data.salary) filters.salaryRange = data.salary;
    if (data.company) filters.company = data.company;

    const jobTypes = [];
    if (data.freelance) jobTypes.push("Freelance");
    if (data.full_time) jobTypes.push("Full-Time");
    if (data.part_time) jobTypes.push("Part-Time");
    if (data.temporary) jobTypes.push("Temporary");
    if (data.internship) jobTypes.push("Internship");

    if (jobTypes.length > 0) filters.jobType = jobTypes.join(",");

    dispatch(fetchJobsRequest({ page: 1, limit: 10, ...filters }));
  };

  return (
    <div className="flex flex-col items-center justify-center pb-10 pt-5 gap-2 px-[10%]">
      <h2 className="font-medium text-[#1EBBD7]">Latest Vacancy</h2>
      <p className="text-2xl font-semibold">
        Find the best candidates with ease.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 border border-[#f0fdff] p-2 bg-[#fafeff] rounded-md"
      >
        <div className="flex gap-3 items-center">
          <TextInput
            label="Date"
            name="date"
            type="date"
            control={control}
            className="text-white"
          />
          <TextInput
            label="Location"
            name="location"
            control={control}
            placeholder="e.g., London"
            className="text-white"
          />
          <TextInput
            label="Salary"
            name="salary"
            type="number"
            control={control}
            placeholder="e.g., 20,000"
            className="text-white"
          />
          <TextInput
            label="Company"
            name="company"
            control={control}
            placeholder="e.g., Google"
            className="text-white"
          />
          <ButtonUi
            label="Search"
            type="submit"
            className="w-2/4 mt-7 bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
          />
        </div>

        {/* Job Type Filters */}
        <div className="flex gap-5 items-center">
          <CheckboxInput label="Freelance" name="freelance" control={control} />
          <CheckboxInput label="Full Time" name="full_time" control={control} />
          <CheckboxInput label="Part Time" name="part_time" control={control} />
          <CheckboxInput label="Temporary" name="temporary" control={control} />
          <CheckboxInput
            label="Internship"
            name="internship"
            control={control}
          />
        </div>
      </form>

      <div className="w-full flex flex-col gap-2 my-5">
        {loading ? (
          <p>Loading...</p>
        ) : (
          jobs?.jobs?.slice(0, 5)?.map((item, index) => (
            <div
              className="border p-3 flex items-center gap-3 justify-between"
              key={index}
              onClick={() => navigate(`/find-job/${item._id}`)}
            >
              <div className="flex items-center gap-3 cursor-pointer">
                <div className="w-20 h-16 border">
                  <img
                    src={item?.company?.logo?.[0]}
                    alt="company logo"
                    className="w-full h-full object-contain p-1"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="text-sm font-bold">{item?.company?.name}</h3>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-500 text-xs">{item.title}</p>
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
              <div className="text-right flex items-center gap-3">
                <span className="bg-transparent border border-[#1EBBD7] text-[#1EBBD7] text-sm py-1 px-3 rounded-full font-medium">
                  {item.jobType}
                </span>
                <IoIosHeartEmpty />
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
