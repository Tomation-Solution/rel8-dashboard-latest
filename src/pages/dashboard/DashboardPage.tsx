import DashboardCard from "../../components/DashboardCard"
import GroupedBarChart from "../../components/charts/GroupedBarChart";
import DonughtChart from "../../components/charts/DonughtChart";
import { dashboardPageDashboardData } from "../../data/dashboard/dashboardPageDashboardData";
import TableMetaData from "../../components/TableMetaData";
import RegistrationTable from "../../components/tables/RegistrationTable";


const DashboardPage = () => {
  return (
    <div className="w-full h-full py-3 text-black font-poppins">
      <h3 className="my-5 text-xl font-normal text-statpurple">Dashboard</h3>

      {/* Dashboard Cards  */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3">
        {dashboardPageDashboardData.map((data, index) => (
          <DashboardCard
            key={index}
            title={data.title}
            value={data.value}
            percentageIncrease={data.percentageIncrease}
            percetageIncreaseText={data.percetageIncreaseText}
            backgroundIconColor={data.backgroundIconColor}
            icon={data.icon}
          />
        ))}
      </div>

      {/* Charts */}
      <div className="grid items-center grid-cols-1 gap-5 my-10 md:grid-cols-3 ">
        <div className="col-span-1 md:col-span-2">
          <GroupedBarChart />
        </div>
        <div className="h-full col-span-1 bg-yellow-400 ">
          <DonughtChart />
        </div>
      </div>

      {/* RegistrationTable */}
      <div className="w-full">
        <TableMetaData title={"Users Details"}  hideFilter={true} />
        <RegistrationTable />
      </div>

    
    </div>
  )
}

export default DashboardPage