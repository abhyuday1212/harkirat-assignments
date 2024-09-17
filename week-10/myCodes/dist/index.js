// wap to insert a users table in the database
// app.js
// app.js// src/index.ts
import pkg from "pg";
import dotenv from "dotenv";
dotenv.config();
const { Client } = pkg;
/*
const client = new Client({
 connectionString: "postgresql://neondb_owner:G01sYKodFIuT@ep-lively-leaf-a54lecny-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require"
});

async function createUsersTable() {
    await client.connect()
    const result = await client.query(`
        CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
    `)
    console.log(result)
}

// createUsersTable();
*/
async function insertData() {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:G01sYKodFIuT@ep-lively-leaf-a54lecny-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    });
    try {
        await client.connect();
        const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com', 'user_password');";
        const res = await client.query(insertQuery);
        console.log("Insertion success:\n", res);
    }
    catch (err) {
        console.error("Error during the insertion:", err);
    }
    finally {
        await client.end();
    }
}
// insertData();
async function getUser(email) {
    const client = new Client({
        connectionString: "postgresql://neondb_owner:G01sYKodFIuT@ep-lively-leaf-a54lecny-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require",
    });
    try {
        await client.connect();
        const query = "SELECT * FROM users WHERE email = $1";
        const values = [email];
        const result = await client.query(query, values);
        if (result.rows.length > 0) {
            console.log("User found:", result.rows[0]);
            return result.rows[0];
        }
        else {
            console.log("No user found with the given email.");
            return null;
        }
    }
    catch (err) {
        console.error("Error during fetching user:", err);
        throw err; // Rethrow or handle error appropriately
    }
    finally {
        await client.end(); // Close the client connection
    }
}
// Example usage
getUser("user3@example.com").catch(console.error);
