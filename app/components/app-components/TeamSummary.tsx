import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const people = [
  {
    name: "Mahmud Hossain",
    role: "Managing Director",
    imageUrl:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2",
  },
  {
    name: "Sajjad Mostafa Sazin",
    role: "Deputy Managing Director",
    imageUrl:
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2",
  },
];

export default function TeamSummary() {
  return (
    <div className="bg-gray-100 py-20 sm:py-24">
      <div className="mx-auto grid gap-20 px-6 lg:px-10 xl:grid-cols-3 ">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">
            We’re a dynamic group of individuals who are passionate about what
            we do and dedicated to delivering the best results for our clients.
          </p>
          <div className="mt-5">
            <Link to="/teams" className="text-sm/6 font-semibold text-red-600">
              Learn more
              <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
        <ul
          role="list"
          className="grid gap-x-8 gap-y-0 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
        >
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex flex-col items-start gap-5">
                <img
                  alt=""
                  src={person.imageUrl}
                  className="w-full h-[15rem] object-cover rounded-xl"
                />
                <div>
                  <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                    {person.name}
                  </h1>
                  <p className="text-sm/6 font-semibold text-gray-500">
                    {person.role}
                  </p>
                  <div className="flex gap-5 mt-4">
                    <FaXTwitter className="size-5" />
                    <FaLinkedin className="size-5" />
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
