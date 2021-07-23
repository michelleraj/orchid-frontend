

import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function InputForm() {
  return (
    <form noValidate autoComplete="off">
      <div>
        <div>
          <br/>
          <br/>
          <h2 class="text-lg-center" style={{fontFamily: "Times New Roman"}}>Input the values below </h2>
        </div>
        <br/>
        <TextField
          label="ED GROUP"
          id="outlined-size-normal"
          placeholder="ED Group"
          variant="outlined"
        />
        &nbsp;
        <TextField
          label="CTAS"
          id="outlined-size-normal"
          placeholder="Input CTAS"
          variant="outlined"
        />
        &nbsp;
        <TextField
          label="% of Patients"
          id="outlined-size-normal"
          placeholder="% of Patients"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="Treatment Time"
          id="outlined-size-normal"
          placeholder="Treatment Time"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="Admission"
          id="outlined-size-normal"
          placeholder="Admission"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="ICU"
          id="outlined-size-normal"
          placeholder="ICU"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="SDU"
          id="outlined-size-normal"
          placeholder="SDU"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="Medical"
          id="outlined-size-normal"
          placeholder="Medical"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="Surgical"
          id="outlined-size-normal"
          placeholder="Surgical"
          variant="outlined"
        />
                &nbsp;

        <TextField
          label="CCC"
          id="outlined-size-normal"
          placeholder="CCC"
          variant="outlined"
        />
      </div>
      <br />
      
      <br />
      <br />
    </form>
  );
}
