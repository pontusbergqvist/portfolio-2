
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

interface WorkFields {
	title: string,
	description: string,
	image: Image
	slug: string
	tags: string[]
	body: Body
	date?: string
	externalLink?: string
	github?: string
}

interface Sys {
	id: string
}

export interface WorkEntry extends WorkFields {
	sys: Sys,
}

export interface Project extends WorkFields {
	id: string
}

export interface WorkParam {
	project: string;
}

export interface BlogParam {
	post: string;
}
