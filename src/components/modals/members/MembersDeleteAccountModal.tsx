import { AiOutlineClose } from "react-icons/ai";
import avatar from "../../../assets/dummy-images/avatar/avatar-1.jpg";



interface MembersDeleteAccountModalProps {
  handleCloseModal: () => void;
  selectedRowData:object|null
}

const MembersDeleteAccountModal = ({handleCloseModal,selectedRowData}: MembersDeleteAccountModalProps) => {

  if (selectedRowData){

    // const { name } = selectedRowData as EmployeesTableDataType; 
    return (
      <div className="fixed inset-0 flex items-center text-blak justify-center z-50 text-black bg-black bg-opacity-80 font-light">
      <div className="bg-white rounded-lg  w-full max-w-md  ">
        <div className="flex items-center justify-between border-b px-7 py-4  text-xl">
          <h3 className="text-lg font-medium">Delete Account </h3>
          <AiOutlineClose
            onClick={() =>handleCloseModal()}
            className="w-5 hover:cursor-pointer h-5 bg-red-500 text-white"
          />
        </div>
        <div className="px-7 py-4">
          <p className="text-sm">
            Are you sure you want to permanently remove this member  from the
            society ?
          </p>
          <div className="flex items-center gap-3 mt-5">
            <img src={avatar} className="w-10 h-10 rounded-full" alt="" />
            <div>
              <h3 className="text-base font-medium">Enterprise Media Suite</h3>
              <p className="text-sm">timcenac45@email.com</p>
            </div>
          </div>
        </div>
        <div className="flex px-7 py-4 items-center justify-between p-3">
          <button
            onClick={() =>handleCloseModal()} // Close the modal
            className="border border-blue-500 text-blue-500 bg-white px-4 py-2 rounded mt-4 hover:bg-blue-500 hover:text-white"
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
            Delete
          </button>
        </div>
      </div>
    </div>
    )
  } else {
    return null
  }
}

export default MembersDeleteAccountModal