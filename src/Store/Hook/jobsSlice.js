// src/Store/Hook/jobsSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  selectedJob: null, // Add this to store the job fetched by ID
  loading: false,
  error: null,
};

const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsRequest: (state) => {
      state.loading = true;
    },
    fetchJobsSuccess: (state, action) => {
      state.jobs = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchJobsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    fetchJobByIdRequest: (state) => {
      state.loading = true;
    },
    fetchJobByIdSuccess: (state, action) => {
      state.selectedJob = action.payload;
      state.loading = false;
      state.error = null;
    },
    fetchJobByIdFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    addJobRequest: (state) => {
      state.loading = true;
    },
    addJobSuccess: (state, action) => {
      state.jobs.push(action.payload);
      state.loading = false;
      state.error = null;
    },
    addJobFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    updateJobRequest: (state) => {
      state.loading = true;
    },
    updateJobSuccess: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) state.jobs[index] = action.payload;
      state.loading = false;
      state.error = null;
    },
    updateJobFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
    deleteJobRequest: (state) => {
      state.loading = true;
    },
    deleteJobSuccess: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
      state.loading = false;
      state.error = null;
    },
    deleteJobFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const {
  fetchJobsRequest,
  fetchJobsSuccess,
  fetchJobsFailure,
  fetchJobByIdRequest,
  fetchJobByIdSuccess,
  fetchJobByIdFailure,
  addJobRequest,
  addJobSuccess,
  addJobFailure,
  updateJobRequest,
  updateJobSuccess,
  updateJobFailure,
  deleteJobRequest,
  deleteJobSuccess,
  deleteJobFailure,
} = jobsSlice.actions;

export default jobsSlice.reducer;
  