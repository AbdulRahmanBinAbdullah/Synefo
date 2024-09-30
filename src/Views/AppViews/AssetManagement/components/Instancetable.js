import { Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import TableRowItem from './Tablerowitems'

const InstanceTable = ({ type, instances }) => (
  <Paper elevation={3} sx={{ mb:1 }}>
    <Typography variant="h6" sx={{ p: 1 }}>
      {type} ({instances.length})
    </Typography>
    <TableContainer>
      <Table stickyHeader>
        <TableHead sx={{backgroundColor:'#F2F3F7','& th': { fontFamily: 'Poppins', color: '#383874' }}}>

          <TableRow>
            <TableCell >Resource Name</TableCell>
            <TableCell >Landing Zone</TableCell>
            <TableCell >Product Enclave</TableCell>
            <TableCell >Log</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {instances.map((instance, index) => (
            <TableRowItem key={index} row={instance} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  </Paper>
)

export default InstanceTable
