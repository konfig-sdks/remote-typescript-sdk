/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { AmountTaxType } from './amount-tax-type';

/**
 * 
 * @export
 * @interface RecurringIncentive
 */
export interface RecurringIncentive {
    /**
     * 
     * @type {number}
     * @memberof RecurringIncentive
     */
    'amount': number;
    /**
     *   Whether the amount given accounts for taxes or not.    `gross` indicates that the amount given is the amount to be paid before taxes   are subtracted.    `net` indicates that the amount given is the amount which will be paid to the   employee after taxes. Remote will gross this up to ensure the taxes are   included and employee receives the amount requested without further reduction. 
     * @type {AmountTaxType}
     * @memberof RecurringIncentive
     */
    'amount_tax_type': AmountTaxType;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'employment_id': string;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'end_date'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'note'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'start_date': string;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'status': RecurringIncentiveStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof RecurringIncentive
     */
    'type': RecurringIncentiveTypeEnum;
}

type RecurringIncentiveStatusEnum = 'active' | 'inactive'
type RecurringIncentiveTypeEnum = 'acting_up_allowance' | 'allowance' | 'car_allowance' | 'health_and_wellness_allowance' | 'internet_allowance' | 'meal_allowance' | 'on_call_allowance' | 'parenthood_allowance' | 'phone_allowance' | 'relocation_allowance' | 'travel_allowance' | 'work_from_home_allowance' | 'bonus' | 'holiday_bonus' | 'referral_bonus' | 'retention_bonus' | 'commission' | 'other' | 'overtime' | 'stipend'


