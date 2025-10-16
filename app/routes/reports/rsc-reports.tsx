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
    <div className="w-[60rem] mx-auto py-10 sm:py-16">
      {/* title */}
      <div className="text-center text-2xl font-bold mb-16">
        <h1>RMG Sustainability Council (RSC) Reports</h1>
      </div>
      {/* content */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-10 pl-15">
        <Card className="max-w-[15rem] w-full text-center hover:scale-105 hover:shadow-2xl transition-all">
          <Link
            to={
              "https://dkglobalfashion-my.sharepoint.com/:b:/p/info/EdWvFAAo9SpHodc0VG1t2voBCHts2NJOYXvELroAo2aC0A?e=LMpQpS"
            }
            target="_blank"
            className="h-full"
          >
            <CardHeader>
              <CardTitle>Fire Safety</CardTitle>
              <CardDescription>View report pdf</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-3">
                <BsFire className="size-16 text-red-600" />
              </div>
            </CardContent>
          </Link>
        </Card>
        <Card className="max-w-[15rem] w-full text-center hover:scale-105 hover:shadow-2xl transition-all">
          <Link
            to={
              "https://dkglobalfashion-my.sharepoint.com/:b:/p/info/EdWvFAAo9SpHodc0VG1t2voBCHts2NJOYXvELroAo2aC0A?e=LMpQpS"
            }
            target="_blank"
            className="h-full"
          >
            <CardHeader>
              <CardTitle>Structural Safety</CardTitle>
              <CardDescription>View report pdf</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-3">
                <BsBuildingsFill className="size-16 text-green-600" />
              </div>
            </CardContent>
          </Link>
        </Card>
        <Card className="max-w-[15rem] w-full text-center hover:scale-105 hover:shadow-2xl transition-all">
          <Link
            to={
              "https://dkglobalfashion-my.sharepoint.com/:b:/p/info/EdWvFAAo9SpHodc0VG1t2voBCHts2NJOYXvELroAo2aC0A?e=LMpQpS"
            }
            target="_blank"
            className="h-full"
          >
            <CardHeader>
              <CardTitle>Electrical Safety</CardTitle>
              <CardDescription>View report pdf</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-3">
                <MdElectricalServices className="size-16 text-red-600" />
              </div>
            </CardContent>
          </Link>
        </Card>
        <Card className="max-w-[15rem] w-full text-center hover:scale-105 hover:shadow-2xl transition-all">
          <Link
            to={
              "https://dkglobalfashion-my.sharepoint.com/:b:/p/info/EdWvFAAo9SpHodc0VG1t2voBCHts2NJOYXvELroAo2aC0A?e=LMpQpS"
            }
            target="_blank"
            className="h-full"
          >
            <CardHeader>
              <CardTitle>Workers Safety</CardTitle>
              <CardDescription>View report pdf</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-3">
                <GrUserWorker className="size-16 text-blue-600" />
              </div>
            </CardContent>
          </Link>
        </Card>
        <Card className="max-w-[15rem] w-full text-center hover:scale-105 hover:shadow-2xl transition-all">
          <Link
            to={
              "https://dkglobalfashion-my.sharepoint.com/:b:/p/info/EdWvFAAo9SpHodc0VG1t2voBCHts2NJOYXvELroAo2aC0A?e=LMpQpS"
            }
            target="_blank"
            className="h-full"
          >
            <CardHeader>
              <CardTitle>Fire Safety</CardTitle>
              <CardDescription>View report pdf</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center p-3">
                <GiProgression className="size-16" />
              </div>
            </CardContent>
          </Link>
        </Card>
      </div>
    </div>
  );
};

export default RSCReports;
