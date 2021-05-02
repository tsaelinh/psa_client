import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import Posts from './components/posts/posts';
import Form from './components/form/form';
import useStyles from './styles';
import { getPosts } from './actions/posts';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
    const [currentId, setCurrentId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());
    }, [currentId, dispatch]);
    return (
        <Container maxwidth="lg">
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">PsA</Typography>
            </AppBar>
            <Grow in>
                <Grid className={classes.mainContainer} container justify ="center" alignItems="stretch" spacing={3}>
                    <Grid item xs={12} sm={4}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Router>
                        <Switch>
                        <Route path="/about" exact component={() => 
                            <Grid item xs={12} sm={4}>
                                <Form currentId={currentId} setCurrentId={setCurrentId} />
                            </Grid>                       
                        } />
                        </Switch>
                    </Router>
                </Grid>    
            </Grow>
            <AppBar className={classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Footer</Typography>
            </AppBar>
        </Container>
    );
}

export default App;