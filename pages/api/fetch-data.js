import { MongoClient } from "mongodb";

const uri = "mongodb+srv://mihirvgajjar04:dEse1sgiFROrEdB0@cluster0.tzwuf.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true"; // Your MongoDB URI
const options = {};

// API Route Handler
export default async function handler(req, res) {
    let client;

    try {
        // Connect to MongoDB
        client = new MongoClient(uri, options);
        await client.connect(); // Establish connection
        const db = client.db("hackathon"); // Replace with your database name
        const collection = db.collection("stock_data");

        if (req.method === "GET") {
            // Fetch data
            const data = await collection.find({}).toArray();
            res.status(200).json({ success: true, data });
        } else {
            // Method not allowed
            res.setHeader("Allow", ["GET"]);
            res.status(405).end(`Method ${req.method} Not Allowed`);
        }
    } catch (error) {
        console.error("MongoDB connection error:", error);
        res.status(500).json({ success: false, error: error.message });
    } finally {
        // Ensure the client is closed
        if (client) await client.close();
    }
}
