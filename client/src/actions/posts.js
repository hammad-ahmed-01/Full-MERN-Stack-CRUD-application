//UPDATED ALL

import * as api from '../api/index';

// action creators (func that returns action)

export const getPosts = () => async (dispatch) => {  //async(dispatch) redux-thunk allows us this to cope with time

    try {
        const {data} = await api.fetchPosts();
        // an action to fetch Posts is returned
        dispatch({ type: 'FETCH_ALL', payload: data }) 
    } 
    catch (error) {
        console.log(error.message);   
    }

    // const action = {type: 'FETCH_ALL', payload: []} // payload is the data where we have our posts
    // dispatch(action);  // an action is returned, dispatch is used because of redux-thunk
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost(post);

        dispatch({ type: 'CREATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const updatePost = (id, post) => async (dispatch) => {
    try {
        const { data } = await api.updatePost(id, post);
        dispatch({ type: 'UPDATE', payload: data });
    } catch (error) {
        console.log(error.message);
    }
};

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id);
        dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
        console.log(error.message);
    }
};