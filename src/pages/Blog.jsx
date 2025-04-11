const blogs = [
  {
    id: 1,
    title: "The Future of Web Development",
    description:
      "Explore the latest trends and technologies shaping the future of web development.",
    date: "April 10, 2025",
    author: "John Doe",
  },
  {
    id: 2,
    title: "Understanding React Hooks",
    description:
      "A comprehensive guide to understanding and using React Hooks effectively in your projects.",
    date: "April 8, 2025",
    author: "Jane Smith",
  },
  {
    id: 3,
    title: "Tailwind CSS: A Utility-First Framework",
    description:
      "Learn how Tailwind CSS can help you build modern, responsive designs with ease.",
    date: "April 5, 2025",
    author: "Alice Johnson",
  },
];

const Blog = () => {
  return (
    <div className="min-h-[100dvh] bg-transparent py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold font-yaro text-custom-white text-center mb-8">
          Blog
        </h1>
        <div className="space-y-6">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="bg-custom-dark-green shadow-md rounded-lg p-6 hover:shadow-lg transition-shadow"
            >
              <h2 className="text-xl font-yaro font-semibold text-custom-white mb-2">
                {blog.title}
              </h2>
              <p className="text-custom-grey font-sora text-sm mb-4">
                {blog.description}
              </p>
              <div className="flex justify-between items-center font-yaro text-custom-grey text-sm">
                <span>{blog.author}</span>
                <span>{blog.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;