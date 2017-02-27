import redis from 'redis';
import redis_config from '../config/redis';

class Redis_Repository {
  constructor() {
    this.client = this.get_redis_client();
  }

  get_redis_client() {
    if (process.env.IS_DEBUG)
      return redis.createClient();
    else
      return redis.createClient();
      // return redis.createClient(redis_config.port, redis_config.host);
  }

  publish(channel, message) {
    this.client.publish(channel, message);
  }

  subscribe(channel, callback) {
    this.client.subscribe(channel);

    this.client.on('message', (channel, message) => {
      if (callback)
        callback(message);
    });
  }

  kill() {
    this.client.quit();
  }
}

export default new Redis_Repository();
