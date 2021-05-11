import React from 'react';
import { Grid, CircularProgress,TextField, Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import Post from './post/post';
import useStyles from './styles';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { filterEvent } from '../../actions/posts';

const Posts = ({setCurrentId}) => {
    const posts = useSelector((state) => state.posts);
    const classes = useStyles();
    const dispatch = useDispatch();

    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                <Autocomplete
                    multiple
                    freeSolo
                    id="event selection"
                    style={{ width: 400 }}
                    onChange={(_,value) => {dispatch(filterEvent(value))}} 
                    options={['AMS','AWS', 'AMD', 'AWD', 'AXD', 
                    'BMS','BWS', 'BMD', 'BWD', 'BXD', 
                    'CMS','CWS', 'CMD', 'CWD', 'CXD', 
                    'DMS','DWS', 'DMD', 'DWD', 'DXD', 
                    'EMS','EWS', 'EMD', 'EWD', 'EXD']}
                    renderInput={(params) => (
                    <TextField {...params} label="Filter by event" margin="normal" variant="outlined" />
                    )}
                    
                />

                {posts.map((post) => (
                    <Grid key={post._id} item xs={12} sm={12}>
                        <Post post={post} setCurrentId={setCurrentId} />
                    </Grid>
                ))}
            </Grid>
        )
    );
}

export default Posts;