import { call, put, takeLatest } from "redux-saga/effects";
import { loginRequest, loginSuccess, loginFailure } from "../Hook/loginSlice";
import { loginApi } from "../../API/api";

function* handleLogin(action) {
  console.log(action);
  try {
    const response = yield call(loginApi, action.payload);
    const { token, user } = response;
    if (token) {
      localStorage.setItem("token", token);
      if (user.role === "superadmin") {
        window.location.href = "/super-admin/dashboard";
      }
      if (user.role === "admin") {
        window.location.href = "/admin/dashboard";
      }
      yield put(loginSuccess(user));
    } else {
      yield put(loginFailure("Invalid credentials"));
    }
  } catch (error) {
    yield put(loginFailure(error.message || "An error occurred during login"));
  }
}

export function* watchLogin() {
  yield takeLatest(loginRequest.type, handleLogin);
}
