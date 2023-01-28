import Redis from "ioredis";
import { env } from "../env/server.mjs";

const redis = new Redis(env.REDIS_URL);

export default redis;
