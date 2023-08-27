import Joi from 'joi';
import { IPost } from '~/server/api/posts/post.model';

export const PostSchema = Joi.object<IPost>({
  title: Joi.string().min(3).required(),
  desc: Joi.string().min(3).required(),
});
