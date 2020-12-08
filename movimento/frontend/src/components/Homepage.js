import React, { Component } from "react";
import CreateEntry from "./CreateEntry";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LinearProgress from "@material-ui/core/LinearProgress";
import Entry from "./Entry.js";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import About from "./About";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      entries: [],
    };
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
          <div style={{ align: "center" }}>
            <Typography component="h2" variant="h2" fontWeight="fontWeightBold">
              Loading...
            </Typography>
            <LinearProgress color="secondary"></LinearProgress>);
          </div>
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
                <Typography
                  component="h5"
                  variant="h5"
                  fontWeight="fontWeightLight"
                  style={{ position: "absolute", top: "60vh" }}
                >
                  Vincent Pham
                </Typography>
              </Grid>

              <Grid
                container
                direction="row"
                xs={12}
                spacing={1}
                justify="flex-end"
                alignItems="center"
              >
                <div style={{ width: "auto", height: "0" }}></div>
                <Grid item xs={3}>
                  <Entry
                    body="Integer nibh ex, dictum eget nibh ac, dapibus iaculis tortor. Curabitur ornare semper tincidunt. Sed auctor neque sed augue blandit auctor. Vestibulum sed ultricies mi, vel fringilla nibh. Nulla facilisi. Nulla lacus ipsum, gravida interdum gravida in, interdum imperdiet diam. Pellentesque accumsan urna lorem, vitae maximus ipsum commodo ac."
                    title="Neque porro"
                    date="December 8, 2020"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Entry
                    body="Nulla bibendum nunc bibendum est volutpat, volutpat faucibus metus ullamcorper. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus dapibus sem ut eros facilisis, nec fermentum nisl fringilla. Ut sapien lacus, tempus at aliquet eu, finibus et neque. Praesent mollis nunc placerat orci ornare congue. Nulla id pretium lorem, in tempor enim. Phasellus id sem pharetra, rutrum orci vel, facilisis ex. Morbi sed"
                    title="Venci Dagta"
                    date="December 8, 2020"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Entry
                    body="Duis pellentesque mauris semper leo suscipit feugiat. Curabitur vel dolor id neque fermentum vestibulum. Suspendisse ullamcorper justo at purus commodo finibus. Integer porta neque id ex cursus pulvinar. Ut et metus libero. Phasellus egestas dictum ex, sed sodales leo. In quis tincidunt urna, at venenatis lacus. Nunc lacinia tincidunt luctus. Mauris hendrerit mollis malesuada."
                    title="Dolor Sit"
                    date="December 8, 2020"
                  />
                </Grid>
                <Grid item xs={3}>
                  <Entry
                    body="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel gravida sem, vel vehicula metus. Morbi elementum, ligula sit amet vulputate interdum, mauris nibh vulputate lorem, at facilisis purus lorem vel sem. Duis pellentesque mauris semper leo suscipit feugiat. Curabitur vel dolor id neque fermentum vestibulum. Suspendisse ullamcorper justo at purus commodo finibus. Integer porta neque id ex cursus pulvinar. Ut et metus libero. Phasellus egestas dictum ex, sed sodales leo. In quis tincidunt urna, at venenatis lacus. Nunc lacinia tincidunt luctus. Mauris hendrerit mollis malesuada."
                    title="adipisci velit"
                    date="December 8, 2020"
                  />
                </Grid>
              </Grid>
            </Route>
            <Route
              path="/write"
              render={(props) => (
                <CreateEntry
                  {...props}
                  uuid={"fb9c7ba2-6982-4d54-8951-1509aeea01f5"}
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
