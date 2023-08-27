import { H3Event } from 'h3';

import { User } from '~~/server/api/users/user.model';

export default defineEventHandler(async (event: H3Event) => {
  const body = await readBody(event);
  // const validateError = postValidate(PostSchema, body, {
  //   abortEarly: true,
  //   allowUnknown: true,
  // });
  //
  // if (validateError) return;

  try {
    return User.findById(body._id);
  } catch (error: any | Error) {
    throw createError({
      message: error.message,
    });
  }
});
