import { NavLink, useLocation } from 'react-router-dom';

interface NavItemProps {
  icon:JSX.Element,
  name:string,
  link:string,  
  toggleSidebarLink?: () => void;
}


  

const NavItem = ({icon,name,link,toggleSidebarLink}:NavItemProps) => {

  const location = useLocation()
  
  return (
    <NavLink to={link} onClick={toggleSidebarLink}  className="">
      <div className={`flex my-1 items-center gap-3 group text-[15px] font-[0.875rem] text-[#6C7383] p-3 mx-4 rounded-lg group ${location.pathname == link ? "bg-primary text-white" : "hover:bg-primary hover:text-white"}`} >
        {icon}
        <span className="text-base">
         {name}
        </span>
      </div>
    </NavLink>
   
  )
}

export default NavItem