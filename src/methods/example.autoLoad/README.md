## AUTOLOAD EXAMPLE

### Steps:

1. Create a test file in the ```src/library/helperLib``` folder using the below command: ```njs2 library test```
2. Above command will create a test.lib.js file in the:
```src/library/helperLib``` folder
3. Add the following content to the file:
```javascript
class testLib {
  testFunction() {
    return 'testFunction in helper';
  }
}
module.exports = testLib;
```
4. To load this perticular helper method, use 'AutoLoad' as given below,
```javascript
const [testLib] = AutoLoad('helperLib',['test']);
```
5. More AutoLoad examples are given below.

     - To load Sql Library
     ```javascript
     AutoLoad.loadLibray("sqlLib",["<FILE_NAME>"])
     ```
     - To load Mongo Library
     ```javascript
     AutoLoad.loadLibray("mongoLib",["<FILE_NAME>"]) 
     ```
     
* NOTE: <FILE_NAME> is the name of the file without ```.lib.js``` *
