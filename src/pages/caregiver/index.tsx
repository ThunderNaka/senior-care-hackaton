import React from "react";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import { Card } from "@/components/ui/card";
import CommonLayout from "@/layouts/CommonLayout";
import { Icon } from "@radix-ui/react-select";

const CaregiverDashboard = () => {
  return (
    <>
      <CommonLayout title="Hello Sophia!" className="justify-center">
        <Card className="relative mt-8">
          <Icons.ExclamationCircleIcon className="absolute -right-1 -top-2 h-12 w-12 rounded-full bg-peach-3 p-2 text-[#E4806D]" />
          <div className="flex items-center gap-4 text-xl">
            <span className="text-4xl">😢</span>
            Dad feels abandoned
          </div>
          <p className="text-right text-base text-gray-2">Today at 4:00 pm</p>
        </Card>
        <Card className="relative flex flex-col gap-6">
          <Icons.DocumentChartBarIcon className="absolute -right-1 -top-2 h-12 w-12 rounded-full bg-blue-3 p-2 text-[#5091D7]" />
          <h2 className="text-center text-xl font-medium">Daily Report</h2>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 text-base">
              <span className="text-2xl">💬</span>
              Dad reported having taken his medications, feeling sad, missing
              you and other family members, and experiencing anxiety.
            </div>
            <div className="flex gap-2 text-base">
              <span className="text-2xl">🎯</span>
              He also engaged in a memory counseling game and performed well.
            </div>
            <div className="flex gap-2 text-base">
              <span className="text-2xl">🧠</span>
              There are no apparent issues with his memory.
            </div>
          </div>
          <p className="text-right text-base text-gray-2">Wed, Oct 27, 2023</p>
        </Card>
      </CommonLayout>
      <div className="shadow-navbar fixed bottom-0 flex w-full max-w-md justify-between px-12 py-5">
        <Link
          href="/caregiver"
          className="flex flex-col items-center hover:text-purple-600"
        >
          <Icons.MaterialHome className="h-8 w-8" />
          Home
        </Link>
        <Link
          href="/caregiver/settings"
          className="flex flex-col items-center hover:text-purple-600"
        >
          <Icons.MaterialUser className="h-8 w-8" />
          Settings
        </Link>
      </div>
    </>
  );
};

export default CaregiverDashboard;
