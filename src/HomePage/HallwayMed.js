import React from "react";
import ReactApexChart from "react-apexcharts";
// material
import { Grid, Card, CardHeader, Box } from "@material-ui/core";

//

// ----------------------------------------------------------------------

const CHART_DATA = [
  {
    name: "SN1",
    type: "bar",
    data: [23],
    title: {
      text: 'Average Number of Patients waiting in the ED for an Inpatient Bed',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      },
  }
  }
];
const CHART_DATA1 = [
  {
    name: "SN",
    type: "bar",
    data: [23],
    title: {
      text: 'Average Time Patients wait in the ED for an Inpatient Bed',
      align: 'left',
      margin: 10,
      offsetX: 0,
      offsetY: 0,
      floating: false,
      style: {
        fontSize:  '14px',
        fontWeight:  'bold',
        fontFamily:  undefined,
        color:  '#263238'
      },
  }
  }
];
const cardStyle = {
  width: "105%",
  height: "100%"
};
const chartOptions = {
  plotOptions: { bar: { columnWidth: "10%", borderRadius: 1 } },
  labels: ["SN"],
  xaxis: { type: "category" },
  title: {
    text:"Average Number of Patients waiting in the ED for an Inpatient Bed    ",
    align: "left",
    margin: 10,
    offsetX: 0,
    offsetY: 0,
    floating: false
  },
  width: "100%",
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
const chartOptions1 = {
  plotOptions: { bar: { columnWidth: "10%", borderRadius: 1 } },
  labels: ["SN"],
  xaxis: { type: "category" },
  title: {
    text:"Average Time Patients waiting in the ED for an Inpatient Bed    ",

    align: "left",
    margin: 0,
    offsetX: 0,
    offsetY: 0,
    floating: false
  },
  width: "100%",
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
            <br/>
            <h3 class="text-lg-center" style={{fontFamily: "Times New Roman",color:"#008B8B"}}>Hallway Medicine </h3>
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
            series={CHART_DATA1}
            options={chartOptions1}
            height={200}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
