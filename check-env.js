const env = process.env.NODE_ENV;

if (env !== 'production') {
  process.exit(1);
}