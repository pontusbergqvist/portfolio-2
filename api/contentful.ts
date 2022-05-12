import { ContentfulClientApi, createClient, EntryCollection } from 'contentful';
import { BlogEntry, Post } from '../models/blog';
import { WorkEntry, Project } from '../models/work';

export default class Contentful {
	client: ContentfulClientApi;

	constructor() {
		this.client = createClient({
			space: process.env.SPACE_ID as string,
			accessToken: process.env.ACCESS_TOKEN as string
		})
	}

	async getAllBlogPosts(): Promise<Post[]> {
		const res: EntryCollection<BlogEntry> = await this.client.getEntries({ content_type: 'blog' });
		return res.items.map(post => {
			const { title, slug, description, tags, image, body, timeToRead } = post.fields;
			const { id, createdAt } = post.sys;
			return { id, title, slug, tags, description, image, body, date: createdAt, timeToRead } 
		})
	}

	async getAllProjects(): Promise<Project[]> {
		const res: EntryCollection<WorkEntry> = await this.client.getEntries({ content_type: 'work' });
		return res.items.map(project => {
			const { title, slug, tags, description, image, body } = project.fields;
			return { id: project.sys.id, title, slug, tags, description, image, body }
		});
	}

	async getAllProjectPaths() {
		const res: EntryCollection<WorkEntry> = await this.client.getEntries({ content_type: 'work' });
		return res.items.map(item => ({
			params: {
				slug: item.fields.slug
			}
		})) 
	}

	async getAllBlogPaths() {
		const res: EntryCollection<BlogEntry> = await this.client.getEntries({ content_type: 'blog' });
		return res.items.map(item => ({
			params: {
				slug: item.fields.slug
			}
		})) 
	}


	// todo: these input types are very ugly, might fix these soon™.. (slug should only be a string)
	// https://github.com/vercel/next.js/discussions/16522
	async getProject(slug: string | string[] | undefined): Promise<Project> {
		const res: EntryCollection<WorkEntry> = await this.client.getEntries({ content_type: 'work' });
		const project = res.items.find(project => project.fields.slug == slug);
		if (!project) {
			throw new TypeError(`No entry is using the slug ${slug}.`)
		} else {
			const { title, slug, tags, description, image, body } = project.fields;
			return {
				id: project.sys.id,
				title,
				slug,
				tags,
				description,
				image,
				body,
				...(project.fields.externalLink) && { externalLink: project.fields.externalLink },
				...(project.fields.github) && { github: project.fields.github },
			} 
		}
	}

	async getPost(slug: string | string[] | undefined): Promise<Post> {
		const res: EntryCollection<BlogEntry> = await this.client.getEntries({ content_type: 'blog' });
		const post = res.items.find(post => post.fields.slug == slug);
		if (!post) {
			throw new TypeError(`No entry is using the slug ${slug}.`)
		} else {
			const { title, slug, tags, description, image, body, timeToRead } = post.fields
			const { id, createdAt } = post.sys;
			return { id, title, slug, tags, description, image, body, date: createdAt, timeToRead } 
		}
	}
}
