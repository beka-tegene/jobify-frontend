// src/Store/Middleware/companySaga.js

import { call, put, takeLatest } from "redux-saga/effects";
import {
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
} from "../Hook/companySlice";

import {
  fetchCompaniesApi,
  fetchCompanyByIdApi,
  addCompanyApi,
  updateCompanyApi,
  deleteCompanyApi,
} from "../../API/api";

// Fetch all companies
function* handleFetchCompanies() {
  try {
    const response = yield call(fetchCompaniesApi);
    yield put(fetchCompaniesSuccess(response));
  } catch (error) {
    yield put(fetchCompaniesFailure(error.message || "Failed to fetch companies"));
  }
}

// Fetch a company by ID
function* handleFetchCompanyById(action) {
  try {
    const response = yield call(fetchCompanyByIdApi, action.payload);
    yield put(fetchCompanyByIdSuccess(response));
  } catch (error) {
    yield put(fetchCompanyByIdFailure(error.message || `Failed to fetch company with ID: ${action.payload}`));
  }
}

// Add a new company
function* handleAddCompany(action) {
  try {
    const response = yield call(addCompanyApi, action.payload);
    yield put(addCompanySuccess(response));
  } catch (error) {
    yield put(addCompanyFailure(error.message || "Failed to add company"));
  }
}

// Update a company
function* handleUpdateCompany(action) {  
  try {
    const response = yield call(updateCompanyApi, action.payload.id, action.payload.formData);
    yield put(updateCompanySuccess(response));
  } catch (error) {
    yield put(updateCompanyFailure(error.message || "Failed to update company"));
  }
}

// Delete a company
function* handleDeleteCompany(action) {
  try {
    yield call(deleteCompanyApi, action.payload);
    yield put(deleteCompanySuccess(action.payload));
  } catch (error) {
    yield put(deleteCompanyFailure(error.message || "Failed to delete company"));
  }
}

export function* watchCompanies() {
  yield takeLatest(fetchCompaniesRequest.type, handleFetchCompanies);
  yield takeLatest(fetchCompanyByIdRequest.type, handleFetchCompanyById);
  yield takeLatest(addCompanyRequest.type, handleAddCompany);
  yield takeLatest(updateCompanyRequest.type, handleUpdateCompany);
  yield takeLatest(deleteCompanyRequest.type, handleDeleteCompany);
}
