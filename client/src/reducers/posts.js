export default (posts = [], action) =>{
    switch(action.type)
    {
        case 'FETCH_ALL':
            {
                console.log("Fetch Post Action executed Successfully");
                return action.payload;   // returning the posts on the action from ./actions/posts.js
            }
        case 'CREATE':
            {
                console.log("Create Post Action executed Successfully");
                return [...posts, action.payload];
            }
        case 'UPDATE':
            {
                console.log("Update Post Action executed Successfully");
                return posts.map((post) => post._id == action.payload._id ? action.payload : post)
            }
        case 'DELETE':
            {
                console.log("Delete Post Action executed Successfully");
                return posts.filter((post) => post._id !== action.payload);
            }
        default:
            return posts;
    }
}