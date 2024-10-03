import axiosInstance from "./axiosInstance";

// Login API
export const loginApi = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);


    return response.data; // Assuming this contains the JWT token and user data
  } catch (error) {
    throw new Error("Login failed");
  }
};

// Logout API (if you need to perform any server-side actions on logout)
export const logoutApi = async () => {
  try {
    const response = await axiosInstance.post("/auth/logout");
    return response.data;
  } catch (error) {
    throw new Error("Logout failed");
  }
};
// Fetch all admins
export const fetchAdminsApi = async () => {
  const response = await axiosInstance.get("/users/getallusers");
  return response.data;
};

// Fetch an admin by ID
export const fetchAdminByIdApi = async (adminId) => {
  const response = await axiosInstance.get(`/users/getuserById/${adminId}`);
  return response.data;
};

// Add a new admin
export const addAdminApi = async (adminData) => {
  const response = await axiosInstance.post("/auth/register", adminData);
  return response.data;
};

// Update an admin by ID
export const updateAdminApi = async (adminId, updatedAdmin) => {
  const response = await axiosInstance.patch(`/users/update/${adminId}`, updatedAdmin);
  return response.data;
};

// Delete an admin by ID
export const deleteAdminApi = async (adminId) => {
  const response = await axiosInstance.post(`/users/delete/${adminId}`);
  return response.data;
};

// Fetch a company by ID
export const fetchCompaniesApi = async () => {
  const response = await axiosInstance.get("/company");
  return response.data;
};

// Fetch a company by ID
export const fetchCompanyByIdApi = async (companyId) => {
  const response = await axiosInstance.get(`/company/${companyId}`);
  return response.data;
};

// Add a new company
export const addCompanyApi = async (companyData) => {
  const response = await axiosInstance.post("/company", companyData);
  return response.data;
};

// Update a company by ID
export const updateCompanyApi = async (companyId, updatedCompany) => {
  const response = await axiosInstance.put(`/company/${companyId}`, updatedCompany);
  return response.data;
};

// Delete a company by ID
export const deleteCompanyApi = async (companyId) => {
  const response = await axiosInstance.delete(`/company/${companyId}`);
  return response.data;
};

// Fetch all jobs
export const fetchJobsApi = async (filters = {}) => {
  try {
    const query = new URLSearchParams(filters).toString();
    const response = await axiosInstance.get(`/job/getalljobs?${query}`);
    return response.data
  } catch (error) {
    throw new Error("Failed to fetch jobs");
  }
};

// Add a new job
export const addJobApi = async (job) => { 
  try {
    const response = await axiosInstance.post("/job", job);
    return response.data;
  } catch (error) {
    throw new Error("Failed to add job");
  }
};

// Update a job
export const updateJobApi = async (jobId, updatedJob) => {
  try {
    const response = await axiosInstance.put(`/job/${jobId}`, updatedJob);
    return response.data; // Assuming the updated job is returned in response.data
  } catch (error) {
    throw new Error("Failed to update job");
  }
};

// Delete a job
export const deleteJobApi = async (jobId) => {
  try {
    await axiosInstance.delete(`/job/${jobId}`);
    return jobId; // Return the jobId that was deleted
  } catch (error) {
    throw new Error("Failed to delete job");
  }
};

export const fetchJobByIdApi = async (jobId) => {
  try {
    const response = await axiosInstance.get(`/job/${jobId}`);
    return response.data; // Assuming the job data is returned in response.data
  } catch (error) {
    throw new Error(`Failed to fetch job with ID: ${jobId}`);
  }
}; 

export const updateUserPassword = async (userId, updatedUser) => {
  try {
    const response = await axiosInstance.patch(`/users/updateUserPassword/${userId}`, updatedUser);
    return response.data;
  } catch (error) {
    throw new Error("Failed to update job");
  }
};