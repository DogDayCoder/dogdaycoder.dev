export interface Post {
    id: string;
    title: string;
    slug: string;
    content: string;
    publishedAt: Date;
    updatedAt?: Date;
    categoryIds?: Category[];
    tagIds?: Tag[];
    featuredImage?: string;
    excerpt: string;
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
