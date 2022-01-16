import { createConnection } from "typeorm";
import { Customer } from "./entity/Customer";

const connection = createConnection({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "root",
    database: "postgres",
    schema:"public",
    entities: [
        Customer
    ],
    synchronize: true,
});
export default connection.then(async conn=> {return await conn.getRepository("Customer")});