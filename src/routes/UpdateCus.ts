import { Request, ResponseToolkit } from "@hapi/hapi";

const UpdateCus = {
    method: 'PATCH',
    path: '/customer/{id}',
    handler: (request:Request,h:ResponseToolkit):string => {
        return "Customer Details Update";
    }
};

export default UpdateCus;