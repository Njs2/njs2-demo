## FILE UPLOAD IN S3 EXAMPLE

### Description:
- This example will create  a bucket in S3 and store the file in it.
- File location (URL) will be sent in the response.

### Steps:
1. In init.js, define a parameter as type: 'file', please check the ```init.js``` file.
2. In postman under body tab, under form-data section you can upload file.
3. To run this locally, Make sure that you have aws credentials at ```~/.aws/credentials```\
*NOTE: Make sure have Read and Write permissions for the bucket*
4. To understand aws-sdk s3 servces, please check the following link: 
[https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html](https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/S3.html)
5. While deploying this project, make sure that you have the AWS configuration in ```config.json``` file.
