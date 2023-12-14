import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	overwrite: true,
	schema: 'http://localhost:8080/v1/graphql',
	documents: 'src/**/*.gql.ts',
	ignoreNoDocuments: true,
	generates: {
		'src/lib/generated/': {
			preset: 'gql-tag-operations-preset',
			plugins: ['typescript', 'typescript-document-nodes'],
			config: {
				scalars: {
					uuid: 'string'
				},
				useTypeImports: true
			}
		}
	}
};

export default config;
