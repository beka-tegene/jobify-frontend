import React, { useState, useEffect } from "react";
import {
  ButtonUi,
  FileInput,
  Pagination,
  Textarea,
  TextInput,
} from "../../../Components";
import { MdDelete, MdEditNote } from "react-icons/md";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  addCompanyRequest,
  deleteCompanyRequest,
  fetchCompaniesRequest,
  updateCompanyRequest,
} from "../../../Store/Hook/companySlice";
export const ManageCompany = () => {
  const dispatch = useDispatch();
  const { companies, loading, error } = useSelector((state) => state.company); 
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [editMode, setEditMode] = useState(false); 
  const [selectedCompany, setSelectedCompany] = useState(null); 
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); 
  const [companyToDelete, setCompanyToDelete] = useState(null); 

  const { control, handleSubmit, reset, setValue } = useForm(); 

  useEffect(() => {
    dispatch(fetchCompaniesRequest({ page: currentPage, pageSize })); 
  }, [dispatch, currentPage, pageSize]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handlePageSizeChange = (size) => {
    setPageSize(size);
    setCurrentPage(1); 
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("image", data.companyLogo); 
    formData.append("description", data.description);
    formData.append("name", data.companyName);

    if (editMode) {
      formData.append("_id", selectedCompany._id); 
      dispatch(updateCompanyRequest({ id: selectedCompany._id, formData }));
    } else {
      dispatch(addCompanyRequest(formData)); 
    }

    toggleModal();
    reset(); 
    setEditMode(false);
  };

  const handleDeleteCompanyClick = (companyId) => {
    setCompanyToDelete(companyId);
    setDeleteModalOpen(true);
  };

  const confirmDeleteCompany = () => {
    dispatch(deleteCompanyRequest(companyToDelete)); 
    setDeleteModalOpen(false); 
    setCompanyToDelete(null); 
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false); 
    setCompanyToDelete(null); 
  };

  const handleEditCompany = (company) => {
    setEditMode(true);
    setSelectedCompany(company);
    toggleModal();

    setValue("companyName", company.name);
    setValue("description", company.description);
  };

  return (
    <div className="px-5 py-6">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Manage Companies</h2>
        <ButtonUi
          label="Post Company"
          type="button"
          onClick={() => {
            toggleModal();
            setEditMode(false); 
            reset(); 
          }}
          className="bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
        />
      </div>
      <p className="font-medium text-gray-400 mb-4">
        Find the best candidates with ease.
      </p>
      <div className="grid grid-cols-3 gap-3 mb-5">
        {companies?.companies?.map((company) => (
          <div
            className="max-w-2xl mx-auto px-6 py-12 bg-white relative rounded-md"
            key={company._id}
          >
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 rounded-full mr-6 overflow-hidden">
                <img
                  src={company.logo}
                  alt={`logo`}
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-3xl font-bold text-gray-800">
                {company.name}
              </h1>
            </div>
            <div>
              <p className="text-gray-600 leading-relaxed">
                {company.description}
              </p>
            </div>
            <div className="absolute top-4 right-4 flex items-center gap-4">
              <MdDelete
                className="cursor-pointer text-red-500"
                size={18}
                onClick={() => handleDeleteCompanyClick(company._id)} 
              />
              <MdEditNote
                className="cursor-pointer text-blue-500"
                size={20}
                onClick={() => handleEditCompany(company)} 
              />
            </div>
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={companies?.totalPages}
        onPageChange={handlePageChange}
        pageSize={pageSize}
        onPageSizeChange={handlePageSizeChange}
      />

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg relative">
            <h2 className="text-xl font-semibold mb-4">
              {editMode ? "Edit Company" : "Post a Company"}
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-2"
            >
              <TextInput
                label="Company Name"
                name="companyName"
                control={control}
                placeholder="Enter company name"
                rules={{
                  required: "Company name is required",
                }}
                className="border-gray-300"
              />
              <FileInput
                label="Company Logo"
                name="companyLogo"
                control={control}
                rules={{ required: "Logo is required" }}
                aspectRatio="1/1"
              />
              <Textarea
                label="Description"
                name="description"
                control={control}
                rows={4}
                placeholder="Enter company description"
                rules={{
                  required: "Description is required",
                }}
                className="border-gray-300"
              />

              <div className="flex items-center justify-end gap-3">
                <ButtonUi
                  onClick={toggleModal}
                  label="Cancel"
                  type="reset"
                  className="bg-transparent w-full hover:bg-[#ceeff5] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#1EBBD7] hover:text-white font-semibold"
                />
                <ButtonUi
                  label={editMode ? "Update Company" : "Post Company"}
                  type="submit"
                  className="bg-[#1EBBD7] w-full border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
                />
              </div>
            </form>
          </div>
        </div>
      )}

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
                onClick={confirmDeleteCompany}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
