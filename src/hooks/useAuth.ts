import { resetPassword, resetRequest, signin, signup } from '@/api/auth.api';
import { SignupProps } from '@/pages/Signup';
import { useAuthStore } from '@/store/authStore';
import { useAlert } from './useAlert';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export const useAuth = () => {
  const { storeSignin } = useAuthStore();
  const { showAlert } = useAlert();
  const navigate = useNavigate();

  const userSignin = (data: SignupProps) => {
    signin(data).then(
      (res) => {
        storeSignin(res.token);
        showAlert('로그인이 완료되었습니다.');
        navigate('/');
      },
      (error) => {
        showAlert('로그인에 실패하였습니다.');
      }
    );
  };

  const userSignup = (data: SignupProps) => {
    signup(data).then(() => {
      showAlert('회원가입이 완료되었습니다.');
      navigate('/signin');
    });
  };

  const userResetPassword = (data: SignupProps) => {
    resetPassword(data).then(() => {
      showAlert('비밀번호가 초기화되었습니다.');
      navigate('/login');
    });
  };

  const [resetRequested, setResetRequested] = useState<boolean>(false);
  const userResetRequest = (data: SignupProps) => {
    resetRequest(data).then(() => {
      setResetRequested(true);
    });
  };

  return {
    userSignin,
    userSignup,
    userResetPassword,
    userResetRequest,
    resetRequested,
  };
};
