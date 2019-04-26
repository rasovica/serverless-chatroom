import * as dynogels from 'dynogels';
import * as Joi from 'joi';

export const Client = dynogels.define('Account', {
    hashKey : 'connectionId',
    timestamps : true,

    schema : {
        connectionId: Joi.string().uuid(),
    }
});