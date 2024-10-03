// src/Store/Hook/adminSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  admins: [],
  selectedAdmin: null,
  loading: false,
  error: null,
};

const adminSlice = createSlice({
  name: "admins",
  initialState,
  reducers: {
    fetchAdminsRequest: (state) => {
      state.loading = true;
    },
    fetchAdminsSuccess: (state, action) => {
      state.admins = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAdminsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchAdminByIdRequest: (state) => {
      state.loading = true;
    },
    fetchAdminByIdSuccess: (state, action) => {
      state.selectedAdmin = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchAdminByIdFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addAdminRequest: (state) => {
      state.loading = true;
    },
    addAdminSuccess: (state, action) => {
      state.admins.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addAdminFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateAdminRequest: (state) => {
      state.loading = true;
    },
    updateAdminSuccess: (state, action) => {
      const index = state.admins.findIndex(
        (admin) => admin.id === action.payload.id
      );
      if (index !== -1) state.admins[index] = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateAdminFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    updatePasswordAdminRequest: (state) => {
      state.loading = true;
    },
    updatePasswordAdminSuccess: (state, action) => {
      const index = state.admins.findIndex(
        (admin) => admin.id === action.payload.id
      );
      if (index !== -1) state.admins[index] = action.payload;
      state.loading = false;
      state.error = null;
    },
    updatePasswordAdminFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },

    deleteAdminRequest: (state) => {
      state.loading = true;
    },
    deleteAdminSuccess: (state, action) => {
      state.admins = state.admins.filter(
        (admin) => admin.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    deleteAdminFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchAdminsRequest,
  fetchAdminsSuccess,
  fetchAdminsFailure,
  fetchAdminByIdRequest,
  fetchAdminByIdSuccess,
  fetchAdminByIdFailure,
  addAdminRequest,
  addAdminSuccess,
  addAdminFailure,
  updateAdminRequest,
  updateAdminSuccess,
  updateAdminFailure,
  deleteAdminRequest,
  deleteAdminSuccess,
  deleteAdminFailure,
  updatePasswordAdminRequest,
  updatePasswordAdminSuccess,
  updatePasswordAdminFailure,
} = adminSlice.actions;

export default adminSlice.reducer;
