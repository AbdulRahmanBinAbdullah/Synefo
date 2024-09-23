import { TableRow, TableCell, IconButton, Chip, Box } from '@mui/material'
import { Check as CheckIcon, Close as CloseIcon, MoreVert as MoreVertIcon } from '@mui/icons-material'
import Vector from "assets/img/assetmanagement/Vector.png"
import Subtract from "assets/img/assetmanagement/Subtract.png"
const TableRowItem = ({ row }) => (
  <TableRow>
    <TableCell >{row.name}</TableCell>
    <TableCell >{row.landingZone}</TableCell>
    <TableCell >{row.productEnclave}</TableCell>
    <TableCell >
        <img
          src={Subtract}
          alt="Log"
          style={{ width: '20px', height: '15px' }} // Adjust size accordingly
        />
      </TableCell>
      <TableCell >
        <img
          src={Vector}
          alt="Log"
          style={{ width: '17px', height: '15px'}} // Adjust size accordingly
        />
      </TableCell>
      <TableCell>
        <img
          src={Vector}
          alt="Log"
          style={{ width: '17px', height: '15px' }} // Adjust size accordingly
        />
      </TableCell>
      <TableCell >{row.name}</TableCell>

    
  </TableRow>
)

export default TableRowItem
