## Configure cron(s) in your project

Add cron details to the `config.json` file in the `SCHEDULER` section:

```json
{
  ...
  "SCHEDULER": {
    "local": {
      ...
      "cron": [
        {
          "name": "lifeRefill",
          "time": "*/10 * * * *",
          "active": true,
          "lambda": false
        },
        {
          "name": "weeklyReward",
          "time": "0 0 * * 1",
          "active": true,
          "lambda": false
        }
      ]
    },
    ...
  }
}
```

## Setting up cron(s) on Linux machine (for e.g: EC2)

Connect to the Linux Machine, Open terminal and run following command to edit crontab file:
   
```
crontab -e
```

 In the crontab configuration file add the following command:

```shell
* * * * * cd <project-path> && node cron.js >> <log-file-name>.log 2>&1
```

> **_NOTE:_** For easy access to crontab logs `>> <log-file-name>.log 2>&1` is used. This will create a log file to store crontab logs.

This will create a file with name `<log-file-name>.log` in your project.

 Crontab setup is successful. Please check the logs if eveything is working fine.


## Trigger cron from EventBridge

Add an AWS EventBridge Rule to trigger the Concerned Lambda "Every Minute".

Send the below parameter to the Trigger.

```json
requestType = "cron"
```
