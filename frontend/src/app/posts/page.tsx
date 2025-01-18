import { LatestPosts } from "@/components/latestPosts/latest-posts";
import { getAllPosts } from "@/lib/queries";
// import { Suspense } from "react";
// import { LatestPostsLoading } from "@/components/latestPosts/latest-posts-loading";
 
type Params = Promise<{ slug: string }>
type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>

export default async function Page(props: {
  params: Params
  searchParams: SearchParams
}) {
  const searchParams = await props.searchParams
  const currentPage = searchParams?.page ? parseInt(searchParams.page as string, 10) : 1;
  const postsPerPage = 10;
  const searchTerm = typeof searchParams.search === 'string' ? searchParams.search : '';
  const categories = parseInt(searchParams.categories as string) || 0;

  const { posts, totalPages } = await getAllPosts(currentPage, postsPerPage, searchTerm, categories);

  const latestPostsProps = {
    posts,
    currentPage,
    totalPages,
    searchTerm,
    categories,
  };

  return (
    <div>
      <LatestPosts {...latestPostsProps}  />
      {/* <Suspense fallback={<LatestPostsLoading />}>
        <LatestPosts {...latestPostsProps}  />
      </Suspense> */}
    </div>
  );
}
