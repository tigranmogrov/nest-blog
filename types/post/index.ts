import { Document } from 'mongoose';

export interface IPostData extends Document {
  title: string;
  desc: string;
}

export interface IPost {
  totalItems: number;
  totalPage: number;
  items: IPostData[];
}
