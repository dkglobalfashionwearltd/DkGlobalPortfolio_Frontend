import { CloudArrowUpIcon, LockClosedIcon } from "@heroicons/react/20/solid";
import { useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { MdProductionQuantityLimits } from "react-icons/md";
import { Link } from "react-router";
import {
  getAllCompanyInfo,
  getCompanyInfo,
} from "~/redux/features/companyInfoSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { Spinner } from "../ui/spinner";

export default function WorkSummary() {
  const dispatch = useAppDispatch();
  const { loading, data, refresh } = useAppSelector(
    (state) => state.companyInfo
  );
  const token = "";
  const id = 1;

  useEffect(() => {
    dispatch(getCompanyInfo({ token, id }));
  }, []);

  const features = [
    {
      name: "Automation.",
      description:
        "Automation for production, to achieve higher efficiency,which equals to low cost.",
      icon: CloudArrowUpIcon,
    },
    {
      name: "Quality Control.",
      description:
        "For Quality Control we follow AQL 1.00 to AQL 2.5 Level 2& monitor Daily & Weekly track record of statistical processcontrol in lines.",
      icon: LockClosedIcon,
    },
    {
      name: "Number Of Workers & Lines.",
      description: `Current workers ${data?.result?.numberOfEmployees} & ${data?.result?.numberOfSewingPlants} lines`,
      icon: FaUser,
    },
    {
      name: "Monthly Production.",
      description: `Outerwear / Workwear: ${data?.result?.productionCapacity} units per month.`,
      icon: MdProductionQuantityLimits,
    },
  ];

  console.log("info", data?.result);
  // find the part before the second sentence begins
  const start = data?.result?.description.indexOf(
    "Having passion for apparel sector"
  );
  const end = data?.result?.description.indexOf(
    "Almost all brands consider Bangladesh"
  );

  const extracted = data?.result?.description.slice(start, end).trim();

  return (
    <div className="overflow-hidden bg-white py-16 sm:py-24">
      <div className="px-7 lg:px-10">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pt-4 lg:pr-8">
            <div className="lg:max-w-lg">
              <div className="flex gap-5 items-center">
                <h2 className="text-lg font-semibold text-indigo-600">
                  About Us
                </h2>
                <Link
                  to="/about-us"
                  className="text-sm/6 font-semibold text-red-600"
                >
                  See more
                  <span aria-hidden="true">→</span>
                </Link>
              </div>
              <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                {data?.result?.shortTitle}
              </p>
              <p className="mt-6 text-lg/8 text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                {loading ? (
                  <Spinner className="size-6 text-center w-full" />
                ) : (
                  extracted
                )}
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base/7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute top-1 left-1 size-5 text-indigo-600"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

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
  );
}
