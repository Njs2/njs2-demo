## mCron Example

## Description

This module is used to execute business logic which requires to be executed at time interval less than a minute

1. Business logic should be written inside the `src/tasks` folder with naming conventions as per the default example file`(mCron.tasks.js)`.
   Eg:

   ```javascript
   async function mCronFunction() {
     // Fetch all Active rooms
     // Check of satisfactory match making condition to fulfilled
     // Process room start logic
     console.log('Room Initialization - Logic')
   }
   module.exports = mCronFunction
   ```

2) To Schedule mCron in `config.json` inside ```SCHEDULER``` key ```local``` add the desired mCron details as follows -

- Inside mCron array add Object with :
   - name: string,
     - `name` is the file name which is to be executed.
     - If file name is `roomInit.task.js` then name would be `roomInit`
   - time: number (seconds),
     - `time` it is in which interval of seconds the code needs to be executed.
     - If `time : 1` is mention then roomInit will execute in every one seconds.
   - active: boolean
     - `active` to Enable or Disable the mCron can be controlled.
     - if `active: true` then roomInit will be executing at specified interval

Eg:

```json
{
  "SCHEDULER": {
    "local": {
      "mCron": [
        {
          "name": "roomInit",
          "time": 1,
          "active": true
        }
      ]
    }
  }
}
```

3. To execute the mCrons from the terminal execute the mCron.js file in the root of the project.

- For example - `node mCron.js`
