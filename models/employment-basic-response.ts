/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { EmploymentLifecycleStage } from './employment-lifecycle-stage';

/**
 * Complete information of an employment
 * @export
 * @interface EmploymentBasicResponse
 */
export interface EmploymentBasicResponse {
    /**
     * Employment basic information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `basic_information` as path parameters.
     * @type {object}
     * @memberof EmploymentBasicResponse
     */
    'basic_information'?: object;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'company_id'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'country_code'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'created_at'?: string;
    /**
     * The stage of employment lifecycle. When it\'s `onboarded` means the employee is ready to commence or has already commenced.
     * @type {EmploymentLifecycleStage}
     * @memberof EmploymentBasicResponse
     */
    'employment_lifecycle_stage'?: EmploymentLifecycleStage;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'full_name'?: string;
    /**
     * Unique ID of related department, if any. Otherwise, null.
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'id'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'job_title'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'personal_email'?: string;
    /**
     * Required for employees, optional for contractors
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'provisional_start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'type'?: EmploymentBasicResponseTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof EmploymentBasicResponse
     */
    'updated_at'?: string;
}

type EmploymentBasicResponseTypeEnum = 'employee' | 'contractor'


