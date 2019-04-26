import {APIGatewayEvent, Context} from 'aws-lambda';
import {Client} from "../models/Client";
import {IClient} from "../interfaces/IClient";
import {Item} from "dynogels";

const response = {
    statusCode: 200
};

export const handler = (event: APIGatewayEvent, context: Context) => {
    if (!event.requestContext.connectionId) {
        throw Error('No connection id');
    }

    const client: IClient = {
        connectionId: event.requestContext.connectionId,
    };

    Client.create(client, (err: Error, data: Item) => {
        if (err) {
            throw err;
        }

        context.succeed(response);
    });
};
