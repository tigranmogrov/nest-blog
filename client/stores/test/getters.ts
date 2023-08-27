import { StoreGetters } from 'pinia';
import { ITestState } from '~/stores/test/state';

export const getters: StoreGetters<ITestState> = {
  filtersListGetters: (state: ITestState) => state.test,
};
