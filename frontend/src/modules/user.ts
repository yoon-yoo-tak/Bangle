import { atom } from 'recoil';

const KEY = 'USER';

export const UserInfoState = atom({
  key: `${KEY}/info`,
  default: {
    nickname: '',
    dust: 0,
    email: '',
    role: 'ROLE_USER',
    userId: ''
  },
});
