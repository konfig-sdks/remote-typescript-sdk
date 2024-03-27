/*
Remote API

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

The version of the OpenAPI document: 0.1.0


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TimeoffDaysParams } from './timeoff-days-params';
import { TimeoffDocumentParams } from './timeoff-document-params';
import { TimeoffType } from './timeoff-type';

/**
 * Update timeoff params
 * @export
 * @interface UpdateApprovedTimeoffParams
 */
export interface UpdateApprovedTimeoffParams {
    /**
     * UTC date time in [ISO 8601][] format.  [ISO 8601]: https://en.wikipedia.org/wiki/ISO_8601 
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'approved_at'?: string;
    /**
     * The field matches the `id` of a user in the Remote Platform that has permission to approve time off requests. [Available users][] can be found fetching the [List Company Manager][] endpoint.  [Available users]: https://support.remote.com/hc/en-us/articles/360054668651-Approving-Declining-time-off-requests#h_01G0014GZKZ3EMN6P7C99HAK55 [List Company Manager]: https://gateway.remote.com/v1/docs/openapi.html#tag/Company-Managers 
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'approver_id'?: string | null;
    /**
     * The reason for cancelling a time off. Required when updating to status `cancelled`.
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'cancel_reason': string;
    /**
     * 
     * @type {TimeoffDocumentParams}
     * @memberof UpdateApprovedTimeoffParams
     */
    'document'?: TimeoffDocumentParams;
    /**
     * The reason for the update. Required when updating the time off data but not changing the status.
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'edit_reason': string;
    /**
     * UTC date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'end_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'notes'?: string;
    /**
     * UTC date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'start_date'?: string;
    /**
     * 
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'status'?: UpdateApprovedTimeoffParamsStatusEnum;
    /**
     * 
     * @type {Array<TimeoffDaysParams>}
     * @memberof UpdateApprovedTimeoffParams
     */
    'timeoff_days'?: Array<TimeoffDaysParams>;
    /**
     * 
     * @type {TimeoffType}
     * @memberof UpdateApprovedTimeoffParams
     */
    'timeoff_type'?: TimeoffType;
    /**
     * [TZ identifier](https://www.iana.org/time-zones)
     * @type {string}
     * @memberof UpdateApprovedTimeoffParams
     */
    'timezone'?: string;
}

type UpdateApprovedTimeoffParamsStatusEnum = 'approved' | 'cancelled'

