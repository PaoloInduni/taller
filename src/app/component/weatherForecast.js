import React from "react";
import Card from "@mui/material/Card";
import Box, { boxClasses } from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid2";
import Chip from "@mui/material/Chip";

const WeatherForecast = ({ data }) => (
    <Box>
        <Card variant="outlined">
            <Box sx={{ p: 2 }}>
                <Typography gutterBottom variant="subtitle2" sx={{ color: 'text.secondary' }}>
                    Clima para hoy en
                </Typography>
                <Typography variant="h3">
                    {data.city.name}, {data.city.country}
                </Typography>
            </Box>
            <Divider />
            <Box sx={{ p: 2 }}>
                <Grid container spacing={3}>
                    {data.list.slice(0, 5).map((item) => (
                        <Grid key={item.dt} size="grow">
                            <Card sx={{ backgroundColor: 'white' }}>
                                <Box sx={{ p:2 }}>
                                    <Typography variant="caption">
                                        {new Date(item.dt_txt).toUTCString()}
                                    </Typography>
                                    <Typography variant="h4">
                                        {Math.trunc(item.main.temp)}℃
                                    </Typography>
                                    <Chip label={item.weather[0].description}></Chip>
                                </Box>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </Box>
        </Card>
    </Box>
)

export default WeatherForecast