export const cognitoConfig = {
  authority: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_ZsrQeorgG",
  client_id : "7ufhtt7hrj6vdg95o1o1fqp28s",
  // redirect_uri: "https://d84l1y8p4kdic.cloudfront.net",
  redirect_uri: "http://localhost:5173/auth/callback",
  response_type: "code",
  scope: "openid email profile",
  metadata: {
    issuer: "https://cognito-idp.us-east-1.amazonaws.com/us-east-1_ZsrQeorgG",
    authorization_endpoint: "https://us-east-1zsrqeorgg.auth.us-east-1.amazoncognito.com/oauth2/authorize",
    token_endpoint: "https://us-east-1zsrqeorgg.auth.us-east-1.amazoncognito.com/oauth2/token"
  }
};