import { useEffect } from "react";
import { Link } from "react-router";
import { getAllBlog } from "~/redux/features/blogSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { format, parseISO } from "date-fns";
import { Spinner } from "../ui/spinner";
import BlogGridSkeleton from "./blog-grid-skeleton";

export default function BlogSummary() {
  const dispatch = useAppDispatch();
  const { loading, dataList, refresh } = useAppSelector((state) => state.blog);
  const token = "";
  const cat = "posts";
  useEffect(() => {
    dispatch(getAllBlog({ token, cat }));
  }, [refresh]);

  console.log("list", dataList?.result);

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), "MMMM dd, yyyy");
    } catch {
      return dateString;
    }
  };
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="w-full px-6 lg:px-8">
        <div className="flex items-center gap-10">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-indigo-600 sm:text-5xl">
            Blogs
          </h2>
          <Link to="/blogs" className="text-sm/6 font-semibold text-red-600">
            See more
            <span aria-hidden="true">→</span>
          </Link>
        </div>
        {loading || !dataList?.result ? (
          <BlogGridSkeleton />
        ) : (
          <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[...(dataList?.result || [])]
              ?.sort(() => 0.5 - Math.random())
              ?.slice(0, 3)
              ?.map((post) => (
                <article
                  key={post.id}
                  className="flex flex-col items-start justify-between p-2"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <div className="flex items-center gap-x-4 text-xs">
                        <time
                          dateTime={post.publishedAt}
                          className="text-gray-500"
                        >
                          {formatDate(post.publishedAt ?? post?.createdAt)}
                        </time>
                        <p className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100">
                          {post?.categoryName}
                        </p>
                        <p
                          className={`relative z-10 rounded-full px-3 py-1.5 font-medium 
                              ${
                                post?.status === "published"
                                  ? "bg-blue-100 text-blue-700 hover:bg-blue-200"
                                  : "bg-gray-50 text-red-600 hover:bg-red-100"
                              }`}
                        >
                          {post?.status}
                        </p>
                      </div>
                      <div className="group relative">
                        <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 text-justify">
                          <Link to={`/blogs/${post?.id}`}>
                            <span className="absolute inset-0" />
                            {post.title}
                          </Link>
                        </h3>
                        <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 leading-relaxed text-justify whitespace-pre-line">
                          {post.excerpt}
                        </p>
                      </div>
                      {/* Author Info */}
                      <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200 mb-6">
                        <img
                          src={post.authorAvatar}
                          alt={post.authorName}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <p className="font-medium text-gray-900">
                            {post.authorName}
                          </p>
                          <p className="text-sm text-gray-600">
                            {formatDate(post.publishedAt ?? post?.createdAt)}
                          </p>
                        </div>
                      </div>
                      <div className="mt-5">
                        <Link
                          to={`/blogs/${post?.id}`}
                          className="text-sm/6 font-semibold text-red-600"
                        >
                          Read more
                          <span aria-hidden="true">→</span>
                        </Link>
                      </div>
                    </div>
                    <div id="image">
                      <img
                        className="h-[18rem] rounded-2xl w-full object-cover"
                        src={post.featuredImage}
                      />
                    </div>
                  </div>
                </article>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}
