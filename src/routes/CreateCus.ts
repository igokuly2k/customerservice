import { Request, ResponseToolkit } from "@hapi/hapi";

const CreateCus = {
    method: 'POST',
    path: '/customer',
    handler: (request:Request,h:ResponseToolkit):string => {
        return "New Customer Created";
    }
};

export default CreateCus;
