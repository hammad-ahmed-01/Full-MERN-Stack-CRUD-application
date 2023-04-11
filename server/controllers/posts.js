//function implementations

import express from 'express';
import mongoose from 'mongoose';

import PostMessage from '../models/postMessage.js';

const router = express.Router();
export const getPosts = async (req, res) => {  //async as we added await as it takes time to find something inside a model
    try{
        const postMessages = await PostMessage.find();  // retrieving all posts we have in the db
        console.log(postMessages);
        // displaying post data on the server side
        res.status(200).json(postMessages);
    } 
    catch(error){
        res.status(404).json({ message: error.message });
    }
}

export const getPost = async (req, res) => {
    const { id } = req.params;

    try {
        const post = await PostMessage.findById(id);

        res.status(200).json(post);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPost = async (req, res) => {
    const { title, content, selectedFile, creator, tags } = req.body;

    const newPostMessage = new PostMessage({ title, content, selectedFile, creator, tags })

    try {
        await newPostMessage.save();

        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, content, creator, selectedFile, tags } = req.body;
    
    const updatedPost = { creator, title, content, tags, selectedFile, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;
    
    await PostMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}


export default router;