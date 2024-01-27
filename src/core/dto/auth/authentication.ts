export interface AuthenticationDTO {
  access: {
    token: string;
    expiredAt: Date;
  };
}
