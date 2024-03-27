<div align="left">

[![Visit Remote](./header.png)](https://remote.com)

# [Remote](https://remote.com)<a id="remote"></a>

Talent is everywhere. Opportunity is not. Remote's mission is to create opportunity everywhere, empowering employers to find and hire the best talent, and enabling individuals to build financial and personal freedom. 

Remote is a Global HR Platform that helps companies hire, manage, and pay their entire team — and more effectively compete in the modern global economy through our comprehensive set of core solutions including, HRIS, payroll, international employment, contractor management, and more. 

Whether you're just starting your global journey, or looking to optimize your existing operations, sign up or book a demo - and see how Remote makes global HR simple.

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`remote.benefitsCountrySummary.listSummary`](#remotebenefitscountrysummarylistsummary)
  * [`remote.billingDocuments.downloadPdf`](#remotebillingdocumentsdownloadpdf)
  * [`remote.billingDocuments.list`](#remotebillingdocumentslist)
  * [`remote.billingDocuments.showDetails`](#remotebillingdocumentsshowdetails)
  * [`remote.companies.createNewCompany`](#remotecompaniescreatenewcompany)
  * [Creating a company with only the required request body parameters](#creating-a-company-with-only-the-required-request-body-parameters)
  * [Accepting the Terms of Service](#accepting-the-terms-of-service)
  * [`remote.companies.listAll`](#remotecompanieslistall)
  * [`remote.companies.showCompany`](#remotecompaniesshowcompany)
  * [`remote.companies.updateCompany`](#remotecompaniesupdatecompany)
  * [Getting a company and its owner to `active` status](#getting-a-company-and-its-owner-to-active-status)
  * [`remote.companies.updateCompany_0`](#remotecompaniesupdatecompany_0)
  * [Getting a company and its owner to `active` status](#getting-a-company-and-its-owner-to-active-status-1)
  * [`remote.companyDepartment.createNewDepartment`](#remotecompanydepartmentcreatenewdepartment)
  * [`remote.companyDepartment.list`](#remotecompanydepartmentlist)
  * [`remote.companyManagers.createInvite`](#remotecompanymanagerscreateinvite)
  * [`remote.companyManagers.deleteUser`](#remotecompanymanagersdeleteuser)
  * [`remote.companyManagers.listManagers`](#remotecompanymanagerslistmanagers)
  * [`remote.companyManagers.showUser`](#remotecompanymanagersshowuser)
  * [`remote.contractAmendments.approveAmendment`](#remotecontractamendmentsapproveamendment)
  * [`remote.contractAmendments.checkAutomatability`](#remotecontractamendmentscheckautomatability)
  * [`remote.contractAmendments.createRequest`](#remotecontractamendmentscreaterequest)
  * [`remote.contractAmendments.getFormSchema`](#remotecontractamendmentsgetformschema)
  * [`remote.contractAmendments.listRequests`](#remotecontractamendmentslistrequests)
  * [`remote.contractAmendments.showSingleRequest`](#remotecontractamendmentsshowsinglerequest)
  * [`remote.costCalculator.createEmploymentEstimation`](#remotecostcalculatorcreateemploymentestimation)
  * [`remote.costCalculator.generateEstimationPdf`](#remotecostcalculatorgenerateestimationpdf)
  * [`remote.costCalculator.listCountries`](#remotecostcalculatorlistcountries)
  * [`remote.costCalculator.showRegionFields`](#remotecostcalculatorshowregionfields)
  * [`remote.countries.getFormSchema`](#remotecountriesgetformschema)
  * [`remote.countries.listAlphabetically`](#remotecountrieslistalphabetically)
  * [`remote.countries.listHolidaysByYear`](#remotecountrieslistholidaysbyyear)
  * [`remote.customFields.listDefinitions`](#remotecustomfieldslistdefinitions)
  * [`remote.customFields.showValue`](#remotecustomfieldsshowvalue)
  * [`remote.employmentContracts.getPendingChanges`](#remoteemploymentcontractsgetpendingchanges)
  * [`remote.employments.completeOnboarding`](#remoteemploymentscompleteonboarding)
  * [`remote.employments.createEmployment`](#remoteemploymentscreateemployment)
  * [`remote.employments.getEmploymentInfo`](#remoteemploymentsgetemploymentinfo)
  * [`remote.employments.inviteStartEnrollment`](#remoteemploymentsinvitestartenrollment)
  * [`remote.employments.listAll`](#remoteemploymentslistall)
  * [`remote.employments.updateData`](#remoteemploymentsupdatedata)
  * [`remote.employments.updateDetails`](#remoteemploymentsupdatedetails)
  * [`remote.expenses.createApprovedExpense`](#remoteexpensescreateapprovedexpense)
  * [`remote.expenses.downloadReceipt`](#remoteexpensesdownloadreceipt)
  * [`remote.expenses.downloadReceiptById`](#remoteexpensesdownloadreceiptbyid)
  * [`remote.expenses.listRecords`](#remoteexpenseslistrecords)
  * [`remote.expenses.showRecord`](#remoteexpensesshowrecord)
  * [`remote.expenses.updateExpense`](#remoteexpensesupdateexpense)
  * [`remote.expenses.updateRecord`](#remoteexpensesupdaterecord)
  * [`remote.files.downloadFile`](#remotefilesdownloadfile)
  * [`remote.files.uploadEmploymentFile`](#remotefilesuploademploymentfile)
  * [`remote.identity.getTokenInfo`](#remoteidentitygettokeninfo)
  * [`remote.incentives.createIncentive`](#remoteincentivescreateincentive)
  * [`remote.incentives.listAll`](#remoteincentiveslistall)
  * [`remote.incentives.removeIncentive`](#remoteincentivesremoveincentive)
  * [`remote.incentives.showDetails`](#remoteincentivesshowdetails)
  * [`remote.incentives.updateIncentive`](#remoteincentivesupdateincentive)
  * [`remote.incentives.updateIncentive_0`](#remoteincentivesupdateincentive_0)
  * [`remote.oAuth2.exchangeToken`](#remoteoauth2exchangetoken)
  * [`remote.offboarding.createRequest`](#remoteoffboardingcreaterequest)
  * [`remote.offboarding.listRequests`](#remoteoffboardinglistrequests)
  * [`remote.offboarding.showRequest`](#remoteoffboardingshowrequest)
  * [`remote.payslips.downloadPdf`](#remotepayslipsdownloadpdf)
  * [`remote.payslips.listAll`](#remotepayslipslistall)
  * [`remote.payslips.showPayslip`](#remotepayslipsshowpayslip)
  * [`remote.recurringIncentives.createMonthlyIncentive`](#remoterecurringincentivescreatemonthlyincentive)
  * [`remote.recurringIncentives.deleteScheduled`](#remoterecurringincentivesdeletescheduled)
  * [`remote.recurringIncentives.listIncentives`](#remoterecurringincentiveslistincentives)
  * [`remote.resignation.downloadLetter`](#remoteresignationdownloadletter)
  * [`remote.sandbox.createEmploymentWithoutValidations`](#remotesandboxcreateemploymentwithoutvalidations)
  * [`remote.sandbox.employmentUpdate`](#remotesandboxemploymentupdate)
  * [`remote.sandbox.triggerWebhookCallback`](#remotesandboxtriggerwebhookcallback)
  * [`remote.sandbox.updateEmploymentState`](#remotesandboxupdateemploymentstate)
  * [`remote.timeOff.getRecord`](#remotetimeoffgetrecord)
  * [`remote.timeOff.listRecords`](#remotetimeofflistrecords)
  * [`remote.timeOff.listTypes`](#remotetimeofflisttypes)
  * [`remote.timeOff.recordCreate`](#remotetimeoffrecordcreate)
  * [`remote.timeOff.updateRecord`](#remotetimeoffupdaterecord)
  * [`remote.timeOff.updateRecord_0`](#remotetimeoffupdaterecord_0)
  * [`remote.timeOffBalances.showBalance`](#remotetimeoffbalancesshowbalance)
  * [`remote.webhookCallbacks.deleteCallback`](#remotewebhookcallbacksdeletecallback)
  * [`remote.webhookCallbacks.registerCallback`](#remotewebhookcallbacksregistercallback)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=Remote&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { Remote } from "remote-typescript-sdk";

const remote = new Remote({
  // Defining the base path is optional and defaults to https://gateway.remote.com
  // basePath: "https://gateway.remote.com",
  oauthClientId: "CLIENT_ID",
  oauthClientSecret: "CLIENT_SECRET",
});

const listSummaryResponse = await remote.benefitsCountrySummary.listSummary();

console.log(listSummaryResponse);
```

## Reference<a id="reference"></a>


### `remote.benefitsCountrySummary.listSummary`<a id="remotebenefitscountrysummarylistsummary"></a>

List benefits summary for each country with the number of enrolled employees.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listSummaryResponse = await remote.benefitsCountrySummary.listSummary();
```

#### 🔄 Return<a id="🔄-return"></a>

[ListBenefitsCountrySummaryResponse](./models/list-benefits-country-summary-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/benefits/country-summary` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.billingDocuments.downloadPdf`<a id="remotebillingdocumentsdownloadpdf"></a>

Downloads a billing document PDF

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadPdfResponse = await remote.billingDocuments.downloadPdf({
  billingDocumentId: "billingDocumentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### billingDocumentId: `string`<a id="billingdocumentid-string"></a>

The billing document\'s ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/billing-documents/{billing_document_id}/pdf` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.billingDocuments.list`<a id="remotebillingdocumentslist"></a>

List billing documents for a company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await remote.billingDocuments.list({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### period: `string`<a id="period-string"></a>

The month for the billing documents (in ISO-8601 format)

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[BillingDocumentsResponse](./models/billing-documents-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/billing-documents` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.billingDocuments.showDetails`<a id="remotebillingdocumentsshowdetails"></a>

Shows a billing document details.

Please contact api-support@remote.com to request access to this endpoint.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await remote.billingDocuments.showDetails({
  billingDocumentId: "billingDocumentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### billingDocumentId: `string`<a id="billingdocumentid-string"></a>

The billing document\'s ID

#### 🔄 Return<a id="🔄-return"></a>

[BillingDocumentResponse](./models/billing-document-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/billing-documents/{billing_document_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companies.createNewCompany`<a id="remotecompaniescreatenewcompany"></a>

  Creates a new company.

  ### Creating a company with only the required request body parameters
  When you call this endpoint and omit all the optional parameters in the request body,
  the following resources get created upon a successful response:
  * A new company with status `pending`.
  * A company owner for the new company with status `initiated`.

  See the [update a company endpoint](https://gateway.remote.com/v1/docs/openapi.html) for
  more details on how to get your company and its owner to `active` status.

  If you'd like to create a company and its owner with `active` status in a single request,
  please provide the optional `address_details` parameter as well.

  ### Accepting the Terms of Service

  A required step for creating a company in Remote is to accept our Terms of Service (ToS).

  Company managers need to be aware of our Terms of Service and Privacy Policy,
  hence **it's the responsibility of our partners to advise and ensure company managers read
  and accept the ToS**. The terms have to be accepted only once, before creating a company,
  and the Remote API will collect the acceptance timestamp as its confirmation.

  To ensure users read the most recent version of Remote's Terms of Service, their **acceptance
  must be done within the last fifteen minutes prior the company creation action**.

  To retrieve this information, partners can provide an element with any text and a description
  explaining that by performing that action they are accepting Remote's Term of Service. For
  instance, the partner can add a checkbox or a "Create Remote Account" button followed by a
  description saying "By creating an account, you agree to
  [Remote's Terms of Service](https://remote.com/terms-of-service). Also see Remote's
  [Privacy Policy](https://remote.com/privacy-policy)".


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewCompanyResponse = await remote.companies.createNewCompany({
  company_owner_email: "ceo@techvision.com",
  company_owner_name: "Joe Smith",
  country_code: "USA",
  desired_currency: "USD",
  external_id: "00001111",
  name: "Tech Vision",
  phone_number: "+11123123456",
  tax_number: "123456789",
  terms_of_service_accepted_at: "1970-01-01T00:00:00.00Z",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### company_owner_email: `string`<a id="company_owner_email-string"></a>

The company owner email.  This value cannot be changed once set. 

##### company_owner_name: `string`<a id="company_owner_name-string"></a>

The company owner name.  This value cannot be changed from the Remote API once set. 

##### country_code: `string`<a id="country_code-string"></a>

3-letter country code of the country the company address is located in.  For a list of countries supported through the Remote API, make a call to the [list countries endpoint](https://gateway.remote.com/v1/docs/openapi.html). This endpoint will also include the 3-letter country codes you can use for this field. 

##### desired_currency: `string`<a id="desired_currency-string"></a>

Desired currency for invoicing and displaying converted salaries in Remote UI regardless of the employee\\\'s country.

##### name: `string`<a id="name-string"></a>

The company name

##### terms_of_service_accepted_at: `string`<a id="terms_of_service_accepted_at-string"></a>

Date and time the Terms of Service were accepted. To ensure users read the most recent version of Remote\\\'s Terms of Service, their action cannot have been done more than fifteen minutes ago. The UTC offset must be included in the ISO 8601 format: `YYYY-MM-DD HOURS:MINUTES:SECONDSZ`

##### address_details: `object`<a id="address_details-object"></a>

Fields can vary depending on the country. Please, check the required fields structure using the [Show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html). Use the desired country and `address_details` as the form name for the placeholders. The response complies with the [JSON Schema](https://remote.com/resources/api/how-json-schemas-work) specification. 

##### bank_account_details: `object`<a id="bank_account_details-object"></a>

Fields can vary depending on the country. Please, check the required fields structure using the [Show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html). Use the desired country and `bank_account_details` as the form name for the placeholders. The response complies with the [JSON Schema](https://remote.com/resources/api/how-json-schemas-work) specification. 

##### email_domain: `string`<a id="email_domain-string"></a>

The domain of the company. Use this field to specify the company domain name when it\\\'s different from the domain in the company owner\\\'s email.

##### external_id: `string`<a id="external_id-string"></a>

Id of the company as represented in the external partner system.

##### phone_number: `string`<a id="phone_number-string"></a>

A phone number the company can be contacted with.

##### registration_number: `string`<a id="registration_number-string"></a>

The company registration number. This field or `tax_number` (but not both) should be submitted.

##### tax_number: `string`<a id="tax_number-string"></a>

The tax identifier of the company. This field or `registration_number` (but not both) should be submitted.

##### action: `string`<a id="action-string"></a>

Complementary action(s) to perform when creating a company:  - `get_oauth_access_tokens` returns the user\'s access and refresh tokens - `send_create_password_email ` sends a reset password token to the company owner\'s email so they can log in using Remote UI (not needed if integration plans to use SSO only)  If `action` contains `send_create_password_email` you can redirect the user to [https://employ.remote.com/api-integration-new-password-send](https://employ.remote.com/api-integration-new-password-send) 

#### 🔄 Return<a id="🔄-return"></a>

[CompanyCreationResponse](./models/company-creation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companies.listAll`<a id="remotecompanieslistall"></a>

List all companies that authorized your integration to act on their behalf. In other words, these are all the companies that your integration can manage. Any company that has completed the authorization flow for your integration will be included in the response.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await remote.companies.listAll();
```

#### 🔄 Return<a id="🔄-return"></a>

[CompaniesResponse](./models/companies-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companies.showCompany`<a id="remotecompaniesshowcompany"></a>

Given an ID, shows a company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showCompanyResponse = await remote.companies.showCompany({
  companyId: "companyId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

Company ID

#### 🔄 Return<a id="🔄-return"></a>

[CompanyResponse](./models/company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companies.updateCompany`<a id="remotecompaniesupdatecompany"></a>

Given an ID and a request object with new information, updates a company.

### Getting a company and its owner to `active` status<a id="getting-a-company-and-its-owner-to-active-status"></a>
If you created a company using the
[create a company endpoint](https://gateway.remote.com/v1/docs/openapi.html) without all the required
request body parameters, you can use this endpoint to provide the missing data. Once the company
and its owner have all the necessary data, both their statuses will be set to `active` and the company
onboarding will be marked as "completed".

The following constitutes a company with "all the necessary data":
* Complete `address`, with valid `address`, `postal_code`, `country` and `state` parameters (Varies by country. Use the
[show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html) to see which address parameters
are required).
* Company `tax_number` or `registration_number` is not nil
* Company `name` is not nil (already required when creating the company)
* Company has a `desired_currency` in their bank account (already required when creating the company)
* Company has accepted terms of service (already required when creating the company)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCompanyResponse = await remote.companies.updateCompany({
  companyId: "companyId_example",
  country_code: "USA",
  desired_currency: "USD",
  name: "Tech Vision",
  phone_number: "+11123123456",
  tax_number: "123456789",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

Company ID

##### address_details: `object`<a id="address_details-object"></a>

Fields can vary depending on the country. Please, check the required fields structure using the [Show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html). Use the desired country and `address_details` as the form name for the placeholders. The response complies with the [JSON Schema](https://remote.com/resources/api/how-json-schemas-work) specification. 

##### bank_account_details: `object`<a id="bank_account_details-object"></a>

Fields can vary depending on the country. Please, check the required fields structure using the [Show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html). Use the desired country and `bank_account_details` as the form name for the placeholders. The response complies with the [JSON Schema](https://remote.com/resources/api/how-json-schemas-work) specification. 

##### country_code: `string`<a id="country_code-string"></a>

Country of company address

##### desired_currency: `string`<a id="desired_currency-string"></a>

Desired currency for invoicing and displaying converted salaries in Remote UI regardless of the employee\\\'s country.  This field is only accepted if company is in status `pending`. Please contact Remote if you wish to update it. 

##### name: `string`<a id="name-string"></a>

This field is only accepted if company is in status `pending`. Please contact Remote if you wish to update it. 

##### phone_number: `string`<a id="phone_number-string"></a>

A phone number the company can be contacted with.

##### registration_number: `string`<a id="registration_number-string"></a>

The company registration number. This field or tax_number (but not both) should be submitted.  This field is only accepted if company is in status `pending`. 

##### tax_number: `string`<a id="tax_number-string"></a>

  The tax identifier of the company. This field or registration_number (but not both) should be submitted.    This field is only accepted if company is in status `pending`. 

#### 🔄 Return<a id="🔄-return"></a>

[CompanyResponse](./models/company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companies.updateCompany_0`<a id="remotecompaniesupdatecompany_0"></a>

Given an ID and a request object with new information, updates a company.

### Getting a company and its owner to `active` status<a id="getting-a-company-and-its-owner-to-active-status"></a>
If you created a company using the
[create a company endpoint](https://gateway.remote.com/v1/docs/openapi.html) without all the required
request body parameters, you can use this endpoint to provide the missing data. Once the company
and its owner have all the necessary data, both their statuses will be set to `active` and the company
onboarding will be marked as "completed".

The following constitutes a company with "all the necessary data":
* Complete `address`, with valid `address`, `postal_code`, `country` and `state` parameters (Varies by country. Use the
[show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html) to see which address parameters
are required).
* Company `tax_number` or `registration_number` is not nil
* Company `name` is not nil (already required when creating the company)
* Company has a `desired_currency` in their bank account (already required when creating the company)
* Company has accepted terms of service (already required when creating the company)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateCompany_0Response = await remote.companies.updateCompany_0({
  companyId: "companyId_example",
  country_code: "USA",
  desired_currency: "USD",
  name: "Tech Vision",
  phone_number: "+11123123456",
  tax_number: "123456789",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

Company ID

##### address_details: `object`<a id="address_details-object"></a>

Fields can vary depending on the country. Please, check the required fields structure using the [Show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html). Use the desired country and `address_details` as the form name for the placeholders. The response complies with the [JSON Schema](https://remote.com/resources/api/how-json-schemas-work) specification. 

##### bank_account_details: `object`<a id="bank_account_details-object"></a>

Fields can vary depending on the country. Please, check the required fields structure using the [Show form schema endpoint](https://gateway.remote.com/v1/docs/openapi.html). Use the desired country and `bank_account_details` as the form name for the placeholders. The response complies with the [JSON Schema](https://remote.com/resources/api/how-json-schemas-work) specification. 

##### country_code: `string`<a id="country_code-string"></a>

Country of company address

##### desired_currency: `string`<a id="desired_currency-string"></a>

Desired currency for invoicing and displaying converted salaries in Remote UI regardless of the employee\\\'s country.  This field is only accepted if company is in status `pending`. Please contact Remote if you wish to update it. 

##### name: `string`<a id="name-string"></a>

This field is only accepted if company is in status `pending`. Please contact Remote if you wish to update it. 

##### phone_number: `string`<a id="phone_number-string"></a>

A phone number the company can be contacted with.

##### registration_number: `string`<a id="registration_number-string"></a>

The company registration number. This field or tax_number (but not both) should be submitted.  This field is only accepted if company is in status `pending`. 

##### tax_number: `string`<a id="tax_number-string"></a>

  The tax identifier of the company. This field or registration_number (but not both) should be submitted.    This field is only accepted if company is in status `pending`. 

#### 🔄 Return<a id="🔄-return"></a>

[CompanyResponse](./models/company-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/companies/{company_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companyDepartment.createNewDepartment`<a id="remotecompanydepartmentcreatenewdepartment"></a>

Creates a new department in the specified company. Department names may be non-unique and must be non-empty with no more than 255 characters (Unicode code points).

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDepartmentResponse =
  await remote.companyDepartment.createNewDepartment({
    company_id: "669f9e18-889f-4c2c-95b8-67795a3113cc",
    name: "Marketing",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### company_id: `string`<a id="company_id-string"></a>

The Company ID. Required in all cases, whether the API credentials have access to multiple companies or just one.

##### name: `string`<a id="name-string"></a>

The name of the company department. May be non-unique and limited to 255 characters, maximum.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyDepartmentCreatedResponse](./models/company-department-created-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company-departments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companyDepartment.list`<a id="remotecompanydepartmentlist"></a>

Lists all departments for the authorized company specified in the request.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listResponse = await remote.companyDepartment.list({
  companyId: "companyId_example",
  page: 1,
  pageSize: 20,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

Company ID

##### paginate: `boolean`<a id="paginate-boolean"></a>

Paginate option. Default: true. When true, paginates response; otherwise, does not.

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Number of items per page

#### 🔄 Return<a id="🔄-return"></a>

[ListCompanyDepartmentsPaginatedResponse](./models/list-company-departments-paginated-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company-departments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companyManagers.createInvite`<a id="remotecompanymanagerscreateinvite"></a>

Create a Company Manager and sends the invitation email for signing in to the Remote Platform.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createInviteResponse = await remote.companyManagers.createInvite({
  email: "email_example",
  name: "name_example",
  role: "role_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### email: `string`<a id="email-string"></a>

The work email of the company manager

##### name: `string`<a id="name-string"></a>

The name of the company manager

##### role: `string`<a id="role-string"></a>

The role assigned for the new manager. The value should be one of the following:  - `admin`: an Admin can manage most of the resources in remote. - `onboarding_manager`: an Onboarding Manager can add, see and manage new hires. - `people_manager`: a People Manager can view employee profiles of the team members they manage and approve and decline time off and expenses for their employees. 

##### company_id: `string`<a id="company_id-string"></a>

The Company ID. Required if the access token can access multiple companies. Optional otherwise.

#### 🔄 Return<a id="🔄-return"></a>

[CompanyManagerData](./models/company-manager-data.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company-managers` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companyManagers.deleteUser`<a id="remotecompanymanagersdeleteuser"></a>

Deletes a Company Manager user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteUserResponse = await remote.companyManagers.deleteUser({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID

#### 🔄 Return<a id="🔄-return"></a>

[SuccessResponse](./models/success-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company-managers/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companyManagers.listManagers`<a id="remotecompanymanagerslistmanagers"></a>

List all company managers of an integration. If filtered by the company_id param,
it lists only company managers belonging to the specified company.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listManagersResponse = await remote.companyManagers.listManagers({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

A Company ID to filter the results (only applicable for Integration Partners).

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[CompanyManagersResponse](./models/company-managers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company-managers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.companyManagers.showUser`<a id="remotecompanymanagersshowuser"></a>

Shows a single company manager user

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showUserResponse = await remote.companyManagers.showUser({
  userId: "userId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userId: `string`<a id="userid-string"></a>

User ID

#### 🔄 Return<a id="🔄-return"></a>

[CompanyManagerResponse](./models/company-manager-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/company-managers/{user_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.contractAmendments.approveAmendment`<a id="remotecontractamendmentsapproveamendment"></a>

Approves a contract amendment request without the intervention of a Remote admin.
Approvals done via this endpoint are effective immediately,
regardless of the effective date entered on the contract amendment creation.

This endpoint is only available in Sandbox, otherwise it will respond with a 404.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const approveAmendmentResponse =
  await remote.contractAmendments.approveAmendment({
    contractAmendmentRequestId: "contractAmendmentRequestId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### contractAmendmentRequestId: `string`<a id="contractamendmentrequestid-string"></a>

Contract amendment request ID

#### 🔄 Return<a id="🔄-return"></a>

[ContractAmendmentResponse](./models/contract-amendment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/sandbox/contract-amendments/{contract_amendment_request_id}/approve` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.contractAmendments.checkAutomatability`<a id="remotecontractamendmentscheckautomatability"></a>

Check if a contract amendment request is automatable.
If the contract amendment request is automatable, then after submission, it will instantly amend the employee's contract
and send them an updated document.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Contract Amendments](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const checkAutomatabilityResponse =
  await remote.contractAmendments.checkAutomatability({
    amendment_contract_id: "c15993d8-aa8a-4fbb-b395-8b7a54f57db1",
    contract_amendment: {},
    employment_id: "e31adae1-company-id-af5fba7dd803",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amendment_contract_id: `string`<a id="amendment_contract_id-string"></a>

The contract ID of the contract that needs to be amended.

##### contract_amendment: `object`<a id="contract_amendment-object"></a>

Contract amendment informations. As its properties may vary depending on the country,                 you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code, `contract_amendment` and the employment ID as request body.

##### employment_id: `string`<a id="employment_id-string"></a>

The employment ID that is related to the contract amendment request.

#### 🔄 Return<a id="🔄-return"></a>

[ContractAmendmentAutomatableResponse](./models/contract-amendment-automatable-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contract-amendments/automatable` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.contractAmendments.createRequest`<a id="remotecontractamendmentscreaterequest"></a>

Creates a Contract Amendment request.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Contract Amendments](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRequestResponse = await remote.contractAmendments.createRequest({
  amendment_contract_id: "c15993d8-aa8a-4fbb-b395-8b7a54f57db1",
  contract_amendment: {},
  employment_id: "e31adae1-company-id-af5fba7dd803",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amendment_contract_id: `string`<a id="amendment_contract_id-string"></a>

The contract ID of the contract that needs to be amended.

##### contract_amendment: `object`<a id="contract_amendment-object"></a>

Contract amendment informations. As its properties may vary depending on the country,                 you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code, `contract_amendment` and the employment ID as request body.

##### employment_id: `string`<a id="employment_id-string"></a>

The employment ID that is related to the contract amendment request.

#### 🔄 Return<a id="🔄-return"></a>

[ContractAmendmentResponse](./models/contract-amendment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contract-amendments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.contractAmendments.getFormSchema`<a id="remotecontractamendmentsgetformschema"></a>

Returns the json schema of the `contract_amendment` form.
This endpoint requires a company access token, as forms are dependent on certain
properties of companies and their current employments.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFormSchemaResponse = await remote.contractAmendments.getFormSchema({
  country_code: "country_code_example",
  employment_id: "employment_id_example",
  form: "contract_amendment",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country_code: `string`<a id="country_code-string"></a>

Country code according to ISO 3-digit alphabetic codes.

##### employment_id: `string`<a id="employment_id-string"></a>

The ID of the employment concerned by the contract amendment request.

##### form: `string`<a id="form-string"></a>

Name of the desired form

#### 🔄 Return<a id="🔄-return"></a>

[ContractAmendmentFormResponse](./models/contract-amendment-form-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contract-amendments/schema` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.contractAmendments.listRequests`<a id="remotecontractamendmentslistrequests"></a>

List Contract Amendment requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRequestsResponse = await remote.contractAmendments.listRequests();
```

#### 🔄 Return<a id="🔄-return"></a>

[ListContractAmendmentResponse](./models/list-contract-amendment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contract-amendments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.contractAmendments.showSingleRequest`<a id="remotecontractamendmentsshowsinglerequest"></a>

Show a single Contract Amendment request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showSingleRequestResponse =
  await remote.contractAmendments.showSingleRequest({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Contract amendment request ID

#### 🔄 Return<a id="🔄-return"></a>

[ContractAmendmentResponse](./models/contract-amendment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/contract-amendments/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.costCalculator.createEmploymentEstimation`<a id="remotecostcalculatorcreateemploymentestimation"></a>

Creates a cost estimation of employments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmploymentEstimationResponse =
  await remote.costCalculator.createEmploymentEstimation({
    employer_currency_slug: "663e0b79-c893-45ff-a1b2-f6dcabc098b5",
    employments: [
      {
        employment_term: "fixed",
        region_slug: "region_slug_example",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employer_currency_slug: `string`<a id="employer_currency_slug-string"></a>

Currency Slug

##### employments: [`CostCalculatorEmploymentParam`](./models/cost-calculator-employment-param.ts)[]<a id="employments-costcalculatoremploymentparammodelscost-calculator-employment-paramts"></a>

##### include_benefits: `boolean`<a id="include_benefits-boolean"></a>

##### include_cost_breakdowns: `boolean`<a id="include_cost_breakdowns-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostCalculatorEstimateResponse](./models/cost-calculator-estimate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cost-calculator/estimation` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.costCalculator.generateEstimationPdf`<a id="remotecostcalculatorgenerateestimationpdf"></a>

Creates a cost estimation of employments

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const generateEstimationPdfResponse =
  await remote.costCalculator.generateEstimationPdf({
    employer_currency_slug: "663e0b79-c893-45ff-a1b2-f6dcabc098b5",
    employments: [
      {
        employment_term: "fixed",
        region_slug: "region_slug_example",
      },
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employer_currency_slug: `string`<a id="employer_currency_slug-string"></a>

Currency Slug

##### employments: [`CostCalculatorEmploymentParam`](./models/cost-calculator-employment-param.ts)[]<a id="employments-costcalculatoremploymentparammodelscost-calculator-employment-paramts"></a>

##### include_benefits: `boolean`<a id="include_benefits-boolean"></a>

##### include_cost_breakdowns: `boolean`<a id="include_cost_breakdowns-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[CostCalculatorEstimatePDFResponse](./models/cost-calculator-estimate-pdfresponse.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cost-calculator/estimation-pdf` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.costCalculator.listCountries`<a id="remotecostcalculatorlistcountries"></a>

Lists active and processing countries

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listCountriesResponse = await remote.costCalculator.listCountries();
```

#### 🔄 Return<a id="🔄-return"></a>

[CostCalculatorListCountryResponse](./models/cost-calculator-list-country-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cost-calculator/countries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.costCalculator.showRegionFields`<a id="remotecostcalculatorshowregionfields"></a>

Returns required fields JSON Schema for a given region. These are required in order to calculate
      the cost of employment for the region. These fields are based on employer contributions that are associated
      with the region or any of it's parent regions.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showRegionFieldsResponse = await remote.costCalculator.showRegionFields({
  slug: "slug_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### slug: `string`<a id="slug-string"></a>

Slug

#### 🔄 Return<a id="🔄-return"></a>

[JSONSchemaResponse](./models/jsonschema-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/cost-calculator/regions/{slug}/fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.countries.getFormSchema`<a id="remotecountriesgetformschema"></a>

Returns the json schema of a supported form. Possible form names are:
```
- address_details 
- administrative_details 
- bank_account_details 
- employment_basic_information 
- billing_address_details 
- contract_details 
- emergency_contact 
- employment_document_details 
- personal_details 
- pricing_plan_details 

```

This endpoint requires a company access token, as forms are dependent on certain
properties of companies and their current employments.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFormSchemaResponse = await remote.countries.getFormSchema({
  countryCode: "countryCode_example",
  form: "form_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### countryCode: `string`<a id="countrycode-string"></a>

Country code according to ISO 3-digit alphabetic codes

##### form: `string`<a id="form-string"></a>

Name of the desired form

##### employmentId: `string`<a id="employmentid-string"></a>

Required for `contract_amendment` form

#### 🔄 Return<a id="🔄-return"></a>

[CountryFormResponse](./models/country-form-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/countries/{country_code}/{form}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.countries.listAlphabetically`<a id="remotecountrieslistalphabetically"></a>

Returns a list of all countries that are supported by Remote API alphabetically ordered. The supported list accounts for creating employment with basic information and it does not imply fully onboarding employment via JSON Schema.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAlphabeticallyResponse = await remote.countries.listAlphabetically();
```

#### 🔄 Return<a id="🔄-return"></a>

[CountriesResponse](./models/countries-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/countries` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.countries.listHolidaysByYear`<a id="remotecountrieslistholidaysbyyear"></a>

List all holidays of a country for a specific year. Optionally, it can be filtered by country subdivision.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listHolidaysByYearResponse = await remote.countries.listHolidaysByYear({
  countryCode: "countryCode_example",
  year: "year_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### countryCode: `string`<a id="countrycode-string"></a>

Country code according to ISO 3166-1 3-digit alphabetic codes

##### year: `string`<a id="year-string"></a>

Year for the holidays

##### countrySubdivisionCode: `string`<a id="countrysubdivisioncode-string"></a>

Country subdivision code according to ISO 3166-2 codes

#### 🔄 Return<a id="🔄-return"></a>

[HolidaysResponse](./models/holidays-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/countries/{country_code}/holidays/{year}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.customFields.listDefinitions`<a id="remotecustomfieldslistdefinitions"></a>

Returns custom fields definitions

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listDefinitionsResponse = await remote.customFields.listDefinitions({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListEmploymentCustomFieldsResponse](./models/list-employment-custom-fields-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/custom-fields` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.customFields.showValue`<a id="remotecustomfieldsshowvalue"></a>

Returns a custom field value for a given employment

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showValueResponse = await remote.customFields.showValue({
  customFieldId: "customFieldId_example",
  employmentId: "employmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### customFieldId: `string`<a id="customfieldid-string"></a>

Custom field ID

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentCustomFieldValueResponse](./models/employment-custom-field-value-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/custom-fields/{custom_field_id}/values/{employment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employmentContracts.getPendingChanges`<a id="remoteemploymentcontractsgetpendingchanges"></a>

Get all the pending changes (waiting for aproval or signature) for the employment contract.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getPendingChangesResponse =
  await remote.employmentContracts.getPendingChanges({
    employmentId: "employmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentContractPendingChangesResponse](./models/employment-contract-pending-changes-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employment-contracts/{employment_id}/pending-changes` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.completeOnboarding`<a id="remoteemploymentscompleteonboarding"></a>

Completes the employee onboarding. When all tasks are completed, the employee is marked as in `review` status

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const completeOnboardingResponse = await remote.employments.completeOnboarding(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employment_id: `string`<a id="employment_id-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponse](./models/employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/ready` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.createEmployment`<a id="remoteemploymentscreateemployment"></a>

Creates an employment. We support creating employees and contractors.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Countries](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmploymentResponse = await remote.employments.createEmployment({
  country_code: "AUS",
  full_name: "Jane Smith",
  job_title: "Engineer",
  personal_email: "jane@smith.com",
  provisional_start_date: "2022-07-10",
  type: "employee",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country_code: `string`<a id="country_code-string"></a>

##### full_name: `string`<a id="full_name-string"></a>

##### job_title: `string`<a id="job_title-string"></a>

##### personal_email: `string`<a id="personal_email-string"></a>

##### basic_information: `object`<a id="basic_information-object"></a>

Employment basic information. When using this field, the same other root level fields (name, personal_email, job_title, provisional_start_date, and seniority_date) will be ignored. Its properties may vary depending on the country, you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint passing the country code and `employment_basic_information` as path parameters. 

##### company_id: `string`<a id="company_id-string"></a>

This optional field is deprecated.

##### type: `string`<a id="type-string"></a>

If not provided, it will default to `employee`.

##### provisional_start_date: `string`<a id="provisional_start_date-string"></a>

Indicates the expected start date of the employee or contractor.  Required for employees, but optional for contractors. Date format is in ISO8601 without the time component.  See the **Date and Time Format** documentation for more details on how the Remote API works with dates. 

##### seniority_date: `string`<a id="seniority_date-string"></a>

The date the employee first started working for your company. If you don’t include a seniority date, the employee’s start date with Remote will be deemed as the start of the employee’s seniority.  **Example**: Your employee started working for your company on Feb 1, 2022. On Aug 1, 2022, you transferred the employee to Remote and started managing them on the platform. Feb 1, 2022 would be their seniority date. Aug 1, 2022 would be their starting date. 

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentCreationResponse](./models/employment-creation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.getEmploymentInfo`<a id="remoteemploymentsgetemploymentinfo"></a>

Shows all the information of an employment.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Countries](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getEmploymentInfoResponse = await remote.employments.getEmploymentInfo({
  employmentId: "employmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponse](./models/employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employments/{employment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.inviteStartEnrollment`<a id="remoteemploymentsinvitestartenrollment"></a>

Invite an employment to start the self-enrollment.

Requirements for the invitation to succeed:

* Employment needs to have the following JSON Schema forms filled: `contract_details` and `pricing_plan_details`
* `provisional_start_date` must consider the minimum onbaording time of the employment's country

If there are validations errors, they are returned with a Conflict HTTP Status (409) and a descriptive message.
HTTP Status OK (200) is returned in case of success.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const inviteStartEnrollmentResponse =
  await remote.employments.inviteStartEnrollment({
    employmentId: "employmentId_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

#### 🔄 Return<a id="🔄-return"></a>

[SuccessResponse](./models/success-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employments/{employment_id}/invite` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.listAll`<a id="remoteemploymentslistall"></a>

Lists all employments, except for the deleted ones.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Countries](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.



#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await remote.employments.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### companyId: `string`<a id="companyid-string"></a>

Company ID

##### email: `string`<a id="email-string"></a>

Filters the results by employments whose login email matches the value

##### status: `string`<a id="status-string"></a>

Filters the results by employments whose status matches the value

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListEmploymentsResponse](./models/list-employments-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employments` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.updateData`<a id="remoteemploymentsupdatedata"></a>

Updates an employment.

**For `created` employments:** You can change all basic params and onboarding tasks or perform a per onboarding task update. You can also update basic_information.

**For `active` employments:** You can update the manager (`manager_id` field), emergency_contact_details and address_details.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Countries](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.


#### Automatically inviting an employee<a id="automatically-inviting-an-employee"></a>

When you submit the `contract_details` and `pricing_plan_details`, Remote should have all the required data to automatically
send an invite to the employee. You can tell if an automatic invite has been sent by looking at the `employment_lifecycle_stage`
field value. If its value is `employee_self_enrollment`, it means the employee has received an email to join the Remote platform
at their `personal_email`.

After an automatic invite is sent to an employee, **you will not be able to update employment data through the Remote API**.
After onboarding, only a limited set of employment data will be available for updates, such as `emergency_contact_details`.
If you want to provide additional information for an employment, please make sure to do so **before** the employee is invited.
We block updates to some employment data because employees need to agree to amendments in certain cases,
such as when there are changes to their contract_details.
Currently, these amendments can only be done through the Remote UI.

Please contact Remote if you need to update contractors via API since it's currently not supported.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDataResponse = await remote.employments.updateData({
  employmentId: "employmentId_example",
  company_id: "e31adae1-company-id-af5fba7dd803",
  country_code: "AUS",
  department_id: "3bb56f01-3243-412b-bfaa-a5cfaaf2e431",
  full_name: "Jane Smith",
  job_title: "Backend Engineer",
  manager: "Taylor Johnson",
  personal_email: "jane@smith.com",
  provisional_start_date: "2021-07-03",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### full_name: `string`<a id="full_name-string"></a>

##### job_title: `string`<a id="job_title-string"></a>

##### personal_email: `string`<a id="personal_email-string"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

##### address_details: `object`<a id="address_details-object"></a>

Home address information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `address_details` as path parameters.

##### administrative_details: `object`<a id="administrative_details-object"></a>

Administrative information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `administrative_details` as path parameters.

##### bank_account_details: `object`<a id="bank_account_details-object"></a>

Bank account information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `bank_account_details` as path parameters.

##### billing_address_details: `object`<a id="billing_address_details-object"></a>

Billing address information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `billing_address_details` as path parameters.

##### company_id: `string`<a id="company_id-string"></a>

##### contract_details: `object`<a id="contract_details-object"></a>

Contract information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `contract_details` as path parameters.

##### country: [`Country`](./models/country.ts)<a id="country-countrymodelscountryts"></a>

##### emergency_contact_details: `object`<a id="emergency_contact_details-object"></a>

Emergency contact information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `emergency_contact_details` as path parameters.

##### manager_id: `string`<a id="manager_id-string"></a>

The user id of the manager, who should have an `admin`, `owner` or `people_manager` role. You can find these users by querying the [Company Managers endpoint](https://gateway.remote.com/v1/docs/openapi.html). **Update of this field is only available for active employments.** 

##### personal_details: `object`<a id="personal_details-object"></a>

Personal details information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `personal_details` as path parameters.

##### pricing_plan_details: [`PricingPlanDetails`](./models/pricing-plan-details.ts)<a id="pricing_plan_details-pricingplandetailsmodelspricing-plan-detailsts"></a>

##### provisional_start_date: `string`<a id="provisional_start_date-string"></a>

Indicates the expected start date of the employee or contractor.  Required for employees, but optional for contractors. Date format is in ISO8601 without the time component.  See the **Date and Time Format** documentation for more details on how the Remote API works with dates. 

##### seniority_date: `string`<a id="seniority_date-string"></a>

The date the employee first started working for your company. If you don’t include a seniority date, the employee’s start date with Remote will be deemed as the start of the employee’s seniority.  **Example**: Your employee started working for your company on Feb 1, 2022. On Aug 1, 2022, you transferred the employee to Remote and started managing them on the platform. Feb 1, 2022 would be their seniority date. Aug 1, 2022 would be their starting date. 

##### basic_information: `object`<a id="basic_information-object"></a>

Employment basic information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `employment_basic_information` as path parameters.

##### department_id: `string`<a id="department_id-string"></a>

The department of the employment. The department must belong to the same company as the employment. 

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponse](./models/employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employments/{employment_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.employments.updateDetails`<a id="remoteemploymentsupdatedetails"></a>

Updates an employment.

**For `created` employments:** You can change all basic params and onboarding tasks or perform a per onboarding task update. You can also update basic_information.

**For `active` employments:** You can update the manager (`manager_id` field), emergency_contact_details and address_details.

This endpoint requires and returns country-specific data. The exact required and returned fields will
vary depending on which country the employment is in. To see the list of parameters for each country,
see the **Show form schema** endpoint under the [Countries](https://gateway.remote.com/v1/docs/openapi.html) category.

Please note that the compliance requirements for each country are subject to change according to local
laws. Given its continual updates, using Remote's [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) should be considered in order to avoid
compliance issues and to have the latest version of a country requirements.

If you are using this endpoint to build an integration, make sure you are dynamically collecting or
displaying the latest parameters for each country by querying the _"Show form schema"_ endpoint.

For more information on JSON Schemas, see the **How JSON Schemas work** documentation.

To learn how you can dynamically generate forms to display in your UI, see the documentation for
the [json-schema-form](https://remote.com/resources/api/how-json-schemas-work) tool.


#### Automatically inviting an employee<a id="automatically-inviting-an-employee"></a>

When you submit the `contract_details` and `pricing_plan_details`, Remote should have all the required data to automatically
send an invite to the employee. You can tell if an automatic invite has been sent by looking at the `employment_lifecycle_stage`
field value. If its value is `employee_self_enrollment`, it means the employee has received an email to join the Remote platform
at their `personal_email`.

After an automatic invite is sent to an employee, **you will not be able to update employment data through the Remote API**.
After onboarding, only a limited set of employment data will be available for updates, such as `emergency_contact_details`.
If you want to provide additional information for an employment, please make sure to do so **before** the employee is invited.
We block updates to some employment data because employees need to agree to amendments in certain cases,
such as when there are changes to their contract_details.
Currently, these amendments can only be done through the Remote UI.

Please contact Remote if you need to update contractors via API since it's currently not supported.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateDetailsResponse = await remote.employments.updateDetails({
  employmentId: "employmentId_example",
  company_id: "e31adae1-company-id-af5fba7dd803",
  country_code: "AUS",
  department_id: "3bb56f01-3243-412b-bfaa-a5cfaaf2e431",
  full_name: "Jane Smith",
  job_title: "Backend Engineer",
  manager: "Taylor Johnson",
  personal_email: "jane@smith.com",
  provisional_start_date: "2021-07-03",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### full_name: `string`<a id="full_name-string"></a>

##### job_title: `string`<a id="job_title-string"></a>

##### personal_email: `string`<a id="personal_email-string"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

##### address_details: `object`<a id="address_details-object"></a>

Home address information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `address_details` as path parameters.

##### administrative_details: `object`<a id="administrative_details-object"></a>

Administrative information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `administrative_details` as path parameters.

##### bank_account_details: `object`<a id="bank_account_details-object"></a>

Bank account information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `bank_account_details` as path parameters.

##### billing_address_details: `object`<a id="billing_address_details-object"></a>

Billing address information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `billing_address_details` as path parameters.

##### company_id: `string`<a id="company_id-string"></a>

##### contract_details: `object`<a id="contract_details-object"></a>

Contract information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `contract_details` as path parameters.

##### country: [`Country`](./models/country.ts)<a id="country-countrymodelscountryts"></a>

##### emergency_contact_details: `object`<a id="emergency_contact_details-object"></a>

Emergency contact information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `emergency_contact_details` as path parameters.

##### manager_id: `string`<a id="manager_id-string"></a>

The user id of the manager, who should have an `admin`, `owner` or `people_manager` role. You can find these users by querying the [Company Managers endpoint](https://gateway.remote.com/v1/docs/openapi.html). **Update of this field is only available for active employments.** 

##### personal_details: `object`<a id="personal_details-object"></a>

Personal details information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `personal_details` as path parameters.

##### pricing_plan_details: [`PricingPlanDetails`](./models/pricing-plan-details.ts)<a id="pricing_plan_details-pricingplandetailsmodelspricing-plan-detailsts"></a>

##### provisional_start_date: `string`<a id="provisional_start_date-string"></a>

Indicates the expected start date of the employee or contractor.  Required for employees, but optional for contractors. Date format is in ISO8601 without the time component.  See the **Date and Time Format** documentation for more details on how the Remote API works with dates. 

##### seniority_date: `string`<a id="seniority_date-string"></a>

The date the employee first started working for your company. If you don’t include a seniority date, the employee’s start date with Remote will be deemed as the start of the employee’s seniority.  **Example**: Your employee started working for your company on Feb 1, 2022. On Aug 1, 2022, you transferred the employee to Remote and started managing them on the platform. Feb 1, 2022 would be their seniority date. Aug 1, 2022 would be their starting date. 

##### basic_information: `object`<a id="basic_information-object"></a>

Employment basic information. As its properties may vary depending on the country,                you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint             passing the country code and `employment_basic_information` as path parameters.

##### department_id: `string`<a id="department_id-string"></a>

The department of the employment. The department must belong to the same company as the employment. 

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponse](./models/employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/employments/{employment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.createApprovedExpense`<a id="remoteexpensescreateapprovedexpense"></a>

Creates an **approved** expense

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createApprovedExpenseResponse =
  await remote.expenses.createApprovedExpense({
    title: "new keyboard",
    amount: 8000,
    category: "home_office",
    currency: "EUR",
    employment_id: "d4ebc714-4950-47a9-a464-28e1f1ab2a90",
    expense_date: "2020-12-11",
    reviewer_id: "14c14128-f5f4-475a-8ec0-6329b4832a61",
    tax_amount: 0,
    timezone: "Etc/UTC",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### title: `string`<a id="title-string"></a>

##### amount: `number`<a id="amount-number"></a>

##### currency: `string`<a id="currency-string"></a>

  The three-letter code for the expense currency.<br/>   Examples: `\\\"USD\\\"`, `\\\"EUR\\\"`, `\\\"CAD\\\"` 

##### employment_id: `string`<a id="employment_id-string"></a>

The ID for the employment to which this expense relates.

##### expense_date: `string`<a id="expense_date-string"></a>

Date of the purchase, which must be in the past

##### category: `string`<a id="category-string"></a>

Categories allowed for an expense

##### receipt: [`Base64File`](./models/base64-file.ts)<a id="receipt-base64filemodelsbase64-filets"></a>

##### receipts: [`Base64File`](./models/base64-file.ts)[]<a id="receipts-base64filemodelsbase64-filets"></a>

##### reviewed_at: `string`<a id="reviewed_at-string"></a>

The date and time that the expense was reviewed in ISO8601 format. If not provided, it defaults to the current datetime.

##### reviewer_id: `string`<a id="reviewer_id-string"></a>

If the person reviewing the expense is a user in Remote, you can provide its user id for this field. If a value is not provided, defaults to the user that generated the API token.

##### tax_amount: `number`<a id="tax_amount-number"></a>

##### timezone: `string`<a id="timezone-string"></a>

[TZ identifier](https://www.iana.org/time-zones)

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseResponse](./models/expense-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.downloadReceipt`<a id="remoteexpensesdownloadreceipt"></a>

  Downloads an expense receipt.

  Deprecated since late February 2024 in favour of **[Download a receipt by id](https://gateway.remote.com/v1/docs/openapi.html)** endpoint.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadReceiptResponse = await remote.expenses.downloadReceipt({
  expenseId: "expenseId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseId: `string`<a id="expenseid-string"></a>

The expense ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{expense_id}/receipt` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.downloadReceiptById`<a id="remoteexpensesdownloadreceiptbyid"></a>

Download a receipt by id.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadReceiptByIdResponse = await remote.expenses.downloadReceiptById({
  expenseId: "expenseId_example",
  receiptId: "receiptId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### expenseId: `string`<a id="expenseid-string"></a>

The expense ID

##### receiptId: `string`<a id="receiptid-string"></a>

The receipt ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{expense_id}/receipts/{receipt_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.listRecords`<a id="remoteexpenseslistrecords"></a>

Lists all expenses records

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRecordsResponse = await remote.expenses.listRecords({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListExpenseResponse](./models/list-expense-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.showRecord`<a id="remoteexpensesshowrecord"></a>

Shows a single expense record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showRecordResponse = await remote.expenses.showRecord({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Expense ID

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseResponse](./models/expense-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.updateExpense`<a id="remoteexpensesupdateexpense"></a>

Updates an expense

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateExpenseResponse = await remote.expenses.updateExpense({
  id: "id_example",
  reason: "Expense not refundable",
  status: "declined",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Expense ID

##### status: `string`<a id="status-string"></a>

##### reason: `string`<a id="reason-string"></a>

Reason for declination.

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseResponse](./models/expense-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.expenses.updateRecord`<a id="remoteexpensesupdaterecord"></a>

Updates an expense

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecordResponse = await remote.expenses.updateRecord({
  id: "id_example",
  reason: "Expense not refundable",
  status: "declined",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Expense ID

##### status: `string`<a id="status-string"></a>

##### reason: `string`<a id="reason-string"></a>

Reason for declination.

#### 🔄 Return<a id="🔄-return"></a>

[ExpenseResponse](./models/expense-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/expenses/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.files.downloadFile`<a id="remotefilesdownloadfile"></a>

Downloads a file.

Please contact api-support@remote.com to request access to this endpoint.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadFileResponse = await remote.files.downloadFile({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

File ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/files/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.files.uploadEmploymentFile`<a id="remotefilesuploademploymentfile"></a>

Uploads a file associated with a specified employment.

Please contact api-support@remote.com to request access to this endpoint.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const uploadEmploymentFileResponse = await remote.files.uploadEmploymentFile({
  employment_id: "employment_id_example",
  file: fs.readFileSync("/path/to/file"),
  type: "type_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

##### file: `Uint8Array | File | buffer.File`<a id="file-uint8array--file--bufferfile"></a>

##### type: `string`<a id="type-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[FileResponse](./models/file-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/documents` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.identity.getTokenInfo`<a id="remoteidentitygettokeninfo"></a>

Shows information about the entities that can be controlled by the current auth token.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTokenInfoResponse = await remote.identity.getTokenInfo();
```

#### 🔄 Return<a id="🔄-return"></a>

[IdentityCurrentResponse](./models/identity-current-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/identity/current` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.incentives.createIncentive`<a id="remoteincentivescreateincentive"></a>

Creates an Incentive.

Incentives use the currency of the employment specified provided in the `employment_id` field.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createIncentiveResponse = await remote.incentives.createIncentive({
  amount: 50000,
  amount_tax_type: "net",
  effective_date: "2021-12-20",
  employment_id: "5e55386e-4f4f-4def-92f4-bdc19a5ce77d",
  note: "Bonus for moving start date to an earlier date",
  type: "signing_bonus",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount (in the currency of the employment) to be given to the employee.  This field accepts fractional amounts as well. However to avoid precision issues and errors that can arise from storing fractional amounts, the Remote API only accepts currencies and their fractional amounts as integers. This means you should append fractional amounts to the end of the amount you\\\'re passing in with this field.  For example, if the incentive you\\\'re offering is EUR 500.25, you would specify `50025` as the amount for this field. 

##### amount_tax_type: [`AmountTaxType`](./models/amount-tax-type.ts)<a id="amount_tax_type-amounttaxtypemodelsamount-tax-typets"></a>

  Whether the amount given accounts for taxes or not.    `gross` indicates that the amount given is the amount to be paid before taxes   are subtracted.    `net` indicates that the amount given is the amount which will be paid to the   employee after taxes. Remote will gross this up to ensure the taxes are   included and employee receives the amount requested without further reduction. 

##### effective_date: `string`<a id="effective_date-string"></a>

The date at which the incentive should take effect.  Note that the incentive is not paid out on the effective date, but during the next payroll cycle. The effective date determines which payroll cycle the incentive will be paid out in.  The effective date needs to be today or a future date.  Note for recurring incentives: since the months don\\\'t have the same amount of days, if day of month of `effective_date` is one of [28, 29, 30, 31] it will be transformed to the last day of each month, avoiding the possibility of skipping a month in the recurrence. 

##### employment_id: `string`<a id="employment_id-string"></a>

##### type: `string`<a id="type-string"></a>

##### note: `string`<a id="note-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[IncentiveResponse](./models/incentive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.incentives.listAll`<a id="remoteincentiveslistall"></a>

Lists all Incentives of a company

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await remote.incentives.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Filter by Employment ID

##### status: `string`<a id="status-string"></a>

Filter by Incentive status

##### recurringIncentiveId: `string`<a id="recurringincentiveid-string"></a>

Filter by Recurring Incentive id

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListIncentivesResponse](./models/list-incentives-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.incentives.removeIncentive`<a id="remoteincentivesremoveincentive"></a>

Delete an incentive.

`one_time` incentives that have the following status **CANNOT** be deleted:
* `processing`
* `paid`


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeIncentiveResponse = await remote.incentives.removeIncentive({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Incentive ID

#### 🔄 Return<a id="🔄-return"></a>

[SuccessResponse](./models/success-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.incentives.showDetails`<a id="remoteincentivesshowdetails"></a>

Show an Incentive's details

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showDetailsResponse = await remote.incentives.showDetails({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Incentive ID

#### 🔄 Return<a id="🔄-return"></a>

[IncentiveResponse](./models/incentive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.incentives.updateIncentive`<a id="remoteincentivesupdateincentive"></a>

Updates an Incentive.

Incentives use the currency of the employment specified provided in the `employment_id` field.

The API doesn't support updating paid incentives.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIncentiveResponse = await remote.incentives.updateIncentive({
  id: "id_example",
  amount: 50000,
  amount_tax_type: "net",
  effective_date: "2021-12-20",
  note: "Bonus for moving start date to an earlier date",
  type: "signing_bonus",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Incentive ID

##### amount: `number`<a id="amount-number"></a>

The amount (in the currency of the employment) to be given to the employee.  This field accepts fractional amounts as well. However to avoid precision issues and errors that can arise from storing fractional amounts, the Remote API only accepts currencies and their fractional amounts as integers. This means you should append fractional amounts to the end of the amount you\\\'re passing in with this field.  For example, if the incentive you\\\'re offering is EUR 500.25, you would specify `50025` as the amount for this field. 

##### amount_tax_type: [`AmountTaxType`](./models/amount-tax-type.ts)<a id="amount_tax_type-amounttaxtypemodelsamount-tax-typets"></a>

  Whether the amount given accounts for taxes or not.    `gross` indicates that the amount given is the amount to be paid before taxes   are subtracted.    `net` indicates that the amount given is the amount which will be paid to the   employee after taxes. Remote will gross this up to ensure the taxes are   included and employee receives the amount requested without further reduction. 

##### effective_date: `string`<a id="effective_date-string"></a>

The date at which the incentive should take effect.  Note that the incentive is not paid out on the effective date, but during the next payroll cycle. The effective date determines which payroll cycle the incentive will be paid out in.  The effective date needs to be today or a future date.  Note for recurring incentives: since the months don\\\'t have the same amount of days, if day of month of `effective_date` is one of [28, 29, 30, 31] it will be transformed to the last day of each month, avoiding the possibility of skipping a month in the recurrence. 

##### note: `string`<a id="note-string"></a>

##### type: `string`<a id="type-string"></a>

A valid type according to the payment frequency

#### 🔄 Return<a id="🔄-return"></a>

[IncentiveResponse](./models/incentive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.incentives.updateIncentive_0`<a id="remoteincentivesupdateincentive_0"></a>

Updates an Incentive.

Incentives use the currency of the employment specified provided in the `employment_id` field.

The API doesn't support updating paid incentives.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateIncentive_0Response = await remote.incentives.updateIncentive_0({
  id: "id_example",
  amount: 50000,
  amount_tax_type: "net",
  effective_date: "2021-12-20",
  note: "Bonus for moving start date to an earlier date",
  type: "signing_bonus",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Incentive ID

##### amount: `number`<a id="amount-number"></a>

The amount (in the currency of the employment) to be given to the employee.  This field accepts fractional amounts as well. However to avoid precision issues and errors that can arise from storing fractional amounts, the Remote API only accepts currencies and their fractional amounts as integers. This means you should append fractional amounts to the end of the amount you\\\'re passing in with this field.  For example, if the incentive you\\\'re offering is EUR 500.25, you would specify `50025` as the amount for this field. 

##### amount_tax_type: [`AmountTaxType`](./models/amount-tax-type.ts)<a id="amount_tax_type-amounttaxtypemodelsamount-tax-typets"></a>

  Whether the amount given accounts for taxes or not.    `gross` indicates that the amount given is the amount to be paid before taxes   are subtracted.    `net` indicates that the amount given is the amount which will be paid to the   employee after taxes. Remote will gross this up to ensure the taxes are   included and employee receives the amount requested without further reduction. 

##### effective_date: `string`<a id="effective_date-string"></a>

The date at which the incentive should take effect.  Note that the incentive is not paid out on the effective date, but during the next payroll cycle. The effective date determines which payroll cycle the incentive will be paid out in.  The effective date needs to be today or a future date.  Note for recurring incentives: since the months don\\\'t have the same amount of days, if day of month of `effective_date` is one of [28, 29, 30, 31] it will be transformed to the last day of each month, avoiding the possibility of skipping a month in the recurrence. 

##### note: `string`<a id="note-string"></a>

##### type: `string`<a id="type-string"></a>

A valid type according to the payment frequency

#### 🔄 Return<a id="🔄-return"></a>

[IncentiveResponse](./models/incentive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.oAuth2.exchangeToken`<a id="remoteoauth2exchangetoken"></a>

Endpoint to exchange tokens in the Authorization Code, Client Credentials and Refresh Token flows

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const exchangeTokenResponse = await remote.oAuth2.exchangeToken({
  code: "eyJhbG...xb6H0",
  grant_type: "authorization_code",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### code: `string`<a id="code-string"></a>

The authorization code generated in Authorization Code flow

##### grant_type: `string`<a id="grant_type-string"></a>

The Authorization flow

##### client_id: `string`<a id="client_id-string"></a>

The client id generated during registration

##### refresh_token: `string`<a id="refresh_token-string"></a>

The refresh token generated in the Authorization Code flow

#### 🔄 Return<a id="🔄-return"></a>

[OAuth2Tokens](./models/oauth2-tokens.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/auth/oauth2/token` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.offboarding.createRequest`<a id="remoteoffboardingcreaterequest"></a>

Creates an Offboarding request.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createRequestResponse = await remote.offboarding.createRequest({
  employment_id: "5e55386e-4f4f-4def-92f4-bdc19a5ce77d",
  termination_details: {
    additional_comments: "additional comments regarding the termination reason",
    confidential: false,
    proposed_termination_date: "Tue Dec 19 16:00:00 PST 2023",
    reason_description: "termination reason",
    risk_assessment_reasons: ["caring_responsibilities"],
    termination_reason: "workforce_reduction",
    will_challenge_termination: true,
    will_challenge_termination_description:
      "additional details for the offboarding risk assessment",
  },
  type: "termination",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employment_id: `string`<a id="employment_id-string"></a>

##### termination_details: [`TerminationDetailsParams`](./models/termination-details-params.ts)<a id="termination_details-terminationdetailsparamsmodelstermination-details-paramsts"></a>

##### type: `string`<a id="type-string"></a>

The type of the offboarding request. For now, only `termination` is allowed.

#### 🔄 Return<a id="🔄-return"></a>

[OffboardingResponse](./models/offboarding-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/offboardings` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.offboarding.listRequests`<a id="remoteoffboardinglistrequests"></a>

Lists Offboarding requests.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRequestsResponse = await remote.offboarding.listRequests({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Filter by Employment ID

##### type: `string`<a id="type-string"></a>

Filter by offboarding type

##### includeConfidential: `string`<a id="includeconfidential-string"></a>

By default, the results do not include confidential termination requests. Send `include_confidential=true` to include confidential requests in the response. 

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListOffboardingResponse](./models/list-offboarding-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/offboardings` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.offboarding.showRequest`<a id="remoteoffboardingshowrequest"></a>

Shows an Offboarding request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showRequestResponse = await remote.offboarding.showRequest({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Offboarding request ID

#### 🔄 Return<a id="🔄-return"></a>

[OffboardingResponse](./models/offboarding-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/offboardings/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.payslips.downloadPdf`<a id="remotepayslipsdownloadpdf"></a>

Given a Payslip ID, downloads a payslip.
It is important to note that each country has a different payslip format and they are not authored by Remote.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadPdfResponse = await remote.payslips.downloadPdf({
  payslipId: "payslipId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### payslipId: `string`<a id="payslipid-string"></a>

Payslip ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/payslips/{payslip_id}/pdf` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.payslips.listAll`<a id="remotepayslipslistall"></a>

Lists all payslips belonging to a company. Can also filter for a single employment belonging
to that company.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listAllResponse = await remote.payslips.listAll({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

##### startDate: `string`<a id="startdate-string"></a>

Filters by payslips `issued_at` field, after or on the same day than the given date

##### endDate: `string`<a id="enddate-string"></a>

Filters by payslips `issued_at` field, before or or the same day than the given date

##### expectedPayoutStartDate: `string`<a id="expectedpayoutstartdate-string"></a>

Filters by payslips `expected_payout_date` field, after or on the same day than the given date

##### expectedPayoutEndDate: `string`<a id="expectedpayoutenddate-string"></a>

Filters by payslips `expected_payout_date` field, before or or the same day than the given date

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListPayslipsResponse](./models/list-payslips-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/payslips` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.payslips.showPayslip`<a id="remotepayslipsshowpayslip"></a>

Given an ID, shows a payslip.

Please contact api-support@remote.com to request access to this endpoint.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showPayslipResponse = await remote.payslips.showPayslip({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Payslip ID

#### 🔄 Return<a id="🔄-return"></a>

[PayslipResponse](./models/payslip-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/payslips/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.recurringIncentives.createMonthlyIncentive`<a id="remoterecurringincentivescreatemonthlyincentive"></a>

Create a Recurring Incentive, that is, a monthly paid incentive.

Incentives use the currency of the employment specified provided in the `employment_id` field.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createMonthlyIncentiveResponse =
  await remote.recurringIncentives.createMonthlyIncentive({
    amount: 50000,
    amount_tax_type: "net",
    duration_in_months: 3,
    effective_date: "2021-12-20",
    employment_id: "5e55386e-4f4f-4def-92f4-bdc19a5ce77d",
    note: "Bonus for moving start date to an earlier date",
    type: "meal_allowance",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### amount: `number`<a id="amount-number"></a>

The amount (in the currency of the employment) to be given to the employee.  This field accepts fractional amounts as well. However to avoid precision issues and errors that can arise from storing fractional amounts, the Remote API only accepts currencies and their fractional amounts as integers. This means you should append fractional amounts to the end of the amount you\\\'re passing in with this field.  For example, if the incentive you\\\'re offering is EUR 500.25, you would specify `50025` as the amount for this field. 

##### amount_tax_type: [`AmountTaxType`](./models/amount-tax-type.ts)<a id="amount_tax_type-amounttaxtypemodelsamount-tax-typets"></a>

  Whether the amount given accounts for taxes or not.    `gross` indicates that the amount given is the amount to be paid before taxes   are subtracted.    `net` indicates that the amount given is the amount which will be paid to the   employee after taxes. Remote will gross this up to ensure the taxes are   included and employee receives the amount requested without further reduction. 

##### effective_date: `string`<a id="effective_date-string"></a>

The date at which the incentive should take effect.  Note that the incentive is not paid out on the effective date, but during the next payroll cycle. The effective date determines which payroll cycle the incentive will be paid out in.  The effective date needs to be today or a future date.  Note for recurring incentives: since the months don\\\'t have the same amount of days, if day of month of `effective_date` is one of [28, 29, 30, 31] it will be transformed to the last day of each month, avoiding the possibility of skipping a month in the recurrence. 

##### employment_id: `string`<a id="employment_id-string"></a>

##### type: `string`<a id="type-string"></a>

##### note: `string`<a id="note-string"></a>

##### duration_in_months: `number`<a id="duration_in_months-number"></a>

How many times the payment will repeat. At the moment we only fully support monthly frequency.  This field is only necessary if the recurring incentive has an end date. 

#### 🔄 Return<a id="🔄-return"></a>

[RecurringIncentiveResponse](./models/recurring-incentive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/recurring` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.recurringIncentives.deleteScheduled`<a id="remoterecurringincentivesdeletescheduled"></a>

Delete a Recurring Incentive, that is, a monthly paid incentive.

Internally, Remote schedules upcoming incentives. As such, when you attempt to
delete a recurring incentive, Remote will **ONLY** delete scheduled incentives
with the `pending` status.

Incentives payments that are already scheduled and cannot be deleted will be
included in the response, in case you need to reference them.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteScheduledResponse =
  await remote.recurringIncentives.deleteScheduled({
    id: "id_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Recurring Incentive ID

#### 🔄 Return<a id="🔄-return"></a>

[DeleteRecurringIncentiveResponse](./models/delete-recurring-incentive-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/recurring/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.recurringIncentives.listIncentives`<a id="remoterecurringincentiveslistincentives"></a>

List all Recurring Incentives of a company.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listIncentivesResponse = await remote.recurringIncentives.listIncentives(
  {}
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### status: `string`<a id="status-string"></a>

Filter by recurring incentive status: active or deactive.

##### type: `string`<a id="type-string"></a>

Filter by recurring incentive type.

##### note: `string`<a id="note-string"></a>

Filter by recurring incentives that contain the value in their notes.

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Change the amount of records returned per page, defaults to 20, limited to 100

#### 🔄 Return<a id="🔄-return"></a>

[ListRecurringIncentivesResponse](./models/list-recurring-incentives-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/incentives/recurring` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.resignation.downloadLetter`<a id="remoteresignationdownloadletter"></a>

Downloads a resignation letter from an employment request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const downloadLetterResponse = await remote.resignation.downloadLetter({
  employmentRequestId: "employmentRequestId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentRequestId: `string`<a id="employmentrequestid-string"></a>

The employment request ID

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/resignations/{employment_request_id}/resignation-letter` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.sandbox.createEmploymentWithoutValidations`<a id="remotesandboxcreateemploymentwithoutvalidations"></a>

Creates an employment without provisional_start_date validation.

This endpoint is only available in Sandbox and allows creating employments which
`provisional_start_date` is in the past. This is especially helpful for:
  * Testing the Timeoff Balance endpoints
  * Testing the Offboarding endpoints
  * Testing features around probation periods

This endpoint will respond with a 404 outside of the Sandbox environment.

For creating an employment's parameters outside of testing purposes, use [this
Employment create endpoint](https://gateway.remote.com/v1/docs/openapi.html)


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createEmploymentWithoutValidationsResponse =
  await remote.sandbox.createEmploymentWithoutValidations({
    country_code: "AUS",
    full_name: "Jane Smith",
    job_title: "Engineer",
    personal_email: "jane@smith.com",
    provisional_start_date: "2022-07-10",
    type: "employee",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### country_code: `string`<a id="country_code-string"></a>

##### full_name: `string`<a id="full_name-string"></a>

##### job_title: `string`<a id="job_title-string"></a>

##### personal_email: `string`<a id="personal_email-string"></a>

##### basic_information: `object`<a id="basic_information-object"></a>

Employment basic information. When using this field, the same other root level fields (name, personal_email, job_title, provisional_start_date, and seniority_date) will be ignored. Its properties may vary depending on the country, you must query the [Show form schema](https://gateway.remote.com/v1/docs/openapi.html) endpoint passing the country code and `employment_basic_information` as path parameters. 

##### company_id: `string`<a id="company_id-string"></a>

This optional field is deprecated.

##### type: `string`<a id="type-string"></a>

If not provided, it will default to `employee`.

##### provisional_start_date: `string`<a id="provisional_start_date-string"></a>

Indicates the expected start date of the employee or contractor.  Required for employees, but optional for contractors. Date format is in ISO8601 without the time component.  See the **Date and Time Format** documentation for more details on how the Remote API works with dates. 

##### seniority_date: `string`<a id="seniority_date-string"></a>

The date the employee first started working for your company. If you don’t include a seniority date, the employee’s start date with Remote will be deemed as the start of the employee’s seniority.  **Example**: Your employee started working for your company on Feb 1, 2022. On Aug 1, 2022, you transferred the employee to Remote and started managing them on the platform. Feb 1, 2022 would be their seniority date. Aug 1, 2022 would be their starting date. 

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentCreationResponse](./models/employment-creation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/sandbox/employments` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.sandbox.employmentUpdate`<a id="remotesandboxemploymentupdate"></a>

Updates an employment. Use this endpoint to modify employment states for testing
in the Sandbox environment. This endpoint will respond with a 404 outside of the
Sandbox environment.

For updating an employment's parameters outside of testing purposes, use [this
Employment update endpoint](https://gateway.remote.com/v1/docs/openapi.html).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const employmentUpdateResponse = await remote.sandbox.employmentUpdate({
  employmentId: "employmentId_example",
  status: "active",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

##### status: [`EmploymentStatus`](./models/employment-status.ts)<a id="status-employmentstatusmodelsemployment-statusts"></a>

The status of employment

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponse](./models/employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/sandbox/employments/{employment_id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.sandbox.triggerWebhookCallback`<a id="remotesandboxtriggerwebhookcallback"></a>

Triggers a callback previously registered for webhooks. Use this endpoint to
emit a webhook for testing in the Sandbox environment. This endpoint will
respond with a 404 outside of the Sandbox environment.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const triggerWebhookCallbackResponse =
  await remote.sandbox.triggerWebhookCallback({
    employment_id: "e966a8b8-1076-11ee-a5f2-9b3997a968f6",
    event_type: "employment.onboarding_task.completed",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employment_id: `string`<a id="employment_id-string"></a>

##### event_type: `string`<a id="event_type-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[SuccessResponse](./models/success-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/sandbox/webhook-callbacks/trigger` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.sandbox.updateEmploymentState`<a id="remotesandboxupdateemploymentstate"></a>

Updates an employment. Use this endpoint to modify employment states for testing
in the Sandbox environment. This endpoint will respond with a 404 outside of the
Sandbox environment.

For updating an employment's parameters outside of testing purposes, use [this
Employment update endpoint](https://gateway.remote.com/v1/docs/openapi.html).


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateEmploymentStateResponse =
  await remote.sandbox.updateEmploymentState({
    employmentId: "employmentId_example",
    status: "active",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID

##### status: [`EmploymentStatus`](./models/employment-status.ts)<a id="status-employmentstatusmodelsemployment-statusts"></a>

The status of employment

#### 🔄 Return<a id="🔄-return"></a>

[EmploymentResponse](./models/employment-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/sandbox/employments/{employment_id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOff.getRecord`<a id="remotetimeoffgetrecord"></a>

Shows a single Time Off record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecordResponse = await remote.timeOff.getRecord({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Timeoff ID

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffResponse](./models/timeoff-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOff.listRecords`<a id="remotetimeofflistrecords"></a>

Lists all Time Off records.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listRecordsResponse = await remote.timeOff.listRecords({
  timeoffType: "sick_leave",
  status: "requested",
  order: "asc",
  sortBy: "timeoff_type",
  page: 1,
  pageSize: 20,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Only show time off for a specific employment

##### timeoffType: [`TimeoffType`](./models/timeoff-type.ts)<a id="timeofftype-timeofftypemodelstimeoff-typets"></a>

Filter time off by its type

##### status: [`TimeoffStatus`](./models/timeoff-status.ts)<a id="status-timeoffstatusmodelstimeoff-statusts"></a>

Filter time off by its status

##### order: `'asc' | 'desc'`<a id="order-asc--desc"></a>

Sort order

##### sortBy: `'timeoff_type' | 'status'`<a id="sortby-timeoff_type--status"></a>

Field to sort by

##### page: `number`<a id="page-number"></a>

Starts fetching records after the given page

##### pageSize: `number`<a id="pagesize-number"></a>

Number of items per page

#### 🔄 Return<a id="🔄-return"></a>

[ListTimeoffResponse](./models/list-timeoff-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOff.listTypes`<a id="remotetimeofflisttypes"></a>

Lists all time off types that can be used for the `timeoff_type` parameter

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listTypesResponse = await remote.timeOff.listTypes();
```

#### 🔄 Return<a id="🔄-return"></a>

[ListTimeoffTypesResponse](./models/list-timeoff-types-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff/types` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOff.recordCreate`<a id="remotetimeoffrecordcreate"></a>

Creates a Time Off record

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const recordCreateResponse = await remote.timeOff.recordCreate({
  employment_id: "employment_id_example",
  end_date: "end_date_example",
  start_date: "start_date_example",
  timeoff_days: [
    {
      day: "2021-07-01",
    },
  ],
  timeoff_type: "sick_leave",
  timezone: "Etc/UTC",
  approved_at: "2021-07-15T18:18:17Z",
  approver_id: "51546f60-dd71-4223-9312-4efede68a497",
  status: "approved",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### approved_at: `string`<a id="approved_at-string"></a>

UTC date time in [ISO 8601][] format.  [ISO 8601]: https://en.wikipedia.org/wiki/ISO_8601 

##### approver_id: `string`<a id="approver_id-string"></a>

The field matches the `id` of a user in the Remote Platform that has permission to approve time off requests. [Available users][] can be found fetching the [List Company Manager][] endpoint.  [Available users]: https://support.remote.com/hc/en-us/articles/360054668651-Approving-Declining-time-off-requests#h_01G0014GZKZ3EMN6P7C99HAK55 [List Company Manager]: https://gateway.remote.com/v1/docs/openapi.html#tag/Company-Managers 

##### status: `string`<a id="status-string"></a>

##### document: [`TimeoffDocumentParams`](./models/timeoff-document-params.ts)<a id="document-timeoffdocumentparamsmodelstimeoff-document-paramsts"></a>

##### employment_id: `string`<a id="employment_id-string"></a>

##### end_date: `string`<a id="end_date-string"></a>

##### notes: `string`<a id="notes-string"></a>

##### start_date: `string`<a id="start_date-string"></a>

##### timeoff_days: [`TimeoffDaysParams`](./models/timeoff-days-params.ts)[]<a id="timeoff_days-timeoffdaysparamsmodelstimeoff-days-paramsts"></a>

##### timeoff_type: [`TimeoffType`](./models/timeoff-type.ts)<a id="timeoff_type-timeofftypemodelstimeoff-typets"></a>

##### timezone: `string`<a id="timezone-string"></a>

[TZ identifier](https://www.iana.org/time-zones)

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffResponse](./models/timeoff-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOff.updateRecord`<a id="remotetimeoffupdaterecord"></a>

Updates a Time Off record. This endpoint can also be used for cancelling a time off.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecordResponse = await remote.timeOff.updateRecord({
  id: "id_example",
  approved_at: "2021-07-15T18:18:17Z",
  approver_id: "51546f60-dd71-4223-9312-4efede68a497",
  cancel_reason: "cancel_reason_example",
  edit_reason: "edit_reason_example",
  end_date: "2021-07-01",
  start_date: "2021-07-01",
  status: "approved",
  timeoff_type: "sick_leave",
  timezone: "Etc/UTC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cancel_reason: `string`<a id="cancel_reason-string"></a>

The reason for cancelling a time off. Required when updating to status `cancelled`.

##### edit_reason: `string`<a id="edit_reason-string"></a>

The reason for the update. Required when updating the time off data but not changing the status.

##### id: `string`<a id="id-string"></a>

Timeoff ID

##### approved_at: `string`<a id="approved_at-string"></a>

UTC date time in [ISO 8601][] format.  [ISO 8601]: https://en.wikipedia.org/wiki/ISO_8601 

##### approver_id: `string`<a id="approver_id-string"></a>

The field matches the `id` of a user in the Remote Platform that has permission to approve time off requests. [Available users][] can be found fetching the [List Company Manager][] endpoint.  [Available users]: https://support.remote.com/hc/en-us/articles/360054668651-Approving-Declining-time-off-requests#h_01G0014GZKZ3EMN6P7C99HAK55 [List Company Manager]: https://gateway.remote.com/v1/docs/openapi.html#tag/Company-Managers 

##### document: [`TimeoffDocumentParams`](./models/timeoff-document-params.ts)<a id="document-timeoffdocumentparamsmodelstimeoff-document-paramsts"></a>

##### end_date: `string`<a id="end_date-string"></a>

UTC date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format

##### notes: `string`<a id="notes-string"></a>

##### start_date: `string`<a id="start_date-string"></a>

UTC date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format

##### status: `string`<a id="status-string"></a>

##### timeoff_days: [`TimeoffDaysParams`](./models/timeoff-days-params.ts)[]<a id="timeoff_days-timeoffdaysparamsmodelstimeoff-days-paramsts"></a>

##### timeoff_type: [`TimeoffType`](./models/timeoff-type.ts)<a id="timeoff_type-timeofftypemodelstimeoff-typets"></a>

##### timezone: `string`<a id="timezone-string"></a>

[TZ identifier](https://www.iana.org/time-zones)

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffResponse](./models/timeoff-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOff.updateRecord_0`<a id="remotetimeoffupdaterecord_0"></a>

Updates a Time Off record. This endpoint can also be used for cancelling a time off.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateRecord_0Response = await remote.timeOff.updateRecord_0({
  id: "id_example",
  approved_at: "2021-07-15T18:18:17Z",
  approver_id: "51546f60-dd71-4223-9312-4efede68a497",
  cancel_reason: "cancel_reason_example",
  edit_reason: "edit_reason_example",
  end_date: "2021-07-01",
  start_date: "2021-07-01",
  status: "approved",
  timeoff_type: "sick_leave",
  timezone: "Etc/UTC",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### cancel_reason: `string`<a id="cancel_reason-string"></a>

The reason for cancelling a time off. Required when updating to status `cancelled`.

##### edit_reason: `string`<a id="edit_reason-string"></a>

The reason for the update. Required when updating the time off data but not changing the status.

##### id: `string`<a id="id-string"></a>

Timeoff ID

##### approved_at: `string`<a id="approved_at-string"></a>

UTC date time in [ISO 8601][] format.  [ISO 8601]: https://en.wikipedia.org/wiki/ISO_8601 

##### approver_id: `string`<a id="approver_id-string"></a>

The field matches the `id` of a user in the Remote Platform that has permission to approve time off requests. [Available users][] can be found fetching the [List Company Manager][] endpoint.  [Available users]: https://support.remote.com/hc/en-us/articles/360054668651-Approving-Declining-time-off-requests#h_01G0014GZKZ3EMN6P7C99HAK55 [List Company Manager]: https://gateway.remote.com/v1/docs/openapi.html#tag/Company-Managers 

##### document: [`TimeoffDocumentParams`](./models/timeoff-document-params.ts)<a id="document-timeoffdocumentparamsmodelstimeoff-document-paramsts"></a>

##### end_date: `string`<a id="end_date-string"></a>

UTC date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format

##### notes: `string`<a id="notes-string"></a>

##### start_date: `string`<a id="start_date-string"></a>

UTC date in [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) format

##### status: `string`<a id="status-string"></a>

##### timeoff_days: [`TimeoffDaysParams`](./models/timeoff-days-params.ts)[]<a id="timeoff_days-timeoffdaysparamsmodelstimeoff-days-paramsts"></a>

##### timeoff_type: [`TimeoffType`](./models/timeoff-type.ts)<a id="timeoff_type-timeofftypemodelstimeoff-typets"></a>

##### timezone: `string`<a id="timezone-string"></a>

[TZ identifier](https://www.iana.org/time-zones)

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffResponse](./models/timeoff-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff/{id}` `PATCH`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.timeOffBalances.showBalance`<a id="remotetimeoffbalancesshowbalance"></a>

Shows the time off balance for the given employment_id.

Please note, this endpoint is only supported for employments in certain countries.
For countries where it's not supported, this endpoint will respond with a `404 Not Found`.


#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const showBalanceResponse = await remote.timeOffBalances.showBalance({
  employmentId: "employmentId_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### employmentId: `string`<a id="employmentid-string"></a>

Employment ID for which to show the time off balance

#### 🔄 Return<a id="🔄-return"></a>

[TimeoffBalanceResponse](./models/timeoff-balance-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/timeoff-balances/{employment_id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.webhookCallbacks.deleteCallback`<a id="remotewebhookcallbacksdeletecallback"></a>

Delete a callback previously registered for webhooks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteCallbackResponse = await remote.webhookCallbacks.deleteCallback({
  id: "id_example",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

Webhook Callback ID

#### 🔄 Return<a id="🔄-return"></a>

[SuccessResponse](./models/success-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook-callbacks/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `remote.webhookCallbacks.registerCallback`<a id="remotewebhookcallbacksregistercallback"></a>

Register a callback to be used for webhooks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const registerCallbackResponse = await remote.webhookCallbacks.registerCallback(
  {
    url: "https://example.com/callback",
  }
);
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### url: `string`<a id="url-string"></a>

##### subscribed_events: `string`[]<a id="subscribed_events-string"></a>

#### 🔄 Return<a id="🔄-return"></a>

[WebhookCallbackResponse](./models/webhook-callback-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/v1/webhook-callbacks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
