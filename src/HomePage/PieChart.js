import React, { Component } from "react";
import { AppBar, Grid, withStyles, Paper } from "@material-ui/core";
import ReactApexChart from "react-apexcharts";
// material

import { Card, CardHeader } from "@material-ui/core";
// utils
//

const CHART_DATA = [4344, 5435];
const CHART_ED = [12, 88];
const CHART_ICU = [50, 9];
const CHART_SDU = [20, 80];
const CHART_SURG = [40, 60];
const CHART_MED = [10, 90];
const CHART_CCC = [78, 22];
const styles = {
  container: {
    display: "flex"
  },
  paper: {
    height: 225,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  }
};
const classes = {
  container: {
    display: "flex"
  },
  paper: {
    height: 225,
    flex: 1,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    elevation: 8
  }
};

const cardStyle = {
  width: "18vw",
  height: "24vw"
};

const chartOptions = {
  colors: ["#6495ED", "#BCC6CC", "#9C27B0"],
  fillSeriesColor: ["grey"],
  labels: ["Average Unit Occupancy", ""],
  stroke: { colors: ["white"] },
  legend: { floating: false, position: "top" },
  dataLabels: { enabled: true, dropShadow: { enabled: false } },
  tooltip: {
    fillSeriesColor: true,
    y: {
      title: {
        formatter: (seriesName) => `#${seriesName}`
      }
    }
  },
  plotOptions: {
    pie: { donut: { labels: { show: false }, colors: ["red"] } }
  }
};
const thirteen = { backgroundColor : "blue",
    position:"absolute",
    content: "",
    height: "7px",
  
    width: "7px",
    borderRadius: "50%",
    bottom: "12px"}

// QUESTION:
// Order of appearance in screen size 'lg' is 1 | 2 | 3 (from left to Right)
// When the screen size is 'xs' then the grid appers in the order 1->2->3 (from top to bottom) but
// I need in the order say 1->3->2(from top to bottom) or say 2->1->3.

class PieChart extends Component {
  
  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <div>
          <h2 class="text-lg-center" style={{fontFamily: "Times New Roman",color:"#008B8B"}}>Average Unit Occupancy </h2>
        </div>
        <br />
        <br />
        <div className={classes.container}>
          <Grid container spacing={16} justify="center">
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Paper className={classes.paper}>
                <ReactApexChart
                  type="pie"
                  series={CHART_DATA}
                  options={chartOptions}
                  height={200}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Paper className={classes.paper}>
                <ReactApexChart
                  type="pie"
                  series={CHART_ICU}
                  options={chartOptions}
                  height={200}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Paper className={classes.paper}>
                <ReactApexChart
                  type="pie"
                  series={CHART_SDU}
                  options={chartOptions}
                  height={200}
                />
              </Paper>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Paper className={classes.paper}>
                <ReactApexChart
                  type="pie"
                  series={CHART_SDU}
                  options={chartOptions}
                  height={200}
                />
              </Paper>
            </Grid>

            <Grid item xs={12} sm={6} md={4} lg={2}>
              <Paper className={classes.paper}>
                <ReactApexChart
                  type="pie"
                  series={CHART_SDU}
                  options={chartOptions}
                  height={200}
                />
              </Paper>
            </Grid>
          </Grid>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(styles)(PieChart);
