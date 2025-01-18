import Link from "next/link";

export function Footer() {
  return (
    <div className="text-center mt-8">
      <p>&copy; 2024 Lite &middot; Built with NextJs v15 &middot; <a href={'/sitemap.xml'}>SiteMap</a></p>
    </div>
  )
}