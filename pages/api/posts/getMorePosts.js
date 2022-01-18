import { connectToDatabase } from "../../../lib/mongodb";

const addMorePosts = async (req, res) => {
    if (req.method === 'GET') {
        const { client, db } = await connectToDatabase();
        
        const { skip, limit } = req.query;
    
        const getPosts = await db
            .collection('posts')
            .find({})
            .skip(+skip)
            .limit(+limit)
            .toArray();

        res.send(getPosts);
    }
}

export default addMorePosts;