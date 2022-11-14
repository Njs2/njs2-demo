## mCron Example

## Description
This module is used to execute business logic which requires to be executed at time interval less than a minute

1. Business logic should be written inside the tasks folder with naming convetions as per the defualt example file(mCron.tasks.js).
2. Enabling/Disabling the mCron job can be done in the config.json file inside SCHEDULER key.
3. The mCron job will be executed at the time interval(in Sec) specified in the config.json file inside SCHEDULER key.
