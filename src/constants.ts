export const AWS_CONFIG = {
  Auth: {
    Cognito: {
      userPoolId: 'us-east-1_594Nnz476',
      userPoolClientId: '13vfa0pg4kuovtf805633gkic7',
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