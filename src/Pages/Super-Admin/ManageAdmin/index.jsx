import React, { useState, useEffect } from "react";
import { ButtonUi, SelectInput, Table, TextInput } from "../../../Components";
import { useNavigate } from "react-router-dom";
import { MdDelete, MdEditNote } from "react-icons/md";
import { GrFormView } from "react-icons/gr";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAdminsRequest,
  addAdminRequest,
  updateAdminRequest,
  deleteAdminRequest,
} from "../../../Store/Hook/adminSlice";

export const ManageAdmin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { admins, loading, error } = useSelector((state) => state.admin);

  const { control, handleSubmit, reset, setValue } = useForm();
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedAdmin, setSelectedAdmin] = useState(null);
  const [adminIdToDelete, setAdminIdToDelete] = useState(null);

  useEffect(() => {
    dispatch(fetchAdminsRequest());
  }, [dispatch]);

  const handleDeleteAdminClick = (adminId) => {
    setAdminIdToDelete(adminId);
    setDeleteModalOpen(true);
  };

  const confirmDeleteAdmin = () => {
    dispatch(deleteAdminRequest(adminIdToDelete));
    setDeleteModalOpen(false);
    setAdminIdToDelete(null);
  };

  const cancelDelete = () => {
    setDeleteModalOpen(false);
    setAdminIdToDelete(null);
  };

  const openEditModal = (admin) => {
    setSelectedAdmin(admin);
    setValue("name", admin.name);
    setValue("email", admin.email);
    setValue("role", admin.role);
    setEditModalOpen(true);
  };

  const onSubmit = (data) => {
    if (selectedAdmin?._id) {
      dispatch(updateAdminRequest({ id: selectedAdmin._id, ...data }));
    } else {
      dispatch(addAdminRequest(data));
    }
    resetFormState();
  };

  const resetFormState = () => {
    reset();
    setSelectedAdmin(null);
    setEditModalOpen(false);
  };

  const columns = [
    {
      key: "name",
      label: "Name",
    },
    {
      key: "email",
      label: "Email",
    },
    {
      key: "role",
      label: "Role",
    },
    {
      key: "actions",
      label: "Actions",
      render: (row) => (
        <div className="flex items-center gap-2">
          <GrFormView
            onClick={() =>
              navigate(`/super-admin/manage-admins/detail/${row._id}`)
            }
            className="cursor-pointer text-yellow-500"
            size={22}
          />
          <MdEditNote
            className="cursor-pointer text-blue-500"
            size={20}
            onClick={() => openEditModal(row)}
          />
          <MdDelete
            className="cursor-pointer text-red-500"
            size={18}
            onClick={() => handleDeleteAdminClick(row._id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="px-5 py-6">
      <div className="flex items-center justify-between">
        <h2 className="font-medium text-2xl">Manage Admins</h2>
        <ButtonUi
          label="Add Admin"
          type="button"
          onClick={() => setEditModalOpen(true)}
          className="bg-[#1EBBD7] border border-[#1EBBD7] py-2 px-7 rounded-md text-[#fafeff] font-semibold"
        />
      </div>
      <p className="font-medium text-gray-400 mb-3">
        Manage your administrators effectively.
      </p>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <Table
            columns={columns}
            data={admins?.users}
            pagination={{ rowsPerPage: 10 }}
          />
        )}
      </div>

      {/* Delete Confirmation Modal */}
      {deleteModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">Delete Admin</h2>
            <p>Are you sure you want to delete this admin?</p>
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
                onClick={confirmDeleteAdmin}
                className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-md"
              />
            </div>
          </div>
        </div>
      )}

      {/* Add/Edit Admin Modal */}
      {editModalOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white w-full max-w-sm p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-semibold mb-4">
              {selectedAdmin ? "Edit Admin" : "Add Admin"}
            </h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <TextInput
                label="Name"
                name="name"
                control={control}
                rules={{
                  required: "Name is required",
                }}
                className="border-gray-300"
              />
              <TextInput
                label="Email"
                name="email"
                type="email"
                control={control}
                rules={{
                  required: "Email is required",
                }}
                className="border-gray-300"
              />
              <SelectInput
                label="Role"
                name="role"
                control={control}
                rules={{ required: "Please select a Role" }}
                options={[
                  { value: "admin", label: "Admin" },
                  { value: "superadmin", label: "Super Admin" },
                ]}
                className="border-gray-300"
              />
              {!selectedAdmin?._id && (
                <TextInput
                  label="Password"
                  name="password"
                  type="password"
                  control={control}
                  rules={{
                    required: "Password is required",
                  }}
                  className="border-gray-300"
                />
              )}
              <div className="flex items-center justify-end mt-4 gap-3">
                <ButtonUi
                  label="Cancel"
                  type="button"
                  onClick={resetFormState}
                  className="bg-transparent hover:bg-gray-100 border border-gray-400 py-2 px-6 rounded-md text-gray-700"
                />
                <ButtonUi
                  label="Submit"
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-md"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
