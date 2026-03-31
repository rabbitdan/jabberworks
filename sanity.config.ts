import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'es2dovdw',
    dataset: 'production'
  },
  typegen: {
    generateConfigProperty: 'all',
    outputPath: '../site/types/sanity.generated.ts'
  }
})