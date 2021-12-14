import { Grid, Paper, Typography } from '@mui/material'
import React from 'react'

type StatisticProps = {
  title: string,
  data: string
}

function Statistic (props: StatisticProps): React.ReactElement {
  return (
    <Paper
      sx={{
        p: 2,
        display: 'flex',
        flexDirection: 'column',
        height: 'auto'
      }}
    >
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {props.title}
      </Typography>
      <Typography component="p" variant="h3">
        {props.data}
      </Typography>
    </Paper>
  )
}

export default function Dashboard () {
  return (
    <React.Fragment>
      <h1>Dashboard</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} md={4} lg={4}>
          <Statistic title="Participants" data="712" />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Statistic title="Orders" data="200" />
        </Grid>
        <Grid item xs={12} md={4} lg={4}>
          <Statistic title="Order Value" data="£40,000" />
        </Grid>
      </Grid>
    </React.Fragment>
  )
}
