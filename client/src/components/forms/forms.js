import React, { useState, useEffect } from 'react';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

const Form = ({ currentId, setCurrentId }) => {
    // setting default value as empty string of object components
    const [postData, setPostData] = useState({ creator: '', title: '', content: '', tags: '', selectedFile: '' });

    const dispatch = useDispatch();
    const classes = useStyles();

    const post = useSelector((state) => (currentId ? state.posts.find((message) => message._id === currentId) : null));

    // function to clear the data on the form
    const clear = () => {
        setPostData({ creator: '', title: '', content: '', tags: '', selectedFile: '' });
        setCurrentId(0);
    };

    useEffect(() => {   // when the post value changes, then this runs
        if (post) { 
            setPostData(post);
        }    
    }, [post]);  

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (currentId === 0) {
            console.log("createPost is called");
            dispatch(createPost(postData));
            clear();
        } else {
            console.log("updatePost is called");
            dispatch(updatePost(currentId, postData));
            clear();
        }
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Creating a Post</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(event) => setPostData({ ...postData, creator: event.target.value })} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(event) => setPostData({ ...postData, title: event.target.value })} />
                <TextField name="content" variant="outlined" label="Content" fullWidth multiline rows={4} value={postData.content} onChange={(event) => setPostData({ ...postData, content: event.target.value })} />
                <TextField name="tags" variant="outlined" label="Tags (coma separated)" fullWidth value={postData.tags} onChange={(event) => setPostData({ ...postData, tags: event.target.value.split(',') })} />
                <div className={classes.fileInput}><FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} /></div>
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default Form;