//commonJS module to export data

//new theory about tag ,being an array of ids , predefine tags based on them i can create section header objects and add rows

//EXPORTING DATA from mongo
//
//mongoexport -h ds035137.mongolab.com:35137 -d refs -c references -u refs -p refs871 -o refs.json --jsonArray
//option jsonArray makes it an array

var categories = {

	'cats' : [{
		"_id" : "504ebb576723781110000002",
		"appid" : "redis",
		"catname" : "Keys"
	}, {
		"_id" : "504ebb576723781110000003",
		"appid" : "redis",
		"catname" : "Strings"
	}, {
		"_id" : "504ebb576723781110000004",
		"appid" : "redis",
		"catname" : "Hashes"
	}, {
		"_id" : "504ebb576723781110000005",
		"appid" : "redis",
		"catname" : "Lists"
	}, {
		"_id" : "504ebb576723781110000006",
		"appid" : "redis",
		"catname" : "Sets"
	}, {
		"_id" : "504ebb576723781110000007",
		"appid" : "redis",
		"catname" : "Sorted Sets"
	}, {
		"_id" : "504ebb576723781110000008",
		"appid" : "redis",
		"catname" : "Pub/Sub"
	}, {
		"_id" : "504ebb576723781110000009",
		"appid" : "redis",
		"catname" : "Transactions"
	}, {
		"_id" : "504ebb57672378111000000a",
		"appid" : "redis",
		"catname" : "Scripting"
	}, {
		"_id" : "504ebb57672378111000000b",
		"appid" : "redis",
		"catname" : "Connection"
	}, {
		"_id" : "504ebb57672378111000000c",
		"appid" : "redis",
		"catname" : "Server"
	}]

}

//'commands' : [{"_id":"504fe0a76723782603000008","catid":"504ebb576723781110000002","examples":"redis> SET key1 \"Hello\"\r\nOK\r\nredis> EXISTS key1\r\n(integer) 1\r\nredis> EXISTS key2\r\n(integer) 0","longdesc":"Returns if key exists.","name":"EXISTS","params":"key","returnvalue":"Integer reply, specifically: 1 if the key exists. 0 if the key does not exist.","shortdesc":"Determine if a key exists","sinceversion":"1.0.0","timecomplexity":"O(1)","url":"http://redis.io/commands/exists"},{"_id":"504fe0af6723782603000009","catid":"504ebb576723781110000002","examples":"redis> SET mykey 10\r\nOK\r\nredis> DUMP mykey\r\n\"\\u0000\\xC0\\n\\u0006\\u0000\\xF8r?\\xC5\\xFB\\xFB_(\"","longdesc":"Serialize the value stored at key in a Redis-specific format and return it to the user. The returned value can be synthesized back into a Redis key using the RESTORE command.\r\nThe serialization format is opaque and non-standard, however it has a few semantical characteristics:\r\nIt contains a 64-bit checksum that is used to make sure errors will be detected. The RESTORE command makes sure to check the checksum before synthesizing a key using the serialized value.\r\nValues are encoded in the same format used by RDB.\r\nAn RDB version is encoded inside the serialized value, so that different Redis versions with incompatible RDB formats will refuse to process the serialized value.\r\nThe serialized value does NOT contain expire information. In order to capture the time to live of the current value the PTTL command should be used.\r\nIf key does not exist a nil bulk reply is returned.","name":"DUMP","params":"key","returnvalue":"Bulk reply: the serialized value.","shortdesc":"Return a serialized version of the value stored at the specified key.","sinceversion":"1.0.0","timecomplexity":"O(1) to access the key and additional O(N*M) to serialized it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).","url":"http://redis.io/commands/dump"},{"_id":"504fe0f6672378260300000a","catid":"504ebb576723781110000002","examples":"redis> SET key1 \"Hello\"\r\nOK\r\nredis> SET key2 \"World\"\r\nOK\r\nredis> DEL key1 key2 key3\r\n(integer) 2","longdesc":"Removes the specified keys. A key is ignored if it does not exist.","name":"DEL","params":"key [key ...]","returnvalue":"Integer reply: The number of keys that were removed.","shortdesc":"Delete a key","sinceversion":"1.0.0","timecomplexity":"O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).","url":"http://redis.io/commands/del"}]

var data = {
	'commands' : [{
		"_id" : {
			"$oid" : "504fe0a76723782603000008"
		},
		"name" : "EXISTS",
		"params" : "key",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically: 1 if the key exists. 0 if the key does not exist.",
		"shortdesc" : "Determine if a key exists",
		"longdesc" : "Returns if key exists.",
		"examples" : "redis> SET key1 \"Hello\"\r\nOK\r\nredis> EXISTS key1\r\n(integer) 1\r\nredis> EXISTS key2\r\n(integer) 0",
		"url" : "http://redis.io/commands/exists"
	}, {
		"_id" : {
			"$oid" : "504fe0af6723782603000009"
		},
		"name" : "DUMP",
		"params" : "key",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1) to access the key and additional O(N*M) to serialized it, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1).",
		"returnvalue" : "Bulk reply: the serialized value.",
		"shortdesc" : "Return a serialized version of the value stored at the specified key.",
		"longdesc" : "Serialize the value stored at key in a Redis-specific format and return it to the user. The returned value can be synthesized back into a Redis key using the RESTORE command.\r\nThe serialization format is opaque and non-standard, however it has a few semantical characteristics:\r\nIt contains a 64-bit checksum that is used to make sure errors will be detected. The RESTORE command makes sure to check the checksum before synthesizing a key using the serialized value.\r\nValues are encoded in the same format used by RDB.\r\nAn RDB version is encoded inside the serialized value, so that different Redis versions with incompatible RDB formats will refuse to process the serialized value.\r\nThe serialized value does NOT contain expire information. In order to capture the time to live of the current value the PTTL command should be used.\r\nIf key does not exist a nil bulk reply is returned.",
		"examples" : "redis> SET mykey 10\r\nOK\r\nredis> DUMP mykey\r\n\"\\u0000\\xC0\\n\\u0006\\u0000\\xF8r?\\xC5\\xFB\\xFB_(\"",
		"url" : "http://redis.io/commands/dump"
	}, {
		"_id" : {
			"$oid" : "504fe0f6672378260300000a"
		},
		"name" : "DEL",
		"params" : "key [key ...]",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(N) where N is the number of keys that will be removed. When a key to remove holds a value other than a string, the individual complexity for this key is O(M) where M is the number of elements in the list, set, sorted set or hash. Removing a single key that holds a string value is O(1).",
		"returnvalue" : "Integer reply: The number of keys that were removed.",
		"shortdesc" : "Delete a key",
		"longdesc" : "Removes the specified keys. A key is ignored if it does not exist.",
		"examples" : "redis> SET key1 \"Hello\"\r\nOK\r\nredis> SET key2 \"World\"\r\nOK\r\nredis> DEL key1 key2 key3\r\n(integer) 2",
		"url" : "http://redis.io/commands/del"
	}, {
		"_id" : {
			"$oid" : "505771ab6723782e05000001"
		},
		"name" : " EXPIRE  ",
		"params" : "key seconds",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if the timeout was set.     0 if key does not exist or the timeout could not be set.",
		"shortdesc" : "Set a key's time to live in seconds",
		"longdesc" : "Set a timeout on key. After the timeout has expired, the key will automatically be deleted. A key with an associated timeout is often said to be volatile in Redis terminology.\r\n\r\nThe timeout is cleared only when the key is removed using the DEL command or overwritten using the SET or GETSET commands. This means that all the operations that conceptually alter the value stored at the key without replacing it with a new one will leave the timeout untouched. For instance, incrementing the value of a key with INCR, pushing a new value into a list with LPUSH, or altering the field value of a hash with HSET are all operations that will leave the timeout untouched.\r\n\r\nThe timeout can also be cleared, turning the key back into a persistent key, using the PERSIST command.\r\n\r\nIf a key is renamed with RENAME, the associated time to live is transferred to the new key name.\r\n\r\nIf a key is overwritten by RENAME, like in the case of an existing key Key_A that is overwritten by a call like RENAME Key_B Key_A, it does not matter if the original Key_A had a timeout associated or not, the new key Key_A will inherit all the characteristics of Key_B.\r\nRefreshing expires\r\n\r\nIt is possible to call EXPIRE using as argument a key that already has an existing expire set. In this case the time to live of a key is updated to the new value. There are many useful applications for this, an example is documented in the Navigation session pattern section below.\r\nDifferences in Redis prior 2.1.3\r\n\r\nIn Redis versions prior 2.1.3 altering a key with an expire set using a command altering its value had the effect of removing the key entirely. This semantics was needed because of limitations in the replication layer that are now fixed.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  EXPIRE mykey 10\r\n\r\n(integer) 1\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) 10\r\n\r\nredis>  SET mykey \"Hello World\"\r\n\r\nOK\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) -1",
		"url" : "http://redis.io/commands/expire"
	}, {
		"_id" : {
			"$oid" : "505772656723782e05000002"
		},
		"name" : " EXPIREAT ",
		"params" : "key timestamp ",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.2.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if the timeout was set.     0 if key does not exist or the timeout could not be set (see: EXPIRE).",
		"shortdesc" : "Set the expiration for a key as a UNIX timestamp",
		"longdesc" : "EXPIREAT has the same effect and semantic as EXPIRE, but instead of specifying the number of seconds representing the TTL (time to live), it takes an absolute Unix timestamp (seconds since January 1, 1970).\r\n\r\nPlease for the specific semantics of the command refer to the documentation of EXPIRE.\r\nBackground\r\n\r\nEXPIREAT was introduced in order to convert relative timeouts to absolute timeouts for the AOF persistence mode. Of course, it can be used directly to specify that a given key should expire at a given time in the future.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  EXISTS mykey\r\n\r\n(integer) 1\r\n\r\nredis>  EXPIREAT mykey 1293840000\r\n\r\n(integer) 1\r\n\r\nredis>  EXISTS mykey\r\n\r\n(integer) 0",
		"url" : "http://redis.io/commands/expireat"
	}, {
		"_id" : {
			"$oid" : "505772d76723782e05000003"
		},
		"name" : "KEYS",
		"params" : "pattern",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(N) with N being the number of keys in the database, under the assumption that the key names in the database and the given pattern have limited length.",
		"returnvalue" : "Multi-bulk reply: list of keys matching pattern.",
		"shortdesc" : "Find all keys matching the given pattern",
		"longdesc" : "Returns all keys matching pattern.\r\n\r\nWhile the time complexity for this operation is O(N), the constant times are fairly low. For example, Redis running on an entry level laptop can scan a 1 million key database in 40 milliseconds.\r\n\r\nWarning: consider KEYS as a command that should only be used in production environments with extreme care. It may ruin performance when it is executed against large databases. This command is intended for debugging and special operations, such as changing your keyspace layout. Don't use KEYS in your regular application code. If you're looking for a way to find keys in a subset of your keyspace, consider using sets.\r\n\r\nSupported glob-style patterns:\r\n\r\n    h?llo matches hello, hallo and hxllo\r\n    h*llo matches hllo and heeeello\r\n    h[ae]llo matches hello and hallo, but not hillo\r\n\r\nUse \\ to escape special characters if you want to match them verbatim.",
		"examples" : "redis>  MSET one 1 two 2 three 3 four 4\r\n\r\nOK\r\n\r\nredis>  KEYS *o*\r\n\r\n1) \"two\"\r\n2) \"one\"\r\n3) \"four\"\r\n\r\nredis>  KEYS t??\r\n\r\n1) \"two\"\r\n\r\nredis>  KEYS *\r\n\r\n1) \"two\"\r\n2) \"three\"\r\n3) \"one\"\r\n4) \"four\"",
		"url" : "http://redis.io/commands/keys"
	}, {
		"_id" : {
			"$oid" : "505773586723782e05000004"
		},
		"name" : "MIGRATE",
		"params" : "host port key destination-db timeout",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "This command actually executes a DUMP+DEL in the source instance, and a RESTORE in the target instance. See the pages of these commands for time complexity. Also an O(N) data transfer between the two instances is performed.",
		"returnvalue" : "Status code reply: The command returns OK on success.",
		"shortdesc" : "Atomically transfer a key from a Redis instance to another one.",
		"longdesc" : "Atomically transfer a key from a source Redis instance to a destination Redis instance. On success the key is deleted from the original instance and is guaranteed to exist in the target instance.\r\n\r\nThe command is atomic and blocks the two instances for the time required to transfer the key, at any given time the key will appear to exist in a given instance or in the other instance, unless a timeout error occurs.\r\n\r\nThe command internally uses DUMP to generate the serialized version of the key value, and RESTORE in order to synthesize the key in the target instance. The source instance acts as a client for the target instance. If the target instance returns OK to the RESTORE command, the source instance deletes the key using DEL.\r\n\r\nThe timeout specifies the maximum idle time in any moment of the communication with the destination instance in milliseconds. This means that the operation does not need to be completed within the specified amount of milliseconds, but that the transfer should make progresses without blocking for more than the specified amount of milliseconds.\r\n\r\nMIGRATE needs to perform I/O operations and to honor the specified timeout. When there is an I/O error during the transfer or if the timeout is reached the operation is aborted and the special error - IOERR returned. When this happens the following two cases are possible:\r\n\r\n    The key may be on both the instances.\r\n    The key may be only in the source instance.\r\n\r\nIt is not possible for the key to get lost in the event of a timeout, but the client calling MIGRATE, in the event of a timeout error, should check if the key is also present in the target instance and act accordingly.\r\n\r\nWhen any other error is returned (starting with ERR) MIGRATE guarantees that the key is still only present in the originating instance (unless a key with the same name was also already present on the target instance).\r\n\r\nOn success OK is returned.",
		"examples" : "",
		"url" : "http://redis.io/commands/migrate"
	}, {
		"_id" : {
			"$oid" : "505773ac6723782e05000005"
		},
		"name" : "MOVE",
		"params" : "key db",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if key was moved.     0 if key was not moved.",
		"shortdesc" : "Move a key to another database",
		"longdesc" : "Move key from the currently selected database (see SELECT) to the specified destination database. When key already exists in the destination database, or it does not exist in the source database, it does nothing. It is possible to use MOVE as a locking primitive because of this.",
		"examples" : "",
		"url" : "http://redis.io/commands/move"
	}, {
		"_id" : {
			"$oid" : "5057742e6723782e05000006"
		},
		"name" : "OBJECT",
		"params" : " subcommand [arguments [arguments ..",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.2.3",
		"timecomplexity" : "O(1) for all the currently implemented subcommands.",
		"returnvalue" : "Different return values are used for different subcommands.      Subcommands refcount and idletime returns integers.     Subcommand encoding returns a bulk reply.  If the object you try to inspect is missing, a null bulk reply is returned.",
		"shortdesc" : "Inspect the internals of Redis objects",
		"longdesc" : "The OBJECT command allows to inspect the internals of Redis Objects associated with keys. It is useful for debugging or to understand if your keys are using the specially encoded data types to save space. Your application may also use the information reported by the OBJECT command to implement application level key eviction policies when using Redis as a Cache.\r\n\r\nThe OBJECT command supports multiple sub commands:\r\n\r\n    OBJECT REFCOUNT <key> returns the number of references of the value associated with the specified key. This command is mainly useful for debugging.\r\n    OBJECT ENCODING <key> returns the kind of internal representation used in order to store the value associated with a key.\r\n    OBJECT IDLETIME <key> returns the number of seconds since the object stored at the specified key is idle (not requested by read or write operations). While the value is returned in seconds the actual resolution of this timer is 10 seconds, but may vary in future implementations.\r\n\r\nObjects can be encoded in different ways:\r\n\r\n    Strings can be encoded as raw (normal string encoding) or int (strings representing integers in a 64 bit signed interval are encoded in this way in order to save space).\r\n    Lists can be encoded as ziplist or linkedlist. The ziplist is the special representation that is used to save space for small lists.\r\n    Sets can be encoded as intset or hashtable. The intset is a special encoding used for small sets composed solely of integers.\r\n    Hashes can be encoded as zipmap or hashtable. The zipmap is a special encoding used for small hashes.\r\n    Sorted Sets can be encoded as ziplist or skiplist format. As for the List type small sorted sets can be specially encoded using ziplist, while the skiplist encoding is the one that works with sorted sets of any size.\r\n\r\nAll the specially encoded types are automatically converted to the general type once you perform an operation that makes it no possible for Redis to retain the space saving encoding.",
		"examples" : "redis> lpush mylist \"Hello World\"\r\n(integer) 4\r\nredis> object refcount mylist\r\n(integer) 1\r\nredis> object encoding mylist\r\n\"ziplist\"\r\nredis> object idletime mylist\r\n(integer) 10",
		"url" : "http://redis.io/commands/object"
	}, {
		"_id" : {
			"$oid" : "505774e96723782e05000007"
		},
		"name" : "PERSIST",
		"params" : "key",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if the timeout was removed.     0 if key does not exist or does not have an associated timeout.",
		"shortdesc" : "Remove the expiration from a key",
		"longdesc" : "Remove the existing timeout on key, turning the key from volatile (a key with an expire set) to persistent (a key that will never expire as no timeout is associated).",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  EXPIRE mykey 10\r\n\r\n(integer) 1\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) 10\r\n\r\nredis>  PERSIST mykey\r\n\r\n(integer) 1\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) -1",
		"url" : "http://redis.io/commands/persist"
	}, {
		"_id" : {
			"$oid" : "505775606723782e05000008"
		},
		"name" : " PEXPIRE ",
		"params" : "key milliseconds ",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if the timeout was set.     0 if key does not exist or the timeout could not be set.",
		"shortdesc" : "Set a key's time to live in milliseconds",
		"longdesc" : "This command works exactly like EXPIRE but the time to live of the key is specified in milliseconds instead of seconds.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  PEXPIRE mykey 1500\r\n\r\n(integer) 1\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) 1\r\n\r\nredis>  PTTL mykey\r\n\r\n(integer) 1497",
		"url" : "http://redis.io/commands/pexpire"
	}, {
		"_id" : {
			"$oid" : "5057760f6723782e05000009"
		},
		"name" : "PEXPIREAT",
		"params" : "key milliseconds-timestamp ",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if the timeout was set.     0 if key does not exist or the timeout could not be set",
		"shortdesc" : "Set the expiration for a key as a UNIX timestamp specified in milliseconds",
		"longdesc" : "PEXPIREAT has the same effect and semantic as EXPIREAT, but the Unix time at which the key will expire is specified in milliseconds instead of seconds.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  PEXPIREAT mykey 1555555555005\r\n\r\n(integer) 1\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) 207646543\r\n\r\nredis>  PTTL mykey\r\n\r\n(integer) 207646543215",
		"url" : "http://redis.io/commands/pexpireat"
	}, {
		"_id" : {
			"$oid" : "5057769d6723782e0500000a"
		},
		"name" : "PTTL",
		"params" : "key",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Return value  Integer reply: Time to live in milliseconds or -1 when key does not exist or does not have a timeout.",
		"shortdesc" : "Get the time to live for a key in milliseconds",
		"longdesc" : "Like TTL this command returns the remaining time to live of a key that has an expire set, with the sole difference that TTL returns the amount of remaining time in seconds while PTTL returns it in milliseconds.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  EXPIRE mykey 1\r\n\r\n(integer) 1\r\n\r\nredis>  PTTL mykey\r\n\r\n(integer) 999",
		"url" : "http://redis.io/commands/pttl"
	}, {
		"_id" : {
			"$oid" : "505776fd6723782e0500000b"
		},
		"name" : "RANDOMKEY",
		"params" : "",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Return value  Bulk reply: the random key, or nil when the database is empty.",
		"shortdesc" : "Return a random key from the keyspace",
		"longdesc" : "Return a random key from the currently selected database.",
		"examples" : "",
		"url" : "http://redis.io/commands/randomkey"
	}, {
		"_id" : {
			"$oid" : "505777e56723782e0500000c"
		},
		"name" : "RENAME",
		"params" : "key newkey",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Status code reply",
		"shortdesc" : "Rename a key",
		"longdesc" : "\r\n\r\nRenames key to newkey. It returns an error when the source and destination names are the same, or when key does not exist. If newkey already exists it is overwritten.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  RENAME mykey myotherkey\r\n\r\nOK\r\n\r\nredis>  GET myotherkey\r\n\r\n\"Hello\"",
		"url" : "http://redis.io/commands/rename"
	}, {
		"_id" : {
			"$oid" : "505778656723782e0500000d"
		},
		"name" : " RENAMENX ",
		"params" : "key newkey ",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply, specifically:      1 if key was renamed to newkey.     0 if newkey already exists.",
		"shortdesc" : "Rename a key, only if the new key does not exist",
		"longdesc" : "Renames key to newkey if newkey does not yet exist. It returns an error under the same conditions as RENAME.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  SET myotherkey \"World\"\r\n\r\nOK\r\n\r\nredis>  RENAMENX mykey myotherkey\r\n\r\n(integer) 0\r\n\r\nredis>  GET myotherkey\r\n\r\n\"World\"",
		"url" : "http://redis.io/commands/renamenx"
	}, {
		"_id" : {
			"$oid" : "505778e06723782e0500000e"
		},
		"name" : " RESTORE ",
		"params" : "key ttl serialized-value ",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1) to create the new key and additional O(N*M) to recostruct the serialized value, where N is the number of Redis objects composing the value and M their average size. For small string values the time complexity is thus O(1)+O(1*M) where M is small, so simply O(1). However for sorted set values the complexity is O(N*M*log(N)) because inserting values into sorted sets is O(log(N)).",
		"returnvalue" : "Status code reply: The command returns OK on success.",
		"shortdesc" : "Create a key using the provided serialized value, previously obtained using DUMP.",
		"longdesc" : "Create a key associated with a value that is obtained by deserializing the provided serialized value (obtained via DUMP).\r\n\r\nIf ttl is 0 the key is created without any expire, otherwise the specified expire time (in milliseconds) is set.\r\n\r\nRESTORE checks the RDB version and data checksum. If they don't match an error is returned.",
		"examples" : "redis> DEL mykey\r\n0\r\nredis> RESTORE mykey 0 \"\\n\\x17\\x17\\x00\\x00\\x00\\x12\\x00\\x00\\x00\\x03\\x00\\\r\n                        x00\\xc0\\x01\\x00\\x04\\xc0\\x02\\x00\\x04\\xc0\\x03\\x00\\\r\n                        xff\\x04\\x00u#<\\xc0;.\\xe9\\xdd\"\r\nOK\r\nredis> TYPE mykey\r\nlist\r\nredis> LRANGE mykey 0 -1\r\n1) \"1\"\r\n2) \"2\"\r\n3) \"3\"\r\n",
		"url" : "http://redis.io/commands/restore"
	}, {
		"_id" : {
			"$oid" : "505779966723782e0500000f"
		},
		"name" : "SORT",
		"params" : "key [BY pattern] [LIMIT offset count]",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : " O(N+M*log(M)) where N is the number of elements in the list or set to sort, and M the number of returned elements. When the elements are not sorted, complexity is currently O(N) as there is a copy step that will be avoided in next releases.",
		"returnvalue" : "Multi-bulk reply: list of sorted elements.",
		"shortdesc" : "Sort the elements in a list, set or sorted set",
		"longdesc" : "Returns or stores the elements contained in the list, set or sorted set at key. By default, sorting is numeric and elements are compared by their value interpreted as double precision floating point number. This is SORT in its simplest form:\r\n\r\nSORT mylist\r\n\r\nAssuming mylist is a list of numbers, this command will return the same list with the elements sorted from small to large. In order to sort the numbers from large to small, use the DESC modifier:\r\n\r\nSORT mylist DESC\r\n\r\nWhen mylist contains string values and you want to sort them lexicographically, use the ALPHA modifier:\r\n\r\nSORT mylist ALPHA\r\n",
		"examples" : "SORT mylist BY weight_* STORE resultkey",
		"url" : "http://redis.io/commands/sort"
	}, {
		"_id" : {
			"$oid" : "50577a0b6723782e05000010"
		},
		"name" : "TTL",
		"params" : "key",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Integer reply: TTL in seconds or -1 when key does not exist or does not have a timeout.",
		"shortdesc" : "Get the time to live for a key",
		"longdesc" : "Returns the remaining time to live of a key that has a timeout. This introspection capability allows a Redis client to check how many seconds a given key will continue to be part of the dataset.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  EXPIRE mykey 10\r\n\r\n(integer) 1\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) 10",
		"url" : "http://redis.io/commands/ttl"
	}, {
		"_id" : {
			"$oid" : "50577a7d6723782e05000011"
		},
		"name" : "TYPE",
		"params" : "key",
		"catid" : "504ebb576723781110000002",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"returnvalue" : "Status code reply: type of key, or none when key does not exist.",
		"shortdesc" : "Determine the type stored at key",
		"longdesc" : "Returns the string representation of the type of the value stored at key. The different types that can be returned are: string, list, set, zset and hash.",
		"examples" : "redis>  SET key1 \"value\"\r\n\r\nOK\r\n\r\nredis>  LPUSH key2 \"value\"\r\n\r\n(integer) 1\r\n\r\nredis>  SADD key3 \"value\"\r\n\r\n(integer) 1\r\n\r\nredis>  TYPE key1\r\n\r\nstring\r\n\r\nredis>  TYPE key2\r\n\r\nlist\r\n\r\nredis>  TYPE key3\r\n\r\nset",
		"url" : "http://redis.io/commands/type"
	}, {
		"_id" : {
			"$oid" : "50577c776723782e05000012"
		},
		"name" : "APPEND",
		"params" : "key value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1). The amortized time complexity is O(1) assuming the appended value is small and the already present value is of any size, since the dynamic string library used by Redis will double the free space available on every reallocation.",
		"returnvalue" : "Integer reply: the length of the string after the append operation.",
		"shortdesc" : "Append a value to a key",
		"longdesc" : "If key already exists and is a string, this command appends the value at the end of the string. If key does not exist it is created and set as an empty string, so APPEND will be similar to SET in this special case.\r\n\r\n\r\nPattern: Time series\r\n\r\nThe APPEND command can be used to create a very compact representation of a list of fixed-size samples, usually referred as time series. Every time a new sample arrives we can store it using the command\r\n\r\nAPPEND timeseries \"fixed-size sample\"\r\n\r\nAccessing individual elements in the time series is not hard:\r\n\r\n    STRLEN can be used in order to obtain the number of samples.\r\n    GETRANGE allows for random access of elements. If our time series have associated time information we can easily implement a binary search to get range combining GETRANGE with the Lua scripting engine available in Redis 2.6.\r\n    SETRANGE can be used to overwrite an existing time series.\r\n\r\nThe limitation of this pattern is that we are forced into an append-only mode of operation, there is no way to cut the time series to a given size easily because Redis currently lacks a command able to trim string objects. However the space efficiency of time series stored in this way is remarkable.\r\n\r\nHint: it is possible to switch to a different key based on the current Unix time, in this way it is possible to have just a relatively small amount of samples per key, to avoid dealing with very big keys, and to make this pattern more friendly to be distributed across many Redis instances.\r\n\r\nAn example sampling the temperature of a sensor using fixed-size strings (using a binary format is better in real implementations).",
		"examples" : "redis>  EXISTS mykey\r\n\r\n(integer) 0\r\n\r\nredis>  APPEND mykey \"Hello\"\r\n\r\n(integer) 5\r\n\r\nredis>  APPEND mykey \" World\"\r\n\r\n(integer) 11\r\n\r\nredis>  GET mykey\r\n\r\n\"Hello World\"",
		"url" : "http://redis.io/commands/append"
	}, {
		"_id" : {
			"$oid" : "50577cec6723782e05000013"
		},
		"name" : "BITCOUNT",
		"params" : " key [start] [end]",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Count set bits in a string",
		"returnvalue" : "Integer reply  The number of bits set to 1.",
		"longdesc" : "Count the number of set bits (population counting) in a string.\r\n\r\nBy default all the bytes contained in the string are examined. It is possible to specify the counting operation only in an interval passing the additional arguments start and end.\r\n\r\nLike for the GETRANGE command start and end can contain negative values in order to index bytes starting from the end of the string, where -1 is the last byte, -2 is the penultimate, and so forth.\r\n\r\nNon-existent keys are treated as empty strings, so the command will return zero.",
		"examples" : "redis>  SET mykey \"foobar\"\r\n\r\nOK\r\n\r\nredis>  BITCOUNT mykey\r\n\r\n(integer) 26\r\n\r\nredis>  BITCOUNT mykey 0 0\r\n\r\n(integer) 4\r\n\r\nredis>  BITCOUNT mykey 1 1\r\n\r\n(integer) 6",
		"url" : "http://redis.io/commands/bitcount"
	}, {
		"_id" : {
			"$oid" : "50577d4d6723782e05000014"
		},
		"name" : "BITOP",
		"params" : "operation destkey key [key ...] ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Perform bitwise operations between strings",
		"returnvalue" : "Integer reply  The size of the string stored in the destination key, that is equal to the size of the longest input string.",
		"longdesc" : "Perform a bitwise operation between multiple keys (containing string values) and store the result in the destination key.\r\n\r\nThe BITOP command supports four bitwise operations: AND, OR, XOR and NOT, thus the valid forms to call the command are:\r\n\r\n    BITOP AND destkey srckey1 srckey2 srckey3 ... srckeyN\r\n    BITOP OR destkey srckey1 srckey2 srckey3 ... srckeyN\r\n    BITOP XOR destkey srckey1 srckey2 srckey3 ... srckeyN\r\n    BITOP NOT destkey srckey\r\n\r\nAs you can see NOT is special as it only takes an input key, because it performs inversion of bits so it only makes sense as an unary operator.\r\n\r\nThe result of the operation is always stored at destkey.\r\nHandling of strings with different lengths\r\n\r\nWhen an operation is performed between strings having different lengths, all the strings shorter than the longest string in the set are treated as if they were zero-padded up to the length of the longest string.\r\n\r\nThe same holds true for non-existent keys, that are considered as a stream of zero bytes up to the length of the longest string.",
		"examples" : "redis>  SET key1 \"foobar\"\r\n\r\nOK\r\n\r\nredis>  SET key2 \"abcdef\"\r\n\r\nOK\r\n\r\nredis>  BITOP AND dest key1 key2\r\n\r\nERR Don't know what to do for \"bitop\"\r\n\r\nredis>  GET dest\r\n\r\n(nil)",
		"url" : "http://redis.io/commands/bitop"
	}, {
		"_id" : {
			"$oid" : "50577dd66723782e05000015"
		},
		"name" : "DECR",
		"params" : "key",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Decrement the integer value of a key by one",
		"returnvalue" : "Integer reply: the value of key after the decrement",
		"longdesc" : "Decrements the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.\r\n\r\nSee INCR for extra information on increment/decrement operations.",
		"examples" : "redis>  SET mykey \"10\"\r\n\r\nOK\r\n\r\nredis>  DECR mykey\r\n\r\n(integer) 9\r\n\r\nredis>  SET mykey \"234293482390480948029348230948\"\r\n\r\nOK\r\n\r\nredis>  DECR mykey\r\n\r\nERR value is not an integer or out of range\r\n\r\nredis>",
		"url" : "http://redis.io/commands/decr"
	}, {
		"_id" : {
			"$oid" : "50577eed6723782e05000016"
		},
		"name" : "DECRBY",
		"params" : "key decrement ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Decrement the integer value of a key by the given number",
		"returnvalue" : "Integer reply: the value of key after the decrement",
		"longdesc" : "Decrements the number stored at key by decrement. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.\r\n\r\nSee INCR for extra information on increment/decrement operations.",
		"examples" : "redis>  SET mykey \"10\"\r\n\r\nOK\r\n\r\nredis>  DECRBY mykey 5\r\n\r\n(integer) 5",
		"url" : "http://redis.io/commands/decrby"
	}, {
		"_id" : {
			"$oid" : "50577f926723782e05000017"
		},
		"name" : "GET",
		"params" : "key",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the value of a key",
		"returnvalue" : "Bulk reply: the value of key, or nil when key does not exist.",
		"longdesc" : "Get the value of key. If the key does not exist the special value nil is returned. An error is returned if the value stored at key is not a string, because GET only handles string values.",
		"examples" : "redis>  GET nonexisting\r\n\r\n(nil)\r\n\r\nredis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  GET mykey\r\n\r\n\"Hello\"",
		"url" : "http://redis.io/commands/get"
	}, {
		"_id" : {
			"$oid" : "50577ffd6723782e05000018"
		},
		"name" : " GETBIT ",
		"params" : "key offset ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Returns the bit value at offset in the string value stored at key",
		"longdesc" : "Returns the bit value at offset in the string value stored at key.\r\n\r\nWhen offset is beyond the string length, the string is assumed to be a contiguous space with 0 bits. When key does not exist it is assumed to be an empty string, so offset is always out of range and the value is also assumed to be a contiguous space with 0 bits.",
		"returnvalue" : "Integer reply: the bit value stored at offset.",
		"examples" : "redis>  SETBIT mykey 7 1\r\n\r\n(integer) 0\r\n\r\nredis>  GETBIT mykey 0\r\n\r\n(integer) 0\r\n\r\nredis>  GETBIT mykey 7\r\n\r\n(integer) 1\r\n\r\nredis>  GETBIT mykey 100\r\n\r\n(integer) 0",
		"url" : "http://redis.io/commands/getbit"
	}, {
		"_id" : {
			"$oid" : "505780806723782e05000019"
		},
		"name" : "GETRANGE",
		"params" : "key start end ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.4.0",
		"timecomplexity" : "O(N) where N is the length of the returned string. The complexity is ultimately determined by the returned length, but because creating a substring from an existing string is very cheap, it can be considered O(1) for small strings.",
		"shortdesc" : "Get a substring of the string stored at a key",
		"longdesc" : "Warning: this command was renamed to GETRANGE, it is called SUBSTR in Redis versions <= 2.0.\r\n\r\nReturns the substring of the string value stored at key, determined by the offsets start and end (both are inclusive). Negative offsets can be used in order to provide an offset starting from the end of the string. So -1 means the last character, -2 the penultimate and so forth.\r\n\r\nThe function handles out of range requests by limiting the resulting range to the actual length of the string.",
		"returnvalue" : "Bulk reply",
		"examples" : "redis>  SET mykey \"This is a string\"\r\n\r\nOK\r\n\r\nredis>  GETRANGE mykey 0 3\r\n\r\n\"This\"\r\n\r\nredis>  GETRANGE mykey -3 -1\r\n\r\n\"ing\"\r\n\r\nredis>  GETRANGE mykey 0 -1\r\n\r\n\"This is a string\"\r\n\r\nredis>  GETRANGE mykey 10 100\r\n\r\n\"string\"",
		"url" : "http://redis.io/commands/getrange"
	}, {
		"_id" : {
			"$oid" : "505781096723782e0500001a"
		},
		"name" : "GETSET",
		"params" : "key value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the string value of a key and return its old value",
		"longdesc" : "Atomically sets key to value and returns the old value stored at key. Returns an error when key exists but does not hold a string value.\r\nDesign pattern\r\n\r\nGETSET can be used together with INCR for counting with atomic reset. For example: a process may call INCR against the key mycounter every time some event occurs, but from time to time we need to get the value of the counter and reset it to zero atomically. This can be done using GETSET mycounter \"0\":",
		"returnvalue" : "Bulk reply: the old value stored at key, or nil when key did not exist.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  GETSET mykey \"World\"\r\n\r\n\"Hello\"\r\n\r\nredis>  GET mykey\r\n\r\n\"World\"",
		"url" : "http://redis.io/commands/getset"
	}, {
		"_id" : {
			"$oid" : "505781b36723782e0500001b"
		},
		"name" : "INCR",
		"params" : "key",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Increment the integer value of a key by one",
		"longdesc" : "Increments the number stored at key by one. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.\r\n\r\nNote: this is a string operation because Redis does not have a dedicated integer type. The string stored at the key is interpreted as a base-10 64 bit signed integer to execute the operation.\r\n\r\nRedis stores integers in their integer representation, so for string values that actually hold an integer, there is no overhead for storing the string representation of the integer.",
		"returnvalue" : "Integer reply: the value of key after the increment",
		"examples" : "redis>  SET mykey \"10\"\r\n\r\nOK\r\n\r\nredis>  INCR mykey\r\n\r\n(integer) 11\r\n\r\nredis>  GET mykey\r\n\r\n\"11\"",
		"url" : "http://redis.io/commands/incr"
	}, {
		"_id" : {
			"$oid" : "5057821c6723782e0500001c"
		},
		"name" : "INCRBY",
		"params" : " key increment ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Increment the integer value of a key by the given amount",
		"longdesc" : "Increments the number stored at key by increment. If the key does not exist, it is set to 0 before performing the operation. An error is returned if the key contains a value of the wrong type or contains a string that can not be represented as integer. This operation is limited to 64 bit signed integers.\r\n\r\nSee INCR for extra information on increment/decrement operations.",
		"returnvalue" : "Integer reply: the value of key after the increment",
		"examples" : "redis>  SET mykey \"10\"\r\n\r\nOK\r\n\r\nredis>  INCRBY mykey 5\r\n\r\n(integer) 15",
		"url" : "http://redis.io/commands/incrby"
	}, {
		"_id" : {
			"$oid" : "505782b76723782e0500001d"
		},
		"name" : "INCRBYFLOAT",
		"params" : " key increment ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Increment the float value of a key by the given amount",
		"longdesc" : "Increment the string representing a floating point number stored at key by the specified increment. If the key does not exist, it is set to 0 before performing the operation. An error is returned if one of the following conditions occur:\r\n\r\n    The key contains a value of the wrong type (not a string).\r\n    The current key content or the specified increment are not parsable as a double precision floating point number.\r\n\r\nIf the command is successful the new incremented value is stored as the new value of the key (replacing the old one), and returned to the caller as a string.\r\n\r\nBoth the value already contained in the string key and the increment argument can be optionally provided in exponential notation, however the value computed after the increment is stored consistently in the same format, that is, an integer number followed (if needed) by a dot, and a variable number of digits representing the decimal part of the number. Trailing zeroes are always removed.\r\n\r\nThe precision of the output is fixed at 17 digits after the decimal point regardless of the actual internal precision of the computation.",
		"returnvalue" : "Bulk reply: the value of key after the increment.",
		"examples" : "redis>  SET mykey 10.50\r\n\r\nOK\r\n\r\nredis>  INCRBYFLOAT mykey 0.1\r\n\r\n\"10.6\"\r\n\r\nredis>  SET mykey 5.0e3\r\n\r\nOK\r\n\r\nredis>  INCRBYFLOAT mykey 2.0e2\r\n\r\n\"5200\"",
		"url" : "http://redis.io/commands/incrbyfloat"
	}, {
		"_id" : {
			"$oid" : "5057831b6723782e0500001e"
		},
		"name" : "MGET",
		"params" : "key [key ...]",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the values of all the given keys",
		"longdesc" : "Returns the values of all specified keys. For every key that does not hold a string value or does not exist, the special value nil is returned. Because of this, the operation never fails.",
		"returnvalue" : "Multi-bulk reply: list of values at the specified keys.",
		"examples" : "redis>  SET key1 \"Hello\"\r\n\r\nOK\r\n\r\nredis>  SET key2 \"World\"\r\n\r\nOK\r\n\r\nredis>  MGET key1 key2 nonexisting\r\n\r\n1) \"Hello\"\r\n2) \"World\"\r\n3) (nil)",
		"url" : "http://redis.io/commands/mget"
	}, {
		"_id" : {
			"$oid" : "505783816723782e0500001f"
		},
		"name" : "MSET",
		"params" : " key value [key value ...] ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.1",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set multiple keys to multiple values",
		"longdesc" : "Sets the given keys to their respective values. MSET replaces existing values with new values, just as regular SET. See MSETNX if you don't want to overwrite existing values.\r\n\r\nMSET is atomic, so all given keys are set at once. It is not possible for clients to see that some of the keys were updated while others are unchanged.",
		"returnvalue" : "Status code reply: always OK since MSET can't fail.",
		"examples" : "redis>  MSET key1 \"Hello\" key2 \"World\"\r\n\r\nOK\r\n\r\nredis>  GET key1\r\n\r\n\"Hello\"\r\n\r\nredis>  GET key2\r\n\r\n\"World\"",
		"url" : "http://redis.io/commands/mset"
	}, {
		"_id" : {
			"$oid" : "505783db6723782e05000020"
		},
		"name" : "MSETNX",
		"params" : "key value [key value ...] ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.1",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set multiple keys to multiple values, only if none of the keys exist",
		"longdesc" : "Sets the given keys to their respective values. MSETNX will not perform any operation at all even if just a single key already exists.\r\n\r\nBecause of this semantic MSETNX can be used in order to set different keys representing different fields of an unique logic object in a way that ensures that either all the fields or none at all are set.\r\n\r\nMSETNX is atomic, so all given keys are set at once. It is not possible for clients to see that some of the keys were updated while others are unchanged.\r\n",
		"returnvalue" : "Integer reply, specifically:      1 if the all the keys were set.     0 if no key was set (at least one key already existed).",
		"examples" : "redis>  MSETNX key1 \"Hello\" key2 \"there\"\r\n\r\n(integer) 1\r\n\r\nredis>  MSETNX key2 \"there\" key3 \"world\"\r\n\r\n(integer) 0\r\n\r\nredis>  MGET key1 key2 key3\r\n\r\n1) \"Hello\"\r\n2) \"there\"\r\n3) (nil)",
		"url" : "http://redis.io/commands/msetnx"
	}, {
		"_id" : {
			"$oid" : "505784546723782e05000021"
		},
		"name" : "PSETEX",
		"params" : "key milliseconds value ",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the value and expiration in milliseconds of a key",
		"longdesc" : "PSETEX works exactly like SETEX with the sole difference that the expire time is specified in milliseconds instead of seconds.",
		"returnvalue" : "",
		"examples" : "redis>  PSETEX mykey 1000 \"Hello\"\r\n\r\nOK\r\n\r\nredis>  PTTL mykey\r\n\r\n(integer) 999\r\n\r\nredis>  GET mykey\r\n\r\n\"Hello\"",
		"url" : "http://redis.io/commands/psetex"
	}, {
		"_id" : {
			"$oid" : "5057849e6723782e05000022"
		},
		"name" : "SET",
		"params" : "key value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the string value of a key",
		"longdesc" : "Set key to hold the string value. If key already holds a value, it is overwritten, regardless of its type.",
		"returnvalue" : "Status code reply: always OK since SET can't fail.",
		"examples" : "redis>  SET mykey \"Hello\"\r\n\r\nOK\r\n\r\nredis>  GET mykey\r\n\r\n\"Hello\"",
		"url" : "http://redis.io/commands/set"
	}, {
		"_id" : {
			"$oid" : "5057851e6723782e05000023"
		},
		"name" : "SETBIT",
		"params" : "key offset value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Sets or clears the bit at offset in the string value stored at key",
		"longdesc" : "Sets or clears the bit at offset in the string value stored at key.\r\n\r\nThe bit is either set or cleared depending on value, which can be either 0 or 1. When key does not exist, a new string value is created. The string is grown to make sure it can hold a bit at offset. The offset argument is required to be greater than or equal to 0, and smaller than 232 (this limits bitmaps to 512MB). When the string at key is grown, added bits are set to 0.\r\n\r\nWarning: When setting the last possible bit (offset equal to 232 -1) and the string value stored at key does not yet hold a string value, or holds a small string value, Redis needs to allocate all intermediate memory which can block the server for some time. On a 2010 MacBook Pro, setting bit number 232 -1 (512MB allocation) takes ~300ms, setting bit number 230 -1 (128MB allocation) takes ~80ms, setting bit number 228 -1 (32MB allocation) takes ~30ms and setting bit number 226 -1 (8MB allocation) takes ~8ms. Note that once this first allocation is done, subsequent calls to SETBIT for the same key will not have the allocation overhead.\r\n",
		"returnvalue" : "Integer reply: the original bit value stored at offset.",
		"examples" : "redis>  SETBIT mykey 7 1\r\n\r\n(integer) 0\r\n\r\nredis>  SETBIT mykey 7 0\r\n\r\n(integer) 1\r\n\r\nredis>  GET mykey\r\n\r\n\"\\u0000\"",
		"url" : "http://redis.io/commands/setbit"
	}, {
		"_id" : {
			"$oid" : "505785796723782e05000024"
		},
		"name" : "SETEX",
		"params" : "key seconds value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the value and expiration of a key",
		"longdesc" : "Set key to hold the string value and set key to timeout after a given number of seconds. This command is equivalent to executing the following commands:\r\n\r\nSET mykey value\r\nEXPIRE mykey seconds\r\n\r\nSETEX is atomic, and can be reproduced by using the previous two commands inside an MULTI / EXEC block. It is provided as a faster alternative to the given sequence of operations, because this operation is very common when Redis is used as a cache.\r\n\r\nAn error is returned when seconds is invalid.",
		"returnvalue" : "status code reply",
		"examples" : "redis>  SETEX mykey 10 \"Hello\"\r\n\r\nOK\r\n\r\nredis>  TTL mykey\r\n\r\n(integer) 10\r\n\r\nredis>  GET mykey\r\n\r\n\"Hello\"",
		"url" : "http://redis.io/commands/setex"
	}, {
		"_id" : {
			"$oid" : "505785c36723782e05000025"
		},
		"name" : "SETNX",
		"params" : "key value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the value of a key, only if the key does not exist",
		"longdesc" : "Set key to hold string value if key does not exist. In that case, it is equal to SET. When key already holds a value, no operation is performed. SETNX is short for \"SET if N ot e X ists\".",
		"returnvalue" : "Integer reply, specifically:      1 if the key was set     0 if the key was not set",
		"examples" : "redis>  SETNX mykey \"Hello\"\r\n\r\n(integer) 1\r\n\r\nredis>  SETNX mykey \"World\"\r\n\r\n(integer) 0\r\n\r\nredis>  GET mykey\r\n\r\n\"Hello\"",
		"url" : "http://redis.io/commands/setnx"
	}, {
		"_id" : {
			"$oid" : "505786416723782e05000026"
		},
		"name" : "SETRANGE",
		"params" : "key offset value",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "O(1), not counting the time taken to copy the new string in place. Usually, this string is very small so the amortized complexity is O(1). Otherwise, complexity is O(M) with M being the length of the value argument.",
		"shortdesc" : "Overwrite part of a string at key starting at the specified offset",
		"longdesc" : "Overwrites part of the string stored at key, starting at the specified offset, for the entire length of value. If the offset is larger than the current length of the string at key, the string is padded with zero-bytes to make offset fit. Non-existing keys are considered as empty strings, so this command will make sure it holds a string large enough to be able to set value at offset.\r\n\r\nNote that the maximum offset that you can set is 229 -1 (536870911), as Redis Strings are limited to 512 megabytes. If you need to grow beyond this size, you can use multiple keys.\r\n\r\nWarning: When setting the last possible byte and the string value stored at key does not yet hold a string value, or holds a small string value, Redis needs to allocate all intermediate memory which can block the server for some time. On a 2010 MacBook Pro, setting byte number 536870911 (512MB allocation) takes ~300ms, setting byte number 134217728 (128MB allocation) takes ~80ms, setting bit number 33554432 (32MB allocation) takes ~30ms and setting bit number 8388608 (8MB allocation) takes ~8ms. Note that once this first allocation is done, subsequent calls to SETRANGE for the same key will not have the allocation overhead.",
		"returnvalue" : "Integer reply: the length of the string after it was modified by the command.",
		"examples" : "edis>  SET key1 \"Hello World\"\r\n\r\nOK\r\n\r\nredis>  SETRANGE key1 6 \"Redis\"\r\n\r\n(integer) 11\r\n\r\nredis>  GET key1\r\n\r\n\"Hello Redis\"",
		"url" : "http://redis.io/commands/setrange"
	}, {
		"_id" : {
			"$oid" : "505786806723782e05000027"
		},
		"name" : "STRLEN",
		"params" : "key",
		"catid" : "504ebb576723781110000003",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the length of the value stored in a key",
		"longdesc" : "Returns the length of the string value stored at key. An error is returned when key holds a non-string value.",
		"returnvalue" : "Integer reply: the length of the string at key, or 0 when key does not exist.",
		"examples" : "redis>  SET mykey \"Hello world\"\r\n\r\nOK\r\n\r\nredis>  STRLEN mykey\r\n\r\n(integer) 11\r\n\r\nredis>  STRLEN nonexisting\r\n\r\n(integer) 0",
		"url" : "http://redis.io/commands/strlen"
	}, {
		"_id" : {
			"$oid" : "5065e0596723782a02000001"
		},
		"name" : "HDEL",
		"params" : "key field [field ...]",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the number of fields to be removed.",
		"shortdesc" : "Delete one or more hash fields",
		"longdesc" : "Removes the specified fields from the hash stored at key. Specified fields that do not exist within this hash are ignored. If key does not exist, it is treated as an empty hash and this command returns 0.",
		"returnvalue" : "Integer reply: the number of fields that were removed from the hash, not including specified but non existing fields.",
		"examples" : "redis> HSET myhash field1 \"foo\"\r\n(integer) 1\r\nredis> HDEL myhash field1\r\n(integer) 1\r\nredis> HDEL myhash field2\r\n(integer) 0",
		"url" : "http://redis.io/commands/hdel"
	}, {
		"_id" : {
			"$oid" : "5065e0c76723782a02000002"
		},
		"name" : "HEXISTS",
		"params" : " key field",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Determine if a hash field exists",
		"longdesc" : "Returns if field is an existing field in the hash stored at key.",
		"returnvalue" : "Integer reply, specifically: 1 if the hash contains field. 0 if the hash does not contain field, or key does not exist.",
		"examples" : "redis> HSET myhash field1 \"foo\"\r\n(integer) 1\r\nredis> HEXISTS myhash field1\r\n(integer) 1\r\nredis> HEXISTS myhash field2\r\n(integer) 0",
		"url" : "http://redis.io/commands/hexists"
	}, {
		"_id" : {
			"$oid" : "5065e1146723782a02000003"
		},
		"name" : "HGET",
		"params" : "key field",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the value of a hash field",
		"longdesc" : "Returns the value associated with field in the hash stored at key.",
		"returnvalue" : "Bulk reply: the value associated with field, or nil when field is not present in the hash or key does not exist.",
		"examples" : "redis> HSET myhash field1 \"foo\"\r\n(integer) 1\r\nredis> HGET myhash field1\r\n\"foo\"\r\nredis> HGET myhash field2\r\n(nil)",
		"url" : "http://redis.io/commands/hget"
	}, {
		"_id" : {
			"$oid" : "5065e1f16723782a02000004"
		},
		"name" : "HGETALL",
		"params" : "key",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the size of the hash.",
		"shortdesc" : "Get all the fields and values in a hash",
		"longdesc" : "Returns all fields and values of the hash stored at key. In the returned value, every field name is followed by its value, so the length of the reply is twice the size of the hash.",
		"returnvalue" : "Multi-bulk reply: list of fields and their values stored in the hash, or an empty list when key does not exist.",
		"examples" : "redis> HSET myhash field1 \"Hello\"\r\n(integer) 1\r\nredis> HSET myhash field2 \"World\"\r\n(integer) 1\r\nredis> HGETALL myhash\r\n1) \"field1\"\r\n2) \"Hello\"\r\n3) \"field2\"\r\n4) \"World\"",
		"url" : "http://redis.io/commands/hgetall"
	}, {
		"_id" : {
			"$oid" : "5065e2536723782a02000005"
		},
		"name" : "HINCRBY ",
		"params" : "key field increment",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Increment the integer value of a hash field by the given number",
		"longdesc" : "Increments the number stored at field in the hash stored at key by increment. If key does not exist, a new key holding a hash is created. If field does not exist the value is set to 0 before the operation is performed.\r\nThe range of values supported by HINCRBY is limited to 64 bit signed integers.",
		"returnvalue" : "Integer reply: the value at field after the increment operation.",
		"examples" : "redis> HSET myhash field 5\r\n(integer) 1\r\nredis> HINCRBY myhash field 1\r\n(integer) 6\r\nredis> HINCRBY myhash field -1\r\n(integer) 5\r\nredis> HINCRBY myhash field -10\r\n(integer) -5",
		"url" : "http://redis.io/commands/hincrby"
	}, {
		"_id" : {
			"$oid" : "5065e2ab6723782a02000006"
		},
		"name" : "HINCRBYFLOAT ",
		"params" : "key field increment",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Increment the float value of a hash field by the given amount",
		"longdesc" : "Increment the specified field of an hash stored at key, and representing a floating point number, by the specified increment. If the field does not exist, it is set to 0 before performing the operation. An error is returned if one of the following conditions occur:\r\nThe field contains a value of the wrong type (not a string).\r\nThe current field content or the specified increment are not parsable as a double precision floating point number.\r\nThe exact behavior of this command is identical to the one of the INCRBYFLOAT command, please refer to the documentation of INCRBYFLOAT for further information.",
		"returnvalue" : "Bulk reply: the value of field after the increment.",
		"examples" : "redis> HSET mykey field 10.50\r\n(integer) 1\r\nredis> HINCRBYFLOAT mykey field 0.1\r\n\"10.6\"\r\nredis> HSET mykey field 5.0e3\r\n(integer) 0\r\nredis> HINCRBYFLOAT mykey field 2.0e2\r\n\"5200\"",
		"url" : "http://redis.io/commands/hincrbyfloat"
	}, {
		"_id" : {
			"$oid" : "5065e3036723782a02000007"
		},
		"name" : "HKEYS",
		"params" : "key",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the size of the hash.",
		"shortdesc" : "Get all the fields in a hash",
		"longdesc" : "Returns all field names in the hash stored at key.",
		"returnvalue" : "Multi-bulk reply: list of fields in the hash, or an empty list when key does not exist.",
		"examples" : "redis> HSET myhash field1 \"Hello\"\r\n(integer) 1\r\nredis> HSET myhash field2 \"World\"\r\n(integer) 1\r\nredis> HKEYS myhash\r\n1) \"field1\"\r\n2) \"field2\"",
		"url" : "http://redis.io/commands/hkeys"
	}, {
		"_id" : {
			"$oid" : "5065e34e6723782a02000008"
		},
		"name" : "HLEN",
		"params" : "key",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the number of fields in a hash",
		"longdesc" : "Returns the number of fields contained in the hash stored at key.",
		"returnvalue" : "Integer reply: number of fields in the hash, or 0 when key does not exist.",
		"examples" : "redis> HSET myhash field1 \"Hello\"\r\n(integer) 1\r\nredis> HSET myhash field2 \"World\"\r\n(integer) 1\r\nredis> HLEN myhash\r\n(integer) 2",
		"url" : "http://redis.io/commands/hlen"
	}, {
		"_id" : {
			"$oid" : "5065e3b16723782a02000009"
		},
		"name" : "HMGET ",
		"params" : "key field [field ...]",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the number of fields being requested.",
		"shortdesc" : "Get the values of all the given hash fields",
		"longdesc" : "Returns the values associated with the specified fields in the hash stored at key.\r\nFor every field that does not exist in the hash, a nil value is returned. Because a non-existing keys are treated as empty hashes, running HMGET against a non-existing key will return a list of nil values.",
		"returnvalue" : "Multi-bulk reply: list of values associated with the given fields, in the same order as they are requested.",
		"examples" : "redis> HSET myhash field1 \"Hello\"\r\n(integer) 1\r\nredis> HSET myhash field2 \"World\"\r\n(integer) 1\r\nredis> HMGET myhash field1 field2 nofield\r\n1) \"Hello\"\r\n2) \"World\"\r\n3) (nil)",
		"url" : "http://redis.io/commands/hmget"
	}, {
		"_id" : {
			"$oid" : "5065e41e6723782a0200000a"
		},
		"name" : "HMSET",
		"params" : "key field value [field value ...]",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the number of fields being set.",
		"shortdesc" : "Set multiple hash fields to multiple values",
		"longdesc" : "Sets the specified fields to their respective values in the hash stored at key. This command overwrites any existing fields in the hash. If key does not exist, a new key holding a hash is created.",
		"returnvalue" : "Status code reply",
		"examples" : "redis> HMSET myhash field1 \"Hello\" field2 \"World\"\r\nOK\r\nredis> HGET myhash field1\r\n\"Hello\"\r\nredis> HGET myhash field2\r\n\"World\"",
		"url" : "http://redis.io/commands/hmset"
	}, {
		"_id" : {
			"$oid" : "5065e46a6723782a0200000b"
		},
		"name" : "HSET",
		"params" : "key field value",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the string value of a hash field",
		"longdesc" : "Sets field in the hash stored at key to value. If key does not exist, a new key holding a hash is created. If field already exists in the hash, it is overwritten.\r\n",
		"returnvalue" : "Integer reply, specifically: 1 if field is a new field in the hash and value was set. 0 if field already exists in the hash and the value was updated.",
		"examples" : "redis> HSET myhash field1 \"Hello\"\r\n(integer) 1\r\nredis> HGET myhash field1\r\n\"Hello\"",
		"url" : "http://redis.io/commands/hset"
	}, {
		"_id" : {
			"$oid" : "5065e4c96723782a0200000c"
		},
		"name" : "HSETNX ",
		"params" : "key field value",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Set the value of a hash field, only if the field does not exist",
		"longdesc" : "Sets field in the hash stored at key to value, only if field does not yet exist. If key does not exist, a new key holding a hash is created. If field already exists, this operation has no effect.",
		"returnvalue" : "Integer reply, specifically: 1 if field is a new field in the hash and value was set. 0 if field already exists in the hash and no operation was performed.",
		"examples" : "redis> HSETNX myhash field \"Hello\"\r\n(integer) 1\r\nredis> HSETNX myhash field \"World\"\r\n(integer) 0\r\nredis> HGET myhash field\r\n\"Hello\"",
		"url" : "http://redis.io/commands/hsetnx"
	}, {
		"_id" : {
			"$oid" : "5065e5226723782a0200000d"
		},
		"name" : "HVALS",
		"params" : "key",
		"catid" : "504ebb576723781110000004",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the size of the hash.",
		"shortdesc" : "Get all the values in a hash",
		"longdesc" : "Returns all values in the hash stored at key.",
		"returnvalue" : "Multi-bulk reply: list of values in the hash, or an empty list when key does not exist.",
		"examples" : "redis> HSET myhash field1 \"Hello\"\r\n(integer) 1\r\nredis> HSET myhash field2 \"World\"\r\n(integer) 1\r\nredis> HVALS myhash\r\n1) \"Hello\"\r\n2) \"World\"",
		"url" : "http://redis.io/commands/hvals"
	}, {
		"_id" : {
			"$oid" : "5065ea496723782a0200000e"
		},
		"name" : "LINSERT",
		"params" : " key BEFORE|AFTER pivot value",
		"catid" : "504ebb576723781110000005",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "O(N) where N is the number of elements to traverse before seeing the value pivot. This means that inserting somewhere on the left end on the list (head) can be considered O(1) and inserting somewhere on the right end (tail) is O(N).",
		"shortdesc" : "Insert an element before or after another element in a list",
		"longdesc" : "Inserts value in the list stored at key either before or after the reference value pivot.\r\nWhen key does not exist, it is considered an empty list and no operation is performed.\r\nAn error is returned when key exists but does not hold a list value.",
		"returnvalue" : "Integer reply: the length of the list after the insert operation, or -1 when the value pivot was not found.",
		"examples" : "redis> RPUSH mylist \"Hello\"\r\n(integer) 1\r\nredis> RPUSH mylist \"World\"\r\n(integer) 2\r\nredis> LINSERT mylist BEFORE \"World\" \"There\"\r\n(integer) 3\r\nredis> LRANGE mylist 0 -1\r\n1) \"Hello\"\r\n2) \"There\"\r\n3) \"World\"",
		"url" : "http://redis.io/commands/linsert"
	}, {
		"_id" : {
			"$oid" : "5065ea956723782a0200000f"
		},
		"name" : "LLEN",
		"params" : "key",
		"catid" : "504ebb576723781110000005",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the length of a list",
		"longdesc" : "Returns the length of the list stored at key. If key does not exist, it is interpreted as an empty list and 0 is returned. An error is returned when the value stored at key is not a list.",
		"returnvalue" : "Integer reply: the length of the list at key.",
		"examples" : "redis> LPUSH mylist \"World\"\r\n(integer) 1\r\nredis> LPUSH mylist \"Hello\"\r\n(integer) 2\r\nredis> LLEN mylist\r\n(integer) 2",
		"url" : "http://redis.io/commands/llen"
	}, {
		"_id" : {
			"$oid" : "5065eaf56723782a02000010"
		},
		"name" : "LPOP",
		"params" : "key",
		"catid" : "504ebb576723781110000005",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Remove and get the first element in a list",
		"longdesc" : "Removes and returns the first element of the list stored at key.",
		"returnvalue" : "Bulk reply: the value of the first element, or nil when key does not exist.",
		"examples" : "redis> RPUSH mylist \"one\"\r\n(integer) 1\r\nredis> RPUSH mylist \"two\"\r\n(integer) 2\r\nredis> RPUSH mylist \"three\"\r\n(integer) 3\r\nredis> LPOP mylist\r\n\"one\"\r\nredis> LRANGE mylist 0 -1\r\n1) \"two\"\r\n2) \"three\"",
		"url" : "http://redis.io/commands/lpop"
	}, {
		"_id" : {
			"$oid" : "5065eb5d6723782a02000011"
		},
		"name" : "LPUSH ",
		"params" : "key value [value ...]",
		"catid" : "504ebb576723781110000005",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Prepend one or multiple values to a list",
		"longdesc" : "Insert all the specified values at the head of the list stored at key. If key does not exist, it is created as empty list before performing the push operations. When key holds a value that is not a list, an error is returned.\r\nIt is possible to push multiple elements using a single command call just specifying multiple arguments at the end of the command. Elements are inserted one after the other to the head of the list, from the leftmost element to the rightmost element. So for instance the command LPUSH mylist a b c will result into a list containing c as first element, b as second element and a as third element.",
		"returnvalue" : "Integer reply: the length of the list after the push operations.",
		"examples" : "redis> LPUSH mylist \"world\"\r\n(integer) 1\r\nredis> LPUSH mylist \"hello\"\r\n(integer) 2\r\nredis> LRANGE mylist 0 -1\r\n1) \"hello\"\r\n2) \"world\"",
		"url" : "http://redis.io/commands/lpush"
	}, {
		"_id" : {
			"$oid" : "5065ebcb6723782a02000012"
		},
		"name" : "LREM ",
		"params" : "key count value",
		"catid" : "504ebb576723781110000005",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(N) where N is the length of the list.",
		"shortdesc" : "Remove elements from a list",
		"longdesc" : "Removes the first count occurrences of elements equal to value from the list stored at key. The count argument influences the operation in the following ways:\r\ncount > 0: Remove elements equal to value moving from head to tail.\r\ncount < 0: Remove elements equal to value moving from tail to head.\r\ncount = 0: Remove all elements equal to value.\r\nFor example, LREM list -2 \"hello\" will remove the last two occurrences of \"hello\" in the list stored at list.\r\nNote that non-existing keys are treated like empty lists, so when key does not exist, the command will always return 0.",
		"returnvalue" : "Integer reply: the number of removed elements.",
		"examples" : "redis> RPUSH mylist \"hello\"\r\n(integer) 1\r\nredis> RPUSH mylist \"hello\"\r\n(integer) 2\r\nredis> RPUSH mylist \"foo\"\r\n(integer) 3\r\nredis> RPUSH mylist \"hello\"\r\n(integer) 4\r\nredis> LREM mylist -2 \"hello\"\r\n(integer) 2\r\nredis> LRANGE mylist 0 -1\r\n1) \"hello\"\r\n2) \"foo\"",
		"url" : "http://redis.io/commands/lrem"
	}, {
		"_id" : {
			"$oid" : "5065ec3e6723782a02000013"
		},
		"name" : "LSET",
		"params" : "key index value",
		"catid" : "504ebb576723781110000005",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(N) where N is the length of the list. Setting either the first or the last element of the list is O(1).",
		"shortdesc" : "Set the value of an element in a list by its index",
		"longdesc" : "Sets the list element at index to value. For more information on the index argument, see LINDEX.\r\nAn error is returned for out of range indexes.",
		"returnvalue" : "Status code reply",
		"examples" : "redis> RPUSH mylist \"one\"\r\n(integer) 1\r\nredis> RPUSH mylist \"two\"\r\n(integer) 2\r\nredis> RPUSH mylist \"three\"\r\n(integer) 3\r\nredis> LSET mylist 0 \"four\"\r\nOK\r\nredis> LSET mylist -2 \"five\"\r\nOK\r\nredis> LRANGE mylist 0 -1\r\n1) \"four\"\r\n2) \"five\"\r\n3) \"three\"",
		"url" : "http://redis.io/commands/lset"
	}, {
		"_id" : {
			"$oid" : "5065ed8d6723782a02000014"
		},
		"name" : "SADD",
		"params" : "key member [member ...]",
		"catid" : "504ebb576723781110000006",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(N) where N is the number of members to be added.",
		"shortdesc" : "Add one or more members to a set",
		"longdesc" : "Add the specified members to the set stored at key. Specified members that are already a member of this set are ignored. If key does not exist, a new set is created before adding the specified members.\r\nAn error is returned when the value stored at key is not a set.",
		"returnvalue" : "Integer reply: the number of elements that were added to the set, not including all the elements already present into the set.",
		"examples" : "redis> SADD myset \"Hello\"\r\n(integer) 1\r\nredis> SADD myset \"World\"\r\n(integer) 1\r\nredis> SADD myset \"World\"\r\n(integer) 0\r\nredis> SMEMBERS myset\r\n1) \"World\"\r\n2) \"Hello\"",
		"url" : "http://redis.io/commands/sadd"
	}, {
		"_id" : {
			"$oid" : "5065edde6723782a02000015"
		},
		"name" : "SPOP",
		"params" : "key",
		"catid" : "504ebb576723781110000006",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Remove and return a random member from a set",
		"longdesc" : "Removes and returns a random element from the set value stored at key.\r\nThis operation is similar to SRANDMEMBER, that returns a random element from a set but does not remove it.",
		"returnvalue" : "Bulk reply: the removed element, or nil when key does not exist.",
		"examples" : "redis> SADD myset \"one\"\r\n(integer) 1\r\nredis> SADD myset \"two\"\r\n(integer) 1\r\nredis> SADD myset \"three\"\r\n(integer) 1\r\nredis> SPOP myset\r\n\"three\"\r\nredis> SMEMBERS myset\r\n1) \"two\"\r\n2) \"one\"",
		"url" : "http://redis.io/commands/spop"
	}, {
		"_id" : {
			"$oid" : "5065ee4c6723782a02000016"
		},
		"name" : "SREM",
		"params" : "key member [member ...]",
		"catid" : "504ebb576723781110000006",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(N) where N is the number of members to be removed.",
		"shortdesc" : "Remove one or more members from a set",
		"longdesc" : "Remove the specified members from the set stored at key. Specified members that are not a member of this set are ignored. If key does not exist, it is treated as an empty set and this command returns 0.\r\nAn error is returned when the value stored at key is not a set.",
		"returnvalue" : "Integer reply: the number of members that were removed from the set, not including non existing members.",
		"examples" : "redis> SADD myset \"one\"\r\n(integer) 1\r\nredis> SADD myset \"two\"\r\n(integer) 1\r\nredis> SADD myset \"three\"\r\n(integer) 1\r\nredis> SREM myset \"one\"\r\n(integer) 1\r\nredis> SREM myset \"four\"\r\n(integer) 0\r\nredis> SMEMBERS myset\r\n1) \"two\"\r\n2) \"three\"",
		"url" : "http://redis.io/commands/srem"
	}, {
		"_id" : {
			"$oid" : "5065eeaa6723782a02000017"
		},
		"name" : "SCARD",
		"params" : "key",
		"catid" : "504ebb576723781110000006",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the number of members in a set",
		"longdesc" : "Returns the set cardinality (number of elements) of the set stored at key.",
		"returnvalue" : "Integer reply: the cardinality (number of elements) of the set, or 0 if key does not exist.",
		"examples" : "redis> SADD myset \"Hello\"\r\n(integer) 1\r\nredis> SADD myset \"World\"\r\n(integer) 1\r\nredis> SCARD myset\r\n(integer) 2",
		"url" : "http://redis.io/commands/scard"
	}, {
		"_id" : {
			"$oid" : "5065ef3f6723782a02000018"
		},
		"name" : "ZADD",
		"params" : "key score member [score] [member]",
		"catid" : "504ebb576723781110000007",
		"sinceversion" : "1.2.0",
		"timecomplexity" : "O(log(N)) where N is the number of elements in the sorted set.",
		"shortdesc" : "Add one or more members to a sorted set, or update its score if it already exists",
		"longdesc" : "Adds all the specified members with the specified scores to the sorted set stored at key. It is possible to specify multiple score/member pairs. If a specified member is already a member of the sorted set, the score is updated and the element reinserted at the right position to ensure the correct ordering. If key does not exist, a new sorted set with the specified members as sole members is created, like if the sorted set was empty. If the key exists but does not hold a sorted set, an error is returned.\r\nThe score values should be the string representation of a numeric value, and accepts double precision floating point numbers.\r\nFor an introduction to sorted sets, see the data types page on sorted sets.",
		"returnvalue" : "Integer reply, specifically: The number of elements added to the sorted sets, not including elements already existing for which the score was updated.",
		"examples" : "redis> ZADD myzset 1 \"one\"\r\n(integer) 1\r\nredis> ZADD myzset 1 \"uno\"\r\n(integer) 1\r\nredis> ZADD myzset 2 \"two\"\r\n(integer) 1\r\nredis> ZADD myzset 3 \"two\"\r\n(integer) 0\r\nredis> ZRANGE myzset 0 -1 WITHSCORES\r\n1) \"one\"\r\n2) \"1\"\r\n3) \"uno\"\r\n4) \"1\"\r\n5) \"two\"\r\n6) \"3\"",
		"url" : "http://redis.io/commands/zadd"
	}, {
		"_id" : {
			"$oid" : "5065ef986723782a02000019"
		},
		"name" : "ZCARD",
		"params" : "key",
		"catid" : "504ebb576723781110000007",
		"sinceversion" : "1.2.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Get the number of members in a sorted set",
		"longdesc" : "Returns the sorted set cardinality (number of elements) of the sorted set stored at key.",
		"returnvalue" : "Integer reply: the cardinality (number of elements) of the sorted set, or 0 if key does not exist.",
		"examples" : "redis> ZADD myzset 1 \"one\"\r\n(integer) 1\r\nredis> ZADD myzset 2 \"two\"\r\n(integer) 1\r\nredis> ZCARD myzset\r\n(integer) 2",
		"url" : "http://redis.io/commands/zcard"
	}, {
		"_id" : {
			"$oid" : "5065f0096723782a0200001a"
		},
		"name" : "ZCOUNT",
		"params" : "key min max",
		"catid" : "504ebb576723781110000007",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(log(N)+M) with N being the number of elements in the sorted set and M being the number of elements between min and max.",
		"shortdesc" : "Count the members in a sorted set with scores within the given values",
		"longdesc" : "Returns the number of elements in the sorted set at key with a score between min and max.\r\nThe min and max arguments have the same semantic as described for ZRANGEBYSCORE.",
		"returnvalue" : "Integer reply: the number of elements in the specified score range.",
		"examples" : "redis> ZADD myzset 1 \"one\"\r\n(integer) 1\r\nredis> ZADD myzset 2 \"two\"\r\n(integer) 1\r\nredis> ZADD myzset 3 \"three\"\r\n(integer) 1\r\nredis> ZCOUNT myzset -inf +inf\r\n(integer) 3\r\nredis> ZCOUNT myzset (1 3\r\n(integer) 2",
		"url" : "http://redis.io/commands/zcount"
	}, {
		"_id" : {
			"$oid" : "5065f0846723782a0200001b"
		},
		"name" : "ZREM",
		"params" : "key member [member ...]",
		"catid" : "504ebb576723781110000007",
		"sinceversion" : "1.2.0",
		"timecomplexity" : "O(M*log(N)) with N being the number of elements in the sorted set and M the number of elements to be removed.",
		"shortdesc" : "Remove one or more members from a sorted set",
		"longdesc" : "Removes the specified members from the sorted set stored at key. Non existing members are ignored.\r\nAn error is returned when key exists and does not hold a sorted set.",
		"returnvalue" : "Integer reply, specifically: The number of members removed from the sorted set, not including non existing members.",
		"examples" : "(integer) 1\r\nredis> ZADD myzset 2 \"two\"\r\n(integer) 1\r\nredis> ZADD myzset 3 \"three\"\r\n(integer) 1\r\nredis> ZREM myzset \"two\"\r\n(integer) 1\r\nredis> ZRANGE myzset 0 -1 WITHSCORES\r\n1) \"one\"\r\n2) \"1\"\r\n3) \"three\"\r\n4) \"3\"",
		"url" : "http://redis.io/commands/zrem"
	}, {
		"_id" : {
			"$oid" : "5065f1296723782a0200001c"
		},
		"name" : "PUBLISH",
		"params" : "channel message",
		"catid" : "504ebb576723781110000008",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N+M) where N is the number of clients subscribed to the receiving channel and M is the total number of subscribed patterns (by any client).",
		"shortdesc" : "Post a message to a channel",
		"longdesc" : "Posts a message to the given channel.",
		"returnvalue" : "Integer reply: the number of clients that received the message.",
		"examples" : "",
		"url" : "http://redis.io/commands/publish"
	}, {
		"_id" : {
			"$oid" : "5065f18f6723782a0200001d"
		},
		"name" : "SUBSCRIBE",
		"params" : "channel [channel ...]",
		"catid" : "504ebb576723781110000008",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the number of channels to subscribe to.",
		"shortdesc" : "Listen for messages published to the given channels",
		"longdesc" : "Subscribes the client to the specified channels.\r\nOnce the client enters the subscribed state it is not supposed to issue any other commands, except for additional SUBSCRIBE, PSUBSCRIBE, UNSUBSCRIBE and PUNSUBSCRIBE commands.",
		"returnvalue" : "",
		"examples" : "",
		"url" : "http://redis.io/commands/subscribe"
	}, {
		"_id" : {
			"$oid" : "5065f2316723782a0200001e"
		},
		"name" : "UNSUBSCRIBE ",
		"params" : "[channel [channel ...]]",
		"catid" : "504ebb576723781110000008",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(N) where N is the number of clients already subscribed to a channel.",
		"shortdesc" : "Stop listening for messages posted to the given channels",
		"longdesc" : "Unsubscribes the client from the given channels, or from all of them if none is given.\r\nWhen no channels are specified, the client is unsubscribed from all the previously subscribed channels. In this case, a message for every unsubscribed channel will be sent to the client.",
		"returnvalue" : "",
		"examples" : "",
		"url" : "http://redis.io/commands/unsubscribe"
	}, {
		"_id" : {
			"$oid" : "5065f39d6723782a0200001f"
		},
		"name" : "DISCARD",
		"params" : "",
		"catid" : "504ebb576723781110000009",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "",
		"shortdesc" : "Discard all commands issued after MULTI",
		"longdesc" : "Flushes all previously queued commands in a transaction and restores the connection state to normal.\r\nIf WATCH was used, DISCARD unwatches all keys.",
		"returnvalue" : "Status code reply: always OK.",
		"examples" : "",
		"url" : "http://redis.io/commands/discard"
	}, {
		"_id" : {
			"$oid" : "5065f3ea6723782a02000020"
		},
		"name" : "EXEC",
		"params" : "",
		"catid" : "504ebb576723781110000009",
		"sinceversion" : "1.2.0",
		"timecomplexity" : "",
		"shortdesc" : "Execute all commands issued after MULTI",
		"longdesc" : "Executes all previously queued commands in a transaction and restores the connection state to normal.\r\nWhen using WATCH, EXEC will execute commands only if the watched keys were not modified, allowing for a check-and-set mechanism.",
		"returnvalue" : "Multi-bulk reply: each element being the reply to each of the commands in the atomic transaction.",
		"examples" : "",
		"url" : "http://redis.io/commands/exec"
	}, {
		"_id" : {
			"$oid" : "5065f4266723782a02000021"
		},
		"name" : "MULTI",
		"params" : "",
		"catid" : "504ebb576723781110000009",
		"sinceversion" : "1.2.0",
		"timecomplexity" : "",
		"shortdesc" : "Mark the start of a transaction block",
		"longdesc" : "Marks the start of a transaction block. Subsequent commands will be queued for atomic execution using EXEC.",
		"returnvalue" : "Status code reply: always OK.",
		"examples" : "",
		"url" : "http://redis.io/commands/multi"
	}, {
		"_id" : {
			"$oid" : "5065f4ab6723782a02000022"
		},
		"name" : "EVAL",
		"params" : "script numkeys key [key ...] arg [arg ...]",
		"catid" : "504ebb57672378111000000a",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "Depends on the script that is executed.",
		"shortdesc" : "Execute a Lua script server side",
		"longdesc" : "EVAL and EVALSHA are used to evaluate scripts using the Lua interpreter built into Redis starting from version 2.6.0.\r\nThe first argument of EVAL is a Lua 5.1 script. The script does not need to define a Lua function (and should not). It is just a Lua program that will run in the context of the Redis server.\r\nThe second argument of EVAL is the number of arguments that follows the script (starting from the third argument) that represent Redis key names. This arguments can be accessed by Lua using the KEYS global variable in the form of a one-based array (so KEYS[1], KEYS[2], ...).\r\nAll the additional arguments should not represent key names and can be accessed by Lua using the ARGV global variable, very similarly to what happens with keys (so ARGV[1], ARGV[2], ...).\r\n",
		"returnvalue" : "",
		"examples" : "> eval \"return {1,2,3.3333,'foo',nil,'bar'}\" 0\r\n1) (integer) 1\r\n2) (integer) 2\r\n3) (integer) 3\r\n4) \"foo\"",
		"url" : "http://redis.io/commands/eval"
	}, {
		"_id" : {
			"$oid" : "5065ffbf6723782a02000023"
		},
		"name" : "AUTH",
		"params" : "password",
		"catid" : "504ebb57672378111000000b",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"shortdesc" : "Authenticate to the server",
		"longdesc" : "Request for authentication in a password-protected Redis server. Redis can be instructed to require a password before allowing clients to execute commands. This is done using the requirepass directive in the configuration file.\r\nIf password matches the password in the configuration file, the server replies with the OK status code and starts accepting commands. Otherwise, an error is returned and the clients needs to try a new password.\r\nNote: because of the high performance nature of Redis, it is possible to try a lot of passwords in parallel in very short time, so make sure to generate a strong and very long password so that this attack is infeasible.",
		"returnvalue" : "Status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/auth"
	}, {
		"_id" : {
			"$oid" : "506600096723782a02000024"
		},
		"name" : "ECHO",
		"params" : "password",
		"catid" : "504ebb57672378111000000b",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"shortdesc" : "Echo the given string",
		"longdesc" : "Returns message.",
		"returnvalue" : "Bulk reply",
		"examples" : "redis> ECHO \"Hello World!\"\r\n\"Hello World!\"",
		"url" : "http://redis.io/commands/echo"
	}, {
		"_id" : {
			"$oid" : "5066007e6723782a02000025"
		},
		"name" : "PING",
		"params" : "",
		"catid" : "504ebb57672378111000000b",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Ping the server",
		"longdesc" : "Returns PONG. This command is often used to test if a connection is still alive, or to measure latency.",
		"returnvalue" : "Status code reply",
		"examples" : "redis> PING\r\nPONG",
		"url" : "http://redis.io/commands/ping"
	}, {
		"_id" : {
			"$oid" : "506600ec6723782a02000026"
		},
		"name" : "QUIT",
		"params" : "",
		"catid" : "504ebb57672378111000000b",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "O(1)",
		"shortdesc" : "Close the connection",
		"longdesc" : "Ask the server to close the connection. The connection is closed as soon as all pending replies have been written to the client.",
		"returnvalue" : "Status code reply: always OK.",
		"examples" : "",
		"url" : "http://redis.io/commands/quit"
	}, {
		"_id" : {
			"$oid" : "506601446723782a02000027"
		},
		"name" : "SELECT",
		"params" : "index",
		"catid" : "504ebb57672378111000000b",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"shortdesc" : "Change the selected database for the current connection",
		"longdesc" : "Select the DB with having the specified zero-based numeric index. New connections always use DB 0.",
		"returnvalue" : "Status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/select"
	}, {
		"_id" : {
			"$oid" : "5066beae6723787702000001"
		},
		"name" : "BGREWRITEAOF",
		"params" : "",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"shortdesc" : "Asynchronously rewrite the append-only file",
		"longdesc" : "Instruct Redis to start an Append Only File rewrite process. The rewrite will create a small optimized version of the current Append Only File.\r\n\r\nIf BGREWRITEAOF fails, no data gets lost as the old AOF will be untouched.\r\n\r\nThe rewrite will be only triggered by Redis if there is not already a background process doing persistence. Specifically:\r\n\r\n    If a Redis child is creating a snapshot on disk, the AOF rewrite is scheduled but not started until the saving child producing the RDB file terminates. In this case the BGREWRITEAOF will still return an OK code, but with an appropriate message. You can check if an AOF rewrite is scheduled looking at the INFO command as of Redis 2.6.\r\n    If an AOF rewrite is already in progress the command returns an error and no AOF rewrite will be scheduled for a later time.\r\n\r\nSince Redis 2.4 the AOF rewrite is automatically triggered by Redis, however the BGREWRITEAOF command can be used to trigger a rewrite at any time.",
		"returnvalue" : "Status code reply: always OK.",
		"examples" : "",
		"url" : "http://redis.io/commands/bgrewriteaof"
	}, {
		"_id" : {
			"$oid" : "5066c0bf6723787702000002"
		},
		"name" : "BGSAVE",
		"params" : "",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"shortdesc" : "Asynchronously save the dataset to disk",
		"longdesc" : "Save the DB in background. The OK code is immediately returned. Redis forks, the parent continues to serve the clients, the child saves the DB on disk then exits. A client my be able to check if the operation succeeded using the LASTSAVE command.",
		"returnvalue" : "status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/bgsave"
	}, {
		"_id" : {
			"$oid" : "5066c1826723787702000003"
		},
		"name" : "CLIENT KILL",
		"params" : " ip:port ",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.4.0",
		"timecomplexity" : "O(N) where N is the number of client connections",
		"shortdesc" : "Kill the connection of a client",
		"longdesc" : "The CLIENT KILL command closes a given client connection identified by ip:port.\r\n\r\nThe ip:port should match a line returned by the CLIENT LIST command.\r\n\r\nDue to the single-treaded nature of Redis, it is not possible to kill a client connection while it is executing a command. From the client point of view, the connection can never be closed in the middle of the execution of a command. However, the client will notice the connection has been closed only when the next command is sent (and results in network error).",
		"returnvalue" : "Status code reply: OK if the connection exists and has been closed",
		"examples" : "",
		"url" : "http://redis.io/commands/client-kill"
	}, {
		"_id" : {
			"$oid" : "5066c1de6723787702000004"
		},
		"name" : "CLIENT LIST",
		"params" : "",
		"shortdesc" : "Get the list of client connections",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.4.0",
		"timecomplexity" : "O(N) where N is the number of client connections",
		"longdesc" : "The CLIENT LIST command returns information and statistics about the client connections server in a mostly human readable format.\r\n\r\nHere is the meaning of the fields:\r\n\r\n    addr: address/port of the client\r\n    fd: file descriptor corresponding to the socket\r\n    age: total duration of the connection in seconds\r\n    idle: idle time of the connection in seconds\r\n    flags: client flags (see below)\r\n    db: current database ID\r\n    sub: number of channel subscriptions\r\n    psub: number of pattern matching subscriptions\r\n    multi: number of commands in a MULTI/EXEC context\r\n    qbuf: query buffer length (0 means no query pending)\r\n    qbuf-free: free space of the query buffer (0 means the buffer is full)\r\n    obl: output buffer length\r\n    oll: output list length (replies are queued in this list when the buffer is full)\r\n    omem: output buffer memory usage\r\n    events: file descriptor events (see below)\r\n    cmd: last command played\r\n",
		"returnvalue" : "Bulk reply: a unique string, formatted as follows:      One client connection per line (separated by LF)     Each line is composed of a succession of property=value fields separated by a space character.",
		"examples" : "O: the client is a slave in MONITOR mode\r\nS: the client is a normal slave server\r\nM: the client is a master\r\nx: the client is in a MULTI/EXEC context\r\nb: the client is waiting in a blocking operation\r\ni: the client is waiting for a VM I/O (deprecated)\r\nd: a watched keys has been modified - EXEC will fail\r\nc: connection to be closed after writing entire reply\r\nu: the client is unblocked\r\nA: connection to be closed ASAP\r\nN: no specific flag set",
		"url" : "http://redis.io/commands/client-list"
	}, {
		"_id" : {
			"$oid" : "5066c3e96723787702000005"
		},
		"name" : "CONFIG GET",
		"params" : "parameter",
		"shortdesc" : "Get the value of a configuration parameter",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "",
		"longdesc" : "The CONFIG GET command is used to read the configuration parameters of a running Redis server. Not all the configuration parameters are supported in Redis 2.4, while Redis 2.6 can read the whole configuration of a server using this command.\r\n\r\nThe symmetric command used to alter the configuration at run time is CONFIG SET.\r\n\r\nCONFIG GET takes a single argument, which is a glob-style pattern. All the configuration parameters matching this parameter are reported as a list of key-value pairs",
		"returnvalue" : "The return type of the command is a Bulk reply.",
		"examples" : "redis> config get *max-*-entries*\r\n1) \"hash-max-zipmap-entries\"\r\n2) \"512\"\r\n3) \"list-max-ziplist-entries\"\r\n4) \"512\"\r\n5) \"set-max-intset-entries\"\r\n6) \"512\"",
		"url" : "http://redis.io/commands/config-get"
	}, {
		"_id" : {
			"$oid" : "5066c4e16723787702000006"
		},
		"name" : "CONFIG SET",
		"params" : "parameter value ",
		"shortdesc" : "Set a configuration parameter to the given value",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "",
		"longdesc" : "The CONFIG SET command is used in order to reconfigure the server at run time without the need to restart Redis. You can change both trivial parameters or switch from one to another persistence option using this command.\r\n\r\nThe list of configuration parameters supported by CONFIG SET can be obtained issuing a CONFIG GET * command, that is the symmetrical command used to obtain information about the configuration of a running Redis instance.\r\n\r\nAll the configuration parameters set using CONFIG SET are immediately loaded by Redis and will take effect starting with the next command executed.",
		"returnvalue" : "Status code reply: OK when the configuration was set properly. Otherwise an error is returned.",
		"examples" : "",
		"url" : "http://redis.io/commands/config-set"
	}, {
		"_id" : {
			"$oid" : "5066c5d96723787702000007"
		},
		"name" : "CONFIG RESETSTAT ",
		"params" : "",
		"shortdesc" : "Reset the stats returned by INFO",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.0.0",
		"timecomplexity" : "O(1)",
		"longdesc" : "Resets the statistics reported by Redis using the INFO command.\r\n\r\nThese are the counters that are reset:\r\n\r\n    Keyspace hits\r\n    Keyspace misses\r\n    Number of commands processed\r\n    Number of connections received\r\n    Number of expired keys\r\n    Number of rejected connections\r\n    Latest fork(2) time\r\n    The aof_delayed_fsync counter\r\n",
		"returnvalue" : "Status code reply: always OK.",
		"examples" : "",
		"url" : "http://redis.io/commands/config-resetstat"
	}, {
		"_id" : {
			"$oid" : "5066c61a6723787702000008"
		},
		"name" : "DBSIZE",
		"params" : "",
		"shortdesc" : "Return the number of keys in the selected database",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "Return the number of keys in the currently-selected database.",
		"returnvalue" : "Integer reply",
		"examples" : "",
		"url" : "http://redis.io/commands/dbsize"
	}, {
		"_id" : {
			"$oid" : "5066c64c6723787702000009"
		},
		"name" : "DEBUG OBJECT",
		"params" : "key",
		"shortdesc" : "Get debugging information about a key",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "DEBUG OBJECT is a debugging command that should not be used by clients. Check the OBJECT command instead.",
		"returnvalue" : "status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/debug-object"
	}, {
		"_id" : {
			"$oid" : "5066c688672378770200000a"
		},
		"name" : "DEBUG SEGFAULT",
		"params" : "",
		"shortdesc" : "Make the server crash",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "DEBUG SEGFAULT performs an invalid memory access that crashes Redis. It is used to simulate bugs during the development.",
		"returnvalue" : "status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/debug-segfault"
	}, {
		"_id" : {
			"$oid" : "5066c6c0672378770200000b"
		},
		"name" : "FLUSHALL",
		"params" : "",
		"shortdesc" : "Remove all keys from all databases",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "Delete all the keys of all the existing databases, not just the currently selected one. This command never fails.",
		"returnvalue" : "Status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/flushall"
	}, {
		"_id" : {
			"$oid" : "5066c6fa672378770200000c"
		},
		"name" : "FLUSHDB",
		"params" : "",
		"shortdesc" : "Remove all keys from the current database",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "Delete all the keys of the currently selected DB. This command never fails.",
		"returnvalue" : "status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/flushdb"
	}, {
		"_id" : {
			"$oid" : "5066c785672378770200000d"
		},
		"name" : "INFO",
		"params" : "",
		"shortdesc" : "Get information and statistics about the server",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "The INFO command returns information and statistics about the server in a format that is simple to parse by computers and easy to read by humans.\r\n\r\nThe optional parameter can be used to select a specific section of information:\r\n\r\n    server: General information about the Redis server\r\n    clients: Client connections section\r\n    memory: Memory consumption related information\r\n    persistence: RDB and AOF related information\r\n    stats: General statistics\r\n    replication: Master/slave replication information\r\n    cpu: CPU consumption statistics\r\n    commandstats: Redis command statistics\r\n    cluster: Redis Cluster section\r\n    keyspace: Database related statistics\r\n\r\nIt can also take the following values:\r\n\r\n    all: Return all sections\r\n    default: Return only the default set of sections\r\n\r\nWhen no parameter is provided, the default option is assumed.",
		"returnvalue" : "Bulk reply: as a collection of text lines.",
		"examples" : " redis>  INFO\r\n\r\n# Server\r\nredis_version:2.5.13\r\nredis_git_sha1:2812b945\r\nredis_git_dirty:0\r\nos:Linux 2.6.32.16-linode28 i686\r\narch_bits:32\r\nmultiplexing_api:epoll\r\ngcc_version:4.4.1\r\nprocess_id:11312\r\nrun_id:0f7a0a65b730893b184aade2e9b799fef28a461c\r\ntcp_port:6379\r\nuptime_in_seconds:519051\r\nuptime_in_days:6\r\nlru_clock:673564\r\n\r\n# Clients\r\nconnected_clients:8\r\nclient_longest_output_list:0\r\nclient_biggest_input_buf:0\r\nblocked_clients:0\r\n\r\n# Memory\r\nused_memory:1108088\r\nused_memory_human:1.06M\r\nused_memory_rss:2961408\r\nused_memory_peak:1489760\r\nused_memory_peak_human:1.42M\r\nused_memory_lua:20480\r\nmem_fragmentation_ratio:2.67\r\nmem_allocator:jemalloc-3.0.0\r\n\r\n# Persistence\r\nloading:0\r\nrdb_changes_since_last_save:65\r\nrdb_bgsave_in_progress:0\r\nrdb_last_save_time:1348912804\r\nrdb_last_bgsave_status:ok\r\nrdb_last_bgsave_time_sec:0\r\nrdb_current_bgsave_time_sec:-1\r\naof_enabled:0\r\naof_rewrite_in_progress:0\r\naof_rewrite_scheduled:0\r\naof_last_rewrite_time_sec:-1\r\naof_current_rewrite_time_sec:-1\r\naof_last_bgrewrite_status:ok\r\n\r\n# Stats\r\ntotal_connections_received:222\r\ntotal_commands_processed:1036739\r\ninstantaneous_ops_per_sec:0\r\nrejected_connections:0\r\nexpired_keys:1084\r\nevicted_keys:0\r\nkeyspace_hits:251472\r\nkeyspace_misses:60698\r\npubsub_channels:0\r\npubsub_patterns:0\r\nlatest_fork_usec:1777\r\n\r\n# Replication\r\nrole:master\r\nconnected_slaves:0\r\n\r\n# CPU\r\nused_cpu_sys:81.35\r\nused_cpu_user:37.66\r\nused_cpu_sys_children:7.52\r\nused_cpu_user_children:17.04\r\n\r\n# Keyspace\r\ndb0:keys=7925,expires=1\r\n\r\nredis>  ",
		"url" : "http://redis.io/commands/info"
	}, {
		"_id" : {
			"$oid" : "5066c7d1672378770200000e"
		},
		"name" : "LASTSAVE",
		"params" : "",
		"shortdesc" : "Get the UNIX time stamp of the last successful save to disk",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "Return the UNIX TIME of the last DB save executed with success. A client may check if a BGSAVE command succeeded reading the LASTSAVE value, then issuing a BGSAVE command and checking at regular intervals every N seconds if LASTSAVE changed.",
		"returnvalue" : "Integer reply: an UNIX time stamp.",
		"examples" : "",
		"url" : "http://redis.io/commands/lastsave"
	}, {
		"_id" : {
			"$oid" : "5066c812672378770200000f"
		},
		"name" : "MONITOR",
		"params" : "",
		"shortdesc" : "Listen for all requests received by the server in real time",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "MONITOR is a debugging command that streams back every command processed by the Redis server. It can help in understanding what is happening to the database. This command can both be used via redis-cli and via telnet.\r\n\r\nThe ability to see all the requests processed by the server is useful in order to spot bugs in an application both when using Redis as a database and as a distributed caching system.",
		"returnvalue" : "Non standard return value, just dumps the received commands in an infinite flow.",
		"examples" : "$ redis-cli monitor\r\n1339518083.107412 [0 127.0.0.1:60866] \"keys\" \"*\"\r\n1339518087.877697 [0 127.0.0.1:60866] \"dbsize\"\r\n1339518090.420270 [0 127.0.0.1:60866] \"set\" \"x\" \"6\"\r\n1339518096.506257 [0 127.0.0.1:60866] \"get\" \"x\"\r\n1339518099.363765 [0 127.0.0.1:60866] \"del\" \"x\"\r\n1339518100.544926 [0 127.0.0.1:60866] \"get\" \"x\"",
		"url" : "http://redis.io/commands/monitor"
	}, {
		"_id" : {
			"$oid" : "5066c87f6723787702000010"
		},
		"name" : "SAVE",
		"params" : "",
		"shortdesc" : "Synchronously save the dataset to disk",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "The SAVE commands performs a synchronous save of the dataset producing a point in time snapshot of all the data inside the Redis instance, in the form of an RDB file.\r\n\r\nYou almost never want to call SAVE in production environments where it will block all the other clients. Instead usually BGSAVE is used. However in case of issues preventing Redis to create the background saving child (for instance errors in the fork(2) system call), the SAVE command can be a good last resort to perform the dump of the latest dataset.",
		"returnvalue" : "Status code reply: The commands returns OK on success.",
		"examples" : "",
		"url" : "http://redis.io/commands/save"
	}, {
		"_id" : {
			"$oid" : "5066c8bd6723787702000011"
		},
		"name" : "SHUTDOWN",
		"params" : "[NOSAVE] [SAVE] ",
		"shortdesc" : "Synchronously save the dataset to disk and then shut down the server",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "The command behavior is the following:\r\n\r\n    Stop all the clients.\r\n    Perform a blocking SAVE if at least one save point is configured.\r\n    Flush the Append Only File if AOF is enabled.\r\n    Quit the server.\r\n\r\nIf persistence is enabled this commands makes sure that Redis is switched off without the lost of any data. This is not guaranteed if the client uses simply SAVE and then QUIT because other clients may alter the DB data between the two commands.\r\n\r\nNote: A Redis instance that is configured for not persisting on disk (no AOF configured, nor \"save\" directive) will not dump the RDB file on SHUTDOWN, as usually you don't want Redis instances used only for caching to block on when shutting down.\r\nSAVE and NOSAVE modifiers\r\n\r\nIt is possible to specify an optional modifier to alter the behavior of the command. Specifically:\r\n\r\n    SHUTDOWN SAVE will force a DB saving operation even if no save points are configured.\r\n    SHUTDOWN NOSAVE will prevent a DB saving operation even if one or more save points are configured. (You can think at this variant as an hypothetical ABORT command that just stops the server).\r\n",
		"returnvalue" : "Status code reply on error. On success nothing is returned since the server quits and the connection is closed.",
		"examples" : "",
		"url" : "http://redis.io/commands/shutdown"
	}, {
		"_id" : {
			"$oid" : "5066c9296723787702000012"
		},
		"name" : "SLAVEOF",
		"params" : "host port",
		"shortdesc" : "Make the server a slave of another instance, or promote it as master",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "The SLAVEOF command can change the replication settings of a slave on the fly. If a Redis server is already acting as slave, the command SLAVEOF NO ONE will turn off the replication, turning the Redis server into a MASTER. In the proper form SLAVEOF hostname port will make the server a slave of another server listening at the specified hostname and port.\r\n\r\nIf a server is already a slave of some master, SLAVEOF hostname port will stop the replication against the old server and start the synchronization against the new one, discarding the old dataset.\r\n\r\nThe form SLAVEOF NO ONE will stop replication, turning the server into a MASTER, but will not discard the replication. So, if the old master stops working, it is possible to turn the slave into a master and set the application to use this new master in read/write. Later when the other Redis server is fixed, it can be reconfigured to work as a slave.",
		"returnvalue" : "status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/slaveof"
	}, {
		"_id" : {
			"$oid" : "5066c9926723787702000013"
		},
		"name" : "SLOWLOG",
		"params" : "subcommand [argument] ",
		"shortdesc" : "Manages the Redis slow queries log",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.2.0",
		"timecomplexity" : "",
		"longdesc" : "The Redis Slow Log is a system to log queries that exceeded a specified execution time. The execution time does not include I/O operations like talking with the client, sending the reply and so forth, but just the time needed to actually execute the command (this is the only stage of command execution where the thread is blocked and can not serve other requests in the meantime).\r\n\r\nYou can configure the slow log with two parameters: slowlog-log-slower-than tells Redis what is the execution time, in microseconds, to exceed in order for the command to get logged. Note that a negative number disables the slow log, while a value of zero forces the logging of every command. slowlog-max-len is the length of the slow log. The minimum value is zero. When a new command is logged and the slow log is already at its maximum length, the oldest one is removed from the queue of logged commands in order to make space.\r\n\r\nThe configuration can be done by editing redis.conf or while the server is running using the CONFIG GET and CONFIG SET commands.",
		"returnvalue" : "Bulk reply: as a collection of text lines.",
		"examples" : "redis 127.0.0.1:6379> slowlog get 2\r\n1) 1) (integer) 14\r\n   2) (integer) 1309448221\r\n   3) (integer) 15\r\n   4) 1) \"ping\"\r\n2) 1) (integer) 13\r\n   2) (integer) 1309448128\r\n   3) (integer) 30\r\n   4) 1) \"slowlog\"\r\n      2) \"get\"\r\n      3) \"100\"",
		"url" : "http://redis.io/commands/slowlog"
	}, {
		"_id" : {
			"$oid" : "5066c9df6723787702000014"
		},
		"name" : "SYNC",
		"params" : "",
		"shortdesc" : "Internal command used for replication",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "1.0.0",
		"timecomplexity" : "",
		"longdesc" : "It instructs the server to create a dump file in the background, which is sent when done. In the mean time, the server accumulates all write commands in their protocol representation, which are sent after the initial dump is sent. Every write command is streamed in its protocol representation after that.",
		"returnvalue" : "status code reply",
		"examples" : "",
		"url" : "http://redis.io/commands/sync"
	}, {
		"_id" : {
			"$oid" : "5066ca1f6723787702000015"
		},
		"name" : "TIME",
		"params" : "",
		"shortdesc" : "Return the current server time",
		"catid" : "504ebb57672378111000000c",
		"sinceversion" : "2.6.0",
		"timecomplexity" : "O(1)",
		"longdesc" : "The TIME command returns the current server time as a two items lists: a Unix timestamp and the amount of microseconds already elapsed in the current second. Basically the interface is very similar to the one of the gettimeofday system call.",
		"returnvalue" : "Multi-bulk reply, specifically:  A multi bulk reply containing two elements:      unix time in seconds.     microseconds.",
		"examples" : "redis>  TIME\r\n\r\n1) \"1348913637\"\r\n2) \"957315\"\r\n\r\nredis>  TIME\r\n\r\n1) \"1348913637\"\r\n2) \"958497\"",
		"url" : "http://redis.io/commands/time"
	}]

};

/**
 *
 * MongoDB 2.0 database added.  Please make note of these credentials:

 Root User: admin
 Root Password: yQ8kJPtsMMcF
 Database Name: refs

 Connection URL: mongodb://127.6.103.129:27017/

 You can manage your new MongoDB by also embedding rockmongo-1.1
 *
 *
 * */

//not sure if i need to stringify it
//var parsed = JSON2.stringify(data);

//exports.data = data;

var NOT_FOUND = 'NOT_FOUND';

exports.NOT_FOUND = NOT_FOUND;

//getALL

exports.getAllCommands = function() {
	return data.commands;
};

exports.getBookmarkedCommands = function() {
	var tabledata = [];

	data.commands.some(function process(command) {

		if (BOOKMARKS_IDS.indexOf(command._id.$oid) > -1) {
			tabledata.push(command);

		}

	});

	return tabledata;

};



exports.isBookmarked = function(refid) {

	if (BOOKMARKS_IDS.indexOf(refid) > -1) {
		return true;
	}else{
		return false;
	}
};

exports.getAllCategories = function() {
	//TODO filter by appid
	return categories.cats;
};

exports.getCommandById = function(_id, callback) {

	//## IN order to attempt to optimze this, assume our array is ordered by id hence lets search witin shorter array

	// itearting using .some  and i can break it by returning true , forEach wont

	data.commands.some(function process(command) {
		if (command._id.$oid == _id) {

			callback(command);
			return true;

		}
	});

	//TODO return NOT_FOUND;

};

var DATABASE_NAME = 'reference_store';

exports.createDb = function() {
	Ti.Database.install('todo.sqlite', DATABASE_NAME);
};

exports.selectItems = function(_done) {
	var retData = [];
	var db = Ti.Database.open(DATABASE_NAME);
	var rows = db.execute('select ROWID, * from todo where done = ?', _done);
	while (rows.isValidRow()) {
		retData.push({
			item : rows.fieldByName('item'),
			id : rows.fieldByName('ROWID')
		});
		rows.next();
	}
	db.close();
	return retData;
};

exports.updateItem = function(_id, _done) {
	var mydb = Ti.Database.open(DATABASE_NAME);
	mydb.execute('update todo set done = ? where ROWID = ?', _done, _id);
	var rows = mydb.execute('select * from todo where done = ?', _done);
	mydb.close();
	return rows;
};

exports.addItem = function(_item) {
	var mydb = Ti.Database.open(DATABASE_NAME);
	mydb.execute('insert into todo values (?,?)', _item, 0);
	mydb.close();
};

exports.deleteItem = function(_id) {
	var mydb = Ti.Database.open(DATABASE_NAME);
	mydb.execute('delete from todo where ROWID = ?', _id);
	mydb.close();
};
