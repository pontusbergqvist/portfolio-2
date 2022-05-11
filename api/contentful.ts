import { ContentfulClientApi, createClient, EntryCollection } from 'contentful';
import { BlogEntry } from '../models/blog';
import { WorkEntry, Project } from '../models/work';

export default class Contentful {
	client: ContentfulClientApi;

	constructor() {
		this.client = createClient({
			space: process.env.SPACE_ID as string,
			accessToken: process.env.ACCESS_TOKEN as string
		})
	}

	async getAllBlogPosts() {
		const res: EntryCollection<BlogEntry> = await this.client.getEntries({ content_type: 'blog' });
		return res.items.map(post => ({
				id: post.sys.id,
				title: post.fields.title,
				slug: post.fields.slug,
				description: post.fields.description,
				tags: post.fields.tags,
				image: post.fields.image,
				body: post.fields.body,
				date: post.sys.createdAt,
		}))
	}

	async getAllProjects(): Promise<Project[]> {
		const res: EntryCollection<WorkEntry> = await this.client.getEntries({ content_type: 'work' });
		return res.items.map(project => ({
			id: project.sys.id,
			title: project.fields.title,
			slug: project.fields.slug,
			tags: project.fields.tags,
			description: project.fields.description,
			image: project.fields.image,
			body: project.fields.body,
		}));
	}

	async getAllProjectPaths() {
		const res: EntryCollection<WorkEntry> = await this.client.getEntries({ content_type: 'work' });
		return res.items.map(item => ({
			params: {
				slug: item.fields.slug
			}
		})) 
	}

	// Surely there is a better way to do this using ParsedUrlQuery type
	// todo: getStaticPaths each path in paths can only be a string
	// https://github.com/vercel/next.js/discussions/16522
	async getProject(slug: string | string[] | undefined): Promise<Project> {
		const res: EntryCollection<WorkEntry> = await this.client.getEntries({ content_type: 'work' });
		const project = res.items.find(project => project.fields.slug == slug);
		if (!project) {
			throw new TypeError(`No entry is using the slug ${slug}.`)
		} else {
			return {
				id: project.sys.id,
				title: project.fields.title,
				slug: project.fields.slug,
				tags: project.fields.tags,
				description: project.fields.description,
				image: project.fields.image,
				body: project.fields.body,
			} 
		}
	}
}
