import React from "react";
import { Grid, Box } from "@material-ui/core";
import Nav from "../components/nav";

const Header: React.FunctionComponent = () => {
  return (
    <Grid container direction="row" justifyContent="space-between">
      <Nav />
      <Box m={[1]}></Box>
    </Grid>
  );
};

export default Header;
