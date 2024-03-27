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
import { CreateApprovedTimeoffParams } from '../models';
// @ts-ignore
import { ListTimeoffResponse } from '../models';
// @ts-ignore
import { ListTimeoffTypesResponse } from '../models';
// @ts-ignore
import { NotFoundResponse } from '../models';
// @ts-ignore
import { TimeoffDaysParams } from '../models';
// @ts-ignore
import { TimeoffDocumentParams } from '../models';
// @ts-ignore
import { TimeoffResponse } from '../models';
// @ts-ignore
import { TimeoffStatus } from '../models';
// @ts-ignore
import { TimeoffType } from '../models';
// @ts-ignore
import { TooManyRequestsResponse } from '../models';
// @ts-ignore
import { UnauthorizedResponse } from '../models';
// @ts-ignore
import { UnprocessableEntityResponse } from '../models';
// @ts-ignore
import { UpdateApprovedTimeoffParams } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * TimeOffApi - axios parameter creator
 * @export
 */
export const TimeOffApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Shows a single Time Off record
         * @summary Show Time Off
         * @param {string} id Timeoff ID
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecord: async (id: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('getRecord', 'id', id)
            const localVarPath = `/v1/timeoff/{id}`
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
                pathTemplate: '/v1/timeoff/{id}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all Time Off records.
         * @summary List Time Off
         * @param {string} [employmentId] Only show time off for a specific employment
         * @param {TimeoffType} [timeoffType] Filter time off by its type
         * @param {TimeoffStatus} [status] Filter time off by its status
         * @param {'asc' | 'desc'} [order] Sort order
         * @param {'timeoff_type' | 'status'} [sortBy] Field to sort by
         * @param {number} [page] Starts fetching records after the given page
         * @param {number} [pageSize] Number of items per page
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRecords: async (employmentId?: string, timeoffType?: TimeoffType, status?: TimeoffStatus, order?: 'asc' | 'desc', sortBy?: 'timeoff_type' | 'status', page?: number, pageSize?: number, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/timeoff`;
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

            if (timeoffType !== undefined) {
                localVarQueryParameter['timeoff_type'] = timeoffType;
            }

            if (status !== undefined) {
                localVarQueryParameter['status'] = status;
            }

            if (order !== undefined) {
                localVarQueryParameter['order'] = order;
            }

            if (sortBy !== undefined) {
                localVarQueryParameter['sort_by'] = sortBy;
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
                pathTemplate: '/v1/timeoff',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists all time off types that can be used for the `timeoff_type` parameter
         * @summary List Time Off Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTypes: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/timeoff/types`;
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
                pathTemplate: '/v1/timeoff/types',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Creates a Time Off record
         * @summary Create Time Off
         * @param {CreateApprovedTimeoffParams} createApprovedTimeoffParams Timeoff
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordCreate: async (createApprovedTimeoffParams: CreateApprovedTimeoffParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'createApprovedTimeoffParams' is not null or undefined
            assertParamExists('recordCreate', 'createApprovedTimeoffParams', createApprovedTimeoffParams)
            const localVarPath = `/v1/timeoff`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: createApprovedTimeoffParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/timeoff',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(createApprovedTimeoffParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
         * @summary Update Time Off
         * @param {string} id Timeoff ID
         * @param {UpdateApprovedTimeoffParams} updateApprovedTimeoffParams UpdateTimeoff
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecord: async (id: string, updateApprovedTimeoffParams: UpdateApprovedTimeoffParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRecord', 'id', id)
            // verify required parameter 'updateApprovedTimeoffParams' is not null or undefined
            assertParamExists('updateRecord', 'updateApprovedTimeoffParams', updateApprovedTimeoffParams)
            const localVarPath = `/v1/timeoff/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PUT', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateApprovedTimeoffParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/timeoff/{id}',
                httpMethod: 'PUT'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateApprovedTimeoffParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
         * @summary Update Time Off
         * @param {string} id Timeoff ID
         * @param {UpdateApprovedTimeoffParams} updateApprovedTimeoffParams UpdateTimeoff
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecord_1: async (id: string, updateApprovedTimeoffParams: UpdateApprovedTimeoffParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'id' is not null or undefined
            assertParamExists('updateRecord_1', 'id', id)
            // verify required parameter 'updateApprovedTimeoffParams' is not null or undefined
            assertParamExists('updateRecord_1', 'updateApprovedTimeoffParams', updateApprovedTimeoffParams)
            const localVarPath = `/v1/timeoff/{id}`
                .replace(`{${"id"}}`, encodeURIComponent(String(id !== undefined ? id : `-id-`)));
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions: AxiosRequestConfig = { method: 'PATCH', ...baseOptions, ...options};
            const localVarHeaderParameter = configuration && !isBrowser() ? { "User-Agent": configuration.userAgent } : {} as any;
            const localVarQueryParameter = {} as any;

            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)
            // authentication OAuth2 required
            // oauth required
            await setOAuthToObject(localVarHeaderParameter, "OAuth2", [], configuration)

    
            localVarHeaderParameter['Content-Type'] = 'application/json';


            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                requestBody: updateApprovedTimeoffParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/timeoff/{id}',
                httpMethod: 'PATCH'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(updateApprovedTimeoffParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * TimeOffApi - functional programming interface
 * @export
 */
export const TimeOffApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = TimeOffApiAxiosParamCreator(configuration)
    return {
        /**
         * Shows a single Time Off record
         * @summary Show Time Off
         * @param {TimeOffApiGetRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getRecord(requestParameters: TimeOffApiGetRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeoffResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getRecord(requestParameters.id, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all Time Off records.
         * @summary List Time Off
         * @param {TimeOffApiListRecordsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listRecords(requestParameters: TimeOffApiListRecordsRequest = {}, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTimeoffResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listRecords(requestParameters.employmentId, requestParameters.timeoffType, requestParameters.status, requestParameters.order, requestParameters.sortBy, requestParameters.page, requestParameters.pageSize, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists all time off types that can be used for the `timeoff_type` parameter
         * @summary List Time Off Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listTypes(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<ListTimeoffTypesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listTypes(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Creates a Time Off record
         * @summary Create Time Off
         * @param {TimeOffApiRecordCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async recordCreate(requestParameters: TimeOffApiRecordCreateRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeoffResponse>> {
            const createApprovedTimeoffParams: CreateApprovedTimeoffParams = {
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.recordCreate(createApprovedTimeoffParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
         * @summary Update Time Off
         * @param {TimeOffApiUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRecord(requestParameters: TimeOffApiUpdateRecordRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeoffResponse>> {
            const updateApprovedTimeoffParams: UpdateApprovedTimeoffParams = {
                approved_at: requestParameters.approved_at,
                approver_id: requestParameters.approver_id,
                cancel_reason: requestParameters.cancel_reason,
                document: requestParameters.document,
                edit_reason: requestParameters.edit_reason,
                end_date: requestParameters.end_date,
                notes: requestParameters.notes,
                start_date: requestParameters.start_date,
                status: requestParameters.status,
                timeoff_days: requestParameters.timeoff_days,
                timeoff_type: requestParameters.timeoff_type,
                timezone: requestParameters.timezone
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecord(requestParameters.id, updateApprovedTimeoffParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
         * @summary Update Time Off
         * @param {TimeOffApiUpdateRecord0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async updateRecord_1(requestParameters: TimeOffApiUpdateRecord0Request, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<TimeoffResponse>> {
            const updateApprovedTimeoffParams: UpdateApprovedTimeoffParams = {
                approved_at: requestParameters.approved_at,
                approver_id: requestParameters.approver_id,
                cancel_reason: requestParameters.cancel_reason,
                document: requestParameters.document,
                edit_reason: requestParameters.edit_reason,
                end_date: requestParameters.end_date,
                notes: requestParameters.notes,
                start_date: requestParameters.start_date,
                status: requestParameters.status,
                timeoff_days: requestParameters.timeoff_days,
                timeoff_type: requestParameters.timeoff_type,
                timezone: requestParameters.timezone
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.updateRecord_1(requestParameters.id, updateApprovedTimeoffParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * TimeOffApi - factory interface
 * @export
 */
export const TimeOffApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = TimeOffApiFp(configuration)
    return {
        /**
         * Shows a single Time Off record
         * @summary Show Time Off
         * @param {TimeOffApiGetRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getRecord(requestParameters: TimeOffApiGetRecordRequest, options?: AxiosRequestConfig): AxiosPromise<TimeoffResponse> {
            return localVarFp.getRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all Time Off records.
         * @summary List Time Off
         * @param {TimeOffApiListRecordsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listRecords(requestParameters: TimeOffApiListRecordsRequest = {}, options?: AxiosRequestConfig): AxiosPromise<ListTimeoffResponse> {
            return localVarFp.listRecords(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists all time off types that can be used for the `timeoff_type` parameter
         * @summary List Time Off Types
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listTypes(options?: AxiosRequestConfig): AxiosPromise<ListTimeoffTypesResponse> {
            return localVarFp.listTypes(options).then((request) => request(axios, basePath));
        },
        /**
         * Creates a Time Off record
         * @summary Create Time Off
         * @param {TimeOffApiRecordCreateRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        recordCreate(requestParameters: TimeOffApiRecordCreateRequest, options?: AxiosRequestConfig): AxiosPromise<TimeoffResponse> {
            return localVarFp.recordCreate(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
         * @summary Update Time Off
         * @param {TimeOffApiUpdateRecordRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecord(requestParameters: TimeOffApiUpdateRecordRequest, options?: AxiosRequestConfig): AxiosPromise<TimeoffResponse> {
            return localVarFp.updateRecord(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
         * @summary Update Time Off
         * @param {TimeOffApiUpdateRecord0Request} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        updateRecord_1(requestParameters: TimeOffApiUpdateRecord0Request, options?: AxiosRequestConfig): AxiosPromise<TimeoffResponse> {
            return localVarFp.updateRecord_1(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getRecord operation in TimeOffApi.
 * @export
 * @interface TimeOffApiGetRecordRequest
 */
export type TimeOffApiGetRecordRequest = {
    
    /**
    * Timeoff ID
    * @type {string}
    * @memberof TimeOffApiGetRecord
    */
    readonly id: string
    
}

/**
 * Request parameters for listRecords operation in TimeOffApi.
 * @export
 * @interface TimeOffApiListRecordsRequest
 */
export type TimeOffApiListRecordsRequest = {
    
    /**
    * Only show time off for a specific employment
    * @type {string}
    * @memberof TimeOffApiListRecords
    */
    readonly employmentId?: string
    
    /**
    * Filter time off by its type
    * @type {TimeoffType}
    * @memberof TimeOffApiListRecords
    */
    readonly timeoffType?: TimeoffType
    
    /**
    * Filter time off by its status
    * @type {TimeoffStatus}
    * @memberof TimeOffApiListRecords
    */
    readonly status?: TimeoffStatus
    
    /**
    * Sort order
    * @type {'asc' | 'desc'}
    * @memberof TimeOffApiListRecords
    */
    readonly order?: 'asc' | 'desc'
    
    /**
    * Field to sort by
    * @type {'timeoff_type' | 'status'}
    * @memberof TimeOffApiListRecords
    */
    readonly sortBy?: 'timeoff_type' | 'status'
    
    /**
    * Starts fetching records after the given page
    * @type {number}
    * @memberof TimeOffApiListRecords
    */
    readonly page?: number
    
    /**
    * Number of items per page
    * @type {number}
    * @memberof TimeOffApiListRecords
    */
    readonly pageSize?: number
    
}

/**
 * Request parameters for recordCreate operation in TimeOffApi.
 * @export
 * @interface TimeOffApiRecordCreateRequest
 */
export type TimeOffApiRecordCreateRequest = {
    
} & CreateApprovedTimeoffParams

/**
 * Request parameters for updateRecord operation in TimeOffApi.
 * @export
 * @interface TimeOffApiUpdateRecordRequest
 */
export type TimeOffApiUpdateRecordRequest = {
    
    /**
    * Timeoff ID
    * @type {string}
    * @memberof TimeOffApiUpdateRecord
    */
    readonly id: string
    
} & UpdateApprovedTimeoffParams

/**
 * Request parameters for updateRecord_1 operation in TimeOffApi.
 * @export
 * @interface TimeOffApiUpdateRecord0Request
 */
export type TimeOffApiUpdateRecord0Request = {
    
    /**
    * Timeoff ID
    * @type {string}
    * @memberof TimeOffApiUpdateRecord0
    */
    readonly id: string
    
} & UpdateApprovedTimeoffParams

/**
 * TimeOffApiGenerated - object-oriented interface
 * @export
 * @class TimeOffApiGenerated
 * @extends {BaseAPI}
 */
export class TimeOffApiGenerated extends BaseAPI {
    /**
     * Shows a single Time Off record
     * @summary Show Time Off
     * @param {TimeOffApiGetRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeOffApiGenerated
     */
    public getRecord(requestParameters: TimeOffApiGetRecordRequest, options?: AxiosRequestConfig) {
        return TimeOffApiFp(this.configuration).getRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all Time Off records.
     * @summary List Time Off
     * @param {TimeOffApiListRecordsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeOffApiGenerated
     */
    public listRecords(requestParameters: TimeOffApiListRecordsRequest = {}, options?: AxiosRequestConfig) {
        return TimeOffApiFp(this.configuration).listRecords(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists all time off types that can be used for the `timeoff_type` parameter
     * @summary List Time Off Types
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeOffApiGenerated
     */
    public listTypes(options?: AxiosRequestConfig) {
        return TimeOffApiFp(this.configuration).listTypes(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Creates a Time Off record
     * @summary Create Time Off
     * @param {TimeOffApiRecordCreateRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeOffApiGenerated
     */
    public recordCreate(requestParameters: TimeOffApiRecordCreateRequest, options?: AxiosRequestConfig) {
        return TimeOffApiFp(this.configuration).recordCreate(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
     * @summary Update Time Off
     * @param {TimeOffApiUpdateRecordRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeOffApiGenerated
     */
    public updateRecord(requestParameters: TimeOffApiUpdateRecordRequest, options?: AxiosRequestConfig) {
        return TimeOffApiFp(this.configuration).updateRecord(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Updates a Time Off record. This endpoint can also be used for cancelling a time off.
     * @summary Update Time Off
     * @param {TimeOffApiUpdateRecord0Request} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof TimeOffApiGenerated
     */
    public updateRecord_1(requestParameters: TimeOffApiUpdateRecord0Request, options?: AxiosRequestConfig) {
        return TimeOffApiFp(this.configuration).updateRecord_1(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}