import { useEffect, useState } from "react";
import { isRouteErrorResponse, useParams } from "react-router";
import BlogSummary from "~/components/app-components/BlogSummary";
import Client from "~/components/app-components/clients";
import ErrorPage from "~/components/app-components/ErrorPage";
import PdfFlipBook from "~/components/app-components/PdfFlipBook";
import PDFViewer from "~/components/app-components/PdfFlipBook";
import PdfFlipBookClient from "~/components/app-components/PdfFlipBook";
import ServiceSummary from "~/components/app-components/ServiceSummary";
import TeamSummary from "~/components/app-components/TeamSummary";
import WorkSummary from "~/components/app-components/WorkSummary";
import ImageSlider from "~/components/image-slider/image-slider";
import type { Route } from "./+types/home";
import ClientSlider from "~/components/app-components/ClientSlider";

const Home = () => {
  return (
    <div>
      {/* image slider */}
      <div>
        <ImageSlider />
      </div>
      {/* service summary */}
      <div>
        <ServiceSummary />
      </div>
      {/* work summary */}
      <div>
        <WorkSummary />
      </div>
      {/* blog section */}
      <div>
        <BlogSummary />
      </div>
      {/* team section */}
      <div>
        <TeamSummary />
      </div>
      {/* client section */}
      <div>
        <ClientSlider />
      </div>
      <div>
        {/* <PdfFlipBook fileUrl="https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf" /> */}
      </div>
    </div>
  );
};

export default Home;

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
