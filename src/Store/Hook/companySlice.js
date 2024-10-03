// src/Store/Hook/companySlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  companies: [],
  selectedCompany: null,
  loading: false,
  error: null,
};

const companySlice = createSlice({
  name: "companies",
  initialState,
  reducers: {
    fetchCompaniesRequest: (state) => {
      state.loading = true;
    },
    fetchCompaniesSuccess: (state, action) => {
      state.companies = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCompaniesFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchCompanyByIdRequest: (state) => {
      state.loading = true;
    },
    fetchCompanyByIdSuccess: (state, action) => {
      state.selectedCompany = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchCompanyByIdFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addCompanyRequest: (state) => {
      state.loading = true;
    },
    addCompanySuccess: (state, action) => {
      state.companies.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addCompanyFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateCompanyRequest: (state) => {
      state.loading = true;
    },
    updateCompanySuccess: (state, action) => {
      const index = state.companies.findIndex(
        (company) => company.id === action.payload.id
      );
      if (index !== -1) state.companies[index] = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateCompanyFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteCompanyRequest: (state) => {
      state.loading = true;
    },
    deleteCompanySuccess: (state, action) => {
      state.companies = state.companies.filter(
        (company) => company.id !== action.payload
      );
      state.loading = false;
      state.error = null;
    },
    deleteCompanyFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchCompaniesRequest,
  fetchCompaniesSuccess,
  fetchCompaniesFailure,
  fetchCompanyByIdRequest,
  fetchCompanyByIdSuccess,
  fetchCompanyByIdFailure,
  addCompanyRequest,
  addCompanySuccess,
  addCompanyFailure,
  updateCompanyRequest,
  updateCompanySuccess,
  updateCompanyFailure,
  deleteCompanyRequest,
  deleteCompanySuccess,
  deleteCompanyFailure,
} = companySlice.actions;

export default companySlice.reducer;
