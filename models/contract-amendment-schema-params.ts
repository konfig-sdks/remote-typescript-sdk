/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface ContractAmendmentSchemaParams
 */
export interface ContractAmendmentSchemaParams {
    /**
     * Country code according to ISO 3-digit alphabetic codes.
     * @type {string}
     * @memberof ContractAmendmentSchemaParams
     */
    'country_code': string;
    /**
     * The ID of the employment concerned by the contract amendment request.
     * @type {string}
     * @memberof ContractAmendmentSchemaParams
     */
    'employment_id': string;
    /**
     * Name of the desired form
     * @type {string}
     * @memberof ContractAmendmentSchemaParams
     */
    'form'?: ContractAmendmentSchemaParamsFormEnum;
}

type ContractAmendmentSchemaParamsFormEnum = 'contract_amendment'


