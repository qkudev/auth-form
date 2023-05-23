namespace AuthAPI {
  /**
   * JSON Web Token
   */
  type JWT = string;

  interface EmailPasswordPayload {
    email: Email;
    password: Password;
  }

  /**
   * Strategy pattern to easily extend auth methods (OAuth, QR code, etc.)
   */
  interface EmailStrategy {
    strategy: 'email';
    payload: EmailPasswordPayload;
  }

  type AuthStrategy = EmailStrategy;

  type SignInPayload = AuthStrategy;
  type SignUpPayload = AuthStrategy;

  interface TokenPayload {
    token: JWT;
  }

  type SignInResponse = TokenPayload;
  type SignUpResponse = TokenPayload;
}
