'use client';

import { useRouter } from 'next/navigation';

import KakaoLogo from 'public/kakao.svg';
import Logo from 'public/logo/logo.svg';

const kakaoLoginHandler = async () => {
  // location.href= process.env.NEXT_PUBLIC_SERVER_BASE_URL;
  const serverBaseUrl = process.env.NEXT_PUBLIC_SERVER_BASE_URL ?? 'https://dev-api.cshub.kr';
  window.location.href = `${serverBaseUrl}/api/v1/auth/kakao/login`;
};

const LoginPage = () => {
  const router = useRouter();

  return (
    <div className="mt-20 flex h-full flex-col items-center justify-center">
      <Logo />
      <h1 className="mb-44 text-2xl font-semibold">퀴즈로 준비하는 테크 인터뷰</h1>

      <button
        type="button"
        onClick={kakaoLoginHandler}
        className="mb-4 flex h-14 w-full items-center justify-center gap-1.5 rounded-lg bg-yellow-300 text-[14.5px] font-medium"
      >
        <KakaoLogo width={20} height={20} />

        <div>카카오톡으로 시작하기</div>
      </button>
      <button
        type="button"
        onClick={() => router.push('/')}
        className="flex h-14 w-full items-center justify-center gap-1.5 rounded-lg bg-gray-100 text-[14.5px] font-medium"
      >
        <div>비로그인으로 시작하기</div>
      </button>
    </div>
  );
};

export default LoginPage;
