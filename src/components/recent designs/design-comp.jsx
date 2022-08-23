import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';

import './design-comp.scss'

const RecentDesign = () => {

  const DESIGN_DATA = [
    {name: 'Create BOM Project', progress: 100, estimate: 2500000},
    {name: 'Hausba CONFERENCE HALL', progress: 80, estimate: 1250000},
    {name: 'New NASS AUDITORIUM', progress: 50, estimate: 7500000},
    {name: 'UniAbuja Ultra Morden LECTURE HALL', progress: 100, estimate: 5500000},
    {name: 'Kilmanjaro CAFETERIA', progress: 100, estimate: 2500000}
  ]


  return (
    <div className='designs-container'>
        <div className='header-container'>
            <p>My Recent Designs</p>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Design Name</TableCell>
                <TableCell>% Progress</TableCell>
                <TableCell>Estimates</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {DESIGN_DATA.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.progress}</TableCell>
                  <TableCell>N{row.estimate.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default RecentDesign