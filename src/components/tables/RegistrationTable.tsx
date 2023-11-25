
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table'
import React from 'react';
import { registrationData } from '../../data/table/registrationTableData';
import { RegistrationTableDataType } from '../../types/tables/registration';




  const columnHelper = createColumnHelper<RegistrationTableDataType>()

  const columns = [
    columnHelper.accessor('image', {
      header:'↑↓',
      cell: info => <img  className="w-10 h-10 rounded-full" src={info.getValue()} alt=""  />,
    }),
    columnHelper.accessor('name', {
        header:"Name",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('email', {
        header:"Email Address",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('industry', {
        header:"Industry",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('registrationDate', {
        header:"Registration Date",
        cell: info => info.getValue(),
    }),
    columnHelper.accessor('subscriptionExpiryDate', {
        header:"Subscription Expiry Date",
        cell: info => info.getValue(),
    }),
]



const RegistrationTable = () => {

    const [data] = React.useState(() => [...registrationData])
    // const [activeRow, setActiveRow] = React.useState<null|number>(null)

    const rerender = React.useReducer(() => ({}), {})[1]

    const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    })

  return (
    <div className="p-2 registration-table">
    <table className="table ">
      <thead>
        {table.getHeaderGroups().map(headerGroup => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map(header => (
              <th key={header.id} className="text-left min-w-[60px] relative text-base font-semibold border-b capitalize pt-5 pl-5 pr-1 pb-4  max-w-[150px] sm:max-w-[200px] break-words  gap-2">
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id} className="w-full text-base border-b border-gray-300" >
            {row.getVisibleCells().map(cell => (
              <td key={cell.id}   className="text-left text-[14px] font[400] max-w-[150px] sm:max-w-[200px] pt-2 pl-5 pr-1 pb-2  break-words" >
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </td>
            ))}
             
          </tr>
        ))}
      </tbody>
    
    </table>
    <div className="h-4" />
    <button onClick={() => rerender()} className="border p-2">
      Rerender
    </button>
  </div>
  )
}

export default RegistrationTable