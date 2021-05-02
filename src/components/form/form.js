import React, { useState, useEffect } from 'react';
import useStyles from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { TextField, Button, Typography, Paper, Checkbox, FormControlLabel} from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';


const Form = ({currentId, setCurrentId}) => {
    const [postData, setPostData] = useState({
        message: '', event: ''
    });
    const classes = useStyles();
    const post = useSelector((state) => currentId ? state.posts.find((p) => p._id === currentId) : null);
    const dispatch = useDispatch();

    useEffect(() => {
        if(post) setPostData(post);
    }, [post]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if(currentId) {
            dispatch(updatePost(currentId, postData));
        }else {
            dispatch(createPost(postData));
        }
        clear();
    }

    const clear = () => {
        setCurrentId(null);
        setPostData({message: '', event: ''});
    }

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">{currentId ? 'Scratch that' : 'Announce something'}</Typography>
                <Autocomplete
                    id="event selection"
                    style={{ width: 200 }}
                    onChange={(_, value) => {
                        setPostData({ ...postData, event: value})}}
                    options={['AMS','AWS', 'AMD', 'AWD', 'AXD', 
                    'BMS','BWS', 'BMD', 'BWD', 'BXD', 
                    'CMS','CWS', 'CMD', 'CWD', 'CXD', 
                    'DMS','DWS', 'DMD', 'DWD', 'DXD', 
                    'EMS','EWS', 'EMD', 'EWD', 'EXD']}
                    renderInput={(params) => (
                    <TextField {...params} label="Event" margin="normal" variant="outlined" />
                    )}
                />
                <FormControlLabel
                    control={<Checkbox value="Report to the tournament desk." onChange={(e) => setPostData({ ...postData, message: e.target.value})} name="report"/>}
                    label="Report to the tournament desk."
                />
                <TextField 
                    name="message" 
                    variant="outlined" 
                    label="message" 
                    fullWidth value={postData.message} 
                    onChange={(e) => setPostData({ ...postData, message: e.target.value})} 
                />
                {/* <TextField 
                    name="tags" 
                    variant="outlined" 
                    label="tags" 
                    fullWidth value={postData.tags} 
                    onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(',')})} 
                /> */}
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
}

export default Form;