import { Request, ResponseToolkit } from "@hapi/hapi";

const CreateCus = {
    method: 'GET',
    path: '/customer',
    handler: (request:Request,h:ResponseToolkit):string => {
        return "All Customers Fetched";
    }
};

export default CreateCus;