import { H3Error, H3Event } from 'h3';
import { NuxtError } from 'nuxt/app';
import { Post } from '~~/server/api/posts/post.model';
import { IPost } from '~~/types/post';
import { PostLimit } from '~~/enum/post.enum';

export default defineEventHandler(
  async (event: H3Event): Promise<NuxtError | H3Error | IPost> => {
    const query = getQuery(event);
    const limit = Number(query.limit) || PostLimit.DEFAULT;
    const page = (Number(query.page) - 1) * limit;
    const items = await Post.find()
      .skip(page)
      .limit(limit)
      .sort({ updatedAt: -1 });
    const totalItems = await Post.count();
    const totalPage = Math.ceil(totalItems / limit);
    return {
      totalItems,
      totalPage,
      items,
    };
  }
);
