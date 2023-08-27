import { MongoClient } from 'mongodb';
import { H3Event } from 'h3';
import { IPost } from '~~/types/post';

export default defineEventHandler(async (event: H3Event): Promise<any> => {
  const config = useRuntimeConfig();
  const client = new MongoClient(config.dbUrl);
  console.log(client);
});
