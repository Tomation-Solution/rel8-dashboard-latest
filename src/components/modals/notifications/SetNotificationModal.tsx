import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'

interface SetNotificationModalProps {
    handleCloseModal: () => void;
    selectedRowData:object|null
  }
  

const SetNotificationModal = ({handleCloseModal,selectedRowData}:SetNotificationModalProps) => {
    const [selectedNotificationType, setSelectedNotificationType] = React.useState<string>('');

    console.log('------->',selectedRowData)

    const handleNotificationTypeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedNotificationType(event.target.name);
      };

  return (
    <div className="fixed inset-0 flex items-center text-blak justify-center z-50 text-black bg-black bg-opacity-80 font-light">

    <div className="bg-white rounded-lg  w-full max-w-md  ">
    <div className="flex items-center justify-between border-b px-7 py-4  text-xl">
      <h3 className="text-lg font-medium">Set Notification </h3>
      <AiOutlineClose
        onClick={() => handleCloseModal()}
        className="w-5 hover:cursor-pointer h-5 bg-red-500 text-white"
      />
    </div>
    <div className="px-7 py-4">
      <p className="text-sm">
      Please confirm subscription deadline message 
      </p>
      <form>
      <div className="grid grid-cols-1 gap-4 text-sm my-3">
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="aweekTodeadline"
            checked={selectedNotificationType === 'aweekTodeadline'}
            onChange={handleNotificationTypeChange}
            className="form-checkbox text-blue-600"
          />
          <span>A week to deadline</span>
        </label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="now"
            checked={selectedNotificationType === 'now'}
            onChange={handleNotificationTypeChange}
            className="form-checkbox text-blue-600"
          />
          <span>Now</span>
        </label>
    
        
      </div>
    </form>
    </div>
    <div className="flex px-7 py-4 items-center justify-start p-3">
    
      <button  className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
        Confirm
      </button>
    </div>
  </div>
    </div>
  )
}

export default SetNotificationModal