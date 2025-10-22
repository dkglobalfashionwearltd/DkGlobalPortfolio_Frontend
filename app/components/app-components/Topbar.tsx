import React, { useEffect } from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "~/redux/hooks/hook";
import { getCompanyInfo } from "~/redux/features/companyInfoSlice";
import { Link } from "react-router";
import { Skeleton } from "../ui/skeleton";

const Topbar = () => {
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
    <div className="w-full bg-gray-900 text-gray-100 text-sm">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 py-2 gap-2">
        {/* Contact Info */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            to={`mailto:${data?.result?.email}`}
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            <EnvelopeIcon className="h-4 w-4" />
            {loading ? <Skeleton className="h-4 w-32" /> : data?.result?.email}
          </Link>
          <Link
            to={`tel:${data?.result?.phoneNumber}`}
            className="flex items-center gap-1 hover:text-blue-400 transition"
          >
            <PhoneIcon className="h-4 w-4" />
            {loading ? (
              <Skeleton className="h-4 w-32" />
            ) : (
              data?.result?.phoneNumber
            )}
          </Link>
        </div>

        {/* Social Media Links */}
        <div className="flex items-center gap-3">
          <Link
            to={data?.result?.facebookLink ?? "https://facebook.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition"
          >
            <FaFacebookF />
          </Link>
          <Link
            to={data?.result?.facebookLink ?? "https://twitter.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </Link>
          <Link
            to={data?.result?.facebookLink ?? "https://linkedin.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to={data?.result?.facebookLink ?? "https://instagram.com"}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
          >
            <FaInstagram />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
