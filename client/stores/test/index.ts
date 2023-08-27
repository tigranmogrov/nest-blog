import { defineStore } from 'pinia';

import { state } from '~/stores/test/state';
import { actions } from '~/stores/test/actions';
import { getters } from '~/stores/test/getters';

export const useFiltersStore = defineStore({
  id: 'test',
  state,
  actions,
  getters,
});
