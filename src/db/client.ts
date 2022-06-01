import {Pool} from "pg";
//postgres://YourUserName:YourPassword@YourHostname:5432/YourDatabaseName

// string
let url = 'postgres://postgres:12345@127.0.0.1:5432/uzbook'

let client = new Pool({
    connectionString: url
})

client.connect((err) => {
    console.log(err ? err : 'Database `uzbook` is connected.');
})

export default client