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

  let id = event?.pathParameters?.id;
  console.log('sadjgasfg----------', id)

  const response = { statusCode: null, body: null };

  try {
    let deletedItem = await friendModel.delete(id);
    response.statusCode = 200;
    response.body = JSON.stringify({message: 'success', itemDeleted: deletedItem});

  }catch (e){
    console.log(e);
    response.statusCode = 500;
    response.body = JSON.stringify(e.message);
  }

  return response;
};
