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
 * The details of the salary decrease request if there is one
 * @export
 * @interface SalaryDecreaseDetails
 */
export interface SalaryDecreaseDetails {
    /**
     * 
     * @type {string}
     * @memberof SalaryDecreaseDetails
     */
    'salary_decrease_reason'?: SalaryDecreaseDetailsSalaryDecreaseReasonEnum;
    /**
     * 
     * @type {string}
     * @memberof SalaryDecreaseDetails
     */
    'salary_decrease_reason_description'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof SalaryDecreaseDetails
     */
    'was_employee_informed'?: string;
}

type SalaryDecreaseDetailsSalaryDecreaseReasonEnum = 'change_in_working_hours' | 'trade_salary_for_equity' | 'error_in_initial_salary' | 'role_change_or_demotion' | 'compensation_restructure' | 'other'

