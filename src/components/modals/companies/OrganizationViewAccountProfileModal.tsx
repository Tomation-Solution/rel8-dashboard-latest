import { AiOutlineClose } from "react-icons/ai";
import { BiDownload } from "react-icons/bi";

interface OrganizationViewAccountProfileModalProps {
    handleCloseModal: () => void;
    selectedRowData:object|null
  }

const OrganizationViewAccountProfileModal = ({handleCloseModal,selectedRowData}:OrganizationViewAccountProfileModalProps) => {
    if (selectedRowData){
        return (
          <div className="fixed inset-0 flex items-center  justify-center z-50 text-black bg-black bg-opacity-80 font-light">
          <div className="bg-white rounded-lg  w-3/4 max-w-4/5 h-4/5 px-3 py-3">
              <div className="flex items-center" >
                  <div className="flex-1 text-center text-xl" >
                      <h3 className="font-semibold" >Lorem Ipsum’s Profile</h3>
                  </div>
                  <AiOutlineClose className='w-5 h-5 text-primary hover:cursor-pointer'  onClick={() =>handleCloseModal()} />
              </div>
              <div className="w-2/3 mx-auto" >
                  <div>
                      <h3 className="account-profile-section-header" >Basic Information</h3>
                      <div className="grid grid-cols-1 md:grid-cols-3 my-3" >
                          <div className="col-span-3" >
                              <h3 className="account-profile-section-info-header" >Profile</h3>
                              <p className="account-profile-section-info-header-detail" >A great professional to work with</p>
                          </div>
                      </div>
                      <section className="grid grid-cols-1 md:grid-cols-3 my-3" >
                          <div>
                              <h3 className="account-profile-section-info-header">Staff Number</h3>
                              <p className="account-profile-section-info-header-detail">150</p>
                          </div>
                          <div>
                              <h3 className="account-profile-section-info-header">Industry</h3>
                              <p className="account-profile-section-info-header-detail" >Lorem ipsum dolor sit</p>
                          </div>
                          <div>
                              <h3 className="account-profile-section-info-header">Subscription Expiry Date</h3>
                              <p className="account-profile-section-info-header-detail" >30-06-1975</p>
                          </div>
                      </section>
                      <section className="grid grid-cols-1 md:grid-cols-3 my-3">
                          <div>
                              <h3 className="account-profile-section-info-header">Email</h3>
                              <p className="account-profile-section-info-header-detail">Loremlor@gmail.com</p>
                          </div>
                          <div className="account-profile-section-info-header">
                              <h3 className="account-profile-section-info-header">Phone Number</h3>
                              <p className="account-profile-section-info-header-detail">080978675843</p>
                          </div>
                          <div className="account-profile-section-info-header">
                              <h3 className="account-profile-section-info-header">Subscription Expiry Date</h3>
                              <p className="account-profile-section-info-header-detail">30-06-1975</p>
                          </div>
                      </section>
                  </div>
                  <div>
                      <h3 className="account-profile-section-header">Staff Distribution</h3>
                      
                      <section  className="grid grid-cols-1 md:grid-cols-3 my-3">
                          <div>
                              <h3 className="account-profile-section-info-header">Management</h3>
                              <p className="account-profile-section-info-header-detail">150</p>
                          </div>
                          <div>
                              <h3 className="account-profile-section-info-header">HR</h3>
                              <p className="account-profile-section-info-header-detail">Lorem ipsum dolor sit</p>
                          </div>
                          <div>
                              <h3 className="account-profile-section-info-header">Staff</h3>
                              <p className="account-profile-section-info-header-detail">30-06-1975</p>
                          </div>
                      </section>
                      <section  className="grid grid-cols-1 md:grid-cols-3 my-3">
                          <div>
                              <h3 className="account-profile-section-info-header">Download Company Details</h3>
                              <p className="account-profile-section-info-header-detail flex items-center gap-2">Download <BiDownload className="w-5 h-5" /></p>
                          </div>
                          
                      </section>
                  </div>
                  </div>
          </div>
          </div>
        )
    }
}

export default OrganizationViewAccountProfileModal