import React, { Component } from "react";
import AddIcon from "@material-ui/icons/Add";
import IconButton from "@material-ui/core/IconButton";
import CreateEntry from "./CreateEntry";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import FormHelperText from "@material-ui/core/FormHelperText";
import Entry from "./Entry.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  withRouter,
  useHistory,
} from "react-router-dom";
import About from "./About";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      entries: [],
      focused_entry: null,
    };
    this.updateHandler = this.updateHandler.bind(this);
    this.updateEntryHandler = this.updateEntryHandler.bind(this);
  }

  updateEntryHandler(entry) {
    console.log("Updating current current focused entry");
    console.log(entry);
    this.setState({ focused_entry: entry });
  }

  updateHandler() {
    this.setState({
      error: null,
      isLoaded: false,
      entries: [],
    });
    setTimeout(() => {
      this.componentDidMount();
      this.forceUpdate();
    }, 100);

    console.log("Render update forced!");
  }

  componentDidMount() {
    fetch("/api/entries")
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            entries: result,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  render() {
    const { error, isLoaded, entries } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return (
        <Grid container align="center" justify="center" xs={12}>
          <div style={{ width: "100vw", height: "0" }} />
        </Grid>
      );
    } else {
      return (
        <Router>
          <Switch>
            <Route exact path="/">
              <Grid
                container
                item
                xs={5}
                align="center"
                justify="center"
                spacing={2}
              >
                <div style={{ width: "100vw", height: "0" }}></div>
                <Typography
                  component="h2"
                  variant="h2"
                  fontWeight="fontWeightBold"
                >
                  Movimento Journal
                </Typography>
                <FormHelperText style={{ position: "absolute", top: "60%" }}>
                  <div align="center">What's on your mind today?</div>
                </FormHelperText>
              </Grid>
              <Grid
                container
                direction="row"
                xs={12}
                spacing={1}
                justify="flex-start"
                alignItems="center"
              >
                <div style={{ width: "auto", height: "0" }}></div>
                {this.state.entries.length === 0 ? (
                  <Link to="/write">
                    <Button
                      variant="outlined"
                      size="large"
                      style={{ left: "100%" }}
                    >
                      Start Journaling
                    </Button>
                  </Link>
                ) : (
                  <Grid item xs={1} justify="flex-start">
                    <Link to="/write">
                      <IconButton color="primary" aria-label="add entry">
                        <AddIcon />
                      </IconButton>
                    </Link>
                  </Grid>
                )}
                {this.state.entries.slice(0, 3).map((entry) => {
                  return (
                    <Grid item xs={3}>
                      <Entry
                        updateEntryHandler={this.updateEntryHandler}
                        updateHandler={this.updateHandler}
                        uuid={entry.code}
                        body={entry.body}
                        title={entry.title}
                        date={entry.date}
                      />
                    </Grid>
                  );
                })}
              </Grid>
            </Route>
            <Route
              path="/write"
              render={(props) => (
                <CreateEntry
                  {...props}
                  updateHandler={this.updateHandler}
                  uuid={props.uuid}
                  focused_entry={this.state.focused_entry}
                />
              )}
            />
            <Route path="/about" component={About}></Route>
          </Switch>
        </Router>
      );
    }
  }
}

export default HomePage;
