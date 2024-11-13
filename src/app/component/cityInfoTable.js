import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import FmdGoodIcon from '@mui/icons-material/FmdGood';
import GroupIcon from '@mui/icons-material/Group';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationCityIcon from '@mui/icons-material/LocationCity';

export default function CityInfoTable({ data }) {
  return (
    <TableContainer component={Paper} sx={{mt:2}}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontSize: "22px" }}><LocationCityIcon sx={{mx:1}}/>Ciudad</TableCell>
            <TableCell sx={{ fontSize: "22px" }} align="right"><FmdGoodIcon fontSize='small' />Coordenadas</TableCell>
            <TableCell sx={{ fontSize: "22px" }} align="right"><GroupIcon sx={{ mx: 1 }} />Población</TableCell>
            <TableCell sx={{ fontSize: "22px" }} align="right"><AccessTimeIcon sx={{ mx: 1 }} />Zona horaria</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {data.city.name}
            </TableCell>
            <TableCell align="right">{data.city.coord.lat}, {data.city.coord.lon}</TableCell>
            <TableCell align="right">{data.city.population}</TableCell>
            <TableCell align="right">{data.city.timezone}</TableCell>

          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}