import React, { useEffect } from "react";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import Client from "~/components/app-components/clients";
import TeamSummary from "~/components/app-components/TeamSummary";
import Career from "~/components/app-components/career";
import ErrorPage from "~/components/app-components/ErrorPage";
import { isRouteErrorResponse } from "react-router";
import type { Route } from "./+types/about-us";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { getCompanyInfo } from "~/redux/features/companyInfoSlice";
import ClientSlider from "~/components/app-components/ClientSlider";
import { Spinner } from "~/components/ui/spinner";
import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import ImageGallery from "~/components/app-components/image-gallery";

const Company = () => {
  const dispatch = useAppDispatch();
  const { loading, data, refresh } = useAppSelector(
    (state) => state.companyInfo
  );
  const token = "";
  const id = 1;

  useEffect(() => {
    dispatch(getCompanyInfo({ token, id }));
  }, []);

  const stats = [
    {
      id: 1,
      name: "Annual Turnover",
      value: `USD ${data?.result?.annualTurnover} Million`,
    },
    {
      id: 2,
      name: "Production Capacity",
      value: `${data?.result?.productionCapacity} Pcs/Per Month`,
    },
    {
      id: 3,
      name: "State of art production facilities",
      value: "1 Sewing Plants",
    },
    {
      id: 4,
      name: "Number of Employees",
      value: `${data?.result?.numberOfEmployees} (Current)`,
    },
    {
      id: 5,
      name: "Primary Markets",
      value: `${data?.result?.primaryMarkets}`,
    },
  ];

  return (
    <div>
      {/* hero */}
      <div className="overflow-hidden bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pt-4 lg:pr-8">
              <div className="lg:max-w-lg">
                <h2 className="text-base/7 font-semibold text-indigo-600">
                  {data?.result?.name}
                </h2>
                <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                  {(() => {
                    const shortTitle = data?.result?.shortTitle || "";
                    // Split “Workstation” into “Work” + “station”
                    const parts = shortTitle.split(/Workstation/i);

                    if (parts.length > 1) {
                      return (
                        <>
                          {parts[0]}Work
                          <span className="text-indigo-600">station</span>
                          {parts[1]}
                        </>
                      );
                    } else {
                      // fallback if "Workstation" not found
                      return shortTitle;
                    }
                  })()}
                </p>
                <p className="text-sm text-gray-600">
                  An Ultimate Garments Manufactuer in Market since 2014
                </p>

                {/* <p className="mt-6 text-lg/8 text-gray-700">
                  {data?.result?.description}
                </p> */}
                <div className="mt-5">
                  {loading ? (
                    <Spinner />
                  ) : (
                    <p
                      className="text-gray-700 leading-relaxed text-justify whitespace-pre-line"
                      dangerouslySetInnerHTML={{
                        __html: data?.result?.description
                          ?.replaceAll(". ", ".<br>")
                          ?.replaceAll(
                            "DK GLOBAL FASHION WEAR",
                            "<span class='font-semibold text-indigo-600'>DK GLOBAL FASHION WEAR</span>"
                          ),
                      }}
                    ></p>
                  )}
                </div>
              </div>
            </div>
            <div>
              <img
                alt="Product screenshot"
                src="/images/workstation.png"
                width={2432}
                height={1442}
                className="w-3xl max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-228 md:-ml-4 lg:-ml-0"
              />
            </div>
          </div>
        </div>
      </div>
      {/* image gallery */}
      <div>
        <ImageGallery />
      </div>
      {/* mission */}
      <div className="gap-10 grid grid-cols-1 sm:grid-cols-2 px-10 mb-10">
        <div>
          <h1 className="text-4xl font-bold mb-10">Our mission</h1>
          <h3 className="text-lg mb-8 leading-relaxed text-justify whitespace-pre-line">
            Aliquet nec orci mattis amet quisque ullamcorper neque, nibh sem. At
            arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque id at vitae
            feugiat egestas ac. Diam nulla orci at in viverra scelerisque eget.
            Eleifend egestas fringilla sapien.
            {data?.result?.mission}
          </h3>
          <h1 className="text-4xl font-bold mb-10">Our Vision</h1>
          <h3 className="text-lg leading-relaxed text-justify whitespace-pre-line">
            Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget risus
            enim. Mattis mauris semper sed amet vitae sed turpis id. Id dolor
            praesent donec est. Odio penatibus risus viverra tellus varius sit
            neque erat velit. Faucibus commodo massa rhoncus, volutpat.
            Dignissim sed eget risus enim. Mattis mauris semper sed amet vitae
            sed turpis id.
            {data?.result?.vision}
          </h3>
        </div>
        <div>
          <div className="bg-white">
            <div className="px-6 lg:px-8">
              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-16 text-center">
                {stats.map((stat) => (
                  <Card key={stat.id}>
                    <CardHeader>
                      <CardTitle className="tracking-wide">
                        {stat.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm">{stat.value}</p>
                    </CardContent>
                  </Card>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </div>
      {/* client */}
      <div>
        <ClientSlider />
      </div>
      {/* team */}
      <div>
        <TeamSummary />
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
