## mCron Example

## Description

This feature is used to execute any script which requires to be called at a time-interval which is less than 1 Minute

1. Script should be saved inside the `src/tasks` folder with naming conventions as per the default example file`(example.tasks.js)`.
   Eg:

   ```javascript
   async function exampleFunction() {
     // HERE YOU CAN WRITE YOUR CODE
   }
   module.exports = exampleFunction
   ```

2) Enable mCron(s)
To enable mCron you should update below configuration in ```src/config/config.json```


Eg:

```json
{
  "SCHEDULER": {
    "local": {
      "mCron": [
        {
          "name": "example",
          "time": 10,
          "active": true
        }
      ]
    }
  }
}
```
Configuration options:

   - name: string,
     - `name` is the file name which is to be executed.
     - for e.g.: If file name is `example.task.js` then name would be `example`
   - time: number (in seconds),
     - `time` - time interval in seconds
     - for e.g.: If `time : 10` is mentioned, then 'example' script will executed for every '10 seconds'
   - active: boolean
     - `active` to Enable or Disable the mCron script
     - for e.g.: if `active: true` then the script will be executed at the specified interval. if `active: false`, the script will not be executed.

3. To Activate the mCron feature make sure the below script is running in the node process or PM2 or equivalent node script executors.
`node mCron.js`
