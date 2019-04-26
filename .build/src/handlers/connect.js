"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client_1 = require("../models/Client");
const response = {
    statusCode: 200
};
exports.handler = (event, context) => {
    if (!event.requestContext.connectionId) {
        throw Error('No connection id');
    }
    const client = {
        connectionId: event.requestContext.connectionId,
    };
    Client_1.Client.create(client, (err, data) => {
        if (err) {
            throw err;
        }
        context.succeed(response);
    });
};
