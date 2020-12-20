import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import FormHelperText from "@material-ui/core/FormHelperText";
import { Link } from "react-router-dom";

let uuid = "";
let createUUID = false;

class CreateEntry extends Component {
  render() {
    return (
      <div>
        <Grid
            container
            xs={12}
            spacing={1}
            direction="column"
            alignItems="center"
            justify="center"
        >
            <div style={{height : "30vh"}} />
            <Typography component="h4" variant="h4" fontWeight="fontWeightBold">
                Login to Movimento
            </Typography>
            <Grid item xs={12} align="center">
                <formControl noValidate autoComplete="off">
                    <TextField
                        autoFocus
                        //OnChange Handler
                        required={true}
                        spellCheck={false}
                        id="standard-basic"
                        label="Username"
                        inputProps={{ min: 1, style: {textAlign: "center" } }}
                    />
                </formControl>
                <formControl noValidate autoComplete="off">
                    <TextField
                        autoFocus
                        //OnChange Handler
                        required={true}
                        spellCheck={false}
                        id="standard-basic"
                        label="Password"
                        inputProps={{ min: 1, style: {textAlign: "center" } }}
                    />
                </formControl>
            </Grid>
        </Grid>
      </div>
    );
  }
}

export default CreateEntry;
