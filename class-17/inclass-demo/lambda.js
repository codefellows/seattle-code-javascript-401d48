const AWS = require('aws-sdk');
const S3 = new AWS.S3();


exports.handler = async (event) => {
    // goal:  when I upload a new json file, I am going to add the numbers together

    // console.log('here is event ---------', event);
    
    // basic proof of life
    // let { numberOne, numberTwo } = event;
    // let result = numberOne + numberTwo;
    
    // console.log('here is result ---------', result);
    
    // non dynamic way to get proof of life grabbing numbers from S3
    // let bucketName = 'rkgnum-demo';
    // let key = 'numbers.json';
    
    // let numbers = await S3.getObject({Bucket: bucketName, Key: key}).promise();
    
    
    let bucketName = event.Records[0].s3.bucket.name;
    let key = event.Records[0].s3.object.key;
    
    let numbers = await S3.getObject({Bucket: bucketName, Key: key}).promise();

    
    // notice we have  a buffer string that needs to be parsed
    // console.log('numbers ----------', numbers);
    let stringifiedNumbers = numbers.Body.toString();
    let parsedNumbers = JSON.parse(stringifiedNumbers);
    console.log('parsed numbers ----------', parsedNumbers);
    let { numberOne, numberTwo } = parsedNumbers.numbers;
    let result = numberOne + numberTwo;
    
    console.log('here is result ---------', result);

    
    const response = {
        statusCode: 200,
        body: JSON.stringify(result),
    };
    return response;
};
