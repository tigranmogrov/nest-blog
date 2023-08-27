import { H3Event } from 'h3';
import { Post } from '~~/server/api/posts/post.model';
import { postValidate } from '~~/server/validators/request.validator';
import { PostSchema } from '~~/server/validators/schemas/post.schema';
// import { PostSchema } from '~/server/validators/post.validator';
import { getServerSession } from '#auth';

export default defineEventHandler(
  async (event: H3Event): Promise<{ message: string } | undefined> => {
    const body = await readBody(event);
    const session = await getServerSession(event);
    if (!session) {
      return { message: 'unauthenticated!' };
    }
    // if (!event.context.user) {
    //   return createError({
    //     statusCode: 401,
    //     message: "You don't have the rights to access this resource",
    //   });
    // }
    const validateError = postValidate(PostSchema, body);

    if (validateError) return;

    try {
      await Post.create(body);
      return { message: 'Author created' };
    } catch (error: any | Error) {
      throw createError({
        message: error.message,
      });
    }
  }
);
