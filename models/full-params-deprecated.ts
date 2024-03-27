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
import { PricingPlanDetails } from './pricing-plan-details';

/**
 * Providing the params in the root level of the request is now deprecated and will be removed in the future. Please, use the \"FullParams\" instead. 
 * @export
 * @interface FullParamsDeprecated
 */
export interface FullParamsDeprecated {
    /**
     * Home address information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `address_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'address_details'?: object;
    /**
     * Administrative information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `administrative_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'administrative_details'?: object;
    /**
     * Bank account information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `bank_account_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'bank_account_details'?: object;
    /**
     * Billing address information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `billing_address_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'billing_address_details'?: object;
    /**
     * 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'company_id'?: string;
    /**
     * Contract information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `contract_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'contract_details'?: object;
    /**
     * 
     * @type {Country}
     * @memberof FullParamsDeprecated
     */
    'country'?: Country;
    /**
     * Emergency contact information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `emergency_contact_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'emergency_contact_details'?: object;
    /**
     * 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'full_name'?: string;
    /**
     * 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'job_title'?: string;
    /**
     * The user id of the manager, who should have an `admin`, `owner` or `people_manager` role. You can find these users by querying the [Company Managers endpoint](https://gateway.remote.com/v1/docs/openapi.html). **Update of this field is only available for active employments.** 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'manager_id'?: string;
    /**
     * Personal details information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `personal_details` as path parameters.
     * @type {object}
     * @memberof FullParamsDeprecated
     */
    'personal_details'?: object;
    /**
     * 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'personal_email'?: string;
    /**
     * 
     * @type {PricingPlanDetails}
     * @memberof FullParamsDeprecated
     */
    'pricing_plan_details'?: PricingPlanDetails;
    /**
     * Indicates the expected start date of the employee or contractor.  Required for employees, but optional for contractors. Date format is in ISO8601 without the time component.  See the **Date and Time Format** documentation for more details on how the Remote API works with dates. 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'provisional_start_date'?: string;
    /**
     * The date the employee first started working for your company. If you don’t include a seniority date, the employee’s start date with Remote will be deemed as the start of the employee’s seniority.  **Example**: Your employee started working for your company on Feb 1, 2022. On Aug 1, 2022, you transferred the employee to Remote and started managing them on the platform. Feb 1, 2022 would be their seniority date. Aug 1, 2022 would be their starting date. 
     * @type {string}
     * @memberof FullParamsDeprecated
     */
    'seniority_date'?: string;
}
