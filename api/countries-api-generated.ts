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
import { CountriesResponse } from '../models';
// @ts-ignore
import { CountryFormResponse } from '../models';
// @ts-ignore
import { HolidaysResponse } from '../models';
// @ts-ignore
import { NotFoundResponse } from '../models';
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
 * CountriesApi - axios parameter creator
 * @export
 */
export const CountriesApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the json schema of a supported form. Possible form names are: ``` - address_details  - administrative_details  - bank_account_details  - employment_basic_information  - billing_address_details  - contract_details  - emergency_contact  - employment_document_details  - personal_details  - pricing_plan_details   ```  This endpoint requires a company access token, as forms are dependent on certain properties of companies and their current employments.  
         * @summary Show form schema
         * @param {string} countryCode Country code according to ISO 3-digit alphabetic codes
         * @param {string} form Name of the desired form
         * @param {string} [employmentId] Required for &#x60;contract_amendment&#x60; form
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFormSchema: async (countryCode: string, form: string, employmentId?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countryCode' is not null or undefined
            assertParamExists('getFormSchema', 'countryCode', countryCode)
            // verify required parameter 'form' is not null or undefined
            assertParamExists('getFormSchema', 'form', form)
            const localVarPath = `/v1/countries/{country_code}/{form}`
                .replace(`{${"country_code"}}`, encodeURIComponent(String(countryCode !== undefined ? countryCode : `-country_code-`)))
                .replace(`{${"form"}}`, encodeURIComponent(String(form !== undefined ? form : `-form-`)));
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


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/countries/{country_code}/{form}',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * Returns a list of all countries that are supported by Remote API alphabetically ordered. The supported list accounts for creating employment with basic information and it does not imply fully onboarding employment via JSON Schema. 
         * @summary List countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAlphabetically: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/v1/countries`;
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
                pathTemplate: '/v1/countries',
                httpMethod: 'GET'
            });

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * List all holidays of a country for a specific year. Optionally, it can be filtered by country subdivision.
         * @summary List all holidays of a country
         * @param {string} countryCode Country code according to ISO 3166-1 3-digit alphabetic codes
         * @param {string} year Year for the holidays
         * @param {string} [countrySubdivisionCode] Country subdivision code according to ISO 3166-2 codes
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHolidaysByYear: async (countryCode: string, year: string, countrySubdivisionCode?: string, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'countryCode' is not null or undefined
            assertParamExists('listHolidaysByYear', 'countryCode', countryCode)
            // verify required parameter 'year' is not null or undefined
            assertParamExists('listHolidaysByYear', 'year', year)
            const localVarPath = `/v1/countries/{country_code}/holidays/{year}`
                .replace(`{${"country_code"}}`, encodeURIComponent(String(countryCode !== undefined ? countryCode : `-country_code-`)))
                .replace(`{${"year"}}`, encodeURIComponent(String(year !== undefined ? year : `-year-`)));
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
            if (countrySubdivisionCode !== undefined) {
                localVarQueryParameter['country_subdivision_code'] = countrySubdivisionCode;
            }


    
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            requestBeforeHook({
                queryParameters: localVarQueryParameter,
                requestConfig: localVarRequestOptions,
                path: localVarPath,
                configuration,
                pathTemplate: '/v1/countries/{country_code}/holidays/{year}',
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
 * CountriesApi - functional programming interface
 * @export
 */
export const CountriesApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = CountriesApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the json schema of a supported form. Possible form names are: ``` - address_details  - administrative_details  - bank_account_details  - employment_basic_information  - billing_address_details  - contract_details  - emergency_contact  - employment_document_details  - personal_details  - pricing_plan_details   ```  This endpoint requires a company access token, as forms are dependent on certain properties of companies and their current employments.  
         * @summary Show form schema
         * @param {CountriesApiGetFormSchemaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async getFormSchema(requestParameters: CountriesApiGetFormSchemaRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CountryFormResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.getFormSchema(requestParameters.countryCode, requestParameters.form, requestParameters.employmentId, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * Returns a list of all countries that are supported by Remote API alphabetically ordered. The supported list accounts for creating employment with basic information and it does not imply fully onboarding employment via JSON Schema. 
         * @summary List countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listAlphabetically(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<CountriesResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listAlphabetically(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * List all holidays of a country for a specific year. Optionally, it can be filtered by country subdivision.
         * @summary List all holidays of a country
         * @param {CountriesApiListHolidaysByYearRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async listHolidaysByYear(requestParameters: CountriesApiListHolidaysByYearRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<HolidaysResponse>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.listHolidaysByYear(requestParameters.countryCode, requestParameters.year, requestParameters.countrySubdivisionCode, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * CountriesApi - factory interface
 * @export
 */
export const CountriesApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = CountriesApiFp(configuration)
    return {
        /**
         * Returns the json schema of a supported form. Possible form names are: ``` - address_details  - administrative_details  - bank_account_details  - employment_basic_information  - billing_address_details  - contract_details  - emergency_contact  - employment_document_details  - personal_details  - pricing_plan_details   ```  This endpoint requires a company access token, as forms are dependent on certain properties of companies and their current employments.  
         * @summary Show form schema
         * @param {CountriesApiGetFormSchemaRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        getFormSchema(requestParameters: CountriesApiGetFormSchemaRequest, options?: AxiosRequestConfig): AxiosPromise<CountryFormResponse> {
            return localVarFp.getFormSchema(requestParameters, options).then((request) => request(axios, basePath));
        },
        /**
         * Returns a list of all countries that are supported by Remote API alphabetically ordered. The supported list accounts for creating employment with basic information and it does not imply fully onboarding employment via JSON Schema. 
         * @summary List countries
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listAlphabetically(options?: AxiosRequestConfig): AxiosPromise<CountriesResponse> {
            return localVarFp.listAlphabetically(options).then((request) => request(axios, basePath));
        },
        /**
         * List all holidays of a country for a specific year. Optionally, it can be filtered by country subdivision.
         * @summary List all holidays of a country
         * @param {CountriesApiListHolidaysByYearRequest} requestParameters Request parameters.
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        listHolidaysByYear(requestParameters: CountriesApiListHolidaysByYearRequest, options?: AxiosRequestConfig): AxiosPromise<HolidaysResponse> {
            return localVarFp.listHolidaysByYear(requestParameters, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * Request parameters for getFormSchema operation in CountriesApi.
 * @export
 * @interface CountriesApiGetFormSchemaRequest
 */
export type CountriesApiGetFormSchemaRequest = {
    
    /**
    * Country code according to ISO 3-digit alphabetic codes
    * @type {string}
    * @memberof CountriesApiGetFormSchema
    */
    readonly countryCode: string
    
    /**
    * Name of the desired form
    * @type {string}
    * @memberof CountriesApiGetFormSchema
    */
    readonly form: string
    
    /**
    * Required for `contract_amendment` form
    * @type {string}
    * @memberof CountriesApiGetFormSchema
    */
    readonly employmentId?: string
    
}

/**
 * Request parameters for listHolidaysByYear operation in CountriesApi.
 * @export
 * @interface CountriesApiListHolidaysByYearRequest
 */
export type CountriesApiListHolidaysByYearRequest = {
    
    /**
    * Country code according to ISO 3166-1 3-digit alphabetic codes
    * @type {string}
    * @memberof CountriesApiListHolidaysByYear
    */
    readonly countryCode: string
    
    /**
    * Year for the holidays
    * @type {string}
    * @memberof CountriesApiListHolidaysByYear
    */
    readonly year: string
    
    /**
    * Country subdivision code according to ISO 3166-2 codes
    * @type {string}
    * @memberof CountriesApiListHolidaysByYear
    */
    readonly countrySubdivisionCode?: string
    
}

/**
 * CountriesApiGenerated - object-oriented interface
 * @export
 * @class CountriesApiGenerated
 * @extends {BaseAPI}
 */
export class CountriesApiGenerated extends BaseAPI {
    /**
     * Returns the json schema of a supported form. Possible form names are: ``` - address_details  - administrative_details  - bank_account_details  - employment_basic_information  - billing_address_details  - contract_details  - emergency_contact  - employment_document_details  - personal_details  - pricing_plan_details   ```  This endpoint requires a company access token, as forms are dependent on certain properties of companies and their current employments.  
     * @summary Show form schema
     * @param {CountriesApiGetFormSchemaRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiGenerated
     */
    public getFormSchema(requestParameters: CountriesApiGetFormSchemaRequest, options?: AxiosRequestConfig) {
        return CountriesApiFp(this.configuration).getFormSchema(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * Returns a list of all countries that are supported by Remote API alphabetically ordered. The supported list accounts for creating employment with basic information and it does not imply fully onboarding employment via JSON Schema. 
     * @summary List countries
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiGenerated
     */
    public listAlphabetically(options?: AxiosRequestConfig) {
        return CountriesApiFp(this.configuration).listAlphabetically(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * List all holidays of a country for a specific year. Optionally, it can be filtered by country subdivision.
     * @summary List all holidays of a country
     * @param {CountriesApiListHolidaysByYearRequest} requestParameters Request parameters.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof CountriesApiGenerated
     */
    public listHolidaysByYear(requestParameters: CountriesApiListHolidaysByYearRequest, options?: AxiosRequestConfig) {
        return CountriesApiFp(this.configuration).listHolidaysByYear(requestParameters, options).then((request) => request(this.axios, this.basePath));
    }
}
