const redis = require('redis');
const { promisify } = require('util');

class RedisClient {
    constructor() {
        this.client = redis.createClient();
        this.getAsync = promisify(this.client.get).bind(this.client);
    }

    isAlive() {
        return this.client.connected;
    }

    async get(key) {
        return this.getAsync(key);
    }
}

module.exports = new RedisClient();
