export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    excerpt: string;
    featuredImage?: string;
    publishedAt: Date;
    updatedAt?: Date;
    categoryIds?: Category[];
    tagIds?: Tag[];
}

export interface Category {
    id: string;
    name: string;
    slug: string;
    description: string;
}

export interface Tag {
    id: string;
    name: string;
    slug: string;
}

export interface PostsFilter {
    search: string;
}

export enum SortOrder {
    desc = 'desc',
    asc = 'asc',
}
