import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'standalone', // 독립 실행 파일 빌드
  images: {
    formats: ['image/avif', 'image/webp'], // 지원 이미지 포맷
    imageSizes: [16, 32, 64, 128, 256], // 정적 이미지 크기
    deviceSizes: [640, 750, 828, 1080], // 반응형 이미지 크기
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // 모든 외부 이미지 허용
      },
    ],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'], // SVG 파일을 React 컴포넌트로 변환
    });

    return config;
  },
  /* config options here */
  async rewrites() {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    if (process.env.NODE_ENV === 'development') {
      return [
        { 
          source: '/be/:path*',
          destination: `${baseUrl}/be:path*`,
        },
      ];
    }
    return [];
  },
  
};

export default nextConfig;
