## ENCRYPTION OPTIONAL MODE EXAMPLE

### Description:
- This example shows how to use encryption in optional mode.

### Steps:
1. In ```config/config.json```, set the following:
```json
"ENCRYPTION_MODE": "optional",
"ENCRYPTION_KEY": "secret-key",
"ENCRYPTION_IV": "secret-iv"
```

2. This will work in two modes:

    * ENCRYPTION DISABLE MODE:
        * Run command in terminal: ```njs2 run express```
        * Pass argument as name=NJS2-user from postman/browser
        * The response will be plain text.
                "Hai NJS2-user, welcome to Njs2 Demo project (Optional Encryption)"

    * ENCRYPTION ENABLE MODE:
        * Run command in terminal: njs2 run express;
        * In postman under the header section, pass enc_state = 1  // To enable encryption mode.
        * Pass the following argument under params:
                ```data = walCNiPvE5JAogazV25FgRTK5P%2FgCI%2BdNJKo2QxySrI%3D```
        * You will get the following response:
                ```ThckBxYVU1cn8K1UWi2woFwSYBjSmboN5onqZn9ZzKuZTYIKQ7tQKGqUqar7eAVzi38lMvN%2F4gnFV5g50zkE5A%3D%3D```
        * If you decrypt the above response, you will get the following:
            "Hai NJS2-user, welcome to Njs2 Demo project (Optional Encryption)"
