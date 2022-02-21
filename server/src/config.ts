import * as dotenv from "dotenv";
dotenv.config({ path: __dirname+'/.env' });

export default {
    MONGO_DATABASE: process.env.MONGO_DATABASE || 'videosdb',
    MONGO_USER: process.env.MONGO_USER ||  '',
    MONGO_PASSWORD: process.env.MONGO_PASSWORD || '',
    MONGO_HOST: process.env.MONGO_LOCALHOST || 'localhost',
    PORT: process.env.PORT || 3000,
}