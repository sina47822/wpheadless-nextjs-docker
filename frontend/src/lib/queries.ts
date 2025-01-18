const baseUrl = process.env.WORDPRESS_URL;
import { ExtendedPost, Category, Author } from "@/lib/types";

const revalidateTime: number = 86400 // one day in seconds;

export async function getAllPosts(pageNumber: number = 1, perPage: number = 10, searchTerm: string = '', categories: number = 0): Promise<{ posts: ExtendedPost[], totalPages: number }> {
  const params = new URLSearchParams({
    per_page: perPage.toString(),
    page: pageNumber.toString(),
    search: searchTerm,
  });

  if (categories !== 0) {
    params.set('categories', categories.toString());
  }

  // console.log(`${baseUrl}/wp-json/wp/v2/posts?${params.toString()}`)
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?${params.toString()}`, {
    next: {
      revalidate: revalidateTime,
    },
  });
  const posts = await response.json();
  const totalPages = parseInt(response.headers.get('X-WP-TotalPages') ?? '1');
  return { posts, totalPages };
}

export async function getPostBySlug(slug: string): Promise<ExtendedPost | null> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/posts?slug=${slug}`, {
    next: {
      revalidate: revalidateTime,
    },
  });
  const post = await response.json();
  return post[0];
}

export async function getAuthorById(id: number): Promise<Author | null> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/users/${id}`);
  const author: Author = await response.json();
  return author;
}

// make a function getCategoriesById  
export async function getCategoriesByIds(ids: number[]): Promise<Category[]> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories?include=${ids.join(',')}`);
  const categories: Category[] = await response.json();
  return categories;
}

export async function getCategories(): Promise<Category[]> {
  const response = await fetch(`${baseUrl}/wp-json/wp/v2/categories`);
  const data = await response.json();
  return data;
}