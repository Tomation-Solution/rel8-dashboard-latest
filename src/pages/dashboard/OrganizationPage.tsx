import DashboardCard from "../../components/DashboardCard"
import GroupedBarChart from "../../components/charts/GroupedBarChart";
import DonughtChart from "../../components/charts/DonughtChart";
import TableMetaData from "../../components/TableMetaData";
import { organizationPageDashboardData } from "../../data/dashboard/organizationPageDashboardData";
import OrganizationTable from "../../components/tables/OrganizationTable";


const OrganizationPage = () => {
  return (
    <div className="font-poppins w-full  h-full  text-black py-3">
      <h3 className=" text-statpurple text-xl my-5  font-normal">Dashboard</h3>

      {/* Dashboard Cards  */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 md:grid-cols-3">
        {organizationPageDashboardData.map((data, index) => (
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5  items-center my-10 ">
        <div className="col-span-1 md:col-span-2">
          <GroupedBarChart />
        </div>
        <div className="col-span-1 h-full bg-yellow-400 ">
          <DonughtChart />
        </div>
      </div>

      {/* RegistrationTable */}
      <div className="w-full">
        <TableMetaData title={"Organization"}  hideFilter={true} />
        <OrganizationTable />
      </div>

    
    </div>
  )
}

export default OrganizationPage