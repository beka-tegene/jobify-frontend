import React, { useEffect, useState } from "react";
import {
  ButtonUi,
  CheckboxInput,
  Pagination,
  TextInput,
} from "../../../Components";
import { useForm } from "react-hook-form";
import { IoIosCalendar } from "react-icons/io";
import { IoLocation } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEditNote } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteJobRequest,
  fetchJobsRequest,
} from "../../../Store/Hook/jobsSlice";
import moment from "moment";
export const ManageJob = () => {
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

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [jobToDelete, setJobToDelete] = useState(null);

  const handleDeleteJobClick = (jobId) => {
    setJobToDelete(jobId);
    setDeleteModalOpen(true);
  };

  const confirmDeleteJob = () => {
    dispatch(deleteJobRequest(jobToDelete));
    setDeleteModalOpen(false);
    setJobToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setJobToDelete(null);
  };

  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalPages = jobs?.totalPages;

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1);
  };

  return (
    <div className="px-5 py-6">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Manage Jobs</h2>
        <ButtonUi
          onClick={() => navigate(`/admin/jobs/post`)}
          label="Post Job"
          type="button"
          className="bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
        />
      </div>
      <p className="font-medium text-gray-400 mb-3">
        Find the best candidates with ease.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full flex flex-col gap-3 border border-[#f0fdff] p-2 bg-[#ffffff] rounded-md"
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
      <div className="w-full flex flex-col gap-2  my-5">
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
              <MdDelete
                size={18}
                className="cursor-pointer text-red-500"
                onClick={() => handleDeleteJobClick(item._id)}
              />
              <MdEditNote
                size={20}
                className="cursor-pointer text-blue-500 "
                onClick={() => navigate(`/admin/jobs/post/${item._id}`)}
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Delete Company</h2>
            <p>Are you sure you want to delete this company?</p>
            <div className="flex items-center justify-end mt-4 gap-3">
              <ButtonUi
                label="No"
                type="button"
                onClick={cancelDelete}
                className="bg-transparent hover:bg-gray-100 border border-gray-400 py-2 px-6 rounded-md text-gray-700"
              />
              <ButtonUi
                label="Yes"
                type="button"
                onClick={confirmDeleteJob}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
