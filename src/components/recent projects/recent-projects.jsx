import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';

import './recent-projects.scss'

const RecentProjects = () => {

    const PROJECTS_DATA = [
    {name: 'Villa F25 Project', projectNo: 'P-101', date: '12/01/2018', client: 'Your client name 1', budget: 55000},
    {name: 'GMA Residence Project', projectNo: 'P-102', date: '22/01/2019', client: 'Your client name 2', budget: 25000},
    {name: 'Banana Mansion Project', projectNo: 'P-103', date: '10/02/2020', client: 'Your client name 3', budget: 65000},
    
  ]

  return (
    <div className='projects-container'>
        <div className='header-container'>
            <p>My Recent Projects</p>
        </div>
        <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Project Name</TableCell>
                <TableCell>Project No</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Client</TableCell>
                <TableCell>Budget</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PROJECTS_DATA.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{row.projectNo}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell>{row.client}</TableCell>
                  <TableCell>${row.budget.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default RecentProjects