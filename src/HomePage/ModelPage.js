//import PieChart from "./PieChart";
import React, { Component } from "react";
import { TextField, Button } from "@material-ui/core";
import Dashboard from "./Dashboard";
import InputForm from "./InputForm";
const style={
    
        backgroundColor: "#008CBA", /* Green */
        border: "none",
        color: "white",
        padding: "15px 32px",
        textAlign: "center",
        textDecoration: "none",
        display: "inline-block",
        fontSize: "16px",
        margin: "4px 2px",
        cursor: "pointer",
        
      
}
class ModelPage extends React.Component {
  state = {
    visible: false
  };
  render() {
    return (
      <div>
        <InputForm />
        {this.state.visible ? <Dashboard/> : <div></div>}
        <button style={style}  className="button"
          onClick={() => {
            this.setState({ visible: true });
          }}
        >
          SUBMIT
        </button>
      </div>
    );
  }
}
export default ModelPage;
