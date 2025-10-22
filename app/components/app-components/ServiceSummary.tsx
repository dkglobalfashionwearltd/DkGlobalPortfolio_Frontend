import { Link } from "react-router";
import { MdFactory } from "react-icons/md";
import { BiSolidPurchaseTag } from "react-icons/bi";
import images from "../image-slider/images";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { useEffect } from "react";
import {
  getAllProfileImages,
  getProfileImages,
} from "~/redux/features/ProfileImageSlice";
import { Skeleton } from "../ui/skeleton";

export default function ServiceSummary() {
  const dispatch = useAppDispatch();
  const { loading, dataList, refresh } = useAppSelector(
    (state) => state.profile_images
  );
  const token = "";
  useEffect(() => {
    dispatch(getAllProfileImages({ token }));
  }, [refresh]);
  const findData = dataList?.result?.find((f) => f.id == 8);
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base/7 font-semibold text-indigo-600 flex items-center justify-center">
          <p className="text-xl">Faster Services</p>
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-center text-4xl font-semibold tracking-tight text-balance text-gray-950 sm:text-5xl">
          Everything you need to know about our services
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-2 lg:grid-rows-2">
          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white lg:rounded-l-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center flex items-center gap-2">
                  <BiSolidPurchaseTag />
                  Buying House
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  Unleashing the Finest Textile Trends for Your Business
                </p>
              </div>
              <div className="@container relative min-h-120 w-full grow max-lg:mx-auto max-lg:max-w-sm">
                {loading || !findData ? (
                  <Skeleton className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl" />
                ) : (
                  <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-gray-700 bg-gray-900 shadow-2xl">
                    <img
                      alt={findData?.title}
                      src={findData?.imageUrl}
                      className="size-full object-cover object-top"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 lg:rounded-l-4xl" />
          </div>

          <div className="relative lg:row-span-2">
            <div className="absolute inset-px rounded-lg bg-white max-lg:rounded-b-4xl lg:rounded-r-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-b-[calc(2rem+1px)] lg:rounded-r-[calc(2rem+1px)]">
              <div className="px-8 pt-8 pb-3 sm:px-10 sm:pt-10 sm:pb-0">
                <p className="flex items-start gap-2 mt-2 text-lg font-bold tracking-tight text-gray-950 max-lg:text-center ">
                  <MdFactory className="size-6" />
                  Menufacturer
                </p>
                <p className="mt-2 max-w-lg text-sm/6 text-gray-600 max-lg:text-center">
                  One of the best outerwear manufacturer of Bangladesh
                </p>
              </div>
              <div className="relative min-h-120 w-full grow">
                <div className="absolute top-10 right-0 bottom-0 left-10 overflow-hidden rounded-tl-xl bg-gray-900 shadow-2xl outline outline-white/10">
                  <div className="flex bg-gray-900 outline outline-white/5">
                    <div className="-mb-px flex text-sm/6 font-medium text-gray-400">
                      <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                        Work Flows
                      </div>
                    </div>
                  </div>
                  <div className="px-6 pt-6 pb-14">
                    {/* Your code example */}
                    <ul>
                      <li className="text-white list-disc">
                        The Epitome of Fine Garment Manufacturing.
                      </li>
                      <li className="text-white list-disc">
                        Unleashing Style with Unparalleled Quality.
                      </li>
                      <li className="text-white list-disc">
                        Exceptional Garments, Uncompromising Quality.
                      </li>
                      <li className="text-white list-disc">
                        Committed To Helping Our Clients.
                      </li>
                      <li className="text-white list-disc">
                        Creating Garments of Distinction and Excellence.
                      </li>
                      <li className="text-white list-disc">Sample Images.</li>
                    </ul>
                    <div className="mt-2 grid grid-cols-4 gap-4 w-full">
                      {images.map((item, index) => (
                        <div key={index}>
                          <img
                            src={item.imgURL}
                            alt={item.imgAlt}
                            className="w-20 h-20 object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-black/5 max-lg:rounded-b-4xl lg:rounded-r-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
