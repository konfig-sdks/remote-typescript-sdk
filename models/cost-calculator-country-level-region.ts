/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CostCalculatorCountryAvailability } from './cost-calculator-country-availability';
import { Currency } from './currency';
import { MinimalRegion } from './minimal-region';

/**
 * A supported country on Remote
 * @export
 * @interface CostCalculatorCountryLevelRegion
 */
export interface CostCalculatorCountryLevelRegion {
    /**
     * - active: country is ready to onboard employee - coming_soon: country is in process of getting ready 
     * @type {CostCalculatorCountryAvailability}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'availability': CostCalculatorCountryAvailability;
    /**
     * 
     * @type {Array<MinimalRegion>}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'child_regions': Array<MinimalRegion>;
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'code': string;
    /**
     * 
     * @type {Currency}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'currency': Currency;
    /**
     * 
     * @type {boolean}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'has_additional_fields'?: boolean;
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'name': string;
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'original_country_slug': string;
    /**
     * 
     * @type {string}
     * @memberof CostCalculatorCountryLevelRegion
     */
    'region_slug': string;
}

