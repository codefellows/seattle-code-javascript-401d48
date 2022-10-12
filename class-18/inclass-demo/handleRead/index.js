// third party library
const dynamoose = require('dynamoose');
// to be continued (code locally, zip, and upload)

// create a schema
const friendSchema = new dynamoose.Schema({
    id: String,
    name: String,
    phone: String,
});

// create a model
const friendModel = dynamoose.model('friends-demo', friendSchema);

exports.handler = async (event) => {
    // TODO implement
    
    console.log('jasbld----', event.queryStringParameters);

    const response = {statusCode: null, body: null};

    try {
        let friendRecords = await friendModel.scan().exec();
        response.statusCode = 200;
        response.body = JSON.stringify(friendRecords);

    } catch (e) {
        console.log(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }

    return response;
};
