import { connectToDatabase } from "../../../lib/mongodb";

const postNewsletter = async (req, res) => {
    if (req.method === 'POST') {
        const { client, db } = await connectToDatabase();

        await db
            .collection('newsletter')
            .insert(JSON.parse(req.body));

        client.close();

        res.json({ success: true });
    }
}

export default postNewsletter;