import KakaoLoginButton from './_components/KakaoLoginButton';

const Home = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      <div className="relative z-10 flex min-h-screen items-center justify-center p-4">
        <div className="mx-auto max-w-5xl text-center text-white">
          {/* 메인 타이틀 섹션 */}
          <div className="mb-16 space-y-8">
            <div className="space-y-6">
              <h1 className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-6xl leading-tight font-black text-transparent md:text-8xl">
                About Me
              </h1>
              <div className="flex items-center justify-center space-x-3 text-3xl font-light md:text-4xl">
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  내가 생각 하는 나<br />
                  다른 사람이 보는 나
                </span>
              </div>
            </div>

            <p className="mx-auto max-w-3xl text-xl leading-relaxed font-light text-blue-100 md:text-2xl">
              다양한 사람들이 생각하는 모습을 통해
              <br />
              <span className="font-medium text-pink-200">
                내가 몰랐던 나의 모습을 발견해봐요
              </span>
            </p>
          </div>

          {/* CTA 섹션 */}
          <div className="fixed right-0 bottom-0 left-0 z-20 bg-gradient-to-t from-black/50 to-transparent px-6 py-12 backdrop-blur-sm">
            <KakaoLoginButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
