'use strict';

import { Request, ResponseToolkit } from "@hapi/hapi";

const Hapi = require('@hapi/hapi');


const init = async () => {

    const server = Hapi.server({
        port: 12000,
        host: 'localhost'
    });

    server.route({
        method: 'POST',
        path: '/customer',
        handler: (request:Request,h:ResponseToolkit):string => {
            console.log(request.payload);
            return "New Customer Created";
        }
    });

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();