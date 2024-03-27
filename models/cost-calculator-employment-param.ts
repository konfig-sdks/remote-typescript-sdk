/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmploymentTermType } from './employment-term-type';

/**
 * 
 * @export
 * @interface CostCalculatorEmploymentParam
 */
export interface CostCalculatorEmploymentParam {
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorEmploymentParam
     */
    'title'?: string;
    /**
     * 
     * @type {number}
     * @memberof CostCalculatorEmploymentParam
     */
    'age'?: number;
    /**
     * 
     * @type {number}
     * @memberof CostCalculatorEmploymentParam
     */
    'annual_gross_salary'?: number;
    /**
     * 
     * @type {number}
     * @memberof CostCalculatorEmploymentParam
     */
    'annual_gross_salary_in_employer_currency'?: number;
    /**
     * 
     * @type {EmploymentTermType}
     * @memberof CostCalculatorEmploymentParam
     */
    'employment_term'?: EmploymentTermType;
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorEmploymentParam
     */
    'region_slug': string;
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorEmploymentParam
     */
    'regional_to_employer_exchange_rate'?: string;
}
