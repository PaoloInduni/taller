'use client'
import Container from "@mui/material/Container";
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { useState } from "react";
import Api from '../app/services/api'
import WeatherForecast from '../app/component/weatherForecast'
import CityInfoTable from "../app/component/cityInfoTable";
import React from "react";

export default function Home() {

  const [textFieldCity, setTextFieldCity] = useState("");
  const [data, setData] = useState(undefined)

  const makeApiCall = () => {
    Api.getWeatherFromCity(textFieldCity).then(r => setData(r))
  }

  return (
    <Container size="md">
      <Box sx={{
        p: 4,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <TextField
          id="cityTextField"
          size="small"
          label="Ciudad"
          variant="outlined"
          onChange={(event) => { setTextFieldCity(event.target.value); }}
        />
        <Button
          size="medium"
          variant="contained"
          onClick={makeApiCall}
        >
          Buscar
        </Button>
      </Box>

      {data &&
        <React.Fragment>
          <WeatherForecast data={data} />
          <CityInfoTable data={data} sx={{my:1}}/>
        </React.Fragment>
      }
    </Container>
  );
}