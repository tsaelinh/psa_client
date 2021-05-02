import React from 'react';
import useStyles from './styles';
import { Card, CardActions, CardContent, Button, Typography, CardHeader, Avatar } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import Moment from 'react-moment';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { useDispatch } from 'react-redux';
import { deletePost } from '../../../actions/posts';

const Post = ( {post, setCurrentId} ) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return (
        <Card className={classes.card}>
            <CardHeader
                avatar={
                <Avatar className={classes.large} variant="rounded">
                    {post.event}
                </Avatar>
                }
                title={<Moment format="LT">{post.updatedAt ? post.updatedAt : post.createdAt}</Moment>}
                subheader={<Moment fromNow>{post.updatedAt ? post.updatedAt : post.createdAt}</Moment>}
            />
            <CardContent className={classes.content}>
                <Typography variant="h6">{post.message}</Typography>
            </CardContent>
            <Router>
                <Switch>
                    <Route path="/about" exact component={() => 
                        <CardActions className={classes.cardActions}>
                            <Button size="small" color="primary" onClick={() => {dispatch(deletePost(post._id))}}>
                                <DeleteIcon fontSize="small" />
                                Delete
                            </Button>
                        </CardActions>
                    } />
                </Switch>
            </Router>
        </Card>
    );
}

export default Post;