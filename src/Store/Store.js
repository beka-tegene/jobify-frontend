import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import loginReducer from "./Hook/loginSlice";
import companyReducer from "./Hook/companySlice";
import adminReducer from "./Hook/adminSlice";
import jobsReducer from "./Hook/jobsSlice";
import { JobifyMiddleware } from "./Middleware/JobifyMiddleware";

const sagaMiddleware = createSagaMiddleware();

const Store = configureStore({
  reducer: {
    login: loginReducer,
    company: companyReducer,
    admin: adminReducer,
    jobs: jobsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(JobifyMiddleware);

export default Store;
