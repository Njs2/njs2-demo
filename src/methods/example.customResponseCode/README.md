## CUSTOM RESPONSE EXAMPLE

### Description:
- This example explains how to define and use the custom response, similar to "SUCCESS"

### Steps:
1.Update below content in ```global/i18n/response.js```
```javascript
  INVALID_USER: {
    responseCode: 1001, responseMessage: {
      "en": "Invalid user data"
    }
  },
  CUSTOM_RESPONSE: {
    responseCode: 1002, responseMessage: {
      "en": "Custom response"
    }
  }
```
2. Send the request to the following URL ```http://localhost:3000/example/customResponse```
