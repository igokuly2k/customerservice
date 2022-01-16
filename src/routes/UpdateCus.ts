import { Request, ResponseToolkit } from "@hapi/hapi";
const repo = require('../database').default;

const UpdateCus = {
    method: 'PATCH',
    path: '/customer/{id}',
    handler: async (request:Request,h:ResponseToolkit) => {
        const l =await repo;
        await l.update({customer_id:request.params.id},request.payload);
        return "Customer Details Update";
    }
};

export default UpdateCus;