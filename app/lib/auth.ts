import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";


const uri = process.env.BETTER_AUTH_MONGO_URI;
if (!uri) throw new Error("Check your env")

const client = new MongoClient(uri);
const db = client.db("bazarDor");

export const auth = betterAuth({
    database: mongodbAdapter(db, {
        client,
    }),
    emailAndPassword: {
        enabled: true,
        // remember: true
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID as string,
            clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
        },
    },
});