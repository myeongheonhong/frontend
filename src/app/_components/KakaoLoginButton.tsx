'use client';

import { ArrowLeft } from 'lucide-react';
import React from 'react';

const KakaoLoginButton = () => {
  const handleKakaoLogin = async () => {
    try {
      // 카카오 로그인 API 호출
      const response = await fetch('/api/auth/kakao', {
        method: 'POST',
      });

      const data = await response.json();

      if (data.url) {
        // 받은 URL로 리다이렉트
        window.location.href = data.url;
      } else {
        console.error('OAuth URL not received:', data.error);
      }
    } catch (error) {
      console.error('Kakao login error:', error);
    }
  };

  return (
    <button
      onClick={handleKakaoLogin}
      className="group flex-center w-full rounded-lg bg-yellow-400 px-6 py-3 font-bold text-black shadow-lg transition-all duration-300 hover:scale-105 hover:bg-yellow-500 hover:shadow-xl active:scale-95"
    >
      <span className="flex items-center space-x-3">
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          카카오로 시작하기
        </span>
        <ArrowLeft
          className="h-5 w-5 rotate-180 transition-all duration-300 group-hover:translate-x-2 group-hover:animate-[bounce_0.6s_ease-in-out_infinite]"
          style={{
            animation: 'none',
          }}
        />
      </span>

      <style jsx>{`
        @keyframes bounce {
          0%,
          100% {
            transform: translateX(0) rotate(180deg);
          }
          50% {
            transform: translateX(8px) rotate(180deg);
          }
        }
        .group:hover .animate-\\[bounce_0\\.6s_ease-in-out_infinite\\] {
          animation: bounce 0.6s ease-in-out infinite;
        }
      `}</style>
    </button>
  );
};

export default KakaoLoginButton;
