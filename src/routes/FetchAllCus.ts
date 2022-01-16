import { Request, ResponseToolkit } from "@hapi/hapi";
const repo = require('../database').default;

const CreateCus = {
    method: 'GET',
    path: '/customer',
    handler: async (request:Request,h:ResponseToolkit) => {
        const l = await repo;
        return l.find();
    }
};

export default CreateCus;