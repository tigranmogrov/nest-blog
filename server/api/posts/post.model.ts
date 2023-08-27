import { Schema, model } from 'mongoose';

export interface IPost {
  title: string;
  desc: string;
}

const postSchema = new Schema<IPost>(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Post = model<IPost>('Post', postSchema);
