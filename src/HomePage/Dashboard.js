//import PieChart from "./PieChart";
import React from "react";
import HallwayMed from "./HallwayMed"
import { TextField, Button } from "@material-ui/core";
import InputForm from "./InputForm";
import Hallway from "./HallwayMed";
import {  Grid } from "@material-ui/core";
import PieChart from "./PieChart";


export default function Dashboard() {
  
 
  return (
      <React.Fragment>
  
  
      <PieChart />
      <br />
      <Grid container spacing={16} justify="center">
        <Grid item xs={12} sm={6} md={4} lg={4}>
          <Hallway />
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={4}>
        </Grid>
       
      </Grid>


      </React.Fragment>

   
  );
}
