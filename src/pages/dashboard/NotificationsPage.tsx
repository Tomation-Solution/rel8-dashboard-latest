
import TableMetaData from '../../components/TableMetaData'
import NotificationsTable from '../../components/tables/NotificationsTable'

const NotificationsPage = () => {
  return (
    <div>
       <TableMetaData title={'Notification Settings'} />
        <NotificationsTable />
    </div>
  )
}

export default NotificationsPage