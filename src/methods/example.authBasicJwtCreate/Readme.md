### AUTHENTICATION TOKEN GENERATION USING JWT EXAMPLE

## Description:
- This example will generate access_token for your user_id argument and will send in response.
    
## Steps:
1. Install jsonwebtoken package: npm install jsonwebtoken --save

2. Import: const jwt = require('jsonwebtoken');

3. Send user_id as an argument to this action from postman or visit following URL in Browser,
```http://localhost:3000/example/authBasicJwtCreate?user_id=123```

4. Save or copy the access_token for further use
