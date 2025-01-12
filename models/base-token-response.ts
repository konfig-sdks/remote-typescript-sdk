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
 * @interface BaseTokenResponse
 */
export interface BaseTokenResponse {
    /**
     * A JWT token.
     * @type {string}
     * @memberof BaseTokenResponse
     */
    'access_token'?: string;
    /**
     * Number of seconds until token is expired.
     * @type {number}
     * @memberof BaseTokenResponse
     */
    'expires_in'?: number;
    /**
     * The type of the token. For now, always `Bearer`.
     * @type {string}
     * @memberof BaseTokenResponse
     */
    'token_type'?: string;
}

