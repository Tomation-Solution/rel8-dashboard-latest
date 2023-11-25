import { IoFilterOutline } from "react-icons/io5";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";

type TableMetaDataProps = {
  title:string;
  hideFilter?:boolean;
}

const TableMetaData = ({title,hideFilter}:TableMetaDataProps) => {
  return (
    <div className="flex flex-col justify-start gap-5 md:flex-row md:items-center md:justify-between">
          <h3 className="text-statpurple text-lg">{title}</h3>
          <div className="flex items-center gap-5">
            {/* <IoFilterOutline className="w-7 h-7 hover:cursor-pointer bg-white text-gray-400"  /> */}
            {hideFilter ? "" : (
            <Popover className="relative">
              {({ open }) => (
                <>
                  <Popover.Button
                    className={`
                ${open ? "" : "text-opacity-90"}
                group inline-flex items-center text-black px-3 py-2 text-base font-medium  hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
                  >
                    <IoFilterOutline
                      className={`${open ? "" : "text-opacity-70"}
                  ml-2 h-5 w-5 text-black transition duration-150 ease-in-out group-hover:text-opacity-80`}
                    />
                  </Popover.Button>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-1/2 z-10 mt-3  max-w-sm -translate-x-1/2 transform px-4 sm:px-0 w-[200px] ">
                      <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 ">
                        <div className="relative grid gap-8 bg-white p-7">
                          <label className="flex items-center">
                            <input type="checkbox" value="Employer" />
                            <span className="ml-2">Employer</span>
                          </label>
                          <label className="flex items-center">
                            <input type="checkbox" value="Job Seeker" />
                            <span className="ml-2">Job Seeker</span>
                          </label>
                        </div>
                      </div>
                    </Popover.Panel>
                  </Transition>
                </>
              )}
            </Popover>
            )}

            <div className="flex  items-center border border-gray-200 bg-white px-3 py-1">
              <input
                placeholder="Search"
                type="text"
                className=" px-1 outline-none h-full "
              />
              <HiMagnifyingGlass className="w-7 h-7 bg-white text-gray-500" />
            </div>
          </div>
        </div>
  )
}

export default TableMetaData