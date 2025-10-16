import { ChevronDownIcon } from "@heroicons/react/16/solid";
import { useEffect } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdEmail, MdOutlinePhoneIphone } from "react-icons/md";
import { getCompanyInfo } from "~/redux/features/companyInfoSlice";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";

export default function Contact() {
  const dispatch = useAppDispatch();
  const { loading, data, refresh } = useAppSelector(
    (state) => state.companyInfo
  );
  const token = "";
  const id = 1;

  useEffect(() => {
    dispatch(getCompanyInfo({ token, id }));
  }, []);
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 p-10">
      {/* form */}
      <div className="isolate bg-white px-6 py-10 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-1/2 -z-10 aspect-1155/678 w-144.5 max-w-none -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-288.75"
          />
        </div>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            Contact sales
          </h2>
          <p className="mt-2 text-lg/8 text-gray-600">
            Aute magna irure deserunt veniam aliqua magna enim voluptate.
          </p>
        </div>
        <form
          action="#"
          method="POST"
          className="mx-auto mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                First name
              </label>
              <div className="mt-2.5">
                <input
                  id="first-name"
                  name="first-name"
                  type="text"
                  autoComplete="given-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="last-name"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Last name
              </label>
              <div className="mt-2.5">
                <input
                  id="last-name"
                  name="last-name"
                  type="text"
                  autoComplete="family-name"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  id="company"
                  name="company"
                  type="text"
                  autoComplete="organization"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone-number"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Phone number
              </label>
              <div className="mt-2.5">
                <div className="flex rounded-md bg-white outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
                  <div className="grid shrink-0 grid-cols-1 focus-within:relative">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country"
                      aria-label="Country"
                      className="col-start-1 row-start-1 w-full appearance-none rounded-md py-2 pr-7 pl-3.5 text-base text-gray-500 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    >
                      <option>BD</option>
                      <option>US</option>
                      <option>UK</option>
                    </select>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4"
                    />
                  </div>
                  <input
                    id="phone-number"
                    name="phone-number"
                    type="text"
                    placeholder=""
                    className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
                  />
                </div>
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block text-sm/6 font-semibold text-gray-900"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="flex gap-x-4 sm:col-span-2">
              <div className="flex h-6 items-center">
                <div className="group relative inline-flex w-8 shrink-0 rounded-full bg-gray-200 p-px inset-ring inset-ring-gray-900/5 outline-offset-2 outline-indigo-600 transition-colors duration-200 ease-in-out has-checked:bg-indigo-600 has-focus-visible:outline-2">
                  <span className="size-4 rounded-full bg-white shadow-xs ring-1 ring-gray-900/5 transition-transform duration-200 ease-in-out group-has-checked:translate-x-3.5" />
                  <input
                    id="agree-to-policies"
                    name="agree-to-policies"
                    type="checkbox"
                    aria-label="Agree to policies"
                    className="absolute inset-0 appearance-none focus:outline-hidden"
                  />
                </div>
              </div>
              <label
                htmlFor="agree-to-policies"
                className="text-sm/6 text-gray-600"
              >
                By selecting this, you agree to our{" "}
                <a
                  href="#"
                  className="font-semibold whitespace-nowrap text-indigo-600"
                >
                  privacy policy
                </a>
                .
              </label>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>
      {/* location */}
      <div className="grid grid-cols-2 gap-3">
        <div className="mt-10 border-none rounded-md bg-gray-100 p-8 flex flex-col gap-3">
          <h1 className="text-xl font-bold">Contact</h1>
          <p className="text-indigo-600 flex gap-2 items-center">
            <MdEmail /> {data?.result?.email}
          </p>
          <p className="flex items-center gap-2">
            <MdOutlinePhoneIphone /> {data?.result?.phoneNumber}
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="mt-10 border-none rounded-md bg-gray-100 p-8 flex flex-col gap-3">
            <h1 className="text-xl font-bold flex gap-5 items-center">
              <FaMapMarkerAlt /> Factory
            </h1>
            <p className="text-indigo-600 flex gap-2 items-center">
              {data?.result?.location}
            </p>
          </div>
          <div className="mt-10 border-none rounded-md bg-gray-100 p-8 flex flex-col gap-3">
            <h1 className="text-xl font-bold flex gap-5 items-center">
              <FaMapMarkerAlt /> Head Office
            </h1>
            <p className="text-indigo-600 flex gap-2 items-center">
              House 52, Road 01, Sector 3, Uttara, Dhaka 1230
            </p>
          </div>
        </div>
        {/* map */}
        <div className="mt-4 rounded-xl flex flex-col gap-4 col-span-2">
          <div>
            <h1 className="text-center">Factory</h1>
            <iframe
              className="mt-4 rounded-xl shadow-xl ring-1 ring-gray-400/10 "
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14583.45863609116!2d90.30898685!3d23.96522555!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755dd4d76ebea5d%3A0xb2be8cc5e265a462!2sDK%20Global%20Fashion%20Wear%20Limited!5e0!3m2!1sen!2sbd!4v1760527086034!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div>
            <h1 className="text-center">Head Office</h1>
            <iframe
              className="mt-4 rounded-xl shadow-xl ring-1 ring-gray-400/10 "
              title="Google Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d177796.35236520768!2d90.19244183269794!3d23.93652776211261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c58bf1f36633%3A0x14eca7d621593446!2sDk%20Global%20Fashion%20Wear%20Ltd.%20Corporate%20Office!5e0!3m2!1sen!2sbd!4v1760588120690!5m2!1sen!2sbd"
              width="100%"
              height="250"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
