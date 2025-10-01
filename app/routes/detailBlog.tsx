// import { useState, useEffect } from "react";
// import { useParams, Link } from "react-router";

// interface BlogPost {
//   id: number;
//   title: string;
//   content: string;
//   author: string;
//   date: string;
//   category: string;
//   imageUrl: string;
//   readingTime: number;
//   tags: string[];
// }

// const BlogDetails = () => {
//   const { id } = useParams<{ id: string }>();
//   const [post, setPost] = useState<BlogPost | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate API fetch
//     const fetchPost = async () => {
//       try {
//         // In a real application, you would fetch from an API
//         const mockPost: BlogPost = {
//           id: 1,
//           title:
//             "The Textile Industry: History, Importance, Challenges & Future",
//           content: `
//             <p class="mb-4">The textile industry is one of the oldest and most significant sectors in human history, playing a crucial role in economic development, cultural expression, and technological innovation across civilizations.</p>

//             <h2 class="text-2xl font-bold mt-8 mb-4">A Brief History of Textiles</h2>
//             <p class="mb-4">The history of textiles dates back thousands of years, with evidence of woven textiles dating as far back as 5000 BC. The Industrial Revolution in the 18th century marked a turning point, with inventions like the spinning jenny and power loom revolutionizing production.</p>

//             <div class="bg-blue-50 p-6 rounded-lg my-6">
//               <h3 class="text-xl font-semibold mb-2">Key Historical Milestones</h3>
//               <ul class="list-disc list-inside space-y-2">
//                 <li><span class="font-medium">3000 BC:</span> Egyptians master weaving linen</li>
//                 <li><span class="font-medium">Middle Ages:</span> Wool becomes Europe's most important textile</li>
//                 <li><span class="font-medium">1733:</span> John Kay invents the flying shuttle</li>
//                 <li><span class="font-medium">1764:</span> James Hargreaves develops the spinning jenny</li>
//                 <li><span class="font-medium">20th Century:</span> Synthetic fibers like nylon and polyester are invented</li>
//               </ul>
//             </div>

//             <h2 class="text-2xl font-bold mt-8 mb-4">The Importance of the Textile Industry</h2>
//             <p class="mb-4">The global textile industry is a massive economic driver, employing millions of people worldwide and contributing significantly to GDP in many countries. Beyond economic metrics, textiles serve essential functions in various sectors:</p>

//             <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
//               <div class="bg-blue-50 p-6 rounded-lg">
//                 <div class="text-blue-600 mb-3"><i class="fas fa-tshirt text-2xl"></i></div>
//                 <h3 class="font-semibold text-lg mb-2">Fashion & Apparel</h3>
//                 <p class="text-sm">Clothing is the most obvious application of textiles, with fashion being a form of personal and cultural expression.</p>
//               </div>
//               <div class="bg-green-50 p-6 rounded-lg">
//                 <div class="text-green-600 mb-3"><i class="fas fa-home text-2xl"></i></div>
//                 <h3 class="font-semibold text-lg mb-2">Home Furnishings</h3>
//                 <p class="text-sm">From upholstery to bedding, textiles create comfort and aesthetic appeal in our living spaces.</p>
//               </div>
//               <div class="bg-purple-50 p-6 rounded-lg">
//                 <div class="text-purple-600 mb-3"><i class="fas fa-briefcase-medical text-2xl"></i></div>
//                 <h3 class="font-semibold text-lg mb-2">Technical Textiles</h3>
//                 <p class="text-sm">Medical, automotive, and protective applications represent the fastest-growing segment of the industry.</p>
//               </div>
//             </div>

//             <blockquote class="border-l-4 border-blue-500 pl-4 my-6 italic">
//               "Textiles are at the heart of human civilization. Without textiles, there would be no culture, no technology, and no progress as we know it."
//               <footer class="mt-2 text-sm not-italic">— Dr. James Thompson, Material Historian</footer>
//             </blockquote>

//             <h2 class="text-2xl font-bold mt-8 mb-4">Current Challenges Facing the Industry</h2>
//             <p class="mb-4">Despite its importance, the textile industry faces significant challenges in the 21st century:</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Environmental Impact</h3>
//             <p class="mb-4">The textile industry is one of the largest polluters globally, with issues ranging from water consumption and chemical pollution to microplastic shedding and textile waste.</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Labor Practices</h3>
//             <p class="mb-4">Many manufacturing countries still struggle with unfair labor practices, low wages, and poor working conditions, raising ethical concerns for consumers and brands alike.</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Fast Fashion Culture</h3>
//             <p class="mb-4">The rise of fast fashion has accelerated production cycles, encouraging disposable clothing habits and exacerbating environmental and social problems.</p>

//             <div class="bg-red-50 p-6 rounded-lg my-6">
//               <h3 class="text-xl font-semibold mb-4">By the Numbers: Environmental Impact</h3>
//               <div class="grid grid-cols-2 gap-4">
//                 <div>
//                   <p class="text-3xl font-bold text-red-600">20%</p>
//                   <p class="text-sm">of global wastewater comes from textile dyeing and treatment</p>
//                 </div>
//                 <div>
//                   <p class="text-3xl font-bold text-red-600">10%</p>
//                   <p class="text-sm">of global carbon emissions are from the textile industry</p>
//                 </div>
//                 <div>
//                   <p class="text-3xl font-bold text-red-600">85%</p>
//                   <p class="text-sm">of textiles end up in landfills each year</p>
//                 </div>
//                 <div>
//                   <p class="text-3xl font-bold text-red-600">1,800</p>
//                   <p class="text-sm">gallons of water needed to produce one pair of jeans</p>
//                 </div>
//               </div>
//             </div>

//             <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Textiles</h2>
//             <p class="mb-4">Despite these challenges, the future of textiles is bright with innovation. Several exciting developments are shaping the industry's future:</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Sustainable Materials</h3>
//             <p class="mb-4">From plant-based leather alternatives to recycled fabrics, sustainable materials are reducing the industry's environmental footprint.</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Digitalization and Smart Textiles</h3>
//             <p class="mb-4">Wearable technology, temperature-regulating fabrics, and even health-monitoring garments are becoming reality through advances in smart textiles.</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Circular Economy Models</h3>
//             <p class="mb-4">Brands are increasingly adopting circular approaches, focusing on recyclability, repair, and rental models to reduce waste.</p>

//             <h3 class="text-xl font-semibold mt-6 mb-3">Localized Production</h3>
//             <p class="mb-4">Advances in technology like 3D knitting and automated manufacturing are making localized production more feasible, reducing transportation emissions.</p>

//             <div class="bg-gray-100 p-6 rounded-lg my-6">
//               <h3 class="text-xl font-semibold mb-4">Future Trends to Watch</h3>
//               <div class="space-y-4">
//                 <div class="flex items-start">
//                   <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
//                     <span class="text-white font-bold">1</span>
//                   </div>
//                   <div>
//                     <h4 class="font-semibold">Biofabrication</h4>
//                     <p class="text-sm">Growing materials from microorganisms like bacteria and yeast</p>
//                   </div>
//                 </div>
//                 <div class="flex items-start">
//                   <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
//                     <span class="text-white font-bold">2</span>
//                   </div>
//                   <div>
//                     <h4 class="font-semibold">Digital Product Passports</h4>
//                     <p class="text-sm">QR codes that provide transparency about a garment's supply chain</p>
//                   </div>
//                 </div>
//                 <div class="flex items-start">
//                   <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
//                     <span class="text-white font-bold">3</span>
//                   </div>
//                   <div>
//                     <h4 class="font-semibold">4D Printing</h4>
//                     <p class="text-sm">Materials that change shape or properties over time or in response to stimuli</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
//             <p class="mb-4">The textile industry stands at a crossroads, balancing its rich history and economic importance with the urgent need for sustainable transformation. As consumers become more conscious and technology enables new possibilities, the industry has the potential to reinvent itself as a force for positive change.</p>

//             <p class="mb-4">By supporting ethical brands, embracing circular models, and demanding greater transparency, we can all contribute to a textile industry that respects both people and planet while continuing to innovate and inspire.</p>
//           `,
//           author: "Emily Watson",
//           date: "June 15, 2023",
//           category: "Industry",
//           imageUrl:
//             "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
//           readingTime: 10,
//           tags: [
//             "Textile Industry",
//             "Sustainability",
//             "Fashion Technology",
//             "Circular Economy",
//             "Innovation",
//           ],
//         };
//         setPost(mockPost);
//       } catch (error) {
//         console.error("Error fetching blog post:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPost();
//   }, [id]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
//       </div>
//     );
//   }

//   if (!post) {
//     return (
//       <div className="min-h-screen flex items-center justify-center">
//         <div className="text-center">
//           <h2 className="text-2xl font-bold text-gray-800 mb-4">
//             Post not found
//           </h2>
//           <Link to="/" className="text-blue-600 hover:text-blue-800">
//             Return to homepage
//           </Link>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <article className="min-h-screen bg-white py-8">
//       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
//         {/* Breadcrumb */}
//         <nav className="mb-8">
//           <Link
//             to="/blog"
//             className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
//           >
//             ← Back to Blog
//           </Link>
//         </nav>

//         {/* Header */}
//         <header className="mb-8">
//           <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
//             <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
//               {post.category}
//             </span>
//             <span>{post.readingTime} min read</span>
//           </div>

//           <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
//             {post.title}
//           </h1>

//           <div className="flex items-center gap-4 text-gray-600">
//             <img
//               src="https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
//               alt={post.author}
//               className="w-12 h-12 rounded-full"
//             />
//             <div>
//               <p className="font-medium">{post.author}</p>
//               <time className="text-sm">{post.date}</time>
//             </div>
//           </div>
//         </header>

//         {/* Featured Image */}
//         <div className="mb-8 rounded-2xl overflow-hidden shadow-lg">
//           <img
//             src={post.imageUrl}
//             alt={post.title}
//             className="w-full h-64 md:h-96 object-cover"
//           />
//         </div>

//         {/* Content */}
//         <div className="prose prose-lg max-w-none mb-8">
//           <div
//             dangerouslySetInnerHTML={{ __html: post.content }}
//             className="text-gray-700 leading-relaxed"
//           />
//         </div>

//         {/* Tags */}
//         <div className="py-6 border-t border-gray-200">
//           <h3 className="font-semibold text-lg mb-4">Tags:</h3>
//           <div className="flex flex-wrap gap-2">
//             {post.tags.map((tag, index) => (
//               <span
//                 key={index}
//                 className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
//               >
//                 {tag}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Share Section */}
//         <div className="border-t border-gray-200 pt-8">
//           <h3 className="text-lg font-semibold text-gray-900 mb-4">
//             Share this post
//           </h3>
//           <div className="flex gap-4">
//             <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
//               <i className="fab fa-twitter"></i>
//               Twitter
//             </button>
//             <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
//               <i className="fab fa-linkedin"></i>
//               LinkedIn
//             </button>
//             <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
//               <i className="fab fa-facebook"></i>
//               Facebook
//             </button>
//           </div>
//         </div>

//         {/* Author Bio */}
//         <div className="border-t border-gray-200 pt-8 mt-8">
//           <div className="flex items-start gap-6">
//             <img
//               src="https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80"
//               alt={post.author}
//               className="w-16 h-16 rounded-full"
//             />
//             <div>
//               <h3 className="text-xl font-bold text-gray-900">{post.author}</h3>
//               <p className="text-green-600 font-medium mb-3">
//                 Textile Industry Analyst
//               </p>
//               <p className="text-gray-600">
//                 Emily is a textile industry expert with over 15 years of
//                 experience in sustainable fashion and textile innovation. She
//                 holds a PhD in Material Science and regularly contributes to
//                 journals and conferences on the future of textiles.
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Subscription */}
//         <div className="bg-gray-50 rounded-xl p-8 mt-12 text-center">
//           <h3 className="text-2xl font-bold text-gray-900 mb-2">
//             Stay Updated with Textile Insights
//           </h3>
//           <p className="text-gray-600 mb-6">
//             Subscribe to our newsletter for the latest articles, trends, and
//             industry updates.
//           </p>
//           <form className="max-w-md mx-auto flex">
//             <input
//               type="email"
//               placeholder="Your email address"
//               className="flex-grow px-4 py-3 rounded-l-lg border border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//             <button
//               type="submit"
//               className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition-colors duration-200"
//             >
//               Subscribe
//             </button>
//           </form>
//         </div>
//       </div>
//     </article>
//   );
// };

// export default BlogDetails;

import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router";
import { format, parseISO } from "date-fns";

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  featuredImage: string;
  authorId: number;
  authorName: string;
  authorAvatar: string;
  categoryId: number;
  categoryName: string;
  status: string;
  readingTime: number;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
}

const BlogDetails: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  // Fetch blog post data
  useEffect(() => {
    const fetchBlogPost = async () => {
      try {
        setLoading(true);
        // In a real application, you would fetch from your API
        // const response = await fetch(`https://your-api.com/api/blogposts/slug/${slug}`);
        // const data = await response.json();

        // Mock data for demonstration
        const mockBlogPost: BlogPost = {
          id: 1,
          title:
            "The Textile Industry: History, Importance, Challenges & Future",
          slug: "textile-industry-history-importance-challenges-future",
          content: `
            <p class="mb-4">The textile industry is one of the oldest and most significant sectors in human history, playing a crucial role in economic development, cultural expression, and technological innovation across civilizations.</p>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">A Brief History of Textiles</h2>
            <p class="mb-4">The history of textiles dates back thousands of years, with evidence of woven textiles dating as far back as 5000 BC. The Industrial Revolution in the 18th century marked a turning point, with inventions like the spinning jenny and power loom revolutionizing production.</p>
            
            <div class="bg-blue-50 p-6 rounded-lg my-6">
              <h3 class="text-xl font-semibold mb-2">Key Historical Milestones</h3>
              <ul class="list-disc list-inside space-y-2">
                <li><span class="font-medium">3000 BC:</span> Egyptians master weaving linen</li>
                <li><span class="font-medium">Middle Ages:</span> Wool becomes Europe's most important textile</li>
                <li><span class="font-medium">1733:</span> John Kay invents the flying shuttle</li>
                <li><span class="font-medium">1764:</span> James Hargreaves develops the spinning jenny</li>
                <li><span class="font-medium">20th Century:</span> Synthetic fibers like nylon and polyester are invented</li>
              </ul>
            </div>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">The Importance of the Textile Industry</h2>
            <p class="mb-4">The global textile industry is a massive economic driver, employing millions of people worldwide and contributing significantly to GDP in many countries. Beyond economic metrics, textiles serve essential functions in various sectors:</p>
            
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6 my-6">
              <div class="bg-blue-50 p-6 rounded-lg">
                <div class="text-blue-600 mb-3 text-2xl">👕</div>
                <h3 class="font-semibold text-lg mb-2">Fashion & Apparel</h3>
                <p class="text-sm">Clothing is the most obvious application of textiles, with fashion being a form of personal and cultural expression.</p>
              </div>
              <div class="bg-green-50 p-6 rounded-lg">
                <div class="text-green-600 mb-3 text-2xl">🏠</div>
                <h3 class="font-semibold text-lg mb-2">Home Furnishings</h3>
                <p class="text-sm">From upholstery to bedding, textiles create comfort and aesthetic appeal in our living spaces.</p>
              </div>
              <div class="bg-purple-50 p-6 rounded-lg">
                <div class="text-purple-600 mb-3 text-2xl">🩺</div>
                <h3 class="font-semibold text-lg mb-2">Technical Textiles</h3>
                <p class="text-sm">Medical, automotive, and protective applications represent the fastest-growing segment of the industry.</p>
              </div>
            </div>
            
            <blockquote class="border-l-4 border-blue-500 pl-4 my-6 italic">
              "Textiles are at the heart of human civilization. Without textiles, there would be no culture, no technology, and no progress as we know it."
              <footer class="mt-2 text-sm not-italic">— Dr. James Thompson, Material Historian</footer>
            </blockquote>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Current Challenges Facing the Industry</h2>
            <p class="mb-4">Despite its importance, the textile industry faces significant challenges in the 21st century:</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Environmental Impact</h3>
            <p class="mb-4">The textile industry is one of the largest polluters globally, with issues ranging from water consumption and chemical pollution to microplastic shedding and textile waste.</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Labor Practices</h3>
            <p class="mb-4">Many manufacturing countries still struggle with unfair labor practices, low wages, and poor working conditions, raising ethical concerns for consumers and brands alike.</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Fast Fashion Culture</h3>
            <p class="mb-4">The rise of fast fashion has accelerated production cycles, encouraging disposable clothing habits and exacerbating environmental and social problems.</p>
            
            <div class="bg-red-50 p-6 rounded-lg my-6">
              <h3 class="text-xl font-semibold mb-4">By the Numbers: Environmental Impact</h3>
              <div class="grid grid-cols-2 gap-4">
                <div>
                  <p class="text-3xl font-bold text-red-600">20%</p>
                  <p class="text-sm">of global wastewater comes from textile dyeing and treatment</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-red-600">10%</p>
                  <p class="text-sm">of global carbon emissions are from the textile industry</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-red-600">85%</p>
                  <p class="text-sm">of textiles end up in landfills each year</p>
                </div>
                <div>
                  <p class="text-3xl font-bold text-red-600">1,800</p>
                  <p class="text-sm">gallons of water needed to produce one pair of jeans</p>
                </div>
              </div>
            </div>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">The Future of Textiles</h2>
            <p class="mb-4">Despite these challenges, the future of textiles is bright with innovation. Several exciting developments are shaping the industry's future:</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Sustainable Materials</h3>
            <p class="mb-4">From plant-based leather alternatives to recycled fabrics, sustainable materials are reducing the industry's environmental footprint.</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Digitalization and Smart Textiles</h3>
            <p class="mb-4">Wearable technology, temperature-regulating fabrics, and even health-monitoring garments are becoming reality through advances in smart textiles.</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Circular Economy Models</h3>
            <p class="mb-4">Brands are increasingly adopting circular approaches, focusing on recyclability, repair, and rental models to reduce waste.</p>
            
            <h3 class="text-xl font-semibold mt-6 mb-3">Localized Production</h3>
            <p class="mb-4">Advances in technology like 3D knitting and automated manufacturing are making localized production more feasible, reducing transportation emissions.</p>
            
            <div class="bg-gray-100 p-6 rounded-lg my-6">
              <h3 class="text-xl font-semibold mb-4">Future Trends to Watch</h3>
              <div class="space-y-4">
                <div class="flex items-start">
                  <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-white font-bold">1</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">Biofabrication</h4>
                    <p class="text-sm">Growing materials from microorganisms like bacteria and yeast</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-white font-bold">2</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">Digital Product Passports</h4>
                    <p class="text-sm">QR codes that provide transparency about a garment's supply chain</p>
                  </div>
                </div>
                <div class="flex items-start">
                  <div class="bg-blue-500 rounded-full h-8 w-8 flex items-center justify-center mr-4 flex-shrink-0">
                    <span class="text-white font-bold">3</span>
                  </div>
                  <div>
                    <h4 class="font-semibold">4D Printing</h4>
                    <p class="text-sm">Materials that change shape or properties over time or in response to stimuli</p>
                  </div>
                </div>
              </div>
            </div>
            
            <h2 class="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p class="mb-4">The textile industry stands at a crossroads, balancing its rich history and economic importance with the urgent need for sustainable transformation. As consumers become more conscious and technology enables new possibilities, the industry has the potential to reinvent itself as a force for positive change.</p>
            
            <p class="mb-4">By supporting ethical brands, embracing circular models, and demanding greater transparency, we can all contribute to a textile industry that respects both people and planet while continuing to innovate and inspire.</p>
          `,
          excerpt:
            "Exploring the past, present, and future of the global textile industry.",
          featuredImage:
            "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2000&q=80",
          authorId: 1,
          authorName: "Emily Watson",
          authorAvatar:
            "https://images.unsplash.com/photo-1567532939604-b6b5b0db1604?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
          categoryId: 1,
          categoryName: "Industry",
          status: "published",
          readingTime: 10,
          publishedAt: "2023-06-15T10:00:00Z",
          createdAt: "2023-06-10T14:30:00Z",
          updatedAt: "2023-06-14T16:45:00Z",
          tags: [
            "Textile Industry",
            "Sustainability",
            "Fashion Technology",
            "Circular Economy",
            "Innovation",
          ],
        };

        setBlogPost(mockBlogPost);

        // Mock related posts
        const mockRelatedPosts: BlogPost[] = [
          {
            id: 2,
            title: "Sustainable Fashion: Trends and Innovations",
            slug: "sustainable-fashion-trends-innovations",
            content: "",
            excerpt:
              "Exploring the latest trends in sustainable fashion and innovative approaches to eco-friendly clothing.",
            featuredImage:
              "https://images.unsplash.com/photo-1580835239845-b0c67cae12e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            authorId: 2,
            authorName: "John Smith",
            authorAvatar: "",
            categoryId: 2,
            categoryName: "Sustainability",
            status: "published",
            readingTime: 7,
            publishedAt: "2023-05-20T09:30:00Z",
            createdAt: "2023-05-15T11:20:00Z",
            updatedAt: "2023-05-19T15:40:00Z",
            tags: ["Sustainability", "Fashion", "Eco-Friendly"],
          },
          {
            id: 3,
            title: "The Rise of Smart Textiles in Modern Fashion",
            slug: "rise-smart-textiles-modern-fashion",
            content: "",
            excerpt:
              "How technology is integrating with fabrics to create innovative smart textiles for the modern world.",
            featuredImage:
              "https://images.unsplash.com/photo-1530543787849-128d94430c6b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80",
            authorId: 3,
            authorName: "Sarah Johnson",
            authorAvatar: "",
            categoryId: 3,
            categoryName: "Technology",
            status: "published",
            readingTime: 8,
            publishedAt: "2023-04-10T14:15:00Z",
            createdAt: "2023-04-05T10:30:00Z",
            updatedAt: "2023-04-09T12:25:00Z",
            tags: ["Smart Textiles", "Technology", "Innovation"],
          },
        ];

        setRelatedPosts(mockRelatedPosts);
      } catch (err) {
        setError("Failed to load blog post");
        console.error("Error fetching blog post:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (error || !blogPost) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Blog post not found
          </h2>
          <p className="text-gray-600 mb-4">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium"
          >
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formatDate = (dateString: string) => {
    try {
      return format(parseISO(dateString), "MMMM dd, yyyy");
    } catch {
      return dateString;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="mb-8">
          <Link
            to="/blog"
            className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200 inline-flex items-center"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to Blog
          </Link>
        </nav>

        <article className="bg-white rounded-xl shadow-md overflow-hidden">
          {/* Featured Image */}
          {blogPost.featuredImage && (
            <div className="w-full h-64 md:h-96 overflow-hidden">
              <img
                src={blogPost.featuredImage}
                alt={blogPost.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            {/* Category and Reading Time */}
            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-4">
              <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-medium">
                {blogPost.categoryName}
              </span>
              <span>•</span>
              <span>{blogPost.readingTime} min read</span>
              <span>•</span>
              <span>{formatDate(blogPost.publishedAt)}</span>
            </div>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {blogPost.title}
            </h1>

            {/* Excerpt */}
            {blogPost.excerpt && (
              <p className="text-xl text-gray-600 mb-6 leading-relaxed">
                {blogPost.excerpt}
              </p>
            )}

            {/* Author Info */}
            <div className="flex items-center gap-4 py-4 border-t border-b border-gray-200 mb-6">
              <img
                src={blogPost.authorAvatar}
                alt={blogPost.authorName}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-medium text-gray-900">
                  {blogPost.authorName}
                </p>
                <p className="text-sm text-gray-600">
                  {formatDate(blogPost.publishedAt)}
                </p>
              </div>
            </div>

            {/* Content */}
            <div
              className="prose prose-lg max-w-none mb-8"
              dangerouslySetInnerHTML={{ __html: blogPost.content }}
            />

            {/* Tags */}
            {blogPost.tags && blogPost.tags.length > 0 && (
              <div className="py-6 border-t border-gray-200">
                <h3 className="font-semibold text-lg mb-4">Tags:</h3>
                <div className="flex flex-wrap gap-2">
                  {blogPost.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm hover:bg-blue-100 hover:text-blue-800 transition-colors duration-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="border-t border-gray-200 pt-6 mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Share this post
              </h3>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  Twitter
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                  LinkedIn
                </button>
                <button className="flex items-center gap-2 text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  Facebook
                </button>
              </div>
            </div>
          </div>
        </article>

        {/* Author Bio */}
        <div className="bg-white rounded-xl shadow-md p-6 mt-8">
          <div className="flex items-start gap-6">
            <img
              src={blogPost.authorAvatar}
              alt={blogPost.authorName}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                About {blogPost.authorName}
              </h3>
              <p className="text-gray-600 mt-2">
                Emily is a textile industry expert with over 15 years of
                experience in sustainable fashion and textile innovation. She
                holds a PhD in Material Science and regularly contributes to
                journals and conferences on the future of textiles.
              </p>
            </div>
          </div>
        </div>

        {/* Related Posts */}
        {relatedPosts.length > 0 && (
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
                >
                  {post.featuredImage && (
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">
                    <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">
                        {formatDate(post.publishedAt)}
                      </span>
                      <button
                        onClick={() => navigate(`/blog/${post.slug}`)}
                        className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center"
                      >
                        Read more
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Newsletter Subscription */}
        <div className="bg-white rounded-xl shadow-md p-8 mt-12 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            Stay Updated with Textile Insights
          </h3>
          <p className="text-gray-600 mb-6">
            Subscribe to our newsletter for the latest articles, trends, and
            industry updates.
          </p>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-3 rounded-l-lg border border-r-0 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-r-lg font-medium hover:bg-blue-700 transition-colors duration-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
