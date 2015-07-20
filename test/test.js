var fs = require('fs')
var test = require('tape')
var Joi = require('joi')
var enjoi = require('enjoi')
var yaml = require('js-yaml')
var parseYaml = yaml.safeLoad

var goodSchemas = [
	'public-post',
	'user-identity',
	'node-identity',
	'relationship-connection',
	'relationship-host',
	'relationship-publisher',
	'user-information',
	'node-information',
	'encrypted'
]

var sdmpSchema = require('../schema.json')
var joiSchema = enjoi(sdmpSchema)

test('The good schemas should validate.', function(t) {
	t.plan(goodSchemas.length)
	goodSchemas.forEach(function(schema) {
		var parsedYaml = parseYaml(fs.readFileSync('./test/good/' + schema + '.yaml', 'utf8'))
		Joi.validate(parsedYaml, joiSchema, function(err) {
			t.notOk(err, 'There should not be errors for "' + schema + '"')
		})
	})
})
