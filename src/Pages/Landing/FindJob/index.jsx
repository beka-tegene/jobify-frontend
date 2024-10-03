import React, { useEffect, useState } from "react";
import { Navigate } from "../Navigate";
import { Footer } from "../Footer";
import { FilterJob } from "./FilterJob";
import { JobCard } from "./JobCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchJobsRequest } from "../../../Store/Hook/jobsSlice";

export const FindJob = () => {
  const dispatch = useDispatch();
  const { jobs, loading, error,  } = useSelector((state) => state.jobs);
  
  const [currentPage, setCurrentPage] = useState(1);
  const [filters, setFilters] = useState({}); 
  const [pageSize, setPageSize] = useState(10); 

  useEffect(() => {
    dispatch(fetchJobsRequest({ page: currentPage, limit: pageSize, ...filters }));
  }, [dispatch, currentPage, pageSize, filters]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setCurrentPage(1); 
  };

  return (
    <div>
      <Navigate />
      <FilterJob onFilterChange={handleFilterChange} />
      <JobCard
        jobs={jobs?.jobs}
        currentPage={currentPage}
        totalPages={jobs?.totalPages}
        onPageChange={(page) => setCurrentPage(page)}
        pageSize={pageSize}
        onPageSizeChange={(size) => setPageSize(size)}
      />
      <Footer />
    </div>
  );
};
