import { Request, ResponseToolkit } from "@hapi/hapi";

const DeleteCus = {
    method: 'DELETE',
    path: '/customer/{id}',
    handler: (request:Request,h:ResponseToolkit):string => {
        return "Deleted Customer Account "+request.params.id;
    }
};

export default DeleteCus;