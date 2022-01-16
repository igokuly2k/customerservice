import { Request, ResponseToolkit } from "@hapi/hapi";
import { Customer } from "../entity/Customer";
const repo = require('../database').default;

const CreateCus = {
    method: 'POST',
    path: '/customer',
    handler: async (request:any,h:ResponseToolkit) => {
        const cus = new Customer();
        cus.name = request.payload.name;
        cus.age = request.payload.age;
        cus.location_id = request.payload.location_id;
        const l = await repo;
        await l.save(cus);
        return "New Customer Created";
    }
};

export default CreateCus;
