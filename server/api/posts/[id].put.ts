import { H3Event } from 'h3';
import { Post } from '~~/server/api/posts/post.model';
import { postValidate } from '~~/server/validators/request.validator';
import { PostSchema } from '~~/server/validators/schemas/post.schema';

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);

  if (!event?.context?.params?.id) return;
  const id: string = event.context.params.id;

  const validateError = postValidate(PostSchema, body, {
    abortEarly: true,
    allowUnknown: true,
  });

  if (validateError) return;

  try {
    await Post.findByIdAndUpdate(id, body);
    return { message: 'Author updated' };
  } catch (error: any | Error) {
    throw createError({
      message: error.message,
    });
  }
});
