import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Insights on mass timber market trends, sales strategy, and industry intelligence from Sehn Consulting.",
};

export default function BlogIndex() {
  const posts = getAllPosts();

  return (
    <div className="min-h-screen bg-white">
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 h-16 flex items-center">
          <Link
            href="/"
            className="text-sm font-medium text-gray-600 hover:text-primary transition-colors flex items-center gap-2"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>
      </header>

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Insights & Intelligence
          </h1>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl">
            Perspectives on mass timber market trends, sales strategy, and
            industry developments.
          </p>

          {posts.length === 0 ? (
            <p className="text-gray-500">More articles coming soon.</p>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/posts/${post.slug}`}
                  className="block group border border-gray-100 rounded-lg p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-CA", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                    <span>&middot;</span>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {post.description}
                  </p>
                  {post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-medium text-primary/70 bg-primary/5 px-2 py-1 rounded"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
