export enum ErrorStatusCode {
  Unauthorize = 401,
  PaymentRequired,
  Forbidden,
  NotFound,
}

export type TypeCallback<T> = (data?: T) => void;

export type OptionsLoader = {
  endpoint: string;
  options?: {sources?: string}
}

export interface IDataNews {
  articles: IArticle[]
}

export interface IDataSources {
  sources: ISources[]
}   

export interface IArticle {
  urlToImage: string;
  author: string;
  source: {name: string};
  publishedAt: string;
  title: string;
  description: string;
  url: string;
}

export interface ISources {
  name: string;
  id: string;
}