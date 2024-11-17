import { MongoClient } from "mongodb";

const { MongoClient } = require('mongodb');

// Replace with your MongoDB connection string
const uri = "mongodb://localhost:27017"; // Example for local MongoDB
const dbName = "hackathon";
const collectionName = "stock_data"; // Name of the collection to query

async function fetchDocumentByTicker(ticker) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();  // Connect to the MongoDB server
        const database = client.db("hackathon");
        const collection = database.collection("stock_data");
        
        // Query to find the document by ticker
        const query = { ticker: ticker };

        // Fetch a single document
        const document = await collection.findOne(query);

        if (document) {
            console.log("Document found:", document);
        } else {
            console.log("No document found with the specified ticker");
        }
    } catch (err) {
        console.error("Error fetching document:", err);
    } finally {
        await client.close();
    }
}