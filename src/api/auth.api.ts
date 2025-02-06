import { SignupProps } from '../pages/Signup';
import { httpClient } from './http';

export const signup = async (userData: SignupProps) => {
  const response = await httpClient.post('/users/signup', userData);
  return response.data;
};

export const resetRequest = async (data: SignupProps) => {
  const response = await httpClient.post('/users/reset', data);
  return response.data;
};

export const resetPassword = async (data: SignupProps) => {
  const response = await httpClient.put('/users/reset', data);
  return response.data;
};

interface SigninResponse {
  token: string;
}

export const signin = async (userData: SignupProps) => {
  const response = await httpClient.post<SigninResponse>(
    '/users/signin',
    userData
  );
  return response.data;
};
