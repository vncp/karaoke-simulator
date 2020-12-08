import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Grid from  "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography"
import TextField from "@material-ui/core/TextField"
import FormHelperText from "@material-ui/core/FormHelperText"
import FormControl from  "@material-ui/core/FormControl";
import { Link } from "react-router-dom";
import Radio from  "@material-ui/core/Radio";
import RadioGroup from  "@material-ui/core/RadioGroup";
import FormControlLabel from  "@material-ui/core/FormControlLabel";
import Paper from "@material-ui/core/Paper";

const CreateEntry = () => {
  return (
    <Grid
      container
      xs={12}
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: '100vh' }}
    >
      <Grid item xs={12} align="center" >
        <Typography component="h4" variant="h4">
          Journal Entry
        </Typography>
      </Grid>
      <Grid item xs={12} align="center">
        <FormControl component="fieldset">
            <FormHelperText>
              <div align='center'>
                What's on your mind today?
              </div>
            </FormHelperText>
            <form noValidate autoComplete="off">
              <TextField required={true} style={{ margin: 40 }} id="standard-basic" label="Entry Title" inputProps={{min:1, style:{textAlign: "center"}}}/>
            </form>
            <form noValidate autoComplete="off">
              <TextField multiline id="standard-full-width" label="Entry Body" />
            </form>
        </FormControl>
      </Grid>
    </Grid>
  );
};

export default CreateEntry;
