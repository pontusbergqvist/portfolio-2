interface File {
	url: string
}

interface ImageFields {
	file: File
}

interface Image {
	fields: ImageFields,
}

interface ItemContent {
	value: string
}

interface Content {
	content: ItemContent[]
}

interface Body {
	content: Content[]
}

interface PostFields {
	title: string,
	description: string,
	image: Image
	slug: string,
	tags: string[],
	body: Body,
}

interface Sys {
	createdAt: string,
	id: string
}

export interface BlogEntry extends PostFields {
	sys: Sys,
}

export interface Post extends PostFields {
	id: string
	date: string,
}
