## DECRYPT DATA EXAMPLE

### Steps:

1. Make sure you have encrypted Data which is generated by the encryptData API.
2. Go through the ```decode.lib.js``` helper method, created under the ```library/helperLib```
3. You can use the same snippet for future use.
4. ```decode.lib.js``` file loaded as ```decryptLib```
5. The data sent by the user would decrypt using the ```decryptLib.decryptText()``` method.
6. The encrypted  data should be sent in 'data' parameter in request params, as shown below.
```javascript
data:  walCNiPvE5JAogazV25FgRTK5P%2FgCI%2BdNJKo2QxySrI%3D
```
7. The decrypted data will be returned in the response
```javascript
{
  "name":"NJS2-user"
}
```
