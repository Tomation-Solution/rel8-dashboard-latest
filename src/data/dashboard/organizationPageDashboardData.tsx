import {  UsersIcon } from "@heroicons/react/20/solid";
import { AiOutlinePieChart } from "react-icons/ai";
import { LuArrowDownUp } from "react-icons/lu";




export const organizationPageDashboardData = [
    {
        title:"Total Members",
        value:"10,800",
        percentageIncrease:"80.2%",
        percetageIncreaseText:"+20% From last month",
        backgroundIconColor:"bg-[#fbe7ff]",
        icon:<UsersIcon className="w-10 h-10 text-pink-500" />,
    },
    {
        title:"Comittees",
        value:"25",
        percentageIncrease:"10.2%",
        percetageIncreaseText:"+1.01% From last month",
        backgroundIconColor:"bg-blue-100",
        icon:<AiOutlinePieChart className="w-10 h-10 text-blue-500" />
    },
    {
        title:"Sectors",
        value:"5,000",
        percentageIncrease:"+100%",
        percetageIncreaseText:"+2.31% From Last Month",
        backgroundIconColor:"bg-orange-100",
        icon:<LuArrowDownUp className="w-10 h-10 text-orange-500" />
    }
    
]