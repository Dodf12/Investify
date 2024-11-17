import { MongoClient } from "mongodb";

connection_string = 'mongodb+srv://mihirvgajjar04:dEse1sgiFROrEdB0@cluster0.tzwuf.mongodb.net/?retryWrites=true&w=majority&tlsAllowInvalidCertificates=true'

const dbName = "hackathon";
const collectionName = "stock_data";

async function fetchDocumentByTicker(ticker) {
    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
    try {
        await client.connect();

        const database = client.db("hackathon");
        const collection = database.collection("stock_data");
        const query = { ticker: ticker };
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