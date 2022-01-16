'use strict';

const CreateCus = require('./routes/CreateCus').default;
const DeleteCus = require('./routes/DeleteCus').default;
const UpdateCus = require('./routes/UpdateCus').default;
const FetchCus = require('./routes/FetchCus').default;
const FetchAllCus = require('./routes/FetchAllCus').default;
const GenerateToken = require('./routes/GenerateToken').default;
const {SHARED_KEY} = require('./config'); 

const Hapi = require('@hapi/hapi');
const Jwt = require('@hapi/jwt');
import { ResponseToolkit } from "@hapi/hapi";


const init = async () => {

    const server = Hapi.server({
        port: 12000,
        host: 'localhost'
    });
    await server.register(Jwt);
    server.auth.strategy('my_jwt_strategy', 'jwt', {
        keys: process.env.SHARED_KEY,
        verify: {
        aud: 'urn:audience:test',
        iss: 'urn:issuer:test',
        sub: false,
        nbf: true,
        exp: true,
        maxAgeSec: 14400, // 4 hours
        timeSkewSec: 15
    },
    validate: (artifacts:any, request:Request, h:ResponseToolkit) => {
        return { isValid: true, credentials: { user: artifacts.decoded.payload.user }};}
    });
    server.auth.default('my_jwt_strategy');
    server.route([CreateCus,DeleteCus,UpdateCus,FetchAllCus,FetchCus,GenerateToken]);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});

init();