import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mihirvgajjar04:dEse1sgiFROrEdB0@cluster0.tzwuf.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true";
const options = {};

// API Route Handler
export default async function handler(req, res) {
    let client;

    try {
        // Connect to MongoDB.
        client = new MongoClient(uri, options);
        await client.connect();
        const db = client.db("hackathon");
        const collection = db.collection("stock_data");

        if (req.method === "GET") {
            const data = await collection.find({}).toArray();
            res.status(200).json({ success: true, data });
        } else {
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        if (client) await client.close();
    }
}
