const fs = require("fs");
class ExampleCronAction extends baseAction {
  async executeMethod() {
    /*
    CRON EXAMPLE

    Description:
    - This example shows how to use cron to schedule this method.

    Steps:
    1. Create a file called "cronTest.txt" in the same directory as the action.
    2. This example will append the current date and time to the file for each scheduled execution.
    3. Open the cron tab in your machine using the command "crontab -e".
    4. Add the following line to the cron tab:
          * * * * * curl localhost/example/cron
        (NOTE: For each minute, the cron will execute this command, i.e File will be appended with the current date and time)
    5. While deploying this exmple, you have to set the scheduler in serverless.yml as "cron",
          fileUpdate:
            handler: <PATH_OF_HANDLER>
            events:
              - schedule:
                  rate: rate(1 minute)
    
    */

    await fs.appendFileSync(
      process.cwd() + "/src/methods/example.cron/cronTest.txt",
      "\nCurrent Date is " + new Date()
    );
    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleCronAction;
