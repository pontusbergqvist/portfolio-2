import { Project } from '../models/work';
import { Post, AdjacentPostData } from '../models/blog';
import { ContentfulClientApi, createClient, EntryCollection } from 'contentful';

export default class Contentful {
  client: ContentfulClientApi;

  constructor() {
    this.client = createClient({
      space: process.env.SPACE_ID as string,
      accessToken: process.env.ACCESS_TOKEN as string,
    });
  }

  async getAllBlogPosts(): Promise<Post[]> {
    const collection: EntryCollection<Post> = await this.client.getEntries({
      content_type: 'blog',
    });
    return collection.items.map((entry) => {
      const { title, slug, description, tags, image, body, timeToRead } =
        entry.fields;
      const { id, createdAt } = entry.sys;
      return {
        id,
        title,
        slug,
        tags,
        description,
        image,
        body,
        date: createdAt,
        timeToRead,
      };
    });
  }

  async getAllProjects(): Promise<Project[]> {
    const collection: EntryCollection<Project> = await this.client.getEntries({
      content_type: 'work',
    });
    return collection.items.map((entry) => {
      const { title, slug, tags, description, image, body } = entry.fields;
      return { id: entry.sys.id, title, slug, tags, description, image, body };
    });
  }

  async getAllProjectPaths(): Promise<any> {
    const collection: EntryCollection<Project> = await this.client.getEntries({
      content_type: 'work',
    });
    return collection.items.map((entry) => ({
      params: { slug: entry.fields.slug },
    }));
  }

  async getAllBlogPaths(): Promise<any> {
    const collection: EntryCollection<Post> = await this.client.getEntries({
      content_type: 'blog',
    });
    return collection.items.map((entry) => ({
      params: { slug: entry.fields.slug },
    }));
  }

  async getProject(slug: string): Promise<Project> {
    const collection: EntryCollection<Project> = await this.client.getEntries({
      content_type: 'work',
    });
    const project = collection.items.find((entry) => entry.fields.slug == slug);
    if (!project) {
      throw new TypeError(`Couldn't find any entries using slug ${slug}`);
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
        ...(project.fields.externalLink && {
          externalLink: project.fields.externalLink,
        }),
        ...(project.fields.github && { github: project.fields.github }),
      };
    }
  }

  async getPost(slug: string): Promise<Post> {
    const collection: EntryCollection<Post> = await this.client.getEntries({
      content_type: 'blog',
    });
    const post = collection.items.find((entry) => entry.fields.slug == slug);
    if (!post) {
      throw new TypeError(`Couldn't find any entries using slug ${slug}`);
    } else {
      const { title, slug, tags, description, image, body, timeToRead } =
        post.fields;
      const { id, createdAt } = post.sys;
      return {
        id,
        title,
        slug,
        tags,
        description,
        image,
        body,
        date: createdAt,
        timeToRead,
      };
    }
  }

  async getNextPost(post: Post): Promise<AdjacentPostData | null> {
    const collection: EntryCollection<Post> = await this.client.getEntries({
      content_type: 'blog',
    });
    const items = collection.items.map((post) => post.fields.slug);
    const nextPost = collection.items[items.indexOf(post.slug) + 1] || null;
    return nextPost
      ? { title: nextPost.fields.title, slug: nextPost.fields.slug }
      : nextPost;
  }

  async getPreviousPost(post: Post): Promise<AdjacentPostData | null> {
    const collection: EntryCollection<Post> = await this.client.getEntries({
      content_type: 'blog',
    });
    const items = collection.items.map((post) => post.fields.slug);
    const previousPost = collection.items[items.indexOf(post.slug) - 1] || null;
    return previousPost
      ? { title: previousPost.fields.title, slug: previousPost.fields.slug }
      : previousPost;
  }

  async getNextProject(project: Project): Promise<AdjacentPostData | null> {
    const collection: EntryCollection<Project> = await this.client.getEntries({
      content_type: 'work',
    });
    const items = collection.items.map((project) => project.fields.slug);
    const nextProject =
      collection.items[items.indexOf(project.slug) + 1] || null;
    return nextProject
      ? { title: nextProject.fields.title, slug: nextProject.fields.slug }
      : nextProject;
  }

  async getPreviousProject(project: Project): Promise<AdjacentPostData | null> {
    const collection: EntryCollection<Project> = await this.client.getEntries({
      content_type: 'work',
    });
    const items = collection.items.map((post) => post.fields.slug);
    const previousProject =
      collection.items[items.indexOf(project.slug) - 1] || null;
    return previousProject
      ? {
          title: previousProject.fields.title,
          slug: previousProject.fields.slug,
        }
      : previousProject;
  }
}
