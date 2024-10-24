// Types
import type { ProfileType } from '../../types/profile'

export type LoginCredentialsType = {
  email: string;
  password: string;
};

export type AuthResponseType = {
  accessToken: string
  refreshToken: string
  profile: ProfileType
}
