'use client'

import { AWS_CONFIG } from '@/constants';
import { Authenticator, Theme, ThemeProvider, useTheme } from '@aws-amplify/ui-react'
import { Amplify, ResourcesConfig } from 'aws-amplify';
import { I18n } from 'aws-amplify/utils';
import './auth.css'
import React from 'react'

Amplify.configure( AWS_CONFIG as ResourcesConfig, {
  ssr: true
});

function AuthenticationProvider({ children } : { children: React.ReactNode }) {

  const theme: Theme = {
    name: 'Motif Login Theme',
    tokens: {
      components: {
        authenticator: {
          router: {
            boxShadow: `none`,
            borderWidth: '0',
          },
          form: {
            padding: `20px`,
          },
        },
        fieldcontrol: {
          _focus: {
            boxShadow: `0 0 0 2px #A2D2CA`,
            borderColor: '#888989',
          },
          borderColor: '#888989',
          paddingBlockEnd: '12px',
          paddingBlockStart: '12px',
        },
        tabs: {
          item: {
            color: '#888989',
            fontWeight: '400',
            _active: {
              color: '#378188',
            },
          },
        },
      },
    },
  };

  const formFields = {
    signIn: {
      username: {
        placeholder: '',
        isRequired: true,
        label: 'Email Address:'
      },
      password: {
        placeholder: '',
        isRequired: true,
        label: 'Password:'
      },
    },
    signUp: {
      email: {
        placeholder: '',
        isRequired: true,
        label: 'Email Address:'
      },
      password: {
        placeholder: '',
        isRequired: true,
        label: 'Password:'
      },
      confirm_password: {
        placeholder: '',
        isRequired: true,
        label: 'Confirm Password:'
      }
    },
    forgotPassword: {
      username: {
        placeholder: '',
        isRequired: true,
        label: 'Email Address:'
      }
    },
    confirmResetPassword: {
      confirmation_code: {
        placeholder: '',
        label: 'Confirmation Code:',
        isRequired: true,
      },
      password: {
        placeholder: '',
        isRequired: true,
        label: 'Password:'
      },
      confirm_password: {
        placeholder: '',
        isRequired: true,
        label: 'Confirm Password:'
      }
    },
    confirmSignIn: {
      confirmation_code: {
        placeholder: '',
        label: 'Confirmation Code:',
        isRequired: true,
      },
    },
  }

  const components = {
    Header() {  
      return (
        <p className='text-[30px] mt-[30px] text-center mb-5 font-light font-poppins text-secondary-300'>Distributor Login</p>
      );
    },
    ForgotPassword: {
      Header() {
        return (
          <></>
        );
      },
    },
    ConfirmResetPassword: {
      Header() {
        return (
          <></>
        );
      },
    },
    ConfirmSignUp: {
      Header() {
        return (
          <></>
        );
      },
    }
  };

  I18n.putVocabulariesForLanguage('en', {
    'Send code': 'Send Code',
    'Create Account': 'Sign Up',
    'PreSignUp failed with error User is not authorized to sign up.': 'User is not authorized to sign up.',
  });

  return (
    <ThemeProvider theme={theme}>
      <Authenticator formFields={formFields} components={components}>
        {children}
      </Authenticator>
    </ThemeProvider>
  )
}

export default AuthenticationProvider