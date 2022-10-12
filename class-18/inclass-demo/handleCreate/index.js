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
    console.log('asdgasfh-----', event.body)

    // pkan A extract from the body
    let parsedBody = JSON.parse(event.body);
    let { id, name, phone} = parsedBody;

    // plan B if cannot extract from the body
    // let { id, name, phone} = event.queryStringParameters;

    let friend = {id, name, phone}
    console.log('ajsdbfg-------', friend);

    const response = {statusCode: null, body: null};

    try {
        let newFriend = await friendModel.create(friend);
        response.statusCode = 200;
        response.body = JSON.stringify(newFriend);

    } catch (e) {
        console.log(e);
        response.statusCode = 500;
        response.body = JSON.stringify(e.message);
    }


    return response;
};
