export const AWS_CONFIG = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_2lcqsqogL',
      userPoolClientId: '32gucpkcc3kf1b3alat72u4vqa',
      loginWith: {
        email: true,
      },
      signUpVerificationMethod: "code",
      userAttributes: {
        email: {
          required: true,
        },
      },
      allowGuestAccess: true,
      passwordFormat: {
        minLength: 8,
        requireLowercase: true,
        requireUppercase: true,
        requireNumbers: true,
        requireSpecialCharacters: true,
      },
    },
  },
}