// src/Store/Middleware/jobsSaga.js

import { call, put, takeLatest } from "redux-saga/effects";
import {
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
} from "../Hook/jobsSlice";

import {
  fetchJobsApi,
  fetchJobByIdApi,
  addJobApi,
  updateJobApi,
  deleteJobApi,
} from "../../API/api";

// Fetch all jobs    
function* handleFetchJobs(action) {
  try {
    const filters = action.payload;
    const response = yield call(fetchJobsApi ,filters);
    yield put(fetchJobsSuccess(response));
  } catch (error) {
    yield put(fetchJobsFailure(error.message || "Failed to fetch jobs"));
  }
}

// Fetch a job by ID
function* handleFetchJobById(action) {
  try {
    const response = yield call(fetchJobByIdApi, action.payload); // action.payload should be the jobId
    yield put(fetchJobByIdSuccess(response));
  } catch (error) {
    yield put(fetchJobByIdFailure(error.message || `Failed to fetch job with ID: ${action.payload}`));
  }
}

// Add a new job
function* handleAddJob(action) {
  
  try {
    const response = yield call(addJobApi, action.payload);
    yield put(addJobSuccess(response));
  } catch (error) {
    yield put(addJobFailure(error.message || "Failed to add job"));
  }
}

// Update a job
function* handleUpdateJob(action) {  
  try {
    const response = yield call(updateJobApi, action.payload.id, action.payload.jobData);
    yield put(updateJobSuccess(response));
  } catch (error) {
    yield put(updateJobFailure(error.message || "Failed to update job"));
  }
}

// Delete a job
function* handleDeleteJob(action) {
  try {
    yield call(deleteJobApi, action.payload);
    yield put(deleteJobSuccess(action.payload));
  } catch (error) {
    yield put(deleteJobFailure(error.message || "Failed to delete job"));
  }
}

export function* watchJobs() {
  yield takeLatest(fetchJobsRequest.type, handleFetchJobs);
  yield takeLatest(fetchJobByIdRequest.type, handleFetchJobById); // Watch for fetchJobByIdRequest
  yield takeLatest(addJobRequest.type, handleAddJob);
  yield takeLatest(updateJobRequest.type, handleUpdateJob);
  yield takeLatest(deleteJobRequest.type, handleDeleteJob);
}
