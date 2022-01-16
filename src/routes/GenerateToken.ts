import { Request, ResponseToolkit } from "@hapi/hapi";
const Jwt = require('@hapi/jwt');

const {SHARED_KEY} = require('../config'); 

const token = Jwt.token.generate({
    aud: 'urn:audience:test',
    iss: 'urn:issuer:test',
    user: 'admin',
    group: 'customerservice'
},
{
    key: SHARED_KEY,
    algorithm: 'HS512'
},
{
    ttlSec: 14400 // 4 hours
});
   
const GenerateToken = {
    method: 'GET',
    path: '/',
    handler: (request:Request,h:ResponseToolkit):string => {
        return token;
    },
    options:{
        auth:false
    }
};

export default GenerateToken;