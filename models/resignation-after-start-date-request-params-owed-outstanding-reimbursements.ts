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
 * required if `is_owed_outstanding_reimbursements` is set to true.
 * @export
 * @interface ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements
 */
export interface ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements {
    /**
     * The amount (in the currency of the employment) to be given to the employee.  This field accepts fractional amounts as well. However to avoid precision issues and errors that can arise from storing fractional amounts, the Remote API only accepts currencies and their fractional amounts as integers. This means you should append fractional amounts to the end of the amount you\'re passing in with this field.  For example, if the amount you\'re offering is EUR 500.25, you would specify `50025` as the amount for this field. 
     * @type {number}
     * @memberof ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements
     */
    'amount'?: number;
    /**
     * 
     * @type {string}
     * @memberof ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements
     */
    'notes'?: string;
}
