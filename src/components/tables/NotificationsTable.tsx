import React from  'react'
import {createColumnHelper,flexRender,getCoreRowModel,useReactTable,} from '@tanstack/react-table'
import { SlOptions } from 'react-icons/sl'
import { notificationsData } from '../../data/table/notificationsTableData'
import SetNotificationModal from '../modals/notifications/SetNotificationModal'
import { NotificationsTableDataType } from '../../types/tables/notifications'



  const columnHelper = createColumnHelper<NotificationsTableDataType>()

  const columns = [
    columnHelper.accessor('image', {
      header:'↑↓',
      cell: info => <img  className="w-10 h-10 rounded-full" src={info.getValue()} alt=""  />,
    }),
    columnHelper.accessor('name', {
         header:'Name',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('email', {
        header:'Email Address',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('industry', {
        header:'Industy',
      cell: info => info.getValue(),
    }),
    
    columnHelper.accessor('subscriptionType', {
        header:'Subscription Type',
      cell: info => info.getValue(),
    }),
    columnHelper.accessor('expiryDate', {
        header:"Expiry Date",
        cell: info => info.getValue(),
       
    }),
 
  ]


const NotificationsTable = () => {

    const rerender = React.useReducer(() => ({}), {})[1]

    const [data, ] = React.useState(() => [...notificationsData])
    const [activeRow, setActiveRow] = React.useState<null|number>(null)
    // const [isEmployeesDropDownOpen,setIsEmployeesDropdownOpen] =  React.useState<null|number>(null) // this checks if the company dropdown is active
    const [isModalActive, setIsModalActive] =  React.useState<boolean>(false) // This setthe curent modal that is active
    const [selectedRowData, setSelectedRowData] = React.useState<object|null>(null);  // this is the selected row Data
  
  
    const handleOpenModal = (rowData:object) => {
      setSelectedRowData(rowData);
      setIsModalActive(true)
    };
  
  const handleCloseModal = () => {
      setSelectedRowData(null);
      setIsModalActive(false)
    };

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
      })
    

  return (
    <>
    <div className="p-2 registration-table">
        <table className="table ">
          <thead>
            {table.getHeaderGroups().map(headerGroup => (
              <tr key={headerGroup.id}
                
              >
                {headerGroup.headers.map(header => (
                  <th key={header.id} className="relative min-w-[60px] text-sm  font-semibold border-b capitalize pt-3 pl-[6px] pr-1 pb-4 text-left max-w-[150px] sm:max-w-[200px] break-words  gap-2">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                  </th>
                ))}
                 <th key={headerGroup.id} className="relative text-sm font-semibold border-b capitalize pt-3 pl-1 pr-1 pb-4 text-left max-w-[150px] sm:max-w-[200px] break-words  gap-2">
                    Action
                 </th>
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="w-full text-base border-b border-gray-300" 
              style={activeRow === row.original.id ? { backgroundColor: "#4b49ac",color:"white" } : undefined}
                  onClick={() => {
                    setActiveRow(row.original.id);
                  }}
              >
                {row.getVisibleCells().map(cell => (
                  <td key={cell.id}   className="text-left text-[14px] font[400] max-w-[150px] sm:max-w-[200px] pt-2 pl-[6px] pr-1 pb-2  break-words" >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
                 <td className='hover:cursor' >
                  
                  <SlOptions key={row.original.id} onClick={() => handleOpenModal(row.original)}   className='w-5 h-5 text-md text-gray-300 hover:cursor-pointer'  />
                  {/* {isEmployeesDropDownOpen === row.original.id ? <EmployeesTableDropDown key={row.original.id} handleOpenModal={handleOpenModal}   currentRow={row.original}  /> : ''}             */}
                </td>
              </tr>
            ))}
          </tbody>
    
        </table>
        <div className="h-4" />
      
            <button onClick={() => rerender()} className="border p-2">
            Rerender
            </button>
        </div>
        <div>
          
            {isModalActive  && <SetNotificationModal handleCloseModal={handleCloseModal} selectedRowData={selectedRowData}/>}
         
        </div>
    </>
  )
}

export default NotificationsTable