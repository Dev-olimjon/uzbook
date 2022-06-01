"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const pg_1 = require("pg");
//postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName
// string
let url = 'postgres://postgres:12345@127.0.0.1:5432/uzbook';
let client = new pg_1.Pool({
    connectionString: url
});
client.connect((err) => {
    console.log(err ? err : 'Database `uzbook` is connected.');
});
exports.default = client;
