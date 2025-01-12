/* tslint:disable */
/* eslint-disable */
/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/

import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
import { Configuration } from '../configuration';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction, isBrowser } from '../common';
import { fromBuffer } from "file-type/browser"
const FormData = require("form-data")
import { setOAuthToObject } from '../common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from '../base';
// @ts-ignore
import { BadRequestResponse } from '../models';
// @ts-ignore
import { ListPayslipsResponse } from '../models';
// @ts-ignore
import { NotFoundResponse } from '../models';
// @ts-ignore
import { PayslipResponse } from '../models';
// @ts-ignore
import { TooManyRequestsResponse } from '../models';
// @ts-ignore
import { UnauthorizedResponse } from '../models';
// @ts-ignore
import { UnprocessableEntityResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * PayslipsApi - axios parameter creator
 * @export
 */
export const PayslipsApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Given a Payslip ID, downloads a payslip. It is important to note that each country has a different payslip format and they are not authored by Remote. 
         * @summary Download payslip in the PDF format
         * @param {string} payslipId Payslip ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadPdf: async (payslipId: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'payslipId' is not null or undefined
            assertParamExists('downloadPdf', 'payslipId', payslipId)
            const localVarPath = `/v1/payslips/{payslip_id}/pdf`
                .replace(`{${"payslip_id"}}`, encodeURIComponent(String(payslipId !== undefined ? payslipId : `-payslip_id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payslips/{payslip_id}/pdf',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all payslips belonging to a company. Can also filter for a single employment belonging to that company. 
         * @summary List payslips
         * @param {string} [employmentId] Employment ID
         * @param {string} [startDate] Filters by payslips &#x60;issued_at&#x60; field, after or on the same day than the given date
         * @param {string} [endDate] Filters by payslips &#x60;issued_at&#x60; field, before or or the same day than the given date
         * @param {string} [expectedPayoutStartDate] Filters by payslips &#x60;expected_payout_date&#x60; field, after or on the same day than the given date
         * @param {string} [expectedPayoutEndDate] Filters by payslips &#x60;expected_payout_date&#x60; field, before or or the same day than the given date
         * @param {number} [page] Starts fetching records after the given page
         * @param {number} [pageSize] Change the amount of records returned per page, defaults to 20, limited to 100
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll: async (employmentId?: string, startDate?: string, endDate?: string, expectedPayoutStartDate?: string, expectedPayoutEndDate?: string, page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/payslips`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            if (employmentId !== undefined) {
                localVarQueryParameter['employment_id'] = employmentId;
            }

            if (startDate !== undefined) {
                localVarQueryParameter['start_date'] = startDate;
            }

            if (endDate !== undefined) {
                localVarQueryParameter['end_date'] = endDate;
            }

            if (expectedPayoutStartDate !== undefined) {
                localVarQueryParameter['expected_payout_start_date'] = expectedPayoutStartDate;
            }

            if (expectedPayoutEndDate !== undefined) {
                localVarQueryParameter['expected_payout_end_date'] = expectedPayoutEndDate;
            }

            if (page !== undefined) {
                localVarQueryParameter['page'] = page;
            }

            if (pageSize !== undefined) {
                localVarQueryParameter['page_size'] = pageSize;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payslips',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Given an ID, shows a payslip.  Please contact api-support@remote.com to request access to this endpoint. 
         * @summary Show payslip
         * @param {string} id Payslip ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showPayslip: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('showPayslip', 'id', id)
            const localVarPath = `/v1/payslips/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/payslips/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * PayslipsApi - functional programming interface
 * @export
 */
export const PayslipsApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = PayslipsApiAxiosParamCreator(configuration)
    return {
        /**
         * Given a Payslip ID, downloads a payslip. It is important to note that each country has a different payslip format and they are not authored by Remote. 
         * @summary Download payslip in the PDF format
         * @param {PayslipsApiDownloadPdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async downloadPdf(requestParameters: PayslipsApiDownloadPdfRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Uint8Array | File | buffer.File>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.downloadPdf(requestParameters.payslipId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all payslips belonging to a company. Can also filter for a single employment belonging to that company. 
         * @summary List payslips
         * @param {PayslipsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAll(requestParameters: PayslipsApiListAllRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListPayslipsResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAll(requestParameters.employmentId, requestParameters.startDate, requestParameters.endDate, requestParameters.expectedPayoutStartDate, requestParameters.expectedPayoutEndDate, requestParameters.page, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Given an ID, shows a payslip.  Please contact api-support@remote.com to request access to this endpoint. 
         * @summary Show payslip
         * @param {PayslipsApiShowPayslipRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showPayslip(requestParameters: PayslipsApiShowPayslipRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<PayslipResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showPayslip(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * PayslipsApi - factory interface
 * @export
 */
export const PayslipsApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = PayslipsApiFp(configuration)
    return {
        /**
         * Given a Payslip ID, downloads a payslip. It is important to note that each country has a different payslip format and they are not authored by Remote. 
         * @summary Download payslip in the PDF format
         * @param {PayslipsApiDownloadPdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        downloadPdf(requestParameters: PayslipsApiDownloadPdfRequest, options?: AxiosRequestConfig): AxiosPromise<Uint8Array | File | buffer.File> {
            return localVarFp.downloadPdf(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all payslips belonging to a company. Can also filter for a single employment belonging to that company. 
         * @summary List payslips
         * @param {PayslipsApiListAllRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAll(requestParameters: PayslipsApiListAllRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ListPayslipsResponse> {
            return localVarFp.listAll(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Given an ID, shows a payslip.  Please contact api-support@remote.com to request access to this endpoint. 
         * @summary Show payslip
         * @param {PayslipsApiShowPayslipRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showPayslip(requestParameters: PayslipsApiShowPayslipRequest, options?: AxiosRequestConfig): AxiosPromise<PayslipResponse> {
            return localVarFp.showPayslip(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for downloadPdf operation in PayslipsApi.
 * @export
 * @interface PayslipsApiDownloadPdfRequest
 */
export type PayslipsApiDownloadPdfRequest = {
    
    /**
    * Payslip ID
    * @type {string}
    * @memberof PayslipsApiDownloadPdf
    */
    readonly payslipId: string
    
}

/**
 * Request parameters for listAll operation in PayslipsApi.
 * @export
 * @interface PayslipsApiListAllRequest
 */
export type PayslipsApiListAllRequest = {
    
    /**
    * Employment ID
    * @type {string}
    * @memberof PayslipsApiListAll
    */
    readonly employmentId?: string
    
    /**
    * Filters by payslips `issued_at` field, after or on the same day than the given date
    * @type {string}
    * @memberof PayslipsApiListAll
    */
    readonly startDate?: string
    
    /**
    * Filters by payslips `issued_at` field, before or or the same day than the given date
    * @type {string}
    * @memberof PayslipsApiListAll
    */
    readonly endDate?: string
    
    /**
    * Filters by payslips `expected_payout_date` field, after or on the same day than the given date
    * @type {string}
    * @memberof PayslipsApiListAll
    */
    readonly expectedPayoutStartDate?: string
    
    /**
    * Filters by payslips `expected_payout_date` field, before or or the same day than the given date
    * @type {string}
    * @memberof PayslipsApiListAll
    */
    readonly expectedPayoutEndDate?: string
    
    /**
    * Starts fetching records after the given page
    * @type {number}
    * @memberof PayslipsApiListAll
    */
    readonly page?: number
    
    /**
    * Change the amount of records returned per page, defaults to 20, limited to 100
    * @type {number}
    * @memberof PayslipsApiListAll
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for showPayslip operation in PayslipsApi.
 * @export
 * @interface PayslipsApiShowPayslipRequest
 */
export type PayslipsApiShowPayslipRequest = {
    
    /**
    * Payslip ID
    * @type {string}
    * @memberof PayslipsApiShowPayslip
    */
    readonly id: string
    
}

/**
 * PayslipsApiGenerated - object-oriented interface
 * @export
 * @class PayslipsApiGenerated
 * @extends {BaseAPI}
 */
export class PayslipsApiGenerated extends BaseAPI {
    /**
     * Given a Payslip ID, downloads a payslip. It is important to note that each country has a different payslip format and they are not authored by Remote. 
     * @summary Download payslip in the PDF format
     * @param {PayslipsApiDownloadPdfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayslipsApiGenerated
     */
    public downloadPdf(requestParameters: PayslipsApiDownloadPdfRequest, options?: AxiosRequestConfig) {
        return PayslipsApiFp(this.configuration).downloadPdf(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all payslips belonging to a company. Can also filter for a single employment belonging to that company. 
     * @summary List payslips
     * @param {PayslipsApiListAllRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayslipsApiGenerated
     */
    public listAll(requestParameters: PayslipsApiListAllRequest = {}, options?: AxiosRequestConfig) {
        return PayslipsApiFp(this.configuration).listAll(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Given an ID, shows a payslip.  Please contact api-support@remote.com to request access to this endpoint. 
     * @summary Show payslip
     * @param {PayslipsApiShowPayslipRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof PayslipsApiGenerated
     */
    public showPayslip(requestParameters: PayslipsApiShowPayslipRequest, options?: AxiosRequestConfig) {
        return PayslipsApiFp(this.configuration).showPayslip(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
