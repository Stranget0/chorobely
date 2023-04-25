import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {colorInput} from "@sanity/color-input"
import {schemaTypes} from './schemas'
import { scheduledPublishing } from '@sanity/scheduled-publishing'

export default defineConfig({
  name: 'default',
  title: 'chorobely',

  projectId: 'aur5ex50',
  dataset: 'production',

  plugins: [deskTool(), visionTool(), colorInput(), scheduledPublishing()],

  schema: {
    types: schemaTypes,
  },
})
