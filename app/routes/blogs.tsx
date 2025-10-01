import { Link } from "react-router";

// src/data/posts.ts
export const posts = [
  {
    id: 1,
    title: "The Textile Industry: History, Importance, Challenges & Future",
    description:
      "Discover the textile industry’s history, importance, challenges, and future trends. Learn how textiles drive global trade, fashion, and sustainability.",
    content: `
      <p>The <strong>textile industry</strong> is one of the oldest and most
      significant sectors in human history. From the handwoven fabrics of
      ancient civilizations to today’s high-tech automated mills, textiles
      have played a vital role in shaping culture, trade, and economic
      growth across the world.</p>

      <h2>A Brief History of Textiles</h2>
      <p>The story of textiles dates back thousands of years. Early humans
      discovered ways to spin fibers like wool, flax, and cotton into yarn
      and weave them into fabrics. Civilizations such as Egypt, India, and
      China became pioneers in textile production, introducing silk, cotton,
      and dyeing methods that fueled international trade.</p>
      <p>The <strong>Industrial Revolution</strong> in the 18th century
      transformed textile production forever. Mechanized looms, spinning
      machines, and steam power boosted productivity and gave rise to modern
      factories.</p>

      <h2>Importance of the Textile Industry</h2>
      <ul>
        <li><strong>Employment</strong>: Millions of workers, especially in Asia, depend on textiles.</li>
        <li><strong>Economic Growth</strong>: Exports from Bangladesh, India, China, and Vietnam boost GDP.</li>
        <li><strong>Fashion & Innovation</strong>: Textiles fuel global fashion and culture.</li>
        <li><strong>Cultural Identity</strong>: Traditional fabrics carry heritage.</li>
      </ul>

      <h2>Challenges Facing the Industry</h2>
      <ul>
        <li><strong>Environmental Impact</strong>: Huge water, energy, and chemical use.</li>
        <li><strong>Labor Issues</strong>: Low wages and unsafe conditions persist.</li>
        <li><strong>Global Competition</strong>: Fierce price wars reduce margins.</li>
        <li><strong>Sustainability Pressure</strong>: Consumers demand eco-friendly fabrics.</li>
      </ul>

      <h2>The Future of Textiles</h2>
      <ul>
        <li><strong>Smart Fabrics</strong>: Wearable technology built into fabrics.</li>
        <li><strong>Sustainable Fibers</strong>: Organic cotton, hemp, bamboo, recycled polyester.</li>
        <li><strong>Automation & AI</strong>: Robotics and AI improve efficiency.</li>
        <li><strong>Circular Fashion</strong>: Recycling and upcycling reduce waste.</li>
      </ul>

      <h2>Conclusion</h2>
      <p>The textile industry is more than just clothing—it is an essential
      thread woven into human civilization. Its future lies in embracing
      sustainability, adopting smart technology, and balancing growth with
      environmental responsibility.</p>
    `,
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    category: { title: "Textile Industry", href: "#" },
    blogImage: "/web.jpg",
    author: {
      name: "Michael Foster",
      role: "Co-Founder / CTO",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Web Application Development Trends",
    description:
      "Explore the latest trends in web application development, from frameworks to performance optimization.",
    content: `
      <h2>Introduction</h2>
      <p>Web applications have become the backbone of digital business...</p>
      <h2>Key Trends</h2>
      <ul>
        <li>Progressive Web Apps (PWAs)</li>
        <li>Server-Side Rendering (SSR)</li>
        <li>AI-powered personalization</li>
      </ul>
    `,
    date: "Apr 10, 2020",
    datetime: "2020-04-10",
    category: { title: "Technology", href: "#" },
    blogImage: "/mobile.jpg",
    author: {
      name: "Jane Cooper",
      role: "Senior Developer",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80",
    },
  },
];

export default function Blog() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="w-full px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
            From the blog lists
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.id}
              className="flex flex-col items-start justify-between p-2 border hover:scale-[1.01] transition-all duration-500 rounded-md shadow-2xl "
            >
              <div className="flex gap-5 items-center flex-col-reverse">
                <div>
                  <div className="flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-gray-500">
                      {post.date}
                    </time>
                    <a
                      href={post.category.href}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.category.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <Link to={`/blogs/${post.id}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.description}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      alt=""
                      src={post.author.imageUrl}
                      className="size-10 rounded-full bg-gray-50"
                    />
                    <div className="text-sm/6">
                      <p className="font-semibold text-gray-900">
                        <a href={post.author.href}>
                          <span className="absolute inset-0" />
                          {post.author.name}
                        </a>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                  <div className="mt-5">
                    <Link
                      to={`/blogs/${post.id}`}
                      className="text-sm/6 font-semibold text-red-600"
                    >
                      Read more
                      <span aria-hidden="true">→</span>
                    </Link>
                  </div>
                </div>
                <div id="image">
                  <img
                    src={post.blogImage}
                    className="h-[20rem] w-full object-center rounded-md"
                  />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
