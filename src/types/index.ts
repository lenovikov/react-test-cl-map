import { Method } from 'axios';

export type Request = {
  url: string;
  method: Method;
  data?: any;
};

export type PaginationProps = {
  current: number;
  pages: number;
  next: () => void;
  previous: () => void;
  set: (num: number) => void;
};
