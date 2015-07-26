var validate = require('jsonschema').validate
var test = require('tape')
var schemas = require('../')

var goodThings = [
	[ './good/relationship-connection.json', [ schemas.resource, schemas.relationship ] ],
	[ './good/relationship-host.json', [ schemas.resource, schemas.relationship ] ],
	[ './good/relationship-publisher.json', [ schemas.resource, schemas.relationship ] ],
	[ './good/node-identity.json', [ schemas.resource, schemas.identity ] ],
	[ './good/user-identity.json', [ schemas.resource, schemas.identity ] ],
	[ './good/user-information.json', [ schemas.resource, schemas.userInformation ] ],
	[ './good/node-information.json', [ schemas.resource, schemas.nodeInformation ] ],
	[ './good/post.json', [ schemas.resource, schemas.post ] ],
	[ './good/post-update.json', [ schemas.resource, schemas.post ] ],
	[ './good/post-delete.json', [ schemas.resource ] ],
	[ './good/encrypted.json', [ schemas.resource, schemas.encrypted ] ],
	[ './good/post-with-encrypted.json', [ schemas.resource, schemas.post, schemas.encrypted ] ]
]

test('do things', function(t) {
	goodThings.forEach(function(thing) {
		var objectToTest = require(thing[0])
		var schemasToAssert = thing[1]
		schemasToAssert.forEach(function(schema) {
			assertGood(validate(objectToTest, schema), t, thing[0])
		})
	})
	t.end()
})

function assertGood(output, t, objectToTest) {
	t.notOk(output.errors.length, 'there should be no errors: ' + objectToTest)
	t.notOk(output.throwError, 'there should not be a thrown error: ' + objectToTest)
}
