// src/Store/Middleware/adminSaga.js

import { call, put, takeLatest } from "redux-saga/effects";
import {
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
  updatePasswordAdminFailure,
  updatePasswordAdminSuccess,
  updatePasswordAdminRequest,
} from "../Hook/adminSlice";

import {
  fetchAdminsApi,
  fetchAdminByIdApi,
  addAdminApi,
  updateAdminApi,
  deleteAdminApi,
  updateUserPassword,
} from "../../API/api";

// Fetch all admins
function* handleFetchAdmins() {
  try {
    const response = yield call(fetchAdminsApi);
    yield put(fetchAdminsSuccess(response));
  } catch (error) {
    yield put(fetchAdminsFailure(error.message || "Failed to fetch admins"));
  }
}

// Fetch an admin by ID
function* handleFetchAdminById(action) {
  try {
    const response = yield call(fetchAdminByIdApi, action.payload);
    yield put(fetchAdminByIdSuccess(response));
  } catch (error) {
    yield put(
      fetchAdminByIdFailure(
        error.message || `Failed to fetch admin with ID: ${action.payload}`
      )
    );
  }
}

// Add a new admin
function* handleAddAdmin(action) {
  try {
    const response = yield call(addAdminApi, action.payload);
    yield put(addAdminSuccess(response));
  } catch (error) {
    yield put(addAdminFailure(error.message || "Failed to add admin"));
  }
}

// Update an admin
function* handleUpdateAdmin(action) {
  try {
    const response = yield call(
      updateAdminApi,
      action.payload.id,
      action.payload
    );
    yield put(updateAdminSuccess(response));
  } catch (error) {
    yield put(updateAdminFailure(error.message || "Failed to update admin"));
  }
}

// Update Password an admin
function* handleUpdatePasswordAdmin(action) {
  
  try {
    const response = yield call(
      updateUserPassword,
      action.payload.id,
      action.payload
    );
    yield put(updatePasswordAdminSuccess(response));
  } catch (error) {
    yield put(
      updatePasswordAdminFailure(error.message || "Failed to update admin")
    );
  }
}

// Delete an admin
function* handleDeleteAdmin(action) {
  console.log(action.payload);

  try {
    yield call(deleteAdminApi, action.payload);
    yield put(deleteAdminSuccess(action.payload));
  } catch (error) {
    yield put(deleteAdminFailure(error.message || "Failed to delete admin"));
  }
}

export function* watchAdmins() {
  yield takeLatest(fetchAdminsRequest.type, handleFetchAdmins);
  yield takeLatest(fetchAdminByIdRequest.type, handleFetchAdminById);
  yield takeLatest(addAdminRequest.type, handleAddAdmin);
  yield takeLatest(updateAdminRequest.type, handleUpdateAdmin);
  yield takeLatest(deleteAdminRequest.type, handleDeleteAdmin);
  yield takeLatest(updatePasswordAdminRequest.type, handleUpdatePasswordAdmin);
}
