# SDMP Schema

The authoritative schema for the SDMP.

The schema defines the following properties:

## `sdmp` (object, required)

Root property distinguishing the YAML file as an SDMP resource.

Properties of the `sdmp` object:

### `resource` (object, required)

Core properties, required on all resources.

Properties of the `resource` object:

#### `version` (semver, required)

Version of SDMP used to create/validate the resource.

#### `publisher` (shaTwoFiftySix, required)

The key fingerprint of the user or node publishing the resource.

#### `created` (isoDate, required)

Date this resource was published. Must be in UTC time with granularity to the millis.

#### `type` (enum, required)

The type of resource this is. Corresponds to the 'data' property.

The object is an enum, with one of the following required values:

* `identity`
* `relationship`
* `user`
* `node`
* `general`

#### `updates` (array)

The resources which this resource overrides.

The object is an array with all elements of the type `shaTwoFiftySix`.

Additional restrictions:

* Unique items: `true`

### `data` (object, required)

Holds the actual resource data.

Properties of the `data` object:

This property must be one of the following types:

* `identity`
* `relationship`
* `user`
* `node`
* `general`

---

# Sub Schemas

The schema defines the following additional types:

## `identity` (object)

Used to create a user or a node.

Properties of the `identity` object:

### `type` (enum)

The type of identity.

The object is an enum, with one of the following required values:

* `user`
* `node`

### `expires` (isoDate)

Date when the identity key should be expired.

### `key` (buffer)

Binary data of the public key, encoded to YAML binary.

## `relationship` (object)

Indicates relationship between user and user, and user and node.

Properties of the `relationship` object:

### `type` ([object Object])

For user-to-node, use 'host' or 'publisher', and for user-to-user, 'connection'.

### `key` (shaTwoFiftySix)

The key fingerprint of the user or node being added as a relationship.

## `user` (object)

Stores information about a user.

Properties of the `user` object:

### `name` (string, required)

A human-readable name for the user.

### `about` (string)

A human-readable description of the user. Meant to differentiate between users with similar names.

## `node` (object)

Used to store information about a node.

Properties of the `node` object:

### `name` (string)

A human-readable name for the node.

### `ips` (array)

String representation of node IP address (IPv4 or IPv6) and port.

The object is an array with all elements of the type `nodeAddress`.

## `general` (object)

Any general resource information can be stored here.

Properties of the `general` object:

### `schema` (string)

A valid JSON-schema URI, defining additional properties available within the whole resource.

### `encrypted` (object)

Encrypted data is placed inside this property.

Properties of the `encrypted` object:

#### `keys` (buffer, required)

The per-user session key, encrypted to the recipient identity key, and the recipient node identity key.

#### `data` (buffer, required)

Secret data, encrypted to session AES key.

### `post` (string)

Markdown formatted plaintext, publically visible content.

## `semver` (string)

Simple regex for semver.org

## `shaTwoFiftySix` (string)

The SHA-256 of the public key in lowercase hexadecimal.

## `isoDate` (string)

The required format for any timestamp.

## `buffer` (object)

In JavaScript, a reasonable way to represent binary data is a Buffer object.

Properties of the `buffer` object:

### `type` (enum, required)

The object is an enum, with one of the following required values:

* `Buffer`

### `data` (array, required)

The object is an array with all elements of the type `integer`.

## `nodeAddress` (string)

IPv4 or IPv6 with port included.