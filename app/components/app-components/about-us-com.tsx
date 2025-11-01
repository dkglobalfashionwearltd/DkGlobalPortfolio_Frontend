// AboutUs.tsx - DK Global Fashion Wear Ltd.
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router";

// Types
interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  image: string;
}

interface Testimonial {
  id: number;
  name: string;
  company: string;
  text: string;
  avatar: string;
}

interface ProductCategory {
  id: number;
  name: string;
  description: string;
  link: string;
  image: string;
}

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Company statistics
  const companyStats = [
    { number: "15+", label: "Years Experience", color: "text-pink-600" },
    { number: "50+", label: "Countries Served", color: "text-blue-600" },
    { number: "500K+", label: "Garments Monthly", color: "text-green-600" },
    { number: "98%", label: "Client Satisfaction", color: "text-purple-600" },
  ];

  // Team data - Fashion industry roles
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: "David Khan",
      role: "Founder & CEO",
      bio: "25+ years in fashion manufacturing",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "Sophia Chen",
      role: "Creative Director",
      bio: "Former Paris Fashion Week designer",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Marcus Rodriguez",
      role: "Production Head",
      bio: "Supply chain and manufacturing expert",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    },
    {
      id: 4,
      name: "Aisha Patel",
      role: "Quality Control Manager",
      bio: "15 years ensuring premium quality standards",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    },
  ];

  // Testimonials from fashion industry clients
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Elena Rodriguez",
      company: "Style Boutique Chain",
      text: "DK Global delivers exceptional quality and timely delivery. Their attention to detail is remarkable!",
      avatar:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 2,
      name: "James Wilson",
      company: "Urban Trend Apparel",
      text: "The consistency in quality and their innovative designs have helped us grow our brand significantly.",
      avatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    },
    {
      id: 3,
      name: "Sarah Kim",
      company: "Eco Fashion Co.",
      text: "Their sustainable manufacturing practices align perfectly with our brand values. Highly recommended!",
      avatar:
        "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
    },
  ];

  // Product categories
  const productCategories: ProductCategory[] = [
    {
      id: 1,
      name: "Outer Wear",
      description: "Everyday comfortable fashion",
      link: "/outerwears",
      image:
        "https://images.unsplash.com/photo-1520006403909-838d6b92c22e?w=500&h=400&fit=crop",
    },
    {
      id: 2,
      name: "Work Wear",
      description: "Premium business and formal wear",
      link: "/workwears",
      image:
        "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500&h=400&fit=crop",
    },
    {
      id: 3,
      name: "Fashion Wear",
      description: "Performance and athletic clothing",
      link: "/fashionwears",
      image:
        "https://images.unsplash.com/photo-1544966503-7cc5ac882d5b?w=500&h=400&fit=crop",
    },
  ];

  // Manufacturing process steps
  const manufacturingSteps = [
    {
      step: "01",
      title: "Design & Concept",
      description: "Creative design development and trend analysis",
    },
    {
      step: "02",
      title: "Fabric Sourcing",
      description: "Global sourcing of premium quality materials",
    },
    {
      step: "03",
      title: "Pattern Making",
      description: "Precision pattern development and sampling",
    },
    {
      step: "04",
      title: "Production",
      description: "State-of-the-art manufacturing facilities",
    },
    {
      step: "05",
      title: "Quality Control",
      description: "Rigorous quality checks at every stage",
    },
    {
      step: "06",
      title: "Global Delivery",
      description: "Efficient logistics and worldwide shipping",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in-up");
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionRefs.current.includes(el)) {
      sectionRefs.current.push(el);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Hero Section */}
      <section
        className={`relative min-h-screen flex items-center justify-center overflow-hidden transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="absolute inset-0 bg-black/40 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-110 transition-transform duration-10000 hover:scale-100"
          style={{
            backgroundImage:
              'url("https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=1200&h=800&fit=crop")',
          }}
        ></div>

        <div className="relative z-20 text-center text-white px-4 max-w-4xl mx-auto">
          <div className="animate-fade-in-up">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-pink-400">DK Global</span> Fashion Wear
            </h1>
            <div className="w-24 h-1 bg-pink-400 mx-auto mb-6"></div>
          </div>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in-up animation-delay-300">
            Crafting Premium Fashion Since 2008
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-500">
            Leading garment manufacturer delivering quality fashion worldwide
            with sustainable practices and innovative designs
          </p>
          <div className="animate-fade-in-up animation-delay-700">
            <Link
              to="/contact"
              className="inline-block bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl mr-4"
            >
              Request Catalog
            </Link>
            <Link
              to="/collections"
              className="inline-block border-2 border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              View Collections
            </Link>
          </div>
        </div>

        {/* Animated background elements */}
        <div className="absolute top-20 left-20 w-4 h-4 bg-pink-400 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-32 w-6 h-6 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute bottom-32 left-1/4 w-8 h-8 bg-green-400 rounded-full animate-ping"></div>
      </section>

      {/* Company Story Section */}
      <section ref={addToRefs} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our Fashion <span className="text-pink-600">Journey</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Founded in 2008, DK Global Fashion Wear Ltd. has grown from a
                small local workshop to an international garment manufacturing
                powerhouse. Our commitment to quality, innovation, and
                sustainable practices has made us a trusted partner for fashion
                brands worldwide.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We specialize in creating premium apparel across all categories,
                from casual wear to formal attire, always staying ahead of
                fashion trends while maintaining the highest quality standards.
              </p>

              {/* Stats Grid */}
              <div className="grid grid-cols-2 gap-6 mb-8">
                {companyStats.map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 bg-gray-50 rounded-lg transform hover:scale-105 transition-all duration-300"
                  >
                    <div className={`text-2xl font-bold ${stat.color} mb-2`}>
                      {stat.number}
                    </div>
                    <div className="text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <img
                    src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=400&h=300&fit=crop"
                    alt="Manufacturing Facility"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=400&h=300&fit=crop"
                    alt="Quality Control"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-4 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1523381294917-8b0c76d23881?w=400&h=300&fit=crop"
                    alt="Fabric Selection"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1558769132-cb2f9f4bd894?w=400&h=300&fit=crop"
                    alt="Finished Products"
                    className="rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturing Process Section */}
      <section
        ref={addToRefs}
        className="py-20 px-4 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our <span className="text-pink-600">Manufacturing</span> Process
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            From concept to delivery, we maintain excellence at every step
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {manufacturingSteps.map((step, index) => (
              <div
                key={step.step}
                className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-500 group"
              >
                <div className="text-4xl font-bold text-pink-600 mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
                <div className="w-12 h-1 bg-pink-600 mt-4 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section ref={addToRefs} className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Our <span className="text-pink-600">Product</span> Range
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Diverse collections catering to all fashion needs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {productCategories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-all duration-500 cursor-pointer"
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-start p-6">
                  <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-200">{category.description}</p>
                  </div>
                </div>
                <div className="absolute bottom-6 left-6 text-white">
                  <h3 className="text-2xl font-bold">{category.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section ref={addToRefs} className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Fashion <span className="text-pink-600">Leadership</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Meet the visionaries shaping global fashion trends
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group text-center transform hover:scale-105 transition-all duration-500"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4 shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end justify-center pb-6">
                    <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                      <p className="text-sm">{member.bio}</p>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-pink-600 font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section ref={addToRefs} className="py-20 px-4 bg-green-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-800 mb-6">
                Our <span className="text-green-600">Sustainable</span>{" "}
                Commitment
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                At DK Global Fashion Wear, we believe in fashion that cares for
                our planet. Our sustainable practices include:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Eco-friendly fabrics and materials
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Water conservation in production
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700">Ethical labor practices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white mr-3 mt-1">
                    ✓
                  </span>
                  <span className="text-gray-700">
                    Waste reduction initiatives
                  </span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&h=500&fit=crop"
                alt="Sustainable Manufacturing"
                className="rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-green-600">100%</div>
                <div className="text-gray-600">Ethical Compliance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        ref={addToRefs}
        className="py-20 px-4 bg-gradient-to-br from-pink-50 to-purple-100"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-800 mb-4">
            Client <span className="text-pink-600">Testimonials</span>
          </h2>
          <p className="text-xl text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Trusted by fashion brands worldwide
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-white rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-500"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h4>
                    <p className="text-pink-600 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={addToRefs} className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Create Your{" "}
            <span className="text-pink-400">Fashion Line</span>?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Partner with DK Global Fashion Wear Ltd. and let's bring your
            fashion vision to life with quality, style, and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-pink-600 hover:bg-pink-700 text-white font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Start Your Project
            </Link>
            <Link
              to="/catalog"
              className="border border-white hover:bg-white hover:text-gray-900 font-semibold px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            >
              Download Catalog
            </Link>
          </div>
        </div>
      </section>

      {/* Custom styles for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .animation-delay-300 {
          animation-delay: 0.3s;
        }
        
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        
        .animation-delay-700 {
          animation-delay: 0.7s;
        }
      `}</style>
    </div>
  );
};

export default AboutUs;
