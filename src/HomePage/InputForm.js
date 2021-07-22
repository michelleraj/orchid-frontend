

import React from "react";
import { TextField, Button } from "@material-ui/core";

export default function InputForm() {
  return (
    <form noValidate autoComplete="off">
      <div>
        <div>
          <h1>Input the values below </h1>
        </div>
        <TextField
          label="ED GROUP"
          id="outlined-size-normal"
          placeholder="ED Group"
          variant="outlined"
        />
        <TextField
          label="CTAS"
          id="outlined-size-normal"
          placeholder="Input CTAS"
          variant="outlined"
        />
        <TextField
          label="% of Patients"
          id="outlined-size-normal"
          placeholder="% of Patients"
          variant="outlined"
        />
        <TextField
          label="Treatment Time"
          id="outlined-size-normal"
          placeholder="Treatment Time"
          variant="outlined"
        />
        <TextField
          label="Admission"
          id="outlined-size-normal"
          placeholder="Admission"
          variant="outlined"
        />
        <TextField
          label="ICU"
          id="outlined-size-normal"
          placeholder="ICU"
          variant="outlined"
        />
        <TextField
          label="SDU"
          id="outlined-size-normal"
          placeholder="SDU"
          variant="outlined"
        />
        <TextField
          label="Medical"
          id="outlined-size-normal"
          placeholder="Medical"
          variant="outlined"
        />
        <TextField
          label="Surgical"
          id="outlined-size-normal"
          placeholder="Surgical"
          variant="outlined"
        />
        <TextField
          label="CCC"
          id="outlined-size-normal"
          placeholder="CCC"
          variant="outlined"
        />
      </div>
      <br />
      <Button variant="contained" color="primary">
        submit
      </Button>
      <br />
      <br />
    </form>
  );
}
