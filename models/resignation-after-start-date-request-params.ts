/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements } from './resignation-after-start-date-request-params-owed-outstanding-reimbursements';
import { ResignationAfterStartDateRequestParamsProposedLastDate } from './resignation-after-start-date-request-params-proposed-last-date';

/**
 * 
 * @export
 * @interface ResignationAfterStartDateRequestParams
 */
export interface ResignationAfterStartDateRequestParams {
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'accepts_proposed_notice': boolean;
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'agrees_to_pto_amount': boolean;
    /**
     * Required if `agrees_to_pto_amount` is set to false.
     * @type {string}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'agrees_to_pto_amount_notes'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'agrees_to_resignation_reason': boolean;
    /**
     * required if `agrees_to_resignation_reason` is set to false.
     * @type {string}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'agrees_to_resignation_reason_notes'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'has_additional_information': boolean;
    /**
     * required if `has_additional_information` is set to true.
     * @type {string}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'has_additional_information_notes'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'has_more_salary_info': boolean;
    /**
     * required if `has_more_salary_info` is set to true.
     * @type {string}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'has_more_salary_info_notes'?: string;
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'is_owed_outstanding_reimbursements': boolean;
    /**
     * 
     * @type {ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'owed_outstanding_reimbursements'?: ResignationAfterStartDateRequestParamsOwedOutstandingReimbursements;
    /**
     * 
     * @type {ResignationAfterStartDateRequestParamsProposedLastDate}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'proposed_last_date'?: ResignationAfterStartDateRequestParamsProposedLastDate;
    /**
     * 
     * @type {boolean}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'will_take_more_pto': boolean;
    /**
     * required if `will_take_more_pto` is set to true.
     * @type {string}
     * @memberof ResignationAfterStartDateRequestParams
     */
    'will_take_more_pto_notes'?: string;
}
