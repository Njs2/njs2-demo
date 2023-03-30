## Example for Configuring MICRO CRON(s)

## Description

This feature is used to execute any script which requires to be called at time intervals that are less than 1 Minute!

1. script should be saved inside the `src/tasks` folder with naming conventions as per the default example file`(roomHandler.tasks.js)`

   ```javascript
   async function roomHandlerFunction() {
     // HERE YOU CAN WRITE YOUR CODE
   }
   module.exports = roomHandlerFunction
   ```

2) Enable mCron(s): \
To enable mCron you should update below configuration in `src/config/config.json`

```json
{
  "SCHEDULER": {
    "local": {
      "mCron": [
        {
          "name": "roomHandler",
          "time": 1, // every second this mCron should be called
          "active": true, // this mCron is ACTIVE
          "runInLambda": false
        },
        {
          "name": "lifeRefill",
          "time": 30, // every 30 seconds this mCron should be called
          "active": false, // this mCron will be SKIPPED
          "runInLambda": false
        }
      ]
    }
  }
}
```
Configuration options:

   - name:
     - the name of the cron file that is to be executed (no white spaces allowed in name!)
     - for e.g.: 
         - If file name is `roomHandler.task.js` then name would be `roomHandler`
   - time:
     - time interval in Seconds
     - for e.g.:
         - If `time : 10` is mentioned, then 'roomHandler' script will executed for every '10 seconds'
   - active
     - a Boolean value to decide if the mCron script should be executed or skipped
     - for e.g.:
         - if `active: true` then the script will be executed at the specified interval.
         - if `active: false`, the script will be skipped!

3. To Activate the mCron feature,
   - run `mCron.js` as a dedicated NodeJS Process in a server
   - run `mCron.js` as a PM2 Process for better management and monitoring
