import { Asset, EntryFields } from "contentful"
import { Document } from '@contentful/rich-text-types';

export interface Post {
	title: EntryFields.Text;
	description: EntryFields.Text;
	slug: EntryFields.Text;
	timeToRead: EntryFields.Number;
	image: Asset;
	body: Document;
	id: string;
	date: string;
	tags: string[];
}

export interface AdjacentPostData {
	title: EntryFields.Text;
	slug: EntryFields.Text;
}
