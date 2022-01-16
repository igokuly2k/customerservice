import { Request, ResponseToolkit } from "@hapi/hapi";
const repo = require('../database').default;

const DeleteCus = {
    method: 'DELETE',
    path: '/customer/{id}',
    handler: async (request:Request,h:ResponseToolkit) => {
        const l = await repo;
        const user = await l.find({"customer_id":request.params.id});
        await l.remove(user);
        return "User Removed";
    }
};

export default DeleteCus;