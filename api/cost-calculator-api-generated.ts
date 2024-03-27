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
import { CostCalculatorEmploymentParam } from '../models';
// @ts-ignore
import { CostCalculatorEstimatePDFResponse } from '../models';
// @ts-ignore
import { CostCalculatorEstimateParams } from '../models';
// @ts-ignore
import { CostCalculatorEstimateResponse } from '../models';
// @ts-ignore
import { CostCalculatorListCountryResponse } from '../models';
// @ts-ignore
import { InternalServerErrorResponse } from '../models';
// @ts-ignore
import { JSONSchemaResponse } from '../models';
// @ts-ignore
import { NotFoundResponse } from '../models';
// @ts-ignore
import { UnauthorizedResponse } from '../models';
// @ts-ignore
import { UnprocessableEntityResponse } from '../models';
import { paginate } from "../pagination/paginate";
import type * as buffer from "buffer"
import { requestBeforeHook } from '../requestBeforeHook';
/**
 * CostCalculatorApi - axios parameter creator
 * @export
 */
export const CostCalculatorApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary Creates a cost estimation of employments
         * @param {CostCalculatorEstimateParams} [costCalculatorEstimateParams] Estimate params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmploymentEstimation: async (costCalculatorEstimateParams?: CostCalculatorEstimateParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/cost-calculator/estimation`;
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
                requestBody: costCalculatorEstimateParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/cost-calculator/estimation',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(costCalculatorEstimateParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary Creates a cost estimation of employments
         * @param {CostCalculatorEstimateParams} [costCalculatorEstimateParams] Estimate params
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateEstimationPdf: async (costCalculatorEstimateParams?: CostCalculatorEstimateParams, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/cost-calculator/estimation-pdf`;
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
                requestBody: costCalculatorEstimateParams,
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/cost-calculator/estimation-pdf',
                httpMethod: 'POST'
            });
            localVarRequestOptions.data = serializeDataIfNeeded(costCalculatorEstimateParams, localVarRequestOptions, configuration)

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Lists active and processing countries
         * @summary List countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCountries: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/cost-calculator/countries`;
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
                pathTemplate: '/v1/cost-calculator/countries',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns required fields JSON Schema for a given region. These are required in order to calculate       the cost of employment for the region. These fields are based on employer contributions that are associated       with the region or any of it\'s parent regions.
         * @summary Show region fields
         * @param {string} slug Slug
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRegionFields: async (slug: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'slug' is not null or undefined
            assertParamExists('showRegionFields', 'slug', slug)
            const localVarPath = `/v1/cost-calculator/regions/{slug}/fields`
                .replace(`{${"slug"}}`, encodeURIComponent(String(slug !== undefined ? slug : `-slug-`)));
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
                pathTemplate: '/v1/cost-calculator/regions/{slug}/fields',
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
 * CostCalculatorApi - functional programming interface
 * @export
 */
export const CostCalculatorApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CostCalculatorApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary Creates a cost estimation of employments
         * @param {CostCalculatorApiCreateEmploymentEstimationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async createEmploymentEstimation(requestParameters: CostCalculatorApiCreateEmploymentEstimationRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCalculatorEstimateResponse>> {
            const costCalculatorEstimateParams: CostCalculatorEstimateParams = {
                employer_currency_slug: requestParameters.employer_currency_slug,
                employments: requestParameters.employments,
                include_benefits: requestParameters.include_benefits,
                include_cost_breakdowns: requestParameters.include_cost_breakdowns
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.createEmploymentEstimation(costCalculatorEstimateParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary Creates a cost estimation of employments
         * @param {CostCalculatorApiGenerateEstimationPdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async generateEstimationPdf(requestParameters: CostCalculatorApiGenerateEstimationPdfRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCalculatorEstimatePDFResponse>> {
            const costCalculatorEstimateParams: CostCalculatorEstimateParams = {
                employer_currency_slug: requestParameters.employer_currency_slug,
                employments: requestParameters.employments,
                include_benefits: requestParameters.include_benefits,
                include_cost_breakdowns: requestParameters.include_cost_breakdowns
            };
            const localVarAxiosArgs = await localVarAxiosParamCreator.generateEstimationPdf(costCalculatorEstimateParams, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Lists active and processing countries
         * @summary List countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listCountries(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CostCalculatorListCountryResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listCountries(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns required fields JSON Schema for a given region. These are required in order to calculate       the cost of employment for the region. These fields are based on employer contributions that are associated       with the region or any of it\'s parent regions.
         * @summary Show region fields
         * @param {CostCalculatorApiShowRegionFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async showRegionFields(requestParameters: CostCalculatorApiShowRegionFieldsRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<JSONSchemaResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.showRegionFields(requestParameters.slug, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CostCalculatorApi - factory interface
 * @export
 */
export const CostCalculatorApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CostCalculatorApiFp(configuration)
    return {
        /**
         * 
         * @summary Creates a cost estimation of employments
         * @param {CostCalculatorApiCreateEmploymentEstimationRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        createEmploymentEstimation(requestParameters: CostCalculatorApiCreateEmploymentEstimationRequest, options?: AxiosRequestConfig): AxiosPromise<CostCalculatorEstimateResponse> {
            return localVarFp.createEmploymentEstimation(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary Creates a cost estimation of employments
         * @param {CostCalculatorApiGenerateEstimationPdfRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        generateEstimationPdf(requestParameters: CostCalculatorApiGenerateEstimationPdfRequest, options?: AxiosRequestConfig): AxiosPromise<CostCalculatorEstimatePDFResponse> {
            return localVarFp.generateEstimationPdf(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Lists active and processing countries
         * @summary List countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listCountries(options?: AxiosRequestConfig): AxiosPromise<CostCalculatorListCountryResponse> {
            return localVarFp.listCountries(options).then((request) => request(axios, basePath));
        },
        /**
         * Returns required fields JSON Schema for a given region. These are required in order to calculate       the cost of employment for the region. These fields are based on employer contributions that are associated       with the region or any of it\'s parent regions.
         * @summary Show region fields
         * @param {CostCalculatorApiShowRegionFieldsRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        showRegionFields(requestParameters: CostCalculatorApiShowRegionFieldsRequest, options?: AxiosRequestConfig): AxiosPromise<JSONSchemaResponse> {
            return localVarFp.showRegionFields(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for createEmploymentEstimation operation in CostCalculatorApi.
 * @export
 * @interface CostCalculatorApiCreateEmploymentEstimationRequest
 */
export type CostCalculatorApiCreateEmploymentEstimationRequest = {
    
} & CostCalculatorEstimateParams

/**
 * Request parameters for generateEstimationPdf operation in CostCalculatorApi.
 * @export
 * @interface CostCalculatorApiGenerateEstimationPdfRequest
 */
export type CostCalculatorApiGenerateEstimationPdfRequest = {
    
} & CostCalculatorEstimateParams

/**
 * Request parameters for showRegionFields operation in CostCalculatorApi.
 * @export
 * @interface CostCalculatorApiShowRegionFieldsRequest
 */
export type CostCalculatorApiShowRegionFieldsRequest = {
    
    /**
    * Slug
    * @type {string}
    * @memberof CostCalculatorApiShowRegionFields
    */
    readonly slug: string
    
}

/**
 * CostCalculatorApiGenerated - object-oriented interface
 * @export
 * @class CostCalculatorApiGenerated
 * @extends {BaseAPI}
 */
export class CostCalculatorApiGenerated extends BaseAPI {
    /**
     * 
     * @summary Creates a cost estimation of employments
     * @param {CostCalculatorApiCreateEmploymentEstimationRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCalculatorApiGenerated
     */
    public createEmploymentEstimation(requestParameters: CostCalculatorApiCreateEmploymentEstimationRequest, options?: AxiosRequestConfig) {
        return CostCalculatorApiFp(this.configuration).createEmploymentEstimation(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary Creates a cost estimation of employments
     * @param {CostCalculatorApiGenerateEstimationPdfRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCalculatorApiGenerated
     */
    public generateEstimationPdf(requestParameters: CostCalculatorApiGenerateEstimationPdfRequest, options?: AxiosRequestConfig) {
        return CostCalculatorApiFp(this.configuration).generateEstimationPdf(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Lists active and processing countries
     * @summary List countries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCalculatorApiGenerated
     */
    public listCountries(options?: AxiosRequestConfig) {
        return CostCalculatorApiFp(this.configuration).listCountries(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns required fields JSON Schema for a given region. These are required in order to calculate       the cost of employment for the region. These fields are based on employer contributions that are associated       with the region or any of it\'s parent regions.
     * @summary Show region fields
     * @param {CostCalculatorApiShowRegionFieldsRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CostCalculatorApiGenerated
     */
    public showRegionFields(requestParameters: CostCalculatorApiShowRegionFieldsRequest, options?: AxiosRequestConfig) {
        return CostCalculatorApiFp(this.configuration).showRegionFields(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}