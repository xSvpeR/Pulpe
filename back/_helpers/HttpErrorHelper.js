'use strict';

const HTTP_CODE = require('./HTTP_CODE.json');
const AlreadyExistError = require('../_model/Errors').AlreadyExistError;
const TechnicalError = require('../_model/Errors').TechnicalError;

class HttpErrorHelper {
    constructor() {
    }

    /**
     * @function buildHttpErrorBy
     * @desc Build an object representing an standard http error
     * @param {{code: number, status: string, message: string}} httpError
     * @param {Error} Error object to get the name and build standard http error
     * @param {string} messageCustom Message overwrite the error and httpError message
     */
    static buildHttpErrorBy(httpError, error, messageCustom) {
        const httpErrorResponse = (!httpError) ? HTTP_CODE.INTERNAL_ERROR_SERVER : httpError;
        if (error) {
            httpErrorResponse.message = error.message;
        }
        if (messageCustom) {
            httpErrorResponse.message = messageCustom;
        }
        return httpErrorResponse;
    }

    static buildHttpErrorByError(error) {
        let httpErrorResponse = HTTP_CODE.INTERNAL_ERROR_SERVER;
        if (error) {
            if (error instanceof AlreadyExistError) {
                httpErrorResponse = HTTP_CODE.CONFLICT;
            }
            if (error instanceof TechnicalError) {
                httpErrorResponse = HTTP_CODE.INTERNAL_ERROR_SERVER;
            }
            httpErrorResponse.message = error.message;
        }
        return httpErrorResponse;
    }
}

module.exports = HttpErrorHelper;