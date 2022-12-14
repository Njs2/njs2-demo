## mCron Example

## Description

This module is used to execute business logic which requires to be executed at time interval less than a minute

1. Business logic should be written inside the `src/tasks` folder with naming conventions as per the default example file`(mCron.tasks.js)`.
2. Enabling/Disabling the mCron job can be done in the config.json file inside SCHEDULER - active key for each mCrons.
3. The mCron job will be executed at the time interval(in Sec) specified in the config.json file inside SCHEDULER key.
4. File name will be name (mCron) in config.json. Only initial name

To execute mCron.

1. Go to root folder in CMD
2. Execute mCron.js file `node mCron.js`
