# Introduction

Swayauth Node library provides convenient access to the Swayauth API from applications written in server-side JavaScript.

# Table of Content

1.  Requirement
    
2.  Installation
    
3.  Initialization
    
4.  Usage
    

# Requirement

1.  Registered with Swayauth to get your application key and organization secret.
2.  Node 16 or higher

# Installation

To install the package, run the following command in your Node terminal:

```javascript
npm install swayauth-node
```

# Initialization

```javascript
const Swayauth = require('swayauth-node');
const swayauth = new Swayauth({
  ApplicationKey: '1710566580-cF....app', 
  OrganizationSecret: '2fc0e83b-54.... organization'
})
```

Or using ES modules and async/await:

```javascript
import Swayauth from 'swayauth-node';
const swayauth = new Swayauth({
  ApplicationKey: '1710566580-cF....app', 
  OrganizationSecret: '2fc0e83b-54.... organization'
})
```

# Usage

1.  Authentication:
    
    - [a. Login for client](#a-login-for-client)
    - [b. Login for user](#b-login-for-user)
    - [c. SignUp for user](#c-signup-for-user)
    - [d. Verify registration for user](#d-verify-registration-for-user)
    - [e. Forgot password for user](#e-forgot-password-for-user)
    - [f. Change forgot password for user](#f-change-forgot-password-for-user)
    - [g. List allowed 2FA for user](#g-list-allowed-2fa-for-user)
    - [h. Enable 2FA for User](#h-enable-2fa-for-user)
    - [i. Verify 2FA for User](#i-verify-2fa-for-user)
    - [j. Decode all reference and token](#j-decode-all-reference-and-token)
2.  Account:
    
    - [a. Get Profile Details for User and Client](#a-get-profile-details-for-user-and-client)
    - [b. Update Profile Details for User and Client](#b-update-profile-details-for-user-and-client)
    - [c. Change Profile Photo for User and Client](#c-change-profile-photo-for-user-and-client)
    - [d. Change Password for User and Client](#d-change-password-for-user-and-client)
    - [e. Get Company Profile for Client](#e-get-company-profile-for-client)
    - [f. Update Company Profile for Client](#f-update-company-profile-for-client)
    - [g. Switch Account for Client](#g-switch-account-for-client)
    - [h. Get Linked Account for Client](#h-get-linked-account-for-client)
3.  Client Management:
    
    - a. Statistics:
        - [i. Get Performance](#i-get-performance)
        - [ii. Get SignUp Graph](#ii-get-signup-graph)
        - [iii. Get Login Graph](#iii-get-login-graph)
        - [iv. Get User Usage Graph](#iv-get-user-usage-graph)
    - b. Wallet:
        - [i. Balance](#i-balance)
    - c. Users:
        - [i. List Users](#i-list-users)
        - [ii. Activate User Accounts](#ii-activate-user-accounts)
        - [iii. Delete A User](#iii-delete-a-user)
        - [iv. Deactivate User Accounts](#iv-deactivate-user-accounts)
    - d. Credentials:
        - [i. Get App Key](#i-get-app-key)
        - [ii. Rotate App Key](#ii-rotate-app-key)
    - e. Smtp:
        - [i. Setup](#i-setup)
        - [ii. Verify Smtp Details](#ii-verify-smtp-details)
        - [iii. Get Smtp Details](#iii-get-smtp-details)
        - [v. Update](#v-update)
    - f. Organization:
        - [i. Create Organization](#i-create-organization)
        - [ii. Edit Organization](#ii-edit-organization)
        - [iii. Change Organization Logo](#iii-change-organization-logo)
        - [iv. List Organizations](#iv-list-organizations)
        - [v. Delete Organization](#v-delete-organization)
        - [vi. Create Organization Token](#vi-create-organization-token)
        - [vii. Get Organization Tokens](#vii-get-organization-tokens)
        - [viii. Edit Organization Token](#viii-edit-organization-token)
        - [iix. Delete Organization Token](#iix-delete-organization-token)
        - [ix. Get One Organization Details](#ix-get-one-organization-details)
    - g. Team:
        - [i. Create Team Member Account](#i-create-team-member-account)
        - [ii. List Team Members](#ii-list-team-members)
        - [iii. Change Team Member Permission](#iii-change-team-member-permission)
    - h.  Cards:
        - [i. Get Saved Cards](#i-get-saved-cards)
        - [ii. Delete Saved Card](#ii-delete-saved-card)
        - [iii. Auto Save New Card Details During Payment](#iii-auto-save-new-card-details-during-payment)
    - i.  Transactions:
        - [i. Get Transaction History](#i-get-transaction-history)
    - j.   Subscription:
        - [i. Get Current Subscription Detail](#i-get-current-subscription-detail)
    - - **NOTE:** majority of the apis on this list have a single parameter/last parameter as access token. If non was provided, the library uses the AccessToken added during the initial configuration, This only applies to specific api that requires it ie account api for both client & user.

# 1\. Authentication

### a. Login for Client

This lets client/admin login manually.

```javascript
import Swayauth from 'swayauth';

const swayauth = new Swayauth({
  ApplicationKey: '1710566580-cF....app', 
  OrganizationSecret: '2fc0e83b-54.... organization'
});

swayauth.client.auth.login({ email: 'johndoe@gmail.com', password: '1234567plmnb' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiNGUzZGNmMDcyNWZlNmViZjRjM2QiLCJlbWFpbCI6ImZhc2hhbnV0b3NpbjdAZ21haWwuY29tIiwic2NvcGUiOlsibWFudWFsIl0sInR3b19mYWN0b3JfdHlwZSI6bnVsbCwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiZGVsZXRlIl0sInN0YXR1cyI6ImFjdGl2ZSIsImNvbXBhbnlfaWQiOiI2NWEyZjg4ODY4NGFkZDJiYzdhYTYxMmQiLCJvcmdhbml6YXRpb25fdG9rZW5faWQiOiI2NWFiNGEzMWU3ZTczYmYxZmJlYjYxNTMiLCJvcmdhbml6YXRpb25faWQiOiI2NWFiNDhlOGU3ZTczYmYxZmJlYjYxNTIiLCJhY2Nlc3MiOiJsZXZlbF8xIiwiaWF0IjoxNzA1NzI2MDY5LCJleHAiOjE3MDU4MTI0Njl9.5TG4ogDWVI2pkRRbYt1w0mHo1JP9SzDb6_RNvULoECg",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiNGUzZGNmMDcyNWZlNmViZjRjM2QiLCJlbWFpbCI6ImZhc2hhbnV0b3NpbjdAZ21haWwuY29tIiwic2NvcGUiOlsibWFudWFsIl0sInR3b19mYWN0b3JfdHlwZSI6bnVsbCwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiZGVsZXRlIl0sInN0YXR1cyI6ImFjdGl2ZSIsImNvbXBhbnlfaWQiOiI2NWEyZjg4ODY4NGFkZDJiYzdhYTYxMmQiLCJvcmdhbml6YXRpb25fdG9rZW5faWQiOiI2NWFiNGEzMWU3ZTczYmYxZmJlYjYxNTMiLCJvcmdhbml6YXRpb25faWQiOiI2NWFiNDhlOGU3ZTczYmYxZmJlYjYxNTIiLCJhY2Nlc3MiOiJsZXZlbF8xIiwiaWF0IjoxNzA1NzI2MDY5LCJleHAiOjE3MTM1MDIwNjl9.wqvLzDJLnXcwFkUvWQfq-XaDVfUERBDDCVP0_OVGdsk",
        "two_factor_enabled": false,
        "two_factor_type": null
    },
    "status": true,
    "message": "Ok"
}
```

### b. Login for User

This lets user login manually. Requires Organization Secret From Swayauth Dashboard

```javascript
import Swayauth from 'swayauth';

const swayauth = new Swayauth({
  ApplicationKey: '1710566580-cF....app', 
  OrganizationSecret: '2fc0e83b-54.... organization'
});

swayauth.user.auth.login({ email: 'johndoe@gmail.com', password: '1234567plmnb' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiNGUzZGNmMDcyNWZlNmViZjRjM2QiLCJlbWFpbCI6ImZhc2hhbnV0b3NpbjdAZ21haWwuY29tIiwic2NvcGUiOlsibWFudWFsIl0sInR3b19mYWN0b3JfdHlwZSI6bnVsbCwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiZGVsZXRlIl0sInN0YXR1cyI6ImFjdGl2ZSIsImNvbXBhbnlfaWQiOiI2NWEyZjg4ODY4NGFkZDJiYzdhYTYxMmQiLCJvcmdhbml6YXRpb25fdG9rZW5faWQiOiI2NWFiNGEzMWU3ZTczYmYxZmJlYjYxNTMiLCJvcmdhbml6YXRpb25faWQiOiI2NWFiNDhlOGU3ZTczYmYxZmJlYjYxNTIiLCJhY2Nlc3MiOiJsZXZlbF8xIiwiaWF0IjoxNzA1NzI2MDY5LCJleHAiOjE3MDU4MTI0Njl9.5TG4ogDWVI2pkRRbYt1w0mHo1JP9SzDb6_RNvULoECg",
        "refresh_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NWFiNGUzZGNmMDcyNWZlNmViZjRjM2QiLCJlbWFpbCI6ImZhc2hhbnV0b3NpbjdAZ21haWwuY29tIiwic2NvcGUiOlsibWFudWFsIl0sInR3b19mYWN0b3JfdHlwZSI6bnVsbCwicGVybWlzc2lvbnMiOlsicmVhZCIsIndyaXRlIiwiZGVsZXRlIl0sInN0YXR1cyI6ImFjdGl2ZSIsImNvbXBhbnlfaWQiOiI2NWEyZjg4ODY4NGFkZDJiYzdhYTYxMmQiLCJvcmdhbml6YXRpb25fdG9rZW5faWQiOiI2NWFiNGEzMWU3ZTczYmYxZmJlYjYxNTMiLCJvcmdhbml6YXRpb25faWQiOiI2NWFiNDhlOGU3ZTczYmYxZmJlYjYxNTIiLCJhY2Nlc3MiOiJsZXZlbF8xIiwiaWF0IjoxNzA1NzI2MDY5LCJleHAiOjE3MTM1MDIwNjl9.wqvLzDJLnXcwFkUvWQfq-XaDVfUERBDDCVP0_OVGdsk",
        "two_factor_enabled": false,
        "two_factor_type": null
    },
    "status": true,
    "message": "Ok"
}
```

### c. SignUp for User

This lets user signup manually. Requires Organization Secret From Swayauth Dashboard
SignUp Body Type:

```typescript
export interface RegisterData {
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  photo?: string;
  email: string;
  password: string;
}
```

```javascript
import Swayauth from 'swayauth';

const swayauth = new Swayauth({
  ApplicationKey: '1710566580-cF....app', 
  OrganizationSecret: '2fc0e83b-54.... organization'
});

swayauth.user.auth.signUp({ email: 'johndoe@gmail.com', password: '1234567plmnb' } as RegisterData)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "reference": "OHlyUlFPZ0tuUTdwVkJ3QkRTTlRiQkh4ZWIwYmVvQmxXRVF6OUEyK2Zvb1BiSW5vVWs3UTRSRitsS2gyTVhnZ0c1Wi83bzFiSDhUZGlaTnJMd3RqZTRqTU1EcUtBeVV6TEIzbU5tTVcvK0o4c1hneVk1RTMzeXE5RXl0aDVEVVdEV1c5TVNoS2tQck9jUDFjdzhQK3BnPT0_",
        "verify_registration": true,
        "verify_registration_type": "mail_token"
    },
    "status": true,
    "message": "Registration was successful"
}
```

### d. Verify registration for User

This lets backend verify user registration/signup manually. Requires Organization Secret From Swayauth Dashboard

```javascript
swayauth.user.auth.verifySignUp({ token: '3739....', reference: 'ebiedueiuebiueb.....' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Registeration was successful"
}
```

### e. Forgot password for User

This lets backend allow user change there password. Requires Organization Secret From Swayauth Dashboard

```javascript
swayauth.user.auth.forgotPassword({ email: 'johndoe@gmail.com' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "verification_method": "mail_link",
        "reference": "YmczVDlHYXNRaVBQNUQvajd6RXpSRmN2NmhXdVZyelVOd0ppTW1VMnB2N2FZOSs0dEhPZndQSnY5Tk5FRlR3NVJmZmc1dC9Cd0pROEJ0RVpFekUxdC8xdHVOaHZzbEpNMlVjOHdwVjZuK0FVSk9ZRjVLcUYySFEwMVJiekYzZXZQaGFkMUt5N1Q0YitONVZKRmJWeG1RPT0_"
    },
    "status": true,
    "message": "Request was sent successfully"
}
```

### f. Change forgot password for User

This lets backend allow user change there password after getting a token or link. Requires Organization Secret From Swayauth Dashboard

```javascript
swayauth.user.auth.changeForgotPassword({ password: '279779729dsQ', reference: 'sege8h9d...', token: '273...' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Password change was successful"
}
```

### g. List allowed 2FA for User

This the available 2fa authentication for a single user. Requires Bearer access token from user.

```javascript
swayauth.user.twoFA.list()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        "app",
        "mail",
        "sms"
    ],
    "status": true,
    "message": "Ok"
}
```

### h. Enable 2FA for **User**

This enables 2fa authentication for a single user. Requires Bearer access token from user.

Type of 2fa:

```javascript
export type twoFAType = "app" | "mail" | "sms"
```

```javascript
swayauth.user.twoFA.enable('app')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "qrcode": "data:image/png;base64,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",
        "two_factor_type": "app",
        "two_factor_enabled": false,
        "reference": "NVErL3VocWdsSyt3V2VjV3VvdG1oUU1zNFF6QytYbVJyVStNWTN2aFZBWDNoN2loMElTUDVvY2htaE8yd3ZNVVFVNjBsRGNmcWxxZGRQNlNGb2xrNHVibDFlWXhlVC9Fb3pTdE15cE53K0Vld3VvVG5tODQvRVpISGtQODRxSno"
    },
    "status": true,
    "message": "Ok"
}
```

### i. Verify 2FA for User

After enabling a 2fa authentication type, a user needs to verify they type selected. Requires Requires App Organization-Secret.

```javascript
swayauth.user.twoFA.verify({ reference: '....', token: '12...' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "2-factor authentication enabled"
}
```

### j. Decode all reference and token

Allows to check the validity of a token. Requires Requires App Organization-Secret / Application-Key

```javascript
swayauth.user.auth.decodeTokenAndReference({ reference: '....', token: '12...' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "purpose": "register",
        "require_password": true
    },
    "status": true,
    "message": "Ok"
}
```

2\. Account

### a.  Get Profile Details for User and Client

Get the profile details for both user & client using a single api endpoint. Requires Bearer Access Token.

```
//user
swayauth.user.account.getAccount()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
  
  //client
swayauth.client.account.getAccount()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65ab4e3dcf0725fe6ebf4c3d",
        "first_name": "John",
        "last_name": "Doe",
        "phone": "+2349027938938",
        "address": "No 4, Cresent Estate, Lagos",
        "city": "Lagos",
        "state": "Lagos",
        "country": "Nigeria",
        "ip_address": "::1",
        "email": "example@gmail.com",
        "status": "active",
        "verified": true,
        "photo": "https://api.swayauth.com/logo.png",
        "scope": [
            "manual"
        ],
        "permissions": [
            "read",
            "write",
            "delete"
        ],
        "access": "level_1",
        "two_factor_type": null,
        "company_id": "65a2f888684add2bc7aa612d",
        "organization_id": "65ab48e8e7e73bf1fbeb6152",
        "organization_token_id": "65ab4a31e7e73bf1fbeb6153",
        "created_at": "2024-01-20T04:38:20.674Z",
        "updated_at": "2024-01-20T05:23:49.258Z"
    },
    "status": true,
    "message": "Ok"
}
```

### b.  Update Profile Details for User and Client

Update profile details for both user & client using a single api endpoint. Requires Bearer Access Token.

```typescript
interface DataProp {
  first_name?: string;
  last_name?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  photo?: string;
}

//user
swayauth.user.account.updateAccount(data as DataProp)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
  
  //client
swayauth.client.account.updateAccount(data as DataProp)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65ab4e3dcf0725fe6ebf4c3d",
        "first_name": "John",
        "last_name": "Doe",
        "phone": "+234903393399",
        "address": "No 4, Cresent Estate, Lagos",
        "city": "Lagos",
        "state": "Lagos",
        "country": "Nigeria",
        "ip_address": "::1",
        "email": "fashanutosin7@gmail.com",
        "status": "active",
        "verified": true,
        "photo": "https://api.swayauth.com/logo.png",
        "scope": [
            "manual"
        ],
        "permissions": [
            "read",
            "write",
            "delete"
        ],
        "access": "level_1",
        "two_factor_type": null,
        "company_id": "65a2f888684add2bc7aa612d",
        "organization_id": "65ab48e8e7e73bf1fbeb6152",
        "organization_token_id": "65ab4a31e7e73bf1fbeb6153",
        "created_at": "2024-01-20T04:38:20.674Z",
        "updated_at": "2024-01-20T05:28:39.722Z"
    },
    "status": true,
    "message": "Ok"
}
```

### c. Change Profile Photo for User and Client

Change profile photo for both user & client using a single api endpoint. Requires Bearer Access Token.

```javascript
const tmp_location = '.....' // temporary upload directory using multer or like library.

swayauth.user.account.changePhoto(tmp_location)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "fieldname": "file",
        "originalname": "shield.png",
        "encoding": "7bit",
        "mimetype": "image/png",
        "destination": "uploads/",
        "filename": "d89498d1-9199-4a95-a43d-4ac0ff2c5491.png",
        "path": "http://zzzzzz.com/uploads/d89498d1-9199-4a95-a43d-4ac0ff2c5491.png",
        "size": 26030
    },
    "status": true,
    "message": "Ok"
}
```

### d. Change Password for User and Client

Change password for both user & client using a single api endpoint. Requires Login Bearer Access Token.

```javascript
swayauth.user.account.changePassword({new_password:'....', old_password:'.....'})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Password reset successful"
}
```

### e. Get Company Profile for Client

Get the company information for clients only. Requires Login Bearer Access Token / Application-Key

```javascript
swayauth.client.account.getCompanyProfile()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65a2f888684add2bc7aa612d",
        "default_card_id": null,
        "name": "Swayauth",
        "email": "example@gmail.com",
        "status": "active",
        "address": null,
        "city": null,
        "state": null,
        "country": null,
        "verified": false,
        "save_cards": false,
        "plan": "free",
        "app_key_id": "65a2f888684add2bc7aa612c",
        "service_email_id": null,
        "wallet_id": "65a2f888684add2bc7aa612b",
        "created_at": "2024-01-13T20:54:32.989Z",
        "updated_at": "2024-01-13T20:56:14.269Z"
    },
    "status": true,
    "message": "Ok"
}
```

### f. Update Company Profile for Client

Update the company information for clients only. Requires Login Bearer Access Token / Application-Key

```typescript
interface UpdateCompanyData {
  name: string;
  address: string;
  city: string;
  state: string;
  country: string;
}

swayauth.client.account.updateCompanyProfile(data as UpdateCompanyData)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65a2f888684add2bc7aa612d",
        "default_card_id": null,
        "name": "Swayauth",
        "email": "example@gmail.com",
        "status": "active",
        "address": "No 5, Cresent Estate, Lagos, Nigeria.",
        "city": "Lagos",
        "state": "Lagos",
        "country": "Nigeria",
        "verified": false,
        "save_cards": false,
        "plan": "free",
        "app_key_id": "65a2f888684add2bc7aa612c",
        "service_email_id": null,
        "wallet_id": "65a2f888684add2bc7aa612b",
        "created_at": "2024-01-13T20:54:32.989Z",
        "updated_at": "2024-01-20T05:45:48.498Z"
    },
    "status": true,
    "message": "Ok"
}
```

### g. Switch Account for Client

Switch account for client with multiple access to different organizations. Requires Login Bearer Access Token

```javascript
swayauth.client.account.switchAccount(company_id)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```
{
    "data": null
    "status": true,
    "message": "Ok"
}
```

### h. Get Linked Account for Client

Get company accounts linked to a single client. Requires Login Bearer Access Token

```javascript
swayauth.client.account.getLinkedAccounts()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "6583e64277a391169b2496bf",
            "verified": true,
            "creator": true,
            "permissions": [
                "read",
                "write",
                "delete"
            ],
            "access": "level_3",
            "company_id": "6583e64077a391169b2496bd",
            "client_email": "example@gmail.com",
            "created_at": "2023-12-21T07:16:18.352Z",
            "updated_at": "2023-12-21T07:16:46.377Z",
            "company": {
                "id": "6583e64077a391169b2496bd",
                "name": null,
                "status": "active"
            }
        }
    ],
    "status": true,
    "message": "Ok"
}
```

# 2\. Client Management

## **a. Statistics**

### i. Get Performance

Get integration (sms, facebook etc) performance on your company account.

```typescript
export type StatistcsPerformaceParams = 'users' | 'sms' | 'mail' | 'google' | 'facebook' | 'manual'
export type GraphParam = '7_days' | '14_days' | '30_days' | '6_months' | '1_year'

const performance: StatistcsPerformaceParams = []; 
const duration: GraphParam = '7_days'

swayauth.client.management.statistics.performance(performance, duration)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "duration": "7_days",
        "users": 2,
        "sms": 0,
        "mail": 6,
        "google": 8,
        "facebook": 7,
        "manual": 4
    },
    "status": true,
    "message": "Ok"
}
```

### ii. Get SignUp Graph

Get signup graph on your company account.

```typescript
export type GraphParam = '7_days' | '14_days' | '30_days' | '6_months' | '1_year'
const duration: GraphParam = '7_days'

swayauth.client.management.statistics.signUpGraph( duration)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "graph": [
            0,
            0,
            0,
            0,
            0,
            0,
            2
        ],
        "duration": "7_days"
    },
    "status": true,
    "message": "Ok"
}
```

### iii. Get Login Graph

Get login graph on your company account.

```
export type GraphParam = '7_days' | '14_days' | '30_days' | '6_months' | '1_year'
const duration: GraphParam = '7_days'

swayauth.client.management.statistics.loginGraph( duration)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "facebook": 7,
        "google": 7,
        "manual": 2,
        "duration": "7_days"
    },
    "status": true,
    "message": "Ok"
}
```

### iv. Get User Usage Graph

Get user usage graph on your company account.

```typescript
export type UseGraphParams = 'users' | 'organizations' | 'active' | 'disabled'

const usage: UseGraphParams[] = ['users', 'organizations', 'active', 'disabled'];

swayauth.client.management.statistics.userGraph(usage)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```
{
    "data": {
        "users": 1,
        "organizations": 1,
        "active": 0,
        "disabled": 1
    },
    "status": true,
    "message": "Ok"
}
```

## **b. Wallet**

### i. Balance

Get wallet balance associated with an account using Application Key. You must have top level permission to view this using Access Token Credential, check permission section for more info.

```javascript
swayauth.client.management.wallet.balance()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```
{
    "data": {
        "id": "65a2f888684add2bc7aa612b",
        "amount": 2000
    },
    "status": true,
    "message": "Ok"
}
```

## **c. Users**

### i.  List Users

Get the list of users associated with a client company.

```typescript
export interface ListUserParams {
  order_by?: 'id' | 'first_name' | 'last_name' | 'email' | 'status' | 'address' | 'city' | 'state' | 'country'
  page?: number
  size?: number //response array size
  direction?: 'asc' | 'desc'
  organization_id?: string
  search?: string
}

const params: ListUserParams = {page: 2, search: 'johndoe@gmail.com'}

swayauth.client.management.users.list(params)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "65ab4e3dcf0725fe6ebf4c3d",
            "first_name": "John",
            "last_name": "Doe",
            "phone": "+2349033989389",
            "address": "No 4, Cresent Estate, Lagos",
            "city": "Lagos",
            "state": "Lagos",
            "country": "Nigeria",
            "ip_address": "::1",
            "email": "example@gmail.com",
            "status": "active",
            "verified": true,
            "photo": "http://localhost:8000/uploads/d89498d1-9199-4a95-a43d-4ac0ff2c5491.png",
            "scope": [
                "manual"
            ],
            "permissions": [
                "read",
                "write",
                "delete"
            ],
            "access": "level_1",
            "two_factor_type": null,
            "company_id": "65a2f888684add2bc7aa612d",
            "organization_id": "65ab48e8e7e73bf1fbeb6152",
            "organization_token_id": "65ab4a31e7e73bf1fbeb6153",
            "created_at": "2024-01-20T04:38:20.674Z",
            "updated_at": "2024-01-20T05:40:15.482Z",
            "organization": {
                "name": "Swayauth - Example"
            }
        }
    ],
    "status": true,
    "message": "Ok"
}
```

### ii. Activate User Accounts

Activate a list of users account associated with a client company.

```javascript
swayauth.client.management.users.activate({ user_ids: ['7gdegge....'] })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Request was processed successfully"
}
```

### iii.  Delete A User

Delete a user account associated with a client company.

```javascript
swayauth.client.management.users.delete('7e78gge8....')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Deleted user successfully"
}
```

### iv.  Deactivate User Accounts

Deactivate a list of users account associated with a client company.

```javascript
swayauth.client.management.users.deactivate({ user_ids: ['9ed7h9e8hd....'] })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Deactivated users successfully"
}
```

## **d.  Credentials**

### i.  Get App Key

Get the `Application Key` associated with an account using `Application Key Token` provided on the Swayauth dashboard. You must have top level permission to view this using `Access Token Credential`, check permission section for more info.

```javascript
swayauth.client.management.credential.getAppKey()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65a2f888684add2bc7aa612c",
        "key": "1705179272-cFcrb3ZXcE8zZXFzai8zcGdQU0FwWDF5OW0rWTdTMUFjc2kyeUc2NGUxOD0.app",
        "created_at": "2024-01-13T20:54:32.714Z",
        "updated_at": "2024-01-13T20:54:32.714Z"
    },
    "status": true,
    "message": "Ok"
}
```

### ii.  Rotate App Key

Change the `Application Key` associated with an account using `Application Key Token` provided on the Swayauth dashboard. You must have top level permission to view this using `Access Token Credential`, check permission section for more info.

```javascript
swayauth.client.management.credential.rotateAppKey()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65a2f888684add2bc7aa612c",
        "key": "1705748472-cFcrb3ZXcE8zZXFzai8zcGdQU0FwWDF5OW0rWTdTMUFjc2kyeUc2NGUxOD0.app",
        "created_at": "2024-01-13T20:54:32.714Z",
        "updated_at": "2024-01-20T11:01:12.449Z"
    },
    "status": true,
    "message": "Ok"
}
```

## **e.  Smtp**

### i.  Setup

Setup email smpt for a company account, api will use your setup to send email messages to your users once verified, otherwise Swayauth default mail setup.

```typescript
export interface SMTPData {
  company_name: string;
  website: string;
  email: string;
  username: string;
  password: string;
  host: string;
}

const data: SMTPData = {host: '....', ......}
swayauth.client.management.smtp.setup(data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "reference": "SjdKOXBzUjJiNzR1VEJyVm9QYWdzMmpYYnM4VVFqaTFPbTZHWGZNWlNiTEJIdUY4ZFFNRDFNajE0N3oxbk1MRFcvbjI1bDNyWGVadW1BRlRSazVGRDlMdTd2d05NVW9SYlZrZzM2K1ZKQ1p5T2pweHFadzFMNVYxQllLVWMzZ1o_",
        "verification_enabled": true,
        "verification_type": "mail-token"
    },
    "status": true,
    "message": "Smtp setup was successful"
}
```

### ii.  Verify Smtp Details

Verify smpt setup for a company account, api will use your setup to send email messages to your users once verified, otherwise Swayauth default mail setup.
A token will be sent to associated account for verification, using the setup data.

```javascript
swayauth.client.management.smtp.verify({ reference: '....', token: '23....' })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Smtp account verified successfully"
}
```

### iii.  Get Smtp Details

Get smpt setup for a company account.

```javascript
swayauth.client.management.smtp.get()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": false,
    "message": "No smtp setup for this account"
}
```

### iv.  Delete Smtp Details

Delete smpt setup for a company account.

```
swayauth.client.management.smtp.delete()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Smtp setup was deleted successful"
}
```

### v. Update

Setup email smpt for a company account, api will use your setup to send email messages to your users once verified, otherwise Swayauth default mail setup.

```typescript
export interface SMTPData {
  company_name: string;
  website: string;
  email: string;
  username: string;
  password: string;
  host: string;
}

const data: SMTPData = {host: '....', ......}
swayauth.client.management.smtp.update(data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Smtp account updated successfully"
}
```

## **f.  Organization**

### i.  Create Organization

Create an organization.

```
const data = {
    "name":"Cloutra",
    "website":"https://cloutra.com",
    "bio":"We create aws labs for our customers", 
    "photo":"https://api.swayauth.com/logo.png"
}
swayauth.client.management.organization.createOrganization(data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65abaae051afd54bc2bc3399",
        "photo": "https://api.swayauth.com/logo.png",
        "name": "Cloutra",
        "website": "https://cloutra.com",
        "bio": "We create aws labs for our customers",
        "company_id": "65a2f888684add2bc7aa612d",
        "created_at": "2024-01-20T11:13:36.108Z",
        "updated_at": "2024-01-20T11:13:36.108Z"
    },
    "status": true,
    "message": "Organization created successfully"
}
```

### ii.  Edit Organization

Edit an organization data.

```
const data = {
    "name":"Cloutra",
    "website":"https://cloutra.com",
    "bio":"We create aws labs for our customers", 
    "photo":"https://api.swayauth.com/logo.png"
}
swayauth.client.management.organization.editOrganization(data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "657dc2a37d88b6c7ec32c971",
        "photo": "http://localhost:8000/uploads/8184d509-c270-4ad3-bc7b-b0f7b941c95b.png",
        "name": "Cloutra - Mobile",
        "website": "https://cloutra.com",
        "bio": "We create aws labs for our customers",
        "company_id": "657d92c48cb19911611fc207",
        "created_at": "2023-12-16T15:30:43.366Z",
        "updated_at": "2023-12-16T16:50:53.402Z"
    },
    "status": true,
    "message": "Ok"
}
```

### iii.  Change Organization Logo

Change an organization logo.

```javascript
const tmp_location = '.....' // temporary upload directory using multer or like library.

swayauth.user.account.changeOrganizationLogo(tmp_location)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Organization logo updated successfully"
}
```

### iv.  List Organizations

List organizations.

```typescript
export interface ListOrganizationsParams {
  order_by?: 'id' | 'name' | 'organization_token' | 'created_at'
  page?: number | string
  size?: number | string
  direction?: 'asc' | 'desc'
}

const params: ListOrganizationsParams = {page:2}
swayauth.client.management.organization.listOrganization(params)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "65ab48e8e7e73bf1fbeb6152",
            "photo": "http://localhost:8000/uploads/81edf11c-82fa-488d-86d1-1a3eb51b8124.png",
            "name": "Swayauth - Example",
            "website": "https://swayauth.com",
            "bio": "We make authentication flow seemless for your application.",
            "company_id": "65a2f888684add2bc7aa612d",
            "created_at": "2024-01-20T04:15:36.124Z",
            "updated_at": "2024-01-20T04:15:36.124Z",
            "_count": {
                "organization_token": 1
            }
        }
    ],
    "status": true,
    "message": "Ok"
}
```

### v.  Delete Organization

Delete an organization.

```
swayauth.client.management.organization.deleteOrganization('e7d8eg87egd8e.....organization')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Organization deleted successfully"
}
```

### vi.  Create Organization Token

Create an organization token.

```javascript
cost data = {
    "name": "Sample",
    "origins": ["https://sample.com"],
    "redirect_url": "https://sample.com/redirect",
    "two_factor_type": ["mail"],
    "verify_registration": true,
    "verify_registration_type": "mail_link",
    "permissions": ["read","write", "delete"],
    "scope": ["manual", "mail"]
}

swayauth.client.management.organization.createToken('ueibdiued...organization', data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65abac7c7a36e245986f45c7",
        "name": "Sample",
        "api_key": "974484f1-0a75-47ea-8cf7-9e5148c5a8e5.organization",
        "redirect_url": "https://sample.com/redirect",
        "origins": [
            "https://sample.com"
        ],
        "two_factor_type": [
            "mail"
        ],
        "verify_registration": true,
        "verify_registration_type": "mail_link",
        "company_id": "65a2f888684add2bc7aa612d",
        "permissions": [
            "read",
            "write",
            "delete"
        ],
        "scope": [
            "manual",
            "mail"
        ],
        "organization_id": "65ab48e8e7e73bf1fbeb6152",
        "created_at": "2024-01-20T11:20:28.468Z",
        "updated_at": "2024-01-20T11:20:28.468Z"
    },
    "status": true,
    "message": "Token created successfully"
}
```

### vii.  Get Organization Tokens

Create an organization token.

```typescript
export interface ListOrganizationsParams {
  order_by?: 'id' | 'name' | 'organization_token' | 'created_at'
  page?: number | string
  size?: number | string
  direction?: 'asc' | 'desc'
}
const params: ListOrganizationsParams = {page: 2};
swayauth.client.management.organization.getTokens('ueibdiued....organization',  params)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "65ab4a31e7e73bf1fbeb6153",
            "name": "Swayauth Token Example",
            "api_key": "1e7f92ea-cc4d-48ee-9bfb-17d2042df847.organization",
            "redirect_url": "https://swayauth.com/verify",
            "origins": [
                "https://swayauth.com",
                "http://localhost:3000"
            ],
            "two_factor_type": [
                "app",
                "mail",
                "sms"
            ],
            "verify_registration": true,
            "verify_registration_type": "mail_token",
            "company_id": "65a2f888684add2bc7aa612d",
            "permissions": [
                "read",
                "write",
                "delete"
            ],
            "scope": [
                "manual",
                "facebook",
                "google",
                "mail",
                "sms",
                "two_factor"
            ],
            "organization_id": "65ab48e8e7e73bf1fbeb6152",
            "created_at": "2024-01-20T04:21:05.000Z",
            "updated_at": "2024-01-20T04:21:05.000Z"
        }
    ],
    "status": true,
    "message": "Ok"
}
```

### viii.  Edit Organization Token

Edit an organization token.

```javscript
cost data = {
    "name": "Sample",
    "origins": ["https://sample.com"],
    "redirect_url": "https://sample.com/redirect",
    "two_factor_type": ["mail"],
    "verify_registration": true,
    "verify_registration_type": "mail_link",
    "permissions": ["read","write", "delete"],
    "scope": ["manual", "mail"]
}

swayauth.client.management.organization.editToken('ueibdiued....organization', data )
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65abac7c7a36e245986f45c7",
        "name": "Sample",
        "api_key": "974484f1-0a75-47ea-8cf7-9e5148c5a8e5.organization",
        "redirect_url": "https://sample.com/verify",
        "origins": [
            "https://sample.com"
        ],
        "two_factor_type": [
            "mail"
        ],
        "verify_registration": true,
        "verify_registration_type": "mail_link",
        "company_id": "65a2f888684add2bc7aa612d",
        "permissions": [
            "read",
            "write",
            "delete"
        ],
        "scope": [
            "manual",
            "mail"
        ],
        "organization_id": "65ab48e8e7e73bf1fbeb6152",
        "created_at": "2024-01-20T11:20:28.468Z",
        "updated_at": "2024-01-20T11:21:22.136Z"
    },
    "status": true,
    "message": "Token edited successfully"
}
```

### iix.  Delete Organization Token

Delete an organization token.

```javascript
swayauth.client.management.organization.deleteTokens({token_ids: ['g78eg8.........']})
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Organization token was deleted successfully"
}
```

### ix.  Get One Organization Details

Get a single organization detail.

```javascript
swayauth.client.management.organization.getOneOrganization('eubdeiubdeu.....organization')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65ab48e8e7e73bf1fbeb6152",
        "photo": "http://localhost:8000/uploads/81edf11c-82fa-488d-86d1-1a3eb51b8124.png",
        "name": "Swayauth - Example",
        "website": "https://swayauth.com",
        "bio": "We make authentication flow seemless for your application.",
        "company_id": "65a2f888684add2bc7aa612d",
        "created_at": "2024-01-20T04:15:36.124Z",
        "updated_at": "2024-01-20T04:15:36.124Z"
    },
    "status": true,
    "message": "Ok"
}
```

## **g. Team**

### i. Create Team Member Account

Create a team membe. Your must have topmost access previledge to use Access Token Credential or use Application Key to make this request

```javascript
const data  = {
    "first_name": "Leeroy",
    "last_name": "Johnson",
    "phone": "+2349036723177",
    "address": "No 4, Cresent Estate, Lagos",
    "city": "Lagos",
    "state": "Lagos",
    "country": "Nigeria",
    "photo": "https://api.swayayth.com/logo.png",
    "email": "example2@gmail.com",
    "access": "level_3",
    "permissions": [
        "read",
        "write",
        "delete"
    ]
}

swayauth.client.management.team.add(data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "An invite have been sent to your team member"
}
```

### ii.  List Team Members

List team members.

```
export interface ListTeamParams {
  order_by?: 'id' | 'first_name' | 'last_name' | 'email' | 'status' | 'created_at' | 'address' | 'city' | 'state' | 'country'
  page?: number | string
  size?: number | string
  direction?: 'asc' | 'desc'
}

const params: ListTeamParams = {}
swayauth.client.management.team.list(params)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "65a2f889684add2bc7aa612f",
            "first_name": "John",
            "last_name": "Doe",
            "phone": "+23490398398983",
            "address": "No 5, Lagos Nigeria",
            "city": "Lagos",
            "state": "Lagos",
            "country": "Nigeria",
            "ip_address": "::1",
            "email": "example@gmail.com",
            "status": "active",
            "verified": true,
            "photo": "https://lh3.googleusercontent.com/a/ACg8ocIz12jBS66CxCF61LJv8X0FIvsJWuOyLWJs7spoyy1WtC8=s96-c",
            "scope": [
                "manual"
            ],
            "two_factor_type": "app",
            "company_id": "65a2f888684add2bc7aa612d",
            "created_at": "2024-01-13T20:54:33.549Z",
            "updated_at": "2024-01-20T04:58:42.837Z",
            "association": {
                "id": "65a2f889684add2bc7aa612e",
                "verified": false,
                "creator": true,
                "permissions": [
                    "read",
                    "write",
                    "delete"
                ],
                "access": "level_3",
                "company_id": "65a2f888684add2bc7aa612d",
                "client_email": "example@gmail.com",
                "created_at": "2024-01-13T20:54:33.269Z",
                "updated_at": "2024-01-13T20:54:33.269Z"
            }
        },
        {
            "id": "65a8a02645787034a5ca2783",
            "first_name": "Drawing",
            "last_name": "Strokes",
            "phone": null,
            "address": null,
            "city": null,
            "state": null,
            "country": null,
            "ip_address": "",
            "email": "example2@gmail.com",
            "status": "active",
            "verified": true,
            "photo": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1962405684154181&height=200&width=200&ext=1708141849&hash=Afq39EqU2MQI_my1noYg7Ui9suNJrodK1Pxv98_AErZhZw",
            "scope": [
                "manual"
            ],
            "two_factor_type": "app",
            "company_id": "65a8a02445787034a5ca2781",
            "created_at": "2024-01-18T03:51:02.261Z",
            "updated_at": "2024-01-18T03:51:02.261Z",
            "association": {
                "id": "65abad9b7a36e245986f45c8",
                "verified": false,
                "creator": false,
                "permissions": [
                    "read",
                    "write",
                    "delete"
                ],
                "access": "level_3",
                "company_id": "65a2f888684add2bc7aa612d",
                "client_email": "example2@gmail.com",
                "created_at": "2024-01-20T11:25:15.998Z",
                "updated_at": "2024-01-20T11:25:15.998Z"
            }
        }
    ],
    "status": true,
    "message": "Ok"
}
```

### iii.  Change Team Member Permission

Chaange a team member permission. Your must have topmost access privilege to use Access Token Credential or use Application Key to make this reques

```
const data = {
    "access": "level_3",
    "permissions": [
        "read",
        "write",
        "delete"
    ]
}

const member_id = 'iubeubei....'
swayauth.client.management.team.permission(member_id, data)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Member permission changed successfully"
}
```

## **h.  Card**

### i.  Get Saved Cards

Get list of saved cards information. Your must have topmost access priviledge to use Access Token Credential or use Application Key to make this request.

```javascript
swayauth.client.management.card.list()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "65aba423672db4d4d78c0670",
            "first_6digit": "408408",
            "last_4digit": "4081",
            "exp_month": "12",
            "exp_year": "2030",
            "country_code": "NG",
            "card_type": "visa ",
            "bank": "TEST BANK",
            "account_name": null,
            "company_email": "fashanutosin7@gmail.com",
            "created_at": "2024-01-20T10:44:50.953Z",
            "updated_at": "2024-01-20T10:44:50.953Z"
        }
    ],
    "status": true,
    "message": "Ok"
}
```

### ii.  Delete Saved Card

Delete a saved card information. Your must have topmost access priviledge to use Access Token Credential or use Application Key to make this request.

```javascript
const card_id = 'eneiniuene....'
swayauth.client.management.card.delete(card_id)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Request was processed successfully"
}
```

### iii.  Auto Save New Card Details During Payment

Auto saved card information. Your must have topmost access priviledge to use Access Token Credential or use Application Key to make this request.

```javascript
swayauth.client.management.card.autosaveCards(true)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": null,
    "status": true,
    "message": "Request was processed successfully"
}
```

## **i.  Transaction**

### i.  Get Transaction History

Get transaction history. Your must have topmost access priviledge to use Access Token Credential or use Application Key to make this request.

```typescript
export interface TransactionParams {
  page?: number | string;
  size?: number | string;
}
const params: TransactionParams = {}
swayauth.client.management.transactions.list(params)
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": [
        {
            "id": "65aba422672db4d4d78c066f",
            "amount": 500,
            "type": "wallet",
            "purpose": "Wallet Topup",
            "status": "success",
            "reference": "20lpw0my6m",
            "company_id": "65a2f888684add2bc7aa612d",
            "created_at": "2024-01-20T10:44:50.587Z",
            "updated_at": "2024-01-20T10:44:50.587Z"
        },
        {
            "id": "65aba3a8672db4d4d78c066d",
            "amount": 2000,
            "type": "wallet",
            "purpose": "Wallet Topup",
            "status": "success",
            "reference": "mnqq2201f3",
            "company_id": "65a2f888684add2bc7aa612d",
            "created_at": "2024-01-20T10:42:48.881Z",
            "updated_at": "2024-01-20T10:42:48.881Z"
        }
    ],
    "status": true,
    "message": "Ok"
}
```

## **j.  Subscription**

### i.  Get Current Subscription Detail

Get current subscription detail.

```javascript
swayauth.client.management.subscription.get()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error)
  });
```

Sample Response:

```javascript
{
    "data": {
        "id": "65bf79e810780848fff01835",
        "amount": 0,
        "subscription": "free",
        "company_id": "65bf79cd10780848fff0182f",
        "created_at": "2024-02-04T11:50:00.037Z",
        "updated_at": "2024-02-04T11:50:00.037Z"
    },
    "status": true,
    "message": "Ok"
}
```