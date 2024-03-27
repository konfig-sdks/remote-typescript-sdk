/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Country } from './country';
import { EmploymentLifecycleStage } from './employment-lifecycle-stage';
import { EmploymentStatus } from './employment-status';
import { List } from './list';
import { OnboardingTasks } from './onboarding-tasks';
import { PricingPlanDetails } from './pricing-plan-details';
import { UserStatus } from './user-status';

/**
 * Complete information of an employment
 * @export
 * @interface Employment
 */
export interface Employment {
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'active_contract_id'?: string;
    /**
     * Home address information. Its properties may vary depending on the country.
     * @type {object}
     * @memberof Employment
     */
    'address_details': object;
    /**
     * Administrative information. Its properties may vary depending on the country.
     * @type {object}
     * @memberof Employment
     */
    'administrative_details': object;
    /**
     * 
     * @type {Array<List>}
     * @memberof Employment
     */
    'bank_account_details': Array<List>;
    /**
     * Employment basic information. Its properties may vary depending on the country. 
     * @type {object}
     * @memberof Employment
     */
    'basic_information'?: object;
    /**
     * Billing address information. Its properties may vary depending on the country.
     * @type {object}
     * @memberof Employment
     */
    'billing_address_details': object;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'company_id': string;
    /**
     * Contract information. Its properties may vary depending on the country.
     * @type {object}
     * @memberof Employment
     */
    'contract_details': object;
    /**
     * 
     * @type {Country}
     * @memberof Employment
     */
    'country': Country;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'created_at': string;
    /**
     * Name of related department, if any. Otherwise, null.
     * @type {string}
     * @memberof Employment
     */
    'department'?: string | null;
    /**
     * Unique ID of related department, if any. Otherwise, null.
     * @type {string}
     * @memberof Employment
     */
    'department_id'?: string | null;
    /**
     * Emergency contact information. Its properties may vary depending on the country.
     * @type {object}
     * @memberof Employment
     */
    'emergency_contact_details': object;
    /**
     * The stage of employment lifecycle. When it\'s `onboarded` means the employee is ready to commence or has already commenced.
     * @type {EmploymentLifecycleStage}
     * @memberof Employment
     */
    'employment_lifecycle_stage': EmploymentLifecycleStage;
    /**
     * 
     * @type {Array<any>}
     * @memberof Employment
     */
    'files': Array<any>;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'full_name': string;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'job_title': string;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'manager'?: string;
    /**
     * 
     * @type {OnboardingTasks}
     * @memberof Employment
     */
    'onboarding_tasks': OnboardingTasks;
    /**
     * Personal details information. Its properties may vary depending on the country.
     * @type {object}
     * @memberof Employment
     */
    'personal_details': object;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'personal_email': string;
    /**
     * 
     * @type {PricingPlanDetails}
     * @memberof Employment
     */
    'pricing_plan_details': PricingPlanDetails;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'probation_period_end_date'?: string;
    /**
     * Indicates the expected start date of the employee or contractor.  Required for employees, but optional for contractors. Date format is in ISO8601 without the time component.  See the **Date and Time Format** documentation for more details on how the Remote API works with dates. 
     * @type {string}
     * @memberof Employment
     */
    'provisional_start_date'?: string;
    /**
     * The date the employee first started working for your company. If you don’t include a seniority date, the employee’s start date with Remote will be deemed as the start of the employee’s seniority.  **Example**: Your employee started working for your company on Feb 1, 2022. On Aug 1, 2022, you transferred the employee to Remote and started managing them on the platform. Feb 1, 2022 would be their seniority date. Aug 1, 2022 would be their starting date. 
     * @type {string}
     * @memberof Employment
     */
    'seniority_date'?: string;
    /**
     * The status of employment
     * @type {EmploymentStatus}
     * @memberof Employment
     */
    'status': EmploymentStatus;
    /**
     * For the employment types `contractor`, `global_payroll_employee` and `direct_employee`, only [List employments](https://gateway.remote.com/v1/docs/openapi.html) and [Show employment](https://gateway.remote.com/v1/docs/openapi.html) operations are available. 
     * @type {string}
     * @memberof Employment
     */
    'type': EmploymentTypeEnum;
    /**
     * 
     * @type {string}
     * @memberof Employment
     */
    'updated_at': string;
    /**
     * The status of the user
     * @type {UserStatus}
     * @memberof Employment
     */
    'user_status'?: UserStatus;
}

type EmploymentTypeEnum = 'employee' | 'contractor' | 'direct_employee' | 'global_payroll_employee'

