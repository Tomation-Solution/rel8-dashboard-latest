import { ReactNode } from "react";
import { BsArrowUpRight } from "react-icons/bs";

interface DashboardCardProps {
    title:string;
    value:string;
    percentageIncrease:string;
    percetageIncreaseText?:string
    icon:ReactNode;
    backgroundIconColor:string;
}

const DashboardCard = ({  title,value,percentageIncrease,percetageIncreaseText,icon,backgroundIconColor}:DashboardCardProps) => {
  return (
    <div className='grid p-6 bg-white border border-gray-200 rounded-md hover:bg-gray font-light' >
        <div className='' >
            <div  className="flex items-center justify-between" >
            <div>
                <h3 className='font-bold my-2 text-2xl tracking-tight text-statpurple' >{value}</h3>
            </div>
                <div  className={`rounded-full flex items-center justify-center h-fit p-2 w-fit ${backgroundIconColor}`} >
                    {icon}
                </div>
            </div>
        </div>
                <p className='font-normal text-[#545f7d] uppercase' >{title}</p>
        <div className='flex  items-center justify-between gap-1 text-xs font-light mt-2 mb-1' >
            <span className=" flex items-center gap-1" > <BsArrowUpRight className="text-green-400 w-4 h-4" /> {percentageIncrease} </span>
            <span className='flex items-center gap-1 text-[#6c757d]' >{percetageIncreaseText}</span>
        </div>
        <p></p>
    </div>
  )
}

export default DashboardCard