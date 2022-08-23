import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper} from '@mui/material';


import './recentProposals.scss'

const RecentProposal = () => {
    const PROPOSALS_DATA = [
    {name: 'Villa F25 project proposal', budget: 25000000},
    {name: 'GMA Residence project proposal', budget: 32000000},
    {name: 'Banana Mansion project proposal', budget: 15000000}
  ]
  return (
    <div className='proposal-container'>
        <div className='header-container'>
            <p>My Recent Proposals</p>
        </div>
       <TableContainer component={Paper}>
          <Table aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Proposal Name</TableCell>
                <TableCell>Budget</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {PROPOSALS_DATA.map((row) => (
                <TableRow
                  key={row.name}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>${row.budget.toLocaleString()}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
    </div>
  )
}

export default RecentProposal