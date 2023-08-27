export interface ITestState {
  test: string[];
}

export const state = (): ITestState => ({
  test: ['youtube', 'twitch'],
});
