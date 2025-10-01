import React from "react";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Client from "~/components/app-components/clients";
import TeamSummary from "~/components/app-components/TeamSummary";
import Career from "~/components/app-components/career";
import ErrorPage from "~/components/app-components/ErrorPage";
import { isRouteErrorResponse } from "react-router";
import type { Route } from "./+types/about-us";

const stats = [
  { id: 1, name: "Transactions every 24 hours", value: "44 million" },
  { id: 2, name: "Assets under holding", value: "$119 trillion" },
  { id: 3, name: "New users annually", value: "46,000" },
];

const Company = () => {
  return (
    <div>
      {/* hero */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  Cookie Software Ltd.
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  A better Work<span className="text-indigo-600">station</span>
                </p>
                <p className="mt-6 text-lg/8 text-gray-700">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Maiores impedit perferendis suscipit eaque, iste dolor
                  cupiditate blanditiis ratione.
                </p>
                <div className="mt-10 border-none rounded-md bg-gray-100 p-10 flex flex-col gap-3">
                  <h1 className="text-xl font-bold">Contact</h1>
                  <p className="text-indigo-600 flex gap-2 items-center">
                    <MdEmail /> cookiesoftwareltd@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <MdOutlinePhoneIphone /> +880 1970806028
                  </p>
                </div>
                <div className="mt-10 border-none rounded-md bg-gray-100 p-10 flex flex-col gap-3">
                  <h1 className="text-xl font-bold">Location</h1>
                  <p className="text-indigo-600 flex gap-2 items-center">
                    <FaMapMarkerAlt />
                    DOSH, Pollibiddut, Savar, Dhaka
                  </p>
                </div>
              </div>
            </div>
            <img
              alt="Product screenshot"
              src="hero-2.jpg"
              width={2432}
              height={1442}
              className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
            />
          </div>
        </div>
      </div>
      {/* mission */}
      <div className="gap-10 grid grid-cols-2 px-10">
        <div>
          <h1 className="text-4xl font-bold mb-10">Our mission</h1>
          <h3 className="text-lg mb-8">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
          </h3>
          <p className="text-sm">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
          </p>
        </div>
        <div>
          <div className="bg-white">
            <div className="px-6 lg:px-8">
              <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center ">
                {stats.map((stat) => (
                  <div
                    key={stat.id}
                    className="mx-auto flex max-w-xs flex-col gap-y-4"
                  >
                    <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                    <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* client */}
      <div>
        <Client />
      </div>
      {/* team */}
      <div>
        <TeamSummary />
      </div>
      {/* career */}
      <div>
        <Career />
      </div>
    </div>
  );
};

export default Company;

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let status: number | undefined;
  let title = "Oops!";
  let message = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    status = error.status;
    title = error.status === 404 ? "404" : `Error ${error.status}`;
    message =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || message;
  } else if (import.meta.env.DEV && error instanceof Error) {
    message = error.message;
    stack = error.stack;
  }

  return (
    <ErrorPage status={status} title={title} message={message} stack={stack} />
  );
}
