import { getCookie } from '@/api/cookies';
import { getQueryClient } from '@/lib/queryClinet';
import { QUERY_KEY } from '@/constants/queryKey';
import { AuthProviderServerState } from './type';
import handleError from '@/utils/error';

const getMyInfoOnServer = async () => {
  const queryClient = getQueryClient();
  const accessToken = await getCookie('accessToken');

  const initialState: AuthProviderServerState = {
    myInfo: undefined,
    isSignIn: false,
    accessToken: accessToken,
    queryClient,
  };

  if (!accessToken) {
    return initialState;
  }

  try {
    const data = await queryClient.fetchQuery({
      queryKey: [QUERY_KEY.MY_INFO],
      queryFn: () => {}, //TODO: 로그인 기능 구현 후 대체 예정
    });
    return {
      ...initialState,
      myInfo: data,
      isSignIn: true,
    };
  } catch (error) {
    handleError(error);
  }

  return initialState;
};
export default getMyInfoOnServer;
