import React from "react";
import { AiOutlineClose } from "react-icons/ai";


interface OrganizationActivateSubscriptionModalProps {
  
  handleCloseModal : () => void;
  selectedRowData:object|null
}



const OrganizationActivateSubscriptionModal = ({handleCloseModal,selectedRowData}:OrganizationActivateSubscriptionModalProps) => {
  const [selectedSubscriptionType, setSelectedSubscriptionType] = React.useState<string>('');
  const [selectedSubscriptionDuration, setSelectedSubscriptionDuration] = React.useState<string>('');
  const [showSubscriptionTypeModal, setShowSubscriptionTypepModal] = React.useState<boolean>(true);
  const [showSubscriptionDurationModal, setShowSubscriptionDurationModal] = React.useState<boolean>(false);

  const handleNext = () => {
    setShowSubscriptionTypepModal(false);
    setShowSubscriptionDurationModal(true);
  };

  const handleSubscriptionTypeChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSubscriptionType(event.target.name);
  };

  const handleSubscriptionDurationChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSubscriptionDuration(event.target.name);
  };

  if (selectedRowData) {

    // const { name } = selectedRowData as CompaniesTableDataType; import the type for use

    return (
  
      <div className="fixed inset-0 flex items-center text-blak justify-center z-50 text-black bg-black bg-opacity-80 font-light">
  
        {/* Subscription  Type  Modal : This modal shows the type of scubscription that they want e.g pro et.*/}
      {showSubscriptionTypeModal && (
  
      <div className="bg-white rounded-lg  w-full max-w-md  ">
        <div className="flex items-center justify-between border-b px-7 py-4  text-xl">
          <h3 className="text-lg font-medium">Activate Subscription</h3>
          <AiOutlineClose
            onClick={() => handleCloseModal()}
            className="w-5 hover:cursor-pointer h-5 bg-red-500 text-white"
          />
        </div>
        <div className="px-7 py-4">
          <p className="text-sm">
            Please select the subscription type that you want to activate for E-Metrics Suite
          </p>
          <form>
          <div className="grid grid-cols-1 gap-4 text-sm my-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="free"
                checked={selectedSubscriptionType === 'free'}
                onChange={handleSubscriptionTypeChange}
                className="form-checkbox text-blue-600"
              />
              <span>Free</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="gold"
                checked={selectedSubscriptionType === 'gold'}
                onChange={handleSubscriptionTypeChange}
                className="form-checkbox text-blue-600"
              />
              <span>Gold</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="platinum"
                checked={selectedSubscriptionType === 'platinum'}
                onChange={handleSubscriptionTypeChange}
                className="form-checkbox text-blue-600"
              />
              <span>Platinum</span>
            </label>
            
          </div>
        </form>
        </div>
        <div className="flex px-7 py-4 items-center justify-between p-3">
          <button
            onClick={() => handleCloseModal()}
            className="border border-blue-500 text-blue-500 bg-white px-4 py-2 rounded mt-4 hover:bg-blue-500 hover:text-white"
          >
            Cancel
          </button>
          <button onClick={handleNext} className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
            Next
          </button>
        </div>
      </div>
      )}
  
      
  {/* Subscription Duration Modal  */}
  
      {showSubscriptionDurationModal && (
  
      <div className="bg-white rounded-lg  w-full max-w-md  ">
        <div className="flex items-center justify-between border-b px-7 py-4  text-xl">
          <h3 className="text-lg font-medium">Activate Subscription</h3>
          <AiOutlineClose
            onClick={() => handleCloseModal()}
            className="w-5 hover:cursor-pointer h-5 bg-red-500 text-white"
          />
        </div>
        <div className="px-7 py-4">
          <p className="text-sm">
          Please confirm the subscription timeline
          </p>
          <form>
          <div className="grid grid-cols-1 gap-4 text-sm my-3">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="monthly"
                checked={selectedSubscriptionDuration === 'monthly'}
                onChange={handleSubscriptionDurationChange}
                 className="form-checkbox text-blue-600"
              />
              <span>Monthly</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="quarterly"
                checked={selectedSubscriptionDuration === 'quarterly'}
                onChange={handleSubscriptionDurationChange}
                className="form-checkbox text-blue-600"
              />
              <span>Quarterly</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="bi-annually"
                checked={selectedSubscriptionDuration === 'bi-annually'}
                onChange={handleSubscriptionDurationChange}
                className="form-checkbox text-blue-600"
              />
              <span>Bi-annually</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="annually"
                checked={selectedSubscriptionDuration === 'annually'}
                onChange={handleSubscriptionDurationChange}
                className="form-checkbox text-blue-600"
              />
              <span>Annually</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="biennial"
                checked={selectedSubscriptionDuration === 'biennial'}
                onChange={handleSubscriptionDurationChange}
                className="form-checkbox text-blue-600"
              />
              <span>Once in two years</span>
            </label>
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                name="demo"
                checked={selectedSubscriptionDuration === 'demo'}
                onChange={handleSubscriptionDurationChange}
                className="form-checkbox text-blue-600"
              />
              <span>Demo Lifespan (5 days)</span>
            </label>
          </div>
        </form>
        </div>
        <div className="flex px-7 py-4 items-center justify-between p-3">
          <button
            onClick={() => handleCloseModal()}
            className="border border-blue-500 text-blue-500 bg-white px-4 py-2 rounded mt-4 hover:bg-blue-500 hover:text-white"
          >
            Cancel
          </button>
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-white hover:border hover:border-blue-500 hover:text-blue-500">
            Activate
          </button>
        </div>
      </div>
      )}
    </div>
    )
  }
}

export default OrganizationActivateSubscriptionModal