import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';


const GroupedBarChart = () => {

    const data = {
        labels: ['Jan', 'Feb', 'March', 'April','June','July'],
        datasets: [
          {
            label: 'Subscribed',
            data: [12, 19, 3, 5,20,17],
            backgroundColor: '#347AE2',
            borderColor: '#347AE2',
            borderWidth: 1,
          },
          {
            label: 'Unsubscribed',
            data: [8, 10, 8, 12,18,16],
            backgroundColor: '#39BCF9',
            borderColor: '#39BCF9',
            borderWidth: 1,
          },
        ],
      };
      
      const options = {
        scales: {
          x: {
            stacked: false,
          },
          y: {
            stacked: false,
          },
        },
      };

  return (
    <div className='px-8 py-5 font-light bg-white border border-gray-200 rounded-md hover:bg-gray'>
      <h5 className='my-2  text-base font-[500] text-statpurple' >Users Stats</h5>
      <Chart type='bar' data={data} options={options} />
    </div>
  )
}

export default GroupedBarChart