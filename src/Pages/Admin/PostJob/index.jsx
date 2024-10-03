import React, { useEffect } from "react";
import {
  ButtonUi,
  RangeInput,
  SelectInput,
  Textarea,
  TextInput,
} from "../../../Components";
import { useForm } from "react-hook-form";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addJobRequest,
  updateJobRequest,
  fetchJobByIdRequest,
} from "../../../Store/Hook/jobsSlice";
import { fetchCompaniesRequest } from "../../../Store/Hook/companySlice";

export const PostJob = () => {
  const { id } = useParams();
  const { control, handleSubmit, setValue } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { companies } = useSelector((state) => state.company);
  const { selectedJob, loading } = useSelector((state) => state.jobs);

  useEffect(() => {
    dispatch(fetchCompaniesRequest());
    if (id) {
      dispatch(fetchJobByIdRequest(id));
    }
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedJob) {
      setValue("jobTitle", selectedJob?.job?.title);
      setValue("jobDescription", selectedJob?.job?.description);
      setValue("companyName", selectedJob?.job?.company);
      setValue("deadline", selectedJob?.job?.deadline);
      setValue("location", selectedJob?.job?.location);
      setValue("jobType", selectedJob?.job?.jobType);
      setValue("experienceLevel", selectedJob?.job?.experienceLevel);
      setValue("salaryRange", selectedJob?.job?.minSalary);
      setValue("responsibilities", selectedJob?.job?.responsibilities?.[0]);
      setValue("requirements", selectedJob?.job?.requirements?.[0]);
    }
  }, [selectedJob, setValue]);

  const onSubmit = async (data) => {
    const jobData = {
      title: data.jobTitle,
      description: data.jobDescription,
      company: data.companyName,
      deadline: data.deadline,
      location: data.location,
      jobType: data.jobType,
      experienceLevel: data.experienceLevel,
      minSalary: data.salaryRange,
      maxSalary: data.salaryRange,
      responsibilities: [data.responsibilities],
      requirements: [data.requirements],
      tags: [],
      Applylink: "https://example.com/apply",
    };

    if (id) {
      dispatch(updateJobRequest({ id, jobData }));
    } else {
      dispatch(addJobRequest(jobData));
    }

    navigate("/admin/jobs"); // Navigate after submission
  };

  return (
    <div className="px-5 py-6">
      <h1 className="font-medium text-2xl">
        {id ? "Edit Job" : "Post a New Job"}
      </h1>
      <p className="font-medium text-gray-400 mb-3">
        {id ? "Update the job details." : "Find the best candidates with ease."}
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white p-5 rounded-md "
      >
        <div className="grid grid-cols-2 gap-4 mb-5">
          <TextInput
            label="Job Title"
            name="jobTitle"
            control={control}
            rules={{ required: "Job title is required" }}
            className="border-gray-300"
          />
          <TextInput
            label="Deadline"
            name="deadline"
            type="date"
            control={control}
            rules={{ required: "Deadline is required" }}
            className="border-gray-300"
          />
          <TextInput
            label="Location"
            name="location"
            control={control}
            rules={{ required: "Location is required" }}
            className="border-gray-300"
          />
          <TextInput
            label="Experience Level"
            name="experienceLevel"
            control={control}
            type="number"
            rules={{ required: "Experience Level is required" }}
            className="border-gray-300"
          />
          <SelectInput
            label="Job Type"
            name="jobType"
            control={control}
            rules={{ required: "Please select a job type" }}
            options={[
              { value: "full-time", label: "Full-Time" },
              { value: "part-time", label: "Part-Time" },
              { value: "contract", label: "Contract" },
              { value: "freelance", label: "Freelance" },
            ]}
            className="border-gray-300"
          />
          <SelectInput
            label="Company Name"
            name="companyName"
            control={control}
            rules={{ required: "Please select a company name" }}
            options={
              companies?.companies?.map((item) => ({
                value: item._id,
                label: item.name,
              })) || []
            }
            className="border-gray-300"
          />
          <div className="col-span-2">
            <RangeInput
              label="Salary Range ($)"
              name="salaryRange"
              control={control}
              min={3000}
              max={20000}
              step={500}
              defaultValue={5000}
              className="border-gray-300"
            />
          </div>
          <Textarea
            label="Job Description"
            name="jobDescription"
            control={control}
            rows={8}
            placeholder="Describe the job role and requirements"
            rules={{ required: "Job description is required" }}
            className="border-gray-300"
          />
          <Textarea
            label="Responsibilities"
            name="responsibilities"
            control={control}
            rows={8}
            placeholder="Describe the responsibilities"
            rules={{ required: "Responsibilities is required" }}
            className="border-gray-300"
          />
          <Textarea
            label="Requirements"
            name="requirements"
            control={control}
            rows={8}
            placeholder="Describe the requirements"
            rules={{ required: "Requirements is required" }}
            className="border-gray-300"
          />
        </div>
        <div className="flex items-center justify-end gap-3">
          <div className="flex w-2/4 items-center justify-end gap-3">
            <ButtonUi
              label="Cancel"
              type="reset"
              className="bg-transparent w-full hover:bg-[#ceeff5] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#1EBBD7] hover:text-white font-semibold"
            />
            <ButtonUi
              label={id ? "Update Job" : "Post Job"}
              type="submit"
              className="bg-[#1EBBD7] w-full border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
            />
          </div>
        </div>
      </form>
    </div>
  );
};
