import { SanityCodegenConfig } from 'sanity-codegen';

const config: SanityCodegenConfig = {
  schemaPath: './schemas/schema.ts',
  outputPath: './generatedTypes.ts',
};

export default config;