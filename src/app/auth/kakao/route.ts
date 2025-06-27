import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { StatusCodes } from 'http-status-codes';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const cookieStore = cookies();

  const supabase = createRouteHandlerClient({
    cookies: () => cookieStore,
  });

  try {
    // 카카오 OAuth URL 생성
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: 'kakao',
      options: {
        redirectTo: `${req.nextUrl.origin}/auth/callback`,
        queryParams: {},
      },
    });

    console.log('data : ', data);

    if (error) {
      console.error('OAuth error:', error);
      return NextResponse.json(
        { error: error.message },
        { status: StatusCodes.BAD_REQUEST }
      );
    }

    if (data?.url) {
      // 리다이렉트 대신 URL을 JSON으로 반환
      return NextResponse.json({ url: data.url }, { status: StatusCodes.OK });
    } else {
      return NextResponse.json(
        { error: 'OAuth URL not generated' },
        { status: StatusCodes.INTERNAL_SERVER_ERROR }
      );
    }
  } catch (error) {
    console.error('Unexpected error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: StatusCodes.INTERNAL_SERVER_ERROR }
    );
  }
}
