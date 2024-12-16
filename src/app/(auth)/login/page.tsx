'use client';

import Logo from 'public/logo/logo.svg';

const kakaoLoginHandler = async () => {
  // location.href= process.env.NEXT_PUBLIC_SERVER_BASE_URL;
  const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? 'https://dev-api.cshub.kr';
  window.location.href = `${serverBaseUrl}/api/v1/auth/kakao/login`;
};

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Logo />
      <button type="button" onClick={kakaoLoginHandler}>
        kakao
      </button>
    </div>
  );
};

export default LoginPage;
