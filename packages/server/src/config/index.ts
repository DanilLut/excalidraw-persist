import { env } from './env';
import path from 'path';

export const serverConfig = {
  port: env.PORT || 3001,
  nodeEnv: env.NODE_ENV || 'development',
  isDev: env.NODE_ENV !== 'production',
  dbPath: path.join(process.cwd(), 'data', 'excalidraw.db'),
};

export const dbConfig = {
  dbPath: serverConfig.dbPath,
  schemaPath: path.join(process.cwd(), 'src', 'lib', 'schema.sql'),
};

export * from './env';
