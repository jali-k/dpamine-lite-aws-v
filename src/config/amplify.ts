import { ResourcesConfig } from "aws-amplify";

export const amplifyConfig: ResourcesConfig = {
  Auth: {
    Cognito: {
      userPoolId: process.env.COGNITO_USER_POOL_ID as string,
      userPoolClientId: process.env.COGNITO_USER_POOL_CLIENT_ID || '',
      signUpVerificationMethod: process.env.COGNITO_SIGNUP_VERIFICATION_METHOD as 'code' | 'link',
      loginWith: {
        oauth: {
          domain: process.env.COGNITO_OAUTH_DOMAIN as string,
          scopes: (process.env.COGNITO_OAUTH_SCOPES || '').split(','),
          redirectSignIn: [process.env.COGNITO_OAUTH_REDIRECT_SIGNIN as string],
          redirectSignOut: [process.env.COGNITO_OAUTH_REDIRECT_SIGNOUT as string],
          responseType: process.env.COGNITO_OAUTH_RESPONSE_TYPE as 'code' | 'token',
          providers: ['Google'], 
        },
        email: process.env.ENABLE_EMAIL_LOGIN === 'true',
        phone: process.env.ENABLE_PHONE_LOGIN === 'true',
        username: process.env.ENABLE_USERNAME_LOGIN === 'true',
      },
    },
  },
};
