import { ValidationError, ValidationOptions, ObjectSchema } from 'joi';
import { BodyEvents } from 'zhead';
import { H3Error } from 'h3';

export const postValidate = (
  _schema: ObjectSchema,
  body: BodyEvents,
  options: ValidationOptions = {}
): Partial<H3Error | undefined> => {
  const { error }: { error: ValidationError | undefined } = _schema.validate(
    body,
    options
  );
  if (error) {
    throw createError({
      message: error.message.replace(/"/g, ''),
      statusCode: 400,
      fatal: false,
    });
  }
  return undefined;
};
