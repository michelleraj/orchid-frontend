import React from "react";
import ReactApexChart from "react-apexcharts";
// material
import { Grid, Card, CardHeader, Box } from "@material-ui/core";

//

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "SN",
    type: "bar",
    data: [23]
  }
];
const cardStyle = {
  width: "100%",
  height: "100%"
};
const chartOptions = {
  plotOptions: { bar: { columnWidth: "10%", borderRadius: 1 } },
  labels: ["SN"],
  xaxis: { type: "category" },
  title: {
    text: "Average Number of Patients waiting in the ED for an Inpatient Bed",
    align: "left",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false
  },
  width: "20%",
  options: {
    fill: { colors: ["orange"] }
  },
  tooltip: {
    shared: true,
    intersect: false,
    y: {
      formatter: (y) => {
        if (typeof y !== "undefined") {
          return `${y.toFixed(0)} visits`;
        }
        return y;
      }
    }
  }
};

export default function Hallway() {
  return (
    <Grid container spacing={1} justify="center">
      <Grid item>
        <Card style={cardStyle}>
          <div className="thirteen">
            <h1>Hallway Medicine </h1>
          </div>
          <br />
          <br />{" "}
          <ReactApexChart
            type="bar"
            series={CHART_DATA}
            options={chartOptions}
            height={200}
          />
          <ReactApexChart
            type="bar"
            series={CHART_DATA}
            options={chartOptions}
            height={200}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
