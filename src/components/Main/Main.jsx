import React, { useContext } from 'react'
import { Card, CardHeader, CardContent, Typography, Grid, Divider } from '@material-ui/core'
import useStyles from './styles'
import Form from './Form/Form'
import List from './List/List'
import { ExpenseTrackerContext } from '../../context/context';
import InfoCard from '../../components/infoCard'
function Main() {
  const classes = useStyles();
  const { balance } = useContext(ExpenseTrackerContext);

  return (
    <Card className={classes.root}>
      <CardHeader title="Expense Tracker" subheader="Powerd by Speechly" />
      <CardContent>
        <Typography align="center" variant="h5">Total Balance ${balance}</Typography>
        <Typography variant="p" style={{ lineHeight: '1.5em', marginTop: '20px' }}>
          <InfoCard/>
        </Typography>
        <Divider className={classes.divider}/>
        {/* form */}
        <Form></Form>
      </CardContent>
      <CardContent className={classes.cardContent}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <List></List>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  )
}

export default Main
