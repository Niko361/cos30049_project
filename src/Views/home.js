import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import ItemCard from "../Components/ItemCard";

export default function Home() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
        <Grid item xs={12} sm={6} md={3}>
          <ItemCard />
        </Grid>
      </Grid>
    </Box>
  );
}
