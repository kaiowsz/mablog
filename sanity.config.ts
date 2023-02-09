import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { myTheme } from './theme'
import { getDefaultDocumentNode } from './structure'

const projectId = "jo41sjfw"
const dataset = "production"

export default defineConfig({
  basePath: "/studio",
  name: "MABLOG_STUDIO",
  title: 'Mablog Studio',

  projectId,
  dataset,

  plugins: [deskTool({ defaultDocumentNode: getDefaultDocumentNode }), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
