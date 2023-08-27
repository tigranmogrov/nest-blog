import { defineStore } from 'pinia';
import { IUserCredential, IUserResponse } from '~~/types/user';

export interface IAuthState {
  isLogged: boolean;
  userData: IUserResponse | null;
}

export const useAuthStore = defineStore('auth', {
  state: (): IAuthState => ({
    isLogged: false,
    userData: null,
  }),
  actions: {
    async signIn(
      userData: IUserCredential
    ): Promise<Error | string | undefined> {
      const { data, error, status } = await useFetch<IUserResponse>(
        '/api/auth/login',
        {
          method: 'POST',
          body: { ...userData },
        }
      );
      switch (status.value) {
        case 'success':
          this.isLogged = true;
          this.userData = data.value;
          return 'success';
        case 'error':
          throw new Error(
            `Status: ${error.value?.statusCode}    Message:${error.value?.statusMessage}`
          );
      }
    },
  },
});
