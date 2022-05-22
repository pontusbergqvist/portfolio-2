import { Asset, EntryFields } from 'contentful';

export interface Post {
  title: EntryFields.Text;
  description: EntryFields.Text;
  slug: EntryFields.Text;
  timeToRead: EntryFields.Number;
  image: Asset;
  body: string;
  id: string;
  date: string;
  tags: string[];
}

export interface AdjacentPostData {
  title: EntryFields.Text;
  slug: EntryFields.Text;
}
