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
 * 
 * @export
 * @interface ResignationOffboarding
 */
export interface ResignationOffboarding {
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'additional_comments'?: string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'employer_awareness'?: string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'employment_id': string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'id': string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'proposed_last_working_day': string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'reason_description'?: string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'requested_by': string;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'resignation_reason': ResignationOffboardingResignationReasonEnum;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'status': ResignationOffboardingStatusEnum;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'submitted_at': string;
    /**
     * Most updated termination date for the offboarding. This date is subject to change through the offboarding process even after it is finalized.
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'termination_date': string | null;
    /**
     * 
     * @type {string}
     * @memberof ResignationOffboarding
     */
    'type': ResignationOffboardingTypeEnum;
}

type ResignationOffboardingResignationReasonEnum = 'cancellation_before_start_date' | 'company_culture_or_values' | 'conversion_to_contractor' | 'dissatisfaction_with_remote_service' | 'incapacity_to_perform_inherent_duties' | 'infrastructure_challenges' | 'lack_of_recognition' | 'leadership' | 'mutual_agreement' | 'other' | 'other_job_opportunity' | 'personal_reasons' | 'position_does_not_meet_expectations' | 'relationship_with_coworkers' | 'relocation_from_entity_to_entity_by_employee' | 'relocation_leaving_remote' | 'remuneration_and_benefits' | 'retirement' | 'transfer_and_relocation_new_customer_and_new_country' | 'transfer_between_remote_customer' | 'transfer_from_remote_to_customer' | 'transfer_from_remote_to_other_eor'
type ResignationOffboardingStatusEnum = 'submitted' | 'in_review' | 'done' | 'canceled'
type ResignationOffboardingTypeEnum = 'resignation'


