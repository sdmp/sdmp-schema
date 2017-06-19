module.exports = {
	connection: require('./schemas/connection.json'),
	container: require('./schemas/container.json'),
	encrypted: require('./schemas/encrypted.json'),
	identity: require('./schemas/identity.json'),
	journal_request: require('./schemas/journal_request.json'),
	journal_update: require('./schemas/journal_update.json'),
	message: require('./schemas/message.json'),
	message_receipt: require('./schemas/message_receipt.json'),
	node_information: require('./schemas/node_information.json'),
	payload: require('./schemas/payload.json'),
	post: require('./schemas/post.json'),
	relationship: require('./schemas/relationship.json'),
	resource: require('./schemas/resource.json'),
	resource_request: require('./schemas/resource_request.json'),
	resource_response: require('./schemas/resource_response.json'),
	user_information: require('./schemas/user_information.json')
}
