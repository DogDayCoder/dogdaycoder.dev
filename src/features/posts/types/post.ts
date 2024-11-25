import { Category } from '../../categories/types/category.ts';
import { Tag } from '../../tags/types/tag.ts';

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
