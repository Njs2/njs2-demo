
class ExampleSqlTransactionQueryAction extends baseAction {
    /*
    SQL TRANSACTION EXAMPLE

    Description:
    - This example shows how to implement transaction queries.

    Steps:
    1. Pass the following arguments:
      * user_id
      * status
    2. Sucess response will be returned if transaction is sucess else a Failed response is returned.

    */
  async executeMethod() {
    let { userId,status } = this;
    
    await SQLManager.transaction.start();//Initiate transaction - BEGIN TRANSACTION

    await SQLManager.transaction.doExecute(                 //Executing RAW Query
      `INSERT INTO trans (user_id,status) VALUES(${userId},${status})`
    );
    await SQLManager.transaction.doExecute(                 //Executing RAW Query
      `UPDATE trans SET status = 19 WHERE user_id = ${userId}`
    );
    await SQLManager.transaction.doExecute(                 //Executing RAW Query
      "INSERT INTO trans (user_id,status) VALUES(92,7)"
    );
    let res = await SQLManager.transaction.doExecute(       //Executing RAW Query
      "SELECT * FROM trans"
    );
    
    //In case of rollback scenario 
    if (res.length < 10){
      await SQLManager.transaction.rollBack();
    } 

    //In case of Sucess scenario - commiting changes to database.
    await SQLManager.transaction.commit();
    this.setResponse('SUCCESS');
    return {};
  };

}
module.exports = ExampleSqlTransactionQueryAction;