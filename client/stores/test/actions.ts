import { StateTree } from 'pinia';
// import { ITestState } from '~/stores/test/state';

export const actions: StateTree = {
  addValueToFilterList(value: string) {
    this.test.push(value);
    // useStore.filtersList.push('111');
    console.log(this.test);
  },
};
