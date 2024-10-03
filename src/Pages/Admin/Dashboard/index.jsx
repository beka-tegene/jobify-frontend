import React from "react";
import { SummaryCard } from "../../../Components";
import { FaBriefcase, FaBuilding, FaUsers } from "react-icons/fa";
import { Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";
export const Dashboard = () => {
  const barData = {
    labels: ["Total Jobs", "Total Companies", "Total Users", "Total Earned"],
    datasets: [
      {
        label: `Count`,
        data: [10, 6, 35, 243],
        backgroundColor: ["#0a5f59", "#252b42", "#D9A128", "#0a5f9e"],
      },
    ],
  };

  const pieData = {
    labels: ["Total Jobs", "Total Companies", "Total Users", "Total Earned"],
    datasets: [
      {
        data: [10, 6, 35, 243],
        backgroundColor: ["#0a5f59", "#252b42", "#D9A128", "#0a5f9e"],
      },
    ],
  };
  return (
    <div className="px-5 py-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4">
        <SummaryCard
          title="Total Jobs"
          value="1,200"
          icon={<FaBriefcase />}
          bgColor="bg-green-500"
        />
        <SummaryCard
          title="Total Companies"
          value="50"
          icon={<FaBuilding />}
          bgColor="bg-yellow-500"
        />
        <SummaryCard
          title="Total Users"
          value="300"
          icon={<FaUsers />}
          bgColor="bg-blue-500"
        />
      </div>
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-2 flex flex-col h-[45vh] ">
          <h5 className="text-xl font-medium text-gray-400">Report Summary</h5>
          <Bar data={barData} className="px-5" />
        </div>
        <div>
          <h5 className="text-xl font-medium text-gray-400">Report Summary</h5>
          <div className="col-span-2 flex flex-col h-[45vh]">
            <Pie data={pieData} className="p-5" />
          </div>
        </div>
      </div>
    </div>
  );
};
