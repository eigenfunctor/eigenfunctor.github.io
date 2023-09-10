import React from "react";
import Router from "next/router";
import { Grid, Box, Paper, Button } from "@material-ui/core";

export interface ArticleProps {
  previous?: string;
  next?: string;
}

const Article: React.FunctionComponent<ArticleProps> = ({
  next,
  previous,
  children
}) => {
  return (
    <Grid container direction="column" justifyContent="center">
      <Box
        p={[4]}
        style={{ margin: "auto" }}
        flex
        minWidth={768}
        maxWidth={768}
      >
        <Paper>
          <Box p={[4]} flex>
            {children}
          </Box>
          <Grid container direction="row" justifyContent="space-between">
            <Box p={[4]}>
              {previous && (
                <Button onClick={() => Router.push(previous)}>Previous</Button>
              )}
            </Box>
            <Box p={[4]}>
              {next && <Button onClick={() => Router.push(next)}>Next</Button>}
            </Box>
          </Grid>
        </Paper>
      </Box>
    </Grid>
  );
};

export default Article;
