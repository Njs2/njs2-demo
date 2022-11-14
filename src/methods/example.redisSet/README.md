## REDIS SET DATA EXAMPLE

### Description:
- This example shows how to set data in redis.

### Steps:
1. Make sure you have a redis server installed and running on your local machine.
2. Install Njs2-Redis module using ```npm install @njs2/redis``` command
3. Update the below configuration in config/config.json as per your environment
```json
"REDIS_HOST_URL": "localhost",
"REDIS_HOST_PORT": 6379,
"REDIS_HOST_PASSWORD": "",
"REDIS_PREFIX_KEY": "USER_"
```
5. Pass the ```user_id``` as an argument in the API request body
