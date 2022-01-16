import { Request, ResponseToolkit } from "@hapi/hapi";
const repo = require('../database').default;

const CreateCus = {
    method: 'GET',
    path: '/customer/{id}',
    handler: async (request:Request,h:ResponseToolkit) => {
        const l = await repo;
        return await l.find({customer_id: request.params.id});
    }
};

export default CreateCus;