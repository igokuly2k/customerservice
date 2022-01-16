import { Request, ResponseToolkit } from "@hapi/hapi";

const CreateCus = {
    method: 'GET',
    path: '/customer/{id}',
    handler: (request:Request,h:ResponseToolkit):string => {
        return "Customer Fetched";
    }
};

export default CreateCus;