const fs = require("fs");
class ExampleCronAction extends baseAction {
  async executeMethod() {
    /*
    CRON EXAMPLE
    /*
    Description : This module is used to execute business logic which requires to be executed at time interval more than a minute .
    1. Business logic should be written inside the tasks folder with naming convetions as per the defualt example file(cron.tasks.js).
    2. Enabling/Disabling the Cron job can be done in the config.json file inside SCHEDULER key.    
    */
    this.setResponse("SUCCESS");
    return {};
  }
}
module.exports = ExampleCronAction;
