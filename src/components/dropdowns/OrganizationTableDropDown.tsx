import { BiUserX } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { AiOutlineDelete } from "react-icons/ai";
import { FiUserCheck } from "react-icons/fi";
import { OrganizationTableDataType } from "../../types/tables/organization";




interface CompaniesTableDropDownProps {
    currentRow:OrganizationTableDataType;  
    handleOpenModal:(rowData:object,modalName:string)=>void;
  }


const CompaniesTableDropDown = ({currentRow,handleOpenModal}:CompaniesTableDropDownProps) => {
  return (
    <div className="absolute right-7 mt-[10px] w-[250px] bg-white border-gray-200 border rounded-lg shadow-lg z-2 ">
    <ul className="divide-y" >
      <li>
        <div
         onClick={() => handleOpenModal(currentRow,'activate-organization-subscription-modal')}
          className="menu-item"
        > <FiUserCheck className='w-5 h-5' /> Activate Subscription
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'deactivate-organization-subscription-modal')}
        >
          <BiUserX  className='w-5 h-5' /> Deactivate Subscription
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'view-organization-profile-modal')}
        >
          <CgProfile  className='w-5 h-5' /> View Profile
        </div>
      </li>
      <li>
        <div
          className="menu-item"
          onClick={() => handleOpenModal(currentRow,'delete-organization-account-modal')}
        >
          <AiOutlineDelete  className='w-5 h-5' /> Delete Account
        </div>
      </li>
    </ul>
  </div> 
  )
}

export default CompaniesTableDropDown