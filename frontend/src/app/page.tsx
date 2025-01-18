import { Hero } from "@/components/hero/hero";
import { LatestPosts } from "@/components/latestPosts/latest-posts";
import { Categories } from "@/components/categories/categories";
import { getAllPosts, getCategories } from "@/lib/queries";
import { SocialIcons } from "@/components/socialIcons/social-icons";

export default async function Page() {
  const { posts } = await getAllPosts();
  const categories = await getCategories();

  return (
    <div>
      <Hero />
      <SocialIcons />
      <Categories categories={categories} />
      <LatestPosts posts={posts} />  
    </div>
  );
}