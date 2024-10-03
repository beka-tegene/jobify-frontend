import { all } from "redux-saga/effects";
import { watchLogin } from "../Sagas/loginSaga";
import { watchCompanies } from "../Sagas/companySaga";
import { watchAdmins } from "../Sagas/adminSaga";
import { watchJobs } from "../Sagas/jobsSaga";

export function* JobifyMiddleware() {
  yield all([watchLogin(), watchCompanies(), watchAdmins(), watchJobs()]);
}
