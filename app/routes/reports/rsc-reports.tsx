import React from "react";
import { Link } from "react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { BsFire, BsBuildingsFill } from "react-icons/bs";
import { MdElectricalServices } from "react-icons/md";
import { GrUserWorker } from "react-icons/gr";
import { GiProgression } from "react-icons/gi";

const RSCReports = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 sm:py-16">
      {/* title */}
      <div className="text-center text-2xl sm:text-3xl font-bold mb-10 sm:mb-16">
        <h1>RMG Sustainability Council (RSC) Reports</h1>
      </div>

      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-10 place-items-center">
        {[
          {
            title: "Fire Safety",
            icon: <BsFire className="size-16 text-red-600" />,
          },
          {
            title: "Structural Safety",
            icon: <BsBuildingsFill className="size-16 text-green-600" />,
          },
          {
            title: "Electrical Safety",
            icon: <MdElectricalServices className="size-16 text-red-600" />,
          },
          {
            title: "Workers Safety",
            icon: <GrUserWorker className="size-16 text-blue-600" />,
          },
          {
            title: "Progress Report",
            icon: <GiProgression className="size-16 text-gray-700" />,
          },
        ].map((item, i) => (
          <Card
            key={i}
            className="w-full max-w-[18rem] text-center hover:scale-105 hover:shadow-2xl transition-all"
          >
            <Link
              to="https://dkglobalfashion-my.sharepoint.com/:b:/p/info/EdWvFAAo9SpHodc0VG1t2voBCHts2NJOYXvELroAo2aC0A?e=LMpQpS"
              target="_blank"
              className="h-full block"
            >
              <CardHeader>
                <CardTitle>{item.title}</CardTitle>
                <CardDescription>View report pdf</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-center p-3">{item.icon}</div>
              </CardContent>
            </Link>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default RSCReports;
