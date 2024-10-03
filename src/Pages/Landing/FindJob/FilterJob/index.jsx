import React from "react";
import { useForm } from "react-hook-form";
import { ButtonUi, CheckboxInput, TextInput } from "../../../../Components";

export const FilterJob = ({ onFilterChange }) => {
  const { control, handleSubmit } = useForm();

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

    onFilterChange(filters); 
  };

  return (
    <div className="flex flex-col items-center justify-center pb-10 pt-5 gap-2 px-[10%]">
      <h2 className="font-medium text-[#1EBBD7]">All Vacancy</h2>
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

        <div className="flex gap-5 items-center">
          <CheckboxInput label="Freelance" name="freelance" control={control} />
          <CheckboxInput label="Full Time" name="full_time" control={control} />
          <CheckboxInput label="Part Time" name="part_time" control={control} />
          <CheckboxInput label="Temporary" name="temporary" control={control} />
          <CheckboxInput label="Internship" name="internship" control={control} />
        </div>
      </form>
    </div>
  );
};
