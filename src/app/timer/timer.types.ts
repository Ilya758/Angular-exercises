export interface ITimer {
  count: number;
  isStarted: boolean;
  interval: null | TSetTimeout;
}

export type TSetTimeout = ReturnType<typeof setTimeout>;
