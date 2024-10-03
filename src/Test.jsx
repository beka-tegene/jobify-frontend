import { useForm } from "react-hook-form";
import { RadioInput } from "./Components/RadioInput";
import { SelectInput } from "./Components/SelectInput";
import { TextInput } from "./Components/TextInput";
import { CheckboxInput } from "./Components/CheckboxInput";
import { FileInput } from "./Components/FIleInput";
import { ButtonUi } from "./Components/Button";
import { VideoMedia } from "./Components/Video";
import { RangeInput } from "./Components/RangeInput";
import { Textarea } from "./Components/Textarea";
import { CourseCard } from "./Components/CourseCard";
import { Successful } from "./Components/Successful";
import { FaCog, FaDollarSign, FaExclamationCircle, FaHome, FaShoppingCart, FaUser, FaUsers } from "react-icons/fa";
import { SummaryCard } from "./Components/Summary";
import { Navigation } from "./Components/Navigation";
import { Sidebar } from "./Components/Sidebar";
import {  FilterBySelect } from "./Components/FilterBySelect";
import { FilterByCheckBox } from "./Components/FilterByCheckBox";
import { Accordion } from "./Components/Accordion";

function Test() {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
  ];
  const sideLinks = [
    { path: "/home", name: "Home", icon: FaHome },
    { path: "/profile", name: "Profile", icon: FaUser },
    { path: "/settings", name: "Settings", icon: FaCog },
  ];
  const filters = [
    {
      label: "Category",
      name: "category",
      options: [
        { label: "Technology", value: "technology" },
        { label: "Health", value: "health" },
        { label: "Education", value: "education" },
      ],
    },
    {
      label: "Price",
      name: "price",
      options: [
        { label: "Free", value: "free" },
        { label: "$0 - $50", value: "0-50" },
        { label: "$50 - $100", value: "50-100" },
      ],
    },
    {
      label: "Date",
      name: "date",
      options: [
        { label: "Last 7 days", value: "7-days" },
        { label: "Last 30 days", value: "30-days" },
        { label: "Last year", value: "1-year" },
      ],
    },
  ];
  const handleFilterChange = (name, value , c) => {
    console.log(`Filter changed: ${name} = ${value} ${c}`);
    // Add logic to handle the filter change
  };
  return (
    <div className="p-5">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-2/4 m-auto bg-[#957575] p-10"
      >
        <TextInput
          label="Username"
          name="username"
          control={control}
          rules={{
            required: "Username is required",
            pattern: {
              value: /^[a-zA-Z0-9_]{3,15}$/,
              message:
                "Invalid format. Should be 3-15 characters and can include letters, numbers, and underscores.",
            },
          }}
          className={"text-white"}
        />

        <SelectInput
          label="Choose a category"
          name="category"
          control={control}
          rules={{ required: "Category is required" }}
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
          ]}
        />
        <RadioInput
          label="Choose an option"
          name="radioGroup"
          control={control}
          rules={{ required: "You must select an option" }}
          options={[
            { value: "1", label: "Option 1" },
            { value: "2", label: "Option 2" },
            { value: "3", label: "Option 3" },
          ]}
        />
        <CheckboxInput
          label="Accept Terms and Conditions"
          name="termsAccepted"
          control={control}
          rules={{ required: "You must accept the terms and conditions" }}
        />
        <FileInput
          label="Upload File"
          name="file"
          control={control}
          rules={{ required: "File is required" }}
          aspectRatio="1/1"
        />
        <RangeInput
          label="Select Value"
          name="rangeInput"
          control={control}
          min={0}
          max={100}
          step={1}
          defaultValue={50}
          rules={{ required: "Value is required" }}
        />
        <Textarea
          label="Comments"
          name="comments"
          control={control}
          rows={7}
          placeholder="Enter your comments here..."
          rules={{ required: "Comments are required" }}
        />
        <ButtonUi
          label="Submit"
          type="submit"
          className="bg-green-500 hover:bg-green-600"
        />
      </form>
      <VideoMedia
        src="https://www.youtube.com/watch?v=qdBrxqZP1Bc"
        controls
        autoPlay
        loop
        muted
        width="600px"
        height="400px"
        className="border-2 border-gray-300 rounded-lg"
      />
      <div className="grid grid-cols-4 gap-4">
        <CourseCard
          data={{
            title: "Microsoft Power BI Course for Beginners - Practica...",
            imgSrc:
              "https://cdn.pixabay.com/photo/2024/05/26/10/15/bird-8788491_1280.jpg",
            chapters: 3,
            price: "$12",
            isFree: true,
          }}
        />
        <CourseCard
          data={{
            title: "Microsoft Power BI Course for Beginners - Practica...",
            imgSrc: "https://mcbperformance.com/images/T143766291",
            chapters: 3,
            price: "$12",
            isFree: true,
          }}
        />
        <CourseCard
          data={{
            title: "Microsoft Power BI Course for Beginners - Practica...",
            imgSrc:
              "https://kegeberew-elearning.s3.eu-north-1.amazonaws.com/coverPage-1723116315540.png",
            chapters: 3,
            price: "$12",
            isFree: true,
          }}
        />
      </div>
      <Successful
        message="Upload Complete"
        description="Your file has been uploaded successfully."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <SummaryCard
          title="Total Users"
          value="1,200"
          icon={<FaUsers />}
          bgColor="bg-green-500"
        />
        <SummaryCard title="Total Sales" value="$50,000" icon={<FaDollarSign />} bgColor="bg-yellow-500" />
        <SummaryCard title="Total Orders" value="300" icon={<FaShoppingCart />} bgColor="bg-blue-500" />
      <SummaryCard title="Pending Issues" value="5" icon={<FaExclamationCircle />} bgColor="bg-red-500" />
      <SummaryCard title="Pending Issues" value="5" icon={<FaExclamationCircle />} bgColor="bg-red-500" />
      </div>
      <Navigation links={links} logo="" />
      <Sidebar links={sideLinks} />
      <FilterBySelect filters={filters} onFilterChange={handleFilterChange} />
      <FilterByCheckBox filters={filters} onFilterChange={handleFilterChange} />
      <Accordion
        title="Section 1"
        content="This is the content of the first accordion section."
      />
      <Accordion
        title="Section 2"
        content={
          <div>
            <p>This is more complex content with HTML.</p>
            <ul className="list-disc pl-5">
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </div>
        }
      />
      <Accordion
        title="Section 3"
        content="This is the content of the third accordion section."
      />
    </div>
  );
}

export default Test;
