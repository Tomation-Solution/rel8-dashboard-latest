import "chart.js/auto";
import { Chart } from "react-chartjs-2";

const DonughtChart = () => {
  const data = {
    labels: ["In Progress", "Completed"],
    datasets: [
      {
        data: [300, 50],
        backgroundColor: ["#39bcf9", "#ff3b30"],
        hoverBackgroundColor: ["#39bcf9", "#ff3b30"],
      },
    ],
  };

  return (
    <div className="flex flex-col h-full bg-white border px-8 py-5 border-gray-200 rounded-md hover:bg-gray font-light" >
      <h5 className='my-2 text-base font-[500] text-statpurple'>Task</h5>
      <div className="grid place-items-center 0 flex-[1]" >

      <Chart type="doughnut" data={data} />
      </div>
    </div>
  );
};

export default DonughtChart;
