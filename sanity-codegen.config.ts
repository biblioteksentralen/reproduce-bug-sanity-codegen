import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.js',
  outputPath: './generatedTypes.ts',
};

export default config;