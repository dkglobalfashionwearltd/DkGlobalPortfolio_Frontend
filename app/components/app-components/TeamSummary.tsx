import { Mail, PhoneCall } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import { getAllLeadership } from "~/redux/features/leadershipSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { Spinner } from "../ui/spinner";

export default function TeamSummary() {
  const dispatch = useAppDispatch();
  const { loading, data, refresh } = useAppSelector((state) => state.leader);
  const token = "d";

  useEffect(() => {
    dispatch(getAllLeadership({ token }));
  }, []);
  console.log("leader data", data);
  return (
    <div className="bg-gray-100 py-20 sm:py-24">
      <div className="mx-auto grid gap-20 px-6 lg:px-10 xl:grid-cols-3 ">
        <div className="max-w-xl">
          <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
            Meet our leadership
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600 leading-relaxed text-justify whitespace-pre-line">
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
          {loading ? (
            <Spinner className="size-8" />
          ) : (
            data?.result?.slice(0, 2).map((person) => (
              <li key={person.id}>
                <div className="flex flex-col items-start gap-5">
                  <img
                    alt="image"
                    src={person?.imageUrl ?? "image-place.avif"}
                    className="w-full h-[15rem] object-cover rounded-xl border-1"
                  />
                  <div>
                    <h1 className="text-xl font-semibold tracking-tight text-gray-900">
                      {person?.name ?? "Name"}
                    </h1>
                    <p className="text-sm/6 font-semibold text-gray-500">
                      {person?.designation ?? "Designation"}
                    </p>
                    <div className="flex gap-5 mt-4">
                      <Link
                        to={`tel:${person?.phoneNumber}`}
                        className="hover:scale-110  hover:text-green-400 transition-all"
                      >
                        <PhoneCall className="size-5 " />
                      </Link>
                      <Link
                        to={`mailto:${person?.email}`}
                        className="hover:scale-110  hover:text-red-500 transition-all"
                      >
                        <Mail className="size-5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}
