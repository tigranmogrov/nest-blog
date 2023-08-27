import mongoose from 'mongoose';
import { Nitro } from 'nitropack';

export default async (_nitroApp: Nitro) => {
  // run your connect code here
  const config = useRuntimeConfig();
  // connect to mongodb
  try {
    await mongoose.connect(config.dbUrl);

    console.log(`Connected to DB`);
  } catch (e) {
    return createError({
      statusCode: 500,
      statusMessage: 'Something went wrong.',
    });
  }
};
