import React from "react";
import Header from "../headerMovieList";

import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import PeopleList from "../peopleList";
import { blue } from "@material-ui/core/colors";

const useStyles = makeStyles({
  root: {
    padding: "20px",
    backgroundColor: blue
  },
});

function PeoplePageTemplate({ actors, title }) {
  const classes = useStyles();
  

  let displayedPeople = actors
    

  return (
    <Grid container className={classes.root}>
      <Grid item xs={12}>
        <Header title={title} />
      </Grid>
      <Grid item container spacing={5}>
        <Grid key="find" item xs={12} sm={6} md={4} lg={3} xl={2}>
         
        </Grid>
        <PeopleList actors={displayedPeople}></PeopleList>
      </Grid>
    </Grid>
  );
}
export default PeoplePageTemplate;