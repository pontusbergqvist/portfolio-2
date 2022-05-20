import { EntryFields, Asset } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface Project {
  id: string
  title: EntryFields.Text
  description: EntryFields.Text
  image: Asset
  slug: EntryFields.Text
  tags: string[]
  body: Document
  externalLink?: EntryFields.Text
  github?: EntryFields.Text
}
