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
 * @interface CreateContractAmendmentParams
 */
export interface CreateContractAmendmentParams {
    /**
     * The contract ID of the contract that needs to be amended.
     * @type {string}
     * @memberof CreateContractAmendmentParams
     */
    'amendment_contract_id': string;
    /**
     * Contract amendment informations. As its properties may vary depending on the country,                 you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code, `contract_amendment` and the employment ID as request body.
     * @type {object}
     * @memberof CreateContractAmendmentParams
     */
    'contract_amendment': object;
    /**
     * The employment ID that is related to the contract amendment request.
     * @type {string}
     * @memberof CreateContractAmendmentParams
     */
    'employment_id': string;
}

