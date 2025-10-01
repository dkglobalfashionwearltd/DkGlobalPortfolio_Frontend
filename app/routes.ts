import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/dashboard.tsx", [
    index("routes/home.tsx"),
    route("contact-us", "routes/contact-us.tsx"),
    route("about-us", "routes/about-us.tsx"),
    route("blogs", "routes/blogs.tsx"),
    route("blogs/:id", "routes/detailBlog.tsx"),
  ]),
] satisfies RouteConfig;
